# TCP服务器

## 服务端

```php

//创建Server对象，监听 127.0.0.1:9501端口
$serv = new swoole_server("127.0.0.1", 9501);

$serv->set([
    'work_num'    => 8, // worker进程数 cpu 1-4
    'max_request' => 10000,
]);

//监听连接进入事件
/**
 * $fd 客户端连接的唯一标识
 * $reactor_id 线程ID
 */
$serv->on('connect', function ($serv, $fd, $reactor_id) {
    echo "Client: {$reactor_id} - {$fd} - Connect.\n";
});

//监听数据接收事件
$serv->on('receive', function ($serv, $fd, $reactor_id, $data) {
    $serv->send($fd, "Server: {$reactor_id} - {$fd} - " . $data . "\n");
});

//监听连接关闭事件
$serv->on('close', function ($serv, $fd) {
    echo "Client: Close.\n";
});

//启动服务器
$serv->start();

```

## 客户端

```php

// 连接swoole tcp服务器

$client = new swoole_client(SWOOLE_SOCK_TCP);

if (!$client->connect("127.0.0.1", 9501)) {
    echo "连接失败";
    exit;
}

// php cli常量
fwrite(STDOUT, "请输入消息：");
$msg = trim(fgets(STDIN));

// 发送消息给 tcp server 服务器
$client->send($msg);

// 接受来自server的数据
$result = $client->recv();
echo $result;

```

## 命令测试

```bash

telnet 127.0.0.1 9501             # 测试连接TCP服务器

```
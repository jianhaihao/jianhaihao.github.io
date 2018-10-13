# UDP服务器

## 服务端

```php

//创建Server对象，监听 127.0.0.1:9502端口，类型为SWOOLE_SOCK_UDP
$serv = new swoole_server("127.0.0.1", 9502, SWOOLE_PROCESS, SWOOLE_SOCK_UDP); 

//监听数据接收事件
$serv->on('Packet', function ($serv, $data, $clientInfo) {
    $serv->sendto($clientInfo['address'], $clientInfo['port'], "Server ".$data);
    var_dump($clientInfo);
});

//启动服务器
$serv->start(); 

```

## 客户端

```php

// 连接swoole udp服务器

$client = new swoole_client(SWOOLE_SOCK_UDP);

if (!$client->connect("127.0.0.1", 9502)) {
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

nc -u 127.0.0.1 9502   # 测试连接UDP服务器

# 如果报 nc(或netcat) 命令不存在，执行下面命令：
yum -y install nc     # 安装nc

```
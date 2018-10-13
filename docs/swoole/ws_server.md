# WebSocket服务

## WebSocket 特点

* 建立在TCP协议之上
* 性能开销小，通信高效
* 客户端可以与任意服务器通信
* 协议标识符 `ws`、`wss`
* 持久化网络通信协议

## 服务端

```php

//创建websocket服务器对象，监听0.0.0.0:8812端口
$ws = new swoole_websocket_server("0.0.0.0", 8812);

$ws->set([
    'enable_static_handler' => true,
    'document_root'         => '/home/haojianhai/swoole-study/assets',
]);

//监听WebSocket连接打开事件
$ws->on('open', function ($ws, $request) {
    var_dump($request->fd, $request->get, $request->server);
    $ws->push($request->fd, "hello, welcome\n");
});

//监听WebSocket消息事件
$ws->on('message', function ($ws, $frame) {
    echo "Message: {$frame->data}\n";
    $ws->push($frame->fd, "server: {$frame->data}");
});

//监听WebSocket连接关闭事件
$ws->on('close', function ($ws, $fd) {
    echo "client-{$fd} is closed\n";
});

$ws->start();

```

## 客户端

```bash

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>ws_client</title>
</head>
<body>

	<h1>ws测试</h1>

	<script type="text/javascript">
		var wsURL = 'ws://192.168.31.54:8812';

		var websocket = new WebSocket(wsURL);

		// 实例对象的onopen属性
		websocket.onopen = function(evt){
			websocket.send("hello-jianhaihao");
			console.log("connected-swoole-websocket-success");
		}

		// 实例化 onmessage
		websocket.onmessage = function(evt){
			console.log("ws-server-retunrn-data:" + evt.data);
		}
		
		// onclose
		websocket.onclose = function(evt){
			console.log("close");
		}

		// onerror
		websocket.onerror = function(evt, e){
			console.log("error: " + evt.data);
		}

	</script>
</body>
</html>

```

## 服务端优化

```php

/**
 * Ws 优化 基础类库
 */
class Ws
{
    const HOST = "0.0.0.0";
    const PORT = 8812;

    public $ws = null;

    public function __construct()
    {
        $this->ws = new swoole_websocket_server(self::HOST, self::PORT);

        $this->ws->on("open", [$this, "onOpen"]);
        $this->ws->on("message", [$this, "onMessage"]);
        $this->ws->on("close", [$this, "onClose"]);

        $this->ws->start();
    }

    /**
     * 监听ws连接事件
     * @param  $ws
     * @param  $request
     */
    public function onOpen($ws, $request)
    {
        var_dump($request->fd);
    }

    /**
     * 监听ws消息事件
     * @param  $ws
     * @param  $frame
     */
    public function onMessage($ws, $frame)
    {
        echo "ser-push-message: {$frame->data}\n";
        $ws->push($frame->fd, "server-push: " . date("Y-m-d H:i:s"));
    }

    /**
     * close
     * @param  $ws
     * @param  $fd
     */
    public function onClose($ws, $fd)
    {
        echo "client-colse-id: {$fd}\n";
    }
}

// 实例化类调用
$obj = new Ws();

```


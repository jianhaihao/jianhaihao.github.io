# HttpServer服务器

## 服务端

```php

$http = new swoole_http_server("0.0.0.0", 8811);

$http->set([
    'enable_static_handler' => true,
    'document_root'         => '/home/haojianhai/swoole-study/assets',
]);

$http->on('request', function ($request, $response) {
    $response->end("<meta charset='utf-8'><h1>http_server</h1><br />参数：" . json_encode($request->get));
});

$http->start();

```

## 客户端

```bash

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>测试</title>
</head>
<body>
	<h1>这是http_server呈现的静态资源内容</h1>
</body>
</html>

```

## 命令测试

```bash

curl http://127.0.0.1:8811   # 测试http服务器

```
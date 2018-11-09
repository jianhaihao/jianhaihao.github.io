# API常用知识

> 针对Yii2.0-basic系列

[官网](https://www.yiichina.com)  [文档](https://www.yiichina.com/doc/guide/2.0)

## 中断响应

```php

use Yii;

/**
 * 【error】校验未通过，抛出异常
 */
protected function createResponse($code, $msg)
{
    $this->data['code'] = $code;
    $this->data['msg']  = $msg;

    $response       = Yii::$app->response;
    $response->data = $this->data;
    $response->send();
    die();       // 需强制中断执行
}

```

## 格式化报错信息&&跨域访问

编辑：根目录/config/web.php

```php

'components' => [
    'response'     => [
        'class'         => 'yii\web\Response',
        'on beforeSend' => function ($event) {
            $response = $event->sender;
            if ($response->statusCode !== 200) {
                $exception      = Yii::$app->getErrorHandler()->exception;
                $response->data = [
                    'code' => 0,
                    'msg'  => '内部服务器错误',
                    'data' => [],
                    'err'  => [
                        'info' => $exception->getMessage(),
                        'file' => $exception->getFile(),
                        'line' => $exception->getLine(),
                    ],
                ];
            }

            // 跨域设置
            $response->headers->set('Access-Control-Allow-Origin', '*');
            $response->headers->set('Access-Control-Allow-Headers', '*');

            $response->format = yii\web\Response::FORMAT_JSON;
        },
    ],
],

```

## 接受不到json请求数据

编辑：根目录/config/web.php

```php

'components' => [
    'request'      => [
        // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
        'cookieValidationKey' => '********************',
        // 设置接收json数据
        'parsers'             => [
            'application/json' => 'yii\web\JsonParser',
        ],
    ],
],

```

## 美化路由

```php

# 路由重写

### Apache

添加文件：根目录/web/.htaccess
***********文件内容开始线(请勿复制该线)******************
RewriteEngine on
# 如果请求的是真实存在的文件或目录，直接访问
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
# 如果请求的不是真实文件或目录，分发请求至 index.php
RewriteRule . index.php
***********文件内容结束线(请勿复制该线)*******************

# 编辑：根目录/config/web.php

'components' => [
    'urlManager'   => [
        'enablePrettyUrl'     => true,   // 启用美化URL
        'showScriptName'      => false,  // 在URL路径中是否显示脚本入口文件
        'enableStrictParsing' => false,  // 是否执行严格的url解析
        'suffix'              => '',     // 路由后缀名
        'rules' => [
            '<controller:\w+>/<action:\w+>'=>'<controller>/<action>',
        ],
    ],
],

```

## 添加模块

编辑：根目录/config/web.php

```php

'components' => [
    'urlManager'   => [
        'enablePrettyUrl'     => true,
        'showScriptName'      => false,
        'enableStrictParsing' => false,
        'suffix'              => '',
        'rules'               => [
            'v1/platform/<controller>/<action>' => 'v1_platform/<controller>/<action>',
            'v1/shop/<controller>/<action>'     => 'v1_shop/<controller>/<action>',
            'v1/user/<controller>/<action>'     => 'v1_user/<controller>/<action>',
        ],
    ],
],
'modules'    => [
    'v1_platform' => [
        'class' => 'app\modules\v1\platform\module',
    ],
    'v1_shop'     => [
        'class' => 'app\modules\v1\shop\module',
    ],
    'v1_user'     => [
        'class' => 'app\modules\v1\user\module',
    ],
],

```

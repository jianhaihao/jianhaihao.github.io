# API常用知识

>针对ThinkPHP5.0系列

[官网](http://www.thinkphp.cn)  [文档](https://www.kancloud.cn/manual/thinkphp5/118003)

## 中断响应

```php

use think\Response;
use think\exception\HttpResponseException;

/**
 * 【error】校验未通过，抛出异常
 */
protected function createResponse($code, $msg)
{
    $this->data['code'] = $code;
    $this->data['msg']  = $msg;

    $response = Response::create($this->data, 'json');
    throw new HttpResponseException($response);
}

```

## 格式化报错信息

根目录/application/config.php

```php

// 异常页面的模板文件
'exception_tmpl'         => THINK_PATH . 'tpl' . DS . 'think_exception.tpl',
// 错误显示信息,非调试模式有效
'error_message'          => '',
// 显示错误信息
'show_error_msg'         => false,
// 异常处理handle类 留空使用 \think\exception\Handle
'exception_handle'       => function (Exception $e) {
    return json(['code' => 0, 'data' => [], 'msg' => $e->getMessage()]);
},

```

## 跨域访问

添加文件：根目录/application/common/behavior/CronRun.php

```php

<?php
namespace app\common\behavior;

use think\Response;

/**
 * 跨域处理
 */
class CronRun
{
    public function run(&$dispatch)
    {
        $host_name = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : "*";
        $headers   = [
            "Access-Control-Allow-Origin"      => $host_name,
            "Access-Control-Allow-Credentials" => 'true',
            "Access-Control-Allow-Headers"     => "auth,client-type,content-type,token",
        ];
        if ($dispatch instanceof Response) {
            $dispatch->header($headers);
        } else if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            $dispatch['type']     = 'response';
            $response             = new Response('', 200, $headers);
            $dispatch['response'] = $response;
        }
    }
}

```

## 路由重写

```php

# 路由重写

### Apache

添加文件：根目录/.htaccess
***********文件内容开始线(请勿复制该线)******************
<IfModule mod_rewrite.c>
Options +FollowSymlinks -Multiviews
RewriteEngine on

RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ index.php?/$1 [QSA,PT,L]
</IfModule>
***********文件内容结束线(请勿复制该线)*******************

### IIS

添加文件：根目录/web.config
***********文件内容开始线(请勿复制该线)******************
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
    <rewrite>
        <rules>
            <rule name="OrgPage" stopProcessing="true">
                <match url="^(.*)$" />
                <conditions logicalGrouping="MatchAll">
                    <add input="{HTTP_HOST}" pattern="^(.*)$" />
                    <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
                    <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
                </conditions>
                <action type="Rewrite" url="index.php/{R:1}" />
            </rule>
        </rules>
     </rewrite>
        <httpErrors errorMode="Detailed" />
    </system.webServer>
</configuration>
***********文件内容结束线(请勿复制该线)*******************

```
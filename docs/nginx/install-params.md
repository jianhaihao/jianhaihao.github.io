# 安装基本参数 

## 安装目录

```bash
rpm -ql nginx # 查看应用程序的相关目录
```

| 目录 | 作用|
| -- | -- |
|/etc/logrotate.d/nginx| 配置文件 Nginx 日志轮转，用于 logrotate 服务的日志切割|
|/etc/nginx/ </br> /etc/nginx/nginx/conf </br> /etc/nginx/conf.d/\* | Nginx 主要配置文件|
| /etc/nginx/fastcgi_params </br> /etc/nginx/uwsgi_pamars </br> /etc/nginx/scgi_params | cgi 配置
| /etc/nginx/koi-utf </br> /etc/nginx/koi-win </br> /etc/nginx/win-utf | 编码转换映射文件|
| /etc/nginx/mime.types | 设置 http 协议的 Content-Type 与扩展名的对应关系|
| /usr/lib/systemd/system/nginx-debug.service </br> /usr/lib/systemd/system/nginx.service </br> /etc/sysconfig/nginx </br> /etc/sysconfig/nginx-debug | 配置系统守护进程管理方式|
| /usr/lib64/nginx/modules/\* </br> /etc/nginx/modules/\* | Nginx 模块目录|
| /usr/sbin/nginx </br> /usr/sbin/nginx-debug | Nginx 服务的启动管理的终端命令|
| /usr/share/doc/nginx-1.14.0/COPYRIGHT </br> /usr/share/man/man8/nginx.8.gz | Nginx 的手册和帮助文件|
| /var/cache/nginx/\* | Nginx 缓存目录|
| /var/log/nginx/\* | Nginx 日志目录|


## 安装编译参数
 
 ```bash
 nginx -V
 ```
 
 | 编译选项 | 作用|
 | -- | -- |
 | --prefix=/etc/nginx </br> --sbin-path=/usr/sbin/nginx  </br>  --modules-path=/usr/lib64/nginx/modules </br> --conf-path=/etc/nginx/nginx.conf </br> --error-log-path=/var/log/nginx/error.log </br> --http-log-path=/var/log/nginx/access.log </br> --pid-path=/var/run/nginx.pid </br> --lock-path=/var/run/nginx.lock | 安装目录或路径 |
 |--http-client-body-temp-path=/var/cache/nginx/client_temp </br> --http-proxy-temp-path=/var/cache/nginx/proxy_temp </br> --http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp </br> --http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp </br> --http-scgi-temp-path=/var/cache/nginx/scgi_temp | 执行对应模块， Nginx 所保留的临时性文件 |
 | --user=nginx </br> --group=nginx | 设定 Nginx 进程启动的用户和组用户 |
| --with-cc-opt=parameters | 设置额外的参数将被添加到 CFLAGS 变量|
| --with-ld-opt=parametes | 设置附加的参数，链接系统库|


# 搭建Linux应用

工具：`yum` `docker`   
服务端：`swoft`   
应用端：`yii2.0`   

## 安装基础组件

```bash

yum update

yum -y install lrzsz   # 安装rz/sz命令

yum -y install git  # 安装git

# 安装 composer
curl -sS https://getcomposer.org/installer | php   # 下载 composer.phar 文件（注意要关闭翻墙）

mv composer.phar /usr/local/bin/composer   # 设置为全局可访问

# 如果报错以下问题
/usr/bin/env: php: No such file or directory
# 执行下面命令
ln -s /home/php/bin/php /usr/local/bin/php   # 将php的实际安装目录指向/usr/local/bin/php

composer -v    # 查看composer版本，确定是否安装成功

composer selfupdate   # 升级composer

# 更换composer镜像源:
composer config -g repo.packagist composer https://packagist.laravel-china.org

```

## 安装php7

```bash

# 如果之前已经安装我们先卸载一下
yum -y remove php*

# 更改yum源
rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm 
rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm

# 安装php72w和各种拓展
yum -y install php72w php72w-cli php72w-common php72w-devel php72w-embedded php72w-fpm php72w-gd php72w-mbstring php72w-mysqlnd php72w-opcache php72w-pdo php72w-xml

# 查看当前php版本
php -v

# 开启php-fpm
systemctl start php-fpm
# 关闭php-fpm
systemctl stop php-fpm
# 重启php-fpm
systemctl restart php-fpm

```

## 安装nginx

```bash

# 添加yum源
rpm -Uvh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm

yum install -y nginx

# 启动Nginx并设置开机自动运行
systemctl start nginx.service
systemctl enable nginx.service

# 开启nginx
systemctl start nginx
# 关闭nginx
systemctl stop nginx
# 重启nginx
systemctl restart nginx

```

## 安装mysql

```bash

# 添加yum源
rpm -Uvh http://dev.mysql.com/get/mysql57-community-release-el7-7.noarch.rpm

yum install mysql-community-server

# 启动mysql服务
service mysqld start

# 第一次启动后，mysql5.7会生成一个随机root密码，并放到了/var/log/mysqld.log日志中
# 使用 grep 'temporary password'  /var/log/mysqld.log 这个命令读取root初始密码
2018-11-26T15:08:41.595259Z 1 [Note] A temporary password is generated for root@localhost: owMP7Z(obmB-
# 初始密码为 owMP7Z(obmB-

# 使用 mysql -u root -p 然后输入上面的密码进入
ALTER USER USER() IDENTIFIED BY '123456';  # 修改登录的用户密码改成123456
# mysql5.7默认对密码进行强校验，建议设置为一个较为复杂的密码，否则会报错

# mysql5.7密码校验
# 0 or LOW	Length
# 1 or MEDIUM	Length; numeric, lowercase/uppercase, and special characters
# 2 or STRONG	Length; numeric, lowercase/uppercase, and special characters; dictionary file
# (默认validate_password_policy = 1)

# 如果需要把密码设置的简单一些，执行以下命令：
set global validate_password_policy=0;

# 设置简单的密码：
ALTER USER USER() IDENTIFIED BY '12345678';  # 默认需要密码长度为8位

# 如需再次进入mysql, 重新设置密码

# 切换到mysql数据表
use mysql
# 修改密码
update mysql.user set authentication_string=PASSWORD('12345678') where user='root';

# 修改密码后，需要重新启动mysql，新密码才会生效

# 重启mysql服务
service mysqld stop
service mysqld start

# 设置外网可访问
use mysql;
update user set host = '%' where user = 'root'; 
select host,user from user; 
flush privileges;

```

## 安装docker

```bash

# 移除旧的版本：
sudo yum remove docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-selinux docker-engine-selinux docker-engine

# 安装一些必要的系统工具：
sudo yum install -y yum-utils device-mapper-persistent-data lvm2

# 添加软件源信息：
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

# 更新 yum 缓存：
sudo yum makecache fast

# 安装 Docker-ce：
sudo yum -y install docker-ce

# 启动 Docker 后台服务
sudo systemctl start docker

# 镜像加速
vi /etc/docker/daemon.json     # 如没有该文件，请先新建一个

# 新建daemon.json文件
###############################################################
cd /etc/docker/
touch daemon.json
###############################################################

# 文件内容
###############################################################
{
  "registry-mirrors": ["http://hub-mirror.c.163.com"]
}
###############################################################

# 如需删除Docker CE，执行以下命令
sudo yum remove docker-ce
sudo rm -rf /var/lib/docker

```

## 安装swoft

```bash

docker pull swoft/swoft

docker run -p 8080:80 --name swoft  --rm -d swoft/swoft:latest

# 拷贝容器文件到本地
cd /home/
docker cp swoft:/var/www/swoft .  # 注意点号，表示拷贝到当前目录

# 从本地文件运行swoft容器：
docker run -p 8080:80 --name swoft -v /home/swoft/:/var/www/swoft --rm -d swoft/swoft:latest

docker run -p 8080:80 --name swoft -v /home/WancllMS-Server/swoft/:/var/www/swoft --rm -d swoft/swoft:latest

# 查看运行的容器
docker ps

# 停止容器
docker stop swoft

# 重启容器
docker restart swoft

```

## 配置nginx虚拟机


```bash

# 配置Http

server {
    listen 80;
    server_name www.demo.com;
    root   /home/demo/yii/web/;

    location / {
        index index.html index.htm index.php;
        autoindex off;

        if (!-e $request_filename) {
            rewrite  ^(.*)$  /index.php?s=/$1  last;
            break;
        }
    }

    location ~ \.php(.*)$ {
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_split_path_info ^((?U).+\.php)(/?.+)$;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param PATH_INFO $fastcgi_path_info;
        fastcgi_param PATH_TRANSLATED $document_root$fastcgi_path_info;
        include  fastcgi_params;
    }
}

#############################分割线##################################

# 配置Https

server {
    listen 80;
    server_name www.demo.com;
    return 301 https://$server_name$request_uri; 
}

server {
    listen 443;
    server_name www.demo.com;
    root   /home/demo/yii/web/;

    ssl on;
    ssl_certificate  /etc/nginx/ssl/1_www.demo.com_bundle.crt;
    ssl_certificate_key  /etc/nginx/ssl/2_www.demo.com.key;

    location / {
        index index.html index.htm index.php;
        autoindex off;

        if (!-e $request_filename) {
            rewrite  ^(.*)$  /index.php?s=/$1  last;
            break;
        }
    }

    location ~ \.php(.*)$ {
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_split_path_info ^((?U).+\.php)(/?.+)$;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param PATH_INFO $fastcgi_path_info;
        fastcgi_param PATH_TRANSLATED $document_root$fastcgi_path_info;
        include  fastcgi_params;
    }
}

```

## 设置文件权限
```bash

# 修改文件上传权限
cd /home/demo/yii/web/
chmod 757 uploads

# 修改缓存文件权限
cd /home/demo/yii/runtime/
chmod 757 cache

```
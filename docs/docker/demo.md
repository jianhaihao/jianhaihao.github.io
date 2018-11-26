# Docker搭建应用

## CentOS Docker 安装

### Docker支持以下的CentOS版本：  
CentOS 7 (64-bit)  
CentOS 6.5 (64-bit) 或更高的版本 

### 前提条件
目前，CentOS 仅发行版本中的内核支持 Docker。   
在CentOS 7 上，要求系统64位、内核版本为 3.10 以上。   
在CentOS-6.5 或更高的版本的 CentOS 上，要求系统为64位、内核版本为 2.6.32-431 或者更高版本。  

```bash
# 验证CentOS 版本是否支持 Docker
uname -r    # 查看内核版本
``` 

### 安装Docker

从 2017 年 3 月开始 docker 在原来的基础上分为两个分支版本: `Docker CE` 和 `Docker EE`。   
Docker CE 即社区免费版，Docker EE 即企业版，强调安全，但需付费使用。   
本文介绍 Docker CE 的安装使用。

```bash

# 使用 sudo 或 root 权限登录 Centos

sudo yum update    # 确保yum包更新到最新

# 执行 Docker 安装脚本
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# 启动Docker进程
sudo systemctl start docker

# 验证docker是否安装成功并在容器中执行一个测试的镜像
sudo docker run hello-world
docker images

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

# 删除Docker CE
sudo yum remove docker-ce
sudo rm -rf /var/lib/docker

```

### Docker 使用


```bash

## Docker Hello World ##

# Docker 允许你在容器内运行应用程序， 使用 docker run 命令来在容器内运行一个应用程序，输出Hello world
docker run ubuntu:15.10 /bin/echo "Hello world"

# 各个参数解析：
# docker: Docker 的二进制执行文件。
# run:与前面的 docker 组合来运行一个容器。
# ubuntu:15.10指定要运行的镜像，Docker首先从本地主机上查找镜像是否存在，如果不存在，Docker 就会从镜像仓库 Docker Hub 下载公共镜像。
# /bin/echo "Hello world": 在启动的容器里执行的命令
# 以上命令完整的意思为：Docker 以 ubuntu15.10 镜像创建一个新容器，然后在容器里执行 bin/echo "Hello world"，然后输出结果。

########################分割线###################################

## 运行交互式的容器 ##

# 通过docker的两个参数 -i -t，让docker运行的容器实现"对话"的能力
docker run -i -t ubuntu:15.10 /bin/bash

# 各个参数解析：
# -t:在新容器内指定一个伪终端或终端
# -i:允许你对容器内的标准输入 (STDIN) 进行交互
# 此时我们已进入一个 ubuntu15.10系统的容器

cat /proc/version  # 查看当前系统的版本信息
ls                 # 当前目录下的文件列表

# 运行exit命令或者使用CTRL+D来退出容器。

########################分割线#####################################

## 启动容器（后台模式） ##

# 创建一个以进程方式运行的容器
docker run -d ubuntu:15.10 /bin/sh -c "while true; do echo hello world; sleep 1; done"
# 返回的一段字符串，为容器ID，可以通过容器ID来查看对应的容器发生了什么。

docker ps     # 查看运行容器

docker logs [容器ID 或 容器名称]  # 查看容器日志信息

docker stop [容器ID 或 容器名称]  # 停止容器

########################分割线#####################################

```

#### Docker容器使用

```bash

## 运行一个web应用 ##

docker pull training/webapp    # 载入镜像

docker run -d -P training/webapp python app.py
# 参数说明:
# -d:让容器在后台运行
# -P:将容器内部使用的网络端口映射到我们使用的主机上

docker ps   # 查看运行容器
# 此时，可以看到端口信息
PORTS
0.0.0.0:32769->5000/tcp
# Docker 开放了 5000 端口（默认 Python Flask 端口）映射到主机端口 32769 上

# 通过浏览器访问WEB应用
192.168.217.10:32769

# 也可以通过 -p 参数来设置不一样的端口：
docker run -d -p 5000:5000 training/webapp python app.py
# 容器内部的 5000 端口映射到我们本地主机的 5000 端口上。

########################分割线###################################

## 网络端口的快捷方式 ##
docker port [容器ID 或 容器名称]  # 查看容器端口的映射情况

########################分割线###################################

## 查看 WEB 应用程序日志 ##
docker logs [容器ID 或 容器名称]  # 查看容器内部的标准输出

docker logs -f [容器ID 或 容器名称]   # 让 docker logs 像使用 tail -f 一样来输出容器内部的标准输出。

########################分割线###################################

## 查看WEB应用程序容器的进程 ##
docker top [容器ID 或 容器名称]  # 查看容器内部运行的进程

########################分割线###################################

## 检查 WEB 应用程序 ##
docker inspect [容器ID 或 容器名称]  # 查看 Docker 的底层信息
# 返回一个 JSON 文件记录着 Docker 容器的配置和状态信息

########################分割线###################################

## 停止 WEB 应用容器 ##
docker stop [容器ID 或 容器名称]  # 停止容器

########################分割线###################################

## 重启WEB应用容器 ##
docker start [容器ID 或 容器名称]  # 已经停止的容器，使用 docker start 来启动

docker ps -l        # 查询最后一次创建的容器  

docker restart [容器ID 或 容器名称]  # 正在运行的容器，使用 docker restart 来重启

########################分割线###################################

## 移除WEB应用容器 ##
docker rm [容器ID 或 容器名称]  # 删除不需要的容器
# 删除容器时，容器必须是停止状态，否则会报错

########################分割线###################################

```

#### Docker 镜像使用

当运行容器时，使用的镜像如果在本地中不存在，docker 就会自动从 docker 镜像仓库中下载；   
默认是从 Docker Hub 公共镜像源下载。

```bash

## 列出镜像列表 ##

docker images     # 列出本地主机上的镜像

# 各个选项说明:
# REPOSITORY：表示镜像的仓库源
# TAG：镜像的标签
# IMAGE ID：镜像ID
# CREATED：镜像创建时间
# SIZE：镜像大小

# 同一仓库源可以有多个 TAG，代表这个仓库源的不同个版本
# 如ubuntu仓库源里，有15.10、14.04等多个不同的版本，可以使用 REPOSITORY:TAG 来定义不同的镜像。

# 使用版本为15.10的ubuntu系统镜像来运行容器：
docker run -t -i ubuntu:15.10 /bin/bash 
# 使用版本为14.04的ubuntu系统镜像来运行容器：
docker run -t -i ubuntu:14.04 /bin/bash

# 如果不指定一个镜像的版本标签，默认使用latest镜像

########################分割线###################################

## 获取一个新的镜像 ##
docker pull [镜像名称:镜像标签]  # 获取新镜像

########################分割线###################################

## 查找镜像 ##
docker search [待查找内容]  # 查找镜像

# NAME:镜像仓库源的名称
# DESCRIPTION:镜像的描述
# OFFICIAL:是否docker官方发布
# 查找地址：https://hub.docker.com/

########################分割线###################################

## 创建镜像 ##

# 当从docker镜像仓库中下载的镜像不能满足需求时，可以通过以下两种方式对镜像进行更改：
# 1.从已经创建的容器中更新镜像，并且提交这个镜像
# 2.使用 Dockerfile 指令来创建一个新的镜像

########################分割线###################################

```

## 搭建php7和nginx运行环境

```bash

# 下载相关镜像
docker pull nginx
docker pull php:7.2.12-fpm

# 建立相关目录
mkdir -p /home/www
mkdir -p /home/nginx/conf.d

# 编辑default.conf
vim /home/nginx/conf.d/default.conf
######################文件内容开始分割线###################################
server {
  listen  80 default_server;
  server_name _;
  root   /usr/share/nginx/html;
 
  location / {
   index index.html index.htm index.php;
   autoindex off;
  }
  location ~ \.php(.*)$ {
   root   /var/www/html/;
   fastcgi_pass 172.17.0.2:9000;
   fastcgi_index index.php;
   fastcgi_split_path_info ^((?U).+\.php)(/?.+)$;
   fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
   fastcgi_param PATH_INFO $fastcgi_path_info;
   fastcgi_param PATH_TRANSLATED $document_root$fastcgi_path_info;
   include  fastcgi_params;
  }
}
######################文件内容结束分割线###################################

# 启动php环境
docker run -p 9000:9000 --name php -v /home/www/:/var/www/html/ --privileged=true --rm -d php:7.2.12-fpm

# 查看php镜像的ip地址
docker inspect --format='{{.NetworkSettings.IPAddress}}' php
172.17.0.2

# 修改default.conf配置文件，使fastcgi_pass的值为172.17.0.2:9000
vim /home/nginx/conf.d/default.conf
fastcgi_pass 172.17.0.2:9000;

# 启动nginx镜像
docker run -p 80:80 --name nginx -v /home/www:/usr/share/nginx/html -v /home/nginx/conf.d:/etc/nginx/conf.d --privileged=true --rm -d nginx

docker run -p 80:80 -p 443:443 --name nginxlog \
-v /usr/java/docker/nginxlog/log/:/var/log/nginx:rw \
-v /usr/java/docker/nginxlog/conf.d/:/etc/nginx/conf.d:rw \
-v /etc/letsencrypt:/etc/letsencrypt:rw \
-d nginx


# 查看镜像运行状态
docker ps

# 生成php测试文件info.php
echo "<?php phpinfo();" > /home/www/info.php
# 浏览器访问 http://localhost/info.php 验证

########################分割线###################################

# nginx虚拟机配置

# 以配置www.demo.com虚拟机为例,项目目录地址为/home/www/demo
vim /home/nginx/conf.d/demo.conf
######################文件内容开始分割线###################################
server {
	listen  80;
	server_name www.demo.com;
	root   /usr/share/nginx/html/demo/;

	location / {
		index index.html index.htm index.php;
		autoindex off;

		if (!-e $request_filename) {
			rewrite  ^(.*)$  /index.php?s=/$1  last;
			break;
		}
	}

	location ~ \.php(.*)$ {
		root   /var/www/html/demo/;
		fastcgi_pass 172.17.0.2:9000;
		fastcgi_index index.php;
		fastcgi_split_path_info ^((?U).+\.php)(/?.+)$;
		fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
		fastcgi_param PATH_INFO $fastcgi_path_info;
		fastcgi_param PATH_TRANSLATED $document_root$fastcgi_path_info;
		include  fastcgi_params;
	}
}
######################文件内容结束分割线###################################
# 注意上述文件两处root的配置！！！
# 因已指定宿主机的映射，这里 /usr/share/nginx/html 与 /var/www/html 目录实际就是宿主机的 /home/www 
# 但不可写为/home/www，否则会报File not found的错误，因为宿主机的配置是映射到容器目录的


########################分割线###################################

# 配置https

# 建立https证书放置文件夹ssl
mkdir -p /home/nginx/conf.d/ssl

# 放置https证书至宿主机/home/nginx/conf.d/ssl目录下

# 配置虚拟机文件
# 以配置www.demo.com虚拟机为例,项目目录地址为/home/www/demo
######################文件内容开始分割线###################################
server {
    listen 80;
    listen 443 ssl;
    server_name www.demo.com;
    root   /usr/share/nginx/html/demo/;

    ssl_certificate  /etc/nginx/conf.d/ssl/1_www.demo.com_bundle.crt;
    ssl_certificate_key  /etc/nginx/conf.d/ssl/2_www.demo.com.key;

    location / {
        index index.html index.htm index.php;
        autoindex off;

        if (!-e $request_filename) {
            rewrite  ^(.*)$  /index.php?s=/$1  last;
            break;
        }
    }

    location ~ \.php(.*)$ {
        root   /var/www/html/demo/;
        fastcgi_pass 172.17.0.2:9000;
        fastcgi_index index.php;
        fastcgi_split_path_info ^((?U).+\.php)(/?.+)$;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param PATH_INFO $fastcgi_path_info;
        fastcgi_param PATH_TRANSLATED $document_root$fastcgi_path_info;
        include  fastcgi_params;
    }
}
######################文件内容结束分割线###################################
# 注意上述文件两处root的配置！！！
# 因已指定宿主机的映射，
# /usr/share/nginx/html 与 /var/www/html 目录实际就是宿主机的 /home/www 
# /etc/nginx/conf.d 目录实际就是宿主机的 /home/nginx/conf.d

# 配置http访问自动跳转至https
######################文件内容开始分割线###################################
server {
    listen 80;
    server_name www.demo.com;
    return 301 https://$server_name$request_uri; 
}

server {
    listen 443;
    server_name www.demo.com;
    root   /usr/share/nginx/html/demo/;

    ssl on;
    ssl_certificate  /etc/nginx/conf.d/ssl/1_www.demo.com_bundle.crt;
    ssl_certificate_key  /etc/nginx/conf.d/ssl/2_www.demo.com.key;

    location / {
        index index.html index.htm index.php;
        autoindex off;

        if (!-e $request_filename) {
            rewrite  ^(.*)$  /index.php?s=/$1  last;
            break;
        }
    }

    location ~ \.php(.*)$ {
        root   /var/www/html/demo/;
        fastcgi_pass 172.17.0.2:9000;
        fastcgi_index index.php;
        fastcgi_split_path_info ^((?U).+\.php)(/?.+)$;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param PATH_INFO $fastcgi_path_info;
        fastcgi_param PATH_TRANSLATED $document_root$fastcgi_path_info;
        include  fastcgi_params;
    }
}
######################文件内容结束分割线###################################

```

## 安装mysql

```bash

docker pull mysql:5.6

docker run -p 3306:3306 --name mysql -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/logs:/logs -v /home/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --rm -d mysql:5.6

# 如外网连不上数据库，执行以下处理：
######################开始分割线###################################
# 进入MySQL容器
docker exec -it mysql /bin/bash

# 进入MySQL
mysql -uroot -p

# 切换到mysql数据表
use mysql

# 设置root帐号的密码
update user set authentication_string = password('123456') where user = 'root';

# 对root进行授权
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'root' WITH GRANT OPTION;
######################结束分割线###################################

```



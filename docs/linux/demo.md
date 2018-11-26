# linux服务器搭建完整应用

服务器环境：CentOS7.5(64位)

## 安装Docker

```bash

sudo wget -qO- https://get.docker.com | sh

#########################
# 若提示wget命令不存在，执行下面命令安装wget
yum -y install wget
#########################

sudo usermod -aG docker root

sudo service docker start

docker info

```

## 安装swoft

[swoft镜像](https://hub.docker.com/r/swoft/swoft/)  

```bash

# 确保docker开启，如未开启，执行以下命令：
sudo service docker start

docker pull swoft/swoft   # 获取swoft镜像

docker images     # 查看本地docker镜像

docker run -p 80:80 --name swoft  --rm -d swoft/swoft:latest   # 运行swoft容器

docker ps # 查看当前正在运行的docker容器

curl localhost  # 访问本地，查看swoft是否正常运行


# 拷贝容器文件到本地
cd /home/

docker cp swoft:/var/www/swoft .  # 注意点号，表示拷贝到当前目录

# 从本地文件运行swoft容器：
docker run -p 80:80 --name swoft --rm -d -v /home/swoft/:/var/www/swoft swoft/swoft:latest

# 停止容器
docker stop swoft

# 重启容器
docker restart swoft

# 查看docker日志
docker logs swoft

# 在docker容器执行其他语言命令
docker exec -it swoft [命令]   # 执行[命令]

docker exec -it swoft php -m   # 执行 php -m 命令

```

## 安装php

> PHP官网：[http://php.net](http://php.net)

```bash

# 安装文件上传与下载命令
yum -y install lrzsz
rz    # 上传文件
sz    # 下载文件

# 从php官网下载安装包，这里下载了 php-7.2.11.tar.gz

tar -zxvf php-7.2.11.tar.gz    # 解压缩文件

sudo yum install gcc gcc+ libxml2-devel  # 安装所需扩展命令

./configure --prefix=/home/php --enable-fpm  # 指定PHP安装路径

###############################################################
当配置PHP时出现  make: *** [ext/fileinfo/libmagic/apprentice.lo] Error 1 时
是因为服务器内存不足1G。
只需要在配置命令中添加 --disable-fileinfo即可 
###############################################################

make # 通过make命令进行构建编译

sudo make install  # 通过make install命令进行安装

###############################################################
# 简化PHP执行命令
vi ~/.bash_profile     # 编辑文件.bash_profile
# 在.bash_profile文件末尾添加：
alias php=/home/php/bin/php  # 配置php的实际安装路径
# 保存并退出
# 执行以下命令使配置生效
source ~/.bash_profile
###############################################################

###############################################################
# php.ini 文件设置
cd /home/php-7.2.11      # 进入解压后的php源码包中
cp php.ini-development /home/php/lib/   # 拷贝到php实际安装到的位置
mv php.ini-development php.ini     # 修改文件名称
php -i | grep php.ini      # 查看php.ini使用的文件是否正确
###############################################################

```

## 安装mysql

> Mysql下载地址：[https://dev.mysql.com/downloads/mysql/5.7.html#downloads](https://dev.mysql.com/downloads/mysql/5.7.html#downloads)

```bash

# 从官网下载安装包，这里下载了 mysql-5.7.24.tar.gz

tar -zxvf mysql-5.7.24.tar.gz    # 解压缩文件

sudo yum install cmake gcc-c++ ncurses-devel perl-Data-Dumper boost boost-doc boost-devel # 安装所需扩展命令

# 安装boost
cd /home/boost/
wget http://www.sourceforge.net/projects/boost/files/boost/1.59.0/boost_1_59_0.tar.gz
tar -xvzf boost_1_59_0.tar.gz

# 进入mysql解压后的目录，执行下面命令
cmake \
-DCMAKE_INSTALL_PREFIX=/home/mysql \
-DMYSQL_DATADIR=/home/mysql-data/data \
-DSYSCONFDIR=/etc \
-DMYSQL_USER=mysql \
-DWITH_MYISAM_ST0RAGE_ENGINE=1 \
-DWITH_INN0BASE_ST0RAGE_ENGINE=1 \
-DWITH_ARCHIVE_ST0RAGE_ENGINE=1 \
-DWITH_MEM0RY_ST0RAGE_ENGINE=1 \
-DWITH_READLINE=1 \
-DMYSQL_UNIX_ADDR=/var/run/mysql/mysql.sock \
-DMYSQL_TCP_PORT=3306 \
-DENABLED_L0CAL_INFILE=1 \
-DENABLE_D0WNL0ADS=1 \
-DWITH_PARTITI0N_ST0RAGE_ENGINE=1 \
-DEXTRA_CHARSETS=all \
-DDEFAULT_CHARSET=utf8mb4 \
-DDEFAULT_C0LLATI0N=utf8mb4_general_ci \
-DWITH_DEBUG=0 \
-DMYSQL_MAINTAINER_MODE=0 \
-DWITH_BOOST=/home/boost \
-DWITH_SSL:STRING=bundled \
-DWITH_ZLIB:STRING=bundled

make  # 执行make命令

sudo make install # 执行make install命令

```

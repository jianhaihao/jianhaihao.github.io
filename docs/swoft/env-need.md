# Swoft 环境需求

## 1. 按需安装系统缺少的扩展

```bash

yum -y install gcc  # 安装gcc

yum -y install libxml2 libxml2-devel # 安装libxml2

yum -y install m4   # 安装m4
 
yum -y install autoconf # 安装autoconf

yum -y install openssl  # 安装openssl

yum -y install openssl-devel   # 安装openssl-devel

yum -y install git  # 安装 git

yum -y install glibc-headers    # 安装 glibc-headers

yum -y install gcc-c++          # 安装 gcc-c++

yum -y install pcre-devel   # 安装 pcre-devel

yum -y install lrzsz   # 安装 lrzsz (用于上传与下载文件)

yum -y install zip  # 安装 zip

yum -y install unzip  # 安装 unzip

```

## 2. 安装PHP（`>7.0`）,推荐`7.1+`

```bash

1. 上传压缩包并减压，在减压后的文件夹下执行：

tar -zxvf php-7.2.11.tar.gz    # 解压缩文件

./configure --prefix=/home/php   # 指定PHP安装路径

make    # 通过make命令进行构建编译

make install   # 通过 make install 命令进行安装

2. 简化PHP执行命令：

vi ~/.bash_profile     # 编辑家目录下文件.bash_profile

# 在.bash_profile文件末尾添加：
alias php=/home/php/bin/php  # 配置php的实际安装路径
# 保存并退出

# 执行以下命令使配置生效
source ~/.bash_profile

3. php.ini 文件设置

cd /home/php-7.2.11      # 进入解压后的php源码包中

cp php.ini-development /home/php/lib/   # 拷贝到php实际安装到的位置

mv php.ini-development php.ini     # 修改文件名称

php -i | grep php.ini      # 查看php.ini使用的文件是否正确

```

## 3. 安装`swoole`扩展

```bash

git clone https://gitee.com/swoole/swoole.git  # 从 码云 上进行克隆

# 在swoole解压后的源码目录下运行phpize
/home/php/bin/phpize  # 运行该命令生成configure

./configure --with-php-config=/home/php/bin/php-config  # 执行编译

make    # 执行构建

make install  # 执行安装

# 设置php.ini
cd /home/php/lib   # 进入php.ini文件目录
extension=swoole   # 开启swoole扩展

```

## 4. 安装`redis`

[redis官网](https://redis.io)  
[redis命令](https://redis.io/commands)

```bash

tar -zxvf redis-4.0.11.tar.gz    # 上传压缩包并减压

cd redis-4.0.11      # 进入redis解压后的目录

make       # 执行make命令

cd src     # 进入src目录

./redis-server    # 启动redis

# 如需修改redis端口，执行以下：
cd /home/redis-4.0.11      # 进入redis的文件目录
vi redis.conf              # 编辑 redis.conf 文件
port 6379                  # 自定义 port的值，修改后保存退出即可

# 通过cli端连接redis
cd src     # 进入src目录

./redis-cli     # 开启cli端

set [key] [value]  # 设置键值

get [key]          # 获得指定键名的键值

del [key]          # 删除键值对

……

```

## 5. 安装`hiredis`库

[hiredis下载地址](https://github.com/redis/hiredis/releases)  

```bash

tar -zxvf hiredis-0.14.0.tar.gz    # 上传压缩包并减压

cd hiredis-0.14.0      # 进入hiredis解压后的目录

make -j    # 执行 make -j 命令

sudo make install  # 执行 make install 命令

sudo ldconfig    # 执行 ldconfig 命令

```

## 6. 重新编译swoole加入异步redis

重新编译swoole加入 `-enable-async-redis`

```bash

cd swoole  # 进入swoole的安装目录

./configure --with-php-config=/home/php/bin/php-config --enable-async-redis
                  
make clean 

make -j

sudo make install

=============================================================
# 如果此时执行php命令时报错，解决方法如下：
vi ~/.bash_profile     # 用vi打开当前用户的bash_profile
# 在最后一行添加
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib
# 执行下面命令使配置生效
source ~/.bash_profile
=============================================================

# 检查是否支持异步redis
php --ri swoole   # 如果返回结果有“ async redis client => enabled ”, 表示安装成功

```

## 7. 安装PHP包管理器`composer`

首先需要添加`openssl`扩展

```bash

cd /home/php-7.2.11/ext/openssl  # 进入解压后的php源码包中里面的openssl扩展中

/home/php/bin/phpize       # 执行phpize命令，注意自身系统的phpize路径

# 执行后，发现错误 无法找到config.m4 ，config0.m4就是config.m4。直接重命名

mv config0.m4 config.m4    # 重命名config0.m4为config.m4

/home/php/bin/phpize       # 再次执行phpize命令

./configure --with-openssl --with-php-config=/home/php/bin/php-config   # 生成configure文件

make    # 通过make命令进行构建编译

make install   # 通过 make install 命令进行安装

# 设置php.ini
cd /home/php/lib    # 进入php.ini所在目录

vi php.ini   # 编辑php.ini

# 在 php.ini 设置如下信息：
extension=openssl.so  # 添加openssl扩展

php -m  # 查看php扩展

```

下载安装 `composer`

```bash

curl -sS https://getcomposer.org/installer | php   # 下载 composer.phar 文件（注意要关闭翻墙）

mv composer.phar /usr/local/bin/composer   # 设置为全局可访问

# 报错一下问题
/usr/bin/env: php: No such file or directory
# 执行下面命令
ln -s /home/php/bin/php /usr/local/bin/php   # 将php的实际安装目录指向/usr/local/bin/php

composer -v    # 查看composer版本，确定是否安装成功

composer selfupdate   # 升级composer

# 更换composer镜像源:
composer config -g repo.packagist composer https://packagist.laravel-china.org

============================================================================================================================
# 错误：phpunit/phpunit 5.7.* requires ext-mbstring * -> the requested PHP extension mbstring is missing from your system.
# 解决办法： 配置php-mbstring扩展

cd /home/php-7.2.11/ext/mbstring/      # 进入php源码文件中自带的mbstring目录下

/home/php/bin/phpize       # 执行phpize命令

./configure --with-php-config=/home/php/bin/php-config    # 生成configure文件

make    # 通过make命令进行构建编译

make install   # 通过 make install 命令进行安装

# 设置php.ini
cd /home/php/lib    # 进入php.ini所在目录

vi php.ini   # 编辑php.ini

# 在 php.ini 设置如下信息：
extension=mbstring.so  # 添加openssl扩展

php -m  # 查看php扩展

=============================================================================================================================


```
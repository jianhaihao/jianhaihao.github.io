# Swoole 安装教程

Swoole 官网：[www.swoole.com](https://www.swoole.com/)

## 下载源码

```bash

git clone https://gitee.com/swoole/swoole.git  # 从 码云 上进行克隆

```

## 编译安装

通过PHP自带的工具phpize生成configure

```bash

在swoole源码目录下运行phpize

/home/haojianhai/soft/php/bin/phpize  # 运行该命令生成configure

运行phpize时如果出现：

Configuring for:
PHP Api Version:         20041225
Zend Module Api No:      20060613
Zend Extension Api No:   220060519
Cannot find autoconf. Please check your autoconf installation and the
$PHP_AUTOCONF environment variable. Then, rerun this script.

解决办法是：

yum install m4           # 安装m4
yum install autoconf     # 安装autoconf

```

**`phpize`是用来扩展php扩展模块的**


## 设置configure

```bash

./configure --with-php-config=/home/haojianhai/soft/php/bin/php-config   # 在swoole目录下执行该命令

运行以上命令如果报错：

configure: error: in `/home/haojianhai/swoole':
configure: error: C++ preprocessor "/lib/cpp" fails sanity check
See `config.log' for more details

解决办法是：

yum install glibc-headers    # 安装 glibc-headers
yum install gcc-c++          # 安装 gcc-c++

```

## 执行构建

```bash

make         # 在swoole目录下执行 make 命令

```

## 执行安装

```bash

make install  # 在swoole目录下执行 make install 命令

```

## 设置php.ini

```bash

cd /home/haojianhai/soft/php/lib   # 进入php.ini文件目录

extension=swoole        # 开启swoole扩展

```

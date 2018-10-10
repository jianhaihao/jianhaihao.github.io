# PHP7 源码安装

> PHP官网：[http://php.net](http://php.net)

## 安装步骤
1. 解压
2. configure
3. make
4. make install


```bash
tar -jxvf  php-7.2.10.tar.bz2  # 解压从官网上下载的php压缩包

cd php-7.2.10   # 进入解压后的文件(php源码目录)



# 对PHP源码进行编译
configure 是shell脚本，用来编译与安装源代码库，对即将安装的软件进行一些配置

./configure --help       # 查看配置文件有哪些参数


./configure --prefix=/home/haojianhai/soft/php   # 指定PHP安装路径

#如报错缺少libxml2，执行以下命令，安装 libxml2 与 libxml2-devel
yum install libxml2 libxml2-devel

```

提示以下信息，代表configure完成：
![/install-php.jpg](/install-php.jpg)

```bash

make    # 通过make命令进行构建编译
# 显示Build complete时代表构建完毕

make install   # 通过 make install 命令进行安装

```


## 简化PHP执行命令

```bash
 vi ~/.bash_profile     # 编辑文件.bash_profile

# 在.bash_profile文件末尾添加：
alias php=/home/haojianhai/soft/php/bin/php  # 配置php的实际安装路径
# 保存并退出

# 执行以下命令使配置生效
source ～/.bash_profile

```

## 安装中可能遇到的坑

1. 是否安装 `gcc`（编译与安装时需要）
2. 是否安装 `autoconfig`（编译与安装时需要）
3. php.ini 文件  
   > 从PHP压缩包解压后的源码包中进行拷贝，拷贝到php实际安装到的位置：

   ```bash

   cd /home/haojianhai/php-7.2.10      # 进入解压后的php源码包中

   cp php.ini-development /home/haojianhai/soft/php/etc/   # 拷贝到php实际安装到的位置

   mv php.ini-development php.ini     # 修改文件名称

   ```
4. 改变php.ini配置未生效：

   ```bash

   php -i | grep php.ini      # 查看php.ini使用的文件

   # 实际使用的php.ini位置为：
   Configuration File (php.ini) Path => /home/haojianhai/soft/php/lib

   mv ./etc/php.ini ./lib    # 移动php.ini位置

   ``` 
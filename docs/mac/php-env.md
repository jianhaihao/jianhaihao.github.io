# php环境（mac）

## Apache

MacOS自带Apache，只需要启动Apache就行。

```bash

sudo apachectl start   # 启动Apache服务

sudo apachectl restart  # 重启Apache服务

sudo apachectl stop     # 停止Apache服务

httpd -v      # 查看Apache版本

```

在MacbookPro下，Apache的网站服务器根目录在/Library/WebServer/Documents路径下

```bash

cd /Library/WebServer/Documents

```

## PHP

MacOS自带PHP，只需要在Apache的配置文件中添加Apache对PHP的支持即可

```bash

sudo vim /etc/apache2/httpd.conf

# 去掉“LoadModule php7_module libexec/apache2/libphp7.so”注释符号

```

## MySql

下载mysql[官网](https://dev.mysql.com/downloads/mysql/)  [安装教程](https://www.jianshu.com/p/a62a8c6a18cb) (注意保存默认密码)

```bash

1. 开启 MySQL 服务，步骤：系统偏好设置 ——> 点击 MySQL ——> 打钩允许开机后自动运行 MySQL

2. 设置环境变量
   (1) mysql命令位置：/usr/local/mysql/bin
   (2) vim ~/.bash_profile    # 编辑文件.bash_profile 
       末尾添加：PATH=$PATH:/usr/local/mysql/bin
   (3) source ~/.bash_profile  # 使得环境变量可以立即生效
3. 通过 mysql -uroot -p 连接数据库确认配置成功
4. 修改数据库连接密码：
   SET PASSWORD FOR 'root'@'localhost' = PASSWORD('newPassword');

```

## 配置Apache虚拟主机

```bash

# 编辑文件httpd.conf
vim /etc/apache2/httpd.conf
# 去掉下面这一行的注释：
Include /peivate/etc/apache2/extra/httpd-vhosts.conf      # 这时，apache 将会加载 httpd-vhosts.conf 这个配置文件
# 保存退出

# 编辑 httpd-vhost.conf 配置文件
vim /etc/apache2/extra/httpd-vhosts.conf
# 添加虚拟主机
<VirtualHost *:80>
    DocumentRoot "/Users/jianhaihao/Documents/Products/yii/web"
    ServerName yii
    ErrorLog "/private/var/log/apache2/sites-error_log"
    CustomLog "/private/var/log/apache2/sites-access_log" common
    <Directory "/Users/jianhaihao/Documents/Products/yii/web">
        Options FollowSymLinks Indexes
        AllowOverride None
        Order allow,deny
        Allow from all
    </Directory>
</VirtualHost>
# 保存退出

# 设置hosts文件
sudo vi /etc/hosts   # 添加IP和虚拟主机名称，保存退出

重启Apache服务

```




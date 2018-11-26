# 搭建git服务器

Linux搭建git服务器

## 安装git

```bash

# 安装所需扩展
yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel perl-devel

# 安装git
yum install git

# 创建一个git用户组和用户，用来运行git服务：
groupadd git

useradd git -g git

```

## 创建证书登录

```bash

# 收集所有需要登录的用户的公钥，公钥位于id_rsa.pub文件中，把公钥导入到/home/git/.ssh/authorized_keys文件里，一行一个。

# 如果没有该文件创建它：
cd /home/git/
mkdir .ssh
chmod 755 .ssh
touch .ssh/authorized_keys
chmod 644 .ssh/authorized_keys

```

## 初始化Git仓库

```bash

# 选定一个目录作为Git仓库，假定是/home/gitrepo/test.git，在/home/gitrepo目录下输入命令

cd /home
mkdir gitrepo
chown git:git gitrepo/
cd gitrepo

git init --bare test.git    # 创建空仓库

# 把仓库所属用户改为git：
chown -R git:git test.git

```

## 克隆仓库

```bash

git clone git@192.168.45.4:/home/gitrepo/test.git

```

## 帮助文档
[http://www.runoob.com/git/git-server.html](http://www.runoob.com/git/git-server.html)   
[https://blog.csdn.net/baidu_30000217/article/details/51327289](https://blog.csdn.net/baidu_30000217/article/details/51327289)
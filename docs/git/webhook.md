# ssh-key

## 生成ssh-key

```bash

# linux环境

# 进入家目录
cd ~

# 如未配置git全局用户名，进行配置
git config --global  user.name "用户名"

# 如未配置git全局邮箱，进行配置
git config --global user.email "邮箱"

# 生成密钥（执行命令后一直回车即可）
ssh-keygen -t rsa -C "邮箱"

# 进入生成密钥的目录
cd ~/.ssh/

# 查看ssh-key
cat id_rsa.pub

# 将ssh-key配置到个人git账户中
# 进入github官网：https://github.com/settings/keys 中的 SSH keys

# 测试 ssh-key
ssh -T git@github.com
# 输入yes后若显示 
Hi xxx! You’ve successfully authenticated, but GitHub does not provide shell access. 
# 则代表成功

```

## 使ssh-key生效

```bash

# github上传ssh-key后仍须输入密码问题

# 这种事情通常发生在更换机器后克隆自己仓库的时候，通常我们会使用https方式克隆
git clone https://github.com/Name/project.git
# 这样便会在你git push时候要求输入用户名和密码

# 解决的方法是使用ssh方式克隆仓库
git clone git@github.com:Name/project.git

# 如果你已经用https方式克隆了仓库，就不必删除仓库重新克隆，只需将 .git/config 文件中的
url = https://github.com/Name/project.git
# 改为 
url = git@github.com:Name/project.git

```

## 配置webhook

```bash

# 查看当前网络访问时的用户

##################文件内容开始线#############################
<?php

exec("whoami", $out);     # whoami = id -un

echo "<pre>";
print_r($out);

##################文件内容结束线#############################
# 通过浏览器访问该文件，获得用户名
apache      # 本机演示得到的用户名，请以实际用户名为准

# 将当前需要git同步的仓库目录，权限给到浏览器访问的用户名
chown -R apache:apache demo    # demo为演示的服务器仓库目录（demo 或 demo/ 都可以）

# 如遇以下报错信息：
Could not create directory '/usr/share/httpd/.ssh'.
Host key verification failed.
fatal: Could not read from remote repository.
Please make sure you have the correct access rights
and the repository exists.

# 以上报错说明实际浏览器访问时，是到 /usr/share/httpd/.ssh 下读取公钥
# 因没有读到，只需要复制实际公钥生成的文件到当前文件夹下即可
cd /usr/share/httpd/
mkdir .ssh
cp ~/.ssh/id_rsa /usr/share/httpd/.ssh/
cp ~/.ssh/id_rsa.pub /usr/share/httpd/.ssh/
cp ~/.ssh/known_hosts /usr/share/httpd/.ssh/

# 将新增的密钥相关文件权限改到浏览器访问的用户名
chown -R apache:apache .ssh

```

## 非root用户运行docker

```bash

# 首先创建docker用户组，如果docker用户组存在可以忽略
sudo groupadd docker

# 把用户添加进docker组中
sudo gpasswd -a ${USER} docker

# 重启docker
sudo service docker restart

# 如果普通用户执行docker命令，如果提示get …… dial unix /var/run/docker.sock权限不够
# 则修改/var/run/docker.sock权限使用root用户执行如下命令即可
sudo chmod a+rw /var/run/docker.sock

```

## 更新Linux系统时间

```bash

# 查看时间 
date

# 更新时间
yum install ntpdate
ntpdate time.windows.com

```







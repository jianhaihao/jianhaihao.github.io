# 安装Docker

```bash

yum -y install wget

# 下载docker
sudo wget -qO- https://get.docker.com | sh

sudo usermod -aG docker root

sudo service docker start

docker info 

```
# 环境搭建

### docker安装swoft

[swoft镜像](https://hub.docker.com/r/swoft/swoft/)  

```bash

docker pull swoft/swoft   # 获取swoft镜像

docker images     # 查看本地docker镜像

docker run -p 80:80 --name swoft  --rm -d swoft/swoft:latest   # 运行swoft容器

docker ps # 查看当前正在运行的docker容器

curl localhost  # 访问本地，查看swoft是否正常运行


# 拷贝容器文件到本地
cd ~
docker cp swoft:/var/www/swoft .  # 注意点号，表示拷贝到当前目录

# 从本地文件运行swoft容器：
docker run -p 80:80 --name swoft --rm -d -v /home/swoft/:/var/www/swoft swoft/swoft:latest

docker run -p 80:80 --name swoft --rm -d -v /Users/jianhaihao/Documents/Products/WancllMS-Server/swoft/:/var/www/swoft swoft/swoft:latest

```

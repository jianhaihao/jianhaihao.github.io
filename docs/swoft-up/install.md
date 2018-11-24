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

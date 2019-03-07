# 数据库集群

## 单节点数据库弊端
>* 大型互联网程序用户群体庞大，架构必须要特殊设计
>* 无法满足性能上的要求
>* 没有冗余设计，无法满足高可用

## 常见Mysql集群方案
![/mysql-jq.jpg](/mysql-jq.jpg) 
![/mysql-jq-1.jpg](/mysql-jq-1.jpg)
![/mysql-jq-2.jpg](/mysql-jq-2.jpg)
![/mysql-jq-3.jpg](/mysql-jq-3.jpg)
![/mysql-jq-4.jpg](/mysql-jq-4.jpg)

## 创建集群

```bash

# 拉取 pxc 镜像
docker pull percona/percona-xtradb-cluster

# 查看已安装的镜像
docker images

#######################分割线##################################

# 修改镜像名称（名称太长，不方便使用，选择性操作）
docker tag percona/percona-xtradb-cluster pxc
# 删除旧的镜像
docker rmi percona/percona-xtradb-cluster
# 查看已安装的镜像
docker images

#######################分割线##################################

#（出于安全考虑，需要给pxc集群实例创建docker内部网络）
# docker虚拟机自带的网段地址为：172.17.0.XXX

# 创建内部网段
docker network create net1
# 查看内部网段
docker network inspect net1   # network可省略
# 删除内部网段
docker network rm net1

# 创建指定网段
docker network create --subnet=172.18.0.0/24 net1

# Docker容器使用原则：不要在容器里面保存业务数据！！！
# 要把业务数据保存到宿主机中，使用的技术是目录映射

# pxc无法使用映射目录，可以采用docker卷来处理

# 容器中的pxc节点映射数据目录的解决办法
docker volume create --name v1    # --name可省略

# 查看数据卷在宿主机的真实路径
docker inspect v1

# 删除数据卷
docker volume rm v1

#######################分割线##################################

# 向pxc镜像传入运行参数创建pxc容器
docker run -d -p 3307:3306 -e MYSQL_ROOT_PASSWORD=yiyun2018 -e CLUSTER_NAME=PXC -e XTRABACKUP_PASSWORD=yiyun2018 -v v1:/var/lib/mysql --privileged --name=node1 --net=net1 --ip 172.18.0.2 pxc

# 创建第二个容器
docker run -d -p 3308:3306 -e MYSQL_ROOT_PASSWORD=yiyun2018 -e CLUSTER_NAME=PXC -e XTRABACKUP_PASSWORD=yiyun2018 -e CLUSTER_JOIN=node1 -v v2:/var/lib/mysql --privileged --name=node2 --net=net1 --ip 172.18.0.3 pxc

# 创建第三个容器
docker run -d -p 3309:3306 -e MYSQL_ROOT_PASSWORD=yiyun2018 -e CLUSTER_NAME=PXC -e XTRABACKUP_PASSWORD=yiyun2018 -e CLUSTER_JOIN=node1 -v v3:/var/lib/mysql --privileged --name=node3 --net=net1 --ip 172.18.0.4 pxc

# 创建第四个容器
docker run -d -p 3310:3306 -e MYSQL_ROOT_PASSWORD=yiyun2018 -e CLUSTER_NAME=PXC -e XTRABACKUP_PASSWORD=yiyun2018 -e CLUSTER_JOIN=node1 -v v4:/var/lib/mysql --privileged --name=node4 --net=net1 --ip 172.18.0.5 pxc

# 创建第五个容器
docker run -d -p 3311:3306 -e MYSQL_ROOT_PASSWORD=yiyun2018 -e CLUSTER_NAME=PXC -e XTRABACKUP_PASSWORD=yiyun2018 -e CLUSTER_JOIN=node1 -v v5:/var/lib/mysql --privileged --name=node5 --net=net1 --ip 172.18.0.6 pxc

# -d 后台运行
# -p [宿主机端口]:[容器端口]  把容器的3306端口映射到宿主机的3306端口
# -v v1:/var/lib/mysql 路径映射，/var/lib/mysql 容器内的目录
# -e MYSQL_ROOT_PASSWORD  参数，创建出的数据库实例的密码（用户名是root，不可修改）
# -e MYSQL_ROOT_PASSWORD  参数，创建出的pxc集群的名字
# -e MYSQL_ROOT_PASSWORD  参数，数据库节点之间同步使用的密码
# -e CLUSTER_JOIN  参数，和第一个节点容器进行同步








```
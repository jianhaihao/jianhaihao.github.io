# Docker 应用

> 只有把各个节点部署成集群，才能真正体现高性能、高负载、高可用   
> 前端、后端、数据库都要有集群   

## linux说明



```bash

chmod 700 hello.txt

chmod 766 hello.txt

```

防火墙



## PXC集群

Docker镜像：https://hub.docker.com/r/percona/percona-xtradb-cluster

```bash

# 修改docker镜像名称：
docker tag [旧名称] [新名称]

# 删除旧镜像
docker rmi [旧名称]

# 创建docker内部网络
docker network create --subnet=172.18.0.0/24 net1



``` 


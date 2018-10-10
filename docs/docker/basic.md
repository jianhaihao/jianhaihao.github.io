# Docker 基础知识

![/docker.png](/docker.png)

>* 容器技术的代表（将程序隔离打包）
>* 解决了软件包的问题，理顺了开发与运维的差异
>* 打包、发布、运行
>* 官网：[www.docker.com](https://www.docker.com)

## Docker不是虚拟机
![/vm-vs-docker.png](/vm-vs-docker.png)

## 术语

|   English    |       中文      |    
|    ------    |      ------    |
| host         |   宿主机        | 
| image        |   镜像         |
| container    |   容器         |
| registry     |   仓库         |
| daemon       |   守护程序      |
| client       |   客户端       |


## 架构图

![/docker-01.png](/docker-01.png)
![/docker-02.png](/docker-02.png)

## 常用命令

```bash

docker pull               # 获取docker镜像
docker build              # 创建docker镜像
docker images             # 查看本地所有docker镜像
docker rmi [镜像ID]        # 删除镜像

docker run                # 运行容器
docker ps                 # 查看当前正在运行的docker容器
docker ps -a              # 显示所有的容器
docker rm [容器ID]         # 删除容器
docker stop [容器ID]       # 停止指定ID的docker容器

docker cp      # 在host和container之间拷贝文件
docker commit  # 保存改动为新的image
eg. 
docker cp [文件名] [容器ID]:[容器中的文件路径]     # 拷贝文件到docker容器的指定路径中（暂时的，不会保存）
docker commit -m 'test' [容器ID] [新的镜像名称]  # 提交保存docker容器的修改

```


## Dockerfile语法

|   命令        |      用途    | 
| --------     |     -----    |
| FROM         |   base image | 
| RUN          |   执行命令    | 
| ADD          |   添加文件    |
| COPY         |   拷贝文件    |
| CMD          |   执行命令    |
| EXPOSE       |   暴露端口    |
| WORKDIR      |   指定路径    |
| MAINTAINER   |   维护者      |
| ENV          | 设定环境变量   |
| ENTRYPOINT   |   容器入口    |
| USER         |   指定用户    |
| VOLUME       | mount point  |

> Dockerfile中的每一行都产生一个新层


## Volume

> 提供`独立`与容器之外的`持久化`存储

## Registry

> 镜像仓库

```bash

docker search whalesay        # 搜索仓库

docker pull whalesay          # 拉取仓库

docker push myname/whalesay   # 推送仓库

```

## 国内的一些仓库

>* daocloud
>* 时速云
>* aliyun









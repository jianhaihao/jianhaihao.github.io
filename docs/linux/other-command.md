# 其他常用命令

## 常用命令

```bash

netstat -anp | grep [端口号]       # 查看指定端口状态

telnet 127.0.0.1 9501             # 测试连接TCP服务器

nc -u 127.0.0.1 9502              # 测试连接UDP服务器(nc = netcat)

curl http://127.0.0.1:8811        # 测试http服务器

cat /proc/cpuinfo |grep "cores"|uniq  # 查看CPU核数

```


## 报错问题

1. nc(或netcat)命令不存在   

```bash
yum -y install nc     # 安装nc
```


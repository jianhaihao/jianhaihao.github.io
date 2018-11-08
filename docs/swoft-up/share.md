# Window与Linux资源共享

### 端口设置

```bash

sudo iptables -I INPUT -p tcp --dport 139 -j ACCEPT

sudo iptables -I INPUT -p tcp --dport 445 -j ACCEPT

sudo iptables -I INPUT -p udp --dport 137 -j ACCEPT

sudo iptables -I INPUT -p udp --dport 138 -j ACCEPT

```

### 安装samba

[samba镜像](https://hub.docker.com/r/dperson/samba/)  

```bash

docker pull dperson/samba   # 获取samba镜像

# 运行samba
docker run -it -p 139:139 -p 445:445  --name smb -d --rm \
 -v /home:/mount \
 dperson/samba \
 -u "root;123456" \
 -s "home;/mount/;yes;no;yes;all;all;all" \
 -w "WORKGROUP" \
 -g "force user=root" \
 -g "guest account=root"

```



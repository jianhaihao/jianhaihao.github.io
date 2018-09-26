# 用户和防火墙

## 系统用户操作命令

* useradd 添加用户
* adduser 添加用户
* userdel 删除用户
* passwd 设置密码

## w 用户名

* 命令输出
	* USER：登陆的用户名
	* TTY：登陆终端
	* FROM：从哪个IP地址登陆
	* LOGIN@：登陆时间
	* IDLE：用户闲置时间
	* JCPU：指的是和该终端连接的所有进程所占用的时间。这个时间里并不包括过去的后台作业时间，但却包括当前正在运行的后台作业所占用的时间
	* PCPU：是指当前进程所占用的时间
	* WHAT：当前正在运行的命令  

## who

* 命令输出
	* -用户名
	* -登陆终端
	* -登陆时间（登陆来源 ip 地址）

## last

* 查询当前登陆和过去登陆的信息
* /var/log/wtmp下面的数据

## lastlog

* 登陆日志信息
* /var/log/lastlog

### 防火墙设置

* 作用：保护服务器的安全
* 设置防火墙规则
	* 开放 80, 22 端口
* 关闭防火墙

```bash
yum install firewalld # 安装
service firewalld start # 启动
service firewalld status # 检查状态
service firewalld stop/disable # 关闭/禁用防火墙

firewall-cmd --state # 防火墙状态
firewall-cmd --get-zones # 查看所有的区域
firewall-cmd --list-default-zone # 查看默认的区域
firewall-cmd --list-all-zone # 查看所有区域的配置信息
firewall-cmd --list-all # 查看当前区域配置信息
firewall-cmd --list-ports # 查看默认区域打开的端口
firewall-cmd --list-service # 查看当前区域服务
firewall-cmd --list-port # 查看当前开启的端口
firewall-cmd --query-service=ssh # 查看是否有 ssh 服务
firewall-cmd --remove-service=ssh # 删除 ssh 服务
firewall-cmd --add-service=ssh  # 添加 ssh 服务
firewall-cmd --add-port=21/tcp --permanent # 添加端口/协议,需重启
```

## 提权

```bash
# 提权
sudo
su

# 修改配置文件
visudo
# 将 test 用户设置为可提权用户
%test ALL=(ALL)       ALL
```

## 文件上传和下载

* curl, wget 文件下载
* scp 文件上传

```bash 
scp test.txt test@192.168.31.54:/tmp/ # 将 test.txt 文件上传到 /tmp/ 目录下
scp test@192.168.31.54:/tmp/test.txt ./ # 将远程机器上的 text.txt 文件下载到当前目录
```

* sz, rz 命令

```bash
yum install lrzsz
```


# Centos7

## 特性

|   操作    |      Centos6       |    Centos7     |
|    ------    |      ------    |      ------    |
| 文件系统      |   ext4        |    xfs        | 
| 修改主机名    |   /etc/sysconfig/network        |   /etc/hostname    | 
| 修改时区    |   /etc/sysconfig/clock         |   timedatectl set-timezone Asia/Tokyo | 
| 查看IP信息     |   ifconfig         |   ip        | 
| 修改DNS地址       |   /etc/resolv.conf      |   -        | 
| 查看端口状态       |   netstat       |   ss       | 
| 防火墙       |   iptables       |   firewald       | 
| 服务管理       |   System V init       |   systemd       | 
| 时间同步服务       |   ntp       |   chrony       | 


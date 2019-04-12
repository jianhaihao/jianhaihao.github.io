# 性能测试

## 性能指标

1. 合理的平均响应时间   
   2/5/10原则
2. 系统资源类   
   CPU：CPU的占用率   
   内存：内存的占用率、换页数等   
   I/O：读写的请求数、读写量等   
   带宽：进站出站带宽暂用率   


## 性能测试分类

1. 负载测试（Load Test）   
   为了验证系统设计符合`正常业务负载`情况下系统性能表现的测试
2. 压力测试（Stress Test）   
   为了验证系统在`极端负载`情况下的系统性能表现的测试


## 性能测试工具

1. top   
   监控每一个进程的资源占用
2. sysstat
   统计系统的各种资源占用情况

```bash

yum list sysstat

# 如果未提示 Installed Packages，再执行以下命令
yum install sysstat.x86_64

# 查询 crontab 配置 sysstat的信息
cat /etc/cron.d/sysstat

# 日志路径
cd /var/log/sa/

```

### `sysstat` 常用命令

1. `sar -q -f`

CPU任务数、CPU的任务繁重程度

```bash
sar -q -f sa25
```
* runq-sz：等待执行的任务队列长度，越长阻塞越严重
* plist-sz：队列中的任务总数
* ldavg-1： 1分钟内系统负载描述
* ldavg-5： 5分钟内系统负载描述
* ldavg-15： 15分钟内系统负载描述
* ldavg > CPU总数时表示CPU压力大   
  ldavg值 等于大于CPU核数时，说明CPU负载非常大了
* ldavg值 是通过执行中的任务和等待执行的任务的个数的平均值得到的

2. `sar -p -f`

CPU占用百分比、CPU占用率

```bash
sar -p -f sa08
```
* %user：用户占用百分比
* %system：系统占用百分比
* %nice：改过优先级的进程CPU占用率
* %iowait： 等待io占用百分比
* %idle：空闲的CPU占比
* %steal：管理程序为另一个虚拟进程提供服务而等待虚拟CPU的百分比   

 `%steal 等待CPU` vs `%iowait 等待磁盘读写`

> PRI：进程优先权，代表这个进程可被执行的优先级，值越小优先级越高，越早被执行   
> NI：进程Nice值，进程可被执行的优先级的修正数值   
> PRI(new) = PRI(old) + nice

3. `sar -r -f`

内存：实际上内存占的百分比

```bash
sar -r -f sa25
```
* kbmemfree：空闲的内存
* kbmemused：已经使用的内存
* %memused： 内存使用率
* kbbuffers：文件磁盘块缓存
* kbcached：文件缓存
* kbcommit：是为了保证程序的正常运行需要的内存数目
* %commit：是为了保证程序的正常运行还需要的内存百分比

> buffer/cached 是为了提高文件读取的性能的磁盘缓存
> kbcached 是针对文件系统的，是文件的缓存
> kbbuffers 是针对磁盘块的缓存
> `%memused` + `%commit` > 100% ，则说明内存不够，会导致内存频繁的换页，需要去动用虚拟内存

4. `sar -B -f`

内存：换页频繁程度

```bash
sar -B -f sa25
```
* pgpgin/s：表示每秒从磁盘或SWAP置换到内存的字节数（KB）   
* pgpgout/s：表示每秒从内存置换到磁盘或SWAP的字节数（KB）   
* fault/s： 每秒钟系统产生的缺页数，即主缺页与轻微缺页之和（major + minor）   
* majflt/s：每秒钟产生的主缺页数，该值大于0时，代表肯定会发生换页

> pgpgin/s && pgpgout/s 一旦发生，意味着就有磁盘的读写，io的性能就会受到很大的冲击

5. `sar -W -f`

内存：swap交换的频繁程度

```bash
sar -W -f sa25
```
* pswpin/s：表示每秒从SWAP置换到内存的字节数（KB）   
* pswpout/s：表示每秒从内存置换到SWAP的字节数（KB）   

> pswpin/s && pswpout/s 越大，意味着负载越重

6. `sar -b -f`

IO监控

```bash
sar -b -f sa25
```
* tps：每秒钟物理设备的 I/O 请求次数  
* rtps：每秒钟从物理设备读入的请求次数
* wtps：每秒钟向物理设备写入的请求次数
* bread/s：每秒钟从物理设备读入的数据量，单位为 块/s
* bwrtn/s：每秒钟从物理设备写入的数据量，单位为 块/s

7. `sar -d -f`

IO监控

```bash
sar -d -f sa25
```
* tps：每秒钟物理设备的 I/O 请求次数  
* rd_sec/s：每秒读扇区的次数
* wr_sec/s：每秒写扇区的次数
* %util: I/O请求占CPU的百分比，比例越大，说明越饱和

### 评估磁盘读写性能极限

```bash

# 安装fio
yum list fio
yum install fio.x86_64

# 执行 fio命令
fio -filename=/tmp/test -direct=1 -iodepth 1 -thread -rw=randrw -ioengine=psync -bs=16k -size=2G -numjobs=10 -runtime=30 -group_reporting -name=mytest13

# 查看打印结果中的 iops 具体值

```
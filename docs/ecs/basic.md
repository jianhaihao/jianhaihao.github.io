 # ECS基础

云服务器（Elastic Compute Service , 简称 ECS ）

> 一种简单高效、处理能力可弹性伸缩的计算服务   
> ECS 云服务优势：高可用性、安全、弹性、成本
> 专线   
> BGP（Border Gateway Protocol）：边界网关协议，为了解决不同网络之间的差异
> 多线动态BGP

## [ECS配置选型](https://www.imooc.com/article/24464)
>* 入门型： 1 vCPU 1 GB 内存（ecs.xn4.small），搭配40 GB 高效云盘和 1 Mbps 公网带宽，适用于访问量较小的个人网站初级阶段。
>* 基础型： 1 vCPU 2 GiB内存（ecs.n4.small），搭配40 GB高效云盘和2 Mbps公网带宽，适用于流量适中的网站、简单开发环境、代码存储库等。
>* 通用型： 2 vCPU 4 GiB内存（ecs.n4.large），搭配40 GB高效云盘和2 Mbps公网带宽，能满足90%云计算初级用户的需求，适用于企业运营活动、并行计算应用、普通数据处理。关于实例规格的更多信息。
>* 进阶型： 4 vCPU 16 GiB内存（ecs.sn2ne.xlarge），搭配40 GB高效云盘和5 Mbps公网带宽，适用于中大规模访问量的网站、分布式分析及计算场景和Web应用程序。关于实例规格的更多信息。

[弹性网卡选型](https://www.imooc.com/article/24471)

```bash

# linux生成密钥
ssh-keygen

# 生成的密钥在家目录下的.ssh目录
cd ~/.ssh/

# id_rsa为私钥，id_rsa.pub为公钥

```

## 备注
>* ECS实例重置密码后需要重启实例，方能生效


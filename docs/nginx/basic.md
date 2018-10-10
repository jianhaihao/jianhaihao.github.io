# Nginx vs Apache

**追求`性能`选Nginx**  
**追求`稳定`选Apache**

apache运行php比较好，适合跑动态，nginx比较适合跑静态。  
现在流行的lanmp架构就是同时使用apache和nginx，静态网页有nginx处理，动态交由apache处理，这样就能更大限度的发挥服务器性能。

> nginx 相对 apache 的优点：  
>* 轻量级，同样起web 服务，比apache 占用更少的内存及资源  
>* 抗并发，nginx 处理请求是异步非阻塞的，而apache 则是阻塞型的，在高并发下nginx 能保持低资源低消耗高性能  
>* 高度模块化的设计，编写模块相对简单  
>* 社区活跃，各种高性能模块出品迅速啊  
>* nginx处理静态文件好,耗费内存少  
>* Nginx 配置简洁, Apache 复杂  

---

> apache 相对nginx 的优点：  
>* rewrite ，比nginx 的rewrite 强大  
>* 模块超多，基本想到的都可以找到  
>* 少bug ，nginx 的bug 相对较多  
>* 超稳定  
>* Apache 对 PHP 支持比较简单，Nginx 需要配合其他后端用  
>* Apache 的组件比 Nginx 多  

# 队列

> 队列也是一种线性结构
> 相比数组，队列对应的操作是数组的子集
> 只能从一端（队尾）添加元素，也只能从一端（队首）取出元素
> 队列是一种先进先出的数据结构，First In First Out (FIFO)

栈的应用：
> undo 操作 - 编辑器
> 系统调用栈 - 操作系统
> 括号匹配 - 编译器

## 数组队列的复杂度分析

ArrayQueue<E>
>* void enqueue(E)     O(1) 均摊
>* E dequeue()         O(n)  
>* E front()           O(1)
>* int getSize()       O(1)
>* boolean isEmpty     O(1)

> 栈顶元素反映了在嵌套的层次关系中，最近的需要匹配的元素












# 栈

> 栈也是一种线性结构
> 相比数组，栈对应的操作是数组的子集
> 只能从一端添加元素，也只能从一端取出元素，这一端称为栈顶
> 栈是一种先进后出的数据结构，Last In First Out (LIFO)

栈的应用：
> undo 操作 - 编辑器
> 系统调用栈 - 操作系统
> 括号匹配 - 编译器

## 栈的复杂度分析

ArrayStack<E>
>* void push(E)     O(1) 均摊
>* E pop()          O(1) 均摊  
>* E peek()         O(1)
>* int getSize()    O(1)
>* boolean isEmpty  O(1)

> 栈顶元素反映了在嵌套的层次关系中，最近的需要匹配的元素












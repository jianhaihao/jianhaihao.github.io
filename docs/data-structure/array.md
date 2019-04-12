# 数组

> 操作：增删改查（类比数据库）   
> 属性：容量（capacity）、大小（size）

## 初始化

> 成员变量：数组data、 数组大小size   
> 构造函数，传入数组的容量capacity构造Array，初始化size=0   
> 无参数构造函数，默认数组容量capacity=10   
> 获取数组中的元素个数   
> 获取数据的容量   
> 返回数组是否为空   

```java

// 定义泛型数组
public class Array<E> {

	private E[] data;
	private int size;

	// 构造函数，传入数组的容量capacity构造Array
	public Array(int capacity){
		data = (E[])new Object[capacity];
		size = 0;
	}
    
    // 无参数构造函数，默认容量10
	public Array(){
		this(10);
	}

	// 获取数组中的元素个数
	public int getSize(){
		return size;
	}

    // 获取数组容量
    public int getCapacity(){
		return data.length;
	}

	// 返回数组是否为空
	public boolean isEmpty(){
		return size == 0;
	}

	// ……

}

```

## 添加元素

> 向数组末尾添加元素e

`addLast(int e)` 

```java

/**
 * 方法1
 */

// 校验：数组是否已满
if(size == data.length){
   // 数组容量已满，抛出异常
}

// 添加元素
data[size] = e;
// 维护size
size++;

/**
 * 方法2
 */

// 直接调用add函数
add(size, e);

```

> 向数组头部添加元素e

`addFirst(int e)` 

```java

// 直接调用add函数
add(0, e);

```

> 在数组index位置插入元素e

`add(int index, int e)` 

```java

// 校验：index是否合法
if(index < 0 || index > size){
   // index不能为负数，且不能大于size（即数组中间不能含有空元素）
}

// 校验：数组是否已满
if(size == data.length){
   // 处理1：数组容量已满，抛出异常

   // 处理2：进行扩容
   resize(2*data.length);
}

// 将>=index位置的所有元素往后移动一位
for(int i = size - 1; i >= index ; i --){
	data[i+1] = data[i];
}

// index位置插入元素e
data[index] = e;
// 维护size
size++;

```

## 获取元素

`get(int index)`

```java

// 校验：index是否合法
if (index < 0 || index >= szie) {
	// index 非法
}

return data[index];

```

## 修改元素

`set(int index, int e)`

```java

// 校验：index是否合法
if (index < 0 || index >= szie) {
	// index 非法
}

data[index] = e;


```

## 包含元素

`contains(int e)`

```java

for (int i = 0; i < size; i++) {
	if (data[i] == e) {
		return true;
	}
}

return false;

```

## 查找元素

`find(int e)`

```java

// 查找数组中元素e所在的索引，如果不存在元素e，则返回-1

for (int i = 0; i < size; i++) {
	if (data[i] == e) {
		return i;
	}
}

return -1;

```

## 删除元素

> 删除index位置的元素，返回删除的元素

`remove(int index)`

```java

// 校验：index是否合法
if (index < 0 || index >= szie) {
	// index 非法
}

// 记录待返回的元素
int ret = data[index];

// 依次循环，将index之后位置的元素，统一向前移动一位，将index挤出去
for (int i = index + 1; i < size; i++) {
	data[i - 1] = data[i];
}

// 维护size
size--;
// data[size] = null;

// 方案1
if (size == data.length / 2) {
	resize(data.length/2);
}
// 方案2（防止复杂度震荡）
if (size == data.length / 4 && data.length / 2 != 0) {
	resize(data.length/2);
}

// 返回删除元素 
return ret;

```

> 删除第一个元素，返回删除的元素

`removeFirst()`

```java

return remove(0);

```

> 删除最后一个元素，返回删除的元素

`removeLast()`

```java

return remove(size - 1);

```

> 删除元素e

`removeElement(int e)`

```java

int index = find(e);

if (index != -1) {
	remove(index);
}

```

## 使用泛型

> 让数据结构可以放置“任何”数据类型
> 不可以是基本数据类型，只能是类对象   
  boolean 、 byte 、 char 、 short 、 int 、 long 、 float 、 double
> 每个基本数据类型都有对应的包装类
  Boolean 、 Byte 、 Char 、 Short 、 Int 、 Long 、 Float 、 Double

## 动态数组

`resize(int newCapacity)`

```java

E[] newData = (E[])new Object[newCapacity];

for (int i = 0; i < size; i++) {
	newData[i] = data[i];
}

data = newData;

```

## 时间复杂度

> O(1)，O(n)，O(lgn)，O(nlogn)，O(n^2)   
> 大O描述的是算法的运行时间和输入数据之间的关系   

动态数组的时间复杂度
>* 增：O(n)  
>* 删：O(n)  
>* 改：已知索引O(1)，未知索引O(n)  
>* 查：已知索引O(1)，未知索引O(n)  

均摊复杂度
> 动态数组扩容与缩容不是每次都发生的
> 平均看来是每两次操作促发一次
> 按均摊复杂度分析，动态数组增、删元素时间复杂度为O(1)

复杂度震荡
> removeLast时resize过于着急(Eager)   
> 解决方案：Lazy
> 当size == capacity/4 时，才将capacity减半






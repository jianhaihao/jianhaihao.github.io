# PHP设计模式

## 类自动载入

> 目录结构：     
> /root/test.php   
> /root/Test1.php   
> /root/Test2.php   


`写法1`

```php

Test1::test();
Test2::test();

function __autoload($class)
{
	require __DIR__ . '/' . $class . '.php';
}

// 弊端：多个框架__autoload函数使用时不能重复定义

```

`写法2`

php5.3之后引入了`spl_autoload_register`函数

```php

spl_autoload_register('autoload1');
spl_autoload_register('autoload2');

Test1::test();
Test2::test();

function autoload1($class)
{
	require __DIR__ . '/' . $class . '.php';
}

function autoload2($class)
{
	require __DIR__ . '/' . $class . '.php';
}

```

## PSR-0规范

1. 命名空间必须与绝对路径一致
2. 类名首字母必须大写
3. 除入口文件外，其他".php"必须只有一个类

## SPL标准库

`栈`

```php

$stack = new SplStack();

// 入栈
$stack->push('data1');
// 出栈
$stack->pop();

```

`队列`

```php

$queue = new SplQueue();

// 入队列
$queue->enqueue('data1');
// 出队列
$queue->dequeue();

```

`堆`

```php

$heap = new SplMinHeap();

// 入堆
$heap->insert('data1');
// 出堆
$heap->extract();

```

`固定长度的数组`

```php

$array = new SplFixedArray(10);

```

## 链式操作

返回当前实例

```php

/**
 * demo
 */
class Database
{
	
	function where($where)
	{
		return $this;
	}

	function order($order)
	{
		return $this;
	}

	function limit($limit)
	{
		return $this;
	}

}

```
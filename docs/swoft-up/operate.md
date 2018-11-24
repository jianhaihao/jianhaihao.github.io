# 概念实操

## 注解

PHP没有注解，但是可以利用反射来读取类或方法上的注释内容

```php

/**
 * 
 */

```

[PHP反射](http://php.net/manual/zh/reflectionclass.getdoccomment.php)

## 控制器

```php

namespace App\Controllers;

use Swoft\Http\Server\Bean\Annotation\Controller;
use Swoft\Http\Server\Bean\Annotation\RequestMapping;
use Swoft\Http\Server\Bean\Annotation\RequestMethod;

/**
 * @Controller(prefix="/users")
 */
class UsersController
{
    /**
     * @RequestMapping(route="/test", method=RequestMethod::POST)
     * @return String
     */
    function test()
    {
        return 'Hello World';
    }
}

```

## 实体

```bash

# 源码安装执行命令
php bin/swoft entity:create -d test -i user

# docker环境下执行命令
docker exec -it swoft php bin/swoft entity:create -d test -i user

```

## Bean容器


1. 常规写法

```php

///////////////////////////////////////////////////////////

namespace App\Test;

use App\Models\Entity\Products;

class ProdFilter
{
    public  $discount=0.8;  // 商品折扣

    function filter(Products $products)
    {
        if(!$products) return null;
        $price = $products->getPrice();      
        $products->setPrice($price*$this->discount);
        return $products;
    }
}

///////////////////////////////////////////////////////////

# 控制器

namespace App\Controllers;

use App\Test\ProdFilter;
use Swoft\Db\Query;
use Swoft\Http\Message\Server\Request;
use Swoft\Http\Server\Bean\Annotation\Controller;
use Swoft\Http\Server\Bean\Annotation\RequestMapping;
use Swoft\Http\Server\Bean\Annotation\RequestMethod;

/**
 * @Controller(prefix="/prod")
 */
class ProdController
{
    /**
     * @RequestMapping(route="/prod/{pid}", method=RequestMethod::GET)
     */
    function getUserDetail(int $pid)
    {
    	$pf = new ProdFilter();
        return $pf->filter(Products::findById($pid)->getResult());
    }
}

```

2. bean容器

```php

///////////////////////////////////////////////////////////

namespace App\Test;

use App\Models\Entity\Products;
use \Swoft\Bean\Annotation\Bean;    // 引入bean命名空间

/**
 * @Bean("ProdFilter")           // 定义bean别名
 */
class ProdFilter
{
    public  $discount=0.8;  // 商品折扣

    function filter(Products $products)
    {
        if(!$products) return null;
        $price = $products->getPrice();      
        $products->setPrice($price*$this->discount);
        return $products;
    }
}

///////////////////////////////////////////////////////////

# 控制器

namespace App\Controllers;

use App\Test\ProdFilter;
use Swoft\Bean\BeanFactory;             // 引入bean
use Swoft\Db\Query;
use Swoft\Http\Message\Server\Request;
use Swoft\Http\Server\Bean\Annotation\Controller;
use Swoft\Http\Server\Bean\Annotation\RequestMapping;
use Swoft\Http\Server\Bean\Annotation\RequestMethod;

/**
 * @Controller(prefix="/prod")
 */
class ProdController
{
    /**
     * @RequestMapping(route="/prod/{pid}", method=RequestMethod::GET)
     */
    function getUserDetail(int $pid)
    {
    	$pf = BeanFactory::getBean('ProdFilter');        // 获取bean
        return $pf->filter(Products::findById($pid)->getResult());
    }
}

```

3. 通过注解引入

```php

///////////////////////////////////////////////////////////

namespace App\Test;

use App\Models\Entity\Products;
use \Swoft\Bean\Annotation\Bean;    // 引入bean命名空间

/**
 * @Bean("ProdFilter")           // 定义bean别名
 */
class ProdFilter
{
    public  $discount=0.8;  // 商品折扣

    function filter(Products $products)
    {
        if(!$products) return null;
        $price = $products->getPrice();      
        $products->setPrice($price*$this->discount);
        return $products;
    }
}

///////////////////////////////////////////////////////////

# 控制器

namespace App\Controllers;

use App\Test\ProdFilter;
use \Swoft\Bean\Annotation\Inject;  // 引入bean注解
use Swoft\Db\Query;
use Swoft\Http\Message\Server\Request;
use Swoft\Http\Server\Bean\Annotation\Controller;
use Swoft\Http\Server\Bean\Annotation\RequestMapping;
use Swoft\Http\Server\Bean\Annotation\RequestMethod;

/**
 * @Controller(prefix="/prod")
 */
class ProdController
{
	/**
	 * @Inject(name="ProdFilter")
	 */
	public $pf;

    /**
     * @RequestMapping(route="/prod/{pid}", method=RequestMethod::GET)
     */
    function getUserDetail(int $pid)
    {
        return $pf->filter(Products::findById($pid)->getResult());
    }
}

```

4. 调优

```php

///////////////////////////////////////////////////////////

// 新增配置过滤类

namespace App\Test;

use \Swoft\Bean\Annotation\Bean;    // 引入bean命名空间

/**
 * @Bean("FilterConfig")           // 定义bean别名
 */
class FilterConfig
{
    public  $discount = 0.8;  // 商品折扣
}

///////////////////////////////////////////////////////////

namespace App\Test;

use App\Models\Entity\Products;
use \Swoft\Bean\Annotation\Bean;    // 引入bean命名空间
use \Swoft\Bean\Annotation\Inject;  // 引入bean注解

/**
 * @Bean("ProdFilter")           // 定义bean别名
 */
class ProdFilter
{
    /**
	 * @Inject(name="FilterConfig")
	 */
	public $filterConfig;

    function filter(Products $products)
    {
        if(!$products) return null;
        $price = $products->getPrice();      
        $products->setPrice($price*$this->filterConfig->discount);
        return $products;
    }
}

///////////////////////////////////////////////////////////

# 控制器

namespace App\Controllers;

use App\Test\ProdFilter;
use \Swoft\Bean\Annotation\Inject;  // 引入bean注解
use Swoft\Db\Query;
use Swoft\Http\Message\Server\Request;
use Swoft\Http\Server\Bean\Annotation\Controller;
use Swoft\Http\Server\Bean\Annotation\RequestMapping;
use Swoft\Http\Server\Bean\Annotation\RequestMethod;

/**
 * @Controller(prefix="/prod")
 */
class ProdController
{
	/**
	 * @Inject(name="ProdFilter")
	 */
	public $pf;

    /**
     * @RequestMapping(route="/prod/{pid}", method=RequestMethod::GET)
     */
    function getUserDetail(int $pid)
    {
        return $pf->filter(Products::findById($pid)->getResult());
    }
}

```

## Value注解类

```php

use \Swoft\Bean\Annotation\Value;  // 引入Value注解

/////////////////////////////////////////

/**
 * @Value(name="${config.product.filterConfig.discount}")
 */
public $discount;  // 商品折扣

```

## 中间件

```php

//////////////////////////////////////////////////////////////

namespace App\Test;

use Psr\Http\Server\RequestHandlerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Swoft\Http\Message\Middleware\MiddlewareInterface;
use \Swoft\Bean\Annotation\Bean;
use App\Models\Entity\Products;
use \Swoft\Bean\Annotation\Inject;

/**
 * @Bean("ProdMiddWare") 
 */
class ProdMiddWare implements MiddlewareInterface
{
	/**
	 * @Inject(name="ProdFilter")
	 */
	public $pf;

	/**
     * Process an incoming server request and return a response, optionally delegating
     * response creation to a handler.
     *
     * @param \Psr\Http\Message\ServerRequestInterface $request
     * @param \Psr\Http\Server\RequestHandlerInterface $handler
     * @return \Psr\Http\Message\ResponseInterface
     * @throws \InvalidArgumentException
     */
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $response = $handler->handle($request);
        $getAttr = $response->getAttribute('responseAttribute');
        if ($getAttr && $getAttr instanceof Products) {
        	$product = $this->pf->filter($getAttr);
        	return $response->withAttribute("responseAttribute", $product);
        }
        return $response->withAddedHeader('Middleware-Action-Test', 'success');
    }
}

///////////////////////////////////////////////////////////

# 控制器

namespace App\Controllers;

use App\Test\ProdFilter;
use \Swoft\Bean\Annotation\Inject;  // 引入bean注解
use Swoft\Db\Query;
use Swoft\Http\Message\Server\Request;
use Swoft\Http\Server\Bean\Annotation\Controller;
use Swoft\Http\Server\Bean\Annotation\RequestMapping;
use Swoft\Http\Server\Bean\Annotation\RequestMethod;
use Swoft\Http\Message\Bean\Annotation\Middleware;
use App\Test\ProdMiddWare;

/**
 * @Controller(prefix="/prod")
 * @Middleware(class=ProdMiddWare::class)
 */
class ProdController
{
	/**
	 * @Inject(name="ProdFilter")
	 */
	public $pf;

    /**
     * @RequestMapping(route="/prod/{pid}", method=RequestMethod::GET)
     */
    function getUserDetail(int $pid)
    {
        return Products::findById($pid)->getResult();
    }
}

```



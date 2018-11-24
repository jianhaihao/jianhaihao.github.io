# swoft 使用

## 创建控制器

```bash

// Gen DemoController class to `@app/Controllers`
php bin/swoft gen:controller demo --prefix /demo -y

// Gen UserController class to `@app/Controllers`(RESTFul 风格，会默认创建一些action)
php bin/swoft gen:controller user --prefix /users --rest

===================================================================================

Description:
  Generate HTTP controller class

Usage:
  bin/swoft gen:controller CLASS_NAME SAVE_DIR [--option ...]

Arguments:
  name       The class name, don't need suffix and ext.(eg. demo)
  dir        The class file save dir(default: @app/Controllers)

Options:
  -y, --yes BOOL             No need to confirm when performing file writing. default is: False
  -o, --override BOOL        Force override exists file. default is: False
  -n, --namespace STRING     The class namespace. default is: App\Controllers
  --rest BOOL                The class will contains CURD action. default is: False
  --prefix STRING            The route prefix for the controller. default is class name
  --suffix STRING            The class name suffix. default is: Controller
  --tpl-file STRING          The template file name. default is: command.stub
  --tpl-dir STRING           The template file dir path.(default: devtool/res/templates)


// 生成带命名空间的控制器

php bin/swoft gen:controller Menus @app/module/v1/platform/Controllers -n App\\module\\v1\\platform\\Controllers  --prefix /v1/platform/menus --rest -y

```

## 创建实体

```bash

php bin/swoft entity:create -d dbname mytable,table2

===================================================================================

Description:
  Auto create entity by table structure

Usage:
entity:create -d[|--database] <database> --instance <instance>
entity:create -d[|--database] <database> [table] -instnace <instnace>
entity:create -d[|--database] <database> --i[|--include] <table> --instnace <instnace>
entity:create -d[|--database] <database> --i[|--include] <table> -instnace <instnace>
entity:create -d[|--database] <database> --i[|--include] <table1,table2> --instnace <instnace>
entity:create -d[|--database] <database> --i[|--include] <table1,table2> -e[|--exclude] <table3> --instance <instance>
entity:create -d[|--database] <database> --i[|--include] <table1,table2> -e[|--exclude] <table3,table4> --instance <instance>

Options:
  -d 数据库
--database 数据库
-i 指定特定的数据表，多表之间用逗号分隔
--include 指定特定的数据表，多表之间用逗号分隔
-e 排除指定的数据表，多表之间用逗号分隔
--exclude 排除指定的数据表，多表之间用逗号分隔
--remove-table-prefix 去除前缀
--entity-file-path 实体路径(必须在以@app开头并且在app目录下存在的目录,否则将会重定向到@app/Models/Entity)
--instance 设置数据库实例，默认default
--extends 设置模型的实体基类

Example:
  php bin/swoft entity:create -d test

  php bin/swoft entity:create -d wancll_cloud_v1 -i system_staff_role_entity_powers --entity-file-path @app/module/v1/platform/Models/Entity

```


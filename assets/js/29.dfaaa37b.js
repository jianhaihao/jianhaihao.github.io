(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{178:function(t,a,s){"use strict";s.r(a);var n=s(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"swoft-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swoft-使用","aria-hidden":"true"}},[t._v("#")]),t._v(" swoft 使用")]),t._v(" "),s("h2",{attrs:{id:"创建控制器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建控制器","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建控制器")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("\n// Gen DemoController class to "),s("span",{attrs:{class:"token variable"}},[s("span",{attrs:{class:"token variable"}},[t._v("`")]),t._v("@app/Controllers"),s("span",{attrs:{class:"token variable"}},[t._v("`")])]),t._v("\nphp bin/swoft gen:controller demo --prefix /demo -y\n\n// Gen UserController class to "),s("span",{attrs:{class:"token variable"}},[s("span",{attrs:{class:"token variable"}},[t._v("`")]),t._v("@app/Controllers"),s("span",{attrs:{class:"token variable"}},[t._v("`")])]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RESTFul 风格，会默认创建一些action"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nphp bin/swoft gen:controller user --prefix /users --rest\n\n"),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n\nDescription:\n  Generate HTTP controller class\n\nUsage:\n  bin/swoft gen:controller CLASS_NAME SAVE_DIR "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--option "),s("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nArguments:\n  name       The class name, don't need suffix and ext."),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eg. demo"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("dir")]),t._v("        The class "),s("span",{attrs:{class:"token function"}},[t._v("file")]),t._v(" save dir"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: @app/Controllers"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nOptions:\n  -y, --yes BOOL             No need to confirm when performing "),s("span",{attrs:{class:"token function"}},[t._v("file")]),t._v(" writing. default is: False\n  -o, --override BOOL        Force override exists file. default is: False\n  -n, --namespace STRING     The class namespace. default is: App\\Controllers\n  --rest BOOL                The class will contains CURD action. default is: False\n  --prefix STRING            The route prefix "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the controller. default is class name\n  --suffix STRING            The class name suffix. default is: Controller\n  --tpl-file STRING          The template "),s("span",{attrs:{class:"token function"}},[t._v("file")]),t._v(" name. default is: command.stub\n  --tpl-dir STRING           The template "),s("span",{attrs:{class:"token function"}},[t._v("file")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("dir")]),t._v(" path."),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: devtool/res/templates"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n// 生成带命名空间的控制器\n\nphp bin/swoft gen:controller Menus @app/module/v1/platform/Controllers -n App\\\\module\\\\v1\\\\platform\\\\Controllers  --prefix /v1/platform/menus --rest -y\n\n")])])]),s("h2",{attrs:{id:"创建实体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建实体","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建实体")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("\nphp bin/swoft entity:create -d dbname mytable,table2\n\n"),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n\nDescription:\n  Auto create entity by table structure\n\nUsage:\nentity:create -d"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("--database"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("database"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" --instance "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("instance"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\nentity:create -d"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("--database"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("database"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -instnace "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("instnace"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\nentity:create -d"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("--database"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("database"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" --i"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("--include"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("table"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" --instnace "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("instnace"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\nentity:create -d"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("--database"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("database"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" --i"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("--include"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("table"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" -instnace "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("instnace"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\nentity:create -d"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("--database"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("database"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" --i"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("--include"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("table1,table2"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" --instnace "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("instnace"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\nentity:create -d"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("--database"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("database"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" --i"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("--include"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("table1,table2"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" -e"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("--exclude"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("table3"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" --instance "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("instance"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\nentity:create -d"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("--database"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("database"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" --i"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("--include"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("table1,table2"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" -e"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("--exclude"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("table3,table4"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" --instance "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("instance"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\nOptions:\n  -d 数据库\n--database 数据库\n-i 指定特定的数据表，多表之间用逗号分隔\n--include 指定特定的数据表，多表之间用逗号分隔\n-e 排除指定的数据表，多表之间用逗号分隔\n--exclude 排除指定的数据表，多表之间用逗号分隔\n--remove-table-prefix 去除前缀\n--entity-file-path 实体路径"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("必须在以@app开头并且在app目录下存在的目录,否则将会重定向到@app/Models/Entity"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n--instance 设置数据库实例，默认default\n--extends 设置模型的实体基类\n\nExample:\n  php bin/swoft entity:create -d "),s("span",{attrs:{class:"token function"}},[t._v("test")]),t._v("\n\n\n  php bin/swoft entity:create -d wancll_cloud_v1 -i system_staff_role_entity_powers --entity-file-path @app/module/v1/platform/Models/Entity\n\n")])])])])}],!1,null,null,null);o.options.__file="use.md";a.default=o.exports}}]);
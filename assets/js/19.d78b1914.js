(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{199:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("服务器环境：CentOS7.5(64位)")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),n("p",[n("a",{attrs:{href:"https://hub.docker.com/r/swoft/swoft/",target:"_blank",rel:"noopener noreferrer"}},[t._v("swoft镜像"),n("OutboundLink")],1)]),t._v(" "),t._m(4),t._m(5),t._v(" "),n("blockquote",[n("p",[t._v("PHP官网："),n("a",{attrs:{href:"http://php.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://php.net"),n("OutboundLink")],1)])]),t._v(" "),t._m(6),t._m(7),t._v(" "),n("blockquote",[n("p",[t._v("Mysql下载地址："),n("a",{attrs:{href:"https://dev.mysql.com/downloads/mysql/5.7.html#downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dev.mysql.com/downloads/mysql/5.7.html#downloads"),n("OutboundLink")],1)])]),t._v(" "),t._m(8)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"linux服务器搭建完整应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux服务器搭建完整应用","aria-hidden":"true"}},[this._v("#")]),this._v(" linux服务器搭建完整应用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装docker","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装Docker")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -qO- https://get.docker.com "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" sh\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#########################")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 若提示wget命令不存在，执行下面命令安装wget")]),t._v("\nyum -y "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#########################")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -aG docker root\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" docker start\n\ndocker info\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装swoft"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装swoft","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装swoft")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保docker开启，如未开启，执行以下命令：")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" docker start\n\ndocker pull swoft/swoft   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取swoft镜像")]),t._v("\n\ndocker images     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看本地docker镜像")]),t._v("\n\ndocker run -p 80:80 --name swoft  --rm -d swoft/swoft:latest   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行swoft容器")]),t._v("\n\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前正在运行的docker容器")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" localhost  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 访问本地，查看swoft是否正常运行")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拷贝容器文件到本地")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" /home/\n\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" swoft:/var/www/swoft "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意点号，表示拷贝到当前目录")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从本地文件运行swoft容器：")]),t._v("\ndocker run -p 80:80 --name swoft --rm -d -v /home/swoft/:/var/www/swoft swoft/swoft:latest\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 停止容器")]),t._v("\ndocker stop swoft\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重启容器")]),t._v("\ndocker restart swoft\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看docker日志")]),t._v("\ndocker logs swoft\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在docker容器执行其他语言命令")]),t._v("\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),t._v(" -it swoft "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("命令"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行[命令]")]),t._v("\n\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),t._v(" -it swoft php -m   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行 php -m 命令")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装php","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装php")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装文件上传与下载命令")]),t._v("\nyum -y "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" lrzsz\nrz    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上传文件")]),t._v("\nsz    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载文件")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从php官网下载安装包，这里下载了 php-7.2.11.tar.gz")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf php-7.2.11.tar.gz    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解压缩文件")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gcc gcc+ libxml2-devel  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装所需扩展命令")]),t._v("\n\n./configure --prefix"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/home/php --enable-fpm  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定PHP安装路径")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###############################################################")]),t._v("\n当配置PHP时出现  make: *** "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ext/fileinfo/libmagic/apprentice.lo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Error 1 时\n是因为服务器内存不足1G。\n只需要在配置命令中添加 --disable-fileinfo即可 \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###############################################################")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通过make命令进行构建编译")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通过make install命令进行安装")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###############################################################")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 简化PHP执行命令")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" ~/.bash_profile     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编辑文件.bash_profile")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在.bash_profile文件末尾添加：")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alias")]),t._v(" php"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/home/php/bin/php  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置php的实际安装路径")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保存并退出")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行以下命令使配置生效")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("source")]),t._v(" ~/.bash_profile\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###############################################################")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###############################################################")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# php.ini 文件设置")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" /home/php-7.2.11      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入解压后的php源码包中")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" php.ini-development /home/php/lib/   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拷贝到php实际安装到的位置")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" php.ini-development php.ini     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改文件名称")]),t._v("\nphp -i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" php.ini      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看php.ini使用的文件是否正确")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###############################################################")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装mysql")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从官网下载安装包，这里下载了 mysql-5.7.24.tar.gz")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf mysql-5.7.24.tar.gz    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解压缩文件")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" cmake gcc-c++ ncurses-devel perl-Data-Dumper boost boost-doc boost-devel "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装所需扩展命令")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装boost")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" /home/boost/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" http://www.sourceforge.net/projects/boost/files/boost/1.59.0/boost_1_59_0.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xvzf boost_1_59_0.tar.gz\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入mysql解压后的目录，执行下面命令")]),t._v("\ncmake \\\n-DCMAKE_INSTALL_PREFIX"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/home/mysql \\\n-DMYSQL_DATADIR"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/home/mysql-data/data \\\n-DSYSCONFDIR"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc \\\n-DMYSQL_USER"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mysql \\\n-DWITH_MYISAM_ST0RAGE_ENGINE"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 \\\n-DWITH_INN0BASE_ST0RAGE_ENGINE"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 \\\n-DWITH_ARCHIVE_ST0RAGE_ENGINE"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 \\\n-DWITH_MEM0RY_ST0RAGE_ENGINE"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 \\\n-DWITH_READLINE"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 \\\n-DMYSQL_UNIX_ADDR"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/var/run/mysql/mysql.sock \\\n-DMYSQL_TCP_PORT"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("3306 \\\n-DENABLED_L0CAL_INFILE"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 \\\n-DENABLE_D0WNL0ADS"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 \\\n-DWITH_PARTITI0N_ST0RAGE_ENGINE"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 \\\n-DEXTRA_CHARSETS"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("all \\\n-DDEFAULT_CHARSET"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8mb4 \\\n-DDEFAULT_C0LLATI0N"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8mb4_general_ci \\\n-DWITH_DEBUG"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("0 \\\n-DMYSQL_MAINTAINER_MODE"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("0 \\\n-DWITH_BOOST"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/home/boost \\\n-DWITH_SSL:STRING"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("bundled \\\n-DWITH_ZLIB:STRING"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("bundled\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行make命令")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行make install命令")]),t._v("\n\n")])])])}],!1,null,null,null);e.options.__file="demo.md";s.default=e.exports}}]);
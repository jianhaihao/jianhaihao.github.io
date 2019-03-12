(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{175:function(t,s,n){"use strict";n.r(s);var e=n(0),a=Object(e.a)({},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content"},[this._m(0),this._v(" "),this._m(1),this._v(" "),s("p",[s("a",{attrs:{href:"https://hub.docker.com/r/swoft/swoft/",target:"_blank",rel:"noopener noreferrer"}},[this._v("swoft镜像"),s("OutboundLink")],1)]),this._v(" "),this._m(2)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建","aria-hidden":"true"}},[this._v("#")]),this._v(" 环境搭建")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"docker安装swoft"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker安装swoft","aria-hidden":"true"}},[this._v("#")]),this._v(" docker安装swoft")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("\ndocker pull swoft/swoft   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取swoft镜像")]),t._v("\n\ndocker images     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看本地docker镜像")]),t._v("\n\ndocker run -p 80:80 --name swoft  --rm -d swoft/swoft:latest   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行swoft容器")]),t._v("\n\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前正在运行的docker容器")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" localhost  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 访问本地，查看swoft是否正常运行")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拷贝容器文件到本地")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" ~\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" swoft:/var/www/swoft "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意点号，表示拷贝到当前目录")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从本地文件运行swoft容器：")]),t._v("\ndocker run -p 80:80 --name swoft --rm -d -v /home/swoft/:/var/www/swoft swoft/swoft:latest\n\ndocker run -p 80:80 --name swoft --rm -d -v /Users/jianhaihao/Documents/Products/WancllMS-Server/swoft/:/var/www/swoft swoft/swoft:latest\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 停止容器")]),t._v("\ndocker stop swoft\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重启容器")]),t._v("\ndocker restart swoft\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看docker日志")]),t._v("\ndocker logs swoft\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在docker容器执行其他语言命令")]),t._v("\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),t._v(" -it swoft "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("命令"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行[命令]")]),t._v("\n\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),t._v(" -it swoft php -m   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行 php -m 命令")]),t._v("\n\n\n")])])])}],!1,null,null,null);a.options.__file="install.md";s.default=a.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{203:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"linux-常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-常用命令","aria-hidden":"true"}},[t._v("#")]),t._v(" Linux 常用命令")]),t._v(" "),s("h2",{attrs:{id:"命令格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令格式","aria-hidden":"true"}},[t._v("#")]),t._v(" 命令格式")]),t._v(" "),s("blockquote",[s("p",[t._v("命令 [选项] [参数]")]),t._v(" "),s("ul",[s("li",[t._v("# 超级用户的提示符")]),t._v(" "),s("li",[t._v("$ 普通用户的提示符")])])]),t._v(" "),s("h2",{attrs:{id:"查询目录内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询目录内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 查询目录内容")]),t._v(" "),s("blockquote",[s("p",[t._v("ls [选项] [文件或者目录名]")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("ls")]),t._v("\n  -a "),s("span",{attrs:{class:"token comment"}},[t._v("# 显示所有文件")]),t._v("\n  -l "),s("span",{attrs:{class:"token comment"}},[t._v("# 显示详细信息 等于 ll命令")]),t._v("\n  -d "),s("span",{attrs:{class:"token comment"}},[t._v("# 查看目录属性")]),t._v("\n  -h "),s("span",{attrs:{class:"token comment"}},[t._v("# 人性化显示文件大小")]),t._v("\n  -i "),s("span",{attrs:{class:"token comment"}},[t._v("# 显示inode")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("#  d     rwx      ---       ---      .      3     test  test   111   6月 9 04:12  test")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("# 目录 所有者权限 所属组权限 其他人权限 ACL权限 引用计数 所有者 所属组 文件大小 最进修改时间  目录名称")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("-")]),t._v("文件、"),s("code",[t._v("d")]),t._v("目录、"),s("code",[t._v("l")]),t._v("软链接文件")]),t._v(" "),s("li",[s("code",[t._v("u")]),t._v("所有者、"),s("code",[t._v("g")]),t._v("所属组、"),s("code",[t._v("o")]),t._v("其他人")]),t._v(" "),s("li",[s("code",[t._v("r")]),t._v("读、"),s("code",[t._v("w")]),t._v("写、"),s("code",[t._v("x")]),t._v("执行。")])]),t._v(" "),s("h2",{attrs:{id:"目录处理命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录处理命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 目录处理命令")]),t._v(" "),s("h4",{attrs:{id:"创建目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建目录")]),t._v(" "),s("blockquote",[s("p",[t._v("mkdir -p [目录名]")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p dir/document "),s("span",{attrs:{class:"token comment"}},[t._v("# 递归创建")]),t._v("\n")])])]),s("h4",{attrs:{id:"切换目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 切换目录")]),t._v(" "),s("blockquote",[s("p",[t._v("cd [目录]")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" /   "),s("span",{attrs:{class:"token comment"}},[t._v("# 进入根目录")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" ~   "),s("span",{attrs:{class:"token comment"}},[t._v("# 进入当前用户的家目录")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v("     "),s("span",{attrs:{class:"token comment"}},[t._v("# 进入当前用户的家目录")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" -   "),s("span",{attrs:{class:"token comment"}},[t._v("# 进入上次目录")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v("  "),s("span",{attrs:{class:"token comment"}},[t._v("# 进入上级目录")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v("   "),s("span",{attrs:{class:"token comment"}},[t._v("# 进入当前目录")]),t._v("\n")])])]),s("h4",{attrs:{id:"查询所在目录位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询所在目录位置","aria-hidden":"true"}},[t._v("#")]),t._v(" 查询所在目录位置")]),t._v(" "),s("blockquote",[s("p",[t._v("pwd")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("pwd")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("# 显示当前目录 print working directory")]),t._v("\n")])])]),s("h4",{attrs:{id:"删除空目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除空目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 删除空目录")]),t._v(" "),s("blockquote",[s("p",[t._v("rmdir [目录名]")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("rmdir")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目录名"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("# 仅能删除空目录 remove empty directory")]),t._v("\n")])])]),s("h2",{attrs:{id:"文件处理命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件处理命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 文件处理命令")]),t._v(" "),s("h4",{attrs:{id:"删除文件或目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除文件或目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 删除文件或目录")]),t._v(" "),s("blockquote",[s("p",[t._v("rm -rf [文件或目录]")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("文件名"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    "),s("span",{attrs:{class:"token comment"}},[t._v("# 删除文件")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("rm")]),t._v(" -r "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("目录名"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("# 删除目录")]),t._v("\n   -f         "),s("span",{attrs:{class:"token comment"}},[t._v("# 强制force")]),t._v("\n")])])]),s("h4",{attrs:{id:"复制命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复制命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 复制命令")]),t._v(" "),s("blockquote",[s("p",[t._v("cp [选项] [原文件或目录] [目标目录]")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("cp")]),t._v("\n  -r "),s("span",{attrs:{class:"token comment"}},[t._v("# 复制目录")]),t._v("\n  -p "),s("span",{attrs:{class:"token comment"}},[t._v("# 连带文件属性复制")]),t._v("\n  -d "),s("span",{attrs:{class:"token comment"}},[t._v("# 若原文件为链接文件，则复制链接属性")]),t._v("\n  -a "),s("span",{attrs:{class:"token comment"}},[t._v("# 相当于-pdr")]),t._v("\n")])])]),s("h4",{attrs:{id:"剪切或改名命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#剪切或改名命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 剪切或改名命令")]),t._v(" "),s("blockquote",[s("p",[t._v("mv [原文件或目录] [目标目录]")]),t._v(" "),s("ul",[s("li",[t._v("移动文件或者文件夹")]),t._v(" "),s("li",[t._v("可用于改名，如果原文件和目标文件在同一个目录")])])]),t._v(" "),s("h2",{attrs:{id:"链接命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 链接命令")]),t._v(" "),s("blockquote",[s("p",[t._v("ln -s [原文件] [目标文件]")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s "),s("span",{attrs:{class:"token comment"}},[t._v("# 生成软链接")]),t._v("\n")])])]),s("blockquote",[s("ul",[s("li",[t._v("硬链接特征")])]),t._v(" "),s("ol",[s("li",[t._v("拥有相同的i节点和存储 block 块，可以看作是同一个文件")]),t._v(" "),s("li",[t._v("可以通过 i 节点识别")]),t._v(" "),s("li",[t._v("不能跨分区")]),t._v(" "),s("li",[t._v("不能针对目录使用")])])]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("软链接特征")])]),t._v(" "),s("ol",[s("li",[t._v("类似于 Windows 快捷方式")]),t._v(" "),s("li",[t._v("软链接拥有自己的 I 节点和 block 块，但是数据块中只保存原文件的文件名和 I 节点号，并没有实际的文件数据")]),t._v(" "),s("li",[s("code",[t._v("lxwrxwrxwr")]),t._v("为软链接的权限（真正权限依赖于原文件的权限）")]),t._v(" "),s("li",[t._v("修改任意文件，另一个都改变")]),t._v(" "),s("li",[t._v("删除原文件，软链接不能使用")]),t._v(" "),s("li",[t._v("写软链接时如果原文件不写绝对路径，那么原文件和目标文件必须在同一级目录下")])])]),t._v(" "),s("h2",{attrs:{id:"文件搜索命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件搜索命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 文件搜索命令")]),t._v(" "),s("h4",{attrs:{id:"文件搜索命令locate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件搜索命令locate","aria-hidden":"true"}},[t._v("#")]),t._v(" 文件搜索命令locate")]),t._v(" "),s("ul",[s("li",[t._v("在后台数据库中按文件名搜索，速度快")]),t._v(" "),s("li",[t._v("/var/db/locate.database 数据库，一天一更新")]),t._v(" "),s("li",[t._v("/etc/locate.rc 配置文件")]),t._v(" "),s("li",[t._v("updatedb 更新数据库")])]),t._v(" "),s("h4",{attrs:{id:"命令搜索命令whereis和which"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令搜索命令whereis和which","aria-hidden":"true"}},[t._v("#")]),t._v(" 命令搜索命令whereis和which")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("whereis")]),t._v("\n  -b "),s("span",{attrs:{class:"token comment"}},[t._v("# 只看可执行文件")]),t._v("\n  -m "),s("span",{attrs:{class:"token comment"}},[t._v("# 只看帮助文档")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("which")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("# 类似于whereis,查看命令的别名")]),t._v("\n")])])]),s("h4",{attrs:{id:"文件搜索命令-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件搜索命令-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 文件搜索命令")]),t._v(" "),s("blockquote",[s("p",[t._v("find [搜索范围] [搜索条件]")])]),t._v(" "),s("ul",[s("li",[t._v("速度慢，完全匹配")]),t._v(" "),s("li",[s("code",[t._v("*")]),t._v("匹配任意字符")]),t._v(" "),s("li",[s("code",[t._v("?")]),t._v("匹配一个字符")]),t._v(" "),s("li",[s("code",[t._v("[]")]),t._v("任意一个中括号里面的一个字符")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("find")]),t._v("\n  / -name "),s("span",{attrs:{class:"token string"}},[t._v("'*.log'")]),t._v("\n    -iname "),s("span",{attrs:{class:"token comment"}},[t._v("# 忽略大小写")]),t._v("\n    -user root\n    -nouser "),s("span",{attrs:{class:"token comment"}},[t._v("# 查找没有所有者的文件")]),t._v("\n    -mtime\n      + 10 "),s("span",{attrs:{class:"token comment"}},[t._v("# 查找十天前的文件")]),t._v("\n      - 10  "),s("span",{attrs:{class:"token comment"}},[t._v("#查找时间内的时间")]),t._v("\n      10 "),s("span",{attrs:{class:"token comment"}},[t._v("# 十天当天")]),t._v("\n    -atime "),s("span",{attrs:{class:"token comment"}},[t._v("# 文件访问时间")]),t._v("\n    -ctime "),s("span",{attrs:{class:"token comment"}},[t._v("# 改变文件属性")]),t._v("\n    -size\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("+-"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 25k "),s("span",{attrs:{class:"token comment"}},[t._v("# 文件大小")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("+-"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 2M\n    -inum "),s("span",{attrs:{class:"token comment"}},[t._v("# 根据i节点搜索")]),t._v("\n    -a 与（and）\n    -o 或（or）\n    -exec "),s("span",{attrs:{class:"token function"}},[t._v("ls")]),t._v(" -ls "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \\  "),s("span",{attrs:{class:"token comment"}},[t._v("# 给find执行的结果执行命令")]),t._v("\n")])])]),s("h4",{attrs:{id:"搜索字符串命令grep"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搜索字符串命令grep","aria-hidden":"true"}},[t._v("#")]),t._v(" 搜索字符串命令grep")]),t._v(" "),s("blockquote",[s("p",[t._v("grep [选项] 字符串 文件名\n（在文件当中匹配符合条件的字符串，包含匹配）")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("grep")]),t._v("\n  -i "),s("span",{attrs:{class:"token comment"}},[t._v("# 忽略大小写")]),t._v("\n  -v "),s("span",{attrs:{class:"token comment"}},[t._v("# 排除指定字符串")]),t._v("\n")])])]),s("h2",{attrs:{id:"压缩与解压缩命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#压缩与解压缩命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 压缩与解压缩命令")]),t._v(" "),s("ul",[s("li",[t._v("常用压缩格式"),s("code",[t._v(".zip")]),t._v("，"),s("code",[t._v(".gz")]),t._v("，"),s("code",[t._v(".bz2")]),t._v("，"),s("code",[t._v(".tar.gz")]),t._v("，"),s("code",[t._v(".tar.bz2")])])]),t._v(" "),s("h4",{attrs:{id:"zip-格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zip-格式","aria-hidden":"true"}},[t._v("#")]),t._v(" .zip 格式")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("zip")]),t._v(" 压缩文件名 源文件     "),s("span",{attrs:{class:"token comment"}},[t._v("# 压缩文件")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("zip")]),t._v(" -r 压缩文件名 源文件  "),s("span",{attrs:{class:"token comment"}},[t._v("# 压缩目录")]),t._v("\n\nunzip 文件名            "),s("span",{attrs:{class:"token comment"}},[t._v("# 解压缩")]),t._v("\n")])])]),s("h4",{attrs:{id:"gz-格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gz-格式","aria-hidden":"true"}},[t._v("#")]),t._v(" .gz 格式")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("gzip")]),t._v(" 源文件              "),s("span",{attrs:{class:"token comment"}},[t._v("# 压缩为.gz格式的压缩文件，源文件会消失")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("gzip")]),t._v(" -c 源文件 "),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" 压缩文件 "),s("span",{attrs:{class:"token comment"}},[t._v("# 压缩为.gz格式, 源文件保留")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("gzip")]),t._v(" -r 目录            "),s("span",{attrs:{class:"token comment"}},[t._v("# 压缩目录下所有的子文件,但是不能压缩目录")]),t._v("\n\n"),s("span",{attrs:{class:"token function"}},[t._v("gzip")]),t._v(" -d 压缩文件      "),s("span",{attrs:{class:"token comment"}},[t._v("# 解压缩文件")]),t._v("\ngunzip 压缩文件       "),s("span",{attrs:{class:"token comment"}},[t._v("# 解压缩文件")]),t._v("\ngunzip -r 压缩文件    "),s("span",{attrs:{class:"token comment"}},[t._v("# 解压缩目录")]),t._v("\n")])])]),s("h4",{attrs:{id:"bz2-格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bz2-格式","aria-hidden":"true"}},[t._v("#")]),t._v(" .bz2 格式")]),t._v(" "),s("blockquote",[s("p",[t._v("不能压缩目录， 不保留源文件")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("bzip2")]),t._v(" 源文件    "),s("span",{attrs:{class:"token comment"}},[t._v("# 压缩为.bz2格式, 不保留源文件（不能压缩目录）")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("bzip2")]),t._v(" -k 源文件 "),s("span",{attrs:{class:"token comment"}},[t._v("# 压缩之后保留原文件")]),t._v("\n\n"),s("span",{attrs:{class:"token function"}},[t._v("bzip2")]),t._v(" -d 压缩文件  "),s("span",{attrs:{class:"token comment"}},[t._v("# 解压缩，-k保留压缩文件")]),t._v("\nbunzip2 压缩文件   "),s("span",{attrs:{class:"token comment"}},[t._v("# 解压缩，-k保留压缩文件")]),t._v("\n")])])]),s("h4",{attrs:{id:"打包命令tar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包命令tar","aria-hidden":"true"}},[t._v("#")]),t._v(" 打包命令tar")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("\nyum -y "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("bzip2")]),t._v("  "),s("span",{attrs:{class:"token comment"}},[t._v("# 安装bzip2")]),t._v("\n\n"),s("span",{attrs:{class:"token function"}},[t._v("tar")]),t._v(" \n  -c "),s("span",{attrs:{class:"token comment"}},[t._v("# 打包")]),t._v("\n  -v "),s("span",{attrs:{class:"token comment"}},[t._v("# 显示过程")]),t._v("\n  -f "),s("span",{attrs:{class:"token comment"}},[t._v("# 指定打包后的文件名")]),t._v("\n  \n  "),s("span",{attrs:{class:"token function"}},[t._v("tar")]),t._v(" -cvf longzls.tar longzls "),s("span",{attrs:{class:"token comment"}},[t._v("# 打包")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xvf longzls.tar "),s("span",{attrs:{class:"token comment"}},[t._v("# 解打包")]),t._v("\n  \n  "),s("span",{attrs:{class:"token function"}},[t._v("tar")]),t._v(" -jcvf 压缩包名.tar.bz2 源文件 "),s("span",{attrs:{class:"token comment"}},[t._v("# 压缩")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("tar")]),t._v(" -jxvf 压缩包名.tar.bz2 "),s("span",{attrs:{class:"token comment"}},[t._v("# 解压缩")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zcvf 压缩包名.tar.gz 源文件 "),s("span",{attrs:{class:"token comment"}},[t._v("# 压缩")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf 压缩包名.tar.gz "),s("span",{attrs:{class:"token comment"}},[t._v("# 解压缩")]),t._v("\n  \n  "),s("span",{attrs:{class:"token function"}},[t._v("tar")]),t._v(" -jxvf 压缩包名.tar.bz2 -C 目标文件  "),s("span",{attrs:{class:"token comment"}},[t._v("# 指定解压缩位置")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zcvf 压缩包名.tar.gz 源文件 源文件 "),s("span",{attrs:{class:"token comment"}},[t._v("# 压缩多个目录或者文件")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("tar")]),t._v(" -ztvf 压缩包名.tar.gz "),s("span",{attrs:{class:"token comment"}},[t._v("# 查看压缩文件，不解压缩")]),t._v("\n")])])]),s("h2",{attrs:{id:"清屏命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清屏命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 清屏命令")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("clear")]),t._v("     "),s("span",{attrs:{class:"token comment"}},[t._v("# clear命令将会刷新屏幕，本质上只是让终端显示页向后翻了一页，如果向上滚动屏幕还可以看到之前的操作信息")]),t._v("\nCtrl + l    "),s("span",{attrs:{class:"token comment"}},[t._v("# 小写的L, 等同于clear命令")]),t._v("\n\n\nreset     "),s("span",{attrs:{class:"token comment"}},[t._v("# reset命令将完全刷新终端屏幕，之前的终端输入操作信息将都会被清空，这样虽然比较清爽，但整个命令过程速度有点慢，使用较少")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("#reset命令在你的终端控制错乱时非常有用。如输入字符不出现在光标的位置的情况。还有当你敲击回车键时，新提示符并没有出现在新行上而是出现在老提示符的前面。此时reset命令就能用来修正这些问题")]),t._v("\n\n"),s("span",{attrs:{class:"token function"}},[t._v("printf")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"\\ec"')]),t._v(" 或 "),s("span",{attrs:{class:"token function"}},[t._v("printf")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"\\033c"')]),t._v("  "),s("span",{attrs:{class:"token comment"}},[t._v("#真正清空终端屏幕, 快速清屏")]),t._v("\n\n")])])])])}],!1,null,null,null);e.options.__file="command.md";a.default=e.exports}}]);
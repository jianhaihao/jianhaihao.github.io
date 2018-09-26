(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{169:function(t,_,v){"use strict";v.r(_);var a=v(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"fs-文件系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fs-文件系统","aria-hidden":"true"}},[t._v("#")]),t._v(" fs 文件系统")]),t._v(" "),v("blockquote",[v("p",[t._v("提供了一些与系统文件交互的 api")])]),t._v(" "),v("p",[t._v("所有的系统文件操作都提供同步和异步两种方式")]),t._v(" "),v("h2",{attrs:{id:"文件路径"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文件路径","aria-hidden":"true"}},[t._v("#")]),t._v(" 文件路径")]),t._v(" "),v("p",[t._v("可以是以下三种")]),t._v(" "),v("ul",[v("li",[t._v("字符串(相对路径、绝对路径)")]),t._v(" "),v("li",[t._v("Buffer")]),t._v(" "),v("li",[v("code",[t._v("file:")]),t._v("协议的 url 对象")])]),t._v(" "),v("h2",{attrs:{id:"线程池的使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线程池的使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 线程池的使用")]),t._v(" "),v("p",[t._v("除了"),v("code",[t._v("fs.FSWatcher()")]),t._v("和显示同步的方法外,都是用了线程池去操作")]),t._v(" "),v("h2",{attrs:{id:"文件描述符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文件描述符","aria-hidden":"true"}},[t._v("#")]),t._v(" 文件描述符")]),t._v(" "),v("p",[t._v("在 POSIX 系统中内核为所有进程维护者一张当前打开着的文件与资源的表格,每个打开的文件都会分配一个名为文件描述符的数值标识,可以根据这些数值标识来追踪每个文件,Windows 也适用了类似的机制来追踪资源,为了方便,Node 抽象了不同操作系统之间的差异,为所有打开的文件分配了数值的文件描述符")]),t._v(" "),v("p",[v("code",[t._v("fs.open()")]),t._v("方法用于分配一个新的文件描述符.一旦分配了,可以利用文件描述符读取数据,写入数据或者查看文件信息")]),t._v(" "),v("p",[t._v("大多数操作系统都会限制打开文件描述符的数量,所以当操作完成时须关闭文件描述符,否则造成内存泄漏,应用崩溃")]),t._v(" "),v("h2",{attrs:{id:"fs-fswatcher-类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fs-fswatcher-类","aria-hidden":"true"}},[t._v("#")]),t._v(" fs.FSWatcher 类")]),t._v(" "),v("p",[v("code",[t._v("fs.watch()")]),t._v("会返回一个"),v("code",[t._v("fs.FSWatcher")]),t._v("对象,每当监视的文件发生变化,都会出发"),v("code",[t._v("change")]),t._v("事件")]),t._v(" "),v("p",[v("strong",[t._v("change 事件")])]),t._v(" "),v("ul",[v("li",[v("code",[t._v("eventType")]),t._v("事件类型")]),t._v(" "),v("li",[v("code",[t._v("filename")]),t._v("改变的文件名")])]),t._v(" "),v("p",[t._v("当被监视的目录和文件发生改变时触发")]),t._v(" "),v("p",[v("strong",[t._v("error 事件")])]),t._v(" "),v("ul",[v("li",[v("code",[t._v("error")])])]),t._v(" "),v("p",[t._v("当监视文件发生错误时触发")]),t._v(" "),v("p",[v("strong",[t._v("watch.close()")])]),t._v(" "),v("p",[t._v("停止监视文件的变化")]),t._v(" "),v("h2",{attrs:{id:"fs-readstream-类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fs-readstream-类","aria-hidden":"true"}},[t._v("#")]),t._v(" fs.ReadStream 类")]),t._v(" "),v("p",[t._v("成功调起"),v("code",[t._v("fs.createReadStream()")]),t._v("会返回一个"),v("code",[t._v("fs.readStream")]),t._v("对象")]),t._v(" "),v("p",[v("strong",[t._v("close 事件")])]),t._v(" "),v("p",[v("code",[t._v("fs.readStream")]),t._v("底层的文件描述符被关闭时触发")]),t._v(" "),v("p",[v("strong",[t._v("open 事件")])]),t._v(" "),v("p",[v("code",[t._v("fs.readStream")]),t._v("文件描述符被打开时触发")]),t._v(" "),v("p",[v("strong",[t._v("ready 事件")])]),t._v(" "),v("p",[v("code",[t._v("fs.readStream")]),t._v("准备好时触发")]),t._v(" "),v("p",[v("strong",[t._v("readStream.bytesRead")])]),t._v(" "),v("p",[t._v("已读取的字节数")]),t._v(" "),v("p",[v("strong",[t._v("readStream.path")])]),t._v(" "),v("p",[t._v("流正在读取文件的路径")]),t._v(" "),v("h2",{attrs:{id:"fs-stats-类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fs-stats-类","aria-hidden":"true"}},[t._v("#")]),t._v(" fs.stats 类")]),t._v(" "),v("p",[v("code",[t._v("fs.stats")]),t._v("类提供了文件的信息")]),t._v(" "),v("p",[t._v("获取")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("fs.stat()")])]),t._v(" "),v("li",[v("code",[t._v("fs.lstat()")])]),t._v(" "),v("li",[v("code",[t._v("fs.fstat()")])])]),t._v(" "),v("p",[t._v("如果传入函数的"),v("code",[t._v("options")]),t._v("的"),v("code",[t._v("bigint")]),t._v("属性为"),v("code",[t._v("true")]),t._v(",则数值则会使"),v("code",[t._v("bitint")]),t._v("型,而不是"),v("code",[t._v("number")]),t._v("型")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("method")]),t._v(" "),v("th",[t._v("desc")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("stats.isCharacterDevice()")]),t._v(" "),v("td",[t._v("是否是一个字符设备")])]),t._v(" "),v("tr",[v("td",[t._v("stats.isDirectory()")]),t._v(" "),v("td",[t._v("是否是一个目录")])]),t._v(" "),v("tr",[v("td",[t._v("stats.isFIFO()")]),t._v(" "),v("td",[t._v("是否是一个先进先出的管道")])]),t._v(" "),v("tr",[v("td",[t._v("stats.isFile()")]),t._v(" "),v("td",[t._v("是否是一个文件")])]),t._v(" "),v("tr",[v("td",[t._v("stats.isSocket")]),t._v(" "),v("td",[t._v("是否是一个 socket")])]),t._v(" "),v("tr",[v("td",[t._v("stats.isSymbolicLink()")]),t._v(" "),v("td",[t._v("是否是一个符号链接,只有在使用"),v("code",[t._v("fs.lstat()")]),t._v("有用")])])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("attribute")]),t._v(" "),v("th",[t._v("desc")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("stats.dev")]),t._v(" "),v("td",[t._v("包含文件设备的数值标识")])]),t._v(" "),v("tr",[v("td",[t._v("stats.ino")]),t._v(" "),v("td",[t._v("文件系统特定的文件索引节点数值")])]),t._v(" "),v("tr",[v("td",[t._v("stats.mode")]),t._v(" "),v("td",[t._v("标识文件类型与模式的位域")])]),t._v(" "),v("tr",[v("td",[t._v("stats.nlink")]),t._v(" "),v("td",[t._v("文件硬链接的数量")])]),t._v(" "),v("tr",[v("td",[t._v("stats.uid")]),t._v(" "),v("td",[t._v("文件拥有者的数值型用户标识")])]),t._v(" "),v("tr",[v("td",[t._v("stats.gid")]),t._v(" "),v("td",[t._v("文件拥有者所在群组数值型群组标识")])]),t._v(" "),v("tr",[v("td",[t._v("stats.size")]),t._v(" "),v("td",[t._v("文件的字节大小")])]),t._v(" "),v("tr",[v("td",[t._v("stats.blksize")]),t._v(" "),v("td",[t._v("文件用语 I/O 操作块的大小")])]),t._v(" "),v("tr",[v("td",[t._v("stats.block")]),t._v(" "),v("td",[t._v("分配给文件块的数量")])]),t._v(" "),v("tr",[v("td",[t._v("stats.atimeMs")]),t._v(" "),v("td",[t._v("文件最后一次被访问的时间戳")])]),t._v(" "),v("tr",[v("td",[t._v("stats.mtimeMs")]),t._v(" "),v("td",[t._v("文件最后一次被修改的时间戳")])]),t._v(" "),v("tr",[v("td",[t._v("stats.ctimeMs")]),t._v(" "),v("td",[t._v("文件状态最后一次被改变的时间戳")])]),t._v(" "),v("tr",[v("td",[t._v("stats.birthtimeMs")]),t._v(" "),v("td",[t._v("文件创建时间的时间戳")])]),t._v(" "),v("tr",[v("td",[t._v("stats.atime")]),t._v(" "),v("td",[t._v("文件最后一次被访问的时间")])]),t._v(" "),v("tr",[v("td",[t._v("stats.mtime")]),t._v(" "),v("td",[t._v("文件最后一次被修改的时间")])]),t._v(" "),v("tr",[v("td",[t._v("stats.ctime")]),t._v(" "),v("td",[t._v("文件状态最后一次被改变的时间")])]),t._v(" "),v("tr",[v("td",[t._v("stats.birthtime")]),t._v(" "),v("td",[t._v("文件的创建时间")])])])]),t._v(" "),v("h3",{attrs:{id:"stat-时间的值"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#stat-时间的值","aria-hidden":"true"}},[t._v("#")]),t._v(" stat 时间的值")]),t._v(" "),v("p",[t._v("时间戳均精确到毫秒,精度与平台相关")]),t._v(" "),v("h2",{attrs:{id:"fs-writestream-类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fs-writestream-类","aria-hidden":"true"}},[t._v("#")]),t._v(" fs.WriteStream 类")]),t._v(" "),v("p",[t._v("是一个可写流")]),t._v(" "),v("p",[v("strong",[t._v("close 事件")])]),t._v(" "),v("p",[v("code",[t._v("WriteStream")]),t._v("底层的文件描述符被关闭时触发")]),t._v(" "),v("p",[v("strong",[t._v("open 事件")])]),t._v(" "),v("p",[t._v("文件被打开时触发")]),t._v(" "),v("p",[v("strong",[t._v("ready 事件")])]),t._v(" "),v("p",[v("code",[t._v("fs.WriteStream")]),t._v("准备好的时候触发")]),t._v(" "),v("p",[v("strong",[t._v("writeStream.bytesWritten")])]),t._v(" "),v("p",[t._v("已经写入的字节数")]),t._v(" "),v("p",[v("strong",[t._v("writeStream.path")])]),t._v(" "),v("p",[t._v("流正在写入的文件的路径,指定在"),v("code",[t._v("fs.createWriteStream()")]),t._v("的第一个参数")]),t._v(" "),v("h2",{attrs:{id:"fs-access-path-mode-callback"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fs-access-path-mode-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" fs.access(path[, mode], callback)")]),t._v(" "),v("p",[t._v("测试"),v("code",[t._v("path")]),t._v("指定目录或文件的用户权限")]),t._v(" "),v("p",[t._v("参数")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("path")])]),t._v(" "),v("li",[v("code",[t._v("mode")]),t._v("默认"),v("code",[t._v("fs.constants.F_OK")])]),t._v(" "),v("li",[v("code",[t._v("callback")]),t._v(" "),v("ul",[v("li",[t._v("error")])])])]),t._v(" "),v("p",[t._v("不建议在打开,写入,读取文件的时候调用此方法")]),t._v(" "),v("p",[v("strong",[t._v("fs.accessSync()")])]),t._v(" "),v("p",[v("code",[t._v("fs.access()")]),t._v("方法的同步版本")]),t._v(" "),v("h2",{attrs:{id:"fs-appendfile-path-data-options-callback"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fs-appendfile-path-data-options-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" fs.appendFile(path, data[, options], callback)")]),t._v(" "),v("p",[t._v("异步追加数据到文件,如果文件不存在则创建文件")]),t._v(" "),v("p",[v("strong",[t._v("fs.appendFileSync()")])]),t._v(" "),v("p",[v("code",[t._v("fs.appendFile()")]),t._v("方法的同步版本")]),t._v(" "),v("h2",{attrs:{id:"fs-chmod-path-mode-callback"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fs-chmod-path-mode-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" fs.chmod(path, mode, callback)")]),t._v(" "),v("p",[t._v("改变文件的权限")]),t._v(" "),v("p",[t._v("mode 常量")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("mode")]),t._v(" "),v("th",[t._v("Octal")]),t._v(" "),v("th",[t._v("desc")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("fs.constants.S_IRUSR")]),t._v(" "),v("td",[t._v("0o400")]),t._v(" "),v("td",[t._v("read by owner")])]),t._v(" "),v("tr",[v("td",[t._v("fs.constants.S_IWUSR")]),t._v(" "),v("td",[t._v("0o200")]),t._v(" "),v("td",[t._v("write by owner")])]),t._v(" "),v("tr",[v("td",[t._v("fs.constants.S_IXUSR")]),t._v(" "),v("td",[t._v("0o100")]),t._v(" "),v("td",[t._v("execute/search by owner")])]),t._v(" "),v("tr",[v("td",[t._v("fs.constants.S_IRGRP")]),t._v(" "),v("td",[t._v("0o40")]),t._v(" "),v("td",[t._v("read by group")])]),t._v(" "),v("tr",[v("td",[t._v("fs.constants.S_IWGRP")]),t._v(" "),v("td",[t._v("0o20")]),t._v(" "),v("td",[t._v("write by group")])]),t._v(" "),v("tr",[v("td",[t._v("fs.constants.S_IXGRP")]),t._v(" "),v("td",[t._v("0o10")]),t._v(" "),v("td",[t._v("execute/search by group")])]),t._v(" "),v("tr",[v("td",[t._v("fs.constants.S_IROTH")]),t._v(" "),v("td",[t._v("0o4")]),t._v(" "),v("td",[t._v("read by others")])]),t._v(" "),v("tr",[v("td",[t._v("fs.constants.S_IWOTH")]),t._v(" "),v("td",[t._v("0o2")]),t._v(" "),v("td",[t._v("white by others")])]),t._v(" "),v("tr",[v("td",[t._v("fs.constants.S_IXOTH")]),t._v(" "),v("td",[t._v("0o1")]),t._v(" "),v("td",[t._v("execute/search by others")])])])]),t._v(" "),v("p",[v("strong",[t._v("fs.chmodSync()")])]),t._v(" "),v("p",[v("code",[t._v("fs.chmod()")]),t._v("的同步版本")]),t._v(" "),v("h2",{attrs:{id:"fs-chown-path-uid-gid-callback"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fs-chown-path-uid-gid-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" fs.chown(path, uid, gid, callback)")]),t._v(" "),v("p",[t._v("问遍文件所有者和群组")]),t._v(" "),v("p",[v("strong",[t._v("fs.chownSync()")])]),t._v(" "),v("p",[v("code",[t._v("fs.chown()")]),t._v("的同步版本")]),t._v(" "),v("h2",{attrs:{id:"fs-constants"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fs-constants","aria-hidden":"true"}},[t._v("#")]),t._v(" fs.constants")]),t._v(" "),v("p",[t._v("包含常用文件操作系统的常量")]),t._v(" "),v("h2",{attrs:{id:"fs-copyfile-src-dest-flags-callback"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fs-copyfile-src-dest-flags-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" fs.copyFile(src, dest[, flags], callback)")]),t._v(" "),v("p",[t._v("复制文件")]),t._v(" "),v("p",[v("strong",[t._v("fs.copyFileSync()")])]),t._v(" "),v("p",[v("code",[t._v("fs.copyFile()")]),t._v("的同步版本")]),t._v(" "),v("h2",{attrs:{id:"fs-createreadstream-path-options"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fs-createreadstream-path-options","aria-hidden":"true"}},[t._v("#")]),t._v(" fs.createReadStream(path[, options])")]),t._v(" "),v("p",[t._v("创建一个文件读入流")]),t._v(" "),v("p",[t._v("参数")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("path")]),t._v("文件路径")]),t._v(" "),v("li",[v("code",[t._v("options")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("flags")]),t._v("支持的文件系统 flag,默认为"),v("code",[t._v("r")])]),t._v(" "),v("li",[v("code",[t._v("encoding")]),t._v("默认为"),v("code",[t._v("null")])]),t._v(" "),v("li",[v("code",[t._v("fd")]),t._v("默认为"),v("code",[t._v("null")])]),t._v(" "),v("li",[v("code",[t._v("mode")]),t._v("默认为"),v("code",[t._v("0o666")])]),t._v(" "),v("li",[v("code",[t._v("autoClose")]),t._v("默认为"),v("code",[t._v("true")])]),t._v(" "),v("li",[v("code",[t._v("start")])]),t._v(" "),v("li",[v("code",[t._v("end")]),t._v("默认"),v("code",[t._v("Infinity")])]),t._v(" "),v("li",[v("code",[t._v("highWaterMark")]),t._v("默认"),v("code",[t._v("64*1024")])])])])]),t._v(" "),v("h2",{attrs:{id:"fs-createwritestream-path-options"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fs-createwritestream-path-options","aria-hidden":"true"}},[t._v("#")]),t._v(" fs.createWriteStream(path[, options])")]),t._v(" "),v("p",[t._v("创建一个文件写入流")]),t._v(" "),v("p",[t._v("参数")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("path")]),t._v("文件路径")]),t._v(" "),v("li",[v("code",[t._v("options")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("flags")])]),t._v(" "),v("li",[v("code",[t._v("encoding")])]),t._v(" "),v("li",[v("code",[t._v("fd")])]),t._v(" "),v("li",[v("code",[t._v("mode")])]),t._v(" "),v("li",[v("code",[t._v("autoClose")])]),t._v(" "),v("li",[v("code",[t._v("start")])])])])]),t._v(" "),v("h2",{attrs:{id:"fs-existsync-path"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fs-existsync-path","aria-hidden":"true"}},[t._v("#")]),t._v(" fs.existSync(path)")]),t._v(" "),v("p",[t._v("同步判断路径是否存在")]),t._v(" "),v("h2",{attrs:{id:"fs-readdir-path-options-callback"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fs-readdir-path-options-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" fs.readdir(path[, options], callback)")]),t._v(" "),v("p",[t._v("读取一个目录的内容")]),t._v(" "),v("p",[t._v("参数")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("path")])]),t._v(" "),v("li",[v("code",[t._v("options")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("encoding")])])])]),t._v(" "),v("li",[v("code",[t._v("callback")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("err")])]),t._v(" "),v("li",[v("code",[t._v("files")]),t._v("不包括"),v("code",[t._v(".")]),t._v("和"),v("code",[t._v("..")]),t._v("文件名的数组")])])])]),t._v(" "),v("p",[v("strong",[t._v("fs.readdir()")])]),t._v(" "),v("p",[v("code",[t._v("fs.readdir()")]),t._v("同步版本")]),t._v(" "),v("h2",{attrs:{id:"fs-readfile-path-options-callback"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fs-readfile-path-options-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" fs.readFile(path[, options], callback)")]),t._v(" "),v("p",[t._v("读取文件")]),t._v(" "),v("p",[t._v("参数")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("path")])]),t._v(" "),v("li",[v("code",[t._v("options")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("encoding")]),t._v("编码格式,默认为"),v("code",[t._v("null")])]),t._v(" "),v("li",[v("code",[t._v("flags")])])])]),t._v(" "),v("li",[v("code",[t._v("callback")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("err")])]),t._v(" "),v("li",[v("code",[t._v("data")]),t._v("文件数据")])])])]),t._v(" "),v("p",[t._v("优先使用"),v("code",[t._v("fs.createReadStream()")])]),t._v(" "),v("p",[v("strong",[t._v("fs.readFileSync()")])]),t._v(" "),v("p",[v("code",[t._v("fs.readFile()")]),t._v("同步版本")]),t._v(" "),v("h2",{attrs:{id:"fs-unlink-path-callback"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fs-unlink-path-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" fs.unlink(path, callback)")]),t._v(" "),v("p",[t._v("删除文件")]),t._v(" "),v("p",[t._v("提供同步的"),v("code",[t._v("fs.unlinkSync()")]),t._v("版本")]),t._v(" "),v("h2",{attrs:{id:"fs-rename-oldpath-newpath-callback"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fs-rename-oldpath-newpath-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" fs.rename(oldPath, newPath, callback)")]),t._v(" "),v("p",[t._v("重命名文件")]),t._v(" "),v("p",[t._v("提供同步的"),v("code",[t._v("fs.renameSync()")]),t._v("版本")]),t._v(" "),v("h2",{attrs:{id:"fs-mkdir-path-mode-callback"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fs-mkdir-path-mode-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" fs.mkdir(path[, mode], callback)")]),t._v(" "),v("p",[t._v("异步创建目录")]),t._v(" "),v("p",[t._v("提供同步的"),v("code",[t._v("fs.mkdirSync()")]),t._v("方法")]),t._v(" "),v("h2",{attrs:{id:"fs-rmdir-path-callback"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fs-rmdir-path-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" fs.rmdir(path, callback)")]),t._v(" "),v("p",[t._v("异步删除目录")]),t._v(" "),v("p",[t._v("提供同步的"),v("code",[t._v("fs.rmdir()")]),t._v("方法")]),t._v(" "),v("h2",{attrs:{id:"fs-writefile-path-data-options-callback"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fs-writefile-path-data-options-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" fs.writeFile(path, data[, options], callback)")]),t._v(" "),v("p",[t._v("将数据写入文件,若文件已经存在,则覆盖")]),t._v(" "),v("p",[t._v("参数")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("path")])]),t._v(" "),v("li",[v("code",[t._v("data")])]),t._v(" "),v("li",[v("code",[t._v("options")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("encoding")])]),t._v(" "),v("li",[v("code",[t._v("mode")])]),t._v(" "),v("li",[v("code",[t._v("flag")])])])]),t._v(" "),v("li",[v("code",[t._v("callback")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("err")])])])])]),t._v(" "),v("p",[v("strong",[t._v("fs.writeFileSync()")])]),t._v(" "),v("p",[v("code",[t._v("fs.writeFile()")]),t._v("的同步版本")]),t._v(" "),v("h2",{attrs:{id:"fs-watch-filename-options-listener"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fs-watch-filename-options-listener","aria-hidden":"true"}},[t._v("#")]),t._v(" fs.watch(filename[, options[, listener]])")]),t._v(" "),v("p",[t._v("监视"),v("code",[t._v("filename")]),t._v("的变化,对象可以是一个目录或者文件,返回一个"),v("code",[t._v("fs.FSWatcher")]),t._v("对象")]),t._v(" "),v("p",[t._v("参数")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("filename")])]),t._v(" "),v("li",[v("code",[t._v("options")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("persistent")]),t._v("如果文件正在被监视,进程是否继续运行,默认为"),v("code",[t._v("true")])]),t._v(" "),v("li",[v("code",[t._v("recursive")]),t._v("是否全部子目录应该被监视,默认为"),v("code",[t._v("false")])]),t._v(" "),v("li",[v("code",[t._v("encoding")]),t._v("用于传给监听器的文件名的编码,默认"),v("code",[t._v("utf8")])])])]),t._v(" "),v("li",[v("code",[t._v("listener")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("eventType")])]),t._v(" "),v("li",[v("code",[t._v("filename")])])])])]),t._v(" "),v("p",[t._v("监听器的回调是绑定在"),v("code",[t._v("fs.FSWatcher")]),t._v("的"),v("code",[t._v("change")]),t._v("事件上面")])])}],!1,null,null,null);e.options.__file="fs.md";_.default=e.exports}}]);
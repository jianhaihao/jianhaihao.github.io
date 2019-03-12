(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{205:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"ssh-key"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ssh-key","aria-hidden":"true"}},[s._v("#")]),s._v(" ssh-key")]),s._v(" "),n("h2",{attrs:{id:"生成ssh-key"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生成ssh-key","aria-hidden":"true"}},[s._v("#")]),s._v(" 生成ssh-key")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# linux环境")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入家目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" ~\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如未配置git全局用户名，进行配置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global  user.name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"用户名"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如未配置git全局邮箱，进行配置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"邮箱"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成密钥（执行命令后一直回车即可）")]),s._v("\nssh-keygen -t rsa -C "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"邮箱"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成密钥的目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" ~/.ssh/\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看ssh-key")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" id_rsa.pub\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将ssh-key配置到个人git账户中")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入github官网：https://github.com/settings/keys 中的 SSH keys")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试 ssh-key")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@github.com\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入yes后若显示 ")]),s._v("\nHi xxx"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" You’ve successfully authenticated, but GitHub does not provide shell access. \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 则代表成功")]),s._v("\n\n")])])]),n("h2",{attrs:{id:"使ssh-key生效"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使ssh-key生效","aria-hidden":"true"}},[s._v("#")]),s._v(" 使ssh-key生效")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# github上传ssh-key后仍须输入密码问题")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这种事情通常发生在更换机器后克隆自己仓库的时候，通常我们会使用https方式克隆")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/Name/project.git\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这样便会在你git push时候要求输入用户名和密码")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解决的方法是使用ssh方式克隆仓库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@github.com:Name/project.git\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果你已经用https方式克隆了仓库，就不必删除仓库重新克隆，只需将 .git/config 文件中的")]),s._v("\nurl "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" https://github.com/Name/project.git\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 改为 ")]),s._v("\nurl "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" git@github.com:Name/project.git\n\n")])])]),n("h2",{attrs:{id:"配置webhook"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置webhook","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置webhook")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前网络访问时的用户")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##################文件内容开始线#############################")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("?php\n\nexec"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"whoami"')]),s._v(", "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$out")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# whoami = id -un")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<pre>"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nprint_r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$out")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##################文件内容结束线#############################")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过浏览器访问该文件，获得用户名")]),s._v("\napache      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本机演示得到的用户名，请以实际用户名为准")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将当前需要git同步的仓库目录，权限给到浏览器访问的用户名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R apache:apache demo    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# demo为演示的服务器仓库目录（demo 或 demo/ 都可以）")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如遇以下报错信息：")]),s._v("\nCould not create directory "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/usr/share/httpd/.ssh'")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v("\nHost key verification failed.\nfatal: Could not "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("read")]),s._v(" from remote repository.\nPlease "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" sure you have the correct access rights\nand the repository exists.\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以上报错说明实际浏览器访问时，是到 /usr/share/httpd/.ssh 下读取公钥")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 因没有读到，只需要复制实际公钥生成的文件到当前文件夹下即可")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/share/httpd/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" .ssh\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" ~/.ssh/id_rsa /usr/share/httpd/.ssh/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" ~/.ssh/id_rsa.pub /usr/share/httpd/.ssh/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" ~/.ssh/known_hosts /usr/share/httpd/.ssh/\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将新增的密钥相关文件权限改到浏览器访问的用户名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R apache:apache .ssh\n\n")])])]),n("h2",{attrs:{id:"非root用户运行docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#非root用户运行docker","aria-hidden":"true"}},[s._v("#")]),s._v(" 非root用户运行docker")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首先创建docker用户组，如果docker用户组存在可以忽略")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" docker\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把用户添加进docker组中")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gpasswd -a "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${USER}")]),s._v(" docker\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启docker")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" docker restart\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果普通用户执行docker命令，如果提示get …… dial unix /var/run/docker.sock权限不够")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 则修改/var/run/docker.sock权限使用root用户执行如下命令即可")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" a+rw /var/run/docker.sock\n\n")])])]),n("h2",{attrs:{id:"更新linux系统时间"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更新linux系统时间","aria-hidden":"true"}},[s._v("#")]),s._v(" 更新Linux系统时间")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看时间 ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新时间")]),s._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ntpdate\nntpdate time.windows.com\n\n")])])])])}],!1,null,null,null);e.options.__file="webhook.md";t.default=e.exports}}]);
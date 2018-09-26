(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{251:function(t,e,_){"use strict";_.r(e);var s=_(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),_("p",[t._v("通过 HTML 元素操作属性的方法可以直接读写 style 属性")]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),_("p",[t._v("CSSStyleDeclaration 接口用来操作元素的样式，下面三个地方实现了这个接口")]),t._v(" "),t._m(6),t._v(" "),_("p",[t._v("CSSStyleDeclaration 接口可以直接读写 css 的样式属性，属性和 css 规则一一对应，")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),_("p",[t._v("判断浏览器是否支持某个 css 属性")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),_("p",[t._v("浏览器原生提供 CSS 对象，为 JavaScript 提供方法操作 CSS，目前，该对象有两个静态方法")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),_("p",[t._v("网页添加样式表有两种方式：")]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),_("p",[t._v("如果 CSS 规则是一条普通的 CSS 样式规则（不包含特殊的 CSS 命令），那么除了实现 CSSRule 接口之外，还实现了 CSSStyleRule 接口，接口实例具有下面两个属性")]),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),_("p",[_("a",{attrs:{href:"https://wangdoc.com/javascript/dom/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("网道（WangDoc.com）是一个文档网站，提供互联网开发文档"),_("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"css-操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-操作","aria-hidden":"true"}},[this._v("#")]),this._v(" CSS 操作")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("CSS 负责页面的视觉效果")]),this._v(" "),e("li",[this._v("JavaScript 负责用户的行为互动")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"html-元素的-style-属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html-元素的-style-属性","aria-hidden":"true"}},[this._v("#")]),this._v(" HTML 元素的 style 属性")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"language-javascript extra-class"},[_("pre",{pre:!0,attrs:{class:"language-javascript"}},[_("code",[t._v("document"),_("span",{attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{attrs:{class:"token function"}},[t._v("getElementById")]),_("span",{attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{attrs:{class:"token string"}},[t._v("'id'")]),_("span",{attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{attrs:{class:"token function"}},[t._v("setAttribute")]),_("span",{attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{attrs:{class:"token string"}},[t._v("'style'")]),_("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),_("span",{attrs:{class:"token string"}},[t._v("'background-color: #fff;'")]),_("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("HTML 元素的 style 属性不仅可以当作一个字符串进行读写，还是一个对象，实现了 CSSStyleDeclaration 接口，可以通过 css 键名来读写属性，例如"),e("code",[this._v("div.style.fontSize = '14px'")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"cssstyledelaration-接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cssstyledelaration-接口","aria-hidden":"true"}},[this._v("#")]),this._v(" CSSStyleDelaration 接口")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ul",[_("li",[t._v("元素节点的"),_("code",[t._v("style")]),t._v("属性")]),t._v(" "),_("li",[_("code",[t._v("CSSStyle")]),t._v("实例的"),_("code",[t._v("style")]),t._v("属性")]),t._v(" "),_("li",[_("code",[t._v("window.getComputedStyle()")]),t._v("的返回值，参数为元素节点")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ul",[_("li",[t._v("将横杠从 css 属性名中移除，将横杠后的第一个字母大写")]),t._v(" "),_("li",[t._v("如果属性为 JavaScript 保留字规则名之前需加上"),_("code",[t._v("css")]),t._v("，例如"),_("code",[t._v("cssFloat")])]),t._v(" "),_("li",[t._v("属性值都是字符串，设置是必须包括单位")]),t._v(" "),_("li",[_("code",[t._v("Element.style")]),t._v("只包括行内样式，通过样式表或者继承的样式，无法获得，需通过"),_("code",[t._v("window.getComputedStyle()")]),t._v("方法获得所有 css 样式")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"cssstyledeclaration-实例属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cssstyledeclaration-实例属性","aria-hidden":"true"}},[this._v("#")]),this._v(" CSSStyleDeclaration 实例属性")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",[t._v("attribute")]),t._v(" "),_("th",[t._v("desc")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("CSSStyleDeclaration.cssText")]),t._v(" "),_("td",[t._v("用来读写当前规则的所有样式声明文本，是一个字符串")])]),t._v(" "),_("tr",[_("td",[t._v("CSSStyleDeclaration.length")]),t._v(" "),_("td",[t._v("返回一个整数值，表示当前规则含有多少条样式声明")])]),t._v(" "),_("tr",[_("td",[t._v("CSSStyleDeclaration.parentRule")]),t._v(" "),_("td",[t._v("返回当前规则属于哪一个实例块（ CSSRule 实例），如果不存在所属的实例块，返回"),_("code",[t._v("null")]),t._v("只读")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"cssstyledeclaration-实例方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cssstyledeclaration-实例方法","aria-hidden":"true"}},[this._v("#")]),this._v(" CSSStyleDeclaration 实例方法")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",[t._v("method")]),t._v(" "),_("th",[t._v("desc")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("CSSStyleDeclaration.getPropertyPriority()")]),t._v(" "),_("td",[t._v("接受 css 样式的属性名作为参数，表示该样式又没有设置"),_("code",[t._v("important")]),t._v("属性，有则返回"),_("code",[t._v("important")]),t._v("，没有返回空字符串")])]),t._v(" "),_("tr",[_("td",[t._v("CSSStyleDeclaration.getPropertyValue()")]),t._v(" "),_("td",[t._v("接受 css 样式的属性名作为参数，返回该属性的属性值")])]),t._v(" "),_("tr",[_("td",[t._v("CSSStyleDeclaration.item()")]),t._v(" "),_("td",[t._v("接受一个整数作为参数，返回第 n 个位置 css 属性的属性值")])]),t._v(" "),_("tr",[_("td",[t._v("CSSStyleDeclaration.removeProperty()")]),t._v(" "),_("td",[t._v("移除某个属性，返回被移除的属性的属性值")])]),t._v(" "),_("tr",[_("td",[t._v("CSSStyleDeclaration.setProperty()")]),t._v(" "),_("td",[t._v("设置某个属性的属性值，第一个参数是属性名，第二个参数是属性值，第三个参数是优先级")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"css-模块的侦测"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-模块的侦测","aria-hidden":"true"}},[this._v("#")]),this._v(" CSS 模块的侦测")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("typeof Element.style.propertyName 的值为"),e("code",[this._v("string")]),this._v("，表示支持，如果不支持，会返回"),e("code",[this._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"css-对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-对象","aria-hidden":"true"}},[this._v("#")]),this._v(" CSS 对象")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",[t._v("method")]),t._v(" "),_("th",[t._v("desc")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("CSS.escape()")]),t._v(" "),_("td",[t._v("转义 css 选择器里面的特殊字符，比如元素节点的"),_("code",[t._v("id")]),t._v("属性里面带有"),_("code",[t._v("#")]),t._v("字符")])]),t._v(" "),_("tr",[_("td",[t._v("CSS.supports()")]),t._v(" "),_("td",[t._v("返回一个布尔值，表示当前环境是否支持某一条 CSS 规则，第一个参数是属性名，第二个参数为属性值")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"window-getcomputedstyle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#window-getcomputedstyle","aria-hidden":"true"}},[this._v("#")]),this._v(" Window.getComputedStyle()")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ul",[_("li",[t._v("接受一个元素节点作为第一哥参数，返回元素经过浏览器计算后的到的最终样式规则，也就是各种 css 叠加后的结果")]),t._v(" "),_("li",[t._v("可以传入第二个参数，表示当前元素的伪元素，比如"),_("code",[t._v(":before")]),t._v(","),_("code",[t._v(":after")]),t._v(","),_("code",[t._v(":first-line")]),t._v(","),_("code",[t._v("first-letter")])]),t._v(" "),_("li",[t._v("CSSStyleDelaration 实例返回的 css 值都是绝对单位，比如，长度是像素单位，返回值包括"),_("code",[t._v("px")]),t._v("后缀，颜色是"),_("code",[t._v("rgba(#,#,#,#)")])]),t._v(" "),_("li",[t._v("该方法返回的 CSSStyledeclaration 实例没有"),_("code",[t._v("cssText")]),t._v("属性，返回"),_("code",[t._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"css-伪元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-伪元素","aria-hidden":"true"}},[this._v("#")]),this._v(" CSS 伪元素")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ul",[_("li",[t._v("CSS 伪元素是通过 css 向 DOM 添加的元素，主要是通过"),_("code",[t._v(":before")]),t._v("和"),_("code",[t._v(":after")]),t._v("选择器生成，内容通过"),_("code",[t._v("content")]),t._v("指定")]),t._v(" "),_("li",[t._v("无法通过元素的"),_("code",[t._v("style")]),t._v("属性获取伪元素，只能通过"),_("code",[t._v("window.getComputedStyle()")]),t._v("方法传入第二个伪元素选择器来获取元素的伪元素的属性")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"stylesheet-接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stylesheet-接口","aria-hidden":"true"}},[this._v("#")]),this._v(" StyleSheet 接口")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ul",[_("li",[_("code",[t._v("StyleSheet")]),t._v("接口表示一张网页的样式表，包括通过"),_("code",[t._v("<link>")]),t._v("加载的样式表和"),_("code",[t._v("<style>")]),t._v("内嵌的样式表")]),t._v(" "),_("li",[_("code",[t._v("document.styleSheets")]),t._v(" 属性返回整个页面所有的样式表，返回一个"),_("code",[t._v("array-like-obj")]),t._v("，成员是每一个"),_("code",[t._v("StyleSheets")]),t._v("实例")]),t._v(" "),_("li",[t._v("如果是"),_("code",[t._v("<style>")]),t._v("引入的内嵌样式，可以通过元素的"),_("code",[t._v("sheet")]),t._v("属性来获取"),_("code",[t._v("StyleSheets")]),t._v("接口")]),t._v(" "),_("li",[t._v("CSSStyleSheet 接口继承了 StyleSheet 接口的属性")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"实例属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 实例属性")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",[t._v("attribute")]),t._v(" "),_("th",[t._v("desc")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("StyleSheet.disabled")]),t._v(" "),_("td",[t._v("设置样式表的禁用状态")])]),t._v(" "),_("tr",[_("td",[t._v("StyleSheet.href")]),t._v(" "),_("td",[t._v("返回样式表的网址，如果是内嵌样式，返回"),_("code",[t._v("null")]),t._v("，只读")])]),t._v(" "),_("tr",[_("td",[t._v("StyleSheet.title")]),t._v(" "),_("td",[t._v("返回样式表的"),_("code",[t._v("title")]),t._v("属性")])]),t._v(" "),_("tr",[_("td",[t._v("StyleSheet.type")]),t._v(" "),_("td",[t._v("返回样式表的类型，通常是"),_("code",[t._v("text/css")])])]),t._v(" "),_("tr",[_("td",[t._v("StyleSheet.parentStyleSheet")]),t._v(" "),_("td",[t._v("CSS 的"),_("code",[t._v("@import")]),t._v("命令允许在样式表中加载其他样式表，返回包含当前样式表的样式表")])]),t._v(" "),_("tr",[_("td",[t._v("StyleSheet.media")]),t._v(" "),_("td",[t._v("返回一个类似数组的对象（"),_("code",[t._v("MediaList")]),t._v("实例），成员是表示适用媒介的字符串，只读 "),_("br"),t._v(" - 打印："),_("code",[t._v("print")]),t._v(" "),_("br"),t._v(" - 屏幕："),_("code",[t._v("screen")]),_("br"),t._v(" - 手持设备："),_("code",[t._v("handheld")]),t._v(" "),_("br"),t._v(" - 所有："),_("code",[t._v("all")]),_("br"),_("code",[t._v("MediaList")]),t._v(" 实例的"),_("code",[t._v("appendMedia()")]),t._v("方法用于增加媒介，"),_("code",[t._v("deleteMedia()")]),t._v("方法用于删除媒介")])]),t._v(" "),_("tr",[_("td",[t._v("StyleSheet.ownerNode")]),t._v(" "),_("td",[t._v("返回"),_("code",[t._v("StyleSheet")]),t._v("实例对象所在的 DOM 节点，通常是"),_("code",[t._v("<style>")]),t._v("或者"),_("code",[t._v("<link>")])])]),t._v(" "),_("tr",[_("td",[t._v("CSSStyleSheet.cssRules")]),t._v(" "),_("td",[t._v("指向一个"),_("code",[t._v("CSSRuleList")]),t._v("实例，里面的每个成员都是当前的一条 CSS 规则 "),_("br"),t._v(" - 使用该规则的"),_("code",[t._v("cssText")]),t._v("属性，可以的到当前 CSS 规则对应的字符串表达形式 "),_("br"),t._v(" - 使用改规则的"),_("code",[t._v("style")]),t._v("属性，指向一个对象，用来读写具体的 CSS 命令")])]),t._v(" "),_("tr",[_("td",[t._v("CSSStyleSheet.ownerRule")]),t._v(" "),_("td",[t._v("有些样式表是通过"),_("code",[t._v("@import")]),t._v("引入的，他得"),_("code",[t._v("ownerRule")]),t._v("属性会返回一个"),_("code",[t._v("CSSRule")]),t._v("实例，代表那行"),_("code",[t._v("@import")]),t._v(" 规则，如果当前样式表不是通过"),_("code",[t._v("@import")]),t._v("引入的，则返回"),_("code",[t._v("null")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"实例方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 实例方法")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",[t._v("method")]),t._v(" "),_("th",[t._v("desc")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("CSSStyleSheet.insertRule()")]),t._v(" "),_("td",[t._v("插入一条新的 CSS 规则，接受两个参数 "),_("br"),t._v(" - 第一个参数是表示 CSS 规则的字符串，只能有一条规则，否则报错 "),_("br"),t._v(" - 第二个参数是插入的位置，默认为 0 "),_("br"),t._v(" - 浏览器对于用脚本插入样式规则有许多的限制，最好使用"),_("code",[t._v("try...catch")]),t._v("块对错误进行捕获")])]),t._v(" "),_("tr",[_("td",[t._v("CSSStyleSheet.deleteRule()")]),t._v(" "),_("td",[t._v("用来删除一条规则，参数为整数，表示规则在 CSSRules 实例里面的位置")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"添加样式表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加样式表","aria-hidden":"true"}},[this._v("#")]),this._v(" 添加样式表")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ol",[_("li",[t._v("添加一张内置样式表，也就是添加一个"),_("code",[t._v("<style>")]),t._v("节点")]),t._v(" "),_("li",[t._v("添加一个"),_("code",[t._v("<link>")]),t._v("节点，并设置该节点的"),_("code",[t._v("href")]),t._v("属性")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"cssrulelist-接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cssrulelist-接口","aria-hidden":"true"}},[this._v("#")]),this._v(" CSSRuleList 接口")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("CSSRuleList 接口是一个"),e("code",[this._v("array-like-obj")]),this._v("，成员是 CSSRule 实实例， 一般通过"),e("code",[this._v("CSSStyleSheet.cssRules")]),this._v("属性获得")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"cssrule-接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cssrule-接口","aria-hidden":"true"}},[this._v("#")]),this._v(" CSSRule 接口")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("一条 CSS 规则包括两个部分： CSS 选择器和样式声明，JavaScript 通过"),e("code",[this._v("CSSRule")]),this._v("接口来读取一条 CSS 规则")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"cssrule-实例属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cssrule-实例属性","aria-hidden":"true"}},[this._v("#")]),this._v(" CSSRule 实例属性")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",[t._v("attribute")]),t._v(" "),_("th",[t._v("desc")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("CSSRule.cssText")]),t._v(" "),_("td",[t._v("返回当前规则的文本，如果是"),_("code",[t._v("@import")]),t._v("加载的样式，则返回"),_("code",[t._v("@import'url'")])])]),t._v(" "),_("tr",[_("td",[t._v("CSSRule.parentStyleSheet")]),t._v(" "),_("td",[t._v("返回当前规则所在的样式表对象"),_("code",[t._v("CSSStyleSheet")]),t._v("接口实例")])]),t._v(" "),_("tr",[_("td",[t._v("CSSRule.parentRule")]),t._v(" "),_("td",[t._v("返回包括当前规则的父规则，如果不存在父规则，则返回"),_("code",[t._v("null")])])]),t._v(" "),_("tr",[_("td",[t._v("CSSRule.style")]),t._v(" "),_("td",[t._v("返回规则的类型 "),_("br"),t._v(" - 1 : 普通样式规则 "),_("br"),t._v(" - 3 : @import 规则 "),_("br"),t._v(" - 4 : @media 规则 "),_("br"),t._v(" - 5 : font-face 规则")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"cssstylerule-接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cssstylerule-接口","aria-hidden":"true"}},[this._v("#")]),this._v(" CSSStyleRule 接口")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("CSSStyleRule.selectorText 返回当前规则的选择器字符串")]),this._v(" "),e("li",[this._v("CSSStyleRule.style 返回一个 CSSStyleDeclaration 实例")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"cssmediarule-接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cssmediarule-接口","aria-hidden":"true"}},[this._v("#")]),this._v(" CSSMediaRule 接口")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果 CSS 是"),e("code",[this._v("@media")]),this._v("代码块，除了实现了 CSSRule 接口，还实现了 CSSMediaRule 接口，有两个属性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("CSSMediaRule.media 返回代表"),e("code",[this._v("@media")]),this._v("规则的一个对象（ MediaList 实例）")]),this._v(" "),e("li",[this._v("CSSMediaRule.conditionText 返回"),e("code",[this._v("@media")]),this._v("规则的生效条件")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"window-matchmedia"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#window-matchmedia","aria-hidden":"true"}},[this._v("#")]),this._v(" window.matchMedia()")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("用来将 CSS 的"),e("code",[this._v("MediaQuery")]),this._v("条件语句，转换成"),e("code",[this._v("MediaQueryList")]),this._v("实例")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"实例属性-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例属性-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 实例属性")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",[t._v("attribute")]),t._v(" "),_("th",[t._v("desc")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("MediaQueryList.media")]),t._v(" "),_("td",[t._v("返回一个字符串，表示对应的 MediaQuery 条件语句")])]),t._v(" "),_("tr",[_("td",[t._v("MediaQueryList.matches")]),t._v(" "),_("td",[t._v("返回一个布尔值，表示当前页面是否符合指定的 MediaQuery 条件语句")])]),t._v(" "),_("tr",[_("td",[t._v("MediaQueryList.onchange")]),t._v(" "),_("td",[t._v("如果 MediaQuery 条件语句的适配环境发生变化，会出发"),_("code",[t._v("change")]),t._v("事件，MediaQueryList.onchange 用来指定"),_("code",[t._v("change")]),t._v("事件监听的函数，该函数的参数是"),_("code",[t._v("change")]),t._v("事件的对象（MediaQueryListEvent 实例），与 MediaQueryList 相似，也有"),_("code",[t._v("media")]),t._v("和"),_("code",[t._v("matches")]),t._v("属性")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"实例方法-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例方法-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 实例方法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("MediaQueryList.addListener() 和 MediaQueryList.removeListener() 用来为"),e("code",[this._v("change")]),this._v("事件添加或移除监听函数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考")])}],!1,null,null,null);r.options.__file="css-operator.md";e.default=r.exports}}]);
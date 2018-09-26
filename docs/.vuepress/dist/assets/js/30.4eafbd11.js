(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{243:function(t,e,v){"use strict";v.r(e);var _=v(0),r=Object(_.a)({},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),v("p",[v("a",{attrs:{href:"https://wangdoc.com/javascript/events/event.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("网道（WangDoc.com）是一个文档网站，提供互联网开发文档"),v("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"event-对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-对象","aria-hidden":"true"}},[this._v("#")]),this._v(" Event 对象")])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ul",[v("li",[t._v("事件发生之后，会产生一个"),v("code",[t._v("Event")]),t._v("对象，作为参数传递给监听函数。所有的事件都是这个对象的实例，或者说是继承了"),v("code",[t._v("Event.prototype")]),t._v("\n*"),v("code",[t._v("Event")]),t._v("对象是一个构造函数，可以通过"),v("code",[t._v("new")]),t._v("创建一个事件，接受两个参数，第一个是字符串"),v("code",[t._v("type")]),t._v("，表示事件名，第二个是对象，表示事件的配置，该对象有下面两个属性\n1."),v("code",[t._v("bubbles")]),t._v(": 布尔值，默认"),v("code",[t._v("false")]),t._v("，表示事件是否冒泡\n2."),v("code",[t._v("cancelable")]),t._v(": 布尔值，默认"),v("code",[t._v("false")]),t._v("，表示事件是否可以被取消，即能否用"),v("code",[t._v("Event.preventDefault()")]),t._v("取消这个事件")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"实例属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 实例属性")])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("table",[v("thead",[v("tr",[v("th",[t._v("attribute")]),t._v(" "),v("th",[t._v("desc")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Event.bubbles "),v("br"),t._v(" Event.eventPhase")]),t._v(" "),v("td",[t._v("当前事件是否可以冒泡，只读 "),v("br"),t._v(" 返回有四种可能 "),v("br"),t._v(" - 0 事件未发生 "),v("br"),t._v(" - 1 事件处于捕获阶段，从祖先向下传播的过程 "),v("br"),t._v(" - 2 事件到达目标节点，即"),v("code",[t._v("Event.target")]),t._v("指向目标节点 "),v("br"),t._v(" - 3 - 事件处于冒泡阶段，从目标节点向祖先反传播的过程")])]),t._v(" "),v("tr",[v("td",[t._v("Event.cancelable "),v("br"),t._v(" Event.cancelbubble "),v("br"),t._v(" Event.defaultPrevented")]),t._v(" "),v("td",[t._v("事件是否可以取消，浏览器原生事件是可以取消的，只读 "),v("br"),t._v(" 将"),v("code",[t._v("Event.cancelBubble")]),t._v("设置为"),v("code",[t._v("true")]),t._v("，等于执行了"),v("code",[t._v("Event.stoppropagation()")]),t._v("阻止事件的传播 "),v("br"),t._v(" 事件是否执行过"),v("code",[t._v("preventDefault()")]),t._v("方法，只读")])]),t._v(" "),v("tr",[v("td",[t._v("Event.currentTarget "),v("br"),t._v(" Event.target")]),t._v(" "),v("td",[t._v("事件当前所处节点对象 "),v("br"),t._v(" 事件的目标对象")])]),t._v(" "),v("tr",[v("td",[t._v("Event.type")]),t._v(" "),v("td",[t._v("返回事件的名称")])]),t._v(" "),v("tr",[v("td",[t._v("Event.timeStamp")]),t._v(" "),v("td",[t._v("返回事件发生距离浏览器加载网页完成的时间")])]),t._v(" "),v("tr",[v("td",[t._v("Event.isTrusted")]),t._v(" "),v("td",[t._v("表示时间是否由用户真实行为产生的，比如点击产生的"),v("code",[t._v("click")]),t._v("事件，手动调用"),v("code",[t._v("click()")]),t._v("方法触发的事件该属性返回"),v("code",[t._v("false")]),t._v("，通过"),v("code",[t._v("new")]),t._v("创建出来的时间的该属性返回为"),v("code",[t._v("false")])])]),t._v(" "),v("tr",[v("td",[t._v("Event.detail")]),t._v(" "),v("td",[t._v("该属性只有浏览器的 UI 事件才具有，该属性返回一个数值，表示事件的某种信息，比如，对于点击事件，会返回 1, 2, 3 表示点击的次数，对于滚动事件，则返回滚轮滚动的距离")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"实例方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 实例方法")])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("table",[v("thead",[v("tr",[v("th",[t._v("method")]),t._v(" "),v("th",[t._v("desc")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Event.preventDefault()")]),t._v(" "),v("td",[t._v("取消浏览器对当前事件的默认行为，如果事件的"),v("code",[t._v("cancelalbe")]),t._v("为"),v("code",[t._v("false")]),t._v("，调用该方法无效，不会阻止事件的传播")])]),t._v(" "),v("tr",[v("td",[t._v("Event.stopPropagation() "),v("br"),t._v(" Event.stopImmediatePropagation()")]),t._v(" "),v("td",[t._v("阻止事件的继续传播，不影响当前节点的其他监听函数 "),v("br"),t._v(" 阻止事件的传播，当前节点的其他监听函数也不会执行")])]),t._v(" "),v("tr",[v("td",[t._v("Event.composedPath()")]),t._v(" "),v("td",[t._v("返回一个数组，成员是事件在冒泡过程中一次经过的节点，一直到"),v("code",[t._v("Window")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考")])}],!1,null,null,null);r.options.__file="event.md";e.default=r.exports}}]);
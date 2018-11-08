(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{193:function(E,n,T){"use strict";T.r(n);var _=T(0),t=Object(_.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var E=this,n=E.$createElement,T=E._self._c||n;return T("div",{staticClass:"content"},[T("h1",{attrs:{id:"外键设置"}},[T("a",{staticClass:"header-anchor",attrs:{href:"#外键设置","aria-hidden":"true"}},[E._v("#")]),E._v(" 外键设置")]),E._v(" "),T("p",[E._v("子表试图创建一个在父表中不存在的外键值，InnoDB会拒绝任何INSERT或UPDATE操作。")]),E._v(" "),T("p",[E._v("如果父表试图UPDATE或者DELETE任何子表中存在或匹配的外键值，最终动作取决于外键约束定义中的ON UPDATE和ON DELETE选项。")]),E._v(" "),T("p",[E._v("InnoDB支持5种不同的动作，如果没有指定ON DELETE或者ON UPDATE，默认的动作为RESTRICT:")]),E._v(" "),T("ol",[T("li",[T("p",[E._v("CASCADE: 从父表中删除或更新对应的行，同时自动的删除或更新子表中匹配的行。ON DELETE CANSCADE和ON UPDATE CANSCADE都被InnoDB所支持。")])]),E._v(" "),T("li",[T("p",[E._v("SET NULL: 从父表中删除或更新对应的行，同时将子表中的外键列设为空。注意，这些在外键列没有被设为NOT NULL时才有效。ON DELETE SET NULL和ON UPDATE SET SET NULL都被InnoDB所支持。")])]),E._v(" "),T("li",[T("p",[E._v("NO ACTION: InnoDB拒绝删除或者更新父表。")])]),E._v(" "),T("li",[T("p",[E._v("RESTRICT: 拒绝删除或者更新父表。指定RESTRICT（或者NO ACTION）和忽略ON DELETE或者ON UPDATE选项的效果是一样的。")])]),E._v(" "),T("li",[T("p",[E._v("SET DEFAULT: InnoDB目前不支持。")])])]),E._v(" "),T("p",[E._v("外键约束使用最多的两种情况：")]),E._v(" "),T("p",[E._v("1）父表更新时子表也更新，父表删除时如果子表有匹配的项，删除失败；")]),E._v(" "),T("p",[E._v("2）父表更新时子表也更新，父表删除时子表匹配的项也删除。")]),E._v(" "),T("p",[E._v("前一种情况，在外键定义中，我们使用ON UPDATE CASCADE ON DELETE RESTRICT；\n后一种情况，可以使用ON UPDATE CASCADE ON DELETE CASCADE。")])])}],!1,null,null,null);t.options.__file="foreign-key.md";n.default=t.exports}}]);
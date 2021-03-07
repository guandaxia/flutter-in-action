(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{481:function(t,s,a){t.exports=a.p+"assets/img/6-9.865c35f8.png"},482:function(t,s,a){t.exports=a.p+"assets/img/6-10.202cef73.png"},483:function(t,s,a){t.exports=a.p+"assets/img/6-11.a491f457.png"},622:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_6-4-gridview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-gridview"}},[t._v("#")]),t._v(" 6.4 GridView")]),t._v(" "),n("p",[n("code",[t._v("GridView")]),t._v("可以构建一个二维网格列表，其默认构造函数定义如下：")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GridView")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Axis scrollDirection "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Axis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vertical"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bool reverse "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ScrollController controller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bool primary"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ScrollPhysics physics"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bool shrinkWrap "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  EdgeInsetsGeometry padding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@required")]),t._v(" SliverGridDelegate gridDelegate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//控制子widget layout的委托")]),t._v("\n  bool addAutomaticKeepAlives "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bool addRepaintBoundaries "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  double cacheExtent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  List"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Widget"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" children "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Widget"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("我们可以看到，"),n("code",[t._v("GridView")]),t._v("和"),n("code",[t._v("ListView")]),t._v("的大多数参数都是相同的，它们的含义也都相同的，如有疑惑读者可以翻阅ListView一节，在此不再赘述。我们唯一需要关注的是"),n("code",[t._v("gridDelegate")]),t._v("参数，类型是"),n("code",[t._v("SliverGridDelegate")]),t._v("，它的作用是控制"),n("code",[t._v("GridView")]),t._v("子组件如何排列(layout)。")]),t._v(" "),n("p",[n("code",[t._v("SliverGridDelegate")]),t._v("是一个抽象类，定义了"),n("code",[t._v("GridView")]),t._v(" Layout相关接口，子类需要通过实现它们来实现具体的布局算法。Flutter中提供了两个"),n("code",[t._v("SliverGridDelegate")]),t._v("的子类"),n("code",[t._v("SliverGridDelegateWithFixedCrossAxisCount")]),t._v("和"),n("code",[t._v("SliverGridDelegateWithMaxCrossAxisExtent")]),t._v("，我们可以直接使用，下面我们分别来介绍一下它们。")]),t._v(" "),n("h3",{attrs:{id:"slivergriddelegatewithfixedcrossaxiscount"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#slivergriddelegatewithfixedcrossaxiscount"}},[t._v("#")]),t._v(" SliverGridDelegateWithFixedCrossAxisCount")]),t._v(" "),n("p",[t._v("该子类实现了一个横轴为固定数量子元素的layout算法，其构造函数为：")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SliverGridDelegateWithFixedCrossAxisCount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@required")]),t._v(" double crossAxisCount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  double mainAxisSpacing "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  double crossAxisSpacing "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  double childAspectRatio "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("ul",[n("li",[n("code",[t._v("crossAxisCount")]),t._v("：横轴子元素的数量。此属性值确定后子元素在横轴的长度就确定了，即ViewPort横轴长度除以"),n("code",[t._v("crossAxisCount")]),t._v("的商。")]),t._v(" "),n("li",[n("code",[t._v("mainAxisSpacing")]),t._v("：主轴方向的间距。")]),t._v(" "),n("li",[n("code",[t._v("crossAxisSpacing")]),t._v("：横轴方向子元素的间距。")]),t._v(" "),n("li",[n("code",[t._v("childAspectRatio")]),t._v("：子元素在横轴长度和主轴长度的比例。由于"),n("code",[t._v("crossAxisCount")]),t._v("指定后，子元素横轴长度就确定了，然后通过此参数值就可以确定子元素在主轴的长度。")])]),t._v(" "),n("p",[t._v("可以发现，子元素的大小是通过"),n("code",[t._v("crossAxisCount")]),t._v("和"),n("code",[t._v("childAspectRatio")]),t._v("两个参数共同决定的。注意，这里的子元素指的是子组件的最大显示空间，注意确保子组件的实际大小不要超出子元素的空间。")]),t._v(" "),n("p",[t._v("下面看一个例子：")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GridView")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  gridDelegate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SliverGridDelegateWithFixedCrossAxisCount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      crossAxisCount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//横轴三个子widget")]),t._v("\n      childAspectRatio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//宽高比为1时，子widget")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Widget"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ac_unit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("airport_shuttle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("all_inclusive"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beach_access"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cake"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("free_breakfast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:a(481),alt:"图6-9"}})]),t._v(" "),n("h4",{attrs:{id:"gridview-count"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gridview-count"}},[t._v("#")]),t._v(" GridView.count")]),t._v(" "),n("p",[n("code",[t._v("GridView.count")]),t._v("构造函数内部使用了"),n("code",[t._v("SliverGridDelegateWithFixedCrossAxisCount")]),t._v("，我们通过它可以快速的创建横轴固定数量子元素的"),n("code",[t._v("GridView")]),t._v("，上面的示例代码等价于：")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[t._v("GridView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n  crossAxisCount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  childAspectRatio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Widget"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ac_unit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("airport_shuttle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("all_inclusive"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beach_access"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cake"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("free_breakfast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"slivergriddelegatewithmaxcrossaxisextent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#slivergriddelegatewithmaxcrossaxisextent"}},[t._v("#")]),t._v(" SliverGridDelegateWithMaxCrossAxisExtent")]),t._v(" "),n("p",[t._v("该子类实现了一个横轴子元素为固定最大长度的layout算法，其构造函数为：")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SliverGridDelegateWithMaxCrossAxisExtent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  double maxCrossAxisExtent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  double mainAxisSpacing "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  double crossAxisSpacing "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  double childAspectRatio "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[n("code",[t._v("maxCrossAxisExtent")]),t._v("为子元素在横轴上的最大长度，之所以是“最大”长度，是"),n("strong",[t._v("因为横轴方向每个子元素的长度仍然是等分的")]),t._v("，举个例子，如果ViewPort的横轴长度是450，那么当"),n("code",[t._v("maxCrossAxisExtent")]),t._v("的值在区间[450/4，450/3)内的话，子元素最终实际长度都为112.5，而"),n("code",[t._v("childAspectRatio")]),t._v("所指的子元素横轴和主轴的长度比为"),n("strong",[t._v("最终的长度比")]),t._v("。其它参数和"),n("code",[t._v("SliverGridDelegateWithFixedCrossAxisCount")]),t._v("相同。")]),t._v(" "),n("p",[t._v("下面我们看一个例子：")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GridView")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  padding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" EdgeInsets"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zero"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  gridDelegate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SliverGridDelegateWithMaxCrossAxisExtent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      maxCrossAxisExtent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("120.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      childAspectRatio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//宽高比为2")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Widget"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ac_unit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("airport_shuttle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("all_inclusive"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beach_access"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cake"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("free_breakfast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:a(482),alt:"图6-10"}})]),t._v(" "),n("h4",{attrs:{id:"gridview-extent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gridview-extent"}},[t._v("#")]),t._v(" GridView.extent")]),t._v(" "),n("p",[t._v("GridView.extent构造函数内部使用了SliverGridDelegateWithMaxCrossAxisExtent，我们通过它可以快速的创建纵轴子元素为固定最大长度的的GridView，上面的示例代码等价于：")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[t._v("GridView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("extent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   maxCrossAxisExtent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("120.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   childAspectRatio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Widget"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ac_unit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("airport_shuttle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("all_inclusive"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beach_access"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cake"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("free_breakfast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"gridview-builder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gridview-builder"}},[t._v("#")]),t._v(" GridView.builder")]),t._v(" "),n("p",[t._v("上面我们介绍的GridView都需要一个widget数组作为其子元素，这些方式都会提前将所有子widget都构建好，所以只适用于子widget数量比较少时，当子widget比较多时，我们可以通过"),n("code",[t._v("GridView.builder")]),t._v("来动态创建子widget。"),n("code",[t._v("GridView.builder")]),t._v(" 必须指定的参数有两个：")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[t._v("GridView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("builder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@required")]),t._v(" SliverGridDelegate gridDelegate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n "),n("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@required")]),t._v(" IndexedWidgetBuilder itemBuilder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("其中"),n("code",[t._v("itemBuilder")]),t._v("为子widget构建器。")]),t._v(" "),n("h4",{attrs:{id:"示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),n("p",[t._v("假设我们需要从一个异步数据源（如网络）分批获取一些"),n("code",[t._v("Icon")]),t._v("，然后用"),n("code",[t._v("GridView")]),t._v("来展示：")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InfiniteGridView")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StatefulWidget")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  _InfiniteGridViewState "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("_InfiniteGridViewState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("_InfiniteGridViewState")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("State")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("InfiniteGridView"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  List"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IconData"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" _icons "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//保存Icon数据")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化数据  ")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("_retrieveIcons")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  Widget "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuildContext context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" GridView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("builder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        gridDelegate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SliverGridDelegateWithFixedCrossAxisCount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            crossAxisCount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//每行三列")]),t._v("\n            childAspectRatio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//显示区域宽高相等")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        itemCount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" _icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        itemBuilder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果显示到最后一个并且Icon总数小于200时继续获取数据")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" _icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" _icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("_retrieveIcons")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Icon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//模拟异步获取数据")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("_retrieveIcons")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Future"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("delayed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Duration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("milliseconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        _icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ac_unit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("airport_shuttle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("all_inclusive"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beach_access"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cake"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          Icons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("free_breakfast\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ul",[n("li",[n("code",[t._v("_retrieveIcons()")]),t._v("：在此方法中我们通过"),n("code",[t._v("Future.delayed")]),t._v("来模拟从异步数据源获取数据，每次获取数据需要200毫秒，获取成功后将新数据添加到_icons，然后调用setState重新构建。")]),t._v(" "),n("li",[t._v("在itemBuilder中，如果显示到最后一个时，判断是否需要继续获取数据，然后返回一个Icon。")])]),t._v(" "),n("h3",{attrs:{id:"更多"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更多"}},[t._v("#")]),t._v(" 更多")]),t._v(" "),n("p",[t._v("Flutter的"),n("code",[t._v("GridView")]),t._v("默认子元素显示空间是相等的，但在实际开发中，你可能会遇到子元素大小不等的情况，如下面这样的布局：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(483),alt:"图6-11"}})]),t._v(" "),n("p",[t._v("Pub上有一个包“flutter_staggered_grid_view” ，它实现了一个交错GridView的布局模型，可以很轻松的实现这种布局，详情读者可以自行了解。")])])}),[],!1,null,null,null);s.default=e.exports}}]);
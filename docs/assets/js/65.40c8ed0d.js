(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{511:function(t,a,s){t.exports=s.p+"assets/img/7-1.fc1ee2fb.png"},632:function(t,a,s){"use strict";s.r(a);var e=s(45),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_7-2-数据共享-inheritedwidget"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-数据共享-inheritedwidget"}},[t._v("#")]),t._v(" 7.2 数据共享（InheritedWidget）")]),t._v(" "),e("p",[e("code",[t._v("InheritedWidget")]),t._v("是Flutter中非常重要的一个功能型组件，它提供了一种数据在widget树中从上到下传递、共享的方式，比如我们在应用的根widget中通过"),e("code",[t._v("InheritedWidget")]),t._v("共享了一个数据，那么我们便可以在任意子widget中来获取该共享的数据！这个特性在一些需要在widget树中共享数据的场景中非常方便！如Flutter SDK中正是通过InheritedWidget来共享应用主题（"),e("code",[t._v("Theme")]),t._v("）和Locale (当前语言环境)信息的。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("InheritedWidget")]),t._v("和React中的context功能类似，和逐级传递数据相比，它们能实现组件跨级传递数据。"),e("code",[t._v("InheritedWidget")]),t._v("的在widget树中数据传递方向是从上到下的，这和通知"),e("code",[t._v("Notification")]),t._v("（将在下一章中介绍）的传递方向正好相反。")])]),t._v(" "),e("h3",{attrs:{id:"didchangedependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#didchangedependencies"}},[t._v("#")]),t._v(" didChangeDependencies")]),t._v(" "),e("p",[t._v("在之前介绍"),e("code",[t._v("StatefulWidget")]),t._v("时，我们提到"),e("code",[t._v("State")]),t._v("对象有一个"),e("code",[t._v("didChangeDependencies")]),t._v("回调，它会在“依赖”发生变化时被Flutter Framework调用。而这个“依赖”指的就是子widget是否使用了父widget中"),e("code",[t._v("InheritedWidget")]),t._v("的数据！如果使用了，则代表子widget依赖有依赖"),e("code",[t._v("InheritedWidget")]),t._v("；如果没有使用则代表没有依赖。这种机制可以使子组件在所依赖的"),e("code",[t._v("InheritedWidget")]),t._v("变化时来更新自身！比如当主题、locale(语言)等发生变化时，依赖其的子widget的"),e("code",[t._v("didChangeDependencies")]),t._v("方法将会被调用。")]),t._v(" "),e("p",[t._v("下面我们看一下之前“计数器”示例应用程序的"),e("code",[t._v("InheritedWidget")]),t._v("版本。需要说明的是，本示例主要是为了演示"),e("code",[t._v("InheritedWidget")]),t._v("的功能特性，并不是计数器的推荐实现方式。")]),t._v(" "),e("p",[t._v("首先，我们通过继承"),e("code",[t._v("InheritedWidget")]),t._v("，将当前计数器点击次数保存在"),e("code",[t._v("ShareDataWidget")]),t._v("的"),e("code",[t._v("data")]),t._v("属性中：")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShareDataWidget")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InheritedWidget")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ShareDataWidget")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@required")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Widget child\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("child"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" child"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" int data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//需要在子树中共享的数据，保存点击次数")]),t._v("\n    \n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义一个便捷方法，方便子树中的widget获取共享数据  ")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" ShareDataWidget "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuildContext context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dependOnInheritedWidgetOfExactType"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ShareDataWidget"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//该回调决定当data发生变化时，是否通知子树中依赖data的Widget  ")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  bool "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateShouldNotify")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ShareDataWidget old"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果返回true，则子树中依赖(build函数中有调用)本widget")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//的子widget的`state.didChangeDependencies`会被调用")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" old"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("然后我们实现一个子组件"),e("code",[t._v("_TestWidget")]),t._v("，在其"),e("code",[t._v("build")]),t._v("方法中引用"),e("code",[t._v("ShareDataWidget")]),t._v("中的数据。同时，在其"),e("code",[t._v("didChangeDependencies()")]),t._v(" 回调中打印日志：")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("_TestWidget")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StatefulWidget")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  __TestWidgetState "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createState")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("__TestWidgetState")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("__TestWidgetState")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("State")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("_TestWidget"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  Widget "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuildContext context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用InheritedWidget中的共享数据")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ShareDataWidget\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("didChangeDependencies")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("didChangeDependencies")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//父或祖先widget中的InheritedWidget改变(updateShouldNotify返回true)时会被调用。")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果build中没有依赖InheritedWidget，则此回调不会被调用。")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Dependencies change"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("最后，我们创建一个按钮，每点击一次，就将"),e("code",[t._v("ShareDataWidget")]),t._v("的值自增：")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InheritedWidgetTestRoute")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StatefulWidget")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  _InheritedWidgetTestRouteState "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createState")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("_InheritedWidgetTestRouteState")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("_InheritedWidgetTestRouteState")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("State")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("InheritedWidgetTestRoute"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  int count "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  Widget "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuildContext context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Center")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      child"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ShareDataWidget")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用ShareDataWidget")]),t._v("\n        data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" count"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        child"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Column")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          mainAxisAlignment"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MainAxisAlignment"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("center"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          children"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Widget"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Padding")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n              padding"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" EdgeInsets"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("only")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bottom"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              child"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("_TestWidget")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//子widget中依赖ShareDataWidget")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("RaisedButton")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n              child"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Increment"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//每点击一次，将count自增，然后重新build,ShareDataWidget的data将被更新  ")]),t._v("\n              onPressed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("count"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("运行后界面如图7-1所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(511),alt:"图7-1"}})]),t._v(" "),e("p",[t._v("每点击一次按钮，计数器就会自增，控制台就会打印一句日志：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("I/flutter ( 8513): Dependencies change\n")])])]),e("p",[t._v("可见依赖发生变化后，其"),e("code",[t._v("didChangeDependencies()")]),t._v("会被调用。但是读者要注意，"),e("strong",[t._v("如果_TestWidget的build方法中没有使用ShareDataWidget的数据，那么它的"),e("code",[t._v("didChangeDependencies()")]),t._v("将不会被调用，因为它并没有依赖ShareDataWidget")]),t._v("。例如，我们将"),e("code",[t._v("__TestWidgetState")]),t._v("代码改为下面这样，"),e("code",[t._v("didChangeDependencies()")]),t._v("将不会被调用:")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("__TestWidgetState")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("State")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("_TestWidget"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  Widget "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuildContext context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用InheritedWidget中的共享数据")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    return Text(ShareDataWidget")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//        .of(context)")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//        .data")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//        .toString());")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("didChangeDependencies")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("didChangeDependencies")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// build方法中没有依赖InheritedWidget，此回调不会被调用。")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Dependencies change"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("上面的代码中，我们将"),e("code",[t._v("build()")]),t._v("方法中依赖"),e("code",[t._v("ShareDataWidget")]),t._v("的代码注释掉了，然后返回一个固定"),e("code",[t._v("Text")]),t._v("，这样一来，当点击Increment按钮后，"),e("code",[t._v("ShareDataWidget")]),t._v("的"),e("code",[t._v("data")]),t._v("虽然发生变化，但由于"),e("code",[t._v("__TestWidgetState")]),t._v("并未依赖"),e("code",[t._v("ShareDataWidget")]),t._v("，所以"),e("code",[t._v("__TestWidgetState")]),t._v("的"),e("code",[t._v("didChangeDependencies")]),t._v("方法不会被调用。其实，这个机制很好理解，因为在数据发生变化时只对使用该数据的Widget更新是合理并且性能友好的。")]),t._v(" "),e("blockquote",[e("p",[t._v("思考题：Flutter framework是怎么知道子widget有没有依赖InheritedWidget的？")])]),t._v(" "),e("h4",{attrs:{id:"应该在didchangedependencies-中做什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应该在didchangedependencies-中做什么"}},[t._v("#")]),t._v(" 应该在didChangeDependencies()中做什么？")]),t._v(" "),e("p",[t._v("一般来说，子widget很少会重写此方法，因为在依赖改变后framework也都会调用"),e("code",[t._v("build()")]),t._v("方法。但是，如果你需要在依赖改变后执行一些昂贵的操作，比如网络请求，这时最好的方式就是在此方法中执行，这样可以避免每次"),e("code",[t._v("build()")]),t._v("都执行这些昂贵操作。")]),t._v(" "),e("h3",{attrs:{id:"深入了解inheritedwidget"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深入了解inheritedwidget"}},[t._v("#")]),t._v(" 深入了解InheritedWidget")]),t._v(" "),e("p",[t._v("现在来思考一下，如果我们只想在"),e("code",[t._v("__TestWidgetState")]),t._v("中引用"),e("code",[t._v("ShareDataWidget")]),t._v("数据，但却不希望在"),e("code",[t._v("ShareDataWidget")]),t._v("发生变化时调用"),e("code",[t._v("__TestWidgetState")]),t._v("的"),e("code",[t._v("didChangeDependencies()")]),t._v("方法应该怎么办？其实答案很简单，我们只需要将"),e("code",[t._v("ShareDataWidget.of()")]),t._v("的实现改一下即可：")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义一个便捷方法，方便子树中的widget获取共享数据")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" ShareDataWidget "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuildContext context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//return context.dependOnInheritedWidgetOfExactType<ShareDataWidget>();")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getElementForInheritedWidgetOfExactType"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ShareDataWidget"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("widget"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("唯一的改动就是获取"),e("code",[t._v("ShareDataWidget")]),t._v("对象的方式，把"),e("code",[t._v("dependOnInheritedWidgetOfExactType()")]),t._v("方法换成了"),e("code",[t._v("context.getElementForInheritedWidgetOfExactType<ShareDataWidget>().widget")]),t._v("，那么他们到底有什么区别呢，我们看一下这两个方法的源码（实现代码在"),e("code",[t._v("Element")]),t._v("类中，"),e("code",[t._v("Context")]),t._v("和"),e("code",[t._v("Element")]),t._v("的关系我们将在后面专门介绍）：")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\nInheritedElement getElementForInheritedWidgetOfExactType"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("T "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InheritedWidget")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("_debugCheckStateIsActiveForAncestorLookup")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" InheritedElement ancestor "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _inheritedWidgets "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" _inheritedWidgets"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("T"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ancestor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\nInheritedWidget "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dependOnInheritedWidgetOfExactType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Object aspect "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("_debugCheckStateIsActiveForAncestorLookup")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" InheritedElement ancestor "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _inheritedWidgets "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" _inheritedWidgets"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("T"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//多出的部分")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ancestor "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ancestor "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("is")]),t._v(" InheritedElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dependOnInheritedElement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ancestor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" aspect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aspect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("as")]),t._v(" T"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  _hadUnsatisfiedDependencies "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("我们可以看到，"),e("code",[t._v("dependOnInheritedWidgetOfExactType()")]),t._v(" 比 "),e("code",[t._v("getElementForInheritedWidgetOfExactType()")]),t._v("多调了"),e("code",[t._v("dependOnInheritedElement")]),t._v("方法，"),e("code",[t._v("dependOnInheritedElement")]),t._v("源码如下：")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  InheritedWidget "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dependOnInheritedElement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("InheritedElement ancestor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Object aspect "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ancestor "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    _dependencies "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HashSet"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("InheritedElement"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    _dependencies"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ancestor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ancestor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateDependencies")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" aspect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ancestor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("widget"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("可以看到"),e("code",[t._v("dependOnInheritedElement")]),t._v("方法中主要是注册了依赖关系！看到这里也就清晰了，"),e("strong",[t._v("调用"),e("code",[t._v("dependOnInheritedWidgetOfExactType()")]),t._v(" 和 "),e("code",[t._v("getElementForInheritedWidgetOfExactType()")]),t._v("的区别就是前者会注册依赖关系，而后者不会")]),t._v("，所以在调用"),e("code",[t._v("dependOnInheritedWidgetOfExactType()")]),t._v("时，"),e("code",[t._v("InheritedWidget")]),t._v("和依赖它的子孙组件关系便完成了注册，之后当"),e("code",[t._v("InheritedWidget")]),t._v("发生变化时，就会更新依赖它的子孙组件，也就是会调这些子孙组件的"),e("code",[t._v("didChangeDependencies()")]),t._v("方法和"),e("code",[t._v("build()")]),t._v("方法。而当调用的是 "),e("code",[t._v("getElementForInheritedWidgetOfExactType()")]),t._v("时，由于没有注册依赖关系，所以之后当"),e("code",[t._v("InheritedWidget")]),t._v("发生变化时，就不会更新相应的子孙Widget。")]),t._v(" "),e("p",[t._v("注意，如果将上面示例中"),e("code",[t._v("ShareDataWidget.of()")]),t._v("方法实现改成调用"),e("code",[t._v("getElementForInheritedWidgetOfExactType()")]),t._v('，运行示例后，点击"Increment"按钮，会发现'),e("code",[t._v("__TestWidgetState")]),t._v("的"),e("code",[t._v("didChangeDependencies()")]),t._v("方法确实不会再被调用，但是其"),e("code",[t._v("build()")]),t._v('仍然会被调用！造成这个的原因其实是，点击"Increment"按钮后，会调用'),e("code",[t._v("_InheritedWidgetTestRouteState")]),t._v("的"),e("code",[t._v("setState()")]),t._v("方法，此时会重新构建整个页面，由于示例中，"),e("code",[t._v("__TestWidget")]),t._v(" 并没有任何缓存，所以它也都会被重新构建，所以也会调用"),e("code",[t._v("build()")]),t._v("方法。")]),t._v(" "),e("p",[t._v("那么，现在就带来了一个问题：实际上，我们只想更新子树中依赖了"),e("code",[t._v("ShareDataWidget")]),t._v("的组件，而现在只要调用"),e("code",[t._v("_InheritedWidgetTestRouteState")]),t._v("的"),e("code",[t._v("setState()")]),t._v("方法，所有子节点都会被重新build，这很没必要，那么有什么办法可以避免呢？答案是缓存！一个简单的做法就是通过封装一个"),e("code",[t._v("StatefulWidget")]),t._v("，将子Widget树缓存起来，具体做法下一节我们将通过实现一个"),e("code",[t._v("Provider")]),t._v(" Widget 来演示如何缓存，以及如何利用"),e("code",[t._v("InheritedWidget")]),t._v(" 来实现Flutter全局状态共享。")])])}),[],!1,null,null,null);a.default=n.exports}}]);
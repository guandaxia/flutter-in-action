(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{646:function(t,a,n){"use strict";n.r(a);var s=n(45),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_9-1-flutter动画简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-flutter动画简介"}},[t._v("#")]),t._v(" 9.1 Flutter动画简介")]),t._v(" "),n("p",[t._v("在任何系统的UI框架中，动画实现的原理都是相同的，即：在一段时间内，快速地多次改变UI外观；由于人眼会产生视觉暂留，所以最终看到的就是一个“连续”的动画，这和电影的原理是一样的。我们将UI的一次改变称为一个动画帧，对应一次屏幕刷新，而决定动画流畅度的一个重要指标就是帧率FPS（Frame Per Second），即每秒的动画帧数。很明显，帧率越高则动画就会越流畅！一般情况下，对于人眼来说，动画帧率超过16FPS，就比较流畅了，超过32FPS就会非常的细腻平滑，而超过32FPS，人眼基本上就感受不到差别了。由于动画的每一帧都是要改变UI输出，所以在一个时间段内连续的改变UI输出是比较耗资源的，对设备的软硬件系统要求都较高，所以在UI系统中，动画的平均帧率是重要的性能指标，而在Flutter中，理想情况下是可以实现60FPS的，这和原生应用能达到的帧率是基本是持平的。")]),t._v(" "),n("h3",{attrs:{id:"flutter中动画抽象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flutter中动画抽象"}},[t._v("#")]),t._v(" Flutter中动画抽象")]),t._v(" "),n("p",[t._v("为了方便开发者创建动画，不同的UI系统对动画都进行了一些抽象，比如在Android中可以通过XML来描述一个动画然后设置给View。Flutter中也对动画进行了抽象，主要涉及Animation、Curve、Controller、Tween这四个角色，它们一起配合来完成一个完整动画，下面我们一一来介绍它们。")]),t._v(" "),n("h3",{attrs:{id:"animation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#animation"}},[t._v("#")]),t._v(" Animation")]),t._v(" "),n("p",[n("code",[t._v("Animation")]),t._v("是一个抽象类，它本身和UI渲染没有任何关系，而它主要的功能是保存动画的插值和状态；其中一个比较常用的"),n("code",[t._v("Animation")]),t._v("类是"),n("code",[t._v("Animation<double>")]),t._v("。"),n("code",[t._v("Animation")]),t._v("对象是一个在一段时间内依次生成一个区间(Tween)之间值的类。"),n("code",[t._v("Animation")]),t._v("对象在整个动画执行过程中输出的值可以是线性的、曲线的、一个步进函数或者任何其他曲线函数等等，这由"),n("code",[t._v("Curve")]),t._v("来决定。 根据"),n("code",[t._v("Animation")]),t._v("对象的控制方式，动画可以正向运行（从起始状态开始，到终止状态结束），也可以反向运行，甚至可以在中间切换方向。"),n("code",[t._v("Animation")]),t._v("还可以生成除"),n("code",[t._v("double")]),t._v("之外的其他类型值，如："),n("code",[t._v("Animation<Color>")]),t._v(" 或"),n("code",[t._v("Animation<Size>")]),t._v("。在动画的每一帧中，我们可以通过"),n("code",[t._v("Animation")]),t._v("对象的"),n("code",[t._v("value")]),t._v("属性获取动画的当前状态值。")]),t._v(" "),n("h4",{attrs:{id:"动画通知"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动画通知"}},[t._v("#")]),t._v(" 动画通知")]),t._v(" "),n("p",[t._v("我们可以通过"),n("code",[t._v("Animation")]),t._v("来监听动画每一帧以及执行状态的变化，"),n("code",[t._v("Animation")]),t._v("有如下两个方法：")]),t._v(" "),n("ol",[n("li",[n("code",[t._v("addListener()")]),t._v("；它可以用于给"),n("code",[t._v("Animation")]),t._v("添加帧监听器，在每一帧都会被调用。帧监听器中最常见的行为是改变状态后调用"),n("code",[t._v("setState()")]),t._v("来触发UI重建。")]),t._v(" "),n("li",[n("code",[t._v("addStatusListener()")]),t._v("；它可以给"),n("code",[t._v("Animation")]),t._v("添加“动画状态改变”监听器；动画开始、结束、正向或反向（见"),n("code",[t._v("AnimationStatus")]),t._v("定义）时会调用状态改变的监听器。")])]),t._v(" "),n("p",[t._v("读者在此只需要知道帧监听器和状态监听器的区别，在后面的章节中我们将会举例说明。")]),t._v(" "),n("h3",{attrs:{id:"curve"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#curve"}},[t._v("#")]),t._v(" Curve")]),t._v(" "),n("p",[t._v("动画过程可以是匀速的、匀加速的或者先加速后减速等。Flutter中通过"),n("code",[t._v("Curve")]),t._v("（曲线）来描述动画过程，我们把匀速动画称为线性的(Curves.linear)，而非匀速动画称为非线性的。")]),t._v(" "),n("p",[t._v("我们可以通过"),n("code",[t._v("CurvedAnimation")]),t._v("来指定动画的曲线，如：")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" CurvedAnimation curve "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CurvedAnimation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" controller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" curve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Curves"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("easeIn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("code",[t._v("CurvedAnimation")]),t._v("和"),n("code",[t._v("AnimationController")]),t._v("（下面介绍）都是"),n("code",[t._v("Animation<double>")]),t._v("类型。"),n("code",[t._v("CurvedAnimation")]),t._v("可以通过包装"),n("code",[t._v("AnimationController")]),t._v("和"),n("code",[t._v("Curve")]),t._v("生成一个新的动画对象 ，我们正是通过这种方式来将动画和动画执行的曲线关联起来的。我们指定动画的曲线为"),n("code",[t._v("Curves.easeIn")]),t._v("，它表示动画开始时比较慢，结束时比较快。 "),n("a",{attrs:{href:"https://docs.flutter.io/flutter/animation/Curves-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Curves"),n("OutboundLink")],1),t._v(" 类是一个预置的枚举类，定义了许多常用的曲线，下面列几种常用的：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Curves曲线")]),t._v(" "),n("th",[t._v("动画过程")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("linear")]),t._v(" "),n("td",[t._v("匀速的")])]),t._v(" "),n("tr",[n("td",[t._v("decelerate")]),t._v(" "),n("td",[t._v("匀减速")])]),t._v(" "),n("tr",[n("td",[t._v("ease")]),t._v(" "),n("td",[t._v("开始加速，后面减速")])]),t._v(" "),n("tr",[n("td",[t._v("easeIn")]),t._v(" "),n("td",[t._v("开始慢，后面快")])]),t._v(" "),n("tr",[n("td",[t._v("easeOut")]),t._v(" "),n("td",[t._v("开始快，后面慢")])]),t._v(" "),n("tr",[n("td",[t._v("easeInOut")]),t._v(" "),n("td",[t._v("开始慢，然后加速，最后再减速")])])])]),t._v(" "),n("p",[t._v("除了上面列举的， "),n("a",{attrs:{href:"https://docs.flutter.io/flutter/animation/Curves-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Curves"),n("OutboundLink")],1),t._v(" 类中还定义了许多其它的曲线，在此便不一一介绍，读者可以自行查看Curves类定义。")]),t._v(" "),n("p",[t._v("当然我们也可以创建自己Curve，例如我们定义一个正弦曲线：")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShakeCurve")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Curve")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  double "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("double t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PI "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"animationcontroller"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#animationcontroller"}},[t._v("#")]),t._v(" AnimationController")]),t._v(" "),n("p",[n("code",[t._v("AnimationController")]),t._v("用于控制动画，它包含动画的启动"),n("code",[t._v("forward()")]),t._v("、停止"),n("code",[t._v("stop()")]),t._v(" 、反向播放 "),n("code",[t._v("reverse()")]),t._v("等方法。"),n("code",[t._v("AnimationController")]),t._v("会在动画的每一帧，就会生成一个新的值。默认情况下，"),n("code",[t._v("AnimationController")]),t._v("在给定的时间段内线性的生成从0.0到1.0（默认区间）的数字。 例如，下面代码创建一个"),n("code",[t._v("Animation")]),t._v("对象（但不会启动动画）：")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" AnimationController controller "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnimationController")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    duration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Duration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("milliseconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vsync"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("code",[t._v("AnimationController")]),t._v("生成数字的区间可以通过"),n("code",[t._v("lowerBound")]),t._v("和"),n("code",[t._v("upperBound")]),t._v("来指定，如：")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" AnimationController controller "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnimationController")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n duration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Duration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("milliseconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n lowerBound"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n upperBound"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n vsync"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("code",[t._v("AnimationController")]),t._v("派生自"),n("code",[t._v("Animation<double>")]),t._v("，因此可以在需要"),n("code",[t._v("Animation")]),t._v("对象的任何地方使用。 但是，"),n("code",[t._v("AnimationController")]),t._v("具有控制动画的其他方法，例如"),n("code",[t._v("forward()")]),t._v("方法可以启动正向动画，"),n("code",[t._v("reverse()")]),t._v("可以启动反向动画。在动画开始执行后开始生成动画帧，屏幕每刷新一次就是一个动画帧，在动画的每一帧，会随着根据动画的曲线来生成当前的动画值（"),n("code",[t._v("Animation.value")]),t._v("），然后根据当前的动画值去构建UI，当所有动画帧依次触发时，动画值会依次改变，所以构建的UI也会依次变化，所以最终我们可以看到一个完成的动画。 另外在动画的每一帧，"),n("code",[t._v("Animation")]),t._v("对象会调用其帧监听器，等动画状态发生改变时（如动画结束）会调用状态改变监听器。")]),t._v(" "),n("p",[n("code",[t._v("duration")]),t._v("表示动画执行的时长，通过它我们可以控制动画的速度。")]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("注意")]),t._v("： 在某些情况下，动画值可能会超出"),n("code",[t._v("AnimationController")]),t._v("的[0.0，1.0]的范围，这取决于具体的曲线。例如，"),n("code",[t._v("fling()")]),t._v("函数可以根据我们手指滑动（甩出）的速度(velocity)、力量(force)等来模拟一个手指甩出动画，因此它的动画值可以在[0.0，1.0]范围之外 。也就是说，根据选择的曲线，"),n("code",[t._v("CurvedAnimation")]),t._v("的输出可以具有比输入更大的范围。例如，Curves.elasticIn等弹性曲线会生成大于或小于默认范围的值。")])]),t._v(" "),n("h4",{attrs:{id:"ticker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ticker"}},[t._v("#")]),t._v(" Ticker")]),t._v(" "),n("p",[t._v("当创建一个"),n("code",[t._v("AnimationController")]),t._v("时，需要传递一个"),n("code",[t._v("vsync")]),t._v("参数，它接收一个"),n("code",[t._v("TickerProvider")]),t._v("类型的对象，它的主要职责是创建"),n("code",[t._v("Ticker")]),t._v("，定义如下：")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TickerProvider")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通过一个回调创建一个Ticker")]),t._v("\n  Ticker "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTicker")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TickerCallback onTick"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Flutter应用在启动时都会绑定一个"),n("code",[t._v("SchedulerBinding")]),t._v("，通过"),n("code",[t._v("SchedulerBinding")]),t._v("可以给每一次屏幕刷新添加回调，而"),n("code",[t._v("Ticker")]),t._v("就是通过"),n("code",[t._v("SchedulerBinding")]),t._v("来添加屏幕刷新回调，这样一来，每次屏幕刷新都会调用"),n("code",[t._v("TickerCallback")]),t._v("。使用"),n("code",[t._v("Ticker")]),t._v("(而不是"),n("code",[t._v("Timer")]),t._v(")来驱动动画会防止屏幕外动画（动画的UI不在当前屏幕时，如锁屏时）消耗不必要的资源，因为Flutter中屏幕刷新时会通知到绑定的"),n("code",[t._v("SchedulerBinding")]),t._v("，而"),n("code",[t._v("Ticker")]),t._v("是受"),n("code",[t._v("SchedulerBinding")]),t._v("驱动的，由于锁屏后屏幕会停止刷新，所以"),n("code",[t._v("Ticker")]),t._v("就不会再触发。")]),t._v(" "),n("p",[t._v("通常我们会将"),n("code",[t._v("SingleTickerProviderStateMixin")]),t._v("添加到"),n("code",[t._v("State")]),t._v("的定义中，然后将State对象作为"),n("code",[t._v("vsync")]),t._v("的值，这在后面的例子中可以见到。")]),t._v(" "),n("h3",{attrs:{id:"tween"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tween"}},[t._v("#")]),t._v(" Tween")]),t._v(" "),n("p",[t._v("默认情况下，"),n("code",[t._v("AnimationController")]),t._v("对象值的范围是[0.0，1.0]。如果我们需要构建UI的动画值在不同的范围或不同的数据类型，则可以使用"),n("code",[t._v("Tween")]),t._v("来添加映射以生成不同的范围或数据类型的值。例如，像下面示例，"),n("code",[t._v("Tween")]),t._v("生成[-200.0，0.0]的值：")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Tween doubleTween "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tween")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("double"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("begin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("code",[t._v("Tween")]),t._v("构造函数需要"),n("code",[t._v("begin")]),t._v("和"),n("code",[t._v("end")]),t._v("两个参数。"),n("code",[t._v("Tween")]),t._v("的唯一职责就是定义从输入范围到输出范围的映射。输入范围通常为[0.0，1.0]，但这不是必须的，我们可以自定义需要的范围。")]),t._v(" "),n("p",[n("code",[t._v("Tween")]),t._v("继承自"),n("code",[t._v("Animatable<T>")]),t._v("，而不是继承自"),n("code",[t._v("Animation<T>")]),t._v("，"),n("code",[t._v("Animatable")]),t._v("中主要定义动画值的映射规则。")]),t._v(" "),n("p",[t._v("下面我们看一个ColorTween将动画输入范围映射为两种颜色值之间过渡输出的例子：")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Tween colorTween "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ColorTween")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("begin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Colors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transparent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Colors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("black54"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("code",[t._v("Tween")]),t._v("对象不存储任何状态，相反，它提供了"),n("code",[t._v("evaluate(Animation<double> animation)")]),t._v("方法，它可以获取动画当前映射值。 "),n("code",[t._v("Animation")]),t._v("对象的当前值可以通过"),n("code",[t._v("value()")]),t._v("方法取到。"),n("code",[t._v("evaluate")]),t._v("函数还执行一些其它处理，例如分别确保在动画值为0.0和1.0时返回开始和结束状态。")]),t._v(" "),n("h4",{attrs:{id:"tween-animate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tween-animate"}},[t._v("#")]),t._v(" Tween.animate")]),t._v(" "),n("p",[t._v("要使用Tween对象，需要调用其"),n("code",[t._v("animate()")]),t._v("方法，然后传入一个控制器对象。例如，以下代码在500毫秒内生成从0到255的整数值。")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" AnimationController controller "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnimationController")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    duration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Duration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("milliseconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vsync"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nAnimation"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("int"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" alpha "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntTween")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("begin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("animate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("controller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("注意"),n("code",[t._v("animate()")]),t._v("返回的是一个"),n("code",[t._v("Animation")]),t._v("，而不是一个"),n("code",[t._v("Animatable")]),t._v("。")]),t._v(" "),n("p",[t._v("以下示例构建了一个控制器、一条曲线和一个Tween：")]),t._v(" "),n("div",{staticClass:"language-dart extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dart"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" AnimationController controller "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnimationController")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    duration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Duration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("milliseconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vsync"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Animation curve "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CurvedAnimation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" controller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" curve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Curves"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("easeOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nAnimation"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("int"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" alpha "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntTween")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("begin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("animate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);
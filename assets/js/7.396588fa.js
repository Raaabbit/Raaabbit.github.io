(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{372:function(t,s,a){t.exports=a.p+"assets/img/img1.3be7eaa5.png"},373:function(t,s,a){t.exports=a.p+"assets/img/img2.cded7e36.png"},374:function(t,s,a){t.exports=a.p+"assets/img/img3.47b95c9e.png"},457:function(t,s,a){"use strict";a.r(s);var n=a(25),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"栈与队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#栈与队列"}},[t._v("#")]),t._v(" 栈与队列")]),t._v(" "),n("p",[n("img",{attrs:{src:a(372),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"栈"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#栈"}},[t._v("#")]),t._v(" 栈")]),t._v(" "),n("p",[t._v("栈是一种很常用的数据结构，是一个 "),n("strong",[t._v("只能在一端进行插入和删除操作")]),t._v(" 的线性表。")]),t._v(" "),n("h3",{attrs:{id:"栈的一些基本概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#栈的一些基本概念"}},[t._v("#")]),t._v(" 栈的一些基本概念")]),t._v(" "),n("ul",[n("li",[t._v("栈顶：线性表允许进行操作的一端")]),t._v(" "),n("li",[t._v("栈底：线性表不允许操作的一段")]),t._v(" "),n("li",[t._v("后进先出：栈中元素的入栈和出栈操作是符合后进先出规则的，如下图1")])]),t._v(" "),n("h3",{attrs:{id:"栈的基本操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#栈的基本操作"}},[t._v("#")]),t._v(" 栈的基本操作")]),t._v(" "),n("p",[t._v("一般的栈都会用到如下操作，这里列出的操作也会在后面直接以简称的形式出现～")]),t._v(" "),n("ul",[n("li",[t._v("初始化空栈: initStack()")]),t._v(" "),n("li",[t._v("判断栈是否为空: isEmpty()")]),t._v(" "),n("li",[t._v("入栈: push()")]),t._v(" "),n("li",[t._v("出栈: pop()")]),t._v(" "),n("li",[t._v("读取栈顶元素: getTop()")])]),t._v(" "),n("h3",{attrs:{id:"栈的顺序存储结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#栈的顺序存储结构"}},[t._v("#")]),t._v(" 栈的顺序存储结构")]),t._v(" "),n("p",[t._v("一般情况下，栈中元素占据连续的物理空间，在不同语言的实现中，栈顶指针可能始终指向栈顶的元素，也可能指向栈顶元素的下一个元素，此时判断空栈/满栈的条件要进行灵活的调节。")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 栈顶指针始终指向栈顶的元素")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifFull")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAX_SIZE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br")])]),n("p",[t._v("在空栈情况下，栈顶指针和栈底指针指向同一块地址")]),t._v(" "),n("h3",{attrs:{id:"特殊的共享栈"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特殊的共享栈"}},[t._v("#")]),t._v(" 特殊的共享栈")]),t._v(" "),n("p",[t._v("由于栈的特性，可以将两个栈的栈顶对接在一起（就好像两个口对在一起的水杯。这样做的目的是充分利用一个连续的固定大小的存储空间，当两个栈顶指针相邻的时候说明这个存储空间满了～\n"),n("img",{attrs:{src:a(373),alt:""}}),t._v(" "),n("strong",[t._v("注意：")]),t._v(" 0号栈push的时候，要先将top++；而1号栈push的时候要将top--")]),t._v(" "),n("h2",{attrs:{id:"队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#队列"}},[t._v("#")]),t._v(" 队列")]),t._v(" "),n("p",[t._v("队列也是一种受到限制的线性表，只允许在一端进入，另一端进行删除\n（见图2")]),t._v(" "),n("h3",{attrs:{id:"队列的一些基本概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#队列的一些基本概念"}},[t._v("#")]),t._v(" 队列的一些基本概念")]),t._v(" "),n("ul",[n("li",[t._v("队头：允许删除的一端")]),t._v(" "),n("li",[t._v("队尾：允许插入的一端（？？")]),t._v(" "),n("li",[t._v("空队列：不含任何元素的空表")])]),t._v(" "),n("h3",{attrs:{id:"队列的基本操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#队列的基本操作"}},[t._v("#")]),t._v(" 队列的基本操作")]),t._v(" "),n("ul",[n("li",[t._v("初始化空队列：initQueue")]),t._v(" "),n("li",[t._v("判断队列为空：isEmpty")]),t._v(" "),n("li",[t._v("入队：inQueue")]),t._v(" "),n("li",[t._v("出队：outQueue\n###队列的存储结构\n一般的队列采取顺序表存储，队头指针指向队头元素的下一个位置，队尾指针指向队尾元素（也可以定义为队头指针指向队头元素，队尾指针指向队尾元素的后一个位置）。")])]),t._v(" "),n("p",[t._v("但是传统的队列有一个问题：当队尾元素占据了顺序表的最后一个位置，不管这块存储空间还有没有空间，都无法再入队，造成一种"),n("strong",[t._v("虚假满队列现象")]),t._v(" "),n("s",[t._v("（我起的名字hiahia）")]),t._v(" 。"),n("br"),t._v("\n要解决上述问题，有两种办法，第一种是探测是否真的是满队列（队头指针指向0，队尾指针指向MAX_SIZE），如果真的是满队列，报出溢出异常，如果是假满队列就申请新的空间，做一次拷贝。")]),t._v(" "),n("p",[n("strong",[t._v("更好的解决方法")]),t._v(" 是用循环队列解决问题，将这个队列假想成一个环。当队尾指向顺序表的最后时，如果想要入队，就把新节点放进顺序表的第一个位置（当然，前提是这块空间没有满～）\n"),n("img",{attrs:{src:a(374),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"栈和队列的应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#栈和队列的应用"}},[t._v("#")]),t._v(" 栈和队列的应用")]),t._v(" "),n("p",[t._v("我认为，栈和队列的重要性不在于存储数据，栈和队列在调度上有神奇的作用。如：")]),t._v(" "),n("ul",[n("li",[t._v("使用栈进行匹配分析")]),t._v(" "),n("li",[t._v("使用栈解决递归问题")]),t._v(" "),n("li",[t._v("使用队列进行缓冲")]),t._v(" "),n("li",[t._v("使用队列进行多任务调度")])]),t._v(" "),n("p",[t._v("可以参考一节哦～ ->"),n("a",{attrs:{href:"https://raaabbit.github.io/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E4%BA%8C%E5%8F%89%E6%A0%91/#%E4%BB%80%E4%B9%88%E6%98%AF%E4%BA%8C%E5%8F%89%E6%A0%91",target:"_blank",rel:"noopener noreferrer"}},[t._v("二叉树"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);
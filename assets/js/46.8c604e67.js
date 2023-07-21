(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{546:function(s,t,a){s.exports=a.p+"assets/img/1664782530703-b2423b57-1fea-499b-a800-a662ac5ece9c.825aa030.png"},625:function(s,t,a){"use strict";a.r(t);var e=a(2),_=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[t("code",[s._v("I/O")]),s._v("重定向允许我们修改输出结果的去处和输入的来源。")])]),s._v(" "),t("h2",{attrs:{id:"标准输出重定向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标准输出重定向"}},[s._v("#")]),s._v(" 标准输出重定向")]),s._v(" "),t("p",[s._v("将标准输出重定向到其他文件，而非出现在屏幕上，可以使用重定向操作符 "),t("strong",[t("code",[s._v(">")])]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("将/usr/bin目录的文件列表输出到ls_output.txt文件\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" /usr/bin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ls_output.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("p",[s._v("注意：\n"),t("strong",[s._v("1、如果命令出错了，例如上述的")]),t("code",[s._v("ls -l /usr/bin")]),t("strong",[s._v("换成了")]),t("code",[s._v("ls -l /aaa/bin")]),t("strong",[s._v("，此时")]),t("code",[s._v("/aaa/bin")]),t("strong",[s._v("目录并不存在，此时错误信息仍然会显示在屏幕上，而不是重定向到")]),t("code",[s._v("ls_output.txt")]),t("strong",[s._v("文件！为什么？")])]),s._v(" "),t("p",[s._v("答："),t("code",[s._v("ls")]),s._v("命令的错误并没有将错误消息发送到标准输出，而是将错误消息发送到了标准错误。因为我们只是重定向了标准输出，并没有重定向标准错误。")]),s._v(" "),t("p",[t("strong",[s._v("2、当出现错误之后，我们再次执行命令")]),t("code",[s._v("ls -l ls_output.txt")]),t("strong",[s._v("查看目标文件的信息。发现，文件大小为")]),t("code",[s._v("0")]),t("strong",[s._v("！为什么？")])]),s._v(" "),t("p",[s._v("答：当使用重定向符"),t("code",[s._v(">")]),s._v("对标准输出进行重定向时，会 "),t("strong",[t("em",[s._v("完全重写")])]),s._v(" 目标文件。由于"),t("code",[s._v("ls")]),s._v("命令出错了，其除了错误消息外并没有产生任何输出结果。重定向操作在一开始准备 "),t("strong",[t("em",[s._v("重写(清空文件内容)")])]),s._v(" 该文件时，出现了错误终止了写入，所以该文件大小为"),t("code",[s._v("0")]),s._v("。")])]),s._v(" "),t("h4",{attrs:{id:"清空、创建文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清空、创建文件"}},[s._v("#")]),s._v(" 清空、创建文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ls_output.txt // 清空文件内容\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" new_file.txt // 创建新文件\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"将标准输出追加到文件末尾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将标准输出追加到文件末尾"}},[s._v("#")]),s._v(" 将标准输出追加到文件末尾")]),s._v(" "),t("p",[t("strong",[s._v("可以使用 "),t("strong",[t("code",[s._v(">>")])]),s._v(" 来完成此功能。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" /usr/bin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ls_output.txt \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"标准错误重定向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标准错误重定向"}},[s._v("#")]),s._v(" 标准错误重定向")]),s._v(" "),t("p",[s._v("标准错误重定向缺少专门的重定向操作符。我们需要借助文件描述符来实现。\n描述符对应文件流：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("0")]),s._v(" "),t("th",[s._v("标准输入")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("1")]),s._v(" "),t("td",[s._v("标准输出")])]),s._v(" "),t("tr",[t("td",[s._v("2")]),s._v(" "),t("td",[s._v("标准错误")])])])]),s._v(" "),t("p",[s._v("我们可以使用以下写法来重定向标准错误，文件描述符"),t("code",[s._v("2")]),s._v("紧挨着重定向操作符，将标准错误输出到"),t("code",[s._v("ls_output.txt")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" /bin/usr "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" ls_error.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"将标准输出-和-标准错误重定向到同一个文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将标准输出-和-标准错误重定向到同一个文件"}},[s._v("#")]),s._v(" 将标准输出_和_标准错误重定向到同一个文件")]),s._v(" "),t("p",[s._v("有两种方式：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("ls -l /aaa/bin > ls_output.txt 2>&1")]),s._v("：适用于旧版"),t("code",[s._v("shell")]),s._v("。我们执行了两次重定向："),t("strong",[s._v("先重定向标准输出到")]),t("code",[s._v("ls_output.txt")]),t("strong",[s._v("，然后使用")]),t("code",[s._v("2>&1")]),t("strong",[s._v("将文件描述符")]),t("code",[s._v("2 (标准错误)")]),t("strong",[s._v("重定向到文件描述符")]),t("code",[s._v("1 (标准输出)")]),s._v("。")])]),s._v(" "),t("blockquote",[t("p",[s._v("注意：\n重定向操作的顺序很重要！")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("> ls_output.txt 2>&1")])]),s._v(" "),t("li",[t("code",[s._v("2>&1 > ls_output.txt")]),s._v("：标准错误会被重定向到屏幕")])])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("ls -l /aaa/bin &> ls_output.txt")]),s._v("：联合操作")])]),s._v(" "),t("h3",{attrs:{id:"丢弃无用的输出结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#丢弃无用的输出结果"}},[s._v("#")]),s._v(" 丢弃无用的输出结果")]),s._v(" "),t("p",[s._v("系统提供了一种方法："),t("strong",[t("em",[s._v("将输出结果重定向到名为")])]),t("code",[s._v("/dev/null")]),t("strong",[s._v("的特殊文件")]),t("em",[s._v("，来实现丢弃无用输出。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// 丢弃无用输出\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" /bin/usr "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" /dev/null\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"标准输入重定向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标准输入重定向"}},[s._v("#")]),s._v(" 标准输入重定向")]),s._v(" "),t("p",[s._v("介绍标准输入重定向之前，先来看一下"),t("code",[s._v("cat")]),s._v("命令。")]),s._v(" "),t("h3",{attrs:{id:"cat-拼接文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cat-拼接文件"}},[s._v("#")]),s._v(" "),t("code",[s._v("cat -- 拼接文件")])]),s._v(" "),t("p",[t("code",[s._v("cat")]),s._v("命令 "),t("em",[t("strong",[s._v("读取")])]),s._v(" 一个或多个文件并将其 "),t("strong",[t("em",[s._v("复制到标准输出")])]),s._v(" ："),t("code",[s._v("cat filename")]),s._v("。")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("cat")]),s._v("命令常用于显示比较短的文本文件。"),t("strong",[t("em",[t("code",[s._v("-n")])])]),s._v(" "),t("strong",[t("em",[s._v("选项可以显示行号")])])])]),s._v(" "),t("blockquote",[t("p",[s._v("当我们想要合并一些文件时，我们可以执行以下命令：\n"),t("code",[s._v("cat movie.mpeg.0* > movie.mpeg")]),s._v("\n通配符会按照顺序扩展，此"),t("code",[s._v("cat")]),s._v("命令的参数排序也不会出错")])]),s._v(" "),t("h4",{attrs:{id:"cat命令没有指参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cat命令没有指参数"}},[s._v("#")]),s._v(" "),t("code",[s._v("cat")]),s._v("命令没有指参数")]),s._v(" "),t("p",[s._v("如果"),t("code",[s._v("cat")]),s._v("命令**"),t("em",[s._v("未指定任何参数")]),s._v("**，它就会 "),t("strong",[t("em",[s._v("从__标准输入__中读取")])]),s._v(" 。")]),s._v(" "),t("ul",[t("li",[s._v("执行命令"),t("code",[s._v("cat")]),s._v("，它会一直等待我们从键盘输入，并输入内容输出到屏幕中。\n"),t("ul",[t("li",[s._v("执行"),t("code",[s._v("ctrl + D")]),s._v("可以告诉"),t("code",[s._v("cat")]),s._v("命令已经到达了标准输入的文件末尾"),t("code",[s._v("End Of File, EOF")])])])]),s._v(" "),t("li",[s._v("由于在缺少参数的情况下，"),t("code",[s._v("cat")]),s._v("命令会 "),t("strong",[t("em",[s._v("将标准输入__复制__到标准输出")])]),s._v(" 。所以，"),t("strong",[s._v("我们再将")]),s._v(" "),t("code",[s._v("cat")]),t("strong",[s._v("命令的输出重定向某个文件，即可实现往文件里写入数据")]),s._v("："),t("code",[s._v("cat > log.txt")]),s._v("。")]),s._v(" "),t("li",[s._v("执行"),t("code",[s._v("cat log.txt")]),s._v("，可以将文件的内容复制到标准输出以查看。")]),s._v(" "),t("li",[t("code",[s._v("cat < log.txt")]),s._v("：将标准输入从键盘改为文件"),t("code",[s._v("log.txt")]),s._v("。其结果和"),t("code",[s._v("cat log.txt")]),s._v("是一致的")])]),s._v(" "),t("h2",{attrs:{id:"管道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管道"}},[s._v("#")]),s._v(" 管道")]),s._v(" "),t("p",[s._v("通过管道操作符 "),t("strong",[t("code",[s._v("|")])]),s._v(" ，可以 "),t("strong",[t("em",[s._v("将一个命令的标准输出传给另一个命令的标准输入")])]),s._v(" ："),t("code",[s._v("command1 | command2")]),s._v("。")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("之前学过的")]),t("code",[s._v("less")]),t("strong",[s._v("就能够使用标准输入！")]),s._v("\n对于那些将结果输出到标准输出的命令，我们都可以使用"),t("code",[s._v("less")]),s._v("将其输出结果逐页显示出来：\n"),t("code",[s._v("ls -l /usr/bin | less")])])]),s._v(" "),t("h3",{attrs:{id:"sort-排序列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sort-排序列表"}},[s._v("#")]),s._v(" "),t("code",[s._v("sort --排序列表")])]),s._v(" "),t("p",[s._v("通过"),t("code",[s._v("sort")]),s._v("命令可以实现排序。"),t("strong",[t("em",[s._v("默认按照字符顺序对比，从左到右，一位一位对比")])]),s._v("。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-n")]),t("strong",[t("em",[s._v("选项：对数字进行排序")])])]),s._v(" "),t("li",[t("code",[s._v("-r")]),t("strong",[t("em",[s._v("选项：逆序（降序）排序")])])]),s._v(" "),t("li",[t("code",[s._v("-k2")]),t("strong",[t("em",[s._v("选项：按照第")])]),t("code",[s._v("2")]),t("strong",[t("em",[s._v("列进行排序，注意：")])]),t("code",[s._v("k")]),t("strong",[t("em",[s._v("要和")])]),t("code",[s._v("数字")]),t("strong",[t("em",[s._v("连在一起。 "),t("strong",[s._v("所谓列就是以")]),s._v(" 空白字符")]),s._v(" "),t("em",[s._v("分割")])])]),s._v(" "),t("li",[t("code",[s._v("-t 'sep'")]),s._v(" "),t("strong",[t("em",[s._v("选项：设置以")])]),s._v(" "),t("code",[s._v("sep")]),s._v(" "),t("strong",[t("em",[s._v("为分割符")])])])]),s._v(" "),t("blockquote",[t("p",[s._v("企业面试题案例：对"),t("code",[s._v("/etc")]),s._v("目录下面的文件/目录的大小进行排序（取前10个）\n步骤：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("ls -l /etc")])]),s._v(" "),t("li",[t("code",[s._v("ls -l /etc | sort -k5")])]),s._v(" "),t("li",[t("code",[s._v("ls -l /etc | sort -rnk5")])]),s._v(" "),t("li",[t("code",[s._v("ls -l /etc | sort -rnk5 | head")]),s._v(" -- 最终答案")])])]),s._v(" "),t("ul",[t("li",[s._v("将"),t("code",[s._v("/bin")]),s._v("和"),t("code",[s._v("/usr/bin")]),s._v("目录下的所有文件合并成一个列表，然后排序，并查看结果："),t("code",[s._v("ls -l /bin /usr/bin | sort | less")]),s._v("。")])]),s._v(" "),t("h4",{attrs:{id:"sort进阶内容-对多列进行处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sort进阶内容-对多列进行处理"}},[s._v("#")]),s._v(" "),t("code",[s._v("sort")]),s._v("进阶内容 -- 对多列进行处理")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("column -t")]),s._v("格式化数据")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、初始化数据\n-------------------------------------------------\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@liuer self_dir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat > sortlist.txt << EOF")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" oldboy "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(" linux学院          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" oldli "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" linux学院     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" oldgirl  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("  linux学院    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" old1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" linux学院  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" old2 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" linux学院  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30300")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" old3 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" linux学院  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" old4 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" linux学院  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30100")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" old5 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" linux学院  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" old6 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" linux学院  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" EOF\n---------------------------------------------------\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、想先对第2列排序，第2列如果有一样的就对第4列进行排序\n----------------------------------------------------\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@liuer self_dir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sort -rn -k2 -k4 sortlist.txt")]),s._v("\noldboy "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(" linux学院          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20000")]),s._v("\noldgirl  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("  linux学院    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30000")]),s._v("\noldli "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" linux学院     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21000")]),s._v("\nold5 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" linux学院  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25000")]),s._v("\nold6 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" linux学院  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15000")]),s._v("\nold3 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" linux学院  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),s._v("\nold1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" linux学院  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),s._v("\nold2 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" linux学院  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30300")]),s._v("\nold4 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" linux学院  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30100")]),s._v("\n---------------------------------------------------\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rn")]),s._v(" -k3,3 -k4.1,4.4 \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 按照第三列的开始到结束进行排序，若是其相同则按照第4列的第1个字符到第4个字符进行排序\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 列分割符为 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])]),t("h3",{attrs:{id:"uniq-报告或忽略重复行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uniq-报告或忽略重复行"}},[s._v("#")]),s._v(" "),t("code",[s._v("uniq --报告或忽略重复行")])]),s._v(" "),t("p",[t("code",[s._v("uniq")]),s._v("命令通常与"),t("code",[s._v("sort")]),s._v("命令配合使用。"),t("code",[s._v("uniq")]),s._v("命令可以从标准输入或单个文件名参数中获取有序得到数据列表（搭配"),t("code",[s._v("sort")]),s._v("），默认删除所有重复行。")]),s._v(" "),t("blockquote",[t("p",[s._v("注意："),t("code",[s._v("uniq")]),t("em",[t("strong",[s._v("去重规则，它只")]),t("strong",[t("strong",[s._v("处理相邻")])]),t("strong",[s._v("的！所以其通常会和")])]),t("code",[s._v("_**sort**_")]),t("em",[t("strong",[s._v("一起使用")])]),s._v(" "),t("img",{attrs:{src:a(546),alt:"image.png"}})])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("**_-c_**")]),t("strong",[t("em",[s._v("选项：输出去重后的内容，及其出现的次数")])])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 大多数情况下， uniq前的sort是为了让重复的排在一起，")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 而uniq之后的sort就是正真意义的排序了")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 查看前10个 去重排序之后的 /bin 目录 以及/usr/bin下的文件列表")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /bin /usr/bin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"wc-统计文件中换行符、单词、及字节的数量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wc-统计文件中换行符、单词、及字节的数量"}},[s._v("#")]),s._v(" "),t("code",[s._v("wc --统计文件中换行符、单词、及字节的数量")])]),s._v(" "),t("p",[t("code",[s._v("wc")]),s._v("全拼为"),t("code",[s._v("word count")]),s._v("，译为单词统计。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" ls_output.txt\n-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7902")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64566")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("503634")]),s._v(" ls_output.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("命令输出的三个数字分别是"),t("code",[s._v("ls_output.txt")]),s._v("中的**"),t("em",[s._v("行数")]),t("strong",[s._v("、")]),t("em",[s._v("单词数")]),t("strong",[s._v("、")]),t("em",[s._v("字节数")]),s._v("**。")]),s._v(" "),t("ul",[t("li",[s._v("如果没有指定命令行参数，"),t("code",[s._v("wc")]),s._v("命令会从 "),t("em",[s._v("标准输入中读取")]),s._v("。")]),s._v(" "),t("li",[t("code",[s._v("-l")]),s._v("选项限制 "),t("strong",[s._v("只输出")]),s._v(" "),t("em",[t("strong",[s._v("文件行数")])]),s._v(" 。")]),s._v(" "),t("li",[t("code",[s._v("-c")]),s._v("选项限制只输出 "),t("strong",[s._v("字符数")])])]),s._v(" "),t("blockquote",[t("p",[s._v("企业级应用案例，通过"),t("code",[s._v("wc")]),s._v("命令，统计次数，出现了多少个\n"),t("code",[s._v("ls -l | wc -l")]),s._v("：统计当前目录文件/目录的数量")])]),s._v(" "),t("h3",{attrs:{id:"grep-输出与模式匹配的行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grep-输出与模式匹配的行"}},[s._v("#")]),s._v(" "),t("code",[s._v("grep --输出与模式匹配的行")])]),s._v(" "),t("p",[t("code",[s._v("grep")]),s._v("命令可用于在文件中查找文本模式："),t("code",[s._v("**grep **_**pattern filename**_")]),s._v("。当"),t("code",[s._v("grep")]),s._v('命令在文件中遇到"模式"的时候，会_输出包含该模式的行_。')]),s._v(" "),t("ul",[t("li",[t("code",[s._v("ls /bin /usr/bin | sort | uniq | grep zip")]),s._v("：从程序列表中找出名称中包含单词"),t("code",[s._v("zip")]),s._v("的所有文件。")]),s._v(" "),t("li",[t("code",[s._v("-i")]),s._v(" "),t("strong",[t("em",[s._v("选项使")])]),t("code",[s._v("grep")]),t("strong",[t("em",[s._v("命令在搜索的时候")]),s._v(" "),t("em",[s._v("忽略字母大小写")])])]),s._v(" "),t("li",[t("code",[s._v("-v")]),s._v(" "),t("strong",[t("em",[s._v("使")])]),t("code",[s._v("grep")]),t("strong",[t("em",[s._v("命令只输出")])]),t("em",[t("strong",[s._v("不匹配指定模式")])]),t("strong",[t("em",[s._v("的行")])])]),s._v(" "),t("li",[t("code",[s._v("-n")]),s._v(" "),t("strong",[t("em",[s._v("显示行号")]),s._v(" "),t("em",[s._v("，内容在文件中的行号")])])]),s._v(" "),t("li",[t("code",[s._v("-Ax")]),s._v(" "),t("strong",[t("em",[s._v("除了显示匹配的内容外，还显示其")]),s._v(" "),t("em",[s._v("下面__的")])]),t("code",[s._v("x")]),t("strong",[t("em",[s._v("行")])])]),s._v(" "),t("li",[t("code",[s._v("-Bx")]),s._v(" "),t("strong",[t("em",[s._v("除了显示匹配的内容外，还显示其")]),s._v(" "),t("em",[s._v("上面__的")])]),t("code",[s._v("x")]),t("strong",[t("em",[s._v("行")])])]),s._v(" "),t("li",[t("code",[s._v("-Cx")]),s._v(" "),t("strong",[t("em",[s._v("除了显示匹配的内容外，还显示其")]),s._v(" "),t("em",[s._v("上面和下面__的")])]),t("code",[s._v("x")]),t("strong",[t("em",[s._v("行")])])])]),s._v(" "),t("h3",{attrs:{id:"head-tail-输出文件的开头-结尾部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#head-tail-输出文件的开头-结尾部分"}},[s._v("#")]),s._v(" "),t("code",[s._v("head/tail --输出文件的开头/结尾部分")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("head")]),s._v("命令和"),t("code",[s._v("tail")]),s._v("命令默认分别能够输出文件的前"),t("code",[s._v("10")]),s._v("行和后"),t("code",[s._v("10")]),s._v("行")]),s._v(" "),t("li",[t("code",[s._v("-n num")]),t("strong",[s._v("选项可以指定输出多少行")])])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("tail -f")]),t("strong",[t("em",[s._v("命令可以实时查看文件")])]),s._v("，一旦文件添加了新行，立即就会输出出来。")])]),s._v(" "),t("h3",{attrs:{id:"tee-读取标准输入并将输出结果写入标准输出和文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tee-读取标准输入并将输出结果写入标准输出和文件"}},[s._v("#")]),s._v(" "),t("code",[s._v("tee --读取标准输入并将输出结果写入标准输出和文件")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("tee")]),s._v("命令从标准输入读取内容，然后将其 "),t("strong",[s._v("复制到标准输出 "),t("em",[s._v("和")]),s._v(" 其他文件")]),s._v(" 中")]),s._v(" "),t("li",[t("code",[s._v("ls /usr/bin | tee ls.txt | grep zip")]),s._v("：在屏幕中打印包含"),t("code",[s._v("zip")]),s._v("的文件名，同时还会创建"),t("code",[s._v("ls.txt")]),s._v("来接收"),t("code",[s._v("/usr/bin")]),s._v("的所有文件名")])])])}),[],!1,null,null,null);t.default=_.exports}}]);
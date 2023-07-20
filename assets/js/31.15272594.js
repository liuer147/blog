(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{488:function(h,a,s){"use strict";s.r(a);var t=s(2),n=Object(t.a)({},(function(){var h=this,a=h._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":h.$parent.slotKey}},[a("h4",{attrs:{id:"输出全部使用-hash-的情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出全部使用-hash-的情况"}},[h._v("#")]),h._v(" 输出全部使用 hash 的情况")]),h._v(" "),a("ul",[a("li",[h._v("每个文件都具有相同的 hash 值，因为 hash 是基于我们使用的所有源文件生成的。")]),h._v(" "),a("li",[h._v("如果重新运行该构建而不更改任何内容，则生成的 hash 将保持不变。")]),h._v(" "),a("li",[h._v("如果仅仅编辑一个文件，则 hash 值将会发生变化，并且所有生成捆绑的名称中都会包含此新的 hash 值")])]),h._v(" "),a("h4",{attrs:{id:"输出的结果全部使用-chunkhash-的情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出的结果全部使用-chunkhash-的情况"}},[h._v("#")]),h._v(" 输出的结果全部使用 chunkhash 的情况")]),h._v(" "),a("ul",[a("li",[h._v("chunkhash 是根据不同的入口进行依赖文件解析，构建对应的 chunk，生成对应的 hash 值")]),h._v(" "),a("li",[h._v("在使用上来说：我们把一些公共库和程序入口文件区分开来，单独打包构建，接着可以采用 chunkhash 方式来生成 hash 值，那么只要我们不改动公共库的代码，就可以保证其 hash 值不受影响，这样也起到缓存的作用。")])]),h._v(" "),a("h4",{attrs:{id:"输出的结果全部使用-contenthash-的情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出的结果全部使用-contenthash-的情况"}},[h._v("#")]),h._v(" 输出的结果全部使用 contenthash 的情况")]),h._v(" "),a("ul",[a("li",[h._v("每个生成的文件名称都有一个唯一的 hash 值，该哈希值是根据该文件的内容计算得出的。")]),h._v(" "),a("li",[h._v("当要构建的文件内容发生改变的时候，就会生成新的 hash 值，且该文件的改变并不会影响和它同一个模块下的其他文件。")])]),h._v(" "),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[h._v("#")]),h._v(" 总结")]),h._v(" "),a("p",[h._v("所以如果使用 hash，并不是每次都会重新生成新的 hash，需要看具体使用的是哪种 hash 策略。")]),h._v(" "),a("ul",[a("li",[a("strong",[h._v("hash 是跟整个项目的构建相关")]),h._v("，只要项目里有文件更改，整个项目构建的 hash 值都会更改，并且全部文件都共用相同的 hash 值。")]),h._v(" "),a("li",[a("strong",[h._v("chunkhash 是根据不同的入口进行依赖文件解析")]),h._v("，构建对应的 chunk 生成相应的 hash 值。只有被修改过的 chunk 在重新构建之后才会生成新的 hash 值，不会影响其它的 chunk。")]),h._v(" "),a("li",[a("strong",[h._v("contenthash 是跟每个生成文件有关")]),h._v("，每个文件都有一个唯一的 hash 值。当要构建的文件内容发生改变时，就会生成新的 hash 值，并且该文件的改变并不会影响和它同一模块下的其他文件。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);
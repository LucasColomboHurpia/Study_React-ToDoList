(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],{13:function(A,t,e){},15:function(A,t,e){},16:function(A,t,e){"use strict";e.r(t);var n=e(1),c=e.n(n),s=e(6),f=e.n(s),o=(e(13),e(8)),u=e(4),d=e.p+"static/media/DoneIcon.e5be45de.png",w=e.p+"static/media/UndoneIcon.0f7a53dc.png",r=e(0);function P(A){return A.done?Object(r.jsx)("img",{src:d,width:"20px",alt:"done",className:"checkBtn"}):Object(r.jsx)("img",{src:w,width:"20px",alt:"undone",className:"checkBtn"})}var a=function(A){return Object(r.jsx)("ul",{children:A.items.map((function(t){return Object(r.jsxs)("li",{className:t.done?"done listItem":"listItem",children:[Object(r.jsx)("span",{onClick:function(){A.markDoneItem(t)},children:Object(r.jsx)(P,{done:t.done})}),Object(r.jsx)("span",{className:"itemText",children:t.text}),Object(r.jsx)("span",{onClick:function(){A.deleteItem(t)},className:"closeBtn",children:Object(r.jsx)("span",{children:Object(r.jsx)("img",{src:"data:image/png;base64,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",alt:"X",width:"12px"})})})]},t.id)}))})};var i=function(A){var t=Object(n.useState)(""),e=Object(u.a)(t,2),c=e[0],s=e[1];return Object(r.jsxs)("form",{children:[Object(r.jsx)("input",{className:"inputText",onChange:function(A){var t=A.target.value;s(t)},id:"input",type:"text",value:c,placeholder:"So much to do!"}),Object(r.jsx)("button",{onClick:function(t){t.preventDefault(),c&&(A.updateItem(c),s(""))},children:"Add"})]})},B=e(7),v=function A(t){Object(B.a)(this,A),this.id=A.lastId++,this.text=t,this.done=!1};v.lastId=0;var C=v;var D=function(){var A=Object(n.useState)([]),t=Object(u.a)(A,2),e=t[0],c=t[1];return Object(n.useEffect)((function(){var A=JSON.parse(localStorage.getItem("savedItems"));A&&c(A)}),[]),Object(n.useEffect)((function(){localStorage.setItem("savedItems",JSON.stringify(e))}),[e]),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{className:"Header",children:"# To do List"}),Object(r.jsx)(i,{updateItem:function(A){var t=new C(A);e.filter((function(A){return A.id===t.id})).length>0&&(t.id=Math.random().toString(36).substring(7)),c([].concat(Object(o.a)(e),[t]))}}),Object(r.jsx)(a,{items:e,deleteItem:function(A){var t=e.filter((function(t){return t.id!==A.id}));c(t)},markDoneItem:function(A){var t=e.map((function(t){return t.id===A.id&&(t.done=!t.done),t}));c(t)}})]})},b=(e(15),function(A){A&&A instanceof Function&&e.e(3).then(e.bind(null,17)).then((function(t){var e=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,f=t.getTTFB;e(A),n(A),c(A),s(A),f(A)}))});f.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(D,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.fe51b899.chunk.js.map
(this["webpackJsonpchristmas-escape-room"]=this["webpackJsonpchristmas-escape-room"]||[]).push([[0],{78:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(0),i=n.n(a),r=n(23),s=n.n(r),j=n(9),o=n(125),l=n(123),d=n(120),b=n(119),x=n(53),u=n(124),h=n(112),m=Object(x.a)({palette:{mode:"dark"}});function O(e){var t=e.children;return Object(c.jsxs)(u.a,{theme:m,children:[Object(c.jsx)(h.a,{}),Object(c.jsx)(o.a,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:t})]})}var p=n(115),f=n(126),g=n(117),v=n(122),w=n(116),z=n(118),y=Object(p.a)((function(e){return{root:{width:"100%"},buttonWrapper:{display:"flex",flexDirection:"row",padding:"16px 0 0"},button:{marginRight:e.spacing(1)},spacer:{flex:"1 1 auto"},instructions:{marginTop:e.spacing(2),marginBottom:e.spacing(1)}}})),k=[{label:"Select campaign settings",content:Object(c.jsx)("h1",{children:"CONTENT"})},{label:"Create an ad group",content:Object(c.jsx)("h1",{children:"CONTENT"})},{label:"Create an ad",content:Object(c.jsx)("h1",{children:"CONTENT"})}];function S(e){var t=e.steps,n=void 0===t?k:t,i=e.completed,r=(e.finishedContent,y()),s=a.useState(0),l=Object(j.a)(s,2),b=l[0],x=l[1];return Object(c.jsxs)(o.a,{component:w.a,sx:{p:2,width:400},children:[Object(c.jsx)(f.a,{activeStep:b,alternativeLabel:!0,children:n.map((function(e){var t=e.label;return Object(c.jsx)(g.a,{children:Object(c.jsx)(v.a,{children:""})},t)}))}),Object(c.jsxs)(o.a,{sx:{my:2,height:600,display:"flex",flexDirection:"column"},children:[Object(c.jsx)(z.a,{flexItem:!0}),Object(c.jsx)(o.a,{sx:{my:1,flex:1},children:n[b].content}),Object(c.jsx)(z.a,{flexItem:!0})]}),Object(c.jsxs)(o.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(c.jsx)(d.a,{color:"inherit",disabled:0===b,onClick:function(){x((function(e){return e-1}))},className:r.button,children:"Back"}),Object(c.jsx)(d.a,{color:"inherit",onClick:function(){x((function(e){return e+1}))},disabled:b===i,children:b===n.length-1?"Finish":"Next"})]})]})}var C=n.p+"static/media/sherlock.105e7253.jpg",D=[n.p+"static/media/cat.6ddc92d1.jpg",n.p+"static/media/gollum.938fdb39.jpg",n.p+"static/media/gorilla.02dd6b71.jpg",n.p+"static/media/hair-rollers.bf055973.jpg",n.p+"static/media/messi.c60dde8e.jpg",n.p+"static/media/mona-lisa.8a2f3f22.jpg",n.p+"static/media/playboy.6bfe2b74.jpg",n.p+"static/media/toilet.1bb74d6c.jpg"];function N(){return Object(c.jsx)("div",{children:D.map((function(e,t){return Object(c.jsx)("div",{children:Object(c.jsx)("img",{width:"100%",src:e,alt:"jarek ".concat(t)})})}))})}var E=function(e,t){return{label:e,content:t}},I=[E("q1",Object(c.jsx)(W,{})),E("q2",Object(c.jsx)(q,{})),E("q3",Object(c.jsx)(M,{})),E("q4",Object(c.jsx)(P,{}))],T=a.createContext();function B(){return a.useContext(T)}function W(){var e=B(),t=a.useState(!1),n=Object(j.a)(t,2),i=n[0],r=n[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Start"}),Object(c.jsx)(o.a,{sx:{mb:2},children:Object(c.jsx)(l.a,{children:"Wykonaj wszystkie zadania, \u017ceby odblokowa\u0107 kompromituj\u0105ce nasz rz\u0105d materia\u0142y."})}),Object(c.jsx)(o.a,{component:"form",sx:{display:"flex",flexDirection:"column"},onSubmit:function(t){t.preventDefault(),i||(r(!0),e())},children:Object(c.jsx)(d.a,{disabled:i,variant:"contained",type:"submit",children:"Zaczynajmy!"})})]})}function q(){var e=B(),t=a.useState(!1),n=Object(j.a)(t,2),i=n[0],r=n[1],s=a.useState(""),x=Object(j.a)(s,2),u=x[0],h=x[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Rozgrzewka"}),Object(c.jsx)(o.a,{sx:{mb:2},children:Object(c.jsx)(l.a,{children:"Na pocz\u0105tek co\u015b \u0142atwego. Ile zwierz\u0105t zabra\u0142 Moj\u017cesz na Ark\u0119? (Podaj liczb\u0119)"})}),Object(c.jsx)(o.a,{component:"form",sx:{display:"flex",flexDirection:"column"},onSubmit:function(t){t.preventDefault(),i||("0"===u?(r(!0),e()):h("NIE!"))},children:i?Object(c.jsx)(l.a,{children:"Brawo bystrzaki! Teraz czas na co\u015b powa\u017cniejszego, a mianowicie na poszukiwania. Do boju!"}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o.a,{sx:{mb:2},children:Object(c.jsx)(b.a,{fullWidth:!0,value:u,onChange:function(e){return h(e.target.value.toString())}})}),Object(c.jsx)(d.a,{variant:"contained",type:"submit",children:"Sprawd\u017a"})]})})]})}function M(){var e=B(),t=a.useState(!1),n=Object(j.a)(t,2),i=n[0],r=n[1],s=a.useState(""),x=Object(j.a)(s,2),u=x[0],h=x[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Poszukiwania"}),Object(c.jsx)(o.a,{sx:{mb:2},children:Object(c.jsxs)(l.a,{children:["Niczym Edyp, musicie rozwi\u0105za\u0107 zagadk\u0119, ale najpierw musicie odnale\u017a\u0107 u nas w domu tego kto zada\u0142 j\u0105 Edypowi.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"Rozwi\u0105zanie zagadki:"]})}),Object(c.jsx)(o.a,{component:"form",sx:{display:"flex",flexDirection:"column"},onSubmit:function(t){t.preventDefault(),i||("keiwolzc"===u?(r(!0),e()):h("NIE!"))},children:i?Object(c.jsx)(l.a,{children:"Brawo! Mo\u017cecie kontynuowa\u0107."}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o.a,{sx:{mb:2},children:Object(c.jsx)(b.a,{fullWidth:!0,value:u,onChange:function(e){return h(e.target.value.toString())}})}),Object(c.jsx)(d.a,{variant:"contained",type:"submit",children:"Sprawd\u017a"})]})})]})}function P(){var e=B(),t=a.useState(!1),n=Object(j.a)(t,2),i=n[0],r=n[1],s=a.useState(""),x=Object(j.a)(s,2),u=x[0],h=x[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Poszukiwania"}),Object(c.jsx)(o.a,{sx:{mb:2},children:Object(c.jsx)(l.a,{children:"Mo\u017cecie nie wiedzie\u0107, kim jest ten pan po prawej, wi\u0119c jako wskaz\xf3wka jest pan po lewej. Znajdziecie go u nas w domu? Id\u017acie jego tropem a znajdziecie tajny szyfr."})}),Object(c.jsx)(o.a,{sx:{mb:2,textAlign:"center"},children:Object(c.jsx)("img",{width:"300",src:C,alt:"On the left Benedict Cumberbatch and the right Sir Arthur Conan Doyle"})}),Object(c.jsx)(o.a,{sx:{mb:2},children:Object(c.jsx)(l.a,{children:"Tajny szyfr:"})}),Object(c.jsxs)(o.a,{component:"form",sx:{display:"flex",flexDirection:"column"},onSubmit:function(t){t.preventDefault(),i||("catlover"===u?(r(!0),e()):h("NIE!"))},children:[Object(c.jsx)(o.a,{sx:{mb:2},children:Object(c.jsx)(b.a,{fullWidth:!0,value:u,onChange:function(e){return h(e.target.value.toString())}})}),Object(c.jsx)(d.a,{variant:"contained",type:"submit",children:"Sprawd\u017a"})]})]})}var A=function(){var e=a.useState(0),t=Object(j.a)(e,2),n=t[0],i=t[1],r=n===I.length;return Object(c.jsx)(T.Provider,{value:function(){return i((function(e){return e+1}))},children:Object(c.jsx)(O,{children:r?Object(c.jsx)(N,{}):Object(c.jsx)(S,{steps:I,completed:n})})})};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(A,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.56afbb8f.chunk.js.map
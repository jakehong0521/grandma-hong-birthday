(this["webpackJsonpgrandma-hong-birthday"]=this["webpackJsonpgrandma-hong-birthday"]||[]).push([[0],[,,,,,,,,,,function(e,t,s){e.exports={BoxCanvas:"Cake_BoxCanvas__3hfCj",Plate:"Cake_Plate__2Xref",CakeSide:"Cake_CakeSide__3vJ-r",CakeTop:"Cake_CakeTop__Wx89y",Drips:"Cake_Drips__2WQVJ",Drip:"Cake_Drip__E5HhH",Candle:"Cake_Candle__1yQ8M",Flame:"Cake_Flame__1nDdp",off:"Cake_off__3uVsO"}},,,,function(e,t,s){e.exports={BdayMsg:"Firework_BdayMsg__CNTlO",visible:"Firework_visible__3QtRj",ScrollMsg:"Firework_ScrollMsg__2CB9d"}},,,function(e,t,s){e.exports={Blueberry:"Fruit_Blueberry__Ib2p9",Strawberry:"Fruit_Strawberry__SoI_m"}},,,,,,,,,,function(e,t,s){e.exports={Back:"Card_Back__NMX0P"}},,function(e,t,s){e.exports={CardsContainer:"CardsContainer_CardsContainer__21KQD"}},,function(e,t,s){},,,,,function(e,t,s){},,function(e,t,s){var i={"./card0.png":39,"./card1.png":40,"./card2.png":41,"./card3.png":42};function c(e){var t=n(e);return s(t)}function n(e){if(!s.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}c.keys=function(){return Object.keys(i)},c.resolve=n,e.exports=c,c.id=38},function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/card0.0a613a30.png"},function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/card1.bfe47495.png"},function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/card2.8443ee68.png"},function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/card3.0e824d8b.png"},,,,,,,,function(e,t,s){"use strict";s.r(t);var i=s(0),c=s(11),n=s.n(c),r=(s(36),s(12)),a=s(23),l=s(10),o=s.n(l),d=s(17),j=s.n(d),b=s(1);function u(e){var t=Object(i.useState)([!0,!0,!0,!0,!0,!0,!0,!0]),s=Object(r.a)(t,2),c=s[0],n=s[1];var l=100-8*c.filter((function(e){return!e})).length;return Object(b.jsxs)("div",{className:"h-100 position-relative",children:[e.isInstructionVisible&&Object(b.jsx)("div",{className:"bg-white p-3 position-absolute rounded shadow",style:{fontSize:"28px",maxWidth:"80vw",left:"50%",top:"10%",transform:"translateX(-50%)",width:"fit-content",zIndex:"1"},children:"\ucd1b\ubd88\uc744 \ub20c\ub7ec \uaebc\uc8fc\uc138\uc694"}),Object(b.jsx)("div",{className:"align-items-center d-flex h-100",style:{background:"linear-gradient(to bottom, #dae2f8, #d6a4a4)",filter:"brightness(".concat(l,"%)"),transition:"filter 300ms"},children:Object(b.jsxs)("div",{className:o.a.BoxCanvas,children:[Object(b.jsx)("div",{className:o.a.Plate}),Object(b.jsx)("div",{className:o.a.CakeSide}),Object(b.jsx)("div",{className:o.a.Drips,children:Object(a.a)(Array(8)).map((function(e,t){return Object(b.jsx)("div",{className:o.a.Drip},t)}))}),Object(b.jsxs)("div",{className:o.a.CakeTop,children:[Object(b.jsx)("div",{className:j.a.Strawberry,style:{left:"47%",top:"50%"}}),Object(b.jsx)("div",{className:j.a.Blueberry,style:{left:"61%",top:"50%"}}),Object(b.jsx)("div",{className:j.a.Blueberry,style:{left:"56%",top:"58%"}}),c.map((function(t,s){return Object(b.jsx)("div",{className:o.a.Candle,"data-index":s+1,onClick:function(){return function(t){e.isInstructionVisible&&e.setIsInstructionVisible(!1);var s=Object(a.a)(c);s[t]=!1,n(s),s.filter((function(e){return e})).length||e.setShouldPopPopper(!0)}(s)},children:Object(b.jsx)("div",{className:"".concat(o.a.Flame," ").concat(t?o.a.on:o.a.off)})},s)}))]})]})})]})}var p=s(14),h=s.n(p),x=s(26);function O(e){var t=Object(i.useRef)(null),s=e.setIsBdayMsgVisible,c=e.shouldPopPopper;return Object(i.useEffect)((function(){if(c){var e=t.current;new x.Fireworks({target:e,hue:200,startDelay:10,minDelay:10,maxDelay:15,speed:1,acceleration:1.1,friction:.95,gravity:1,particles:50,trace:2,explosion:3,boundaries:{top:1*e.clientHeight/10,bottom:9*e.clientHeight/10,left:1*e.clientWidth/10,right:9*e.clientWidth/10},sound:{enable:!1}}).start(),setTimeout((function(){s(!0)}),500)}}),[s,c]),Object(b.jsxs)("div",{className:"h-100 position-absolute w-100",id:"firework-container",ref:t,style:{left:"0",top:"0",zIndex:"".concat(e.shouldPopPopper?1:0)},children:[Object(b.jsxs)("div",{className:"".concat(h.a.BdayMsg," ").concat(e.isBdayMsgVisible&&h.a.visible),children:["HAPPY",Object(b.jsx)("br",{}),"BIRTHDAY",Object(b.jsx)("br",{}),"\u2661"]}),Object(b.jsx)("div",{className:"".concat(h.a.ScrollMsg," ").concat(e.isScrollMsgVisible&&h.a.visible),children:"\ubc11\uc73c\ub85c \uc2a4\ud06c\ub864 \ud574\uc8fc\uc138\uc694"})]})}function f(e){var t=Object(i.useState)(!1),s=Object(r.a)(t,2),c=s[0],n=s[1],a=Object(i.useState)(!1),l=Object(r.a)(a,2),o=l[0],d=l[1],j=Object(i.useState)(!0),p=Object(r.a)(j,2),h=p[0],x=p[1];return Object(i.useEffect)((function(){o&&setTimeout((function(){e.setIsScrollMsgVisible(!0)}),2500)}),[o]),Object(b.jsxs)("div",{className:"position-relative",style:{height:"100vh"},children:[Object(b.jsx)(O,{isBdayMsgVisible:o,isScrollMsgVisible:e.isScrollMsgVisible,setIsBdayMsgVisible:d,shouldPopPopper:c}),Object(b.jsx)(u,{isInstructionVisible:h,setIsInstructionVisible:x,setShouldPopPopper:n})]})}var v=s(24),m=s(27),g=s.n(m);function _(e){var t=s(38)("./card".concat(e.index,".png")).default;return Object(b.jsxs)("div",{className:"position-relative",onClick:e.onClick,style:{width:"60vmin",zIndex:"1"},children:[Object(b.jsx)("div",{className:g.a.Back}),Object(b.jsx)("img",{alt:e.writer,className:"w-100 border shadow",src:t})]})}var y=s(18);function C(e){return Object(b.jsxs)(y.a,{centered:!0,onHide:e.onHide,scrollable:!0,show:e.isOpen,children:[Object(b.jsx)(y.a.Header,{className:"border-0",closeButton:!0}),Object(b.jsx)(y.a.Body,{style:{fontSize:"28px",lineHeight:"1.7"},children:e.letterContentJSX})]})}var w=s.p+"static/media/grandma.7c0388f5.png";function N(e){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"bg-white border shadow",style:{padding:"4vw 4vw 6vw",width:"70vw",transform:"rotate(-5deg)"},children:[Object(b.jsx)("img",{alt:"grandma",className:"w-100",src:w,style:{filter:"grayscale(0.4)"}}),Object(b.jsxs)("div",{className:"mt-3",style:{fontSize:"20px"},children:["\uac10\uc0ac\ud569\ub2c8\ub2e4.",Object(b.jsx)("br",{}),"\ud56d\uc0c1 \uc0ac\ub791\ud569\ub2c8\ub2e4."]}),Object(b.jsx)("div",{style:{fontSize:"18px"},children:"3.5.2021"})]})})}var S="writer",k=[{letterContentJSX:Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"\uc7a5\ubaa8\ub2d8\uaed8,"}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"\uba40\ub9ac\uc11c\ub098\ub9c8 \uc774\ub807\uac8c \uc9e7\uc740 \uae00\ub85c \uc0dd\uc2e0\ucd95\ud558 \uba54\uc2dc\uc9c0\ub97c \uc804\ud574\ub4dc\ub9bd\ub2c8\ub2e4."}),Object(b.jsx)("p",{children:"\ud55c\uc5c6\ub294 \uc0ac\ub791\uacfc \ub04a\uc784\uc5c6\ub294 \uae30\ub3c4\ub85c \uc800\ud76c\uc5d0\uac8c\xa0\ud56d\uc0c1 \ud798\uc744\xa0\uc8fc\uc154\uc11c \ub300\ub2e8\ud788\xa0\uac10\uc0ac\ub4dc\ub9bd\ub2c8\ub2e4. \ub610\ud55c \uba3c \uc774\uacf3\uae4c\uc9c0 \uc790\uc8fc \ucc3e\uc544\uc8fc\uc2dc\uc5b4 \uc544\uc774\ub4e4\uc5d0\uac8c \uac00\uc871\uc758 \uc18c\uc911\ud568\uc744 \uae68\ub2eb\uac8c \ud574\uc8fc\uc168\uc2b5\ub2c8\ub2e4."}),Object(b.jsx)("p",{children:"\uc624\uc2e0\ub2e4\ub294 \uc18c\uc2dd\uc744 \uc811\ud560\ub54c\ub9c8\ub2e4 \uc774\ubc88\uc5d0\ub294 \uc628\uac00\uc871\uc774 \uc5b4\ub514\ub97c \uc5ec\ud589\ud558\uace0 \ubb34\uc5c7\uc744 \ud560\uae4c \ud558\ub294 \uae30\ub2e4\ub9bc\uacfc \uc124\ub808\uc784\uc774 \uc628 \uc9d1\uc548\uc5d0 \uac00\ub4dd\ud588\uc2b5\ub2c8\ub2e4 \uc9c0\ub09c\ubc88\uc5d0\ub294 \uc774\ubaa8\ub2d8\ub4e4\ub3c4 \ud568\uaed8 \uc624\uc154\uc11c \uc9c0\uc131\uc774 \uc878\uc5c5\uc744 \ucd95\ud558\ud574\uc8fc\uc154\uc11c \ub354\uc6b1 \uae30\uc5b5\uc5d0 \ub0a8\ub294 \ud55c\ud574\uac00 \ub418\uc5c8\uc2b5\ub2c8\ub2e4 \uc5b4\ub290\uc0c8 5\uc6d4\uc740 \uac00\uc871\uc0c1\ubd09\uc758 \ub2ec \uadf8\ub9ac\uace0 \ucd94\uc5b5\uc313\uae30 \uc2dc\uac04\uc774\xa0 \ub418\uc5c8\uc9c0\ub9cc\xa0 \uc544\uc27d\uac8c\ub3c4 \ucf54\ub85c\ub09819 \uc5ec\ud30c\ub85c \ubaa8\ub4e0\uac83\uc774 \uba48\ucdb0\uc130\uc2b5\ub2c8\ub2e4 \uc791\ub144\uc5d0\ub294 5\uc6d4\uc5d0 \uacc4\ud68d\ud55c \ud734\uac00\ub3c4 \ucde8\uc18c\ud558\uace0 \ud32c\ub370\ubbf9 \uc678\uc5d0\ub294 \ubcc4\ub2e4\ub978 \uae30\uc5b5\uc774 \uc5c6\ub294 \ud55c\ud574\uac00 \ub418\uc5c8\uc2b5\ub2c8\ub2e4 \uc774\uc81c \uc2dc\uc791\ub2e8\uacc4\uc774\uc9c0\ub9cc \ubc31\uc2e0 \uc811\uc885\uc73c\ub85c \uc628\uc138\uc0c1\uc5d0\uc11c \ucf54\ub85c\ub098 \ubc14\uc774\ub7ec\uc2a4 \ud1f4\uce58\uac00 \ube68\ub9ac \uc774\ub8e8\uc5b4\uc838 \ub2e4\uc2dc \ubd59\uac8c\ub420 \ub0a0\uc744 \uc190\uaf3d\uc544 \uae30\ub2e4\ub9ac\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),Object(b.jsx)("p",{children:"\uc624\ub298\uc740 \ud2b9\ubcc4\ud55c \ub0a0 \ub9e4\uc77c\ub9e4\uc77c\uc774 \uc624\ub298\ucc98\ub7fc \ud56d\uc0c1 \ud589\ubcf5\ud558\uc2dc\uba74 \uc88b\uaca0\uc2b5\ub2c8\ub2e4."}),Object(b.jsx)("p",{className:"text-right",children:"- \ud64d\ubcd1\uc218 \uc62c\ub9bc -"})]}),writer:"byongsoo"},{letterContentJSX:Object(b.jsxs)("div",{style:{fontFamily:"'Gamja Flower', cursive"},children:[Object(b.jsx)("p",{children:"\ud560\uba38\ub2c8 \uc0dd\uc2e0 \ucd95\ud558\ub4dc\ub824\uc694!"}),Object(b.jsx)("p",{children:"\ud56d\uc0c1 \uc800\ud76c \uac00\uc871\uc744 \uc704\ud574 \uae30\ub3c4\ud574 \uc8fc\uc2dc\uace0 \ub9ce\uc740 \uc0ac\ub791\uc744 \uc8fc\uc154\uc11c \ub108\ubb34 \uac10\uc0ac\ud569\ub2c8\ub2e4. \ud56d\uc0c1 \uac74\uac15\ud558\uc2dc\uace0 \ub9e4\uc77c \uc990\uac81\uace0 \ud589\ubcf5\ud55c \uc77c\ub4e4\ub9cc \uac00\ub4dd\ud558\uc2dc\uae38 \ubc14\ub798\uc694."}),Object(b.jsx)("p",{children:"\uc791\ub144 \uc911\uc21c\uc5d0 \uc5c4\ub9c8\ub791 \uc9c0\uc131\uc774\ub791 2021\ub144\uc5d0\ub294 \uc800\ud76c\uac00 \ud55c\uad6d\uc5d0 \uac00\uac70\ub098 \ud560\uba38\ub2c8 \ud560\uc544\ubc84\uc9c0\ub97c \ub2e4\ub978\uacf3\uc5d0\uc11c \ubd48\uba74 \uc88b\uaca0\ub2e4 \uc598\uae30\ud588\ub294\ub370 \uacc4\uc18d\ub418\ub294 \ucf54\ub85c\ub098 \uc0c1\ud669\uc5d0 \uadf8\ub7f4 \uc218 \uc5c6\uc5b4\uc11c \ub108\ubb34 \uc548\ud0c0\uae5d\ub124\uc694. \uc0c1\ud669\uc774 \uc88b\uc544\uc9c0\uace0 \uc2dc\uac04\ub3c4 \uc798 \ub9de\uc544 \ub2e4\uc2dc \ubd50 \ub0a0\uc774 \ube68\ub9ac \uc654\uc73c\uba74 \uc88b\uaca0\uc2b5\ub2c8\ub2e4."}),Object(b.jsx)("p",{children:"\uc774\ubc88 \uc0dd\uc2e0\uc5d0\ub294 \ud56d\uc0c1 \ud558\ub358\ub300\ub85c \ubb38\uc790\ub97c \ud558\uac70\ub098 \uc804\ud654\ub97c \ub4dc\ub9ac\ub294 \uac83\ubcf4\ub2e4 \ub354 \ub9ce\uc774 \ud574\ub4dc\ub9ac\uace0 \uc2f6\uc740 \uc0dd\uac01\uc5d0 \uc81c\uac00 \ubb58 \ud560 \uc218 \uc788\uc744\uae4c \uace0\ubbfc\uc744 \ud558\ub2e4\uac00 \uc774\ub807\uac8c \uc0dd\uc77c \uc6f9\uc0ac\uc774\ud2b8\ub97c \ub9cc\ub4e4\uac8c \ub418\uc5c8\uc5b4\uc694. \ube44\ub85d \uc8fc\ub9d0\uc5d0\ub3c4 \uc6f9\uc0ac\uc774\ud2b8\ub97c \ub9cc\ub4e4\uace0 \uc8fc\uc911\uc5d0\ub3c4 \uc77c\uc774 \ub05d\ub098\ub9c8\uc790\ub9c8 \uc790\uae30 \uc804\uae4c\uc9c0 \uc6f9\uc0ac\uc774\ud2b8\ub97c \ub9cc\ub4dc\ub290\ub77c \ubab8\uc740 \ud53c\uace4\ud588\uc9c0\ub9cc \ud560\uba38\ub2c8\uaed8 \ub9cc\ub4e4\uc5b4 \ub4dc\ub9b0\ub2e4\ub294 \uc0dd\uac01\uc5d0 \uc815\ub9d0 \uae30\uc05c \ub9c8\uc74c\uc73c\ub85c \ub9cc\ub4e4 \uc218 \uc788\uc5c8\ub124\uc694."}),Object(b.jsx)("p",{children:"\uadf8\ub9ac\uace0 \uc774\ubc88\uc5d0\ub294 \uc2dc\uac04\uc774 \uc880 \ubd80\uc871\ud574\uc11c \uc120\ubb3c\uc774 \uc880 \uc544\uc26c\uc6b4 \ubd80\ubd84\uc774 \uc788\ub294\ub370  \ub2e4\uc74c\ubc88\uc5d0\ub294 \ub354 \uba4b\uc9c4 \uc120\ubb3c\uc744 \uc900\ube44\ud558\ub3c4\ub85d \ud560\uac8c\uc694. \uae30\ub300\ud558\uc154\ub3c4 \uc88b\uc544\uc694! (\uc5c4\ub9c8, \uc544\ube60, \uc9c0\uc131\uc774\ub97c \ub2e4 \uc798 \uaf2c\ub4dc\uaca8\uc11c \uc628 \uac00\uc871\uc774 \uc81c\ub300\ub85c \uc900\ube44\ud560 \uc218 \uc788\ub3c4\ub85d \ud560\uac8c\uc694 \u314b\u314b\u314b)"}),Object(b.jsx)("p",{children:"\uc544\ubb34\ud2bc \ub2e4\uc2dc \uc9c4\uc2ec\uc73c\ub85c \uc0dd\uc2e0 \ucd95\ud558\ub4dc\ub824\uc694. \ud56d\uc0c1 \uac10\uc0ac\ub4dc\ub9ac\uace0 \uc0ac\ub791\ud574\uc694!"}),Object(b.jsx)("p",{className:"text-right",children:"- \uc900\uc131 \uc62c\ub9bc -"})]}),writer:"junseong"},{letterContentJSX:Object(b.jsxs)("div",{style:{fontFamily:"'Gaegu', cursive"},children:[Object(b.jsx)("p",{children:"\ud560\uba38\ub2c8\uaed8,"}),Object(b.jsx)("p",{children:"\ud560\uba38\ub2c8 \uc0dd\uc2e0 \ucd95\ud558\ub4dc\ub824\uc694!! \uba40\ub9ac \ub5a8\uc5b4\uc838 \uc788\uace0, \ucf54\ub85c\ub098 \ub54c\ubb38\uc5d0\ub3c4 \uc9c1\uc811 \ubd59\uc9c0 \ubabb \ud574\uc11c \uc544\uc27d\ub124\uc694. \uadf8\ub798\ub3c4 \uc5b8\uc81c\ub098 \ud560\uba38\ub2c8\ub97c \ub9c8\uc74c\uc5d0 \ud488\uace0 \uc788\ub2e4\ub294 \uac78 \uc78a\uc73c\uc2dc\uba74 \uc548\ub3fc\uc694! \uc81c \uc5c4\ub9c8\ub97c \ud798\ub4e4\uac8c \ub0b3\uc544\uc8fc\uc154\uc11c \uc81c\uac00 \ud0dc\uc5b4\ub0a0\uc218\uc788\uac8c \ud574\uc8fc\uc2e0\uac70 \ub9e4\uc6b0 \uac10\uc0ac\ud574\uc694, \uc5c4\ub9c8\uac00 \ud560\uba38\ub2c8\ub97c \uc3d9 \ube7c \ub2ee\uc544\uc11c \uc5bc\ub9c8\ub098 \uc774\uc058\uac8c\uc694. \ube44\ub85d \uc9c0\uae08 \uc2dc\uac04\uc774 \ub9ce\uc774 \ud798\ub4e4\uace0 \uc9c0\ub8e8\ud574\ub3c4 \uc624\ub798\uc624\ub798 \ud589\ubcf5\ud55c \uc77c\ub4e4\uc774 \uac00\ub4dd\ud558\uc2dc\uae38 \ubc14\ub798\uc694. \ud56d\uc0c1 \ud658\ud558\uac8c \uc6c3\uc73c\uc2e4 \uc218 \uc788\ub294 \uc88b\uc740 \uc77c\ub4e4\uc774 \ub9ce\uc774 \uc788\uc73c\uc2dc\uae38 \ubc14\ub798\uc694! \ud56d\uc0c1 \uac74\uac15\ud558\uc2dc\uace0, \uc0ac\ub791\ud569\ub2c8\ub2e4. \uc0dd\uc2e0\ucd95\ud558\ub4dc\ub824\uc694!"}),Object(b.jsx)("p",{className:"text-right",children:"- \uc9c0\uc131 \uc62c\ub9bc -"})]}),writer:"jiseong"},{letterContentJSX:Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"\ubd04 \ud587\uc0b4\uac19\uc740 \uc6c3\uc74c\uc744 \uac00\uc9c4 \uc5c4\ub9c8!"}),Object(b.jsx)("p",{children:"\uc5c4\ub9c8\uc758 80\uc138 \uc0dd\uc2e0\uc744 \ucd95\ud558\ud569\ub2c8\ub2e4 \ud83d\ude0a. \ubb34\uc5c7\ubcf4\ub2e4 \uac74\uac15\ud558\uac8c \uc6b0\ub9ac \uacc1\uc5d0 \uacc4\uc154\uc918\uc11c \uac10\uc0ac\ud558\uace0, \uc544\ube60\uc640 \ud3c9\uc0dd\uc744 \ud574\ub85c\ud558\uace0 \uacc4\uc2e0 \ubaa8\uc2b5\uc5d0 \uac10\uc0ac\ud574\uc694. \uac00\uc871\uc744 \uc704\ud574 \uae30\ub3c4\ud558\ub294 \uc5b4\uba38\ub2c8\ub85c, \uc190\uc790,\uc190\ub140\ub4e4\uc758 \ubbff\uc74c\uacfc \ucd95\ubcf5\uc744 \uc704\ud574 \uae30\ub3c4\ud558\ub294 \ud560\uba38\ub2c8\ub85c \uacc4\uc154 \uc8fc\uc154\uc11c \ub610, \uac10\uc0ac\ud558\uace0\uc694!!"}),Object(b.jsx)("p",{children:'\uc5b4\ub838\uc744 \ub54c \uc5c4\ub9c8\uc5d0\uac8c \uc57c\ub2e8\ub9de\uace0 \uc7a0\uc774 \ub4e0 \ubc24, \uc5c4\ub9c8\uac00 \ub4e4\uc5b4\uc640\uc11c \uc790\uace0 \uc788\ub294 \ub098\ub97c \uaf2d \uc548\uc544\uc92c\ub358 \uae30\uc5b5\uc774 \ub530\uc2a4\ud558\uace0, \uc911\ud559\uad50 \ub54c \uc77c\ubcf8\uc5d0 \uac00\uc11c \uacf5\ubd80\uac00 \ud798\ub4e4\uc5c8\uc744 \ub54c, "\ub108\uc758 \uc800\ub825\uc744 \ubbff\uc5b4" \ub77c\uace0 \ud588\ub358 \uc5c4\ub9c8\uc758 \ub9d0\uc5d0 \uc5bc\ub9c8\ub098 \uc790\uc2e0\uac10\uc774 \ucc3c\ub294\uc9c0.. "\ub108\ub294 \ub9c8\uc74c\uba39\uc740 \uc77c\uc740 \ub2e4 \uc798 \ud574"\ub77c\ub294 \uc5c4\ub9c8\uc758 \ub9d0\uc5d0 \uc790\uae0d\uc2ec \ub9cc\ub545!! ^_^'}),Object(b.jsx)("p",{children:'\uc885\uc885 \uc900\uc131\uc774\ub098 \uc9c0\uc131\uc774\uac00 \ub0b4\uac8c \ubb50\ub77c \ud558\uba74 "\ub108 \uc6b0\ub9ac \uc5c4\ub9c8\ud55c\ud14c \uc774\ub978\ub2e4"\ub77c\uace0 \uc5c4\ud3ec\ub97c \ub194, \uadf8\ub7fc \ub610 \uadf8\uac8c \uba39\ud600~ \ud83d\ude06'}),Object(b.jsx)("p",{children:"\uc5c4\ub9c8, \uc544\ube60\uc5d0\uac8c \ubc1b\uc740 \uc0ac\ub791\uc73c\ub85c \uc9c0\uae08\uc758 \ub0b4\uac00 \uc788\uc5b4\uc694"}),Object(b.jsx)("p",{children:"\uc624\ub798\uc624\ub798 \uc9c0\uae08\uc758 \ubaa8\uc2b5\uc73c\ub85c \uc6b0\ub9ac \uc606\uc744 \uc9c0\ucf1c \uc8fc\uc2dc\uae38!"}),Object(b.jsx)("p",{children:"\uc5c4\ub9c8 \uc0ac\ub791\ud574\uc694! \u2764 \u2764"}),Object(b.jsx)("p",{className:"text-right",children:"- \uc9c0\uc5f0 \ub4dc\ub9bc -"})]}),writer:"jiyeon"}],B=s(29),M=s.n(B),I=s(5);var P=function(e){var t,s=Object(I.d)(),i=new URLSearchParams(Object(I.e)().search),c=i.get(S),n=null===(t=k.find((function(e){return e.writer===c})))||void 0===t?void 0:t.letterContentJSX;return Object(b.jsxs)("div",{className:M.a.CardsContainer,children:[Object(b.jsx)(C,{isOpen:Boolean(c),letterContentJSX:n,onHide:function(){s.push(s.location.pathname)}}),Object(b.jsx)("div",{className:"bg-white border mb-5 p-3 shadow",style:{fontSize:"28px"},children:"\uce74\ub4dc\ub97c \ub20c\ub7ec\uc8fc\uc138\uc694"}),k.map((function(e,t){return Object(b.jsx)("div",{className:"my-5",children:Object(b.jsx)(_,Object(v.a)(Object(v.a)({},e),{},{index:t,onClick:function(){return t=e.writer,i.set(S,t),void s.push({pathname:s.location.pathname,search:"?".concat(i.toString())});var t}}))},e.writer)})),Object(b.jsx)("div",{className:"pt-5",children:Object(b.jsx)(N,{})})]})},V=s(15),D=s(31),F=s.n(D);function H(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),s=t[0],c=t[1];return Object(b.jsx)(V.a,{children:Object(b.jsxs)("div",{className:F.a.App,children:[Object(b.jsx)(f,{isScrollMsgVisible:s,setIsScrollMsgVisible:c}),s&&Object(b.jsx)(P,{})]})})}s(49);n.a.render(Object(b.jsx)(H,{}),document.getElementById("root"))}],[[50,1,2]]]);
//# sourceMappingURL=main.dc5381d0.chunk.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6029],{40728:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/casino-be98867001f70b94097d/categoria/[id]",function(){return e(74386)}])},61293:function(n,t,e){"use strict";e.d(t,{s:function(){return d}});var i=e(47568),r=e(26042),o=e(69396),s=e(29815),u=e(70655),a=e(67294),d=function(n){var t,e=n.query,d=n.setQuery,c=n.fetching,l=n.data,f=(0,a.useState)({ids:[],entities:{}}),m=f[0],p=f[1],v=(0,a.useState)(!1),h=v[0],g=v[1],x=(t=(0,i.Z)(function(){var n,t,i;return(0,u.__generator)(this,function(i){var s,u,a,l;return h||c?[2]:(s=null!==(t=null===(n=document.querySelector("footer"))||void 0===n?void 0:n.clientHeight)&&void 0!==t?t:0,u=document.documentElement.scrollHeight-s,a=window.innerHeight,l=window.pageYOffset,(a>u?0:100-Math.round(l/(u-a)*100))<30&&d((0,o.Z)((0,r.Z)({},e),{init:e.end+1,end:e.end+e.add,add:2*e.add})),[2])})}),function(){return t.apply(this,arguments)});return(0,a.useEffect)(function(){return document.addEventListener("scroll",x),function(){document.removeEventListener("scroll",x)}},[e,c,h]),(0,a.useEffect)(function(){if(l){var n,t,i=0===e.init&&40===e.end;if(i&&!l.ids.length){p(l),g(!0),document.removeEventListener("scroll",x);return}if(i){p(l),g(!1);return}if(l.ids.length){g(!1),p({ids:(n=m.ids.concat(l.ids),(0,s.Z)(new Set(n))),entities:(0,r.Z)({},m.entities,l.entities)})}else g(!0),document.removeEventListener("scroll",x)}},[l]),{joinData:m}}},74386:function(n,t,e){"use strict";e.r(t);var i=e(7297),r=e(85893),o=e(69125),s=e(50211),u=e(61293),a=e(82725),d=e(94688),c=e(533),l=e(11163),f=e(67294),m=e(53918);function p(){var n=(0,i.Z)(["\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    width: 100%;\n    justify-content: space-between;\n    padding-bottom: 5px;\n    h1 {\n        font-size: clamp(16px, 2.5vw, 25px);\n        font-weight: 500;\n        text-transform: lowercase;\n        text-transform: capitalize;\n        letter-spacing: 0;\n        display: block;\n        color: ",";\n        ::first-letter {\n            text-transform: capitalize;\n        }\n    }\n"]);return p=function(){return n},n}function v(){var n=(0,i.Z)(["\n    position: relative;\n    padding-bottom: 30px;\n    min-height: 70vh;\n    min-height: 70dvh;\n"]);return v=function(){return n},n}function h(){var n=(0,i.Z)(["\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: masonry;\n    grid-auto-flow: dense;\n    align-tracks: end;\n    gap: 7px;\n    > div {\n        max-width: initial;\n    }\n    "," {\n        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    }\n"]);return h=function(){return n},n}function g(){var n=(0,i.Z)(["\n    position: absolute;\n    overflow: hidden;\n    z-index: 2;\n    bottom: 5px;\n    left: 50%;\n    transform: translateX(-50%);\n"]);return g=function(){return n},n}var x=function(){var n,t=(0,l.useRouter)(),e="CASINO_TODOS",i=null==t?void 0:null===(n=t.query)||void 0===n?void 0:n.id,d=(0,s.Z)().session,m={init:0,end:40,lobby:e,tags:i,add:40},p=(0,f.useState)(m),v=p[0],h=p[1],g=(0,a.Zc)({props:v,session:d},{skip:!i}),x=g.data,E=g.isLoading,Z=g.isFetching,j=E||Z,k=(0,u.s)({data:x,query:v,setQuery:h,fetching:j}).joinData,L=i.toLowerCase().replace(/\s+|_/g," ");(0,f.useEffect)(function(){i&&h(m)},[i]);var N=(0,f.useMemo)(function(){if(!k.ids.length)return(0,r.jsx)(r.Fragment,{});var n=k.ids,t=k.entities;return n.length&&n.map(function(n){return(0,r.jsx)(c.z,{lobbyName:e,lobby:t[n]},n)})},[k]),S=(0,f.useMemo)(function(){return j?(0,r.jsx)(y,{children:(0,r.jsx)(o.Z,{loading:j,minHeight:"initial",size:50})}):null},[j]);return(0,r.jsxs)(b,{children:[(0,r.jsx)(w,{children:(0,r.jsx)("h1",{children:L})}),(0,r.jsx)(_,{children:N}),S]})};t.default=x;var w=m.default.div(p(),function(n){return n.theme.casino.slider.contrastText}),b=m.default.div(v()),_=m.default.div(h(),d.q.min_width.mobileL),y=m.default.div(g())}},function(n){n.O(0,[533,9774,2888,179],function(){return n(n.s=40728)}),_N_E=n.O()}]);
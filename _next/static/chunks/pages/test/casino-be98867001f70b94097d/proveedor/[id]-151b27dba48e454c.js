(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9194],{66489:function(e,n,t){"use strict";var r=t(63366),i=t(87462),o=t(67294),a=t(63961),s=t(94780),l=t(70917),c=t(98216),d=t(71657),u=t(90948),f=t(22346),v=t(85893);let m=["className","color","disableShrink","size","style","thickness","value","variant"],h=e=>e,p,g,x,Z,k=(0,l.F4)(p||(p=h`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),y=(0,l.F4)(g||(g=h`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),w=e=>{let{classes:n,variant:t,color:r,disableShrink:i}=e,o={root:["root",t,`color${(0,c.Z)(r)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(t)}`,i&&"circleDisableShrink"]};return(0,s.Z)(o,f.C,n)},b=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver(e,n){let{ownerState:t}=e;return[n.root,n[t.variant],n[`color${(0,c.Z)(t.color)}`]]}})(({ownerState:e,theme:n})=>(0,i.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:n.transitions.create("transform")},"inherit"!==e.color&&{color:(n.vars||n).palette[e.color].main}),({ownerState:e})=>"indeterminate"===e.variant&&(0,l.iv)(x||(x=h`
      animation: ${0} 1.4s linear infinite;
    `),k)),S=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,n)=>n.svg})({display:"block"}),_=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver(e,n){let{ownerState:t}=e;return[n.circle,n[`circle${(0,c.Z)(t.variant)}`],t.disableShrink&&n.circleDisableShrink]}})(({ownerState:e,theme:n})=>(0,i.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:n.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(Z||(Z=h`
      animation: ${0} 1.4s ease-in-out infinite;
    `),y)),j=o.forwardRef(function(e,n){let t=(0,d.Z)({props:e,name:"MuiCircularProgress"}),{className:o,color:s="primary",disableShrink:l=!1,size:c=40,style:u,thickness:f=3.6,value:h=0,variant:p="indeterminate"}=t,g=(0,r.Z)(t,m),x=(0,i.Z)({},t,{color:s,disableShrink:l,size:c,thickness:f,value:h,variant:p}),Z=w(x),k={},y={},j={};if("determinate"===p){let P=2*Math.PI*((44-f)/2);k.strokeDasharray=P.toFixed(3),j["aria-valuenow"]=Math.round(h),k.strokeDashoffset=`${((100-h)/100*P).toFixed(3)}px`,y.transform="rotate(-90deg)"}return(0,v.jsx)(b,(0,i.Z)({className:(0,a.Z)(Z.root,o),style:(0,i.Z)({width:c,height:c},y,u),ownerState:x,ref:n,role:"progressbar"},j,g,{children:(0,v.jsx)(S,{className:Z.svg,ownerState:x,viewBox:"22 22 44 44",children:(0,v.jsx)(_,{className:Z.circle,style:k,ownerState:x,cx:44,cy:44,r:(44-f)/2,fill:"none",strokeWidth:f})})}))});n.Z=j},22346:function(e,n,t){"use strict";t.d(n,{C:function(){return o}});var r=t(1588),i=t(34867);function o(e){return(0,i.ZP)("MuiCircularProgress",e)}let a=(0,r.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);n.Z=a},88282:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/casino-be98867001f70b94097d/proveedor/[id]",function(){return t(46012)}])},61293:function(e,n,t){"use strict";t.d(n,{s:function(){return c}});var r=t(47568),i=t(26042),o=t(69396),a=t(29815),s=t(70655),l=t(67294),c=function(e){var n,t=e.query,c=e.setQuery,d=e.fetching,u=e.data,f=(0,l.useState)({ids:[],entities:{}}),v=f[0],m=f[1],h=(0,l.useState)(!1),p=h[0],g=h[1],x=(n=(0,r.Z)(function(){var e,n,r;return(0,s.__generator)(this,function(r){var a,s,l,u;return p||d?[2]:(a=null!==(n=null===(e=document.querySelector("footer"))||void 0===e?void 0:e.clientHeight)&&void 0!==n?n:0,s=document.documentElement.scrollHeight-a,l=window.innerHeight,u=window.pageYOffset,(l>s?0:100-Math.round(u/(s-l)*100))<30&&c((0,o.Z)((0,i.Z)({},t),{init:t.end+1,end:t.end+t.add,add:2*t.add})),[2])})}),function(){return n.apply(this,arguments)});return(0,l.useEffect)(function(){return document.addEventListener("scroll",x),function(){document.removeEventListener("scroll",x)}},[t,d,p]),(0,l.useEffect)(function(){if(u){var e,n,r=0===t.init&&40===t.end;if(r&&!u.ids.length){m(u),g(!0),document.removeEventListener("scroll",x);return}if(r){m(u),g(!1);return}if(u.ids.length){g(!1),m({ids:(e=v.ids.concat(u.ids),(0,a.Z)(new Set(e))),entities:(0,i.Z)({},v.entities,u.entities)})}else g(!0),document.removeEventListener("scroll",x)}},[u]),{joinData:v}}},46012:function(e,n,t){"use strict";t.r(n);var r=t(7297),i=t(85893),o=t(69125),a=t(50211),s=t(61293),l=t(82725),c=t(94688),d=t(533),u=t(11163),f=t(67294),v=t(53918);function m(){var e=(0,r.Z)(["\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    width: 100%;\n    justify-content: space-between;\n    padding-bottom: 5px;\n    h1 {\n        font-size: clamp(16px, 2.5vw, 25px);\n        font-weight: 500;\n        text-transform: lowercase;\n        text-transform: initial;\n        letter-spacing: 0;\n        display: block;\n        color: ",";\n        ::first-letter {\n            text-transform: capitalize;\n        }\n    }\n"]);return m=function(){return e},e}function h(){var e=(0,r.Z)(["\n    position: relative;\n    padding-bottom: 30px;\n    min-height: 70vh;\n    min-height: 70dvh;\n"]);return h=function(){return e},e}function p(){var e=(0,r.Z)(["\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: masonry;\n    grid-auto-flow: dense;\n    align-tracks: end;\n    gap: 7px;\n    > div {\n        max-width: initial;\n    }\n    "," {\n        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    }\n"]);return p=function(){return e},e}function g(){var e=(0,r.Z)(["\n    position: absolute;\n    overflow: hidden;\n    z-index: 2;\n    bottom: 5px;\n    left: 50%;\n    transform: translateX(-50%);\n"]);return g=function(){return e},e}var x=function(){var e,n,t=(0,u.useRouter)(),r=null==t?void 0:null===(e=t.query)||void 0===e?void 0:e.id,c=(0,a.Z)().session,v="CASINO_TODOS",m={init:0,end:40,lobby:v,providers:r,add:40},h=(0,f.useState)(m),p=h[0],g=h[1],x=(0,l.Zc)({props:p,session:c},{skip:!r}),b=x.data,S=x.isLoading,_=x.isFetching,j=S||_,P=(0,s.s)({data:b,query:p,setQuery:g,fetching:j}).joinData,C=null===(n=null==b?void 0:b.providers[0])||void 0===n?void 0:n.name;(0,f.useEffect)(function(){r&&g(m)},[r]);var E=(0,f.useMemo)(function(){if(!P.ids.length)return(0,i.jsx)(i.Fragment,{});var e=P.ids,n=P.entities;return e.length&&e.map(function(e){return(0,i.jsx)(d.z,{lobbyName:v,lobby:n[e]},e)})},[P]),D=(0,f.useMemo)(function(){return j?(0,i.jsx)(w,{children:(0,i.jsx)(o.Z,{loading:j,minHeight:"initial",size:50})}):null},[j]);return(0,i.jsxs)(k,{children:[(0,i.jsx)(Z,{children:(0,i.jsx)("h1",{children:C})}),(0,i.jsx)(y,{children:E}),D]})};n.default=x;var Z=v.default.div(m(),function(e){return e.theme.casino.slider.contrastText}),k=v.default.div(h()),y=v.default.div(p(),c.q.min_width.mobileL),w=v.default.div(g())}},function(e){e.O(0,[6461,9774,2888,179],function(){return e(e.s=88282)}),_N_E=e.O()}]);
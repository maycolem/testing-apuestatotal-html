(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6648],{66489:function(e,t,n){"use strict";var i=n(63366),r=n(87462),a=n(67294),o=n(63961),s=n(94780),c=n(70917),u=n(98216),l=n(71657),d=n(90948),m=n(22346),p=n(85893);let v=["className","color","disableShrink","size","style","thickness","value","variant"],f=e=>e,g,h,x,j,y=(0,c.F4)(g||(g=f`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),w=(0,c.F4)(h||(h=f`
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
`)),k=e=>{let{classes:t,variant:n,color:i,disableShrink:r}=e,a={root:["root",n,`color${(0,u.Z)(i)}`],svg:["svg"],circle:["circle",`circle${(0,u.Z)(n)}`,r&&"circleDisableShrink"]};return(0,s.Z)(a,m.C,t)},P=(0,d.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver(e,t){let{ownerState:n}=e;return[t.root,t[n.variant],t[`color${(0,u.Z)(n.color)}`]]}})(({ownerState:e,theme:t})=>(0,r.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main}),({ownerState:e})=>"indeterminate"===e.variant&&(0,c.iv)(x||(x=f`
      animation: ${0} 1.4s linear infinite;
    `),y)),Z=(0,d.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),b=(0,d.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver(e,t){let{ownerState:n}=e;return[t.circle,t[`circle${(0,u.Z)(n.variant)}`],n.disableShrink&&t.circleDisableShrink]}})(({ownerState:e,theme:t})=>(0,r.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,c.iv)(j||(j=f`
      animation: ${0} 1.4s ease-in-out infinite;
    `),w)),S=a.forwardRef(function(e,t){let n=(0,l.Z)({props:e,name:"MuiCircularProgress"}),{className:a,color:s="primary",disableShrink:c=!1,size:u=40,style:d,thickness:m=3.6,value:f=0,variant:g="indeterminate"}=n,h=(0,i.Z)(n,v),x=(0,r.Z)({},n,{color:s,disableShrink:c,size:u,thickness:m,value:f,variant:g}),j=k(x),y={},w={},S={};if("determinate"===g){let F=2*Math.PI*((44-m)/2);y.strokeDasharray=F.toFixed(3),S["aria-valuenow"]=Math.round(f),y.strokeDashoffset=`${((100-f)/100*F).toFixed(3)}px`,w.transform="rotate(-90deg)"}return(0,p.jsx)(P,(0,r.Z)({className:(0,o.Z)(j.root,a),style:(0,r.Z)({width:u,height:u},w,d),ownerState:x,ref:t,role:"progressbar"},S,h,{children:(0,p.jsx)(Z,{className:j.svg,ownerState:x,viewBox:"22 22 44 44",children:(0,p.jsx)(b,{className:j.circle,style:y,ownerState:x,cx:44,cy:44,r:(44-m)/2,fill:"none",strokeWidth:m})})}))});t.Z=S},22346:function(e,t,n){"use strict";n.d(t,{C:function(){return a}});var i=n(1588),r=n(34867);function a(e){return(0,r.ZP)("MuiCircularProgress",e)}let o=(0,i.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);t.Z=o},25940:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/juegos-virtuales/[provider]/[gameName]",function(){return n(6050)}])},7037:function(e,t,n){"use strict";n.d(t,{h:function(){return o},b:function(){return s}});var i=n(85893),r=n(9008),a=n.n(r);n(67294);var o=function(e){var t,n=e.title,r=void 0===n?"":n,o=e.description,s=void 0===o?"Construye tu jugada combinando diversos mercados en un mismo evento, lo que aumentar\xe1 el multiplicador de tu jugada y m\xe1s en Apuesta Total":o,c=e.canonical,u=void 0===c?"":c,l=e.children,d=r?"".concat(r," | Apuesta Total"):"Apuestas Deportivas Online | Apuesta Total",m=u?"https://www.apuestatotal.com".concat(u):"https://www.apuestatotal.com".concat(null==window?void 0:null===(t=window.location)||void 0===t?void 0:t.pathname);return(0,i.jsxs)(a(),{children:[(0,i.jsx)("title",{children:d},"titleOverride"),(0,i.jsx)("meta",{content:d,property:"og:title"},"title"),(0,i.jsx)("meta",{content:d,itemProp:"name"},"name"),(0,i.jsx)("meta",{content:d,name:"twitter:title"},"twitter:title"),(0,i.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",property:"og:image"},"og:image"),(0,i.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",property:"og:image:secure_url"}),(0,i.jsx)("meta",{content:"1145",property:"og:image:width"},"og:image:width"),(0,i.jsx)("meta",{content:"513",property:"og:image:height"},"og:image:height"),(0,i.jsx)("meta",{content:s,name:"description"},"description"),(0,i.jsx)("meta",{content:s,itemProp:"description"},"descriptionProp"),(0,i.jsx)("meta",{content:s,property:"og:description"},"og:description"),(0,i.jsx)("meta",{content:s,name:"twitter:description"},"twitter:description"),(0,i.jsx)("meta",{content:"apuesta total, torneos, poker, juegos, recargas, casino, Bet Games, TV Bet, ruleta rusa, yan ken po, tragamonedas online, torneos de casino, premios",name:"keywords"},"keywords"),(0,i.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",name:"image"}),(0,i.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",itemProp:"image"},"image"),(0,i.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",name:"twitter:image"},"twitter:image"),(0,i.jsx)("meta",{content:"summary",name:"twitter:card"},"twitter:card"),(0,i.jsx)("meta",{content:"text/html; charset=utf-8",httpEquiv:"content-type"},"content-type"),(0,i.jsx)("meta",{content:"width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=0",name:"viewport"},"viewport"),(0,i.jsx)("meta",{content:"true",name:"HandheldFriendly"},"HandheldFriendly"),(0,i.jsx)("meta",{content:"telephone=no",name:"format-detection"}),(0,i.jsx)("meta",{content:"YES",name:"apple-mobile-web-app-capable"}),(0,i.jsx)("meta",{content:m,property:"og:url"},"og:url"),(0,i.jsx)("meta",{content:"website",property:"og:type"}),(0,i.jsx)("link",{href:m,rel:"canonical"},"canonical"),(0,i.jsx)("link",{href:"/favicon.ico",rel:"icon"}),(0,i.jsx)("link",{href:"/favicon.ico",rel:"apple-touch-icon"}),l]})},s=function(){return(0,i.jsx)(o,{canonical:"/registro",description:"Encuentra promociones, apuestas deportivas en vivo, pr\xf3ximos encuentros, juegos virtuales, casino y m\xe1s en Apuesta Total",title:"Registro"})}},64434:function(e,t,n){"use strict";n.d(t,{b:function(){return d}});var i=n(7297),r=n(85893),a=n(64978),o=n(4858),s=n(67294),c=n(53918);function u(){var e=(0,i.Z)(["\n    position: absolute;\n    left: -300%;\n    opacity: 0;\n    pointer-events: none;\n    visibility: hidden;\n    width: 0;\n    height: 0;\n"]);return u=function(){return e},e}var l=s.memo(function(e){var t=e.cat,n=e.time;return(0,o.y)(n).isStayed?(0,r.jsx)(m,{children:(0,r.jsx)("iframe",{src:"https://11210665.fls.doubleclick.net/activityi;src=11210665;type=ma_aptot;cat=".concat(t,";ord=").concat((0,a.L)(),"?")})}):null}),d=function(e){var t=e.floods;return(0,r.jsx)(r.Fragment,{children:t.map(function(e,t){return(0,r.jsx)(l,{cat:e.cat,time:e.time},t)})})},m=c.default.div(u())},69125:function(e,t,n){"use strict";var i=n(7297),r=n(85893);n(67294);var a=n(66489),o=n(53918);function s(){var e=(0,i.Z)(["\n    & {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        min-height: ",";\n        width: ",";\n        flex: 1;\n    }\n"]);return s=function(){return e},e}var c=function(e){var t=e.loading,n=e.size,i=e.minHeight,o=e.color,s=e.width;return void 0!==t&&t?(0,r.jsx)(u,{$minHeight:void 0===i?"100px":i,$width:void 0===s?"100%":s,children:(0,r.jsx)(a.Z,{color:void 0===o?"primary":o,size:void 0===n?30:n})}):null};t.Z=c;var u=o.default.div(s(),function(e){return e.$minHeight},function(e){return e.$width})},64978:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});var i=function(){return 1e13*Math.random()}},39709:function(e,t,n){"use strict";n.d(t,{r:function(){return a}});var i=n(50211),r=n(67294),a=function(e){var t=e.PageURL,n=e.PageTitle,a=e.PageCategory,o=(0,i.Z)().user,s=o?"".concat(o.user):null;(0,r.useEffect)(function(){var e;(null===(e=window.optimoveSDK)||void 0===e?void 0:e.API)&&(s?window.optimoveSDK.API.setPageVisit(t,n,a,s):window.optimoveSDK.API.setPageVisit(t,n,a))},[t,n,a,s])}},4858:function(e,t,n){"use strict";n.d(t,{y:function(){return r}});var i=n(67294),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e4,t=(0,i.useState)(!1),n=t[0],r=t[1];return(0,i.useEffect)(function(){var t=setTimeout(function(){r(!0)},e);return function(){clearTimeout(t)}},[]),{isStayed:n}}},54134:function(e,t,n){"use strict";var i=n(17520),r=n(97531),a=function(){var e,t=(0,i.TL)(),n=(0,i.CG)(r.jM);return{setMachineIdState:function(e){return t((0,r.NY)(e))},setFavoriteState:function(e){return t((0,r.ry)(e))},machine:n,favourite:(0,i.CG)(r.Ot),getFormatUrl:function(e){var t=e.opener,n=e.session,i=e.company,r=e.machine,a=e.external_id,o=e.type;return"".concat(t,"?session=").concat(n,"&company=").concat(i,"&machine=").concat(r,"&external_id=").concat(a,"&type=").concat(o)}}};t.Z=a},6050:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var i=n(85893),r=n(7037),a=n(69125),o=n(39709),s=n(8015),c=n(50211),u=n(64434),l=n(11163),d=n(67294),m=function(){var e=(0,l.useRouter)(),t=(0,d.useState)(!1),n=t[0],r=t[1],a=(0,d.useState)(!1),o=a[0],s=a[1];return(0,d.useEffect)(function(){"/juegos-virtuales/1X2%20Network/Virtual-Soccer/"===e.asPath&&r(!0)},[e.pathname]),(0,d.useEffect)(function(){"/juegos-virtuales/BRVirtual/World-Cup/"===e.asPath&&s(!0)},[e.pathname]),(0,i.jsxs)(i.Fragment,{children:[n&&(0,i.jsx)(u.b,{floods:[{cat:"jvi_lnp2",time:0}]}),o&&(0,i.jsx)(u.b,{floods:[{cat:"jvi_lnp3",time:0}]})]})},p=n(54134),v=n(82725),f=function(){var e=(0,l.useRouter)(),t=e.query;e.push,e.asPath;var n=(0,c.Z)().session,u=(0,s.Z)();u.openModalLoginAction,u.setReturnUrl;var f=(0,p.Z)(),g=f.setFavoriteState,h=f.setMachineIdState,x=f.getFormatUrl,j=!(null==t?void 0:t.gameName)||!(null==t?void 0:t.provider)||!n,y=(0,v.H1)({gameName:null==t?void 0:t.gameName,provider:null==t?void 0:t.provider},{skip:j}),w=y.data,k=y.isLoading,P=(0,v.dx)({provider:null==w?void 0:w.provider,session:n},{skip:j||!(null==w?void 0:w.provider),refetchOnMountOrArgChange:!0}),Z=P.data,b=P.isLoading,S=P.isFetching;(0,o.r)({PageURL:window.location.href,PageTitle:"juegos virtuales - ".concat(null==w?void 0:w.name),PageCategory:"Juegos virtuales"}),(0,d.useEffect)(function(){w&&(h(null==w?void 0:w.machine),g(null==w?void 0:w.favourite))},[w]);var F=(0,d.useMemo)(function(){if(Z&&w){var e,t=w.machine,n=w.external_id,i=w.type,r=Z.opener;return x({machine:t,external_id:n,type:i,opener:r,session:Z.session,company:Z.company})}},[Z,w]),_=b||k||S;return _?(0,i.jsx)(a.Z,{loading:_}):F?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h,{title:"Juega juegos virtuales Online"}),(0,i.jsx)(m,{}),(0,i.jsx)("iframe",{src:F,title:null==w?void 0:w.name})]}):(0,i.jsx)(i.Fragment,{})}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=25940)}),_N_E=e.O()}]);
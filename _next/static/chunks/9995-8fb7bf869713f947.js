"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9995],{66489:function(n,e,t){var r=t(63366),i=t(87462),a=t(67294),s=t(63961),o=t(94780),c=t(70917),u=t(98216),d=t(71657),l=t(90948),h=t(22346),f=t(85893);let m=["className","color","disableShrink","size","style","thickness","value","variant"],v=n=>n,p,g,k,x,y=(0,c.F4)(p||(p=v`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),b=(0,c.F4)(g||(g=v`
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
`)),w=n=>{let{classes:e,variant:t,color:r,disableShrink:i}=n,a={root:["root",t,`color${(0,u.Z)(r)}`],svg:["svg"],circle:["circle",`circle${(0,u.Z)(t)}`,i&&"circleDisableShrink"]};return(0,o.Z)(a,h.C,e)},Z=(0,l.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver(n,e){let{ownerState:t}=n;return[e.root,e[t.variant],e[`color${(0,u.Z)(t.color)}`]]}})(({ownerState:n,theme:e})=>(0,i.Z)({display:"inline-block"},"determinate"===n.variant&&{transition:e.transitions.create("transform")},"inherit"!==n.color&&{color:(e.vars||e).palette[n.color].main}),({ownerState:n})=>"indeterminate"===n.variant&&(0,c.iv)(k||(k=v`
      animation: ${0} 1.4s linear infinite;
    `),y)),j=(0,l.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(n,e)=>e.svg})({display:"block"}),N=(0,l.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver(n,e){let{ownerState:t}=n;return[e.circle,e[`circle${(0,u.Z)(t.variant)}`],t.disableShrink&&e.circleDisableShrink]}})(({ownerState:n,theme:e})=>(0,i.Z)({stroke:"currentColor"},"determinate"===n.variant&&{transition:e.transitions.create("stroke-dashoffset")},"indeterminate"===n.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:n})=>"indeterminate"===n.variant&&!n.disableShrink&&(0,c.iv)(x||(x=v`
      animation: ${0} 1.4s ease-in-out infinite;
    `),b)),$=a.forwardRef(function(n,e){let t=(0,d.Z)({props:n,name:"MuiCircularProgress"}),{className:a,color:o="primary",disableShrink:c=!1,size:u=40,style:l,thickness:h=3.6,value:v=0,variant:p="indeterminate"}=t,g=(0,r.Z)(t,m),k=(0,i.Z)({},t,{color:o,disableShrink:c,size:u,thickness:h,value:v,variant:p}),x=w(k),y={},b={},$={};if("determinate"===p){let S=2*Math.PI*((44-h)/2);y.strokeDasharray=S.toFixed(3),$["aria-valuenow"]=Math.round(v),y.strokeDashoffset=`${((100-v)/100*S).toFixed(3)}px`,b.transform="rotate(-90deg)"}return(0,f.jsx)(Z,(0,i.Z)({className:(0,s.Z)(x.root,a),style:(0,i.Z)({width:u,height:u},b,l),ownerState:k,ref:e,role:"progressbar"},$,g,{children:(0,f.jsx)(j,{className:x.svg,ownerState:k,viewBox:"22 22 44 44",children:(0,f.jsx)(N,{className:x.circle,style:y,ownerState:k,cx:44,cy:44,r:(44-h)/2,fill:"none",strokeWidth:h})})}))});e.Z=$},22346:function(n,e,t){t.d(e,{C:function(){return a}});var r=t(1588),i=t(34867);function a(n){return(0,i.ZP)("MuiCircularProgress",n)}let s=(0,r.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);e.Z=s},69125:function(n,e,t){var r=t(7297),i=t(85893);t(67294);var a=t(66489),s=t(53918);function o(){var n=(0,r.Z)(["\n    & {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        min-height: ",";\n        width: ",";\n        flex: 1;\n    }\n"]);return o=function(){return n},n}var c=function(n){var e=n.loading,t=n.size,r=n.minHeight,s=n.color,o=n.width;return void 0!==e&&e?(0,i.jsx)(u,{$minHeight:void 0===r?"100px":r,$width:void 0===o?"100%":o,children:(0,i.jsx)(a.Z,{color:void 0===s?"primary":s,size:void 0===t?30:t})}):null};e.Z=c;var u=s.default.div(o(),function(n){return n.$minHeight},function(n){return n.$width})},39628:function(n,e,t){t.d(e,{z:function(){return Z}});var r=t(7297),i=t(85893),a=t(94184),s=t.n(a),o=t(44327),c=t(67294),u=t(53918);function d(){var n=(0,r.Z)(["\n	&.hidden {\n		opacity: 0;\n	}\n"]);return d=function(){return n},n}function l(){var n=(0,r.Z)(["\n				width: 100%;\n			"]);return l=function(){return n},n}function h(){var n=(0,r.Z)(["\n							background: transparent ;\n							color: ",";\n						"]);return h=function(){return n},n}function f(){var n=(0,r.Z)(["\n				border: 1px solid ",";\n				background: ",";\n				color: white;\n\n				","\n				"]);return f=function(){return n},n}function m(){var n=(0,r.Z)(["\n				background: ",";\n				border: 1px solid ",";\n				color: white;\n				"]);return m=function(){return n},n}function v(){var n=(0,r.Z)(["\n				background: ",";\n				border: 1px solid ",";\n				color: black;\n				"]);return v=function(){return n},n}function p(){var n=(0,r.Z)(["\n				background: ",";\n				border: 1px solid ",";\n				color: white;\n				"]);return p=function(){return n},n}function g(){var n=(0,r.Z)(["\n							background: transparent ;\n							color: ",";\n						"]);return g=function(){return n},n}function k(){var n=(0,r.Z)(["\n				background: ",";\n				border: 1px solid ",";\n				color: white;\n				","\n				"]);return k=function(){return n},n}function x(){var n=(0,r.Z)(["\n				background: ",";\n				border: 1px solid ",";\n				color: white;\n		"]);return x=function(){return n},n}function y(){var n=(0,r.Z)(["\n					padding: 0.7rem 1rem;\n				"]);return y=function(){return n},n}function b(){var n=(0,r.Z)(["\n					padding: 1rem;\n				"]);return b=function(){return n},n}function w(){var n=(0,r.Z)(["\n	padding: 1rem;\n	font-size: 1rem;\n	font-weight: 500;\n	border-radius: 0.5rem;\n	position: relative;\n	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);\n\n	&:disabled {\n		opacity: 0.2;\n		cursor: not-allowed;\n		pointer-events: none;\n	}\n\n	","\n\n	","\n\n	","\n"]);return w=function(){return n},n}var Z=c.forwardRef(function(n,e){var t=n.color,r=n.type,a=n.children,c=n.loading,u=n.disabled,d=n.onClick,l=n.className,h=n.size,f=n.id,m=n.fullWidth,v=n.variant;return(0,i.jsxs)(N,{type:void 0===r?"button":r,$color:void 0===t?"primary":t,disabled:u,onClick:d,className:l,$size:void 0===h?"normal":h,id:f,$fullWidth:m,$variant:void 0===v?"contained":v,ref:e,children:[(0,i.jsx)(j,{className:s()({hidden:c}),children:a}),c&&(0,i.jsx)(o.g,{loading:!0})]})}),j=u.default.div(d()),N=u.default.button(w(),function(n){if(n.$fullWidth)return(0,u.css)(l())},function(n){switch(n.$color){case"primary":return(0,u.css)(f(),function(n){return n.theme.status.primary},function(n){return n.theme.status.primary},function(){if("outline"===n.$variant)return(0,u.css)(h(),function(n){return n.theme.status.primary})});case"info":return(0,u.css)(m(),function(n){return n.theme.status.info},function(n){return n.theme.status.info});case"secondary":return(0,u.css)(v(),function(n){return n.theme.secondary},function(n){return n.theme.secondary});case"success":return(0,u.css)(p(),function(n){return n.theme.status.success},function(n){return n.theme.status.success});case"dark":return(0,u.css)(k(),function(n){return n.theme.status.dark},function(n){return n.theme.status.dark},function(){if("outline"===n.$variant)return(0,u.css)(g(),function(n){return n.theme.status.dark})});default:return(0,u.css)(x(),function(n){return n.theme.status.primary},function(n){return n.theme.status.primary})}},function(n){return"small"===n.$size?(0,u.css)(y()):(0,u.css)(b())})},44327:function(n,e,t){t.d(e,{g:function(){return l}});var r,i=t(7297),a=t(85893),s=t(94184),o=t.n(s),c=t(67294),u=t(53918);function d(){var n=(0,i.Z)(["\n    transition: 150ms;\n    opacity: 0;\n    &.loading {\n        opacity: 1;\n    }\n\n    &.wrapper-chase {\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -50%);\n        width: ",";\n        height: ",';\n    }\n\n    .sk-chase {\n        width: 100%;\n        height: 100%;\n        position: relative;\n        animation: sk-chase 2.5s infinite linear both;\n    }\n\n    .sk-chase-dot {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        animation: sk-chase-dot 2s infinite ease-in-out both;\n    }\n\n    .sk-chase-dot:before {\n        content: "";\n        display: block;\n        width: 30%;\n        height: 30%;\n        background-color: ',";\n        border-radius: 100%;\n        animation: sk-chase-dot-before 2s infinite ease-in-out both;\n    }\n\n    .sk-chase-dot:nth-child(1) {\n        animation-delay: -1.1s;\n    }\n    .sk-chase-dot:nth-child(2) {\n        animation-delay: -1s;\n    }\n    .sk-chase-dot:nth-child(3) {\n        animation-delay: -0.9s;\n    }\n    .sk-chase-dot:nth-child(4) {\n        animation-delay: -0.8s;\n    }\n    .sk-chase-dot:nth-child(5) {\n        animation-delay: -0.7s;\n    }\n    .sk-chase-dot:nth-child(6) {\n        animation-delay: -0.6s;\n    }\n    .sk-chase-dot:nth-child(1):before {\n        animation-delay: -1.1s;\n    }\n    .sk-chase-dot:nth-child(2):before {\n        animation-delay: -1s;\n    }\n    .sk-chase-dot:nth-child(3):before {\n        animation-delay: -0.9s;\n    }\n    .sk-chase-dot:nth-child(4):before {\n        animation-delay: -0.8s;\n    }\n    .sk-chase-dot:nth-child(5):before {\n        animation-delay: -0.7s;\n    }\n    .sk-chase-dot:nth-child(6):before {\n        animation-delay: -0.6s;\n    }\n\n    @keyframes sk-chase {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes sk-chase-dot {\n        80%,\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes sk-chase-dot-before {\n        50% {\n            transform: scale(0.4);\n        }\n        100%,\n        0% {\n            transform: scale(1);\n        }\n    }\n"]);return d=function(){return n},n}var l=function(n){var e=n.width,t=n.height,r=n.loading,i=n.color,s=(0,c.useState)(),d=s[0],l=s[1],f=(0,u.useTheme)().status;return(0,c.useEffect)(function(){if(d){var n=d.parentElement,r=n.offsetWidth,i=n.offsetHeight;if(e||t)d.style.width=e,d.style.height=t;else{var a=.5*(r<i?r:i);a<12&&(a=12),d.style.width="".concat(a,"px"),d.style.height="".concat(a,"px")}}},[d,e,t]),(0,a.jsx)(h,{ref:function(n){l(n)},className:o()("wrapper-chase",{loading:r}),$background:f[i],$width:e,$height:t,children:(0,a.jsxs)("div",{className:"sk-chase",children:[(0,a.jsx)("div",{className:"sk-chase-dot first"}),(0,a.jsx)("div",{className:"sk-chase-dot"}),(0,a.jsx)("div",{className:"sk-chase-dot"}),(0,a.jsx)("div",{className:"sk-chase-dot"}),(0,a.jsx)("div",{className:"sk-chase-dot"}),(0,a.jsx)("div",{className:"sk-chase-dot"})]})})},h=u.default.div(d(),function(n){return n.$width},function(n){return n.$height},function(n){return null!==(r=n.$background)&&void 0!==r?r:"white"})},39709:function(n,e,t){t.d(e,{r:function(){return a}});var r=t(50211),i=t(67294),a=function(n){var e=n.PageURL,t=n.PageTitle,a=n.PageCategory,s=(0,r.Z)().user,o=s?"".concat(s.user):null;(0,i.useEffect)(function(){var n;(null===(n=window.optimoveSDK)||void 0===n?void 0:n.API)&&(o?window.optimoveSDK.API.setPageVisit(e,t,a,o):window.optimoveSDK.API.setPageVisit(e,t,a))},[e,t,a,o])}},7986:function(n,e,t){t.d(e,{I:function(){return f}});var r=t(7297),i=t(85893),a=t(94184),s=t.n(a),o=t(67294),c=t(53918),u=function(n){var e=n.getHours()-5;return e=e%12||12,n.setHours(e),n},d=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,t=(0,o.useState)({days:"0",hours:"00",minutes:"00",seconds:"00",isFewHoursToFinish:!1}),r=t[0],i=t[1];return(0,o.useEffect)(function(){var t=new Date(null==n?void 0:n.replace(" ","T")),r=(t=u(t)).getTime(),a=setInterval(function(){var n=r-new Date().getTime();if(n<=0){clearInterval(a),i({days:"0",hours:"00",minutes:"00",seconds:"00",isFewHoursToFinish:!1});return}var t,s=Math.floor(n/864e5),o=s<10?"".concat(s):s.toString(),c=Math.floor(n%864e5/36e5),u=(c=c%12||12).toString().padStart(2,"0");i({days:o,hours:u,minutes:Math.floor(n%36e5/6e4).toString().padStart(2,"0"),seconds:Math.floor(n%6e4/1e3).toString().padStart(2,"0"),isFewHoursToFinish:n/36e5<e})},1e3);return function(){return clearInterval(a)}},[n,e]),r};function l(){var n=(0,r.Z)(["\n	display: grid;\n	grid-template-columns: 1fr 1ch 1fr 1ch 1fr 1ch 1fr;\n	align-items: center;\n\n	> .points {\n		text-align: center;\n	}\n\n	&.fewToFinish{\n		color: ",";\n	}\n"]);return l=function(){return n},n}function h(){var n=(0,r.Z)(['\n	font-size: clamp(1.2rem, 1.2vw, 1.4rem);\n    font-weight: 500;\n    text-transform: uppercase;\n    padding:  0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n	> span {\n		font-variant-numeric: tabular-nums;\n		font-feature-settings: "tnum";\n	}\n	\n	> .bottom {\n		font-size: 0.7rem;\n		text-transform: capitalize;\n	}\n']);return h=function(){return n},n}var f=function(n){var e=n.className,t=n.end,r=(n.init,n.hoursToFinish),a=d(t,void 0===r?10:r),o=a.days,c=a.hours,u=a.minutes,l=a.seconds,h=a.isFewHoursToFinish;return(0,i.jsxs)(m,{className:s()(e,{fewToFinish:h}),children:[(0,i.jsxs)(v,{children:[(0,i.jsx)("span",{className:"top day",children:o}),(0,i.jsx)("span",{className:"bottom",children:"D\xeda"})]}),(0,i.jsx)("span",{className:"points",children:":"}),(0,i.jsxs)(v,{children:[(0,i.jsx)("span",{className:"top hour",children:c}),(0,i.jsx)("span",{className:"bottom",children:"Hora"})]}),(0,i.jsx)("span",{className:"points",children:":"}),(0,i.jsxs)(v,{children:[(0,i.jsx)("span",{className:"top min",children:u}),(0,i.jsx)("span",{className:"bottom",children:"Min."})]}),(0,i.jsx)("span",{className:"points",children:":"}),(0,i.jsxs)(v,{children:[(0,i.jsx)("span",{className:"top second",children:l}),(0,i.jsx)("span",{className:"bottom",children:"Seg."})]})]})},m=c.default.div(l(),function(n){return n.theme.primary}),v=c.default.div(h())},61067:function(n,e,t){t.d(e,{f:function(){return i}});var r=t(32912),i=function(n){if(!n)return"";var e=new Date(n.replace(" ","T"));e.setHours(e.getHours()-5);var t=(0,r.Z)(e,"dd-MM-yyyy hh:mm aaaaa'm'").replace("12:00 am","00:00 pm");return"".concat(t)}}}]);
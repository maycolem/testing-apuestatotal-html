"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9462],{91057:function(e,t,n){var i,r=n(63366),o=n(87462),a=n(67294),s=n(63961),l=n(94780),d=n(98216),p=n(23972),c=n(47167),u=n(74423),b=n(90948),f=n(19558),v=n(71657),h=n(85893);let m=["children","className","component","disablePointerEvents","disableTypography","position","variant"],Z=(e,t)=>{let{ownerState:n}=e;return[t.root,t[`position${(0,d.Z)(n.position)}`],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]},g=e=>{let{classes:t,disablePointerEvents:n,hiddenLabel:i,position:r,size:o,variant:a}=e,s={root:["root",n&&"disablePointerEvents",r&&`position${(0,d.Z)(r)}`,a,i&&"hiddenLabel",o&&`size${(0,d.Z)(o)}`]};return(0,l.Z)(s,f.w,t)},w=(0,b.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:Z})(({theme:e,ownerState:t})=>(0,o.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},"filled"===t.variant&&{[`&.${f.Z.positionStart}&:not(.${f.Z.hiddenLabel})`]:{marginTop:16}},"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})),P=a.forwardRef(function(e,t){let n=(0,v.Z)({props:e,name:"MuiInputAdornment"}),{children:l,className:d,component:b="div",disablePointerEvents:f=!1,disableTypography:Z=!1,position:P,variant:j}=n,x=(0,r.Z)(n,m),y=(0,u.Z)()||{},O=j;j&&y.variant,y&&!O&&(O=y.variant);let E=(0,o.Z)({},n,{hiddenLabel:y.hiddenLabel,size:y.size,disablePointerEvents:f,position:P,variant:O}),I=g(E);return(0,h.jsx)(c.Z.Provider,{value:null,children:(0,h.jsx)(w,(0,o.Z)({as:b,ownerState:E,className:(0,s.Z)(I.root,d),ref:t},x,{children:"string"!=typeof l||Z?(0,h.jsxs)(a.Fragment,{children:["start"===P?i||(i=(0,h.jsx)("span",{className:"notranslate",children:"​"})):null,l]}):(0,h.jsx)(p.Z,{color:"text.secondary",children:l})}))})});t.Z=P},19558:function(e,t,n){n.d(t,{w:function(){return o}});var i=n(1588),r=n(34867);function o(e){return(0,r.ZP)("MuiInputAdornment",e)}let a=(0,i.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);t.Z=a},77782:function(e,t,n){var i=n(59499),r=n(4730),o=n(22715);n(67294);var a=n(53918),s=n(85893),l=["children","disabled","label","InputProps","register"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var c=function(e){var t=e.children,n=e.disabled,i=e.label,o=e.InputProps,a=e.register,d=(0,r.Z)(e,l);return(0,s.jsx)(u,p(p(p({},d),a),{},{InputProps:o,disabled:n,label:i,children:t}))};t.Z=c;var u=(0,a.default)(o.Z).withConfig({displayName:"CustomTextField__Styled",componentId:"sc-15ij2xn-0"})(["&&{input:-webkit-autofill{-webkit-box-shadow:0 0 0px 1000px white inset;}input:-webkit-autofill:focus{-webkit-box-shadow:#494952 0 0 0 50px white inset;-webkit-text-fill-color:#494952;}svg{font-size:1rem !important;}legend{font-size:0.7rem;}input:disabled{cursor:not-allowed;}label.Mui-disabled{opacity:0.5;}}"])},79462:function(e,t,n){n.r(t);var i=n(91057),r=n(66489),o=n(77782),a=n(85893),s=function(e){var t,n=e.disabled,s=e.register,l=e.loadingEndAdornment,d=e.nationalIdType;return(0,a.jsx)(o.Z,{InputProps:{endAdornment:l?(0,a.jsx)(i.Z,{position:"end",style:{justifyContent:"center"},children:(0,a.jsx)(r.Z,{color:"alternate7",size:11})}):(0,a.jsx)("div",{})},disabled:n,inputProps:{maxLength:"DNI"===d?8:"CARNET_EXTRANJERIA"===d||"PASAPORTE"===d?12:void 0},label:"N\xfamero de documento",register:s})};t.default=s}}]);
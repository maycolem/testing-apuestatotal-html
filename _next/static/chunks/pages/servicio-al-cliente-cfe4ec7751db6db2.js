(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[538],{65335:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/servicio-al-cliente",function(){return e(26981)}])},39628:function(n,t,e){"use strict";e.d(t,{z:function(){return j}});var a=e(7297),r=e(85893),i=e(94184),s=e.n(i),o=e(44327),c=e(67294),u=e(53918);function l(){var n=(0,a.Z)(["\n	&.hidden {\n		opacity: 0;\n	}\n"]);return l=function(){return n},n}function d(){var n=(0,a.Z)(["\n				width: 100%;\n			"]);return d=function(){return n},n}function p(){var n=(0,a.Z)(["\n							background: transparent ;\n							color: ",";\n						"]);return p=function(){return n},n}function f(){var n=(0,a.Z)(["\n				border: 1px solid ",";\n				background: ",";\n				color: white;\n\n				","\n				"]);return f=function(){return n},n}function m(){var n=(0,a.Z)(["\n				background: ",";\n				border: 1px solid ",";\n				color: white;\n				"]);return m=function(){return n},n}function h(){var n=(0,a.Z)(["\n				background: ",";\n				border: 1px solid ",";\n				color: black;\n				"]);return h=function(){return n},n}function g(){var n=(0,a.Z)(["\n				background: ",";\n				border: 1px solid ",";\n				color: white;\n				"]);return g=function(){return n},n}function v(){var n=(0,a.Z)(["\n							background: transparent ;\n							color: ",";\n						"]);return v=function(){return n},n}function x(){var n=(0,a.Z)(["\n				background: ",";\n				border: 1px solid ",";\n				color: white;\n				","\n				"]);return x=function(){return n},n}function b(){var n=(0,a.Z)(["\n				background: ",";\n				border: 1px solid ",";\n				color: white;\n		"]);return b=function(){return n},n}function k(){var n=(0,a.Z)(["\n					padding: 0.7rem 1rem;\n				"]);return k=function(){return n},n}function y(){var n=(0,a.Z)(["\n					padding: 1rem;\n				"]);return y=function(){return n},n}function w(){var n=(0,a.Z)(["\n	padding: 1rem;\n	font-size: 1rem;\n	font-weight: 500;\n	border-radius: 0.5rem;\n	position: relative;\n	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);\n\n	&:disabled {\n		opacity: 0.2;\n		cursor: not-allowed;\n		pointer-events: none;\n	}\n\n	","\n\n	","\n\n	","\n"]);return w=function(){return n},n}var j=c.forwardRef(function(n,t){var e=n.color,a=n.type,i=n.children,c=n.loading,u=n.disabled,l=n.onClick,d=n.className,p=n.size,f=n.id,m=n.fullWidth,h=n.variant;return(0,r.jsxs)(E,{type:void 0===a?"button":a,$color:void 0===e?"primary":e,disabled:u,onClick:l,className:d,$size:void 0===p?"normal":p,id:f,$fullWidth:m,$variant:void 0===h?"contained":h,ref:t,children:[(0,r.jsx)(C,{className:s()({hidden:c}),children:i}),c&&(0,r.jsx)(o.g,{loading:!0})]})}),C=u.default.div(l()),E=u.default.button(w(),function(n){if(n.$fullWidth)return(0,u.css)(d())},function(n){switch(n.$color){case"primary":return(0,u.css)(f(),function(n){return n.theme.status.primary},function(n){return n.theme.status.primary},function(){if("outline"===n.$variant)return(0,u.css)(p(),function(n){return n.theme.status.primary})});case"info":return(0,u.css)(m(),function(n){return n.theme.status.info},function(n){return n.theme.status.info});case"secondary":return(0,u.css)(h(),function(n){return n.theme.secondary},function(n){return n.theme.secondary});case"success":return(0,u.css)(g(),function(n){return n.theme.status.success},function(n){return n.theme.status.success});case"dark":return(0,u.css)(x(),function(n){return n.theme.status.dark},function(n){return n.theme.status.dark},function(){if("outline"===n.$variant)return(0,u.css)(v(),function(n){return n.theme.status.dark})});default:return(0,u.css)(b(),function(n){return n.theme.status.primary},function(n){return n.theme.status.primary})}},function(n){return"small"===n.$size?(0,u.css)(k()):(0,u.css)(y())})},44327:function(n,t,e){"use strict";e.d(t,{g:function(){return d}});var a,r=e(7297),i=e(85893),s=e(94184),o=e.n(s),c=e(67294),u=e(53918);function l(){var n=(0,r.Z)(["\n    transition: 150ms;\n    opacity: 0;\n    &.loading {\n        opacity: 1;\n    }\n\n    &.wrapper-chase {\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -50%);\n        width: ",";\n        height: ",';\n    }\n\n    .sk-chase {\n        width: 100%;\n        height: 100%;\n        position: relative;\n        animation: sk-chase 2.5s infinite linear both;\n    }\n\n    .sk-chase-dot {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        animation: sk-chase-dot 2s infinite ease-in-out both;\n    }\n\n    .sk-chase-dot:before {\n        content: "";\n        display: block;\n        width: 30%;\n        height: 30%;\n        background-color: ',";\n        border-radius: 100%;\n        animation: sk-chase-dot-before 2s infinite ease-in-out both;\n    }\n\n    .sk-chase-dot:nth-child(1) {\n        animation-delay: -1.1s;\n    }\n    .sk-chase-dot:nth-child(2) {\n        animation-delay: -1s;\n    }\n    .sk-chase-dot:nth-child(3) {\n        animation-delay: -0.9s;\n    }\n    .sk-chase-dot:nth-child(4) {\n        animation-delay: -0.8s;\n    }\n    .sk-chase-dot:nth-child(5) {\n        animation-delay: -0.7s;\n    }\n    .sk-chase-dot:nth-child(6) {\n        animation-delay: -0.6s;\n    }\n    .sk-chase-dot:nth-child(1):before {\n        animation-delay: -1.1s;\n    }\n    .sk-chase-dot:nth-child(2):before {\n        animation-delay: -1s;\n    }\n    .sk-chase-dot:nth-child(3):before {\n        animation-delay: -0.9s;\n    }\n    .sk-chase-dot:nth-child(4):before {\n        animation-delay: -0.8s;\n    }\n    .sk-chase-dot:nth-child(5):before {\n        animation-delay: -0.7s;\n    }\n    .sk-chase-dot:nth-child(6):before {\n        animation-delay: -0.6s;\n    }\n\n    @keyframes sk-chase {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes sk-chase-dot {\n        80%,\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes sk-chase-dot-before {\n        50% {\n            transform: scale(0.4);\n        }\n        100%,\n        0% {\n            transform: scale(1);\n        }\n    }\n"]);return l=function(){return n},n}var d=function(n){var t=n.width,e=n.height,a=n.loading,r=n.color,s=(0,c.useState)(),l=s[0],d=s[1],f=(0,u.useTheme)().status;return(0,c.useEffect)(function(){if(l){var n=l.parentElement,a=n.offsetWidth,r=n.offsetHeight;if(t||e)l.style.width=t,l.style.height=e;else{var i=.5*(a<r?a:r);i<12&&(i=12),l.style.width="".concat(i,"px"),l.style.height="".concat(i,"px")}}},[l,t,e]),(0,i.jsx)(p,{ref:function(n){d(n)},className:o()("wrapper-chase",{loading:a}),$background:f[r],$width:t,$height:e,children:(0,i.jsxs)("div",{className:"sk-chase",children:[(0,i.jsx)("div",{className:"sk-chase-dot first"}),(0,i.jsx)("div",{className:"sk-chase-dot"}),(0,i.jsx)("div",{className:"sk-chase-dot"}),(0,i.jsx)("div",{className:"sk-chase-dot"}),(0,i.jsx)("div",{className:"sk-chase-dot"}),(0,i.jsx)("div",{className:"sk-chase-dot"})]})})},p=u.default.div(l(),function(n){return n.$width},function(n){return n.$height},function(n){return null!==(a=n.$background)&&void 0!==a?a:"white"})},54534:function(n,t,e){"use strict";e.d(t,{J:function(){return r}});var a=e(86792),r=function(n,t){var e=(t||{}).skip;return(0,a.BA)(n,{skip:e})}},39709:function(n,t,e){"use strict";e.d(t,{r:function(){return i}});var a=e(50211),r=e(67294),i=function(n){var t=n.PageURL,e=n.PageTitle,i=n.PageCategory,s=(0,a.Z)().user,o=s?"".concat(s.user):null;(0,r.useEffect)(function(){var n;(null===(n=window.optimoveSDK)||void 0===n?void 0:n.API)&&(o?window.optimoveSDK.API.setPageVisit(t,e,i,o):window.optimoveSDK.API.setPageVisit(t,e,i))},[t,e,i,o])}},26981:function(n,t,e){"use strict";e.r(t);var a=e(7297),r=e(85893);e(34386);var i=e(54534),s=e(39709),o=e(43240),c=e(39628),u=e(59812),l=e(9008),d=e.n(l),p=e(41248),f=e(53918);function m(){var n=(0,a.Z)(["\n&& {\n	padding: 0;\n	display: grid;\n	place-items: center;\n	> div {\n		display: grid;\n		place-items: center;\n	}\n	a {\n		padding: 0.6rem 1rem;\n		display: flex;\n		align-items: center;\n		gap: .5rem;\n		min-height: 3rem;\n	}\n	border: transparent;\n	&.whatsapp{	 \n		background: #4ECC5C;\n	}\n	&.messenger{\n		background: rgb(0, 132, 255);\n	}\n	&.telegram{\n		background: #35ADE1;\n	}\n}\n"]);return m=function(){return n},n}function h(){var n=(0,a.Z)(["\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n	flex-wrap: wrap;\n\n   \n"]);return h=function(){return n},n}function g(){var n=(0,a.Z)(["\n    display: flex;\n    position: relative;\n    justify-content: center;\n    background: ",";\n    padding: 1rem;\n    padding-bottom: 100px;\n"]);return g=function(){return n},n}var v=function(){(0,s.r)({PageURL:window.location.href,PageTitle:"Servicio al Cliente",PageCategory:"Servicio al Cliente"});var n=(0,i.J)({fragment:"SEC_SERVICIO_AL_CLIENTE"}).data;return(0,p.v9)(o.np),"https://api.whatsapp.com/send?phone=".concat("51950722615","&text=Hola%20t\xedo%20AT,%20nesecito%20ayuda%20con%20..."),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d(),{children:[(0,r.jsx)("title",{children:"Servicio al Cliente, Atenci\xf3n de Consultas | Apuesta Total"}),(0,r.jsx)("meta",{content:"Servicio al Cliente, Atenci\xf3n de Consultas | Apuesta Total",property:"og:title"}),(0,r.jsx)("meta",{content:"Servicio al Cliente, Atenci\xf3n de Consultas | Apuesta Total",itemProp:"name"}),(0,r.jsx)("meta",{content:"Servicio al Cliente, Atenci\xf3n de Consultas | Apuesta Total",name:"twitter:title"}),(0,r.jsx)("meta",{content:"Encuentra en servicio al cliente la mejor opci\xf3n para absolver tus consultas, problemas y m\xe1s en Apuesta Total",name:"description"}),(0,r.jsx)("meta",{content:"Encuentra en servicio al cliente la mejor opci\xf3n para absolver tus consultas, problemas y m\xe1s en Apuesta Total",property:"og:description"}),(0,r.jsx)("meta",{content:"Encuentra en servicio al cliente la mejor opci\xf3n para absolver tus consultas, problemas y m\xe1s en Apuesta Total",itemProp:"description"}),(0,r.jsx)("meta",{content:"Encuentra en servicio al cliente la mejor opci\xf3n para absolver tus consultas, problemas y m\xe1s en Apuesta Total",name:"twitter:description"}),(0,r.jsx)("meta",{content:"apuesta total, torneos, poker, juegos, recargas, casino, Bet Games, TV Bet, ruleta rusa, yan ken po, tragamonedas online, torneos de casino, premios",name:"keywords"}),(0,r.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",property:"og:image"}),(0,r.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",name:"image"}),(0,r.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",property:"og:image:secure_url"}),(0,r.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",itemProp:"image"}),(0,r.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",name:"twitter:image"}),(0,r.jsx)("meta",{content:"1145",property:"og:image:width"}),(0,r.jsx)("meta",{content:"513",property:"og:image:height"}),(0,r.jsx)("meta",{content:"website",property:"og:type"}),(0,r.jsx)("meta",{content:"https://www.apuestatotal.com/servicio-al-cliente",property:"og:url"}),(0,r.jsx)("meta",{content:"summary",name:"twitter:card"}),(0,r.jsx)("meta",{content:"text/html; charset=utf-8",httpEquiv:"content-type"}),(0,r.jsx)("meta",{content:"width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=0",name:"viewport"}),(0,r.jsx)("meta",{content:"true",name:"HandheldFriendly"}),(0,r.jsx)("meta",{content:"telephone=no",name:"format-detection"}),(0,r.jsx)("meta",{content:"YES",name:"apple-mobile-web-app-capable"}),(0,r.jsx)("link",{href:"https://www.apuestatotal.com/servicio-al-cliente",rel:"canonical"}),(0,r.jsx)("link",{href:"/public/favicon.ico",rel:"icon",type:"image/x-icon"})]}),(0,r.jsx)(b,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)(u.Z,{fragment:null!=n?n:""}),(0,r.jsx)(x,{children:(0,r.jsx)(c.z,{color:"success",onClick:function(){return window.open("https://teleservicios.at/juega/","_blank")},children:"Cont\xe1ctanos aqu\xed"})})]})})]})};(0,f.default)(c.z)(m()),t.default=v;var x=f.default.div(h()),b=f.default.div(g(),function(n){return n.theme.alternative})}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=65335)}),_N_E=n.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2818],{9646:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cuenta/mi-perfil/autoexclusion",function(){return t(2231)}])},37872:function(n,e,t){"use strict";t.d(e,{B:function(){return _}});var r=t(47568),i=t(7297),o=t(70655),a=t(85893),u=t(34386),c=t(8942),s=t(93451),l=t(33787),d=t(94688),f=t(94184),p=t.n(f),h=t(39628),m=t(73710),x=t.n(m),v=t(11163),g=t(67294),b=t(5434),w=t(70804),y=t(53918);function k(){var n=(0,i.Z)(["\n    position: relative;\n    overflow: hidden;\n"]);return k=function(){return n},n}function j(){var n=(0,i.Z)(["\n    position: relative;\n    display: flex;\n    width: 0;\n    z-index: 1;\n    padding: .8rem 14px;\n\n    /* border-top: 1px solid rgb(217, 217, 217); */\n    /* border-bottom: 1px solid rgb(217, 217, 217); */\n    background: ",";\n\n    "," {\n		padding-bottom: 0rem;\n        background: transparent;\n		border-bottom: 1px solid rgb(217, 217, 217);\n        border-top: 0;\n    }\n"]);return j=function(){return n},n}function T(){var n=(0,i.Z)(["\n    display: flex;\n    gap: 8px;\n    margin: auto;\n"]);return T=function(){return n},n}function C(){var n=(0,i.Z)(["\n    && {\n		background: transparent;\n        padding: 0.5rem 1rem;\n		font-weight: 400;\n        text-transform: lowercase;\n        display: block;\n        min-width: auto;\n        /* max-width: max-content; */\n        /* white-space: nowrap; */\n        border: 1px solid transparent;\n        font-size: 1rem;\n        color: ",";\n        line-height: 1rem;\n		transition: all 0.3s;\n		box-shadow: none;\n		border-radius: 8px;\n\n		&.children{\n			min-width: initial;\n			padding: 0;\n		}\n\n        :hover {\n            color: ",";\n            background: ",";\n        }\n        &::first-letter {\n            text-transform: uppercase;\n        }\n        &.active {\n			font-weight: 500;\n            color: ",";\n            background: ",";\n			border: 1px solid ",";\n        }\n        "," {\n            border: none;\n            border-radius: 0;\n            border-bottom: 3px solid transparent;\n            &.active {\n                border: none;\n				background: none;\n				color: ",";\n                border-bottom: 3px solid ",";\n            }\n            :hover:not(.active) {\n                border: none;\n                border-bottom: 3px solid ",";\n            }\n        }\n    }\n"]);return C=function(){return n},n}function Z(){var n=(0,i.Z)(["\n    position: absolute;\n    top: -1px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 2;\n    cursor: pointer;\n    height: calc(100% + 2px);\n    background: ",';\n    transition: all 0.3s;\n\n    &::after {\n        content: "";\n        position: absolute;\n        width: 50%;\n        height: 100%;\n        pointer-events: none;\n        z-index: -1;\n        transition: all 0.3s;\n    }\n\n    &.left {\n        left: 0;\n        &::after {\n            left: 100%;\n            background: linear-gradient(to right, ',", transparent);\n        }\n        &.hidden {\n            left: -35px;\n            opacity: 0;\n            &::after {\n                left: 0%;\n            }\n        }\n        transition: left 0.3s, opacity 0.3s;\n    }\n\n    &.right {\n        right: 0;\n        &::after {\n            right: 100%;\n            background: linear-gradient(to left, ",", transparent);\n        }\n        &.hidden {\n            right: -35px;\n            opacity: 0;\n            &::after {\n                right: 0%;\n            }\n        }\n        transition: left 0.3s, opacity 0.3s;\n    }\n"]);return Z=function(){return n},n}function S(){var n=(0,i.Z)(["\n	flex: 1;\n	height: 35px;\n	width: 35px;\n	border-radius: 50%;\n	transition: all .3s;\n\n	&:active, &:hover, &:focus {\n		background: ",";\n	}\n\n	svg {\n		font-size: 35px;\n		color: ",";\n	}\n"]);return S=function(){return n},n}var _=function(n){var e=n.tabs,t=n.active,i=n.children,d=n.eventName,f=void 0===d?"retiro":d,h=(0,g.useState)(null),m=h[0],x=h[1],w=(0,s.Z)().width,y=(0,v.useRouter)(),k=(0,v.useRouter)().pathname;null!=t||(t=k);var j=(0,l.g)({porcentajeMinRestante:10}),T=j.hasSpaceLeft,C=j.hasSpaceRight,Z=j.onClickArrow,S=j.scrollRef;(0,g.useEffect)(function(){m&&F(m).then(function(){t&&B(m)})},[m,w,y.pathname,t]),(0,g.useEffect)(function(){m&&t&&B(m)},[m,t]);var _,B=function(n){var e=n.querySelector(".active");if(e){var t=n.getBoundingClientRect(),r=e.getBoundingClientRect(),i=t.left+t.width/2,o=r.left+r.width/2-i;m.scrollLeft+=o}},F=(_=(0,r.Z)(function(n){return(0,o.__generator)(this,function(e){switch(e.label){case 0:return n.style.width="100%",n.style.opacity="1",[4,(0,c.g)(50)];case 1:return e.sent(),[2]}})}),function(n){return _.apply(this,arguments)}),M=function(n,e){return(0,r.Z)(function(){return(0,o.__generator)(this,function(t){switch(t.label){case 0:return u.f.push({event:"atm.event",eventName:f,option:e.toLowerCase(),action:"click"}),[4,y.push(n)];case 1:return t.sent(),[2]}})})},O=(0,g.useMemo)(function(){var n;return i&&Array.isArray(i)?null==i?void 0:i.map(function(n){var e=(null==n?void 0:n.props)||{},r=e.name,i=e.url;return r||i?(0,a.jsx)(A,{className:p()({active:t===i,children:n}),onClick:M(i,r),children:n},r):(0,a.jsx)(a.Fragment,{})}):null==e?void 0:e.map(function(n){var e=n.title,r=n.url;return(0,a.jsx)(A,{className:p()({active:t===r}),onClick:M(r,e),children:e},e)})},[e,t,i]);return(0,a.jsxs)(N,{children:[(0,a.jsx)(L,{className:p()("left lscroll",{hidden:!T}),onClick:function(){Z("L")},children:(0,a.jsx)(q,{children:(0,a.jsx)(b.G1X,{})})}),(0,a.jsx)(L,{className:p()("right rscroll",{hidden:!C}),onClick:function(){Z("R")},children:(0,a.jsx)(q,{children:(0,a.jsx)(b.FNi,{})})}),(0,a.jsx)(z,{ref:function(n){x(n),S(n)},children:(0,a.jsx)(E,{children:O})})]})},N=y.default.div(k()),z=(0,y.default)(w.ZP)(j(),function(n){return x()(n.theme.contrastText,.04)},d.q.min_width.desktopS),E=y.default.div(T()),A=(0,y.default)(h.z)(C(),function(n){return x()(n.theme.contrastText,.6)},function(n){return n.theme.contrastText},function(n){return n.theme.background},function(n){return n.theme.contrastText},function(n){return n.theme.background},function(n){return x()(n.theme.contrastText,.2)},d.q.min_width.desktopS,function(n){return n.theme.contrastText},function(n){return x()(n.theme.contrastText,.8)},function(n){return x()(n.theme.contrastText,.8)}),L=y.default.div(Z(),function(n){return n.theme.background},function(n){return n.theme.background},function(n){return n.theme.background}),q=y.default.div(S(),function(n){return x()(n.theme.contrastText,.1)},function(n){return x()(n.theme.contrastText,.5)})},61048:function(n,e,t){"use strict";t.d(e,{P:function(){return S}});var r=t(26042),i=t(69396),o=t(7297),a=t(85893),u=t(32866),c=t(23200),s=t(94184),l=t.n(s),d=t(6767),f=t.n(d),p=t(67294),h=t(87536),m=t(53918);function x(){var n=(0,o.Z)(["\n	display: flex;\n	flex-direction: column;\n	align-items: flex-start;\n	position: absolute;\n	top: calc(100% + 5px);\n	width: 100%;\n	left: 0;\n	z-index: 99;\n	border: 1px solid ",";\n	border-radius: 0.5rem;\n	background: ",";\n	padding: 0.4rem 0.3rem;\n	gap: .2rem;\n	","\n	transition: 170ms;\n	opacity: 0;\n	transform: scale(0);\n	transform-origin: top center;\n	max-height: 40vh;\n	height: auto;\n	overflow: auto;\n\n	&.open{\n		opacity: 1;\n		transform: scale(1);\n	}\n"]);return x=function(){return n},n}function v(){var n=(0,o.Z)(["\n					&.outline{\n						transform:  translate(1rem , calc(50% + 0.2rem));\n					}\n					"]);return v=function(){return n},n}function g(){var n=(0,o.Z)(["\n					&.outline{\n						transform:  translate(1rem , calc(50% + 0.4rem));\n					}\n				"]);return g=function(){return n},n}function b(){var n=(0,o.Z)(["\n	max-width: 85%;\n	white-space: nowrap; /* Evita el salto de l\xednea */\n 	overflow: hidden; /* Oculta el exceso de texto */\n    text-overflow: ellipsis; /* Muestra puntos suspensivos */\n	&.outline{\n		position: absolute;\n		z-index: 1;\n		pointer-events: none;\n		transition: 150ms ;\n		transform:  translate(1rem , calc(50% + 0.4rem));\n		padding: 0 4px;\n		transform-origin: left top;\n		border-radius: 3px ;\n		opacity: 1;\n		&.filled , &.labelShrink {\n			opacity: 1;\n			position: absolute;\n			transform:  translate(0.9rem , -0.6rem) scale(0.8);\n			background: white;\n		}\n		&.focus{\n			opacity: 1;\n			color: ",";\n			background: white;\n		}\n		&.isSuccess{\n			color: initial;\n		}\n	}\n\n	","\n"]);return b=function(){return n},n}function w(){var n=(0,o.Z)(["\n	position: absolute;\n	right: 0;\n	aspect-ratio: 1;\n	height: 100%;\n	display: flex;\n	> * {\n\n		flex: 1;\n		background: transparent;\n		display: flex;\n		justify-content: center;\n		align-items: center;\n		cursor: pointer;\n\n	}\n"]);return w=function(){return n},n}function y(){var n=(0,o.Z)(["\n	display: flex;\n	width: 100%;\n	position: relative;\n	/* overflow: hidden; */\n	border-radius: 0.5rem;\n"]);return y=function(){return n},n}function k(){var n=(0,o.Z)(["\n	font-size: 0.9rem;\n	color: ",";\n"]);return k=function(){return n},n}function j(){var n=(0,o.Z)(["\n	display: flex;\n	flex-direction: column;\n	gap: 0.5rem;\n	position : relative;\n"]);return j=function(){return n},n}function T(){var n=(0,o.Z)(["\n					padding: 0.7rem 1rem;\n					border-radius: 0.4rem;\n					"]);return T=function(){return n},n}function C(){var n=(0,o.Z)(["\n					border-radius: 0.5rem;\n					padding: 1rem;\n				"]);return C=function(){return n},n}function Z(){var n=(0,o.Z)(["\n	flex:1;\n	cursor: pointer;\n	border: none;\n	transition: 200ms;\n	border: 1px solid ",';\n	box-shadow: 0 0 0 2px transparent;\n    background: transparent;\n	display: flex;\n	justify-content: flex-start;\n	white-space: nowrap;\n	&:-webkit-autofill {\n		content: "\feff"\n	}\n\n\n	&:focus , &.error , &.open {\n		outline: 0;\n		border: 1px solid ',";\n		box-shadow: 0 0 0 2px ",";\n	}\n\n	&.isSuccess:focus, &.isSuccess.open {\n		border: 1px solid ",";\n		box-shadow: 0 0 0 2px ",";\n	}\n	&.isSuccess{\n		border: 1px solid ",";\n	}\n\n	","\n"],["\r\n	flex:1;\r\n	cursor: pointer;\r\n	border: none;\r\n	transition: 200ms;\r\n	border: 1px solid ",';\r\n	box-shadow: 0 0 0 2px transparent;\r\n    background: transparent;\r\n	display: flex;\r\n	justify-content: flex-start;\r\n	white-space: nowrap;\r\n	&:-webkit-autofill {\r\n		content: "\\feff"\r\n	}\r\n\r\n\r\n	&:focus , &.error , &.open {\r\n		outline: 0;\r\n		border: 1px solid ',";\r\n		box-shadow: 0 0 0 2px ",";\r\n	}\r\n\r\n	&.isSuccess:focus, &.isSuccess.open {\r\n		border: 1px solid ",";\r\n		box-shadow: 0 0 0 2px ",";\r\n	}\r\n	&.isSuccess{\r\n		border: 1px solid ",";\r\n	}\r\n\r\n	","\r\n"]);return Z=function(){return n},n}var S=function(n){var e=n.errors,t=void 0===e?{}:e,o=n.id,c=n.label,s=n.register,d=void 0===s?function(){}:s,f=(n.type,n.disabled),m=void 0!==f&&f,x=n.required,v=n.className,g=n.endContent,b=n.variant,w=(n.autoFocus,n.size),y=void 0===w?"normal":w,k=(n.labelShrink,n.control),j=n.children,T=n.toReset,C=(0,p.useState)(!1),Z=C[0],S=C[1],B=(0,p.useState)(!1),F=B[0],M=B[1],O="outline"===b,I=(0,p.useState)(!1),R=I[0],P=I[1],H=(0,p.useState)(null),X=H[0],$=H[1],Q=(0,p.useRef)(null);return(0,p.useEffect)(function(){var n=function(n){if(n)return(!!n.value||window.getComputedStyle(n).content===e)&&(S(!0),n.classList.add("valid"),!0)},e='"'.concat("\uFEFF",'"'),t=document.getElementById(o);if(!n(t))var r=0,i=setInterval(function(){(n(t)||r++>=20)&&clearInterval(i)},300)},[]),(0,p.useEffect)(function(){$(null),M(!1),S(!1),P(!1)},[T]),(0,p.useEffect)(function(){var n=function(n){Q.current&&!Q.current.contains(n.target)&&P(!1)};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}},[Q,R]),(0,a.jsxs)(L,{className:l()(o,v),children:[(0,a.jsx)(N,{$size:y,htmlFor:o,className:l()({outline:O,filled:O&&Z,focus:F,isSuccess:!t[o]&&X}),children:c}),(0,a.jsxs)(E,{children:[(0,a.jsx)(h.Qr,{control:k,name:o,render:function(n){var e=n.field,u=e.onChange,s=e.onBlur,f=e.value;return(0,a.jsxs)(q,{ref:Q,$size:y,id:o,name:o,type:"button",disabled:m,className:l()({error:t[o],open:R,isSuccess:!t[o]&&f}),onClick:function(){return P(!R)},onBlur:function(){M(!1),s(),f||S(!1)},onFocus:function(n){S(!0),M(!0)},children:[(0,a.jsx)("input",(0,i.Z)((0,r.Z)({},d(o,{required:x})),{hidden:!0})),(0,a.jsx)("span",{style:{opacity:X?1:0},children:null!=X?X:c}),(0,a.jsx)(_,{className:l()({open:R}),children:null==j?void 0:j.map(function(n){return p.cloneElement(n,{onClick:function(e){e.stopPropagation(),$(n.props.text),u(n.props.value),P(!1),M(!1)}})})})]})}}),g&&(0,a.jsx)(z,{children:g})]}),t[o]&&(0,a.jsx)(A,{children:(0,a.jsx)(u.B,{name:o,errors:t})})]})},_=m.default.div(x(),function(n){return f()(n.theme.status.default).alpha(.2)},function(n){return n.theme.background},(0,c.q)().small),N=m.default.label(b(),function(n){return n.theme.status.primary},function(n){return"small"===n.$size?(0,m.css)(v()):(0,m.css)(g())}),z=m.default.div(w()),E=m.default.div(y()),A=m.default.div(k(),function(n){return n.theme.primary}),L=m.default.div(j()),q=m.default.button(Z(),function(n){return n.theme.status.default},function(n){return n.theme.status.primary},function(n){return n.theme.status.primary},function(n){return n.theme.status.success},function(n){return n.theme.status.success},function(n){return n.theme.status.success},function(n){return"small"===n.$size?(0,m.css)(T()):(0,m.css)(C())})},88956:function(n,e,t){"use strict";t.d(e,{Q:function(){return s}});var r=t(7297),i=t(85893),o=t(6767),a=t.n(o),u=t(53918);function c(){var n=(0,r.Z)(["\n    background: transparent;\n    outline: none;\n    border: 0;\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n    &:hover span{\n        background: ",";\n    }\n    > span {\n        width: 100%;\n        text-align: left;\n        transition: 200ms;\n        padding: 0.4rem 0.7rem;\n        border-radius: .3rem;\n        white-space: initial;\n    }\n"]);return c=function(){return n},n}var s=function(n){var e=n.key,t=n.value,r=n.children,o=n.onClick;return n.text,(0,i.jsx)(l,{value:t,onClick:o,children:(0,i.jsx)("span",{children:r})},e)},l=u.default.div(c(),function(n){return a()(n.theme.contrastText).alpha(.1)})},35181:function(n,e,t){"use strict";t.d(e,{T:function(){return f}});var r=t(7297),i=t(85893),o=t(73710),a=t.n(o);t(67294);var u=t(53918),c=t(5434);function s(){var n=(0,r.Z)(["\n    width: auto;\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    align-items: center;\n	flex-direction: row;\n    flex-wrap: nowrap;\n	margin: 1.2rem;\n    padding: 1rem;\n    gap: 1rem;\n    border: 1px solid ",";\n    border-radius: 0.8rem;\n    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n        border: 1px solid ",";\n    }\n"]);return s=function(){return n},n}function l(){var n=(0,r.Z)(["\n    display: grid;\n\n    > svg {\n        fill: ",";\n        font-size: 1.5rem;\n    }\n"]);return l=function(){return n},n}function d(){var n=(0,r.Z)(["\n    color: ",";\n    font-size: clamp(.9rem, 1.5vw, 1rem);\n    line-height: normal;\n"]);return d=function(){return n},n}var f=function(n){var e=n.text;return(0,i.jsxs)(p,{children:[(0,i.jsx)(h,{children:(0,i.jsx)(c.Tcr,{})}),(0,i.jsx)(m,{children:e})]})},p=u.default.div(s(),function(n){return a()(n.theme.contrastText,.1)},function(n){return n.theme.contrastText?a()(n.theme.contrastText,.1):"#ccc"}),h=u.default.div(l(),function(n){return a()(n.theme.contrastText,.4)}),m=u.default.p(d(),function(n){return a()(n.theme.contrastText,.6)})},8551:function(n,e,t){"use strict";t.d(e,{o:function(){return l}});var r=t(85893),i=t(57897),o=t(37872);t(67294);var a=t(7297),u=t(53918);function c(){var n=(0,a.Z)(["\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    min-height: inherit;\n    overflow: hidden;\n"]);return c=function(){return n},n}var s=u.default.div(c()),l=function(n){var e=n.children;return(0,r.jsxs)(s,{children:[(0,r.jsx)(o.B,{tabs:i.F}),(0,r.jsx)("div",{children:e})]})}},40856:function(n,e,t){"use strict";t.d(e,{X:function(){return r},f:function(){return i}});var r={EMAIL:{name:"Contactar por email",type:"CONTACT"},PHONE:{name:"Contactar por tel\xe9fono",type:"CONTACT"},PUSH:{name:"Notificaciones push",type:"NOTIFICATION"},SMS:{name:"Contactar por SMS",type:"CONTACT"}},i=[{periodo:"7 d\xedas",dias:7},{periodo:"15 d\xedas",dias:15},{periodo:"1 mes",dias:30},{periodo:"6 meses",dias:180},{periodo:"Infinito",dias:1803232},]},2231:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Q}});var r=t(85893),i=t(9008),o=t.n(i),a=t(67294),u=t(41248),c=t(47568),s=t(828),l=t(7297),d=t(70655),f=t(87536),p=t(53918),h=t(50211),m=t(67962),x=t(43240),v=t(17520),g=t(58115),b=t(39628),w=t(69156),y=t(69799),k=t(94688),j=t(1451),T=t(61048),C=t(88956),Z=t(73710),S=t.n(Z),_=t(40856),N=t(35181);function z(){var n=(0,l.Z)(["\n	margin: auto;\n	display: grid;\n	place-items: center;\n    gap: 1rem;\n    background: ",";\n\n    "," {\n        padding: 20px;\n		width: 100%;\n    }\n\n"]);return z=function(){return n},n}function E(){var n=(0,l.Z)(["\n	width: 80%;\n    position: relative;\n    padding: 10px;\n\n    "," {\n		width: 40%;\n        text-align: left;\n    }\n"]);return E=function(){return n},n}function A(){var n=(0,l.Z)(["\n    display: flex;\n    justify-content: center;\n"]);return A=function(){return n},n}function L(){var n=(0,l.Z)(["\n	&& {\n		backdrop-filter: blur(2px);\n		.ModalContentStyled__wrap {\n			border-radius: 0rem;\n			border: none;\n			box-shadow: none;\n\n			div {\n				padding: 0;\n				min-height: auto;\n			}\n		}\n\n		.HeaderActionsCss__close {\n			top: 0;\n			right: 0;\n			height: 40px;\n			width: 40px;\n			display: flex;\n			justify-content: center;\n			align-items: center;\n			background-color: ",";\n			color: ",";\n\n			svg path {\n				stroke: #ffffff;\n			}\n\n			&:hover {\n				background-color: ",";\n			}\n\n			&:active {\n				background-color: ",";\n			}\n		}\n	}\n"]);return L=function(){return n},n}function q(){var n=(0,l.Z)(["\n    background: ",";\n	margin: 1rem;\n    display: flex;\n	flex-direction: column;\n	flex-wrap: nowrap;\n	justify-content: center;\n	align-items: space-around;\n    gap: 1.5rem;\n\n    .TextModalAuto {\n        font-size: 1rem;\n        line-height: 26px;\n        display: flex;\n        align-items: center;\n        color: ",";\n\n        &.title {\n            font-weight: 500;\n            font-size: calc(100% + 0.25dvw);\n        }\n    }\n    .ContenedorBotones {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 10px;\n        margin-top: 10px;\n        > div {\n            flex: 1;\n            > button {\n                text-transform: initial;\n            }\n        }\n    }\n"]);return q=function(){return n},n}function B(){var n=(0,l.Z)(["\n	width: 100%;\n    display: flex;\n	flex-wrap: nowrap;\n    gap: 1rem;\n    margin-top: 10px;\n    flex-direction: row;\n    justify-content: center;\n    align-items: flex-start;\n\n	button {\n		padding: 0.7rem 1.2rem;\n		width: 100%;\n	}\n\n	.btnLight {\n		background: ",";\n		color: ",";\n		border: 1px solid ",";\n		&:hover {\n			background: ",";\n		}\n		&:active {\n			background: ",";\n		}\n	}\n\n	.primary:hover {\n		background: ",";\n		border: 1px solid ",";\n	}\n"]);return B=function(){return n},n}var F=function(){var n=(0,a.useState)(0),e=n[0],t=n[1],i=(0,a.useState)(!1),o=i[0],u=i[1],l=(0,a.useState)(!1),p=l[0],y=l[1],k=(0,a.useState)(""),Z=k[0],S=k[1],z=(0,f.cI)({mode:"onChange",criteriaMode:"all"}),E=z.control,A=z.register,L=(0,z.watch)("select_autoexclude");(0,a.useEffect)(function(){S(L)},[L]);var q,B,F=(0,s.Z)((0,m.Sw)(),2),X=F[0],$=F[1].isLoading,Q=(0,v.TL)(),U=(0,h.Z)().user,G=function(){u(!0)},K=function(){u(!1)},D=(q=(0,c.Z)(function(){var n,e;return(0,d.__generator)(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,X({company:null==U?void 0:U.company,session:null==U?void 0:U.session,days:Z}).unwrap()];case 1:return(null==(n=t.sent())?void 0:n.result)==="OK"?(K(),Q((0,x.mc)()),window.open(j.H["/"].url,"_self")):(y(!0),S("")),[3,3];case 2:return e=t.sent(),console.error("Error occurred:",e),[3,3];case 3:return[2]}})}),function(){return q.apply(this,arguments)});return(0,r.jsxs)(M,{children:[(0,r.jsx)(N.T,{text:"Especifique el per\xedodo en el que desea autoexcluirse. No podr\xe1 iniciar sesi\xf3n en su cuenta durante ese per\xedodo de tiempo (entre 1 semana a m\xe1s)."}),(0,r.jsx)(O,{children:(0,r.jsx)(T.P,{size:"small",id:"select_autoexclude",control:E,register:A,label:"Selecione per\xedodo de exclusi\xf3n*",children:_.f.map(function(n){return(0,r.jsx)(C.Q,{text:n.periodo,value:n.dias,children:n.periodo},"i".concat(n.dias))})})}),(0,r.jsx)(I,{children:(0,r.jsx)(b.z,{onClick:G,size:"small",disabled:!Z,children:"Autoexcluirme"})}),(0,r.jsx)(w.u,{onClose:K,open:o,children:(0,r.jsx)(R,{hiddenBackArrow:!0,onClickBackArrow:function(){return t(e-1)},onClose:K,children:(0,r.jsxs)(P,{children:[(0,r.jsxs)("div",{className:"TextModalAuto title",children:["Autoexcluirme por ",(B=_.f.find(function(n){return n.dias===Number(Z)}))?B.periodo:"","."]}),(0,r.jsx)("div",{className:"TextModalAuto",children:"Ten en cuenta que no podr\xe1s iniciar sesi\xf3n, depositar, jugar ni retirar ganancias cuando est\xe1s autoexcluido."}),p&&(0,r.jsx)(g.b,{severity:"error",children:"\xa1Ups! Algo sali\xf3 mal, Ocurri\xf3 un error \xf3 refresca la pagina."}),(0,r.jsxs)(H,{children:[(0,r.jsx)(b.z,{className:"btnLight",onClick:(0,c.Z)(function(){return(0,d.__generator)(this,function(n){switch(n.label){case 0:return[4,D()];case 1:return n.sent(),[2]}})}),children:"Autoexcluirme"}),(0,r.jsx)(b.z,{className:"primary",disabled:$,loading:$,color:"primary",onClick:K,children:"Cancelar"})]})]})})})]})},M=p.default.div(z(),function(n){return n.theme.background},k.q.min_width.tabletS),O=p.default.form(E(),k.q.min_width.tabletS),I=p.default.div(A()),R=(0,p.default)(y.h)(L(),function(n){return n.theme.primary},function(n){return n.theme.background},function(n){return S()(n.theme.primary,.8)},function(n){return S()(n.theme.primary,.6)}),P=p.default.div(q(),function(n){return n.theme.background},function(n){return n.theme.contrastText}),H=p.default.div(B(),function(n){return n.theme.background},function(n){return n.theme.contrastText},function(n){return S()(n.theme.contrastText,.4)},function(n){return S()(n.theme.contrastText,.05)},function(n){return S()(n.theme.contrastText,.1)},function(n){return S()(n.theme.primary,.8)},function(n){return S()(n.theme.primary,.8)}),X=t(8551),$=t(42395),Q=function(){var n=(0,u.I0)();return(0,a.useEffect)(function(){n((0,$.t8)(""))},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o(),{children:(0,r.jsx)("title",{children:"Autoexclusi\xf3n | Apuesta Total"})}),(0,r.jsx)(X.o,{children:(0,r.jsx)(F,{})})]})}}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=9646)}),_N_E=n.O()}]);
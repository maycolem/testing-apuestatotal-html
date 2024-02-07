"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[252],{37825:function(n){n.exports=function(n){return function(t,e){if(!t)return n;"string"==typeof t?i=t:e=t;var i,r=n;return i&&(r+="__"+i),r+(e?Object.keys(e).reduce(function(n,t){var i=e[t];return i&&(n+=" "+("boolean"==typeof i?r+"--"+t:r+"--"+t+"_"+i)),n},""):"")}}},39628:function(n,t,e){e.d(t,{z:function(){return j}});var i=e(7297),r=e(85893),o=e(94184),a=e.n(o),s=e(44327),c=e(67294),l=e(53918);function d(){var n=(0,i.Z)(["\n	&.hidden {\n		opacity: 0;\n	}\n"]);return d=function(){return n},n}function u(){var n=(0,i.Z)(["\n				width: 100%;\n			"]);return u=function(){return n},n}function f(){var n=(0,i.Z)(["\n							background: transparent ;\n							color: ",";\n						"]);return f=function(){return n},n}function h(){var n=(0,i.Z)(["\n				border: 1px solid ",";\n				background: ",";\n				color: white;\n\n				","\n				"]);return h=function(){return n},n}function m(){var n=(0,i.Z)(["\n				background: ",";\n				border: 1px solid ",";\n				color: white;\n				"]);return m=function(){return n},n}function v(){var n=(0,i.Z)(["\n				background: ",";\n				border: 1px solid ",";\n				color: black;\n				"]);return v=function(){return n},n}function p(){var n=(0,i.Z)(["\n				background: ",";\n				border: 1px solid ",";\n				color: white;\n				"]);return p=function(){return n},n}function x(){var n=(0,i.Z)(["\n							background: transparent ;\n							color: ",";\n						"]);return x=function(){return n},n}function g(){var n=(0,i.Z)(["\n				background: ",";\n				border: 1px solid ",";\n				color: white;\n				","\n				"]);return g=function(){return n},n}function b(){var n=(0,i.Z)(["\n				background: ",";\n				border: 1px solid ",";\n				color: white;\n		"]);return b=function(){return n},n}function w(){var n=(0,i.Z)(["\n					padding: 0.7rem 1rem;\n				"]);return w=function(){return n},n}function y(){var n=(0,i.Z)(["\n					padding: 1rem;\n				"]);return y=function(){return n},n}function k(){var n=(0,i.Z)(["\n	padding: 1rem;\n	font-size: 1rem;\n	font-weight: 500;\n	border-radius: 0.5rem;\n	position: relative;\n	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);\n\n	&:disabled {\n		opacity: 0.2;\n		cursor: not-allowed;\n		pointer-events: none;\n	}\n\n	","\n\n	","\n\n	","\n"]);return k=function(){return n},n}var j=c.forwardRef(function(n,t){var e=n.color,i=n.type,o=n.children,c=n.loading,l=n.disabled,d=n.onClick,u=n.className,f=n.size,h=n.id,m=n.fullWidth,v=n.variant;return(0,r.jsxs)(_,{type:void 0===i?"button":i,$color:void 0===e?"primary":e,disabled:l,onClick:d,className:u,$size:void 0===f?"normal":f,id:h,$fullWidth:m,$variant:void 0===v?"contained":v,ref:t,children:[(0,r.jsx)(Z,{className:a()({hidden:c}),children:o}),c&&(0,r.jsx)(s.g,{loading:!0})]})}),Z=l.default.div(d()),_=l.default.button(k(),function(n){if(n.$fullWidth)return(0,l.css)(u())},function(n){switch(n.$color){case"primary":return(0,l.css)(h(),function(n){return n.theme.status.primary},function(n){return n.theme.status.primary},function(){if("outline"===n.$variant)return(0,l.css)(f(),function(n){return n.theme.status.primary})});case"info":return(0,l.css)(m(),function(n){return n.theme.status.info},function(n){return n.theme.status.info});case"secondary":return(0,l.css)(v(),function(n){return n.theme.secondary},function(n){return n.theme.secondary});case"success":return(0,l.css)(p(),function(n){return n.theme.status.success},function(n){return n.theme.status.success});case"dark":return(0,l.css)(g(),function(n){return n.theme.status.dark},function(n){return n.theme.status.dark},function(){if("outline"===n.$variant)return(0,l.css)(x(),function(n){return n.theme.status.dark})});default:return(0,l.css)(b(),function(n){return n.theme.status.primary},function(n){return n.theme.status.primary})}},function(n){return"small"===n.$size?(0,l.css)(w()):(0,l.css)(y())})},44327:function(n,t,e){e.d(t,{g:function(){return u}});var i,r=e(7297),o=e(85893),a=e(94184),s=e.n(a),c=e(67294),l=e(53918);function d(){var n=(0,r.Z)(["\n    transition: 150ms;\n    opacity: 0;\n    &.loading {\n        opacity: 1;\n    }\n\n    &.wrapper-chase {\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -50%);\n        width: ",";\n        height: ",';\n    }\n\n    .sk-chase {\n        width: 100%;\n        height: 100%;\n        position: relative;\n        animation: sk-chase 2.5s infinite linear both;\n    }\n\n    .sk-chase-dot {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        animation: sk-chase-dot 2s infinite ease-in-out both;\n    }\n\n    .sk-chase-dot:before {\n        content: "";\n        display: block;\n        width: 30%;\n        height: 30%;\n        background-color: ',";\n        border-radius: 100%;\n        animation: sk-chase-dot-before 2s infinite ease-in-out both;\n    }\n\n    .sk-chase-dot:nth-child(1) {\n        animation-delay: -1.1s;\n    }\n    .sk-chase-dot:nth-child(2) {\n        animation-delay: -1s;\n    }\n    .sk-chase-dot:nth-child(3) {\n        animation-delay: -0.9s;\n    }\n    .sk-chase-dot:nth-child(4) {\n        animation-delay: -0.8s;\n    }\n    .sk-chase-dot:nth-child(5) {\n        animation-delay: -0.7s;\n    }\n    .sk-chase-dot:nth-child(6) {\n        animation-delay: -0.6s;\n    }\n    .sk-chase-dot:nth-child(1):before {\n        animation-delay: -1.1s;\n    }\n    .sk-chase-dot:nth-child(2):before {\n        animation-delay: -1s;\n    }\n    .sk-chase-dot:nth-child(3):before {\n        animation-delay: -0.9s;\n    }\n    .sk-chase-dot:nth-child(4):before {\n        animation-delay: -0.8s;\n    }\n    .sk-chase-dot:nth-child(5):before {\n        animation-delay: -0.7s;\n    }\n    .sk-chase-dot:nth-child(6):before {\n        animation-delay: -0.6s;\n    }\n\n    @keyframes sk-chase {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes sk-chase-dot {\n        80%,\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n\n    @keyframes sk-chase-dot-before {\n        50% {\n            transform: scale(0.4);\n        }\n        100%,\n        0% {\n            transform: scale(1);\n        }\n    }\n"]);return d=function(){return n},n}var u=function(n){var t=n.width,e=n.height,i=n.loading,r=n.color,a=(0,c.useState)(),d=a[0],u=a[1],h=(0,l.useTheme)().status;return(0,c.useEffect)(function(){if(d){var n=d.parentElement,i=n.offsetWidth,r=n.offsetHeight;if(t||e)d.style.width=t,d.style.height=e;else{var o=.5*(i<r?i:r);o<12&&(o=12),d.style.width="".concat(o,"px"),d.style.height="".concat(o,"px")}}},[d,t,e]),(0,o.jsx)(f,{ref:function(n){u(n)},className:s()("wrapper-chase",{loading:i}),$background:h[r],$width:t,$height:e,children:(0,o.jsxs)("div",{className:"sk-chase",children:[(0,o.jsx)("div",{className:"sk-chase-dot first"}),(0,o.jsx)("div",{className:"sk-chase-dot"}),(0,o.jsx)("div",{className:"sk-chase-dot"}),(0,o.jsx)("div",{className:"sk-chase-dot"}),(0,o.jsx)("div",{className:"sk-chase-dot"}),(0,o.jsx)("div",{className:"sk-chase-dot"})]})})},f=l.default.div(d(),function(n){return n.$width},function(n){return n.$height},function(n){return null!==(i=n.$background)&&void 0!==i?i:"white"})},60252:function(n,t,e){e.r(t),e.d(t,{ModalNotifications:function(){return Y}});var i=e(85893),r=e(77566),o=e(17520),a=e(37825),s=e.n(a),c=e(7297),l=e(45889),d=e(69397),u=e(54799),f=e(95013),h=e(94184),m=e.n(h),v=e(41664),p=e.n(v),x=e(67294),g=e(5434),b=e(53918);function w(){var n=(0,c.Z)(["\n    & {\n        margin-left: auto;\n    }\n"]);return w=function(){return n},n}function y(){var n=(0,c.Z)(["\n    &.modal-notifications__wrapper {\n        display: flex;\n        flex-direction: column;\n        transition: 100ms;\n        div.body {\n            padding: 1rem 0;\n        }\n        button,\n        a {\n            text-transform: initial;\n            width: initial;\n            line-height: initial;\n            margin: auto;\n        }\n    }\n"]);return y=function(){return n},n}function k(){var n=(0,c.Z)(["\n    &.modal-notifications {\n        z-index: 9999;\n        overflow: auto;\n        display: flex;\n        align-items: center;\n        font-size: 13px;\n    }\n"]);return k=function(){return n},n}function j(){var n=(0,c.Z)(["\n    outline: none;\n    background: white;\n    position: relative;\n    z-index: 1;\n    padding: 2rem;\n    border-radius: 10px;\n    /* overflow: auto; */\n    margin: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    width: 95vw;\n    min-width: 320px;\n    max-width: calc(500px + 1vw);\n    height: auto;\n    min-height: auto;\n    overflow: hidden;\n\n    .modal-notifications__close-modal {\n        width: 100%;\n        display: flex;\n        justify-content: flex-end;\n        margin-bottom: 10px;\n        svg {\n            cursor: pointer;\n            font-size: 30px;\n        }\n    }\n"]);return j=function(){return n},n}var Z=function(n){var t,e,a,s,c=n.item,u=n.cn,f=(0,x.useState)(!0),h=f[0],v=f[1],b=(0,o.TL)(),w=function(){v(!1),b((0,r.Od)(c.reduxId))},y=null==c?void 0:null===(t=c.banner)||void 0===t?void 0:t.config,k="".concat("https://new.apuestatotal.com","/").concat(null==c?void 0:null===(e=c.banner)||void 0===e?void 0:null===(a=e.config)||void 0===a?void 0:a.image);return h?(0,i.jsx)(z,{className:m()(u()),BackdropComponent:l.Z,BackdropProps:{timeout:500},closeAfterTransition:!0,onClose:w,open:h,children:(0,i.jsxs)($,{children:[(0,i.jsx)("div",{className:m()(u("close-modal")),children:(0,i.jsx)(_,{onClick:w,children:(0,i.jsx)(g.FU5,{})})}),(0,i.jsxs)(N,{className:m()(u("wrapper")),children:[(0,i.jsx)(p(),{href:null==y?void 0:y.url,target:"_blank",children:(0,i.jsx)("a",{href:null==y?void 0:y.url,target:"_blank",rel:"noreferrer",children:(0,i.jsx)("img",{src:k,alt:null==c?void 0:null===(s=c.banner)||void 0===s?void 0:s.description})})}),(null==y?void 0:y.body)?(0,i.jsx)("div",{className:"body",children:null==y?void 0:y.body}):(0,i.jsx)(i.Fragment,{}),(null==y?void 0:y.button_text)?(0,i.jsx)(p(),{href:null==y?void 0:y.url,target:"_blank",children:(0,i.jsx)("a",{href:null==y?void 0:y.url,target:"_blank",rel:"noreferrer",children:(0,i.jsx)(d.Z,{variant:"contained",children:null==y?void 0:y.button_text})})}):(0,i.jsx)(i.Fragment,{})]})]})}):(0,i.jsx)(i.Fragment,{})},_=(0,b.default)(u.Z)(w()),N=b.default.div(y()),z=(0,b.default)(f.Z)(k()),$=b.default.div(j()),C=e(94688),F=e(39628),B=e(59812),E=e(51649);function S(){var n=(0,c.Z)(["\nmargin-left    :auto ;\ncolor: white;\nfont-size: 2.5rem;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ncursor: pointer;\n"]);return S=function(){return n},n}function T(){var n=(0,c.Z)(["\n    \n    position: absolute;\n    top: 48%;\n    height: 52%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 100%;\n    margin: auto;\n\n  \n\n    > .body, > .title{\n        width: 70%;\n        color: white;\n        display: flex;\n        justify-content: center;\n    }\n    .title *{\n        font-size: clamp(1.7rem , 7vw , 2.9rem);\n        font-weight: 700;        \n\n        ","{\n            font-size: 2.65rem;\n        }\n        /* ","{\n            font-size: 2.6rem;\n        } */\n        ","{\n            font-size: 2.45rem;\n        }\n    }    \n    > .body * {\n        font-size: clamp(11px , 3vw , 13px);\n        margin: 0;\n        line-height: 1.3;  \n    \n     }\n     \n    > .body * , > .title * {\n        text-align: center;\n    }\n\n    > .accions {\n        display: grid;\n        align-items: center;\n        grid-template-columns: 1fr;\n        width: 70%;\n\n        > .close {\n            text-align: center;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            background: transparent;\n            outline: none;\n            color: white;\n\n        }\n\n        > .close , >  button {\n            font-weight: 500;\n            font-size: clamp(1.25rem , 3vw , 1.6rem);   \n            padding: clamp(0.5rem , 3vw , 1.1rem) .5rem;\n\n            ","{\n            }\n        }\n    }\n"]);return T=function(){return n},n}function P(){var n=(0,c.Z)(["\n    & {\n        margin-left: auto;\n    }\n"]);return P=function(){return n},n}function q(){var n=(0,c.Z)(["\n    &.modal-notifications__wrapper {\n        display: flex;\n        flex-direction: column;\n        transition: 100ms;\n        width: 100%;\n           \n        button,\n        a {\n            text-transform: initial;\n            width: initial;\n            line-height: initial;\n            width: 100%;\n        }\n    }\n"]);return q=function(){return n},n}function A(){var n=(0,c.Z)(["\n    &.modal-notifications {\n        z-index: 9999;\n        overflow: auto;\n        display: flex;\n        align-items: center;\n        font-size: 13px;\n    }\n"]);return A=function(){return n},n}function L(){var n=(0,c.Z)(["\n    outline: none;\n    background: white;\n    background: transparent;\n    position: relative;\n    z-index: 1;\n    /* border-radius: 10px; */\n    /* overflow: auto; */\n    margin: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    width: 95vw;\n    min-width: 320px;\n    max-width: calc(500px + 1vw);\n    height: auto;\n    min-height: auto;\n    overflow: hidden;\n\n    .modal-notifications__close-modal {\n        width: 100%;\n        display: flex;\n        justify-content: flex-end;\n        svg {\n            cursor: pointer;\n            font-size: 30px;\n        }\n    }\n"]);return L=function(){return n},n}var O=function(n){var t,e=n.item,a=n.cn,s=(0,x.useState)(!0),c=s[0],d=s[1],u=(0,o.TL)(),f=function(){d(!1),u((0,r.Od)(e.reduxId))},h=null==e?void 0:e.config,v="".concat("https://new.apuestatotal.com","/").concat(h.image);return c?(0,i.jsx)(X,{className:m()(a()),BackdropComponent:l.Z,BackdropProps:{timeout:500},closeAfterTransition:!0,onClose:f,open:c,children:(0,i.jsxs)(G,{children:[(0,i.jsx)(I,{className:"icon__closed",onClick:f,children:(0,i.jsx)(E.QAE,{})}),(0,i.jsxs)(U,{className:m()(a("wrapper")),children:[h.image&&(0,i.jsx)(p(),{href:null==h?void 0:h.url,target:"_blank",children:(0,i.jsx)("a",{href:null==h?void 0:h.url,target:"_blank",rel:"noreferrer",children:(0,i.jsx)("img",{src:v,alt:null==e?void 0:null===(t=e.config)||void 0===t?void 0:t.title})})}),(0,i.jsxs)(W,{href:null==h?void 0:h.url,target:"_blank",rel:"noreferrer",children:[(null==h?void 0:h.title)&&(0,i.jsx)("div",{className:"title",children:(0,i.jsx)(B.Z,{fragment:null==h?void 0:h.title})}),(null==h?void 0:h.body)&&(0,i.jsx)("div",{className:"body",children:(0,i.jsx)(B.Z,{fragment:null==h?void 0:h.body})}),(0,i.jsx)("div",{className:"accions",children:(null==h?void 0:h.button_text)?(0,i.jsx)(F.z,{variant:"contained",children:null==h?void 0:h.button_text}):(0,i.jsx)(i.Fragment,{})})]})]})]})}):(0,i.jsx)(i.Fragment,{})},I=b.default.div(S()),W=b.default.a(T(),C.q.min_width.desktopXS,C.q.min_width.desktopS,C.q.min_width.desktopL,C.q.min_width.desktopXS);(0,b.default)(u.Z)(P());var U=b.default.div(q()),X=(0,b.default)(f.Z)(A()),G=b.default.div(L());function R(){var n=(0,c.Z)(["\n    & {\n        margin-left: auto;\n    }\n"]);return R=function(){return n},n}function D(){var n=(0,c.Z)(["\n    &.modal-notifications {\n        z-index: 9999;\n        overflow: auto;\n        display: flex;\n        align-items: center;\n        font-size: 13px;\n    }\n"]);return D=function(){return n},n}function H(){var n=(0,c.Z)(["\n    outline: none;\n    background: white;\n    position: relative;\n    z-index: 1;\n    padding: 2rem;\n    border-radius: 10px;\n    /* overflow: auto; */\n    margin: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    width: 95vw;\n    min-width: 320px;\n    max-width: calc(400px + 1vw);\n    height: auto;\n    min-height: auto;\n    overflow: hidden;\n    "," {\n        height: auto;\n        min-height: auto;\n        max-width: 400px;\n    }\n\n    .modal-notifications__close-modal {\n        width: 100%;\n        display: flex;\n        justify-content: flex-end;\n        margin-bottom: 10px;\n        svg {\n            cursor: pointer;\n            font-size: 30px;\n        }\n    }\n\n    .modal-notifications__content {\n        display: flex;\n        transition: 100ms;\n\n        > div {\n            flex: 1 0 100%;\n            &.password {\n                opacity: 0;\n                pointer-events: none;\n                visibility: hidden;\n            }\n            &.login {\n                opacity: 1;\n                pointer-events: all;\n                visibility: visible;\n            }\n        }\n    }\n"]);return H=function(){return n},n}var M=function(n){var t=n.item,e=n.cn,a=(0,x.useState)(!0),s=a[0],c=a[1],d=(0,o.TL)(),u=function(){c(!1),d((0,r.Od)(t.reduxId))};return s?(0,i.jsx)(J,{className:m()(e()),BackdropComponent:l.Z,BackdropProps:{timeout:500},closeAfterTransition:!0,onClose:u,open:s,children:(0,i.jsxs)(K,{children:[(0,i.jsx)("div",{className:m()(e("close-modal")),children:(0,i.jsx)(Q,{onClick:u,children:(0,i.jsx)(g.FU5,{})})}),(0,i.jsx)("div",{className:m()(e("content")),children:(0,i.jsx)("div",{children:null==t?void 0:t.text})})]})}):(0,i.jsx)(i.Fragment,{})},Q=(0,b.default)(u.Z)(R()),J=(0,b.default)(f.Z)(D()),K=b.default.div(H(),C.q.min_width.mobileL),V=s()("modal-notifications"),Y=function(){var n=(0,o.CG)(r.GZ).notification;return(null==n?void 0:n.length)===0?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)(i.Fragment,{children:n.map(function(n,t){return"POPUP_FIXED"===n.sub_type?(0,i.jsx)(O,{cn:V,item:n},t):"BANNER"===n.sub_type?(0,i.jsx)(Z,{item:n,cn:V},t):(0,i.jsx)(M,{item:n,cn:V},t)})})}}}]);
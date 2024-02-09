(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2818],{32866:function(e,t,n){"use strict";n.d(t,{B:function(){return i}});var r=n(67294),o=n(87536),i=function(e){var t=e.as,n=e.errors,i=e.name,s=e.message,a=e.render,c=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}(e,["as","errors","name","message","render"]),l=(0,o.Gc)(),d=(0,o.U2)(n||l.formState.errors,i);if(!d)return null;var u=d.message,f=d.types,h=Object.assign({},c,{children:u||s});return r.isValidElement(t)?r.cloneElement(t,h):a?a({message:u||s,messages:f}):r.createElement(t||r.Fragment,h)}},98787:function(e,t,n){"use strict";n.d(t,{b:function(){return d}});var r=n(6767),o=n.n(r),i=n(8193),s=n(63750),a=n(5434),c=n(53918),l=n(85893),d=function(e){var t=e.severity,n=e.children,r=e.title,o=e.className,c=function(){return"info"===t?(0,l.jsx)(s.LSF,{size:22}):"error"===t?(0,l.jsx)(a.JSF,{size:27}):"success"===t?(0,l.jsx)(i.mny,{size:23}):"warning"===t?(0,l.jsx)(i.CSE,{size:23}):(0,l.jsx)(l.Fragment,{})};return(0,l.jsxs)(p,{$severity:t,className:o,children:[(0,l.jsx)(h,{children:(0,l.jsx)(c,{})}),(0,l.jsxs)(m,{children:[r&&(0,l.jsx)(u,{children:r}),n&&(0,l.jsx)(f,{children:n})]})]})},u=c.default.div.withConfig({displayName:"Alert__TitleCss",componentId:"sc-1p4ao86-0"})(["font-weight:500;"]),f=c.default.div.withConfig({displayName:"Alert__ContentCss",componentId:"sc-1p4ao86-1"})(["display:flex;flex-direction:column;gap:0.5rem;"]),h=c.default.div.withConfig({displayName:"Alert__IconCss",componentId:"sc-1p4ao86-2"})(["svg{color:inherit;font-size:1.6rem;}"]),m=c.default.div.withConfig({displayName:"Alert__WraperCss",componentId:"sc-1p4ao86-3"})(["display:flex;flex-direction:column;gap:1rem;justify-content:center;"]),p=c.default.div.withConfig({displayName:"Alert__Css",componentId:"sc-1p4ao86-4"})(["display:flex;flex-direction:row;gap:.8rem;padding:1rem;border-radius:.5rem;",""],function(e){switch(e.$severity){case"info":return(0,c.css)(["background:",";","{color:",";}","{color:",";}","{color:",";}"],o()(e.theme.status.info).lighten(.97),u,o()(e.theme.status.info).darken(.4),f,o()(e.theme.status.info).darken(.3),h,o()(e.theme.status.info).darken(.4));case"error":return(0,c.css)(["background:",";","{color:",";}","{color:",";}","{color:",";}"],o()(e.theme.status.error).lighten(.8),u,o()(e.theme.status.error).darken(.4),f,o()(e.theme.status.error).darken(.3),h,o()(e.theme.status.error).darken(.4));case"success":return(0,c.css)(["background:",";","{color:",";}","{color:",";}","{color:",";}"],o()(e.theme.status.success).lighten(.97),u,o()(e.theme.status.success).darken(.5),f,o()(e.theme.status.success).darken(.4),h,o()(e.theme.status.success).darken(.4));case"warning":return(0,c.css)(["background:",";","{color:",";}","{color:",";}","{color:",";}"],o()(e.theme.status.warning).lighten(.7),u,o()(e.theme.status.warning).darken(.5),f,o()(e.theme.status.warning).darken(.4),h,o()(e.theme.status.warning).darken(.4));default:return(0,c.css)([""])}})},87979:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var r=n(94184),o=n.n(r),i=n(76642),s=n(67294),a=n(53918),c=n(85893),l=s.forwardRef(function(e,t){var n=e.color,r=e.type,s=e.children,a=e.loading,l=e.disabled,f=e.onClick,h=e.className,m=e.size,p=e.id,x=e.fullWidth,g=e.variant;return(0,c.jsxs)(u,{type:void 0===r?"button":r,$color:void 0===n?"primary":n,disabled:l,onClick:f,className:h,$size:void 0===m?"normal":m,id:p,$fullWidth:x,$variant:void 0===g?"contained":g,ref:t,children:[(0,c.jsx)(d,{className:o()({hidden:a}),children:s}),a&&(0,c.jsx)(i.g,{loading:!0})]})}),d=a.default.div.withConfig({displayName:"Button__ContentCss",componentId:"sc-qfjn0s-0"})(["&.hidden{opacity:0;}"]),u=a.default.button.withConfig({displayName:"Button__Css",componentId:"sc-qfjn0s-1"})(["padding:1rem;font-size:1rem;font-weight:500;border-radius:0.5rem;position:relative;box-shadow:0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08);&:disabled{opacity:0.2;cursor:not-allowed;pointer-events:none;}"," "," ",""],function(e){if(e.$fullWidth)return(0,a.css)(["width:100%;"])},function(e){switch(e.$color){case"primary":return(0,a.css)(["border:1px solid ",";background:",";color:white;",""],function(e){return e.theme.status.primary},function(e){return e.theme.status.primary},function(){if("outline"===e.$variant)return(0,a.css)(["background:transparent;color:",";"],function(e){return e.theme.status.primary})});case"info":return(0,a.css)(["background:",";border:1px solid ",";color:white;"],function(e){return e.theme.status.info},function(e){return e.theme.status.info});case"secondary":return(0,a.css)(["background:",";border:1px solid ",";color:black;"],function(e){return e.theme.secondary},function(e){return e.theme.secondary});case"success":return(0,a.css)(["background:",";border:1px solid ",";color:white;"],function(e){return e.theme.status.success},function(e){return e.theme.status.success});case"dark":return(0,a.css)(["background:",";border:1px solid ",";color:white;",""],function(e){return e.theme.status.dark},function(e){return e.theme.status.dark},function(){if("outline"===e.$variant)return(0,a.css)(["background:transparent;color:",";"],function(e){return e.theme.status.dark})});default:return(0,a.css)(["background:",";border:1px solid ",";color:white;"],function(e){return e.theme.status.primary},function(e){return e.theme.status.primary})}},function(e){return"small"===e.$size?(0,a.css)(["padding:0.7rem 1rem;"]):(0,a.css)(["padding:1rem;"])})},76642:function(e,t,n){"use strict";n.d(t,{g:function(){return c}});var r=n(94184),o=n.n(r),i=n(67294),s=n(53918),a=n(85893),c=function(e){var t=e.width,n=e.height,r=e.loading,c=e.color,d=(0,i.useState)(),u=d[0],f=d[1],h=(0,s.useTheme)().status;return(0,i.useEffect)(function(){if(u){var e=u.parentElement,r=e.offsetWidth,o=e.offsetHeight;if(t||n)u.style.width=t,u.style.height=n;else{var i=.5*(r<o?r:o);i<12&&(i=12),u.style.width="".concat(i,"px"),u.style.height="".concat(i,"px")}}},[u,t,n]),(0,a.jsx)(l,{ref:function(e){f(e)},className:o()("wrapper-chase",{loading:r}),$background:h[c],$width:t,$height:n,children:(0,a.jsxs)("div",{className:"sk-chase",children:[(0,a.jsx)("div",{className:"sk-chase-dot first"}),(0,a.jsx)("div",{className:"sk-chase-dot"}),(0,a.jsx)("div",{className:"sk-chase-dot"}),(0,a.jsx)("div",{className:"sk-chase-dot"}),(0,a.jsx)("div",{className:"sk-chase-dot"}),(0,a.jsx)("div",{className:"sk-chase-dot"})]})})},l=s.default.div.withConfig({displayName:"Loading__Css",componentId:"sc-1jpsoaq-0"})(["transition:150ms;opacity:0;&.loading{opacity:1;}&.wrapper-chase{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:",";height:",';}.sk-chase{width:100%;height:100%;position:relative;animation:sk-chase 2.5s infinite linear both;}.sk-chase-dot{width:100%;height:100%;position:absolute;left:0;top:0;animation:sk-chase-dot 2s infinite ease-in-out both;}.sk-chase-dot:before{content:"";display:block;width:30%;height:30%;background-color:',";border-radius:100%;animation:sk-chase-dot-before 2s infinite ease-in-out both;}.sk-chase-dot:nth-child(1){animation-delay:-1.1s;}.sk-chase-dot:nth-child(2){animation-delay:-1s;}.sk-chase-dot:nth-child(3){animation-delay:-0.9s;}.sk-chase-dot:nth-child(4){animation-delay:-0.8s;}.sk-chase-dot:nth-child(5){animation-delay:-0.7s;}.sk-chase-dot:nth-child(6){animation-delay:-0.6s;}.sk-chase-dot:nth-child(1):before{animation-delay:-1.1s;}.sk-chase-dot:nth-child(2):before{animation-delay:-1s;}.sk-chase-dot:nth-child(3):before{animation-delay:-0.9s;}.sk-chase-dot:nth-child(4):before{animation-delay:-0.8s;}.sk-chase-dot:nth-child(5):before{animation-delay:-0.7s;}.sk-chase-dot:nth-child(6):before{animation-delay:-0.6s;}@keyframes sk-chase{100%{transform:rotate(360deg);}}@keyframes sk-chase-dot{80%,100%{transform:rotate(360deg);}}@keyframes sk-chase-dot-before{50%{transform:scale(0.4);}100%,0%{transform:scale(1);}}"],function(e){return e.$width},function(e){return e.$height},function(e){var t;return null!==(t=e.$background)&&void 0!==t?t:"white"})},63137:function(e,t,n){"use strict";n.d(t,{u:function(){return c}});var r=n(67294),o=n(73935),i=n(53918),s=n(85893),a=(0,i.createGlobalStyle)([".modal_at-2223kmaksdmcas233njncaj{position:fixed;z-index:999;inset:0;}"]),c=function(e){var t=e.open,n=(e.onClose,e.children),i=(0,r.useRef)(),c=(0,r.useState)(!1),d=c[0],u=c[1],f=document.body;return(0,r.useEffect)(function(){if(t){if(!i.current){var e=document.createElement("div");e.className="modal_at-2223kmaksdmcas233njncaj",i.current=e,f.appendChild(i.current);var n="".concat(window.innerWidth-f.clientWidth,"px");f.style.setProperty("padding-right",n,"important"),f.style.overflow="hidden",u(!0)}}else{if((null==i?void 0:i.current)instanceof Node&&null!=i&&i.current)try{f.removeChild(i.current),f.style.paddingRight="initial",f.style.overflow="initial"}catch(r){console.log(r)}u(!1),i.current=null}},[t]),(0,r.useEffect)(function(){return function(){if((null==i?void 0:i.current)instanceof Node&&null!=i&&i.current)try{f.removeChild(i.current),f.style.paddingRight="initial",f.style.overflow="initial"}catch(e){console.log(e)}u(!1),i.current=null}},[]),i.current&&t&&d?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{}),(0,o.createPortal)((0,s.jsx)(l,{$open:!t,children:n}),i.current)]}):(0,s.jsx)(s.Fragment,{})},l=i.default.div.withConfig({displayName:"Modal__ModalStyled",componentId:"sc-11q64jy-0"})(["pointer-events:all;height:100%;position:relative;width:100%;"])},37748:function(e,t,n){"use strict";n.d(t,{h:function(){return f}});var r=n(77549),o=n(94184),i=n.n(o),s=n(6767),a=n.n(s),c=n(45155),l=n(51649),d=n(53918),u=n(85893),f=function(e){var t=e.children,n=e.onClose,r=e.className,o=e.hiddenBackArrow,s=void 0!==o&&o,a=e.onClickBackArrow,d=e.backArrowText,f=void 0===d?"":d,m=e.hiddenButtonClose,x=void 0!==m&&m;return(0,u.jsx)(p,{className:i()("ModalContentStyled",r),children:(0,u.jsxs)("div",{className:"ModalContentStyled__wrap",children:[(!s||!x)&&(0,u.jsxs)(h,{children:[!s&&(0,u.jsxs)("span",{onClick:void 0===a?function(){return null}:a,className:"HeaderActionsCss__backArrow",children:[(0,u.jsx)(l.UkU,{}),f&&(0,u.jsx)("div",{className:"HeaderActionsCss__backArrow__text",children:f})]}),!x&&(0,u.jsx)("span",{onClick:n,className:"HeaderActionsCss__close",children:(0,u.jsx)(c.nfZ,{})})]}),t]})})},h=d.default.div.withConfig({displayName:"ModalContent__HeaderActionsCss",componentId:"sc-1mperjq-0"})(["display:flex;padding :1rem;min-height:4rem;.HeaderActionsCss__close,.HeaderActionsCss__backArrow{cursor:pointer;font-weight:bold;margin-left:auto;position:sticky;top:0;width:100%;margin:initial;margin-left:auto;display:flex;justify-content:flex-end;align-items:center;background-color:",";gap:0.5rem;> .HeaderActionsCss__backArrow__text{color:",";font-size:1.2rem;font-weight:400;}> svg{font-size:1.5rem;color:",";path{stroke:",";stroke-width:3px;}}}.HeaderActionsCss__backArrow{justify-content:flex-start;> svg{font-size:2rem;color:",";}}"],function(e){return e.theme.background},function(e){return a()(e.theme.status.default)},function(e){return a()(e.theme.status.default).lighten(1.2)},function(e){return a()(e.theme.status.default).lighten(1.1)},function(e){return a()(e.theme.status.default).lighten(1.2)}),m=(0,d.css)(["",""],function(){if(!("ontouchstart"in window))return(0,d.css)(["::-webkit-scrollbar{width:10px;}::-webkit-scrollbar-track{background:#f1f1f1;}::-webkit-scrollbar-thumb{background:#888;box-shadow:inset 0 0 6px rgba(0,0,0,0.3);background-color:",";border-radius:100px;border:2px solid #e4e4e4;}::-webkit-scrollbar-thumb:hover{background:#555;}"],function(e){return a()(e.theme.contrastText).fade(.1)})}),p=d.default.div.withConfig({displayName:"ModalContent__Css",componentId:"sc-1mperjq-1"})(["padding:20px 10px;height:100%;display:flex;align-items:center;justify-content:center;background:",";pointer-events:all;> .ModalContentStyled__wrap{position:relative;border-radius:0.5rem;border:1px solid ",";"," background-color:",";max-height:100%;width:100%;overflow:auto;"," max-width:calc(500px + 1vw);pointer-events:all;}"],function(e){return a()(e.theme.shadow).fade(.3)},function(e){return a()(e.theme.contrastText).fade(.2)},(0,r.q)().medium,function(e){return e.theme.background},m)},63992:function(e,t,n){"use strict";n.d(t,{B:function(){return k}});var r=n(50029),o=n(87794),i=n.n(o),s=n(27644),a=n(85260),c=n(63933),l=n(83872),d=n(84225),u=n(94184),f=n.n(u),h=n(87979),m=n(73710),p=n.n(m),x=n(11163),g=n(67294),b=n(5434),v=n(70804),w=n(53918),y=n(85893),k=function(e){var t,n=e.tabs,o=e.active,d=e.children,u=e.eventName,h=void 0===u?"retiro":u,m=(0,g.useState)(null),p=m[0],v=m[1],w=(0,c.Z)().width,k=(0,x.useRouter)(),A=(0,x.useRouter)().pathname;null!==(t=o)&&void 0!==t||(o=A);var T=(0,l.g)({porcentajeMinRestante:10}),E=T.hasSpaceLeft,z=T.hasSpaceRight,O=T.onClickArrow,P=T.scrollRef;(0,g.useEffect)(function(){p&&B(p).then(function(){o&&M(p)})},[p,w,k.pathname,o]),(0,g.useEffect)(function(){p&&o&&M(p)},[p,o]);var q,M=function(e){var t=e.querySelector(".active");if(t){var n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),o=n.left+n.width/2,i=r.left+r.width/2-o;p.scrollLeft+=i}},B=(q=(0,r.Z)(i().mark(function e(t){return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.style.width="100%",t.style.opacity="1",e.next=4,(0,a.g)(50);case 4:case"end":return e.stop()}},e)})),function(e){return q.apply(this,arguments)}),$=function(e,t){return(0,r.Z)(i().mark(function n(){return i().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return s.f.push({event:"atm.event",eventName:h,option:t.toLowerCase(),action:"click"}),n.next=3,k.push(e);case 3:case"end":return n.stop()}},n)}))},F=(0,g.useMemo)(function(){var e;return d&&Array.isArray(d)?null==d?void 0:d.map(function(e){var t=(null==e?void 0:e.props)||{},n=t.name,r=t.url;return n||r?(0,y.jsx)(N,{className:f()({active:o===r,children:e}),onClick:$(r,n),children:e},n):(0,y.jsx)(y.Fragment,{})}):null==n?void 0:n.map(function(e){var t=e.title,n=e.url;return(0,y.jsx)(N,{className:f()({active:o===n}),onClick:$(n,t),children:t},t)})},[n,o,d]);return(0,y.jsxs)(C,{children:[(0,y.jsx)(S,{className:f()("left lscroll",{hidden:!E}),onClick:function(){O("L")},children:(0,y.jsx)(I,{children:(0,y.jsx)(b.G1X,{})})}),(0,y.jsx)(S,{className:f()("right rscroll",{hidden:!z}),onClick:function(){O("R")},children:(0,y.jsx)(I,{children:(0,y.jsx)(b.FNi,{})})}),(0,y.jsx)(j,{ref:function(e){v(e),P(e)},children:(0,y.jsx)(_,{children:F})})]})},C=w.default.div.withConfig({displayName:"ScrollMenuPage__StyledWrapper",componentId:"sc-qb3tgs-0"})(["position:relative;overflow:hidden;"]),j=(0,w.default)(v.ZP).withConfig({displayName:"ScrollMenuPage__ScrollContainerS",componentId:"sc-qb3tgs-1"})(["position:relative;display:flex;width:0;z-index:1;padding:.8rem 14px;background:",";","{padding-bottom:0rem;background:transparent;border-bottom:1px solid rgb(217,217,217);border-top:0;}"],function(e){return p()(e.theme.contrastText,.04)},d.q.min_width.desktopS),_=w.default.div.withConfig({displayName:"ScrollMenuPage__ScrollContent",componentId:"sc-qb3tgs-2"})(["display:flex;gap:8px;margin:auto;"]),N=(0,w.default)(h.z).withConfig({displayName:"ScrollMenuPage__ButtonTapS",componentId:"sc-qb3tgs-3"})(["&&{background:transparent;padding:0.5rem 1rem;font-weight:400;text-transform:lowercase;display:block;min-width:auto;border:1px solid transparent;font-size:1rem;color:",";line-height:1rem;transition:all 0.3s;box-shadow:none;border-radius:8px;&.children{min-width:initial;padding:0;}:hover{color:",";background:",";}&::first-letter{text-transform:uppercase;}&.active{font-weight:500;color:",";background:",";border:1px solid ",";}","{border:none;border-radius:0;border-bottom:3px solid transparent;&.active{border:none;background:none;color:",";border-bottom:3px solid ",";}:hover:not(.active){border:none;border-bottom:3px solid ",";}}}"],function(e){return p()(e.theme.contrastText,.6)},function(e){return e.theme.contrastText},function(e){return e.theme.background},function(e){return e.theme.contrastText},function(e){return e.theme.background},function(e){return p()(e.theme.contrastText,.2)},d.q.min_width.desktopS,function(e){return e.theme.contrastText},function(e){return p()(e.theme.contrastText,.8)},function(e){return p()(e.theme.contrastText,.8)}),S=w.default.div.withConfig({displayName:"ScrollMenuPage__StyledWrapperButton",componentId:"sc-qb3tgs-4"})(["position:absolute;top:-1px;display:flex;align-items:center;justify-content:center;z-index:2;cursor:pointer;height:calc(100% + 2px);background:",';transition:all 0.3s;&::after{content:"";position:absolute;width:50%;height:100%;pointer-events:none;z-index:-1;transition:all 0.3s;}&.left{left:0;&::after{left:100%;background:linear-gradient(to right,',",transparent);}&.hidden{left:-35px;opacity:0;&::after{left:0%;}}transition:left 0.3s,opacity 0.3s;}&.right{right:0;&::after{right:100%;background:linear-gradient(to left,",",transparent);}&.hidden{right:-35px;opacity:0;&::after{right:0%;}}transition:left 0.3s,opacity 0.3s;}"],function(e){return e.theme.background},function(e){return e.theme.background},function(e){return e.theme.background}),I=w.default.div.withConfig({displayName:"ScrollMenuPage__StyledIconButton",componentId:"sc-qb3tgs-5"})(["flex:1;height:35px;width:35px;border-radius:50%;transition:all .3s;&:active,&:hover,&:focus{background:",";}svg{font-size:35px;color:",";}"],function(e){return p()(e.theme.contrastText,.1)},function(e){return p()(e.theme.contrastText,.5)})},24538:function(e,t,n){"use strict";n.d(t,{P:function(){return x}});var r=n(59499),o=n(32866),i=n(77549),s=n(94184),a=n.n(s),c=n(6767),l=n.n(c),d=n(67294),u=n(87536),f=n(53918),h=n(85893);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var x=function(e){var t=e.errors,n=void 0===t?{}:t,r=e.id,i=e.label,s=e.register,c=void 0===s?function(){}:s,l=(e.type,e.disabled),f=void 0!==l&&l,m=e.required,x=e.className,j=e.endContent,_=e.variant,N=(e.autoFocus,e.size),S=void 0===N?"normal":N,I=(e.labelShrink,e.control),A=e.children,T=e.toReset,E=(0,d.useState)(!1),z=E[0],O=E[1],P=(0,d.useState)(!1),q=P[0],M=P[1],B="outline"===_,$=(0,d.useState)(!1),F=$[0],L=$[1],H=(0,d.useState)(null),R=H[0],W=H[1],Z=(0,d.useRef)(null);return(0,d.useEffect)(function(){var e='"'.concat("\uFEFF",'"');function t(t){if(t)return(!!t.value||window.getComputedStyle(t).content===e)&&(O(!0),t.classList.add("valid"),!0)}var n=document.getElementById(r);if(!t(n))var o=0,i=setInterval(function(){(t(n)||o++>=20)&&clearInterval(i)},300)},[]),(0,d.useEffect)(function(){W(null),M(!1),O(!1),L(!1)},[T]),(0,d.useEffect)(function(){var e=function(e){Z.current&&!Z.current.contains(e.target)&&L(!1)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}},[Z,F]),(0,h.jsxs)(k,{className:a()(r,x),children:[(0,h.jsx)(b,{$size:S,htmlFor:r,className:a()({outline:B,filled:B&&z,focus:q,isSuccess:!n[r]&&R}),children:i}),(0,h.jsxs)(w,{children:[(0,h.jsx)(u.Qr,{control:I,name:r,render:function(e){var t=e.field,o=t.onChange,s=t.onBlur,l=t.value;return(0,h.jsxs)(C,{ref:Z,$size:S,id:r,name:r,type:"button",disabled:f,className:a()({error:n[r],open:F,isSuccess:!n[r]&&l}),onClick:function(){return L(!F)},onBlur:function(){M(!1),s(),l||O(!1)},onFocus:function(e){O(!0),M(!0)},children:[(0,h.jsx)("input",p(p({},c(r,{required:m})),{},{hidden:!0})),(0,h.jsx)("span",{style:{opacity:R?1:0},children:null!=R?R:i}),(0,h.jsx)(g,{className:a()({open:F}),children:null==A?void 0:A.map(function(e){return d.cloneElement(e,{onClick:function(t){t.stopPropagation(),W(e.props.text),o(e.props.value),L(!1),M(!1)}})})})]})}}),j&&(0,h.jsx)(v,{children:j})]}),n[r]&&(0,h.jsx)(y,{children:(0,h.jsx)(o.B,{name:r,errors:n})})]})},g=f.default.div.withConfig({displayName:"Select__SelectItemsCss",componentId:"sc-1klfb7w-0"})(["display:flex;flex-direction:column;align-items:flex-start;position:absolute;top:calc(100% + 5px);width:100%;left:0;z-index:99;border:1px solid ",";border-radius:0.5rem;background:",";padding:0.4rem 0.3rem;gap:.2rem;"," transition:170ms;opacity:0;transform:scale(0);transform-origin:top center;max-height:40vh;height:auto;overflow:auto;&.open{opacity:1;transform:scale(1);}"],function(e){return l()(e.theme.status.default).alpha(.2)},function(e){return e.theme.background},(0,i.q)().small),b=f.default.label.withConfig({displayName:"Select__LabelCss",componentId:"sc-1klfb7w-1"})(["max-width:85%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;&.outline{position:absolute;z-index:1;pointer-events:none;transition:150ms;transform:translate(1rem,calc(50% + 0.4rem));padding:0 4px;transform-origin:left top;border-radius:3px;opacity:1;&.filled,&.labelShrink{opacity:1;position:absolute;transform:translate(0.9rem,-0.6rem) scale(0.8);background:white;}&.focus{opacity:1;color:",";background:white;}&.isSuccess{color:initial;}}",""],function(e){return e.theme.status.primary},function(e){return"small"===e.$size?(0,f.css)(["&.outline{transform:translate(1rem,calc(50% + 0.2rem));}"]):(0,f.css)(["&.outline{transform:translate(1rem,calc(50% + 0.4rem));}"])}),v=f.default.div.withConfig({displayName:"Select__EndContentCss",componentId:"sc-1klfb7w-2"})(["position:absolute;right:0;aspect-ratio:1;height:100%;display:flex;> *{flex:1;background:transparent;display:flex;justify-content:center;align-items:center;cursor:pointer;}"]),w=f.default.div.withConfig({displayName:"Select__InputWrapCss",componentId:"sc-1klfb7w-3"})(["display:flex;width:100%;position:relative;border-radius:0.5rem;"]),y=f.default.div.withConfig({displayName:"Select__ErrorCss",componentId:"sc-1klfb7w-4"})(["font-size:0.9rem;color:",";"],function(e){return e.theme.primary}),k=f.default.div.withConfig({displayName:"Select__Css",componentId:"sc-1klfb7w-5"})(["display:flex;flex-direction:column;gap:0.5rem;position :relative;"]),C=f.default.button.withConfig({displayName:"Select__ButtonCss",componentId:"sc-1klfb7w-6"})(["flex:1;cursor:pointer;border:none;transition:200ms;border:1px solid ",';box-shadow:0 0 0 2px transparent;background:transparent;display:flex;justify-content:flex-start;white-space:nowrap;&:-webkit-autofill{content:"\feff"}&:focus,&.error,&.open{outline:0;border:1px solid ',";box-shadow:0 0 0 2px ",";}&.isSuccess:focus,&.isSuccess.open{border:1px solid ",";box-shadow:0 0 0 2px ",";}&.isSuccess{border:1px solid ",";}",""],function(e){return e.theme.status.default},function(e){return e.theme.status.primary},function(e){return e.theme.status.primary},function(e){return e.theme.status.success},function(e){return e.theme.status.success},function(e){return e.theme.status.success},function(e){return"small"===e.$size?(0,f.css)(["padding:0.7rem 1rem;border-radius:0.4rem;"]):(0,f.css)(["border-radius:0.5rem;padding:1rem;"])})},82134:function(e,t,n){"use strict";n.d(t,{Q:function(){return a}});var r=n(6767),o=n.n(r),i=n(53918),s=n(85893),a=function(e){var t=e.key,n=e.value,r=e.children,o=e.onClick;return e.text,(0,s.jsx)(c,{value:n,onClick:o,children:(0,s.jsx)("span",{children:r})},t)},c=i.default.div.withConfig({displayName:"SelectItem__SelectItemCss",componentId:"sc-lvysht-0"})(["background:transparent;outline:none;border:0;width:100%;display:flex;justify-content:flex-start;&:hover span{background:",";}> span{width:100%;text-align:left;transition:200ms;padding:0.4rem 0.7rem;border-radius:.3rem;white-space:initial;}"],function(e){return o()(e.theme.contrastText).alpha(.1)})},63933:function(e,t,n){"use strict";var r=n(67294);t.Z=function(){var e=(0,r.useState)({width:void 0,height:void 0}),t=e[0],n=e[1];return(0,r.useEffect)(function(){function e(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}},[]),t}},54543:function(e,t,n){"use strict";n.d(t,{T:function(){return c}});var r=n(73710),o=n.n(r);n(67294);var i=n(53918),s=n(5434),a=n(85893),c=function(e){var t=e.text;return(0,a.jsxs)(l,{children:[(0,a.jsx)(d,{children:(0,a.jsx)(s.Tcr,{})}),(0,a.jsx)(u,{children:t})]})},l=i.default.div.withConfig({displayName:"AlertProfile__AlertProfileCss",componentId:"sc-r7bvln-0"})(["width:auto;display:flex;align-content:center;justify-content:center;align-items:center;flex-direction:row;flex-wrap:nowrap;margin:1.2rem;padding:1rem;gap:1rem;border:1px solid ",";border-radius:0.8rem;@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){border:1px solid ",";}"],function(e){return o()(e.theme.contrastText,.1)},function(e){return e.theme.contrastText?o()(e.theme.contrastText,.1):"#ccc"}),d=i.default.div.withConfig({displayName:"AlertProfile__IconContentCss",componentId:"sc-r7bvln-1"})(["display:grid;> svg{fill:",";font-size:1.5rem;}"],function(e){return o()(e.theme.contrastText,.4)}),u=i.default.p.withConfig({displayName:"AlertProfile__Text",componentId:"sc-r7bvln-2"})(["color:",";font-size:clamp(.9rem,1.5vw,1rem);line-height:normal;"],function(e){return o()(e.theme.contrastText,.6)})},38312:function(e,t,n){"use strict";n.d(t,{o:function(){return a}});var r=n(34529),o=n(63992);n(67294);var i=n(53918).default.div.withConfig({displayName:"global__ContainerCss",componentId:"sc-1ksp3zw-0"})(["display:flex;flex-direction:column;flex:1;min-height:inherit;overflow:hidden;"]),s=n(85893),a=function(e){var t=e.children;return(0,s.jsxs)(i,{children:[(0,s.jsx)(o.B,{tabs:r.F}),(0,s.jsx)("div",{children:t})]})}},23629:function(e,t,n){"use strict";n.d(t,{X:function(){return r},f:function(){return o}});var r={EMAIL:{name:"Contactar por email",type:"CONTACT"},PHONE:{name:"Contactar por tel\xe9fono",type:"CONTACT"},PUSH:{name:"Notificaciones push",type:"NOTIFICATION"},SMS:{name:"Contactar por SMS",type:"CONTACT"}},o=[{periodo:"7 d\xedas",dias:7},{periodo:"15 d\xedas",dias:15},{periodo:"1 mes",dias:30},{periodo:"6 meses",dias:180},{periodo:"Infinito",dias:1803232}]},86149:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var r=n(9008),o=n.n(r),i=n(67294),s=n(41248),a=n(50029),c=n(16835),l=n(87794),d=n.n(l),u=n(87536),f=n(53918),h=n(6045),m=n(24705),p=n(82771),x=n(43335),g=n(98787),b=n(87979),v=n(63137),w=n(37748),y=n(84225),k=n(46407),C=n(24538),j=n(82134),_=n(73710),N=n.n(_),S=n(23629),I=n(54543),A=n(85893),T=function(){var e=(0,i.useState)(0),t=e[0],n=e[1],r=(0,i.useState)(!1),o=r[0],s=r[1],l=(0,i.useState)(!1),f=l[0],w=l[1],y=(0,i.useState)(""),_=y[0],N=y[1],T=(0,u.cI)({mode:"onChange",criteriaMode:"all"}),B=T.control,$=T.register,F=(0,T.watch)("select_autoexclude");(0,i.useEffect)(function(){N(F)},[F]);var L,H,R=(0,m.Sw)(),W=(0,c.Z)(R,2),Z=W[0],U=W[1].isLoading,D=(0,x.TL)(),X=(0,h.Z)().user,G=function(){s(!0)},Q=function(){s(!1)},J=(L=(0,a.Z)(d().mark(function e(){var t;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z({company:null==X?void 0:X.company,session:null==X?void 0:X.session,days:_}).unwrap();case 3:(null==(t=e.sent)?void 0:t.result)==="OK"?(Q(),D((0,p.mc)()),window.open(k.H["/"].url,"_self")):(w(!0),N("")),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error occurred:",e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])})),function(){return L.apply(this,arguments)});return(0,A.jsxs)(E,{children:[(0,A.jsx)(I.T,{text:"Especifique el per\xedodo en el que desea autoexcluirse. No podr\xe1 iniciar sesi\xf3n en su cuenta durante ese per\xedodo de tiempo (entre 1 semana a m\xe1s)."}),(0,A.jsx)(z,{children:(0,A.jsx)(C.P,{size:"small",id:"select_autoexclude",control:B,register:$,label:"Selecione per\xedodo de exclusi\xf3n*",children:S.f.map(function(e){return(0,A.jsx)(j.Q,{text:e.periodo,value:e.dias,children:e.periodo},"i".concat(e.dias))})})}),(0,A.jsx)(O,{children:(0,A.jsx)(b.z,{onClick:G,size:"small",disabled:!_,children:"Autoexcluirme"})}),(0,A.jsx)(v.u,{onClose:Q,open:o,children:(0,A.jsx)(P,{hiddenBackArrow:!0,onClickBackArrow:function(){return n(t-1)},onClose:Q,children:(0,A.jsxs)(q,{children:[(0,A.jsxs)("div",{className:"TextModalAuto title",children:["Autoexcluirme por ",(H=S.f.find(function(e){return e.dias===Number(_)}))?H.periodo:"","."]}),(0,A.jsx)("div",{className:"TextModalAuto",children:"Ten en cuenta que no podr\xe1s iniciar sesi\xf3n, depositar, jugar ni retirar ganancias cuando est\xe1s autoexcluido."}),f&&(0,A.jsx)(g.b,{severity:"error",children:"\xa1Ups! Algo sali\xf3 mal, Ocurri\xf3 un error \xf3 refresca la pagina."}),(0,A.jsxs)(M,{children:[(0,A.jsx)(b.z,{className:"btnLight",onClick:(0,a.Z)(d().mark(function e(){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:case"end":return e.stop()}},e)})),children:"Autoexcluirme"}),(0,A.jsx)(b.z,{className:"primary",disabled:U,loading:U,color:"primary",onClick:Q,children:"Cancelar"})]})]})})})]})},E=f.default.div.withConfig({displayName:"AutoExclusion__AutoexclusionCss",componentId:"sc-eobncv-0"})(["margin:auto;display:grid;place-items:center;gap:1rem;background:",";","{padding:20px;width:100%;}"],function(e){return e.theme.background},y.q.min_width.tabletS),z=f.default.form.withConfig({displayName:"AutoExclusion__FormContentS",componentId:"sc-eobncv-1"})(["width:80%;position:relative;padding:10px;","{width:40%;text-align:left;}"],y.q.min_width.tabletS),O=f.default.div.withConfig({displayName:"AutoExclusion__ButtonWrapper",componentId:"sc-eobncv-2"})(["display:flex;justify-content:center;"]),P=(0,f.default)(w.h).withConfig({displayName:"AutoExclusion__ModalContentCss",componentId:"sc-eobncv-3"})(["&&{backdrop-filter:blur(2px);.ModalContentStyled__wrap{border-radius:0rem;border:none;box-shadow:none;div{padding:0;min-height:auto;}}.HeaderActionsCss__close{top:0;right:0;height:40px;width:40px;display:flex;justify-content:center;align-items:center;background-color:",";color:",";svg path{stroke:#ffffff;}&:hover{background-color:",";}&:active{background-color:",";}}}"],function(e){return e.theme.primary},function(e){return e.theme.background},function(e){return N()(e.theme.primary,.8)},function(e){return N()(e.theme.primary,.6)}),q=f.default.div.withConfig({displayName:"AutoExclusion__ContentExclusionInfo",componentId:"sc-eobncv-4"})(["background:",";margin:1rem;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:center;align-items:space-around;gap:1.5rem;.TextModalAuto{font-size:1rem;line-height:26px;display:flex;align-items:center;color:",";&.title{font-weight:500;font-size:calc(100% + 0.25dvw);}}.ContenedorBotones{display:flex;flex-wrap:wrap;gap:10px;margin-top:10px;> div{flex:1;> button{text-transform:initial;}}}"],function(e){return e.theme.background},function(e){return e.theme.contrastText}),M=f.default.div.withConfig({displayName:"AutoExclusion__WrapperButtons",componentId:"sc-eobncv-5"})(["width:100%;display:flex;flex-wrap:nowrap;gap:1rem;margin-top:10px;flex-direction:row;justify-content:center;align-items:flex-start;button{padding:0.7rem 1.2rem;width:100%;}.btnLight{background:",";color:",";border:1px solid ",";&:hover{background:",";}&:active{background:",";}}.primary:hover{background:",";border:1px solid ",";}"],function(e){return e.theme.background},function(e){return e.theme.contrastText},function(e){return N()(e.theme.contrastText,.4)},function(e){return N()(e.theme.contrastText,.05)},function(e){return N()(e.theme.contrastText,.1)},function(e){return N()(e.theme.primary,.8)},function(e){return N()(e.theme.primary,.8)}),B=n(38312),$=n(83639),F=function(){var e=(0,s.I0)();return(0,i.useEffect)(function(){e((0,$.t8)(""))},[]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(o(),{children:(0,A.jsx)("title",{children:"Autoexclusi\xf3n | Apuesta Total"})}),(0,A.jsx)(B.o,{children:(0,A.jsx)(T,{})})]})}},9646:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cuenta/mi-perfil/autoexclusion",function(){return n(86149)}])}},function(e){e.O(0,[2013,4617,9866,6158,7536,9774,2888,179],function(){return e(e.s=9646)}),_N_E=e.O()}]);
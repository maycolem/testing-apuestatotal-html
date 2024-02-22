"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8312],{87979:function(t,e,n){n.d(e,{z:function(){return d}});var r=n(94184),i=n.n(r),o=n(76642),a=n(67294),s=n(53918),c=n(85893),d=a.forwardRef(function(t,e){var n=t.color,r=t.type,a=t.children,s=t.loading,d=t.disabled,h=t.onClick,f=t.className,p=t.size,m=t.underline,g=t.id,b=t.fullWidth,x=t.variant;return(0,c.jsxs)(l,{type:void 0===r?"button":r,$color:void 0===n?"primary":n,disabled:d,onClick:h,className:i()(f,{loading:s,disabled:d}),$size:void 0===p?"normal":p,$underline:void 0!==m&&m,id:g,$fullWidth:b,$variant:void 0===x?"contained":x,ref:e,children:[(0,c.jsx)(u,{className:i()({hidden:s}),children:a}),s&&(0,c.jsx)(o.g,{loading:!0})]})}),u=s.default.div.withConfig({displayName:"Button__ContentCss",componentId:"sc-qfjn0s-0"})(["&.hidden{opacity:0;}"]),l=s.default.button.withConfig({displayName:"Button__Css",componentId:"sc-qfjn0s-1"})(["padding:1rem;font-size:1rem;font-weight:500;border-radius:0.5rem;position:relative;box-shadow:0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08);&.disabled{cursor:not-allowed;pointer-events:none;}"," "," "," ",""],function(t){if(t.$fullWidth)return(0,s.css)(["width:100%;"])},function(t){if(t.$underline)return(0,s.css)(["text-decoration:underline;"])},function(t){switch(t.$color){case"primary":return(0,s.css)(["border:1px solid ",";background:",";color:white;",""],function(t){return t.theme.status.primary},function(t){return t.theme.status.primary},function(){if("outline"===t.$variant)return(0,s.css)(["background:transparent;color:",";"],function(t){return t.theme.status.primary})});case"info":return(0,s.css)(["background:",";border:1px solid ",";color:white;"],function(t){return t.theme.status.info},function(t){return t.theme.status.info});case"secondary":return(0,s.css)(["background:",";border:1px solid ",";color:black;"],function(t){return t.theme.secondary},function(t){return t.theme.secondary});case"success":return(0,s.css)(["background:",";border:1px solid ",";color:white;"],function(t){return t.theme.status.success},function(t){return t.theme.status.success});case"alternate4":return(0,s.css)(["background:",";border:1px solid ",";color:black;"],function(t){return t.theme.status.alternate4},function(t){return t.theme.status.alternate4});case"dark":return(0,s.css)(["background:",";border:1px solid ",";color:white;",""],function(t){return t.theme.status.dark},function(t){return t.theme.status.dark},function(){if("outline"===t.$variant)return(0,s.css)(["background:transparent;color:",";"],function(t){return t.theme.status.dark})});case"light":return(0,s.css)(["background:",";border:1px solid ",";color:black;"],function(t){return t.theme.status.light},function(t){return t.theme.status.alternate4});default:return(0,s.css)(["background:",";border:1px solid ",";color:white;"],function(t){return t.theme.status.primary},function(t){return t.theme.status.primary})}},function(t){switch(t.$size){case"xs":return(0,s.css)(["height:28px;font-size:15px !important;padding:0.25rem 1rem;border-radius:4px;"]);case"small":return(0,s.css)(["padding:0.7rem 1rem;"]);default:return(0,s.css)(["padding:1rem;"])}})},76642:function(t,e,n){n.d(e,{g:function(){return c}});var r=n(94184),i=n.n(r),o=n(67294),a=n(53918),s=n(85893),c=function(t){var e=t.width,n=t.height,r=t.loading,c=t.color,u=(0,o.useState)(),l=u[0],h=u[1],f=(0,a.useTheme)().status;return(0,o.useEffect)(function(){if(l){var t=l.parentElement,r=t.offsetWidth,i=t.offsetHeight;if(e||n)l.style.width=e,l.style.height=n;else{var o=.5*(r<i?r:i);o<12&&(o=12),l.style.width="".concat(o,"px"),l.style.height="".concat(o,"px")}}},[l,e,n]),(0,s.jsx)(d,{ref:function(t){h(t)},className:i()("wrapper-chase",{loading:r}),$background:f[c],$width:e,$height:n,children:(0,s.jsxs)("div",{className:"sk-chase",children:[(0,s.jsx)("div",{className:"sk-chase-dot first"}),(0,s.jsx)("div",{className:"sk-chase-dot"}),(0,s.jsx)("div",{className:"sk-chase-dot"}),(0,s.jsx)("div",{className:"sk-chase-dot"}),(0,s.jsx)("div",{className:"sk-chase-dot"}),(0,s.jsx)("div",{className:"sk-chase-dot"})]})})},d=a.default.div.withConfig({displayName:"Loading__Css",componentId:"sc-1jpsoaq-0"})(["transition:150ms;opacity:0;&.loading{opacity:1;}&.wrapper-chase{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:",";height:",';}.sk-chase{width:100%;height:100%;position:relative;animation:sk-chase 2.5s infinite linear both;}.sk-chase-dot{width:100%;height:100%;position:absolute;left:0;top:0;animation:sk-chase-dot 2s infinite ease-in-out both;}.sk-chase-dot:before{content:"";display:block;width:30%;height:30%;background-color:',";border-radius:100%;animation:sk-chase-dot-before 2s infinite ease-in-out both;}.sk-chase-dot:nth-child(1){animation-delay:-1.1s;}.sk-chase-dot:nth-child(2){animation-delay:-1s;}.sk-chase-dot:nth-child(3){animation-delay:-0.9s;}.sk-chase-dot:nth-child(4){animation-delay:-0.8s;}.sk-chase-dot:nth-child(5){animation-delay:-0.7s;}.sk-chase-dot:nth-child(6){animation-delay:-0.6s;}.sk-chase-dot:nth-child(1):before{animation-delay:-1.1s;}.sk-chase-dot:nth-child(2):before{animation-delay:-1s;}.sk-chase-dot:nth-child(3):before{animation-delay:-0.9s;}.sk-chase-dot:nth-child(4):before{animation-delay:-0.8s;}.sk-chase-dot:nth-child(5):before{animation-delay:-0.7s;}.sk-chase-dot:nth-child(6):before{animation-delay:-0.6s;}@keyframes sk-chase{100%{transform:rotate(360deg);}}@keyframes sk-chase-dot{80%,100%{transform:rotate(360deg);}}@keyframes sk-chase-dot-before{50%{transform:scale(0.4);}100%,0%{transform:scale(1);}}"],function(t){return t.$width},function(t){return t.$height},function(t){var e;return null!==(e=t.$background)&&void 0!==e?e:"white"})},63992:function(t,e,n){n.d(e,{B:function(){return y}});var r=n(50029),i=n(87794),o=n.n(i),a=n(27644),s=n(85260),c=n(63933),d=n(83872),u=n(84225),l=n(94184),h=n.n(l),f=n(87979),p=n(73710),m=n.n(p),g=n(11163),b=n(67294),x=n(5434),k=n(70804),v=n(53918),w=n(85893),y=function(t){var e,n=t.tabs,i=t.active,u=t.children,l=t.eventName,f=void 0===l?"retiro":l,p=(0,b.useState)(null),m=p[0],k=p[1],v=(0,c.Z)().width,y=(0,g.useRouter)(),z=(0,g.useRouter)().pathname;null!==(e=i)&&void 0!==e||(i=z);var q=(0,d.g)({porcentajeMinRestante:10}),T=q.hasSpaceLeft,I=q.hasSpaceRight,B=q.onClickArrow,E=q.scrollRef;(0,b.useEffect)(function(){m&&L(m).then(function(){i&&M(m)})},[m,v,y.pathname,i]),(0,b.useEffect)(function(){m&&i&&M(m)},[m,i]);var R,M=function(t){var e=t.querySelector(".active");if(e){var n=t.getBoundingClientRect(),r=e.getBoundingClientRect(),i=n.left+n.width/2,o=r.left+r.width/2-i;m.scrollLeft+=o}},L=(R=(0,r.Z)(o().mark(function t(e){return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.style.width="100%",e.style.opacity="1",t.next=4,(0,s.g)(50);case 4:case"end":return t.stop()}},t)})),function(t){return R.apply(this,arguments)}),P=function(t,e){return(0,r.Z)(o().mark(function n(){return o().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a.f.push({event:"atm.event",eventName:f,option:e.toLowerCase(),action:"click"}),n.next=3,y.push(t);case 3:case"end":return n.stop()}},n)}))},W=(0,b.useMemo)(function(){var t;return u&&Array.isArray(u)?null==u?void 0:u.map(function(t){var e=(null==t?void 0:t.props)||{},n=e.name,r=e.url;return n||r?(0,w.jsx)(_,{className:h()({active:i===r,children:t}),onClick:P(r,n),children:t},n):(0,w.jsx)(w.Fragment,{})}):null==n?void 0:n.map(function(t){var e=t.title,n=t.url;return(0,w.jsx)(_,{className:h()({active:i===n}),onClick:P(n,e),children:e},e)})},[n,i,u]);return(0,w.jsxs)(j,{children:[(0,w.jsx)(S,{className:h()("left lscroll",{hidden:!T}),onClick:function(){B("L")},children:(0,w.jsx)($,{children:(0,w.jsx)(x.G1X,{})})}),(0,w.jsx)(S,{className:h()("right rscroll",{hidden:!I}),onClick:function(){B("R")},children:(0,w.jsx)($,{children:(0,w.jsx)(x.FNi,{})})}),(0,w.jsx)(C,{ref:function(t){k(t),E(t)},children:(0,w.jsx)(N,{children:W})})]})},j=v.default.div.withConfig({displayName:"ScrollMenuPage__StyledWrapper",componentId:"sc-qb3tgs-0"})(["position:relative;overflow:hidden;width:100%;"]),C=(0,v.default)(k.ZP).withConfig({displayName:"ScrollMenuPage__ScrollContainerS",componentId:"sc-qb3tgs-1"})(["position:relative;display:flex;width:0;z-index:1;padding:.8rem 14px;background:",";","{padding-bottom:0rem;background:transparent;border-bottom:1px solid rgb(217,217,217);border-top:0;}"],function(t){return m()(t.theme.contrastText,.04)},u.q.min_width.desktopS),N=v.default.div.withConfig({displayName:"ScrollMenuPage__ScrollContent",componentId:"sc-qb3tgs-2"})(["display:flex;gap:8px;margin:auto;"]),_=(0,v.default)(f.z).withConfig({displayName:"ScrollMenuPage__ButtonTapS",componentId:"sc-qb3tgs-3"})(["&&{background:transparent;padding:0.5rem 1rem;font-weight:400;text-transform:lowercase;display:block;min-width:auto;border:1px solid transparent;font-size:1rem;color:",";line-height:1rem;transition:all 0.3s;box-shadow:none;border-radius:8px;&.children{min-width:initial;padding:0;}:hover{color:",";background:",";}&::first-letter{text-transform:uppercase;}&.active{font-weight:500;color:",";background:",";border:1px solid ",";}","{border:none;border-radius:0;border-bottom:3px solid transparent;&.active{border:none;background:none;color:",";border-bottom:3px solid ",";}:hover:not(.active){border:none;border-bottom:3px solid ",";}}}"],function(t){return m()(t.theme.contrastText,.6)},function(t){return t.theme.contrastText},function(t){return t.theme.background},function(t){return t.theme.contrastText},function(t){return t.theme.background},function(t){return m()(t.theme.contrastText,.2)},u.q.min_width.desktopS,function(t){return t.theme.contrastText},function(t){return m()(t.theme.contrastText,.8)},function(t){return m()(t.theme.contrastText,.8)}),S=v.default.div.withConfig({displayName:"ScrollMenuPage__StyledWrapperButton",componentId:"sc-qb3tgs-4"})(["position:absolute;top:-1px;display:flex;align-items:center;justify-content:center;z-index:2;cursor:pointer;height:calc(100% + 2px);background:",';transition:all 0.3s;&::after{content:"";position:absolute;width:50%;height:100%;pointer-events:none;z-index:-1;transition:all 0.3s;}&.left{left:0;&::after{left:100%;background:linear-gradient(to right,',",transparent);}&.hidden{left:-35px;opacity:0;&::after{left:0%;}}transition:left 0.3s,opacity 0.3s;}&.right{right:0;&::after{right:100%;background:linear-gradient(to left,",",transparent);}&.hidden{right:-35px;opacity:0;&::after{right:0%;}}transition:left 0.3s,opacity 0.3s;}"],function(t){return t.theme.background},function(t){return t.theme.background},function(t){return t.theme.background}),$=v.default.div.withConfig({displayName:"ScrollMenuPage__StyledIconButton",componentId:"sc-qb3tgs-5"})(["flex:1;height:35px;width:35px;border-radius:50%;transition:all .3s;&:active,&:hover,&:focus{background:",";}svg{font-size:35px;color:",";}"],function(t){return m()(t.theme.contrastText,.1)},function(t){return m()(t.theme.contrastText,.5)})},63933:function(t,e,n){var r=n(67294);e.Z=function(){var t=(0,r.useState)({width:void 0,height:void 0}),e=t[0],n=t[1];return(0,r.useEffect)(function(){function t(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",t),t(),function(){window.removeEventListener("resize",t)}},[]),e}},38312:function(t,e,n){n.d(e,{o:function(){return s}});var r=n(34529),i=n(63992);n(67294);var o=n(53918).default.div.withConfig({displayName:"global__ContainerCss",componentId:"sc-1ksp3zw-0"})(["display:flex;flex-direction:column;flex:1;min-height:inherit;overflow:hidden;"]),a=n(85893),s=function(t){var e=t.children;return(0,a.jsxs)(o,{children:[(0,a.jsx)(i.B,{tabs:r.F}),(0,a.jsx)("div",{children:e})]})}}}]);
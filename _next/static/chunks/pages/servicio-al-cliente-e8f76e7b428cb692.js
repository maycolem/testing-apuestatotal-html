(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[538],{87979:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var a=n(94184),s=n.n(a),i=n(76642),o=n(67294),r=n(53918),c=n(85893),l=o.forwardRef(function(e,t){var n=e.color,a=e.type,o=e.children,r=e.loading,l=e.disabled,p=e.onClick,m=e.className,h=e.size,f=e.id,g=e.fullWidth,x=e.variant;return(0,c.jsxs)(u,{type:void 0===a?"button":a,$color:void 0===n?"primary":n,disabled:l,onClick:p,className:m,$size:void 0===h?"normal":h,id:f,$fullWidth:g,$variant:void 0===x?"contained":x,ref:t,children:[(0,c.jsx)(d,{className:s()({hidden:r}),children:o}),r&&(0,c.jsx)(i.g,{loading:!0})]})}),d=r.default.div.withConfig({displayName:"Button__ContentCss",componentId:"sc-qfjn0s-0"})(["&.hidden{opacity:0;}"]),u=r.default.button.withConfig({displayName:"Button__Css",componentId:"sc-qfjn0s-1"})(["padding:1rem;font-size:1rem;font-weight:500;border-radius:0.5rem;position:relative;box-shadow:0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08);&:disabled{opacity:0.2;cursor:not-allowed;pointer-events:none;}"," "," ",""],function(e){if(e.$fullWidth)return(0,r.css)(["width:100%;"])},function(e){switch(e.$color){case"primary":return(0,r.css)(["border:1px solid ",";background:",";color:white;",""],function(e){return e.theme.status.primary},function(e){return e.theme.status.primary},function(){if("outline"===e.$variant)return(0,r.css)(["background:transparent;color:",";"],function(e){return e.theme.status.primary})});case"info":return(0,r.css)(["background:",";border:1px solid ",";color:white;"],function(e){return e.theme.status.info},function(e){return e.theme.status.info});case"secondary":return(0,r.css)(["background:",";border:1px solid ",";color:black;"],function(e){return e.theme.secondary},function(e){return e.theme.secondary});case"success":return(0,r.css)(["background:",";border:1px solid ",";color:white;"],function(e){return e.theme.status.success},function(e){return e.theme.status.success});case"dark":return(0,r.css)(["background:",";border:1px solid ",";color:white;",""],function(e){return e.theme.status.dark},function(e){return e.theme.status.dark},function(){if("outline"===e.$variant)return(0,r.css)(["background:transparent;color:",";"],function(e){return e.theme.status.dark})});default:return(0,r.css)(["background:",";border:1px solid ",";color:white;"],function(e){return e.theme.status.primary},function(e){return e.theme.status.primary})}},function(e){return"small"===e.$size?(0,r.css)(["padding:0.7rem 1rem;"]):(0,r.css)(["padding:1rem;"])})},76642:function(e,t,n){"use strict";n.d(t,{g:function(){return c}});var a=n(94184),s=n.n(a),i=n(67294),o=n(53918),r=n(85893),c=function(e){var t=e.width,n=e.height,a=e.loading,c=e.color,d=(0,i.useState)(),u=d[0],p=d[1],m=(0,o.useTheme)().status;return(0,i.useEffect)(function(){if(u){var e=u.parentElement,a=e.offsetWidth,s=e.offsetHeight;if(t||n)u.style.width=t,u.style.height=n;else{var i=.5*(a<s?a:s);i<12&&(i=12),u.style.width="".concat(i,"px"),u.style.height="".concat(i,"px")}}},[u,t,n]),(0,r.jsx)(l,{ref:function(e){p(e)},className:s()("wrapper-chase",{loading:a}),$background:m[c],$width:t,$height:n,children:(0,r.jsxs)("div",{className:"sk-chase",children:[(0,r.jsx)("div",{className:"sk-chase-dot first"}),(0,r.jsx)("div",{className:"sk-chase-dot"}),(0,r.jsx)("div",{className:"sk-chase-dot"}),(0,r.jsx)("div",{className:"sk-chase-dot"}),(0,r.jsx)("div",{className:"sk-chase-dot"}),(0,r.jsx)("div",{className:"sk-chase-dot"})]})})},l=o.default.div.withConfig({displayName:"Loading__Css",componentId:"sc-1jpsoaq-0"})(["transition:150ms;opacity:0;&.loading{opacity:1;}&.wrapper-chase{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:",";height:",';}.sk-chase{width:100%;height:100%;position:relative;animation:sk-chase 2.5s infinite linear both;}.sk-chase-dot{width:100%;height:100%;position:absolute;left:0;top:0;animation:sk-chase-dot 2s infinite ease-in-out both;}.sk-chase-dot:before{content:"";display:block;width:30%;height:30%;background-color:',";border-radius:100%;animation:sk-chase-dot-before 2s infinite ease-in-out both;}.sk-chase-dot:nth-child(1){animation-delay:-1.1s;}.sk-chase-dot:nth-child(2){animation-delay:-1s;}.sk-chase-dot:nth-child(3){animation-delay:-0.9s;}.sk-chase-dot:nth-child(4){animation-delay:-0.8s;}.sk-chase-dot:nth-child(5){animation-delay:-0.7s;}.sk-chase-dot:nth-child(6){animation-delay:-0.6s;}.sk-chase-dot:nth-child(1):before{animation-delay:-1.1s;}.sk-chase-dot:nth-child(2):before{animation-delay:-1s;}.sk-chase-dot:nth-child(3):before{animation-delay:-0.9s;}.sk-chase-dot:nth-child(4):before{animation-delay:-0.8s;}.sk-chase-dot:nth-child(5):before{animation-delay:-0.7s;}.sk-chase-dot:nth-child(6):before{animation-delay:-0.6s;}@keyframes sk-chase{100%{transform:rotate(360deg);}}@keyframes sk-chase-dot{80%,100%{transform:rotate(360deg);}}@keyframes sk-chase-dot-before{50%{transform:scale(0.4);}100%,0%{transform:scale(1);}}"],function(e){return e.$width},function(e){return e.$height},function(e){var t;return null!==(t=e.$background)&&void 0!==t?t:"white"})},1977:function(e,t,n){"use strict";n.d(t,{J:function(){return s}});var a=n(7631),s=function(e,t){var n=(t||{}).skip;return(0,a.BA)(e,{skip:n})}},9e4:function(e,t,n){"use strict";n.d(t,{r:function(){return i}});var a=n(6045),s=n(67294),i=function(e){var t=e.PageURL,n=e.PageTitle,i=e.PageCategory,o=(0,a.Z)().user,r=o?"".concat(o.user):null;(0,s.useEffect)(function(){var e;null!==(e=window.optimoveSDK)&&void 0!==e&&e.API&&(r?window.optimoveSDK.API.setPageVisit(t,n,i,r):window.optimoveSDK.API.setPageVisit(t,n,i))},[t,n,i,r])}},84475:function(e,t,n){"use strict";n.r(t),n(27644);var a=n(1977),s=n(9e4),i=n(82771),o=n(87979),r=n(23870),c=n(9008),l=n.n(c),d=n(41248),u=n(53918),p=n(85893),m=function(){(0,s.r)({PageURL:window.location.href,PageTitle:"Servicio al Cliente",PageCategory:"Servicio al Cliente"});var e=(0,a.J)({fragment:"SEC_SERVICIO_AL_CLIENTE"}).data;return(0,d.v9)(i.np),"https://api.whatsapp.com/send?phone=".concat("51950722615","&text=Hola%20t\xedo%20AT,%20nesecito%20ayuda%20con%20..."),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(l(),{children:[(0,p.jsx)("title",{children:"Servicio al Cliente, Atenci\xf3n de Consultas | Apuesta Total"}),(0,p.jsx)("meta",{content:"Servicio al Cliente, Atenci\xf3n de Consultas | Apuesta Total",property:"og:title"}),(0,p.jsx)("meta",{content:"Servicio al Cliente, Atenci\xf3n de Consultas | Apuesta Total",itemProp:"name"}),(0,p.jsx)("meta",{content:"Servicio al Cliente, Atenci\xf3n de Consultas | Apuesta Total",name:"twitter:title"}),(0,p.jsx)("meta",{content:"Encuentra en servicio al cliente la mejor opci\xf3n para absolver tus consultas, problemas y m\xe1s en Apuesta Total",name:"description"}),(0,p.jsx)("meta",{content:"Encuentra en servicio al cliente la mejor opci\xf3n para absolver tus consultas, problemas y m\xe1s en Apuesta Total",property:"og:description"}),(0,p.jsx)("meta",{content:"Encuentra en servicio al cliente la mejor opci\xf3n para absolver tus consultas, problemas y m\xe1s en Apuesta Total",itemProp:"description"}),(0,p.jsx)("meta",{content:"Encuentra en servicio al cliente la mejor opci\xf3n para absolver tus consultas, problemas y m\xe1s en Apuesta Total",name:"twitter:description"}),(0,p.jsx)("meta",{content:"apuesta total, torneos, poker, juegos, recargas, casino, Bet Games, TV Bet, ruleta rusa, yan ken po, tragamonedas online, torneos de casino, premios",name:"keywords"}),(0,p.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",property:"og:image"}),(0,p.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",name:"image"}),(0,p.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",property:"og:image:secure_url"}),(0,p.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",itemProp:"image"}),(0,p.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",name:"twitter:image"}),(0,p.jsx)("meta",{content:"1145",property:"og:image:width"}),(0,p.jsx)("meta",{content:"513",property:"og:image:height"}),(0,p.jsx)("meta",{content:"website",property:"og:type"}),(0,p.jsx)("meta",{content:"https://www.apuestatotal.com/servicio-al-cliente",property:"og:url"}),(0,p.jsx)("meta",{content:"summary",name:"twitter:card"}),(0,p.jsx)("meta",{content:"text/html; charset=utf-8",httpEquiv:"content-type"}),(0,p.jsx)("meta",{content:"width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=0",name:"viewport"}),(0,p.jsx)("meta",{content:"true",name:"HandheldFriendly"}),(0,p.jsx)("meta",{content:"telephone=no",name:"format-detection"}),(0,p.jsx)("meta",{content:"YES",name:"apple-mobile-web-app-capable"}),(0,p.jsx)("link",{href:"https://www.apuestatotal.com/servicio-al-cliente",rel:"canonical"}),(0,p.jsx)("link",{href:"/public/favicon.ico",rel:"icon",type:"image/x-icon"})]}),(0,p.jsx)(f,{children:(0,p.jsxs)("div",{children:[(0,p.jsx)(r.Z,{fragment:null!=e?e:""}),(0,p.jsx)(h,{children:(0,p.jsx)(o.z,{color:"success",onClick:function(){return window.open("https://teleservicios.at/juega/","_blank")},children:"Cont\xe1ctanos aqu\xed"})})]})})]})};(0,u.default)(o.z).withConfig({displayName:"servicio-al-cliente__ButtonCss",componentId:"sc-19z1vhg-0"})(["&&{padding:0;display:grid;place-items:center;> div{display:grid;place-items:center;}a{padding:0.6rem 1rem;display:flex;align-items:center;gap:.5rem;min-height:3rem;}border:transparent;&.whatsapp{background:#4ECC5C;}&.messenger{background:rgb(0,132,255);}&.telegram{background:#35ADE1;}}"]),t.default=m;var h=u.default.div.withConfig({displayName:"servicio-al-cliente__AccionsS",componentId:"sc-19z1vhg-1"})(["display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;"]),f=u.default.div.withConfig({displayName:"servicio-al-cliente__StyledS",componentId:"sc-19z1vhg-2"})(["display:flex;position:relative;justify-content:center;background:",";padding:1rem;padding-bottom:100px;"],function(e){return e.theme.alternative})},65335:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/servicio-al-cliente",function(){return n(84475)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=65335)}),_N_E=e.O()}]);
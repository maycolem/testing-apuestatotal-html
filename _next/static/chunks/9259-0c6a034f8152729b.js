"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9259],{6885:function(t,e,n){var o=n(84225),i=n(67294),r=n(70804);n(85278),n(98745),n(98322);var a=n(53918),s=n(85893),c=function(t){var e=t.setAnimatedNoMoreLobbies,n=void 0===e?function(){return null}:e,o=t.children,r=(0,i.useState)(!1),a=r[0],c=r[1],u=(0,i.useState)(!1),f=u[0],m=u[1],p=(0,i.useRef)();return(0,i.useEffect)(function(){if(p&&null!=p&&p.current){var t=p.current,e=(null==t?void 0:t.scrollLeft)||0;0===e&&c(!1),e>200&&c(!0),Math.abs(t.scrollLeft)===t.scrollWidth-t.clientWidth?m(!1):m(!0),t.onscroll=function(){var e=null==t?void 0:t.scrollLeft;0===e&&c(!1),e>200&&c(!0),50>Math.abs(t.scrollLeft-(t.scrollWidth-t.clientWidth))||Math.abs(t.scrollLeft)===t.scrollWidth-t.clientWidth?(m(!1),n(!0)):(m(!0),n(!1))}}},[p,n]),(0,s.jsxs)(d,{children:[(0,s.jsxs)(s.Fragment,{children:[a&&(0,s.jsx)(l,{className:"left",onClick:function(){var t=p.current,e=t.scrollLeft-500,n=window.innerWidth/100*15;t.scroll({top:0,left:e-n,behavior:"smooth"})},children:(0,s.jsx)("span",{children:"<"})}),f&&(0,s.jsx)(l,{className:"right",onClick:function(){var t=p.current,e=window.innerWidth/100*15;t.scroll({top:0,left:t.scrollLeft+500+e,behavior:"smooth"})},children:(0,s.jsx)("span",{children:">"})})]}),(0,s.jsx)(h,{ref:p,children:o})]})};e.Z=c;var d=a.default.div.withConfig({displayName:"LobbySlide__WrapperLobbySLiderS",componentId:"sc-clkymy-0"})(["position:relative;"]),l=a.default.div.withConfig({displayName:"LobbySlide__ButtonArrowS",componentId:"sc-clkymy-1"})(["&{height:calc(100% - 28px);right:-14px;z-index:10;position:absolute;top:14px;display:flex;align-items:center;justify-content:center;color:red;font-weight:500;cursor:pointer;transition:250ms;&.left{left:-14px;right:initial;}span{transition:150ms;transform:scaleY(1.2);}:hover{span{transform:scaleY(1.5) scaleX(1.3);}}width:30px;font-size:2.2rem;svg{transition:250ms;font-size:calc(2rem + 1vw);}","{width:50px;font-size:calc(3rem + 1vw);:hover{svg{font-size:calc(3rem + 1vw + 1vw);}span{transform:scaleY(1.5) scaleX(1.3);}}}}"],o.q.min_width.desktopS),h=(0,a.default)(r.ZP).withConfig({displayName:"LobbySlide__CarouselS",componentId:"sc-clkymy-2"})(["position:relative;display:flex;gap:1rem;min-width:100%;padding:14px;width:calc(100% + 28px);right:14px;"])},10132:function(t,e,n){var o=n(6045),i=n(88123),r=n(94184),a=n.n(r),s=n(87751),c=n(27644),d=n(41664),l=n.n(d),h=n(53918),u=n(85893),f=function(t){var e=t.title,n=t.onClickShowAll,r=t.hiddenShowAll,d=t.animatedNoMoreLobbies,h=t.href,f=t.onClickSearch,x=(0,o.Z)().groups.Andrea_y_Joao,v=function(t){c.f.push({event:"atm.event",title:t.toLowerCase(),eventName:"home_click",option:"ver todas"})};return(0,u.jsxs)(g,{children:[(0,u.jsx)(m,{children:h?(0,u.jsx)(l(),{href:h,children:(0,u.jsx)("a",{href:h,children:(0,u.jsx)("h1",{className:a()("MorePromotions__title",{haveHref:!!h}),children:e})})}):(0,u.jsx)("h1",{className:"MorePromotions__title",children:e})}),f&&x?(0,u.jsx)(p,{onClick:f,children:(0,u.jsx)(s.E.img,{whileTap:{scale:.6},src:i.Z.src,alt:"search-icon"})}):(0,u.jsx)("div",{}),!(void 0!==r&&r)&&(0,u.jsxs)(b,{$animatedNoMoreLobbies:void 0!==d&&d,onClick:function(){n(),v("ver todas")},children:["Ver todas ",">"]})]})};e.Z=f;var m=h.default.div.withConfig({displayName:"LobbyTitle__TitleTextCss",componentId:"sc-9h6gyr-0"})(["display:flex;justify-content:flex-start;"]),p=(0,h.default)(s.E.button).withConfig({displayName:"LobbyTitle__ButtonSearchCss",componentId:"sc-9h6gyr-1"})(["background:none;border:none;outline:none;"]),g=(0,h.default)("div").withConfig({displayName:"LobbyTitle__LobbyTitleS",componentId:"sc-9h6gyr-2"})(["&{display:grid;grid-template-columns:1fr 2rem max-content;gap:1rem;h1.MorePromotions__title{font-size:clamp(16px,2.5vw,25px);font-weight:500;text-transform:lowercase;position:relative;letter-spacing:0;display:block;color:",';transition:200ms;::first-letter{text-transform:capitalize;}&.haveHref{::after{content:"";position:absolute;width:0%;height:2px;background:',";bottom:0px;left:0;transition:250ms;}}&.haveHref:hover{h1{}::after{width:100%;}}}}"],function(t){return t.theme.casino.slider.contrastText},function(t){return t.theme.casino.slider.contrastText}),b=h.default.button.withConfig({displayName:"LobbyTitle__ButtonS",componentId:"sc-9h6gyr-3"})(["&&{box-shadow:none;text-transform:capitalize;background:",";color:",";padding:.5rem 1rem;border-radius:.3rem;transition:250ms;font-weight:500;:hover{background:",";color:",";box-shadow:none;}animation-name:none;animation-duration:1.5s;animation-iteration-count:infinite;","}"],function(t){return t.theme.casino.slider.showMore.background},function(t){return t.theme.casino.slider.showMore.contrastText},function(t){return t.theme.casino.slider.showMoreActive.background},function(t){return t.theme.casino.slider.showMoreActive.contrastText},function(t){return t.$animatedNoMoreLobbies?(0,h.css)(["color:",";background:",";animation-name:pulse;&:hover{background:",";}@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(255,0,0,0.7),0 0 0 0 rgba(255,0,0,0.7);}40%{box-shadow:0 0 0 40px rgba(255,0,0,0),0 0 0 0 rgba(255,0,0,0.7);}80%{transform:scale(1);box-shadow:0 0 0 40px rgba(255,0,0,0),0 0 0 20px rgba(255,0,0,0);}100%{box-shadow:0 0 0 0 rgba(255,0,0,0),0 0 0 20px rgba(255,0,0,0);}}"],function(t){return t.theme.casino.slider.showMoreActive.contrastText},function(t){return t.theme.casino.slider.showMoreActive.background},function(t){return t.theme.casino.slider.showMoreActive.background}):null})},87979:function(t,e,n){n.d(e,{z:function(){return d}});var o=n(94184),i=n.n(o),r=n(76642),a=n(67294),s=n(53918),c=n(85893),d=a.forwardRef(function(t,e){var n=t.color,o=t.type,a=t.children,s=t.loading,d=t.disabled,u=t.onClick,f=t.className,m=t.size,p=t.id,g=t.fullWidth,b=t.variant;return(0,c.jsxs)(h,{type:void 0===o?"button":o,$color:void 0===n?"primary":n,disabled:d,onClick:u,className:f,$size:void 0===m?"normal":m,id:p,$fullWidth:g,$variant:void 0===b?"contained":b,ref:e,children:[(0,c.jsx)(l,{className:i()({hidden:s}),children:a}),s&&(0,c.jsx)(r.g,{loading:!0})]})}),l=s.default.div.withConfig({displayName:"Button__ContentCss",componentId:"sc-qfjn0s-0"})(["&.hidden{opacity:0;}"]),h=s.default.button.withConfig({displayName:"Button__Css",componentId:"sc-qfjn0s-1"})(["padding:1rem;font-size:1rem;font-weight:500;border-radius:0.5rem;position:relative;box-shadow:0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08);&:disabled{opacity:0.2;cursor:not-allowed;pointer-events:none;}"," "," ",""],function(t){if(t.$fullWidth)return(0,s.css)(["width:100%;"])},function(t){switch(t.$color){case"primary":return(0,s.css)(["border:1px solid ",";background:",";color:white;",""],function(t){return t.theme.status.primary},function(t){return t.theme.status.primary},function(){if("outline"===t.$variant)return(0,s.css)(["background:transparent;color:",";"],function(t){return t.theme.status.primary})});case"info":return(0,s.css)(["background:",";border:1px solid ",";color:white;"],function(t){return t.theme.status.info},function(t){return t.theme.status.info});case"secondary":return(0,s.css)(["background:",";border:1px solid ",";color:black;"],function(t){return t.theme.secondary},function(t){return t.theme.secondary});case"success":return(0,s.css)(["background:",";border:1px solid ",";color:white;"],function(t){return t.theme.status.success},function(t){return t.theme.status.success});case"dark":return(0,s.css)(["background:",";border:1px solid ",";color:white;",""],function(t){return t.theme.status.dark},function(t){return t.theme.status.dark},function(){if("outline"===t.$variant)return(0,s.css)(["background:transparent;color:",";"],function(t){return t.theme.status.dark})});default:return(0,s.css)(["background:",";border:1px solid ",";color:white;"],function(t){return t.theme.status.primary},function(t){return t.theme.status.primary})}},function(t){return"small"===t.$size?(0,s.css)(["padding:0.7rem 1rem;"]):(0,s.css)(["padding:1rem;"])})},76642:function(t,e,n){n.d(e,{g:function(){return c}});var o=n(94184),i=n.n(o),r=n(67294),a=n(53918),s=n(85893),c=function(t){var e=t.width,n=t.height,o=t.loading,c=t.color,l=(0,r.useState)(),h=l[0],u=l[1],f=(0,a.useTheme)().status;return(0,r.useEffect)(function(){if(h){var t=h.parentElement,o=t.offsetWidth,i=t.offsetHeight;if(e||n)h.style.width=e,h.style.height=n;else{var r=.5*(o<i?o:i);r<12&&(r=12),h.style.width="".concat(r,"px"),h.style.height="".concat(r,"px")}}},[h,e,n]),(0,s.jsx)(d,{ref:function(t){u(t)},className:i()("wrapper-chase",{loading:o}),$background:f[c],$width:e,$height:n,children:(0,s.jsxs)("div",{className:"sk-chase",children:[(0,s.jsx)("div",{className:"sk-chase-dot first"}),(0,s.jsx)("div",{className:"sk-chase-dot"}),(0,s.jsx)("div",{className:"sk-chase-dot"}),(0,s.jsx)("div",{className:"sk-chase-dot"}),(0,s.jsx)("div",{className:"sk-chase-dot"}),(0,s.jsx)("div",{className:"sk-chase-dot"})]})})},d=a.default.div.withConfig({displayName:"Loading__Css",componentId:"sc-1jpsoaq-0"})(["transition:150ms;opacity:0;&.loading{opacity:1;}&.wrapper-chase{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:",";height:",';}.sk-chase{width:100%;height:100%;position:relative;animation:sk-chase 2.5s infinite linear both;}.sk-chase-dot{width:100%;height:100%;position:absolute;left:0;top:0;animation:sk-chase-dot 2s infinite ease-in-out both;}.sk-chase-dot:before{content:"";display:block;width:30%;height:30%;background-color:',";border-radius:100%;animation:sk-chase-dot-before 2s infinite ease-in-out both;}.sk-chase-dot:nth-child(1){animation-delay:-1.1s;}.sk-chase-dot:nth-child(2){animation-delay:-1s;}.sk-chase-dot:nth-child(3){animation-delay:-0.9s;}.sk-chase-dot:nth-child(4){animation-delay:-0.8s;}.sk-chase-dot:nth-child(5){animation-delay:-0.7s;}.sk-chase-dot:nth-child(6){animation-delay:-0.6s;}.sk-chase-dot:nth-child(1):before{animation-delay:-1.1s;}.sk-chase-dot:nth-child(2):before{animation-delay:-1s;}.sk-chase-dot:nth-child(3):before{animation-delay:-0.9s;}.sk-chase-dot:nth-child(4):before{animation-delay:-0.8s;}.sk-chase-dot:nth-child(5):before{animation-delay:-0.7s;}.sk-chase-dot:nth-child(6):before{animation-delay:-0.6s;}@keyframes sk-chase{100%{transform:rotate(360deg);}}@keyframes sk-chase-dot{80%,100%{transform:rotate(360deg);}}@keyframes sk-chase-dot-before{50%{transform:scale(0.4);}100%,0%{transform:scale(1);}}"],function(t){return t.$width},function(t){return t.$height},function(t){var e;return null!==(e=t.$background)&&void 0!==e?e:"white"})},66382:function(t,e,n){n.d(e,{A:function(){return c}});var o=n(87979),i=n(73710),r=n.n(i),a=n(53918),s=n(85893),c=function(t){var e=t.config,n=t.onClick,o=t.imgProps,i=t.imgComponent,r=o.loading;return(0,s.jsxs)(d,{onClick:function(){return n(e)},title:e.title,children:[(0,s.jsxs)("div",{className:"MorePromotion__image",children:[i?i(e):(0,s.jsx)("img",{src:"".concat("https://new.apuestatotal.com","/").concat(e.image),loading:void 0===r?"eager":r,alt:e.title}),(0,s.jsxs)(l,{className:"button-at-hover-juega-aqui",variant:"contained",children:["Juega aqu\xed ",">"]})]}),(0,s.jsxs)("div",{className:"MorePromotion__content",children:[(0,s.jsx)("div",{className:"MorePromotion__contentTop",children:e.title}),(0,s.jsx)("div",{className:"MorePromotion__contentBottom",children:e.body})]})]})},d=a.default.div.withConfig({displayName:"SlideBanner__StyledCard",componentId:"sc-1rik6in-0"})(["display:flex;flex-direction:column;gap:0.5rem;border-radius:12px;overflow:hidden;background:",";box-shadow:",' 0px 3px 6px;flex:1 0 40%;max-width:220px;cursor:pointer;> .MorePromotion__image{overflow:hidden;aspect-ratio:1 / 1.335;position:relative;::after{content:"";top:0;left:0;width:100%;height:100%;position:absolute;background:linear-gradient(to top,rgba(0,0,0,0.884534534),transparent);z-index:1;opacity:0;transition:250ms;}img{object-fit:cover;transition:250ms;}}> .MorePromotion__content{flex:0;display:flex;flex-direction:column;justify-content:space-between;padding:15px;padding-top:5px;gap:8px;cursor:pointer;> div.MorePromotion__contentTop{font-weight:500;font-size:0.85rem;text-transform:uppercase;color:',";}> div.MorePromotion__contentBottom{color:",";display:flex;align-items:center;font-weight:400;font-size:0.8rem;display:block;svg{font-size:1.2rem;}}}&{:hover{> .MorePromotion__image{::after{opacity:1;}img{transform:scale(1.2);}}.button-at-hover-juega-aqui{bottom:40px;opacity:1;z-index:2;transform:translateX(-50%);text-transform:capitalize;}}}"],function(t){return t.theme.casino.slider.background},function(t){return r()(t.theme.casino.slider.shadow,.1)},function(t){return r()(t.theme.casino.slider.contrastText,.9)},function(t){return r()(t.theme.casino.slider.contrastText,.7)}),l=(0,a.default)(o.z).withConfig({displayName:"SlideBanner__ButtonS",componentId:"sc-1rik6in-1"})(["position:absolute;bottom:0;left:50%;white-space:nowrap;transform:translateX(-50%);text-transform:capitalize;width:90%;padding-top:10px;padding-bottom:10px;transition:all 250ms,opacity 100ms;opacity:0;"])},3200:function(t,e,n){n.d(e,{N:function(){return i}});var o=n(27644),i={scrollClickBanner:function(t){var e=t.name,n=t.title;o.f.push({event:"atm.event",eventName:"home_click",title:n,option:e.toLowerCase()})}}},88123:function(t,e){e.Z={src:"/_next/static/media/buscargray.b72eda2c.svg",height:29,width:29}}}]);
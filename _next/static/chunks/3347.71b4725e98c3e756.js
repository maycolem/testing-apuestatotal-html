"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3347,8290],{23347:function(e,t,n){n.r(t);var r=n(50029),o=n(87794),i=n.n(o),a=n(88924),c=n(6885),s=n(10132),l=n(46407),u=n(3200),d=n(6045),f=n(7631),p=n(87979),m=n(53474),h=n(94653),v=n(35041),g=n(66382),b=n(73710),x=n.n(b),y=n(11163),w=n(67294),C=n(53918),E=n(85893),j=function(e){var t,n=e.banners,o=e.title,p=e.href,b=(0,y.useRouter)();(0,d.Z)().session;var x,C=(0,f.Hg)({container:"HOME_CASINO"}).data,j=(0,w.useState)(!1),O=j[0],k=j[1],_=(0,w.useState)(!1),P=_[0],S=_[1],M=function(){return S(!1)},z=function(){S(!0)},N=(x=(0,r.Z)(i().mark(function e(t){return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u.N.scrollClickBanner({name:null!=t&&t.title?null==t?void 0:t.title:"Sin Titulo",title:"casino"}),e.next=3,b.push(t.url);case 3:case"end":return e.stop()}},e)})),function(e){return x.apply(this,arguments)}),B=null!==(t=null==C?void 0:C.banners)&&void 0!==t?t:n,R=l.H["/casino/[provider]/[gameName]"].url,A=l.H["/test/casino-be98867001f70b94097d/proveedor/[id]"].url,I=l.H["/test/casino-be98867001f70b94097d/categoria/[id]"].url;return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(a.Z,{children:[(0,E.jsx)(s.Z,{animatedNoMoreLobbies:O,onClickShowAll:function(){b.push(p)},href:p,title:o,onClickSearch:z}),(0,E.jsx)(c.Z,{setAnimatedNoMoreLobbies:k,children:null==B?void 0:B.map(function(e){var t=e.config,n=e.name;return(0,E.jsx)(g.A,{config:t,onClick:N,imgProps:{loading:"eager"},imgComponent:function(e){return(0,E.jsx)(m.Z,{gifSrc:"".concat("https://new.apuestatotal.com","/").concat(e.image),alt:e.title})}},n)})}),(0,E.jsx)(v.u,{onClose:M,shouldCloseOnBackdrop:!0,show:P,children:function(e){return(0,E.jsx)(h.h,{onClose:e,gamingOptions:{lobby:"CASINO_TODOS",pathnameGame:R,pathnameProvider:A,pathnameTag:I}})}})]})})};t.default=j,C.default.div.withConfig({displayName:"Casino__StyledCard",componentId:"sc-ns5g35-0"})(["display:flex;flex-direction:column;gap:0.5rem;border-radius:12px;overflow:hidden;background:",";box-shadow:",' 0px 3px 6px;flex:1 0 40%;max-width:220px;cursor:pointer;> .MorePromotion__image{overflow:hidden;aspect-ratio:1 / 1.335;position:relative;::after{content:"";top:0;left:0;width:100%;height:100%;position:absolute;background:linear-gradient(to top,rgba(0,0,0,0.884534534),transparent);z-index:1;opacity:0;transition:250ms;}img{object-fit:cover;transition:250ms;}}> .MorePromotion__content{flex:0;display:flex;flex-direction:column;justify-content:space-between;padding:15px;padding-top:5px;gap:8px;cursor:pointer;> div.MorePromotion__contentTop{font-weight:500;font-size:0.85rem;text-transform:uppercase;color:',";}> div.MorePromotion__contentBottom{color:",";display:flex;align-items:center;font-weight:400;font-size:0.8rem;display:block;svg{font-size:1.2rem;}}}&{:hover{> .MorePromotion__image{::after{opacity:1;}img{transform:scale(1.2);}}.button-at-hover-juega-aqui{bottom:40px;opacity:1;z-index:2;transform:translateX(-50%);text-transform:capitalize;}}}"],function(e){return e.theme.casino.slider.background},function(e){return x()(e.theme.casino.slider.shadow,.1)},function(e){return x()(e.theme.casino.slider.contrastText,.9)},function(e){return x()(e.theme.casino.slider.contrastText,.7)}),(0,C.default)(p.z).withConfig({displayName:"Casino__ButtonS",componentId:"sc-ns5g35-1"})(["position:absolute;bottom:0;left:50%;white-space:nowrap;transform:translateX(-50%);text-transform:capitalize;width:90%;padding-top:10px;padding-bottom:10px;transition:all 250ms,opacity 100ms;opacity:0;"])},16845:function(e,t,n){n.d(t,{M:function(){return w}});var r=n(59499),o=n(4730),i=n(70655),a=n(67294),c=n(6717),s=n(8626),l=n(45930),u=0;function d(){var e=u;return u++,e}var f=function(e){var t=e.children,n=e.initial,r=e.isPresent,o=e.onExitComplete,i=e.custom,c=e.presenceAffectsLayout,u=(0,l.h)(p),f=(0,l.h)(d),m=(0,a.useMemo)(function(){return{id:f,initial:n,isPresent:r,custom:i,onExitComplete:function(e){u.set(e,!0);var t=!0;u.forEach(function(e){e||(t=!1)}),t&&(null==o||o())},register:function(e){return u.set(e,!1),function(){return u.delete(e)}}}},c?void 0:[r]);return(0,a.useMemo)(function(){u.forEach(function(e,t){return u.set(t,!1)})},[r]),a.useEffect(function(){r||u.size||null==o||o()},[r]),a.createElement(s.O.Provider,{value:m},t)};function p(){return new Map}var m=n(62134);function h(e){return e.key||""}var v=function(e){var t,n,r,o,s=e.children,l=e.custom,u=e.initial,d=void 0===u||u,p=e.onExitComplete,v=e.exitBeforeEnter,g=e.presenceAffectsLayout,b=void 0===g||g,x=(t=(0,a.useRef)(!1),r=(n=(0,i.CR)((0,a.useState)(0),2))[0],o=n[1],(0,c.z)(function(){return t.current=!0}),(0,a.useCallback)(function(){t.current||o(r+1)},[r])),y=(0,a.useContext)(m.WH);(0,m.Md)(y)&&(x=y.forceUpdate);var w,C,E=(0,a.useRef)(!0),j=(C=[],a.Children.forEach(s,function(e){(0,a.isValidElement)(e)&&C.push(e)}),C),O=(0,a.useRef)(j),k=(0,a.useRef)(new Map).current,_=(0,a.useRef)(new Set).current;if(!function(e,t){e.forEach(function(e){var n=h(e);t.set(n,e)})}(j,k),E.current)return E.current=!1,a.createElement(a.Fragment,null,j.map(function(e){return a.createElement(f,{key:h(e),isPresent:!0,initial:!!d&&void 0,presenceAffectsLayout:b},e)}));for(var P=(0,i.ev)([],(0,i.CR)(j)),S=O.current.map(h),M=j.map(h),z=S.length,N=0;N<z;N++){var B=S[N];-1===M.indexOf(B)?_.add(B):_.delete(B)}return v&&_.size&&(P=[]),_.forEach(function(e){if(-1===M.indexOf(e)){var t=k.get(e);if(t){var n=S.indexOf(e),r=function(){k.delete(e),_.delete(e);var t=O.current.findIndex(function(t){return t.key===e});O.current.splice(t,1),!_.size&&(O.current=j,x(),p&&p())};P.splice(n,0,a.createElement(f,{key:h(t),isPresent:!1,onExitComplete:r,custom:l,presenceAffectsLayout:b},t))}}}),P=P.map(function(e){var t=e.key;return _.has(t)?e:a.createElement(f,{key:h(e),isPresent:!0,presenceAffectsLayout:b},e)}),O.current=P,a.createElement(a.Fragment,null,_.size?P:P.map(function(e){return(0,a.cloneElement)(e)}))},g=n(85893),b=["children"];function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var w=function(e){var t=e.children,n=(0,o.Z)(e,b);return(0,g.jsx)(v,y(y({},n),{},{children:t}))}},35041:function(e,t,n){n.d(t,{u:function(){return f}});var r=n(50029),o=n(87794),i=n.n(o),a=n(16845),c=n(87751),s=n(67294),l=n(73935),u=n(53918),d=n(85893),f=function(e){var t,n=e.show,o=e.onClose,c=e.children,u=e.shouldCloseOnBackdrop,f={hiddenScrollbarBody:function(){var e=window.innerWidth-document.documentElement.clientWidth;document.body.style.paddingRight="".concat(e,"px"),document.body.style.overflow="hidden"},showScrollbarBody:function(){document.body.style.paddingRight="",document.body.style.overflow=""}},v=f.hiddenScrollbarBody,g=f.showScrollbarBody,b=(0,s.useState)(!1),x=(b[0],b[1]),y=(0,s.useRef)();(0,s.useEffect)(function(){var e=document.createElement("div");e.style.zIndex="9999999",e.style.position="relative",document.body.appendChild(e),y.current=e,x(!0)},[]),(0,s.useEffect)(function(){n?v():g()},[n]);var w=(t=(0,r.Z)(i().mark(function e(t){return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u&&o();case 1:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)});return y.current?l.createPortal((0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.M,{exitBeforeEnter:!0,children:n?(0,d.jsxs)(p,{children:[(0,d.jsx)(h,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delay:.05}}},initial:"hidden",animate:"visible",exit:"hidden",onClick:w}),(0,d.jsx)(m,{className:"modal",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delay:.05}}},initial:"hidden",animate:"visible",exit:"hidden",children:c(w)})]}):null})}),y.current):null},p=(0,u.default)("div").withConfig({displayName:"Modal__ModalCss",componentId:"sc-qbplnl-0"})(["height:100vh;width:100vw;height:100dvh;width:100dvw;position:fixed;display:flex;align-items:center;justify-content:center;inset:0;"]),m=(0,u.default)(c.E.div).withConfig({displayName:"Modal__StyledModal",componentId:"sc-qbplnl-1"})(["background:white;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,0.1);position:relative;"]),h=(0,u.default)(c.E.div).withConfig({displayName:"Modal__Backdrop",componentId:"sc-qbplnl-2"})(["position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);opacity:0;"])}}]);
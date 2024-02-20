"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2839],{37825:function(t){t.exports=function(t){return function(e,n){if(!e)return t;"string"==typeof e?i=e:n=e;var i,o=t;return i&&(o+="__"+i),o+(n?Object.keys(n).reduce(function(t,e){var i=n[e];return i&&(t+=" "+("boolean"==typeof i?o+"--"+e:o+"--"+e+"_"+i)),t},""):"")}}},87979:function(t,e,n){n.d(e,{z:function(){return l}});var i=n(94184),o=n.n(i),a=n(76642),s=n(67294),r=n(53918),d=n(85893),l=s.forwardRef(function(t,e){var n=t.color,i=t.type,s=t.children,r=t.loading,l=t.disabled,h=t.onClick,f=t.className,m=t.size,p=t.underline,x=t.id,g=t.fullWidth,v=t.variant;return(0,d.jsxs)(u,{type:void 0===i?"button":i,$color:void 0===n?"primary":n,disabled:l,onClick:h,className:f,$size:void 0===m?"normal":m,$underline:void 0!==p&&p,id:x,$fullWidth:g,$variant:void 0===v?"contained":v,ref:e,children:[(0,d.jsx)(c,{className:o()({hidden:r}),children:s}),r&&(0,d.jsx)(a.g,{loading:!0})]})}),c=r.default.div.withConfig({displayName:"Button__ContentCss",componentId:"sc-qfjn0s-0"})(["&.hidden{opacity:0;}"]),u=r.default.button.withConfig({displayName:"Button__Css",componentId:"sc-qfjn0s-1"})(["padding:1rem;font-size:1rem;font-weight:500;border-radius:0.5rem;position:relative;box-shadow:0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08);&:disabled{opacity:0.2;cursor:not-allowed;pointer-events:none;}"," "," "," ",""],function(t){if(t.$fullWidth)return(0,r.css)(["width:100%;"])},function(t){if(t.$underline)return(0,r.css)(["text-decoration:underline;"])},function(t){switch(t.$color){case"primary":return(0,r.css)(["border:1px solid ",";background:",";color:white;",""],function(t){return t.theme.status.primary},function(t){return t.theme.status.primary},function(){if("outline"===t.$variant)return(0,r.css)(["background:transparent;color:",";"],function(t){return t.theme.status.primary})});case"info":return(0,r.css)(["background:",";border:1px solid ",";color:white;"],function(t){return t.theme.status.info},function(t){return t.theme.status.info});case"secondary":return(0,r.css)(["background:",";border:1px solid ",";color:black;"],function(t){return t.theme.secondary},function(t){return t.theme.secondary});case"success":return(0,r.css)(["background:",";border:1px solid ",";color:white;"],function(t){return t.theme.status.success},function(t){return t.theme.status.success});case"alternate4":return(0,r.css)(["background:",";border:1px solid ",";color:black;"],function(t){return t.theme.status.alternate4},function(t){return t.theme.status.alternate4});case"dark":return(0,r.css)(["background:",";border:1px solid ",";color:white;",""],function(t){return t.theme.status.dark},function(t){return t.theme.status.dark},function(){if("outline"===t.$variant)return(0,r.css)(["background:transparent;color:",";"],function(t){return t.theme.status.dark})});case"light":return(0,r.css)(["background:",";border:1px solid ",";color:black;"],function(t){return t.theme.status.light},function(t){return t.theme.status.alternate4});default:return(0,r.css)(["background:",";border:1px solid ",";color:white;"],function(t){return t.theme.status.primary},function(t){return t.theme.status.primary})}},function(t){switch(t.$size){case"xs":return(0,r.css)(["height:28px;font-size:15px !important;padding:0.25rem 1rem;border-radius:4px;"]);case"small":return(0,r.css)(["padding:0.7rem 1rem;"]);default:return(0,r.css)(["padding:1rem;"])}})},76642:function(t,e,n){n.d(e,{g:function(){return d}});var i=n(94184),o=n.n(i),a=n(67294),s=n(53918),r=n(85893),d=function(t){var e=t.width,n=t.height,i=t.loading,d=t.color,c=(0,a.useState)(),u=c[0],h=c[1],f=(0,s.useTheme)().status;return(0,a.useEffect)(function(){if(u){var t=u.parentElement,i=t.offsetWidth,o=t.offsetHeight;if(e||n)u.style.width=e,u.style.height=n;else{var a=.5*(i<o?i:o);a<12&&(a=12),u.style.width="".concat(a,"px"),u.style.height="".concat(a,"px")}}},[u,e,n]),(0,r.jsx)(l,{ref:function(t){h(t)},className:o()("wrapper-chase",{loading:i}),$background:f[d],$width:e,$height:n,children:(0,r.jsxs)("div",{className:"sk-chase",children:[(0,r.jsx)("div",{className:"sk-chase-dot first"}),(0,r.jsx)("div",{className:"sk-chase-dot"}),(0,r.jsx)("div",{className:"sk-chase-dot"}),(0,r.jsx)("div",{className:"sk-chase-dot"}),(0,r.jsx)("div",{className:"sk-chase-dot"}),(0,r.jsx)("div",{className:"sk-chase-dot"})]})})},l=s.default.div.withConfig({displayName:"Loading__Css",componentId:"sc-1jpsoaq-0"})(["transition:150ms;opacity:0;&.loading{opacity:1;}&.wrapper-chase{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:",";height:",';}.sk-chase{width:100%;height:100%;position:relative;animation:sk-chase 2.5s infinite linear both;}.sk-chase-dot{width:100%;height:100%;position:absolute;left:0;top:0;animation:sk-chase-dot 2s infinite ease-in-out both;}.sk-chase-dot:before{content:"";display:block;width:30%;height:30%;background-color:',";border-radius:100%;animation:sk-chase-dot-before 2s infinite ease-in-out both;}.sk-chase-dot:nth-child(1){animation-delay:-1.1s;}.sk-chase-dot:nth-child(2){animation-delay:-1s;}.sk-chase-dot:nth-child(3){animation-delay:-0.9s;}.sk-chase-dot:nth-child(4){animation-delay:-0.8s;}.sk-chase-dot:nth-child(5){animation-delay:-0.7s;}.sk-chase-dot:nth-child(6){animation-delay:-0.6s;}.sk-chase-dot:nth-child(1):before{animation-delay:-1.1s;}.sk-chase-dot:nth-child(2):before{animation-delay:-1s;}.sk-chase-dot:nth-child(3):before{animation-delay:-0.9s;}.sk-chase-dot:nth-child(4):before{animation-delay:-0.8s;}.sk-chase-dot:nth-child(5):before{animation-delay:-0.7s;}.sk-chase-dot:nth-child(6):before{animation-delay:-0.6s;}@keyframes sk-chase{100%{transform:rotate(360deg);}}@keyframes sk-chase-dot{80%,100%{transform:rotate(360deg);}}@keyframes sk-chase-dot-before{50%{transform:scale(0.4);}100%,0%{transform:scale(1);}}"],function(t){return t.$width},function(t){return t.$height},function(t){var e;return null!==(e=t.$background)&&void 0!==e?e:"white"})},92839:function(t,e,n){n.r(e),n.d(e,{ModalNotifications:function(){return L}});var i=n(9564),o=n(43335),a=n(37825),s=n.n(a),r=n(45889),d=n(69397),l=n(54799),c=n(95013),u=n(94184),h=n.n(u),f=n(41664),m=n.n(f),p=n(67294),x=n(5434),g=n(53918),v=n(85893),y=function(t){var e,n,a,s,l=t.item,c=t.cn,u=(0,p.useState)(!0),f=u[0],g=u[1],y=(0,o.TL)(),_=function(){g(!1),y((0,i.Od)(l.reduxId))},N=null==l?void 0:null===(e=l.banner)||void 0===e?void 0:e.config,C="".concat("https://new.apuestatotal.com","/").concat(null==l?void 0:null===(n=l.banner)||void 0===n?void 0:null===(a=n.config)||void 0===a?void 0:a.image);return f?(0,v.jsx)(k,{className:h()(c()),BackdropComponent:r.Z,BackdropProps:{timeout:500},closeAfterTransition:!0,onClose:_,open:f,children:(0,v.jsxs)(j,{children:[(0,v.jsx)("div",{className:h()(c("close-modal")),children:(0,v.jsx)(w,{onClick:_,children:(0,v.jsx)(x.FU5,{})})}),(0,v.jsxs)(b,{className:h()(c("wrapper")),children:[(0,v.jsx)(m(),{href:null==N?void 0:N.url,target:"_blank",children:(0,v.jsx)("a",{href:null==N?void 0:N.url,target:"_blank",rel:"noreferrer",children:(0,v.jsx)("img",{src:C,alt:null==l?void 0:null===(s=l.banner)||void 0===s?void 0:s.description})})}),null!=N&&N.body?(0,v.jsx)("div",{className:"body",children:null==N?void 0:N.body}):(0,v.jsx)(v.Fragment,{}),null!=N&&N.button_text?(0,v.jsx)(m(),{href:null==N?void 0:N.url,target:"_blank",children:(0,v.jsx)("a",{href:null==N?void 0:N.url,target:"_blank",rel:"noreferrer",children:(0,v.jsx)(d.Z,{variant:"contained",children:null==N?void 0:N.button_text})})}):(0,v.jsx)(v.Fragment,{})]})]})}):(0,v.jsx)(v.Fragment,{})},w=(0,g.default)(l.Z).withConfig({displayName:"ModalNotificationBanner__IconButtonS",componentId:"sc-1kwo5yy-0"})(["&{margin-left:auto;}"]),b=g.default.div.withConfig({displayName:"ModalNotificationBanner__WrapperS",componentId:"sc-1kwo5yy-1"})(["&.modal-notifications__wrapper{display:flex;flex-direction:column;transition:100ms;div.body{padding:1rem 0;}button,a{text-transform:initial;width:initial;line-height:initial;margin:auto;}}"]),k=(0,g.default)(c.Z).withConfig({displayName:"ModalNotificationBanner__Styled",componentId:"sc-1kwo5yy-2"})(["&.modal-notifications{z-index:9999;overflow:auto;display:flex;align-items:center;font-size:13px;}"]),j=g.default.div.withConfig({displayName:"ModalNotificationBanner__StyledModalWrapper",componentId:"sc-1kwo5yy-3"})(["outline:none;background:white;position:relative;z-index:1;padding:2rem;border-radius:10px;margin:auto;display:flex;align-items:center;justify-content:center;flex-direction:column;width:95vw;min-width:320px;max-width:calc(500px + 1vw);height:auto;min-height:auto;overflow:hidden;.modal-notifications__close-modal{width:100%;display:flex;justify-content:flex-end;margin-bottom:10px;svg{cursor:pointer;font-size:30px;}}"]),_=n(84225),N=n(87979),C=n(23870),z=n(51649),I=function(t){var e,n=t.item,a=t.cn,s=(0,p.useState)(!0),d=s[0],l=s[1],c=(0,o.TL)(),u=function(){l(!1),c((0,i.Od)(n.reduxId))},f=null==n?void 0:n.config,x="".concat("https://new.apuestatotal.com","/").concat(f.image);return d?(0,v.jsx)(S,{className:h()(a()),BackdropComponent:r.Z,BackdropProps:{timeout:500},closeAfterTransition:!0,onClose:u,open:d,children:(0,v.jsxs)($,{children:[(0,v.jsx)(B,{className:"icon__closed",onClick:u,children:(0,v.jsx)(z.QAE,{})}),(0,v.jsxs)(M,{className:h()(a("wrapper")),children:[f.image&&(0,v.jsx)(m(),{href:null==f?void 0:f.url,target:"_blank",children:(0,v.jsx)("a",{href:null==f?void 0:f.url,target:"_blank",rel:"noreferrer",children:(0,v.jsx)("img",{src:x,alt:null==n?void 0:null===(e=n.config)||void 0===e?void 0:e.title})})}),(0,v.jsxs)(F,{href:null==f?void 0:f.url,target:"_blank",rel:"noreferrer",children:[(null==f?void 0:f.title)&&(0,v.jsx)("div",{className:"title",children:(0,v.jsx)(C.Z,{fragment:null==f?void 0:f.title})}),(null==f?void 0:f.body)&&(0,v.jsx)("div",{className:"body",children:(0,v.jsx)(C.Z,{fragment:null==f?void 0:f.body})}),(0,v.jsx)("div",{className:"accions",children:null!=f&&f.button_text?(0,v.jsx)(N.z,{variant:"contained",children:null==f?void 0:f.button_text}):(0,v.jsx)(v.Fragment,{})})]})]})]})}):(0,v.jsx)(v.Fragment,{})},B=g.default.div.withConfig({displayName:"ModalNotificationFixed__ButtonIconClosedCss",componentId:"sc-1i5ud14-0"})(["margin-left :auto;color:white;font-size:2.5rem;display:flex;justify-content:center;align-items:center;cursor:pointer;"]),F=g.default.a.withConfig({displayName:"ModalNotificationFixed__ContentBottomCss",componentId:"sc-1i5ud14-1"})(["position:absolute;top:48%;height:52%;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;width:100%;margin:auto;> .body,> .title{width:70%;color:white;display:flex;justify-content:center;}.title *{font-size:clamp(1.7rem,7vw,2.9rem);font-weight:700;","{font-size:2.65rem;}","{font-size:2.45rem;}}> .body *{font-size:clamp(11px,3vw,13px);margin:0;line-height:1.3;}> .body *,> .title *{text-align:center;}> .accions{display:grid;align-items:center;grid-template-columns:1fr;width:70%;> .close{text-align:center;display:flex;align-items:center;justify-content:center;background:transparent;outline:none;color:white;}> .close,>  button{font-weight:500;font-size:clamp(1.25rem,3vw,1.6rem);padding:clamp(0.5rem,3vw,1.1rem) .5rem;","{}}}"],_.q.min_width.desktopXS,_.q.min_width.desktopL,_.q.min_width.desktopXS);(0,g.default)(l.Z).withConfig({displayName:"ModalNotificationFixed__IconButtonS",componentId:"sc-1i5ud14-2"})(["&{margin-left:auto;}"]);var M=g.default.div.withConfig({displayName:"ModalNotificationFixed__WrapperS",componentId:"sc-1i5ud14-3"})(["&.modal-notifications__wrapper{display:flex;flex-direction:column;transition:100ms;width:100%;button,a{text-transform:initial;width:initial;line-height:initial;width:100%;}}"]),S=(0,g.default)(c.Z).withConfig({displayName:"ModalNotificationFixed__Styled",componentId:"sc-1i5ud14-4"})(["&.modal-notifications{z-index:9999;overflow:auto;display:flex;align-items:center;font-size:13px;}"]),$=g.default.div.withConfig({displayName:"ModalNotificationFixed__StyledModalWrapper",componentId:"sc-1i5ud14-5"})(["outline:none;background:white;background:transparent;position:relative;z-index:1;margin:auto;display:flex;align-items:center;justify-content:center;flex-direction:column;width:95vw;min-width:320px;max-width:calc(500px + 1vw);height:auto;min-height:auto;overflow:hidden;.modal-notifications__close-modal{width:100%;display:flex;justify-content:flex-end;svg{cursor:pointer;font-size:30px;}}"]),Z=function(t){var e=t.item,n=t.cn,a=(0,p.useState)(!0),s=a[0],d=a[1],l=(0,o.TL)(),c=function(){d(!1),l((0,i.Od)(e.reduxId))};return s?(0,v.jsx)(W,{className:h()(n()),BackdropComponent:r.Z,BackdropProps:{timeout:500},closeAfterTransition:!0,onClose:c,open:s,children:(0,v.jsxs)(q,{children:[(0,v.jsx)("div",{className:h()(n("close-modal")),children:(0,v.jsx)(T,{onClick:c,children:(0,v.jsx)(x.FU5,{})})}),(0,v.jsx)("div",{className:h()(n("content")),children:(0,v.jsx)("div",{children:null==e?void 0:e.text})})]})}):(0,v.jsx)(v.Fragment,{})},T=(0,g.default)(l.Z).withConfig({displayName:"ModalNotificationText__IconButtonS",componentId:"sc-lhw7ok-0"})(["&{margin-left:auto;}"]),W=(0,g.default)(c.Z).withConfig({displayName:"ModalNotificationText__Styled",componentId:"sc-lhw7ok-1"})(["&.modal-notifications{z-index:9999;overflow:auto;display:flex;align-items:center;font-size:13px;}"]),q=g.default.div.withConfig({displayName:"ModalNotificationText__StyledModalWrapper",componentId:"sc-lhw7ok-2"})(["outline:none;background:white;position:relative;z-index:1;padding:2rem;border-radius:10px;margin:auto;display:flex;align-items:center;justify-content:center;flex-direction:column;width:95vw;min-width:320px;max-width:calc(400px + 1vw);height:auto;min-height:auto;overflow:hidden;","{height:auto;min-height:auto;max-width:400px;}.modal-notifications__close-modal{width:100%;display:flex;justify-content:flex-end;margin-bottom:10px;svg{cursor:pointer;font-size:30px;}}.modal-notifications__content{display:flex;transition:100ms;> div{flex:1 0 100%;&.password{opacity:0;pointer-events:none;visibility:hidden;}&.login{opacity:1;pointer-events:all;visibility:visible;}}}"],_.q.min_width.mobileL),E=s()("modal-notifications"),L=function(){var t=(0,o.CG)(i.GZ).notification;return(null==t?void 0:t.length)===0?(0,v.jsx)(v.Fragment,{}):(0,v.jsx)(v.Fragment,{children:t.map(function(t,e){return"POPUP_FIXED"===t.sub_type?(0,v.jsx)(I,{cn:E,item:t},e):"BANNER"===t.sub_type?(0,v.jsx)(y,{item:t,cn:E},e):(0,v.jsx)(Z,{item:t,cn:E},e)})})}}}]);
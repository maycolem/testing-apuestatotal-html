(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8590],{23003:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/autoexcluido",function(){return t(44115)}])},39709:function(n,e,t){"use strict";t.d(e,{r:function(){return o}});var i=t(50211),r=t(67294),o=function(n){var e=n.PageURL,t=n.PageTitle,o=n.PageCategory,u=(0,i.Z)().user,a=u?"".concat(u.user):null;(0,r.useEffect)(function(){var n;(null===(n=window.optimoveSDK)||void 0===n?void 0:n.API)&&(a?window.optimoveSDK.API.setPageVisit(e,t,o,a):window.optimoveSDK.API.setPageVisit(e,t,o))},[e,t,o,a])}},44115:function(n,e,t){"use strict";t.r(e);var i=t(47568),r=t(7297),o=t(70655),u=t(85893),a=t(39709),s=t(50211),c=t(6767),d=t.n(c),f=t(58115),l=t(11163),h=t(67294),v=t(53918);function w(){var n=(0,r.Z)(["\n    width: 100%;\n    height: 5px;\n    background: ",";\n    position: relative;\n    bottom: 5px;\n    border-radius: 0 0 0.5rem 0.5rem ;\n    animation-name: progress;\n    animation-duration: 15s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n    @keyframes progress {\n        100%{\n            width: 0%;\n        }        \n    }\n"]);return w=function(){return n},n}function m(){var n=(0,r.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n    width: 100%;\n    padding: 14px;\n    > div {\n        width: 100%;\n        max-width: 350px;\n    }\n"]);return m=function(){return n},n}var g=function(){var n=(0,s.Z)(),e=n.resetUserAction,t=n.isUserSelfExcluded,r=n.isUserDisabled,c=n.user,d=(0,l.useRouter)();(0,a.r)({PageURL:window.location.href,PageTitle:"Excluido",PageCategory:"Excluido"}),(0,h.useEffect)(function(){if(!c){d.push("/");return}setTimeout((0,i.Z)(function(){return(0,o.__generator)(this,function(n){switch(n.label){case 0:return(t(c)||r(c))&&(e(),location.reload()),[4,d.push("/")];case 1:return n.sent(),[2]}})}),15e3)},[]);var v=t(c)||r(c);return(0,u.jsx)(x,{children:(0,u.jsxs)("div",{children:[v&&(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(f.b,{severity:"error",children:"Su cuenta esta autoexcluida"})}),(0,u.jsx)(p,{})]})})};e.default=g;var p=v.default.div(w(),function(n){return d()(n.theme.status.error).darken(.3)}),x=v.default.div(m())}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=23003)}),_N_E=n.O()}]);
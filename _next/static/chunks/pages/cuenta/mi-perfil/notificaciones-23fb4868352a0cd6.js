(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3815],{54543:function(e,n,t){"use strict";t.d(n,{T:function(){return c}});var i=t(73710),o=t.n(i);t(67294);var r=t(53918),a=t(5434),s=t(85893),c=function(e){var n=e.text;return(0,s.jsxs)(u,{children:[(0,s.jsx)(d,{children:(0,s.jsx)(a.Tcr,{})}),(0,s.jsx)(l,{children:n})]})},u=r.default.div.withConfig({displayName:"AlertProfile__AlertProfileCss",componentId:"sc-r7bvln-0"})(["width:auto;display:flex;align-content:center;justify-content:center;align-items:center;flex-direction:row;flex-wrap:nowrap;margin:1.2rem;padding:1rem;gap:1rem;border:1px solid ",";border-radius:0.8rem;@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){border:1px solid ",";}"],function(e){return o()(e.theme.contrastText,.1)},function(e){return e.theme.contrastText?o()(e.theme.contrastText,.1):"#ccc"}),d=r.default.div.withConfig({displayName:"AlertProfile__IconContentCss",componentId:"sc-r7bvln-1"})(["display:grid;> svg{fill:",";font-size:1.5rem;}"],function(e){return o()(e.theme.contrastText,.4)}),l=r.default.p.withConfig({displayName:"AlertProfile__Text",componentId:"sc-r7bvln-2"})(["color:",";font-size:clamp(.9rem,1.5vw,1rem);line-height:normal;"],function(e){return o()(e.theme.contrastText,.6)})},23629:function(e,n,t){"use strict";t.d(n,{X:function(){return i},f:function(){return o}});var i={EMAIL:{name:"Contactar por email",type:"CONTACT"},PHONE:{name:"Contactar por tel\xe9fono",type:"CONTACT"},PUSH:{name:"Notificaciones push",type:"NOTIFICATION"},SMS:{name:"Contactar por SMS",type:"CONTACT"}},o=[{periodo:"7 d\xedas",dias:7},{periodo:"15 d\xedas",dias:15},{periodo:"1 mes",dias:30},{periodo:"6 meses",dias:180},{periodo:"Infinito",dias:1803232}]},76967:function(e,n,t){"use strict";t.d(n,{Fm:function(){return m},YG:function(){return p},zy:function(){return f}});var i=t(59499),o=t(73403),r=t(24705),a=t(23629);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach(function(n){(0,i.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var u=function(e){return(null==e?void 0:e.result)==="OK"?e.data:void 0},d=function(e){var n;return(null!==(n=null==e?void 0:e.data)&&void 0!==n?n:[]).filter(function(e){return a.X[e.consent]}).map(function(e){return c(c({},e),a.X[e.consent])})},l=r.ll.injectEndpoints({endpoints:function(e){return{saveUserConsentv2:e.mutation({query:function(e){var n=e.consent,t=e.agree,i=e.session;return{url:"data/saveUserConsent",params:{company:o.j1,session:i,consent:n,agree:t},method:"POST"}},transformResponse:u}),getUserConsentsv2:e.query({query:function(e){var n=e.session;return{url:"data/getUserConsents",params:{company:o.j1,session:n}}},transformResponse:d}),updatePasswordv2:e.mutation({query:function(e){e.company;var n=e.session,t=e.old_password,i=e.new_password;return{url:"data/updatePassword",method:"POST",body:new URLSearchParams({company:o.j1,session:n,old_password:t,new_password:i})}}})}}}),f=l.useSaveUserConsentv2Mutation,m=l.useGetUserConsentsv2Query,p=l.useUpdatePasswordv2Mutation},36631:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return q}});var i=t(50029),o=t(87794),r=t.n(o),a=t(67294),s=t(6045),c=t(68061),u=t(20847),d=t(45993),l=t(84225),f=t(73710),m=t.n(f),p=t(53918),g=t(42447),h=t(41248),x=t(76967),v=function(){var e,n=(0,s.Z)(),t=n.session,i=n.user,o=(0,x.Fm)({company:null==i?void 0:i.company,session:t});return{data:o.data,loading:o.isLoading}},y=t(16835),w=function(){var e=(0,x.zy)();return{saveConsent:(0,y.Z)(e,1)[0]}},j=t(54543),b=t(85893),C=function(){var e,n=(0,a.useState)([]),t=n[0],o=n[1],l=(0,h.I0)(),f=(0,s.Z)().session,m=w().saveConsent,p=v(),x=p.data,y=p.loading;(0,a.useEffect)(function(){o(x||[])},[x]);var C=(0,a.useCallback)((e=(0,i.Z)(r().mark(function e(n,t){return r().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m({consent:n.consent,agree:t,session:f}).unwrap().then(function(){l((0,g.zp)({message:"Se ha actualizado la notificaci\xf3n correctamente",autoHideDuration:3e3,severity:"success",open:!0}))});case 2:case"end":return e.stop()}},e)})),function(n,t){return e.apply(this,arguments)}),[m,f]),S=function(e){return(0,b.jsxs)(T,{children:[(0,b.jsx)("div",{className:"left",children:e.name}),(0,b.jsx)("div",{className:"right",children:(0,b.jsxs)(c.Z,{"aria-labelledby":"demo-row-radio-buttons-group-label",defaultValue:e.agree,name:"row-radio-buttons-group",row:!0,children:[(0,b.jsx)(u.Z,{label:"Si",control:(0,b.jsx)(d.Z,{}),onClick:function(){return C(e,"1")},value:"1"}),(0,b.jsx)(u.Z,{label:"No",control:(0,b.jsx)(d.Z,{}),onClick:function(){return C(e,"0")},value:"0"})]})})]},e.name)};return(0,b.jsxs)(_,{children:[(0,b.jsx)(j.T,{text:"Autorizo que se me notifique de novedades y bonos a trav\xe9s de:"}),(0,b.jsx)(N,{children:(0,b.jsx)(O,{children:(0,b.jsxs)(P,{children:[y?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(I,{marginBottom:"3rem"}),(0,b.jsx)(I,{marginBottom:"3rem"}),(0,b.jsx)(I,{marginBottom:"3rem"}),(0,b.jsx)(I,{marginBottom:"3rem"})]}):null==t?void 0:t.map(S),!t&&(0,b.jsx)("p",{children:"Sin notificaciones"})]})})})]})},_=p.default.div.withConfig({displayName:"Notifications__NotificationCss",componentId:"sc-1nuc52l-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1rem;background:",";","{padding:20px;margin:0 auto;width:100%;}"],function(e){return e.theme.background},l.q.min_width.tabletS),N=p.default.div.withConfig({displayName:"Notifications__BodyContent",componentId:"sc-1nuc52l-1"})(["display:grid;grid-template-columns:auto;gap:1rem;","{display:grid;grid-template-columns:500px;gap:1rem;padding:1rem;}"],l.q.min_width.tabletS),O=p.default.div.withConfig({displayName:"Notifications__FormContent",componentId:"sc-1nuc52l-2"})(["position:relative;display:flex;flex-direction:column;padding:0px;","{padding:10px;}"],l.q.min_width.tabletS),P=p.default.div.withConfig({displayName:"Notifications__PermissionNotifications",componentId:"sc-1nuc52l-3"})(["display:flex;flex-direction:column;p{font-size:1rem;text-align:center;}"]),T=p.default.div.withConfig({displayName:"Notifications__Notification",componentId:"sc-1nuc52l-4"})(["display:flex;align-items:center;justify-content:space-between;gap:2rem;padding:1rem 0;.left{color:",";font-size:clamp(.9rem,1.5vw,1rem);}.rigth{}.MuiRadio-root.Mui-checked{color:",";}"],function(e){return m()(e.theme.contrastText,.6)},function(e){return e.theme.primary}),S=(0,p.keyframes)(["0%{opacity:0.5;}50%{opacity:1;}100%{opacity:0.5;}"]),k=p.default.div.withConfig({displayName:"Notifications__SkeletonPulse",componentId:"sc-1nuc52l-5"})(["display:block;height:100%;width:100%;background:linear-gradient(-90deg,#f0f0f0 0%,#e0e0e0 50%,#f0f0f0 100%);background-size:400% 400%;animation:"," 1.2s ease-in-out infinite;"],S),I=(0,p.default)(k).withConfig({displayName:"Notifications__SkeletonLine",componentId:"sc-1nuc52l-6"})(["&&{width:",";height:",";border-radius:4px;margin-bottom:",";}"],function(e){return e.width||"100%"},function(e){return e.height||"1rem"},function(e){return e.marginBottom||"0.5rem"}),E=t(38312),A=t(83639),z=t(9008),Z=t.n(z),q=function(){var e=(0,h.I0)();return(0,a.useEffect)(function(){e((0,A.t8)(""))},[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(Z(),{children:(0,b.jsx)("title",{children:"Notificaciones | Apuesta Total"})}),(0,b.jsx)(E.o,{children:(0,b.jsx)(C,{})})]})}},63583:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cuenta/mi-perfil/notificaciones",function(){return t(36631)}])}},function(e){e.O(0,[1579,8312,9774,2888,179],function(){return e(e.s=63583)}),_N_E=e.O()}]);
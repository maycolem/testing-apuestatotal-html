(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2409],{67049:function(i,t,n){"use strict";var e=n(66489),o=n(53918),r=n(85893),a=function(i){var t=i.loading,n=i.size,o=i.minHeight,a=(i.color,i.width);return void 0!==t&&t?(0,r.jsx)(d,{$minHeight:void 0===o?"100px":o,$width:void 0===a?"100%":a,children:(0,r.jsx)(e.Z,{sx:{color:"red"},size:void 0===n?30:n})}):null};t.Z=a;var d=o.default.div.withConfig({displayName:"LoadingDefault__Styled",componentId:"sc-t3uly3-0"})(["&{display:flex;align-items:center;justify-content:center;min-height:",";width:",";flex:1;}"],function(i){return i.$minHeight},function(i){return i.$width})},24110:function(i,t,n){"use strict";n.d(t,{N:function(){return d}});var e=n(41664),o=n.n(e),r=n(86893),a=n(85893),d=function(i){var t=i.href;return(0,a.jsx)(o(),{href:t,children:(0,a.jsx)("a",{children:(0,a.jsx)(r.Ao2,{className:"iconS"})})})}},39969:function(i,t,n){"use strict";n.d(t,{D:function(){return c}});var e=n(84225),o=n(23870),r=n(41664),a=n.n(r),d=n(53918),s=n(85893),c=function(i){var t=i.notification;return(0,s.jsxs)(m,{children:[(0,s.jsx)(l,{className:"date",children:t.date}),(0,s.jsxs)(f,{children:[(0,s.jsx)("div",{className:"header",children:(0,s.jsx)(h,{children:(0,s.jsx)(o.Z,{fragment:t.title})})}),(null==t?void 0:t.image)&&(0,s.jsx)("div",{className:"content",children:(0,s.jsx)("figure",{className:"content__image",children:(0,s.jsx)("img",{alt:t.title,src:"".concat("https://new.apuestatotal.com","/").concat(null==t?void 0:t.image)})})}),(0,s.jsx)("div",{className:"description",children:(0,s.jsx)(o.Z,{fragment:t.description})}),t.button&&(0,s.jsx)(a(),{target:"_blank",rel:"noreferrer",href:t.url,passHref:!0,children:(0,s.jsx)(u,{children:t.button})})]})]})},l=d.default.div.withConfig({displayName:"NotificationDetail__DateStyled",componentId:"sc-8j4v1l-0"})(["text-align:start;padding-bottom:1rem;color:#5e5e5e;font-size:clamp(0.75rem,1vw,1rem);letter-spacing:1px;","{text-align:end;padding-bottom:0;}","{font-size:clamp(0.65rem,0.9vw,0.9rem);}"],e.q.min_width.desktopXS,e.q.min_width.desktopS),u=d.default.a.withConfig({displayName:"NotificationDetail__LinkStyled",componentId:"sc-8j4v1l-1"})(["padding:10px;background:",";border-radius:4px;color:white;max-width:fit-content;"],function(i){return i.theme.primary}),m=d.default.div.withConfig({displayName:"NotificationDetail__NotificationDetailStyled",componentId:"sc-8j4v1l-2"})(["padding:1rem;.description{font-size:clamp(1rem,1.5vw,1.5rem);padding:1rem 0;","{font-size:clamp(0.7rem,1.2vw,0.95rem);}}"],e.q.min_width.desktopS),f=d.default.div.withConfig({displayName:"NotificationDetail__GridStyled",componentId:"sc-8j4v1l-3"})(["display:grid;max-width:900px;margin:auto;& .header{display:grid;grid-template-columns:1fr;","{grid-template-columns:2fr 1fr;}}& .content{& .content__image{padding-top:0.5rem;max-width:500px;}}"],e.q.min_width.desktopXS),h=d.default.h2.withConfig({displayName:"NotificationDetail__TitleStyled",componentId:"sc-8j4v1l-4"})(["font-size:clamp(1.25rem,1.75vw,1.75rem);font-weight:400;padding-bottom:0.5rem;","{padding-bottom:0;}","{font-size:clamp(1rem,1.5vw,1.3rem);}"],e.q.min_width.desktopXS,e.q.min_width.desktopS)},57243:function(i,t,n){"use strict";n.d(t,{b:function(){return r}});var e=n(16835),o=n(39442),r=function(){var i=(0,o.zy)();return{setNotified:(0,e.Z)(i,1)[0]}}},39302:function(i,t,n){"use strict";n.d(t,{z:function(){return a}});var e=n(11163),o=n(4034),r=n(39442),a=function(i,t,n){var a,d,s,c,l,u,m,f,h=i||{},p=h.init,g=h.end,v=(t||{}).size,x=(n||{}).skip,_=(0,e.useRouter)();null!==(a=v)&&void 0!==a||(v=20),null!==(d=p)&&void 0!==d||(p=null!==(s=_.query)&&void 0!==s&&s.init?Number(null===(c=_.query)||void 0===c?void 0:c.init):0),null!==(l=g)&&void 0!==l||(g=null!==(u=_.query)&&void 0!==u&&u.end?Number(null===(m=_.query)||void 0===m?void 0:m.end):v),null!==(f=x)&&void 0!==f||(x=!String(p)||!String(g));var w=(0,r.At)({init:p,end:g},{skip:x}),N=w.data,j=w.originalArgs,y=w.isLoading,b=w.isFetching,k=(0,o.l)(j),S=function(i){return null==N?void 0:N.entities[i]};return{data:N,originalArgs:j,isLoading:y,isFetching:b,originalArgsParams:k,findNotificationByMachine:S,size:v,init:p,end:g}}},3439:function(i,t,n){"use strict";n.r(t);var e=n(10253),o=n(67049),r=n(79776),a=n(71843),d=n(24110),s=n(39969),c=n(57243),l=n(39302),u=n(65182),m=n(63992),f=n(11163),h=n(67294),p=n(53918),g=n(85893),v=function(){var i,t=r.K["/cuenta/mis-notificaciones"],n=t.url,p=t.title;(0,a.y)(n);var v=null===(i=(0,f.useRouter)().query)||void 0===i?void 0:i.id,_=(0,c.b)().setNotified,w=(0,l.z)(),N=w.findNotificationByMachine,j=w.isLoading,y=w.originalArgsParams,b=N(v);(0,h.useEffect)(function(){return function(){v&&b&&(null==b?void 0:b.status)==="PENDING"&&_(b.id)}},[b,v]);var k="".concat(n,"?").concat(y);return j?(0,g.jsx)(o.Z,{loading:j}):b?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(e.h,{title:p}),(0,g.jsxs)(u.q,{children:[(0,g.jsx)(m.B,{tabs:r.e}),(0,g.jsxs)(x,{children:[(0,g.jsx)("div",{className:"back-btn-container",children:(0,g.jsx)(d.N,{href:k})}),(0,g.jsx)(s.D,{notification:b})]})]})]}):(0,g.jsx)(g.Fragment,{})};t.default=v;var x=p.default.div.withConfig({displayName:"id__ContentStyled",componentId:"sc-exdrkk-0"})(["padding:1rem;& .back-btn-container{display:grid;& .iconS{font-size:1.2rem;}}"])},64778:function(i,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cuenta/mis-notificaciones/[id]",function(){return n(3439)}])}},function(i){i.O(0,[2912,2654,646,9774,2888,179],function(){return i(i.s=64778)}),_N_E=i.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8922],{88725:function(n,i,t){"use strict";t.d(i,{B:function(){return s}});var e=t(11163),r=t(4034),o=t(39442),s=function(n,i,t){var s,u,a,c,d,l,f,g,v=(0,e.useRouter)(),h=n||{},_=h.init,p=h.end,j=(i||{}).size,m=(t||{}).skip;null!==(s=j)&&void 0!==s||(j=20),null!==(u=_)&&void 0!==u||(_=null!==(a=v.query)&&void 0!==a&&a.init?Number(null===(c=v.query)||void 0===c?void 0:c.init):0),null!==(d=p)&&void 0!==d||(p=null!==(l=v.query)&&void 0!==l&&l.end?Number(null===(f=v.query)||void 0===f?void 0:f.end):j),null!==(g=m)&&void 0!==g||(m=!String(_)||!String(p));var x=(0,o.LP)({init:_,end:p},{skip:m}),N=x.data,b=x.originalArgs,w=x.isLoading,y=x.isFetching,A=(0,r.l)(b),B=function(n){return null==N?void 0:N.entities[n]};return{data:N,originalArgs:b,isLoading:w,isFetching:y,originalArgsParams:A,findNotificationByMachine:B,size:j,init:_,end:p}}},45822:function(n,i,t){"use strict";t.r(i),t.d(i,{default:function(){return j}});var e=t(10253),r=t(79776),o=t(71843),s=t(24590),u=t(51923),a=t(60577),c=t(12539),d=t(88725),l=t(39442),f=t(65182),g=t(63992),v=t(41664),h=t.n(v),_=t(67294),p=t(85893),j=function(){(0,o.y)(),(0,c.P)({lobby:"LOBBY_PRUEBA_ANDREA"});var n=(0,d.B)(),i=n.data,t=n.originalArgsParams,v=n.isLoading,j=n.isFetching,m=n.size,x=n.init,N=n.end,b={total:(0,l.Oq)().data}.total,w=r.K["/cuenta/mis-notificaciones/pendientes"],y=w.title,A=w.url,B=(0,_.useMemo)(function(){if(window.scrollTo({top:0,behavior:"auto"}),!i)return(0,p.jsx)(p.Fragment,{});if(!i.ids.length)return(0,p.jsx)(s.J,{});var n=i.ids,e=i.entities;return n.map(function(n){var i="".concat(A,"/").concat(n,"?").concat(t);return(0,p.jsx)(h(),{href:i,passHref:!0,children:(0,p.jsx)("a",{children:(0,p.jsx)(a.c,{notification:e[n]})})},n)})},[i]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(e.h,{title:y}),(0,p.jsxs)(f.q,{children:[(0,p.jsx)(g.B,{tabs:r.e}),(0,p.jsx)(u.t,{init:x,end:N,total:b,size:m,loading:v||j}),B]})]})}},76979:function(n,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cuenta/mis-notificaciones/pendientes",function(){return t(45822)}])}},function(n){n.O(0,[2013,2912,6281,646,5721,9774,2888,179],function(){return n(n.s=76979)}),_N_E=n.O()}]);
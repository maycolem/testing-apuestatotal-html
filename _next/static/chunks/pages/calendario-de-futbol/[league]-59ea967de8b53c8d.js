(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3540],{69406:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calendario-de-futbol/[league]",function(){return t(59261)}])},69966:function(n,e,t){"use strict";t.d(e,{v:function(){return j}});var r=t(7297),u=t(85893),i=t(73710),a=t.n(i),o=t(41664),c=t.n(o),l=t(11163);t(67294);var s=t(63750),f=t(53918);function d(){var n=(0,r.Z)(["\n    display: flex;\n    align-items: center;\n"]);return d=function(){return n},n}function p(){var n=(0,r.Z)(["\n    color: ",";\n    font-size: 1rem;\n	font-size: clamp(10px, 1.8vw, 16px);\n    font-weight: 500;\n    text-transform: uppercase;\n    &:hover {\n        color: ",";\n    }\n"]);return p=function(){return n},n}function h(){var n=(0,r.Z)(["\n    color: ",";\n    font-weight: 600;\n	font-size: clamp(10px, 1.8vw, 16px);\n    text-transform: uppercase;\n"]);return h=function(){return n},n}function x(){var n=(0,r.Z)(["\n    padding-top: 1.5rem;\n    display: flex;\n	flex-wrap: wrap;\n    align-items: center;\n    font-size: 0.875rem;\n"]);return x=function(){return n},n}function m(){var n=(0,r.Z)(["\n    margin-right: 0.5rem;\n"]);return m=function(){return n},n}var v=function(n){return n.replace(/-/g," ").replace(/^\w/,function(n){return n.toUpperCase()})},g=function(n){var e=n.label,t=n.href,r=n.isLast;return(0,u.jsxs)(w,{children:[r?(0,u.jsx)(b,{children:v(e)}):(0,u.jsx)(c(),{href:t,passHref:!0,children:(0,u.jsx)(_,{children:v(e)})}),!r&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(Z,{}),(0,u.jsx)(s.fmn,{fontSize:"small"}),(0,u.jsx)(Z,{})]})]})},j=function(){var n=(0,l.useRouter)(),e=n.asPath.split("?")[0].split("/");e.shift(),(e=e.filter(function(n){return""!==n})).splice(3,1);var t=n.asPath.split("/").filter(Boolean),r=e.map(function(n,r){var i="/".concat(t.slice(0,r+1).join("/"));return(0,u.jsx)(g,{label:n,href:i,isLast:r===e.length-1},i)});return(0,u.jsx)(y,{children:r})},w=f.default.div(d()),_=f.default.a(p(),function(n){var e=n.theme;return a()(e.contrastText,.7)},function(n){return n.theme.primary}),b=f.default.span(h(),function(n){return n.theme.primary}),y=f.default.nav(x()),Z=f.default.span(m())},59261:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return g}});var r=t(85893),u=t(7037),i=t(69966),a=t(7297),o=t(11163),c=t(67294),l=t(53918),s=t(53100);function f(){var n=(0,a.Z)(["\n    padding: 1rem 0 0;\n    max-width: 1200px;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n"]);return f=function(){return n},n}function d(){var n=(0,a.Z)(["\n    width: 100%;\n    height: 100vh;\n    border: none;\n"]);return d=function(){return n},n}var p=function(){var n=(0,o.useRouter)().query.league,e=(0,c.useMemo)(function(){return s.s.find(function(e){return e.url===n})},[n]),t=(0,c.useMemo)(function(){return(null==e?void 0:e.canal)?"https://at-web-widgets.s3.amazonaws.com/html/v3/index.html?channel=deportes.futbol.".concat(e.canal,"&lang=es_LA"):""},[e]);return(0,r.jsx)(h,{children:t&&(0,r.jsx)(x,{src:t})})},h=l.default.div(f()),x=l.default.iframe(d()),m=t(86253),v=t(88575),g=function(){var n=(0,o.useRouter)().query.league,e=s.s.find(function(e){return e.url===n});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.h,{title:"".concat(null==e?void 0:e.title," | Calendario de F\xfatbol | Informaci\xf3n apuestas deportivas"),description:"Encuentra el calendario de futbol de la ".concat(null==e?void 0:e.title," y m\xe1s en Apuesta Total")}),(0,r.jsx)(m.v,{}),(0,r.jsx)(v.vx,{children:(0,r.jsx)(i.v,{})}),(0,r.jsx)(p,{})]})}}},function(n){n.O(0,[3662,5842,9774,2888,179],function(){return n(n.s=69406)}),_N_E=n.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2548],{9054:function(e,t,n){"use strict";var i=n(67294),o=n(53918),r=n(85893),a=function(e){var t=e.className,n=e.init,o=e.end,a=(0,i.useState)(""),d=a[0],c=a[1],u=(0,i.useState)(""),m=u[0],p=u[1],f=(0,i.useState)(""),h=f[0],g=f[1],x=(0,i.useState)(""),v=x[0],j=x[1];return(0,i.useEffect)(function(){var e=new Date(null==o?void 0:o.replace(" ","T")),t=e.setHours(e.getHours()-5),n=new Date(t).getTime(),i=setInterval(function(){var e=new Date().getTime(),t=n-e;c(Math.floor(t/864e5).toString()),p(Math.floor(t%864e5/36e5).toString()),g(Math.floor(t%36e5/6e4).toString()),j(Math.floor(t%6e4/1e3).toString())},1e3);return function(){clearInterval(i)}},[n,o]),(0,r.jsxs)(s,{className:t,children:[(0,r.jsxs)(l,{children:[(0,r.jsx)("span",{children:d}),(0,r.jsx)("span",{className:"bottom",children:"D\xeda"})]}),(0,r.jsx)("span",{className:"points",children:":"}),(0,r.jsxs)(l,{children:[(0,r.jsx)("span",{children:m}),(0,r.jsx)("span",{className:"bottom",children:"Hora"})]}),(0,r.jsx)("span",{className:"points",children:":"}),(0,r.jsxs)(l,{children:[(0,r.jsx)("span",{children:h}),(0,r.jsx)("span",{className:"bottom",children:"Min."})]}),(0,r.jsx)("span",{className:"points",children:":"}),(0,r.jsxs)(l,{children:[(0,r.jsx)("span",{children:v}),(0,r.jsx)("span",{className:"bottom",children:"Seg."})]})]})};t.Z=a;var s=o.default.div.withConfig({displayName:"TorneoCuentaRegresiva__TorneoCuentaRegresivaS",componentId:"sc-1nyz2qz-0"})(["&{display:grid;grid-template-columns:1fr 0.2fr 1fr 0.2fr 1fr 0.2fr 1fr;align-items:center;border-radius:5px;> .points{text-align:center;}}"]),l=o.default.div.withConfig({displayName:"TorneoCuentaRegresiva__BlockS",componentId:"sc-1nyz2qz-1"})(["font-size:clamp(11px,1.8vw,25px);font-weight:500;text-transform:uppercase;padding:1rem 0;display:flex;flex-direction:column;justify-content:center;align-items:center;> .bottom{font-size:0.5rem;text-transform:capitalize;}"])},87979:function(e,t,n){"use strict";n.d(t,{z:function(){return d}});var i=n(94184),o=n.n(i),r=n(76642),a=n(67294),s=n(53918),l=n(85893),d=a.forwardRef(function(e,t){var n=e.color,i=e.type,a=e.children,s=e.loading,d=e.disabled,m=e.onClick,p=e.className,f=e.size,h=e.underline,g=e.id,x=e.fullWidth,v=e.variant;return(0,l.jsxs)(u,{type:void 0===i?"button":i,$color:void 0===n?"primary":n,disabled:d,onClick:m,className:o()(p,{loading:s,disabled:d}),$size:void 0===f?"normal":f,$underline:void 0!==h&&h,id:g,$fullWidth:x,$variant:void 0===v?"contained":v,ref:t,children:[(0,l.jsx)(c,{className:o()({hidden:s}),children:a}),s&&(0,l.jsx)(r.g,{loading:!0})]})}),c=s.default.div.withConfig({displayName:"Button__ContentCss",componentId:"sc-qfjn0s-0"})(["&.hidden{opacity:0;}"]),u=s.default.button.withConfig({displayName:"Button__Css",componentId:"sc-qfjn0s-1"})(["padding:1rem;font-size:1rem;font-weight:500;border-radius:0.5rem;position:relative;box-shadow:0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08);&.disabled{cursor:not-allowed;pointer-events:none;}"," "," "," ",""],function(e){if(e.$fullWidth)return(0,s.css)(["width:100%;"])},function(e){if(e.$underline)return(0,s.css)(["text-decoration:underline;"])},function(e){switch(e.$color){case"primary":return(0,s.css)(["border:1px solid ",";background:",";color:white;",""],function(e){return e.theme.status.primary},function(e){return e.theme.status.primary},function(){if("outline"===e.$variant)return(0,s.css)(["background:transparent;color:",";"],function(e){return e.theme.status.primary})});case"info":return(0,s.css)(["background:",";border:1px solid ",";color:white;"],function(e){return e.theme.status.info},function(e){return e.theme.status.info});case"secondary":return(0,s.css)(["background:",";border:1px solid ",";color:black;"],function(e){return e.theme.secondary},function(e){return e.theme.secondary});case"success":return(0,s.css)(["background:",";border:1px solid ",";color:white;"],function(e){return e.theme.status.success},function(e){return e.theme.status.success});case"alternate4":return(0,s.css)(["background:",";border:1px solid ",";color:black;"],function(e){return e.theme.status.alternate4},function(e){return e.theme.status.alternate4});case"dark":return(0,s.css)(["background:",";border:1px solid ",";color:white;",""],function(e){return e.theme.status.dark},function(e){return e.theme.status.dark},function(){if("outline"===e.$variant)return(0,s.css)(["background:transparent;color:",";"],function(e){return e.theme.status.dark})});case"light":return(0,s.css)(["background:",";border:1px solid ",";color:black;"],function(e){return e.theme.status.light},function(e){return e.theme.status.alternate4});default:return(0,s.css)(["background:",";border:1px solid ",";color:white;"],function(e){return e.theme.status.primary},function(e){return e.theme.status.primary})}},function(e){switch(e.$size){case"xs":return(0,s.css)(["height:28px;font-size:15px !important;padding:0.25rem 1rem;border-radius:4px;"]);case"small":return(0,s.css)(["padding:0.7rem 1rem;"]);default:return(0,s.css)(["padding:1rem;"])}})},76642:function(e,t,n){"use strict";n.d(t,{g:function(){return l}});var i=n(94184),o=n.n(i),r=n(67294),a=n(53918),s=n(85893),l=function(e){var t=e.width,n=e.height,i=e.loading,l=e.color,c=(0,r.useState)(),u=c[0],m=c[1],p=(0,a.useTheme)().status;return(0,r.useEffect)(function(){if(u){var e=u.parentElement,i=e.offsetWidth,o=e.offsetHeight;if(t||n)u.style.width=t,u.style.height=n;else{var r=.5*(i<o?i:o);r<12&&(r=12),u.style.width="".concat(r,"px"),u.style.height="".concat(r,"px")}}},[u,t,n]),(0,s.jsx)(d,{ref:function(e){m(e)},className:o()("wrapper-chase",{loading:i}),$background:p[l],$width:t,$height:n,children:(0,s.jsxs)("div",{className:"sk-chase",children:[(0,s.jsx)("div",{className:"sk-chase-dot first"}),(0,s.jsx)("div",{className:"sk-chase-dot"}),(0,s.jsx)("div",{className:"sk-chase-dot"}),(0,s.jsx)("div",{className:"sk-chase-dot"}),(0,s.jsx)("div",{className:"sk-chase-dot"}),(0,s.jsx)("div",{className:"sk-chase-dot"})]})})},d=a.default.div.withConfig({displayName:"Loading__Css",componentId:"sc-1jpsoaq-0"})(["transition:150ms;opacity:0;&.loading{opacity:1;}&.wrapper-chase{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:",";height:",';}.sk-chase{width:100%;height:100%;position:relative;animation:sk-chase 2.5s infinite linear both;}.sk-chase-dot{width:100%;height:100%;position:absolute;left:0;top:0;animation:sk-chase-dot 2s infinite ease-in-out both;}.sk-chase-dot:before{content:"";display:block;width:30%;height:30%;background-color:',";border-radius:100%;animation:sk-chase-dot-before 2s infinite ease-in-out both;}.sk-chase-dot:nth-child(1){animation-delay:-1.1s;}.sk-chase-dot:nth-child(2){animation-delay:-1s;}.sk-chase-dot:nth-child(3){animation-delay:-0.9s;}.sk-chase-dot:nth-child(4){animation-delay:-0.8s;}.sk-chase-dot:nth-child(5){animation-delay:-0.7s;}.sk-chase-dot:nth-child(6){animation-delay:-0.6s;}.sk-chase-dot:nth-child(1):before{animation-delay:-1.1s;}.sk-chase-dot:nth-child(2):before{animation-delay:-1s;}.sk-chase-dot:nth-child(3):before{animation-delay:-0.9s;}.sk-chase-dot:nth-child(4):before{animation-delay:-0.8s;}.sk-chase-dot:nth-child(5):before{animation-delay:-0.7s;}.sk-chase-dot:nth-child(6):before{animation-delay:-0.6s;}@keyframes sk-chase{100%{transform:rotate(360deg);}}@keyframes sk-chase-dot{80%,100%{transform:rotate(360deg);}}@keyframes sk-chase-dot-before{50%{transform:scale(0.4);}100%,0%{transform:scale(1);}}"],function(e){return e.$width},function(e){return e.$height},function(e){var t;return null!==(t=e.$background)&&void 0!==t?t:"white"})},36844:function(e,t,n){"use strict";n.d(t,{f:function(){return o}});var i=n(32912),o=function(e){if(!e)return"";var t=new Date(e.replace(" ","T"));t.setHours(t.getHours()-5);var n=(0,i.Z)(t,"dd-MM-yyyy hh:mm aaaaa'm'").replace("12:00 am","00:00 pm");return"".concat(n)}},78094:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ev}});var i,o,r=n(6045),a=n(59499),s=n(7631);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}var d=function(e){var t=e.tournament,n=e.session;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},(0,s.FV)({tournament:t,session:n},{skip:!t}))},c=n(11163),u=n(4730),m=n(50029),p=n(87794),f=n.n(p);n(46407);var h=n(24705),g=n(82771),x=n(84225),v=n(9669),j=n.n(v),b=n(23870),w=n(73710),y=n.n(w),_=n(67294),N=n(5434),k=n(41248),I=n(53918),T=n(16835),C=n(36844),S=n(56644),D=n(9054),O=n(1691),z=n(87979),P=n(85893),Z=function(e){var t=e.tournament,n=e.title,i=e.init,o=e.end,a=e.winners,s=e.prize,l=e.minAmount,d=e.minRounds,c=e.to_be_enrolled,u=void 0===c||c,p=(0,k.I0)(),g=(0,h.Ks)(),x=(0,T.Z)(g,2),v=x[0],j=x[1].isLoading,b=(0,_.useState)(!u),w=b[0],y=b[1],N=(0,r.Z)(),I=N.user;N.matchesInTheListsGroups,(0,_.useEffect)(function(){y(!u)},[u,I]);var D,Z=new Date,M=new Date(null==o?void 0:o.replace(" ","T"));return M.setHours(M.getHours()-5),(0,P.jsxs)(L,{children:[(0,P.jsx)(A,{className:"title",children:n}),(0,P.jsxs)(q,{className:"premio",children:[(0,P.jsx)("div",{className:"top",children:"Fondo de premio"}),(0,P.jsxs)("div",{className:"bottom",children:[Intl.NumberFormat("es-PE",{maximumFractionDigits:2,minimumFractionDigits:2}).format(Number(s)/100)," ",(0,P.jsx)("span",{children:"PEN"})]})]}),M<Z?(0,P.jsx)(O.Z,{severity:"error",children:"Torneo finalizado"}):(0,P.jsx)(F,{className:"timer",end:o,init:i}),(0,P.jsxs)($,{className:"ganadores",children:[(0,P.jsx)("span",{className:"top",children:"Ganadores"}),(0,P.jsx)("span",{className:"bottom",children:a})]}),(0,P.jsx)(E,{className:"unirme",children:M<Z?null:null!=I&&I.session?(0,P.jsx)(z.z,{disabled:w||j,fullWidth:!0,loading:j,onClick:(0,m.Z)(f().mark(function e(){var n,i;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v({session:null==I?void 0:I.session,tournament:t});case 2:(null==(i=e.sent)?void 0:null===(n=i.data)||void 0===n?void 0:n.result)==="OK"&&y(!0);case 4:case"end":return e.stop()}},e)})),variant:"contained",size:"small",children:w?"Ya est\xe1s unido":"Unirme ahora"}):(0,P.jsx)(z.z,{fullWidth:!0,loading:j,onClick:function(){p((0,S.A_)())},variant:"contained",size:"small",children:"Unirme ahora"})}),(0,P.jsxs)($,{className:"date-init",children:[(0,P.jsx)("span",{className:"top",children:"Fecha inicio"}),i&&(0,P.jsx)("span",{className:"bottom",children:(0,C.f)(i)})]}),(0,P.jsxs)($,{className:"date",children:[(0,P.jsx)("span",{className:"top",children:"Fecha fin"}),o&&(0,P.jsx)("span",{className:"bottom",children:(0,C.f)(o)})]}),(0,P.jsxs)($,{className:"requisitos",children:[(0,P.jsx)("span",{className:"top",children:"Requisitos para clasificar"}),(0,P.jsxs)("span",{className:"bottom",children:[d," Jugadas desde S/",(l/100).toFixed(2)]})]})]})},E=I.default.div.withConfig({displayName:"TorneoDetailInfoContent__AccionS",componentId:"sc-ognggu-0"})(["&{> button{display:block;text-transform:lowercase;::first-letter{text-transform:uppercase;}}.Mui-disabled{background:"," !important;color:"," !important;}}"],function(e){return y()(e.theme.primary,.2)},function(e){return y()(e.theme.contrastText,.4)}),$=I.default.div.withConfig({displayName:"TorneoDetailInfoContent__RowS",componentId:"sc-ognggu-1"})(["&{display:flex;flex-direction:column;justify-content:center;gap:3px;> .top{font-size:0.7rem;}> .bottom{font-size:0.9rem;font-weight:500;color:",";}}"],function(e){return y()(e.theme.contrastText,.7)}),F=(0,I.default)(D.Z).withConfig({displayName:"TorneoDetailInfoContent__TimerS",componentId:"sc-ognggu-2"})(["display:grid;grid-template-columns:1fr 0.5fr 1fr 0.5fr 1fr 0.5fr 1fr;> .points{text-align:center;align-self:center;}"]),A=I.default.div.withConfig({displayName:"TorneoDetailInfoContent__TitleTorneoS",componentId:"sc-ognggu-3"})(["font-size:1.3rem;font-weight:500;text-transform:uppercase;"]),q=I.default.div.withConfig({displayName:"TorneoDetailInfoContent__FondoPremioS",componentId:"sc-ognggu-4"})(["&{display:flex;flex-direction:column;justify-content:center;gap:3px;> .top{font-size:0.7rem;}> .bottom{font-size:1.2rem;font-weight:500;color:",";> span{font-weight:300;}}","{> .bottom{font-size:calc(1.3rem + 0.1vw);}}","{> .bottom{font-size:calc(1.5rem + 0.2vw);}}}"],function(e){return e.theme.primary},x.q.min_width.tabletL,x.q.min_width.desktopS),L=I.default.div.withConfig({displayName:"TorneoDetailInfoContent__ContentS",componentId:"sc-ognggu-5"})(["&{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;","{grid-column:span 2;}","{grid-template-columns:repeat(2,1fr);> .banner,> .details{order:-1;}> .games{grid-column:span 2;}> .puesto,> .more-datail{grid-column:span 2;}}","{> .banner{padding-right:2rem;}> .more-datail{width:100%;max-width:1100px;margin:auto;}> .premios{width:100%;max-width:450px;margin-left:auto;}> .clasificacion{width:100%;max-width:450px;margin-right:auto;}}}"],A,x.q.min_width.tabletL,x.q.min_width.desktopXS),M=function(e){return new Intl.NumberFormat("es-PE",{minimumFractionDigits:0,maximumFractionDigits:0}).format(e)},R=function(e){var t=e.totalPLayers,n=e.position,i=e.isEnrolled,o=e.userPosition,r=e.userAmount,a=(0,k.v9)(g.np);return(0,P.jsxs)(W,{children:[(0,P.jsxs)(H,{className:"estado",children:[(0,P.jsx)("div",{className:"top top-estado",children:"Estado"}),(0,P.jsx)("div",{className:"bottom en-vivo bottom-estado",children:a&&i?0>Number(n)?"NO CLASIFICADO":"CLASIFICADO":"NO CLASIFICADO"})]}),(0,P.jsxs)(H,{className:"puesto puesto-icono",children:[(0,P.jsx)("div",{className:"top top-puesto",children:(0,P.jsx)(N.feU,{})}),(0,P.jsx)("div",{className:"bottom bottom-puesto",children:(0,P.jsxs)("div",{children:["Tienes ",M(r)," puntos",o>-1?(0,P.jsxs)("span",{className:"puesto-bold",children:[" y est\xe1s en el puesto ",o]}):""]})})]}),(0,P.jsxs)(H,{className:"jugadores",children:[(0,P.jsx)("div",{className:"top top-jugadores",children:"JUGADORES"}),(0,P.jsx)("div",{className:"bottom bottom-jugadores",children:t})]})]})},H=I.default.div.withConfig({displayName:"TorneoDetailMoreDetails__RowS",componentId:"sc-101p54d-0"})(["&{display:flex;flex-direction:column;> .top{font-size:0.6rem;text-transform:uppercase;padding:0 0.5rem;min-height:30px;color:",";overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;justify-content:center;&.top-estado{justify-content:start;}&.top-jugadores{justify-content:end;}}> .bottom{flex:1;background:",";padding:0.5rem;min-height:auto;display:flex;align-items:center;justify-content:center;min-height:30px;color:",";&.en-vivo{color:",";}&.bottom-estado{justify-content:start;}&.bottom-jugadores{justify-content:end;}}","{> .top,> .bottom{min-height:50px;}}}"],function(e){return y()(e.theme.contrastText,.7)},function(e){return e.theme.background},function(e){return y()(e.theme.contrastText,.6)},function(e){return e.theme.primary},x.q.min_width.tabletS),W=I.default.div.withConfig({displayName:"TorneoDetailMoreDetails__TorneoDetailMoreDetailsS",componentId:"sc-101p54d-1"})(["&{display:grid;grid-template-columns:1fr 1fr;> .estado{order:-2;}> .jugadores{order:-1;text-align:right;}> .puesto{grid-column:span 2;}> .puesto-icono{text-align:center;svg{font-size:2rem;}}","{grid-template-columns:1fr 1fr 1fr;> .puesto{grid-column:span 1;}> .jugadores{order:initial;text-align:right;}}","{grid-template-columns:1fr 1fr 1fr;}}"],x.q.min_width.tabletS,x.q.min_width.tabletL),U=n(81659),B=n(98396),X=n(63083),G=n(36830),J=n(61250),K=function(e){var t=e.title,n=e.icon,i=e.haveId,o=e.ranking,r=(0,B.Z)(x.q.min_width.tabletL),a=(0,_.useState)(20),s=a[0],l=a[1],d=(0,_.useState)(!1),c=d[0],u=d[1];(0,_.useEffect)(function(){r&&u(r)},[r]);var m,p=function(){l(s+20)};return(0,P.jsxs)(Q,{expanded:c,onChange:function(e,t){u(!!t)},children:[(0,P.jsx)(ee,{$tabletL:r,"aria-controls":"panel1bh-content",expandIcon:r?null:(0,P.jsx)(N.x06,{}),id:"panel1bh-header",children:(0,P.jsxs)(et,{children:[(0,P.jsx)(n,{className:"left-icon"}),(0,P.jsxs)(en,{$haveId:i,children:[(0,P.jsx)("span",{children:t}),i&&(0,P.jsx)("span",{children:"Puntos"})]})]})}),(0,P.jsx)(X.Z,{children:(0,P.jsx)(Y,{$haveId:i,children:(0,P.jsx)(U.Z,{onEnd:p,autoHeightMax:270,overlay:!1,children:(void 0===o?[]:o).slice(0,s).map(function(e,t){var n=e.position,o=e.amount,r=e.prize_amount,a=e.from_position,s=e.to_position,l=e.user,d=e.prize_promotion;return(0,P.jsxs)("div",{className:"premio-lugar",children:[(0,P.jsxs)("div",{className:"left",children:[i&&(0,P.jsx)(V,{children:n}),null==l?void 0:l.split(".")[1],(0,P.jsxs)(V,{children:[a," ",a!==s?"- ".concat(s):""]})]}),(0,P.jsx)("div",{className:"right",children:i?M(o):r?new Intl.NumberFormat("es-PE",{style:"currency",currency:"PEN",maximumFractionDigits:2}).format(r/100):d})]},"scroll-".concat(t))})})})})]})},V=I.default.div.withConfig({displayName:"TorneoDetailPremios__IdS",componentId:"sc-1cibu6j-0"})(["display:inline-block;padding-left:0.5rem;"]),Y=I.default.div.withConfig({displayName:"TorneoDetailPremios__ContentS",componentId:"sc-1cibu6j-1"})(['> div > div:first-of-type{display:flex;flex-direction:column;gap:0.2rem;> .premio-lugar{display:flex;justify-content:space-between;> .left{font-feature-settings:"tnum";','}> .right{font-feature-settings:"tnum";}}}'],function(e){if(e.$haveId)return(0,I.css)(["display:grid;grid-template-columns:70px 1fr;"])}),Q=(0,I.default)(G.Z).withConfig({displayName:"TorneoDetailPremios__AccordionS",componentId:"sc-1cibu6j-2"})(["&{overflow:hidden;border:1px solid ",";border-radius:8px !important;margin:0 !important;box-shadow:none !important;min-height:100%;color:"," !important;}"],function(e){var t,n,i;return null==e?void 0:null===(t=e.theme)||void 0===t?void 0:null===(n=t.palette)||void 0===n?void 0:null===(i=n.alternate8)||void 0===i?void 0:i.main},function(e){return y()(e.theme.contrastText,.7)}),ee=(0,I.default)(J.Z).withConfig({displayName:"TorneoDetailPremios__AccordionSummaryS",componentId:"sc-1cibu6j-3"})(["&{min-height:50px !important;> .MuiAccordionSummary-content{margin:0 !important;}svg{color:",";font-size:1.5rem;}","}"],function(e){return y()(e.theme.contrastText,.7)},function(e){if(e.$tabletL)return(0,I.css)(["background:",";border-bottom:1px solid ",";"],function(e){return e.theme.alternate17},function(e){return e.theme.alternate8})}),et=I.default.div.withConfig({displayName:"TorneoDetailPremios__ContentTopS",componentId:"sc-1cibu6j-4"})(["&{display:flex;justify-content:flex-start;align-items:center;width:initial;gap:1rem;flex:1;> .left-icon{color:",";}}"],function(e){return e.theme.contrastText}),en=I.default.div.withConfig({displayName:"TorneoDetailPremios__TitleS",componentId:"sc-1cibu6j-5"})(["&{font-weight:500;color:",";flex:1;","}"],function(e){return e.theme.contrastText},function(e){if(e.$haveId)return(0,I.css)(["padding-left:30px;padding-right:10px;display:flex;justify-content:space-between;"])}),ei=["prize_amount","prize_promotion"];function eo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function er(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?eo(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eo(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ea=function(e){var t,n,i,o,r,a,l,d,c=e.tournament,p=(0,s.jj)({tournament:null==c?void 0:c.tournament},{skip:!(null!=c&&c.tournament)}).data,x=(0,k.v9)(g.np),v=(0,h.C$)({session:null==x?void 0:x.session,tournament:null==c?void 0:c.tournament},{skip:!x||!(null!=c&&c.tournament)}).data,w=!(null!=c&&c.to_be_enrolled),y=(null==c?void 0:c.total_players)||0,I=null==p?void 0:null===(t=p.data)||void 0===t?void 0:t.filter(function(e){return e.alias===(null==x?void 0:x.alias)})[0],T=null!==(n=null==I?void 0:I.amount)&&void 0!==n?n:0,C=null==I?void 0:I.position,S=(0,_.useState)([]),D=(S[0],S[1]);return(0,_.useEffect)(function(){var e,t,n;null!=c&&null!==(e=c.prizes)&&void 0!==e&&e.length&&Promise.all(null==c?void 0:null===(n=c.prizes)||void 0===n?void 0:n.map((t=(0,m.Z)(f().mark(function e(t){var n,i,o,r,a,s,l,d;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.prize_amount,i=t.prize_promotion,o=(0,u.Z)(t,ei),!(!n&&i)){e.next=9;break}return e.next=4,j().get("".concat("https://wallet.apuestatotal.com/api","/contents/getPromotionDetails"),{params:{company:"ATP",promotion:i}});case 4:return d=null==(l=e.sent)?void 0:null===(r=l.data)||void 0===r?void 0:null===(a=r.details)||void 0===a?void 0:null===(s=a.cms)||void 0===s?void 0:s.summary_title,e.abrupt("return",er(er({},o),{},{prize_promotion:d}));case 9:return e.abrupt("return",er({prize_amount:n,prize_promotion:i},o));case 10:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)}))).then(function(e){D(e)})},[null==c?void 0:c.prizes]),(0,P.jsxs)(el,{children:[(0,P.jsx)(es,{className:"banner",children:(0,P.jsx)("div",{className:"TorneoDetailInfoS_wrapper",children:(0,P.jsx)("a",{href:null==c?void 0:null===(i=c.cms)||void 0===i?void 0:i.summary_url,target:"_blank",rel:"noreferrer",children:(0,P.jsx)("img",{alt:null==c?void 0:null===(o=c.cms)||void 0===o?void 0:o.title,src:"".concat("https://new.apuestatotal.com","/").concat(null==c?void 0:null===(r=c.cms)||void 0===r?void 0:r.summary_image)})})})}),(0,P.jsx)("div",{className:"details",children:(0,P.jsx)(Z,{end:null==c?void 0:c.end_date,init:null==c?void 0:c.init_date,minAmount:null==c?void 0:c.min_amount,minRounds:null==c?void 0:c.min_rounds,prize:null==c?void 0:c.prize,title:null==c?void 0:null===(a=c.cms)||void 0===a?void 0:a.summary_title,to_be_enrolled:null==c?void 0:c.to_be_enrolled,tournament:null===(l=null==c?void 0:c.tournament)||void 0===l||l,winners:null==c?void 0:c.winners})}),x&&(null==v?void 0:v.result)!=="error"&&w&&(0,P.jsx)("div",{className:"more-datail",children:(0,P.jsx)(R,{isEnrolled:w,position:C,totalPLayers:y,userAmount:T,userPosition:C})}),(0,P.jsx)("div",{className:"premios",children:(0,P.jsx)(K,{icon:N.a_2,ranking:null==c?void 0:c.prizes,title:"Premios"})}),(0,P.jsx)("div",{className:"clasificacion",children:(0,P.jsx)(K,{haveId:!0,icon:N.feU,ranking:null==p?void 0:p.data,title:"Tabla de clasificaci\xf3n"})}),(0,P.jsx)("div",{className:"term_condition",children:(0,P.jsx)(b.Z,{fragment:null==c?void 0:null===(d=c.cms)||void 0===d?void 0:d.terms})})]})},es=I.default.div.withConfig({displayName:"TorneoDetailInfo__BannerStyled",componentId:"sc-k8b6gy-0"})(["display:flex;> .TorneoDetailInfoS_wrapper{flex:1;> img{object-fit:contain;object-fit:initial;height:initial;backdrop-filter:blur(20px);cursor:pointer;}}"]),el=I.default.div.withConfig({displayName:"TorneoDetailInfo__TorneoDetailInfoS",componentId:"sc-k8b6gy-1"})(["&{display:grid;grid-template-columns:repeat(1,1fr);gap:1rem;> .term_condition{grid-column:span 1;overflow:hidden;> div > table{color:",";background:",";}}","{grid-template-columns:repeat(2,1fr);> .banner,> .details{order:-1;}> .games{grid-column:span 2;}> .puesto,> .more-datail{grid-column:span 2;}> .term_condition{grid-column:span 2;}}","{> .banner{}> .more-datail{width:100%;max-width:1100px;margin:auto;}> .premios{width:100%;max-width:450px;margin-left:auto;}> .clasificacion{width:100%;max-width:450px;margin-right:auto;}}}"],function(e){return y()(e.theme.contrastText,.7)},function(e){return e.theme.layout.footer.background},x.q.min_width.tabletL,x.q.min_width.desktopXS),ed=n(22054),ec=n(71383),eu=n(53918).default,em=function(){return{Torneo:eu.div(i||(i=(0,ec.Z)(["\n            padding: 1.2rem 0;\n            display: flex;\n            flex-direction: column;\n            gap: 1rem;\n            max-width: 1100px;\n            margin: auto;\n            width: 100%;\n        "]))),Details:eu.div(o||(o=(0,ec.Z)(["\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 10px;\n            > div {\n                grid-column: span 2;\n            }\n        "])))}},ep=function(){return(0,P.jsxs)(ef.Torneo,{children:[(0,P.jsx)(ed.Z,{animation:"wave",height:200,variant:"rounded"}),(0,P.jsx)(ed.Z,{animation:"wave",height:40,variant:"rounded"}),(0,P.jsxs)(ef.Details,{children:[(0,P.jsx)(ed.Z,{animation:"wave",height:40,variant:"rounded"}),(0,P.jsx)(ed.Z,{animation:"wave",height:40,variant:"rounded"}),(0,P.jsx)(ed.Z,{animation:"wave",height:40,variant:"rounded"}),(0,P.jsx)(ed.Z,{animation:"wave",height:40,variant:"rounded"}),(0,P.jsx)(ed.Z,{animation:"wave",height:40,variant:"rounded"})]}),(0,P.jsx)(ed.Z,{animation:"wave",height:40,variant:"rounded"}),(0,P.jsx)(ed.Z,{animation:"wave",height:30,variant:"rounded"}),(0,P.jsx)(ed.Z,{animation:"wave",height:30,variant:"rounded"}),(0,P.jsx)(ed.Z,{animation:"wave",height:100,variant:"rounded"}),(0,P.jsx)(ed.Z,{animation:"wave",height:100,variant:"rounded"})]})},ef=em(),eh=function(){var e,t=(0,c.useRouter)(),n=null==t?void 0:null===(e=t.query)||void 0===e?void 0:e.nameTorneo,i=d({tournament:n,session:(0,r.Z)().session}),o=i.isLoading,a=i.isFetching,s=i.data,l=(null==s?void 0:s.tournament)||{},u=function(){return(0,P.jsx)(eg.Torneo,{children:(0,P.jsx)(ea,{tournament:l})})};return o||a?(0,P.jsx)(ep,{}):l?(0,P.jsx)(u,{}):(0,P.jsx)(P.Fragment,{})},eg=em(),ex=n(85622),ev=function(){var e=(0,_.useState)(!0),t=e[0],n=e[1];return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(ej,{children:(0,P.jsx)(ex.Z,{show:t,setShow:n,fragment:"INCIDENCIATORNEO"})}),(0,P.jsx)(eh,{})]})},ej=I.default.div.withConfig({displayName:"nameTorneo__AnuncioCss",componentId:"sc-3dj6sd-0"})(["position:relative;right:14px;width:calc(100% + 28px);"])},71920:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/torneos/[nameTorneo]",function(){return n(78094)}])}},function(e){e.O(0,[2912,3632,3137,4799,9774,2888,179],function(){return e(e.s=71920)}),_N_E=e.O()}]);
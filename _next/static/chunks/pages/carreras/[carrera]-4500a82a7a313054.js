(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4569],{75883:function(e,n,t){"use strict";var i=t(5434),r=t(53918),a=t(85893),s=function(e){var n=e.label;return(0,a.jsxs)(o,{children:[(0,a.jsx)("span",{children:void 0===n?"No hay datos":n}),(0,a.jsx)(i.TLh,{})]})};n.Z=s;var o=r.default.div.withConfig({displayName:"NotData__Styled",componentId:"sc-1pbhqze-0"})(["display:flex;align-items:center;min-height:100px;justify-content:center;gap:8px;color:",";> svg{font-size:1.5rem;}"],function(e){return e.theme.alternate16})},37930:function(e,n,t){"use strict";function i(e){if(e)return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z\s]/g,"")}t.d(n,{K:function(){return i}})},65174:function(e,n,t){"use strict";t.d(n,{o:function(){return c}});var i=t(50029),r=t(87794),a=t.n(r),s=t(85260),o=t(37930),l=t(7631),d=t(47583),c=function(e){var n,t,r,c,u,m=e.lobby,p=e.session,f=(0,o.K)("BETTING"),h=(0,l.hI)({lobby:m,session:p}),v=null==h?void 0:null===(n=h.data)||void 0===n?void 0:n.filter(function(e){var n,t=null===(n=e.end_date)||void 0===n?void 0:n.toString(),i=new Date(null==t?void 0:t.replace(" ","T"));i.setHours(i.getHours()-5);var r=new Date;return r.setHours(r.getHours()-5),i>r}),x=null==v?void 0:v.filter(function(e){var n;return!(null!==(n=(0,o.K)(e.type))&&void 0!==n&&n.includes(f))})[0],g=null==x?void 0:x.tournament,j=(null==x?void 0:null===(t=x.cms)||void 0===t?void 0:t.summary_title)||"sin t\xedtulo",w=null==x?void 0:x.init_date,_=null==x?void 0:x.end_date,N=(0,l.FV)({tournament:g,session:p},{skip:!g}),y=(u=(0,i.Z)(a().mark(function e(){return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.R)("1.5s");case 2:h.refetch(),N.refetch();case 4:case"end":return e.stop()}},e)})),function(){return u.apply(this,arguments)}),b=(null==N?void 0:null===(r=N.data)||void 0===r?void 0:r.tournament)||{},C=null!=N&&!!N.isFetching||!(null!=b&&b.to_be_enrolled),I="SPONSORPROVIDER"===(0,d.OQ)(null==b?void 0:null===(c=b.cms)||void 0===c?void 0:c.summary_body).toUpperCase();return{loading:h.isLoading||N.isLoading,tournamentDto:{tournamentID:g,titleTorneo:j,init:w,end:_,isEnrolled:C},tournament:b,isSponsorCarrrera:I,refetch:y}}},56611:function(e,n,t){"use strict";t.d(n,{_:function(){return d}});var i=t(6045),r=t(84225),a=t(94184),s=t.n(a),o=t(53918),l=t(85893),d=function(e){var n=e.rankings,t=e.hiddenFlag,r=e.className,a=e.cars,o=e.flag,d=e.raceTrack,h=(0,i.Z)().user;return(0,l.jsxs)(c,{className:void 0===r?"":r,children:[(0,l.jsxs)(f,{className:"pista__carros",children:[null==n?void 0:n.map(function(e){var t,i=(null==e?void 0:e.alias)===(null==h?void 0:h.email),r=e.amount/n[0].amount==1,s="".concat(e.amount/n[0].amount*100,"%");return(0,l.jsxs)(p,{$top1:e.alias===(null==h?void 0:h.email),$leftDistance:s,$duration:10*Math.random()+10,style:{zIndex:i?99:1},children:[(0,l.jsx)("div",{className:"text",children:i?"T\xfa":e.alias.slice(0,1)}),(0,l.jsx)("div",{className:"geo",children:i?(0,l.jsx)("img",{src:a.currentUser,alt:"car",className:"currentUser"}):r?(0,l.jsx)("img",{src:a.firstPosition,alt:"car"}):(0,l.jsx)("img",{src:a.others,alt:"car"})})]},e.email)}),(0,l.jsx)("div",{className:"pista"})]}),void 0!==t&&t?null:(0,l.jsx)(u,{children:(0,l.jsx)("img",{src:o,alt:"",className:"flag"})}),(0,l.jsx)(m,{className:s()("pista__lineas"),$raceTrack:d})]})},c=o.default.div.withConfig({displayName:"CarsRace__Css",componentId:"sc-pt4nvu-0"})(["display:grid;grid-template-columns:1fr 10rem;grid-template-rows:60px;width:100%;height:100%;position:relative;","{grid-template-rows:80px;grid-template-columns:1fr 12rem;}"],r.q.min_width.desktopS),u=o.default.div.withConfig({displayName:"CarsRace__MetaCss",componentId:"sc-pt4nvu-1"})(["display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:3px;align-items:flex-end;> img.flag{width:auto;height:auto;object-fit:contain;max-width:55%;max-height:80%;}"]),m=o.default.div.withConfig({displayName:"CarsRace__RaceBottomCss",componentId:"sc-pt4nvu-2"})(["grid-column:span 2;overflow:hidden;background-image:",";background-size:500px;animation:moverace 60s infinite linear;background-repeat:repeat-x;height:4px;position:absolute;width:100%;bottom:3px;left:0;@keyframes moverace{from{}to{background-position:-500px;}}"],function(e){return"url(".concat(e.$raceTrack,")")}),p=o.default.div.withConfig({displayName:"CarsRace__UserGeoCss",componentId:"sc-pt4nvu-3"})(["position:absolute;left:calc("," - .65rem);left:calc("," - .0rem);top:0;height:100%;width:1.8rem;display:flex;align-items:center;flex-direction:column;padding-bottom:8px;pointer-events:none;overflow:visible;transition:200ms;.text{text-align:center;text-transform:capitalize;opacity:0;font-weight:500;font-size:.9rem;flex:1 1 65%;display:flex;justify-content:center;align-items:center;}.geo{display:flex;justify-content:center;overflow:visible;position:relative;flex:1 1 35%;width:100%;animation:moveAndScale ","s infinite;transition:200ms;img{position:absolute;bottom:0;left:0;width:initial;height:100%;object-fit:cover;}}",""],function(e){return e.$leftDistance},function(e){return e.$leftDistance},function(e){return e.$duration},function(e){if(e.$top1)return(0,o.css)([".text{opacity:1;}"])}),f=o.default.div.withConfig({displayName:"CarsRace__PistaCss",componentId:"sc-pt4nvu-4"})(["position:relative;height:100%;@keyframes moveAndScale{0%{transform:translateX(0) scale(1);}25%{transform:translateX(.5rem) scale(1.1);}50%{transform:translateX(0) scale(1.2);}75%{transform:translateX(-.5rem) scale(1.1);}100%{transform:translateX(0) scale(1);}}"])},80171:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ew}});var i=t(67049),r=t(9e4),a=t(27812),s=t(98353),o=t(6045),l=t(65174),d=t(69512),c=t(43356),u=t(40675),m=t(90872),p=t(86362),f=t(37198),h={src:"/_next/static/media/Meta.1051cc9b.svg",height:182,width:150},v={src:"/_next/static/media/MetaSponsor.55a23759.svg",height:122,width:100},x=t(15543),g=t(8939),j=t(56611),w=t(7631),_=t(24705),N=t(84225),y=t(23870),b=t(73710),C=t.n(b),I=t(67294),k=t(53918),T=function(e){return null==e?void 0:e.split(".")[1]},z=function(e,n){var t=0;if(e){for(var i=0;i<n.length;i++){var r=n[i];e>=r.from_position&&e<=r.to_position&&(t=r.prize_amount)}return t}},P=t(50029),D=t(16835),O=t(87794),R=t.n(O),S=t(56644),Z=t(1691),q=t(87979),E=t(41248),A=t(90689),M=t(99886),U=t(85893),F=function(e){var n,t,i=e.end,r=e.init,a=(e.minAmount,e.minRounds,e.prize),s=e.title,l=e.to_be_enrolled,d=e.carrera,c=e.winners,u=e.hiddenButtonEnRoll,m=e.hiddenCountdown,p=(0,I.useState)(l),f=p[0],h=p[1],v=(0,E.I0)(),x=(0,o.Z)().session,g=(0,_.Ks)(),j=(0,D.Z)(g,2),w=j[0],N=j[1].isLoading;(0,I.useEffect)(function(){h(x&&!l)},[x,l]);var y=(t=(0,P.Z)(R().mark(function e(n){var t,i;return R().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w({session:x,tournament:n});case 2:(null==(i=e.sent)?void 0:null===(t=i.data)||void 0===t?void 0:t.result)==="OK"&&h(!0);case 4:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)}),b=new Date,C=new Date(null==i?void 0:i.replace(" ","T"));return C.setHours(C.getHours()-5),(0,U.jsxs)(B,{children:[(0,U.jsx)(L,{className:"title",children:s}),(0,U.jsxs)($,{children:[(0,U.jsx)("div",{className:"top",children:"Fondo de premio"}),(0,U.jsxs)("div",{className:"bottom",children:[Intl.NumberFormat("es-PE",{maximumFractionDigits:2,minimumFractionDigits:2}).format(Number(a)/100)," ",(0,U.jsx)("span",{children:"PEN"})]})]}),void 0!==m&&m?null:C<b?(0,U.jsx)(Z.Z,{severity:"error",children:"Torneo finalizado"}):(0,U.jsx)(X,{className:"timer",end:i,init:r}),(0,U.jsxs)(H,{className:"ganadores",children:[(0,U.jsx)("span",{className:"top",children:"Ganadores"}),(0,U.jsx)("span",{className:"bottom",children:c})]}),void 0!==u&&u?null:(0,U.jsx)(G,{className:"unirme",children:C<b?null:(0,U.jsx)(q.z,{disabled:f||N,fullWidth:!0,loading:N,onClick:(0,P.Z)(R().mark(function e(){return R().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(x&&!f)){e.next=6;break}return e.next=3,y(d);case 3:return e.abrupt("return");case 6:v((0,S.A_)());case 7:case"end":return e.stop()}},e)})),color:f?"dark":"primary",size:"small",children:f?"Ya est\xe1s unido":"Unirme ahora"})}),(0,U.jsxs)(H,{className:"date-init",children:[(0,U.jsx)("span",{className:"top",children:"Fecha inicio"}),r&&(0,U.jsx)("span",{className:"bottom",children:(0,A.f)(r)})]}),(0,U.jsxs)(H,{className:"date",children:[(0,U.jsx)("span",{className:"top",children:"Fecha fin"}),i&&(0,U.jsx)("span",{className:"bottom",children:(0,A.f)(i)})]})]})},L=k.default.div.withConfig({displayName:"CarreraDetailInfoContent__TitleCarreraCss",componentId:"sc-15vqa4p-0"})(["font-size:1.3rem;font-weight:500;text-transform:uppercase;"]),B=k.default.div.withConfig({displayName:"CarreraDetailInfoContent__CarreraDetailInfoContentCss",componentId:"sc-15vqa4p-1"})(["display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;","{grid-column:span 2;}","{grid-template-columns:repeat(2,1fr);> .banner,> .details{order:-1;}> .games{grid-column:span 2;}> .puesto,> .more-datail{grid-column:span 2;}}","{> .banner{padding-right:2rem;}> .more-datail{width:100%;max-width:1100px;margin:auto;}> .premios{width:100%;max-width:450px;margin-left:auto;}> .clasificacion{width:100%;max-width:450px;margin-right:auto;}}"],L,N.q.min_width.tabletL,N.q.min_width.desktopXS),$=k.default.div.withConfig({displayName:"CarreraDetailInfoContent__BackgroundPremioCss",componentId:"sc-15vqa4p-2"})(["display:flex;flex-direction:column;justify-content:center;gap:3px;> .top{font-size:0.7rem;}> .bottom{font-size:1.5rem;font-weight:500;color:",";font-variant-numeric:tabular-nums;> span{font-weight:300;}}","{> .bottom{font-size:calc(1.5rem + 0.1vw);}}","{> .bottom{font-size:calc(1.6rem + 0.2vw);}}"],function(e){return e.theme.primary},N.q.min_width.tabletL,N.q.min_width.desktopS),X=(0,k.default)(M.I).withConfig({displayName:"CarreraDetailInfoContent__CountdownCss",componentId:"sc-15vqa4p-3"})(["display:grid;grid-template-columns:1fr 0.5fr 1fr 0.5fr 1fr 0.5fr 1fr;> .points{text-align:center;align-self:center;}"]),H=k.default.div.withConfig({displayName:"CarreraDetailInfoContent__RowCss",componentId:"sc-15vqa4p-4"})(['display:flex;flex-direction:column;justify-content:center;gap:3px;> .top{font-size:0.7rem;}> .bottom{font-variant-numeric:tabular-nums;font-feature-settings:"tnum";font-size:0.9rem;font-weight:500;color:',";}"],function(e){return C()(e.theme.contrastText,.7)}),G=k.default.div.withConfig({displayName:"CarreraDetailInfoContent__ActionCss",componentId:"sc-15vqa4p-5"})(["> button{display:block;text-transform:lowercase;::first-letter{text-transform:uppercase;}}"]),K=function(e){var n=e.prizes,t=e.rankings,i=null==t?void 0:t.slice(0,3)[0],r=null==t?void 0:t.slice(0,3)[1],a=null==t?void 0:t.slice(0,3)[2];return(0,U.jsxs)(V,{children:[(0,U.jsx)(Q,{className:"top2",children:(0,U.jsxs)("div",{children:[(0,U.jsx)("div",{className:"icon",children:"2"}),(0,U.jsxs)(W,{children:[(0,U.jsxs)("div",{className:"row",children:[(0,U.jsx)("div",{className:"text",children:"ID:"}),(0,U.jsx)("div",{className:"id",children:T(null==r?void 0:r.user)})]}),(0,U.jsxs)("div",{className:"row",children:[(0,U.jsx)("div",{className:"text",children:"PUNTOS:"}),(0,U.jsx)("div",{className:"amount",children:null==r?void 0:r.amount})]}),(0,U.jsxs)("div",{className:"row column",children:[(0,U.jsx)("div",{className:"text",children:"PREMIO:"}),(0,U.jsx)("div",{className:"prize",children:(0,s.Aq)(z(null==r?void 0:r.position,n))})]})]})]})}),(0,U.jsx)(Q,{className:"top1",children:(0,U.jsxs)("div",{children:[(0,U.jsx)("div",{className:"icon",children:"1"}),(0,U.jsxs)(W,{children:[(0,U.jsxs)("div",{className:"row",children:[(0,U.jsx)("div",{className:"text",children:"ID:"}),(0,U.jsx)("div",{className:"id",children:T(null==i?void 0:i.user)})]}),(0,U.jsxs)("div",{className:"row",children:[(0,U.jsx)("div",{className:"text",children:"PUNTOS:"}),(0,U.jsx)("div",{className:"amount",children:null==i?void 0:i.amount})]}),(0,U.jsxs)("div",{className:"row column",children:[(0,U.jsx)("div",{className:"text",children:"PREMIO:"}),(0,U.jsx)("div",{className:"prize",children:(0,s.Aq)(z(null==i?void 0:i.position,n))})]})]})]})}),(0,U.jsx)(Q,{className:"top3",children:(0,U.jsxs)("div",{children:[(0,U.jsx)("div",{className:"icon",children:"3"}),(0,U.jsxs)(W,{children:[(0,U.jsxs)("div",{className:"row",children:[(0,U.jsx)("div",{className:"text",children:"ID:"}),(0,U.jsx)("div",{className:"id",children:T(null==a?void 0:a.user)})]}),(0,U.jsxs)("div",{className:"row",children:[(0,U.jsx)("div",{className:"text",children:"PUNTOS:"}),(0,U.jsx)("div",{className:"amount",children:null==a?void 0:a.amount})]}),(0,U.jsxs)("div",{className:"row column",children:[(0,U.jsx)("div",{className:"text",children:"PREMIO:"}),(0,U.jsx)("div",{className:"prize",children:(0,s.Aq)(z(null==a?void 0:a.position,n))})]})]})]})})]})},V=k.default.div.withConfig({displayName:"Prix__PrixCss",componentId:"sc-10usqx-0"})(["display:grid;grid-template-columns:repeat(3,1fr);gap:.5rem;min-height:130px;"]),Q=k.default.div.withConfig({displayName:"Prix__PositionCss",componentId:"sc-10usqx-1"})(["display:flex;flex-direction:column;justify-content:flex-end;> div{border-radius:.25rem;flex:0.85;background:#e5e5e5;padding:0.5rem;> .icon{border:2px solid black;border-radius:50%;margin:auto;width:2rem;height:2rem;display:flex;align-items:center;justify-content:center;font-size:1.1rem;font-weight:600;margin-bottom:.5rem;}}&.top1{> div{flex:1;padding-top:1rem;> .icon{border-color:",";color:",";}}}"],function(e){return e.theme.primary},function(e){return e.theme.primary}),W=k.default.div.withConfig({displayName:"Prix__ContentCss",componentId:"sc-10usqx-2"})(["display:grid;gap:.5rem;.row{display:flex;gap:.4ch;justify-content:center;align-items:flex-end;flex-wrap:wrap;.text,.amount{font-size:.6rem;font-weight:400;}.id,.amount{font-weight:500;}.id{font-size:.9rem;}.prize{font-weight:900;}&.column{flex-direction:column;gap:0;align-items:center;}}"]),Y=t(6767),J=t.n(Y),ee=function(e){var n=e.prizes,t=e.rankings,i=(0,I.useState)(15),r=i[0],a=i[1],o=r>=(null==t?void 0:t.length),l=(0,I.useMemo)(function(){return t.slice(0,r)},[t,r]);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(en,{children:[(0,U.jsx)(eo,{children:(0,U.jsxs)(er,{children:[(0,U.jsx)(ea,{children:"POS."}),(0,U.jsx)(ea,{children:"ID"}),(0,U.jsx)(ea,{children:"PUNTOS"}),(0,U.jsx)(ea,{children:"PREMIO"})]})}),(0,U.jsx)(ei,{children:l.map(function(e){return(0,U.jsxs)(er,{children:[(0,U.jsx)(es,{children:e.position}),(0,U.jsx)(es,{children:T(e.user)}),(0,U.jsx)(es,{children:e.amount}),(0,U.jsx)(es,{children:(0,s.Aq)(z(e.position,n))})]},e.user)})})]}),(0,U.jsx)(et,{children:!o&&(0,U.jsx)(el,{size:"small",variant:"outline",onClick:function(){a(r+15)},children:"Ver m\xe1s"})})]})},en=k.default.div.withConfig({displayName:"TableRanking__TableCss",componentId:"sc-1ute9om-0"})([""]),et=k.default.div.withConfig({displayName:"TableRanking__ShowMoreCss",componentId:"sc-1ute9om-1"})(["margin-top:.7rem;display:flex;justify-content:center;"]),ei=k.default.div.withConfig({displayName:"TableRanking__TBodyCss",componentId:"sc-1ute9om-2"})([""]),er=k.default.div.withConfig({displayName:"TableRanking__TrCss",componentId:"sc-1ute9om-3"})(["display:grid;grid-template-columns:repeat(4,1fr);border-radius:.25rem;&:nth-child(even){background:#e5e5e5;}"]),ea=k.default.div.withConfig({displayName:"TableRanking__ThCss",componentId:"sc-1ute9om-4"})(["font-size:.7rem;text-align:center;padding:6px;font-weight:500;"]),es=k.default.div.withConfig({displayName:"TableRanking__TdCss",componentId:"sc-1ute9om-5"})(["text-align:center;padding:6px;font-weight:500;font-size:.9rem;"]),eo=k.default.div.withConfig({displayName:"TableRanking__THeaderCss",componentId:"sc-1ute9om-6"})([""]),el=(0,k.default)(q.z).withConfig({displayName:"TableRanking__ButtonCss",componentId:"sc-1ute9om-7"})(["&:hover{background:",";}&:active{background:",";}&:focus-visible{outline:3px solid ",";}"],function(e){var n=e.theme;return J()(n.primary).lighten(.9)},function(e){var n=e.theme;return J()(n.primary).lighten(.85)},function(e){return e.theme.primary}),ed=function(e){var n,t,i,r,N,b,C,I,k,P=e.carrera,D=e.hiddenCarRace,O=e.hiddenCountdown,R=e.hiddenButtonEnRoll,S=(0,w.jj)({tournament:null==P?void 0:P.tournament},{skip:!(null!=P&&P.tournament),refetchOnMountOrArgChange:!0}).data,Z=(0,o.Z)(),q=Z.session,E=Z.user,A=(0,l.o)({lobby:"CARRERAS",session:q}).isSponsorCarrrera,M=null==S?void 0:S.data,L=(0,_.C$)({session:q,tournament:null==P?void 0:P.tournament},{skip:!q||!(null!=P&&P.tournament),refetchOnMountOrArgChange:!0}).data;null==L||null===(n=L.data)||void 0===n||n.amount,null==L||null===(t=L.data)||void 0===t||t.position;var B=!(null!=P&&P.to_be_enrolled);null==P||P.total_players;var $,X,H=null==M?void 0:M.filter(function(e){return e.alias===(null==E?void 0:E.email)})[0],G=A?g.Z.src:x.Z.src,V=A?v.src:h.src,Q=A?{currentUser:p.Z.src,firstPosition:f.Z.src,others:m.Z.src}:{currentUser:d.Z.src,firstPosition:c.Z.src,others:u.Z.src};return(0,U.jsxs)(ec,{children:[(0,U.jsx)(eu,{className:"banner",children:(0,U.jsx)("div",{className:"TorneoDetailInfoS_wrapper",children:(0,U.jsx)("a",{href:null==P?void 0:null===(i=P.cms)||void 0===i?void 0:i.summary_url,target:"_blank",rel:"noreferrer",children:(0,U.jsx)("img",{alt:null!==(r=null==P?void 0:null===(N=P.cms)||void 0===N?void 0:N.title)&&void 0!==r?r:"Banner",src:"".concat("https://new.apuestatotal.com","/").concat(null==P?void 0:null===(b=P.cms)||void 0===b?void 0:b.summary_image)})})})}),(0,U.jsx)("div",{className:"details",children:(0,U.jsx)(F,{end:null==P?void 0:P.end_date,init:null==P?void 0:P.init_date,minAmount:null==P?void 0:P.min_amount,minRounds:null==P?void 0:P.min_rounds,prize:null==P?void 0:P.prize,title:null==P?void 0:null===(C=P.cms)||void 0===C?void 0:C.summary_title,to_be_enrolled:null==P?void 0:P.to_be_enrolled,carrera:null===(I=null==P?void 0:P.tournament)||void 0===I||I,winners:null==P?void 0:P.winners,hiddenButtonEnRoll:R,hiddenCountdown:O})}),D?null:(0,U.jsx)("div",{className:"more-datail",children:(0,U.jsx)(j._,{rankings:(X=null!==($=null==M?void 0:M.slice(0,10))&&void 0!==$?$:[],H?(null==H?void 0:H.position)<=10?X:[].concat((0,a.Z)(X),[H]):(null==X?void 0:X.length)>0?X:[]),cars:Q,flag:V,raceTrack:G})}),(0,U.jsx)("div",{className:"more-datail",children:(0,U.jsx)(K,{rankings:M,prizes:null==P?void 0:P.prizes})}),q&&B&&(0,U.jsx)("div",{className:"more-datail",children:(0,U.jsxs)(em,{children:[(0,U.jsxs)(ep,{children:[(0,U.jsx)("span",{className:"text",children:"#"}),(0,U.jsxs)("span",{children:[null==H?void 0:H.position," (T\xfa)"]})]}),(0,U.jsxs)(ep,{children:[(0,U.jsx)("span",{className:"text",children:"ID:"})," ",(0,U.jsx)("span",{children:T(null==H?void 0:H.user)})]}),(0,U.jsxs)(ep,{children:[(0,U.jsx)("span",{className:"text",children:"Puntos:"})," ",(0,U.jsx)("span",{children:null==H?void 0:H.amount})]}),(0,U.jsxs)(ep,{children:[(0,U.jsx)("span",{className:"text",children:"Premio:"})," ",(0,U.jsx)("span",{children:(0,s.Aq)(z(null==H?void 0:H.position,null==P?void 0:P.prizes))})]})]})}),(0,U.jsx)("div",{className:"more-datail",children:(null==M?void 0:M.length)&&(0,U.jsx)(ee,{rankings:null==M?void 0:M.slice(3,null==M?void 0:M.length),prizes:null==P?void 0:P.prizes})}),(0,U.jsx)("div",{className:"term_condition",children:(0,U.jsx)(y.Z,{fragment:null==P?void 0:null===(k=P.cms)||void 0===k?void 0:k.terms})})]})},ec=k.default.div.withConfig({displayName:"CarreraDetailInfo__CarreraDetailInfoCss",componentId:"sc-1eb1jce-0"})(["display:grid;grid-template-columns:repeat(1,1fr);gap:1.5rem;> .term_condition{grid-column:span 1;overflow:hidden;> div > table{color:",";background:",";}}","{grid-template-columns:repeat(2,1fr);> .banner,> .details{order:-1;}> .games{grid-column:span 2;}> .puesto,> .more-datail{grid-column:span 2;}> .term_condition{grid-column:span 2;}}","{> .banner{}> .more-datail{width:100%;max-width:1100px;margin:auto;}> .premios{width:100%;max-width:450px;margin-left:auto;}> .clasificacion{width:100%;max-width:450px;margin-right:auto;}}"],function(e){return C()(e.theme.contrastText,.7)},function(e){return e.theme.layout.footer.background},N.q.min_width.tabletL,N.q.min_width.desktopXS),eu=k.default.div.withConfig({displayName:"CarreraDetailInfo__BannerCss",componentId:"sc-1eb1jce-1"})(["display:flex;> .TorneoDetailInfoS_wrapper{flex:1;> img{object-fit:contain;object-fit:initial;height:initial;backdrop-filter:blur(20px);cursor:pointer;}}"]),em=k.default.div.withConfig({displayName:"CarreraDetailInfo__TrCss",componentId:"sc-1eb1jce-2"})(["display:grid;grid-template-columns:repeat(4,1fr);border-radius:.25rem;background:#2d333c;color:white;"]),ep=k.default.div.withConfig({displayName:"CarreraDetailInfo__TdCss",componentId:"sc-1eb1jce-3"})(["text-align:center;padding:6px;font-weight:500;display:flex;flex-direction:row;gap:.25ch;align-items:center;justify-content:center;> span{font-size:.8rem;}"]),ef=t(59499),eh=_.ll.injectEndpoints({endpoints:function(e){return{getCarreratDetail:e.query({query:function(e){var n=e.carrera,t=e.session,i=new URLSearchParams;return i.append("company","ATP"),i.append("tournament",n),t&&i.append("session",t),{url:"contents/getTournamentDetails",body:i,method:"POST"}}})}}}).useGetCarreratDetailQuery;function ev(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}var ex=function(e){var n=e.carrera;return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ev(Object(t),!0).forEach(function(n){(0,ef.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ev(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},eh({carrera:n,session:(0,o.Z)().session},{skip:!n}))},eg=t(75883),ej=t(11163),ew=function(){var e,n=(0,ej.useRouter)(),t=null==n?void 0:null===(e=n.query)||void 0===e?void 0:e.carrera;(0,r.r)({PageURL:window.location.href,PageTitle:"torneo ".concat(t),PageCategory:"Carreras"});var a=ex({carrera:t}),s=a.isLoading,o=a.isFetching,l=a.data,d=a.error,c=s||o;if(c)return(0,U.jsx)(i.Z,{loading:c});if((null==l?void 0:l.result)==="error"||d)return(0,U.jsx)(eN,{children:(0,U.jsx)(eg.Z,{label:"Carrera ".concat(t," no encontrada.")})});var u=(null==l?void 0:l.tournament)||{};return(0,U.jsx)(e_,{children:(0,U.jsx)(ed,{carrera:u})})},e_=k.default.div.withConfig({displayName:"carrera__CarreraCss",componentId:"sc-6l4my0-0"})(["padding:1.2rem 0;display:flex;flex-direction:column;max-width:1100px;gap:1rem;margin:auto;width:100%;"]),eN=k.default.div.withConfig({displayName:"carrera__ErrorMessage",componentId:"sc-6l4my0-1"})(["width:100%;margin:auto;display:grid;min-height:600px;"])},56632:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/carreras/[carrera]",function(){return t(80171)}])},69512:function(e,n){"use strict";n.Z={src:"/_next/static/media/Auto1.f0460c17.svg",height:55,width:100}},43356:function(e,n){"use strict";n.Z={src:"/_next/static/media/Auto2.9ae5e1e0.svg",height:55,width:100}},40675:function(e,n){"use strict";n.Z={src:"/_next/static/media/Auto3.910ae7ac.svg",height:55,width:100}},90872:function(e,n){"use strict";n.Z={src:"/_next/static/media/AutoSponsorGris.3a25c475.svg",height:33,width:100}},86362:function(e,n){"use strict";n.Z={src:"/_next/static/media/AutoSponsorNegro.557e1298.svg",height:33,width:100}},37198:function(e,n){"use strict";n.Z={src:"/_next/static/media/AutoSponsorRojo.62e58bba.svg",height:30,width:100}},15543:function(e,n){"use strict";n.Z={src:"/_next/static/media/pista.2512c1ea.svg",height:17,width:1200}},8939:function(e,n){"use strict";n.Z={src:"/_next/static/media/pistaSponsor.4cc93fc5.svg",height:4,width:600}}},function(e){e.O(0,[2912,1691,2588,9774,2888,179],function(){return e(e.s=56632)}),_N_E=e.O()}]);
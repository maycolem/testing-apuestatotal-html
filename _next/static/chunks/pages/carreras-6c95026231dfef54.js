(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4446],{47344:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/carreras",function(){return t(97066)}])},7037:function(n,e,t){"use strict";t.d(e,{h:function(){return o},b:function(){return s}});var r=t(85893),i=t(9008),a=t.n(i);t(67294);var o=function(n){var e,t=n.title,i=void 0===t?"":t,o=n.description,s=void 0===o?"Construye tu jugada combinando diversos mercados en un mismo evento, lo que aumentar\xe1 el multiplicador de tu jugada y m\xe1s en Apuesta Total":o,l=n.canonical,c=void 0===l?"":l,u=n.children,d=i?"".concat(i," | Apuesta Total"):"Apuestas Deportivas Online | Apuesta Total",m=c?"https://www.apuestatotal.com".concat(c):"https://www.apuestatotal.com".concat(null==window?void 0:null===(e=window.location)||void 0===e?void 0:e.pathname);return(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:d},"titleOverride"),(0,r.jsx)("meta",{content:d,property:"og:title"},"title"),(0,r.jsx)("meta",{content:d,itemProp:"name"},"name"),(0,r.jsx)("meta",{content:d,name:"twitter:title"},"twitter:title"),(0,r.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",property:"og:image"},"og:image"),(0,r.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",property:"og:image:secure_url"}),(0,r.jsx)("meta",{content:"1145",property:"og:image:width"},"og:image:width"),(0,r.jsx)("meta",{content:"513",property:"og:image:height"},"og:image:height"),(0,r.jsx)("meta",{content:s,name:"description"},"description"),(0,r.jsx)("meta",{content:s,itemProp:"description"},"descriptionProp"),(0,r.jsx)("meta",{content:s,property:"og:description"},"og:description"),(0,r.jsx)("meta",{content:s,name:"twitter:description"},"twitter:description"),(0,r.jsx)("meta",{content:"apuesta total, torneos, poker, juegos, recargas, casino, Bet Games, TV Bet, ruleta rusa, yan ken po, tragamonedas online, torneos de casino, premios",name:"keywords"},"keywords"),(0,r.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",name:"image"}),(0,r.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",itemProp:"image"},"image"),(0,r.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",name:"twitter:image"},"twitter:image"),(0,r.jsx)("meta",{content:"summary",name:"twitter:card"},"twitter:card"),(0,r.jsx)("meta",{content:"text/html; charset=utf-8",httpEquiv:"content-type"},"content-type"),(0,r.jsx)("meta",{content:"width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=0",name:"viewport"},"viewport"),(0,r.jsx)("meta",{content:"true",name:"HandheldFriendly"},"HandheldFriendly"),(0,r.jsx)("meta",{content:"telephone=no",name:"format-detection"}),(0,r.jsx)("meta",{content:"YES",name:"apple-mobile-web-app-capable"}),(0,r.jsx)("meta",{content:m,property:"og:url"},"og:url"),(0,r.jsx)("meta",{content:"website",property:"og:type"}),(0,r.jsx)("link",{href:m,rel:"canonical"},"canonical"),(0,r.jsx)("link",{href:"/favicon.ico",rel:"icon"}),(0,r.jsx)("link",{href:"/favicon.ico",rel:"apple-touch-icon"}),u]})},s=function(){return(0,r.jsx)(o,{canonical:"/registro",description:"Encuentra promociones, apuestas deportivas en vivo, pr\xf3ximos encuentros, juegos virtuales, casino y m\xe1s en Apuesta Total",title:"Registro"})}},39709:function(n,e,t){"use strict";t.d(e,{r:function(){return a}});var r=t(50211),i=t(67294),a=function(n){var e=n.PageURL,t=n.PageTitle,a=n.PageCategory,o=(0,r.Z)().user,s=o?"".concat(o.user):null;(0,i.useEffect)(function(){var n;(null===(n=window.optimoveSDK)||void 0===n?void 0:n.API)&&(s?window.optimoveSDK.API.setPageVisit(e,t,a,s):window.optimoveSDK.API.setPageVisit(e,t,a))},[e,t,a,s])}},7986:function(n,e,t){"use strict";t.d(e,{I:function(){return p}});var r=t(7297),i=t(85893),a=t(94184),o=t.n(a),s=t(67294),l=t(53918),c=function(n){var e=n.getHours()-5;return e=e%12||12,n.setHours(e),n},u=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,t=(0,s.useState)({days:"0",hours:"00",minutes:"00",seconds:"00",isFewHoursToFinish:!1}),r=t[0],i=t[1];return(0,s.useEffect)(function(){var t=new Date(null==n?void 0:n.replace(" ","T")),r=(t=c(t)).getTime(),a=setInterval(function(){var n=new Date().getTime(),t=r-n;if(t<=0){clearInterval(a),i({days:"0",hours:"00",minutes:"00",seconds:"00",isFewHoursToFinish:!1});return}var o,s=Math.floor(t/864e5),l=s<10?"".concat(s):s.toString(),c=Math.floor(t%864e5/36e5),u=(c=c%12||12).toString().padStart(2,"0");i({days:l,hours:u,minutes:Math.floor(t%36e5/6e4).toString().padStart(2,"0"),seconds:Math.floor(t%6e4/1e3).toString().padStart(2,"0"),isFewHoursToFinish:t/36e5<e})},1e3);return function(){return clearInterval(a)}},[n,e]),r};function d(){var n=(0,r.Z)(["\n	display: grid;\n	grid-template-columns: 1fr 1ch 1fr 1ch 1fr 1ch 1fr;\n	align-items: center;\n\n	> .points {\n		text-align: center;\n	}\n\n	&.fewToFinish{\n		color: ",";\n	}\n"]);return d=function(){return n},n}function m(){var n=(0,r.Z)(['\n	font-size: clamp(1.2rem, 1.2vw, 1.4rem);\n    font-weight: 500;\n    text-transform: uppercase;\n    padding:  0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n	> span {\n		font-variant-numeric: tabular-nums;\n		font-feature-settings: "tnum";\n	}\n	\n	> .bottom {\n		font-size: 0.7rem;\n		text-transform: capitalize;\n	}\n']);return m=function(){return n},n}var p=function(n){var e=n.className,t=n.end,r=(n.init,n.hoursToFinish),a=u(t,void 0===r?10:r),s=a.days,l=a.hours,c=a.minutes,d=a.seconds,m=a.isFewHoursToFinish;return(0,i.jsxs)(f,{className:o()(e,{fewToFinish:m}),children:[(0,i.jsxs)(h,{children:[(0,i.jsx)("span",{className:"top day",children:s}),(0,i.jsx)("span",{className:"bottom",children:"D\xeda"})]}),(0,i.jsx)("span",{className:"points",children:":"}),(0,i.jsxs)(h,{children:[(0,i.jsx)("span",{className:"top hour",children:l}),(0,i.jsx)("span",{className:"bottom",children:"Hora"})]}),(0,i.jsx)("span",{className:"points",children:":"}),(0,i.jsxs)(h,{children:[(0,i.jsx)("span",{className:"top min",children:c}),(0,i.jsx)("span",{className:"bottom",children:"Min."})]}),(0,i.jsx)("span",{className:"points",children:":"}),(0,i.jsxs)(h,{children:[(0,i.jsx)("span",{className:"top second",children:d}),(0,i.jsx)("span",{className:"bottom",children:"Seg."})]})]})},f=l.default.div(d(),function(n){return n.theme.primary}),h=l.default.div(m())},61067:function(n,e,t){"use strict";t.d(e,{f:function(){return i}});var r=t(32912),i=function(n){if(!n)return"";var e=new Date(n.replace(" ","T"));e.setHours(e.getHours()-5);var t=(0,r.Z)(e,"dd-MM-yyyy hh:mm aaaaa'm'").replace("12:00 am","00:00 pm");return"".concat(t)}},97066:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return nl}});var r=t(7297),i=t(85893),a=t(7037),o=t(69125),s=t(1451),l=t(39709),c={src:"/_next/static/media/Kart.157822d5.svg",height:743,width:931},u=t(47568),d=t(828),m=t(70655),p=t(67294),f=t(53918),h=t(41248),x=t(50211),g=t(72303),v=t(27746),j=t(67962),w=t(94688),y=t(39628),b=t(73710),N=t.n(b),_=t(41664),T=t.n(_),F=t(61067),S=t(7986);function Z(){var n=(0,r.Z)(["\n    display: flex;\n    flex-direction: column;\n"]);return Z=function(){return n},n}function P(){var n=(0,r.Z)(["\n    overflow: hidden;\n    display: flex;\n    > .wrapper__image {\n        overflow: hidden;\n        display: flex;\n        flex: 1;\n\n        a {\n            flex: 1;\n        }\n        > img {\n            object-fit: initial;\n            display: block;\n            margin: auto;\n            cursor: pointer;\n            flex: 1;\n        }\n    }\n"]);return P=function(){return n},n}function k(){var n=(0,r.Z)(["\n    & {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        gap: 3px;\n        > .top {\n            font-size: 0.7rem;\n            color: ",';\n        }\n        > .bottom {\n            font-size: 0.9rem;\n            font-weight: 500;\n            font-variant-numeric: tabular-nums;\n            font-feature-settings: "tnum";\n            color: ',";\n            white-space: nowrap;\n        }\n    }\n"]);return k=function(){return n},n}function E(){var n=(0,r.Z)(["\n    font-size: 1.3rem;\n    font-weight: 500;\n    color: ",";\n    text-transform: uppercase;\n    min-height: 3rem;\n"]);return E=function(){return n},n}function z(){var n=(0,r.Z)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 1rem;\n    padding: 1rem 0;\n    flex: 1 1 60%;\n\n    "," {\n            grid-column: span 2;\n            order: -1;\n        }\n        > .premio {\n            order: -1;\n        }\n        > .timer {\n            order: -1;\n        }\n        > .date,\n        > .date-init {\n            order: -1;\n        }\n\n        ",".requisitos {\n            grid-column: span 1;\n        }\n\n        "," {\n        }\n"]);return z=function(){return n},n}function D(){var n=(0,r.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 3px;\n\n    > .top {\n        font-size: 0.7rem;\n        color: ",";\n    }\n\n    > .bottom {\n        font-size: 1.2rem;\n        font-weight: 500;\n        color: ",";\n        > span {\n            font-weight: 300;\n        }\n    }\n\n    "," {\n        > .bottom {\n            font-size: calc(1.3rem + 0.1vw);\n        }\n    }\n    \n    "," {\n        > .bottom {\n            font-size: calc(1.5rem + 0.2vw);\n        }\n    }\n"]);return D=function(){return n},n}function q(){var n=(0,r.Z)(["\n    > button {\n        text-transform: lowercase;\n        display: block;\n        ::first-letter {\n            text-transform: uppercase;\n        }\n    }\n"]);return q=function(){return n},n}var A=function(n){var e,t,r,a,o=n.item,s=(0,p.useState)(!1),l=s[0],c=s[1],f=(0,h.I0)(),w=(0,x.Z)(),b=w.session,N=w.matchesInTheListsGroups,_=(0,d.Z)((0,j.Ks)(),2),Z=_[0],P=_[1].isLoading;(0,p.useEffect)(function(){b&&c(!(null==o?void 0:o.to_be_enrolled))},[b,o]);var k,E=N([null==o?void 0:null===(e=o.groups)||void 0===e?void 0:e.FORBIDDEN]),z=(k=(0,u.Z)(function(n){var e,t;return(0,m.__generator)(this,function(r){switch(r.label){case 0:return[4,Z({session:b,tournament:n})];case 1:return(null==(t=r.sent())?void 0:null===(e=t.data)||void 0===e?void 0:e.result)==="OK"&&c(!0),[2]}})}),function(n){return k.apply(this,arguments)});return(0,i.jsxs)(H,{children:[(0,i.jsx)(L,{children:(0,i.jsx)("div",{className:"wrapper__image",children:(0,i.jsx)("a",{href:"https://www.apuestatotal.com/carreras/".concat(null==o?void 0:o.tournament,"/"),target:"_blank",rel:"noreferrer",children:(0,i.jsx)("img",{alt:null==o?void 0:null===(t=o.cms)||void 0===t?void 0:t.summary_title,src:"".concat("https://new.apuestatotal.com","/").concat(null==o?void 0:null===(r=o.cms)||void 0===r?void 0:r.summary_image)})})})}),(0,i.jsxs)(C,{children:[(0,i.jsx)(I,{className:"title",children:null==o?void 0:null===(a=o.cms)||void 0===a?void 0:a.summary_title}),(0,i.jsx)(S.I,{className:"timer",end:"".concat(null==o?void 0:o.end_date),init:"".concat(null==o?void 0:o.init_date)}),(0,i.jsxs)(M,{className:"premio",children:[(0,i.jsx)("div",{className:"top",children:"Fondo de premio"}),(0,i.jsxs)("div",{className:"bottom",children:[Intl.NumberFormat("es-PE",{maximumFractionDigits:2,minimumFractionDigits:2}).format(Number(o.prize)/100)," ",(0,i.jsx)("span",{children:"PEN"})]})]}),(0,i.jsxs)(R,{className:"ganadores",children:[(0,i.jsx)("span",{className:"top",children:"Ganadores"}),(0,i.jsx)("span",{className:"bottom",children:null==o?void 0:o.winners})]}),(0,i.jsxs)(R,{className:"date-init",children:[(0,i.jsx)("span",{className:"top",children:"Fecha inicio"}),(0,i.jsx)("span",{className:"bottom",children:(0,F.f)(null==o?void 0:o.init_date)})]}),(0,i.jsxs)(R,{className:"date",children:[(0,i.jsx)("span",{className:"top",children:"Fecha fin"}),(0,i.jsx)("span",{className:"bottom",children:(0,F.f)(null==o?void 0:o.end_date)})]}),(0,i.jsxs)(R,{className:"requisitos",children:[(0,i.jsx)("span",{className:"top",children:"Requisitos para clasificar"}),(0,i.jsxs)("span",{className:"bottom",children:["Jugadas de S/ ",((null==o?void 0:o.min_amount)/100).toFixed(2)]})]}),(0,i.jsx)(O,{className:"requisitos",children:(0,i.jsx)(T(),{href:{pathname:v.y.CARRERAS_DETALLE.url,query:{carrera:null==o?void 0:o.tournament}},children:(0,i.jsx)(y.z,{fullWidth:!0,variant:"outline",children:"M\xe1s informaci\xf3n"})})}),(0,i.jsx)(O,{className:"unirme-ahora",children:E?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)(y.z,{disabled:l||P,fullWidth:!0,loading:P,onClick:(0,u.Z)(function(){return(0,m.__generator)(this,function(n){switch(n.label){case 0:if(!(b&&!l))return[3,2];return[4,z(null==o?void 0:o.tournament)];case 1:return n.sent(),[3,3];case 2:f((0,g.A_)()),n.label=3;case 3:return[2]}})}),color:l?"dark":"primary",children:l?"Ya est\xe1s unido":"Unirme ahora"})})]})]})},H=f.default.div(Z()),L=f.default.div(P()),R=f.default.div(k(),function(n){return n.theme.contrastText},function(n){return N()(n.theme.contrastText,.6)}),I=f.default.div(E(),function(n){return n.theme.contrastText}),C=f.default.div(z(),I,R,w.q.min_width.tabletS),M=f.default.div(D(),function(n){return n.theme.contrastText},function(n){var e;return null==n?void 0:null===(e=n.theme)||void 0===e?void 0:e.primary},w.q.min_width.tabletL,w.q.min_width.desktopS),O=f.default.div(q());function K(){var n=(0,r.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 8vw 7vw;\n\n    h1{\n        font-size: 2rem;\n        font-weight: 600;\n    }\n\n    > .body  {\n        font-size : 2rem;\n        font-weight: 400;\n    }\n\n    ","{\n        max-width: 1000px;\n        margin: auto;\n        padding: 5vw 14px;\n        display: grid;\n        grid-template-columns: 50% 1fr;\n        gap: 0;\n\n        h1 , div.body {\n            font-size: clamp(2rem , 4vw , 3rem);\n        }\n    }\n"]);return K=function(){return n},n}function U(){var n=(0,r.Z)(["\n    overflow: hidden;\n    width: calc(100% + 10vw + 14px);\n    \n    img {\n        width: 115%;\n    }\n\n    ","{\n        width: 49vw;\n    }\n"]);return U=function(){return n},n}var G=function(n){var e=n.body,t=n.img,r=n.title;return(0,i.jsxs)(X,{children:[(0,i.jsxs)("div",{className:"text",children:[(0,i.jsx)("h1",{children:r}),(0,i.jsx)("div",{className:"body",children:e})]}),(0,i.jsx)(B,{children:(0,i.jsx)("img",{src:t,alt:r})})]})},X=f.default.div(K(),w.q.min_width.desktopXS),B=f.default.div(U(),w.q.min_width.desktopXS),V=function(n){var e=[];return(null==n?void 0:n.filter(function(n){return!(new Date(null==n?void 0:n.end_date)<new Date)&&n}))||[]},W=j.ll.injectEndpoints({endpoints:function(n){return{getCarreraLobby:n.query({query:function(n){var e=n.lobby,t=n.session,r=new URLSearchParams;return r.append("company","ATP"),r.append("lobby",e),t&&r.append("session",t),{url:"contents/getTournamentsLobby",body:r,method:"POST"}},keepUnusedDataFor:30,transformResponse:function(n){return(null==n?void 0:n.lobby)||[]}})}}}).useGetCarreraLobbyQuery,Y=function(n){var e,t=W({lobby:n.lobby,session:(0,x.Z)().session}),r=t.isFetching,i=t.data,a=t.isLoading;return{filterData:V(i),loading:a,fetching:r}};function J(){var n=(0,r.Z)(["\n	padding: 1.2rem 0;\n	display: flex;\n	flex-direction: column;\n	gap: 1rem;\n"]);return J=function(){return n},n}function Q(){var n=(0,r.Z)(["\n	font-size: 1.5rem;\n	font-weight: 500;\n	text-align: center;\n	"," {\n		text-align: left;\n	}\n"]);return Q=function(){return n},n}function $(){var n=(0,r.Z)(["\n	display: grid;\n	grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr));\n	gap: calc(1rem + 0.4vw);	\n	"," {\n		grid-template-columns: repeat(auto-fill, minmax(min(100%, 360px), 1fr));\n	}\n"]);return $=function(){return n},n}function nn(){var n=(0,r.Z)(["\n	display: flex;\n	flex-direction: column;\n	gap: 1rem;\n\n	.highlightedText {\n		color: ",";\n		font-size: 1.2rem;\n		font-weight: 500;\n		width: 80%;\n	}\n"]);return nn=function(){return n},n}function ne(){var n=(0,r.Z)(["\n	font-size: 1.5rem;\n	font-weight: 500;\n	text-align: center;\n	"," {\n		text-align: left;\n	}\n"]);return ne=function(){return n},n}function nt(){var n=(0,r.Z)(["\n	color: ",";\n	text-decoration: underline;\n	cursor: pointer;\n"]);return nt=function(){return n},n}var nr="Torneo",ni=function(n){var e=n.title,t=n.loading;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h,{title:e}),(0,i.jsx)(o.Z,{loading:t})]})},na=function(){return(0,i.jsx)(G,{title:"\xa1Hola sobrin@!",img:c.src,body:(0,i.jsx)(no,{})})},no=function(){return(0,i.jsxs)(nm,{children:[(0,i.jsx)("p",{children:"Estamos calentando motores para la siguiente carrera."}),(0,i.jsxs)("p",{className:"highlightedText",children:["Sigue vacil\xe1ndote con nuestro"," ",(0,i.jsx)(T(),{href:s.H["/casino"].url,passHref:!0,children:(0,i.jsx)(np,{children:"casino."})})]})]})},ns=function(n){var e=n.races;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(nu,{children:"Carreras"}),(0,i.jsx)(nd,{children:e.map(function(n){return(0,i.jsx)(A,{item:n},null==n?void 0:n.tournament)})})]})},nl=function(){var n=Y({lobby:"CARRERAS"}),e=n.filterData,t=n.loading;return((0,l.r)({PageURL:window.location.href,PageTitle:nr,PageCategory:"Tornero carreras"}),t)?(0,i.jsx)(ni,{title:nr,loading:t}):(0,i.jsxs)(nc,{children:[(0,i.jsx)(a.h,{title:nr}),e.length?(0,i.jsx)(ns,{races:e}):(0,i.jsx)(na,{})]})},nc=f.default.div(J()),nu=f.default.h1(Q(),w.q.min_width.tabletS),nd=f.default.div($(),w.q.min_width.mobileL),nm=f.default.div(nn(),function(n){return n.theme.primary});f.default.h1(ne(),w.q.min_width.tabletS);var np=f.default.a(nt(),function(n){return n.theme.primary})}},function(n){n.O(0,[2912,9774,2888,179],function(){return n(n.s=47344)}),_N_E=n.O()}]);
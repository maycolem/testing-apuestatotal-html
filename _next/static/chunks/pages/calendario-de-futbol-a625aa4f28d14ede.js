(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9580],{48078:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calendario-de-futbol",function(){return n(25846)}])},39709:function(a,e,n){"use strict";n.d(e,{r:function(){return r}});var i=n(50211),t=n(67294),r=function(a){var e=a.PageURL,n=a.PageTitle,r=a.PageCategory,l=(0,i.Z)().user,o=l?"".concat(l.user):null;(0,t.useEffect)(function(){var a;(null===(a=window.optimoveSDK)||void 0===a?void 0:a.API)&&(o?window.optimoveSDK.API.setPageVisit(e,n,r,o):window.optimoveSDK.API.setPageVisit(e,n,r))},[e,n,r,o])}},59288:function(a,e,n){"use strict";n.d(e,{S:function(){return S}});var i=n(7297),t=n(85893),r=n(53923),l=n(94688);n(67294);var o=n(53918),c=n(53100),u=n(88575),p=n(73710),d=n.n(p),s=n(41664),m=n.n(s),f=n(11163);function g(){var a=(0,i.Z)(["\n	background-color: ",";\n	border: thin solid ",";\n    filter: saturate(1);\n	text-align: center;\n	border-radius: 1rem;\n	display: flex;\n	align-items: center;\n	justify-content: center;\n	position: relative;\n	overflow: hidden;\n	transition-property: transform, box-shadow, background-size, opacity, top, left;\n    transition-timing-function: ease-out;\n	transition: transform 0.3s ease;\n\n	&:before {\n		content: '';\n		display: block;\n		padding-top: 100%;\n	}\n\n	&:hover {\n        transform: scale(1.05);\n		box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;\n	}\n"]);return g=function(){return a},a}function x(){var a=(0,i.Z)(["\n	display: grid;\n	place-items: center;\n"]);return x=function(){return a},a}function b(){var a=(0,i.Z)(["\n	max-width: 80%;\n	max-height: 80%;\n	object-fit: contain;\n	position: absolute;\n	top: 50%;\n	left: 50%;\n	transform: translate(-50%, -50%);\n"]);return b=function(){return a},a}function h(){var a=(0,i.Z)(["\n	font-size: clamp(1.2rem, 1.8vw, 1.4rem);\n	max-width: 80%;\n	text-overflow: ellipsis;\n	overflow: hidden;\n"]);return h=function(){return a},a}var w=function(a){var e=a.image,n=a.title,i=a.url,r=(0,f.useRouter)().pathname.split("/").filter(Boolean),l="".concat(r,"/").concat(i);return(0,t.jsx)(v,{children:(0,t.jsx)(m(),{href:l,passHref:!0,children:(0,t.jsx)(_,{children:e?(0,t.jsx)(C,{src:e,alt:n}):(0,t.jsx)(L,{children:n})})})})},v=o.default.div(g(),function(a){return a.theme.background},function(a){var e=a.theme;return d()(e.contrastText,.2)}),_=o.default.a(x()),C=o.default.img(b()),L=o.default.h2(h());function A(){var a=(0,i.Z)(["\n	padding: 1rem 0;\n	margin: auto;\n	display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1rem;\n    padding-bottom: 4rem;\n    "," {\n        grid-template-columns: repeat(4, 1fr);\n    }\n    "," {\n        grid-template-columns: repeat(5, 1fr);\n    }\n"]);return A=function(){return a},a}var S=function(){var a=(0,r.E)({}),e=a.data,n=a.isLoading;return(0,t.jsx)(j,{children:n?Array.from({length:12}).map(function(a,e){return(0,t.jsx)(u.As,{},"loader-".concat(e))}):c.s.map(function(a){if(null==e?void 0:e[a.canal])return(0,t.jsx)(w,{title:a.title,url:a.url,image:a.img},a.canal)})})},j=o.default.div(A(),l.q.min_width.mobileL,l.q.min_width.tabletL)},53100:function(a,e,n){"use strict";n.d(e,{s:function(){return i}});var i=[{title:"Premier League",url:"premier-league",canal:"premierleague",img:"/_next/static/media/Premier-League.e0ab4a6e.webp"},{title:"UEFA Champions League",url:"champions-league",canal:"champions",img:"/_next/static/media/champions-league.5ec7d2ac.webp"},{title:"La Liga (Espa\xf1a)",url:"la-liga",canal:"espana",img:"/_next/static/media/la-liga.2d9de864.webp"},{title:"Alemania Bundesliga",url:"bundesliga",canal:"alemania",img:"/_next/static/media/bundesliga.3846672e.webp"},{title:"Argentina Copa de la Liga Profesional",url:"liga-profesional",canal:"copalpf",img:"/_next/static/media/liga-profesional.96a6adc5.webp"},{title:"La Liga 1 (Peru)",url:"liga-1",canal:"peru",img:"/_next/static/media/liga-1.0188ad5c.webp"},{title:"Brasil Serie A",url:"serie-a-brasil",canal:"brasileirao",img:"/_next/static/media/serie-A-brasil.cce1708e.webp"},{title:"Italia Serie A",url:"serie-a-italia",canal:"italia",img:"/_next/static/media/serieA-Italia.be7e3112.webp"},{title:"Copa Sudamericana",url:"copa-sudamericana",canal:"sudamericana",img:"/_next/static/media/Sudamericana.44a320f7.webp"},{title:"UEFA Europa League",url:"uefa-europa-league",canal:"uefa",img:"/_next/static/media/EuropaLeague.b98c021e.webp"},{title:"Copa Libertadores",url:"copa-libertadores",canal:"libertadores",img:"/_next/static/media/CopaLibertadores.13f3b616.webp"},{title:"Argentina Superliga",canal:"primeraa",url:"argentina-superliga"},{title:"Copa del Mundo 2022",canal:"mundial",url:"copa-del-mundo-2022"},{title:"Mundial de Clubes",canal:"mundialclubes",url:"mundial-de-Clubes"},{title:"UEFA Supercopa",canal:"uefasupercopa",url:"uefa-Supercopa"},{title:"Recopa Sudamericana",canal:"recopa",url:"recopa-sudamericana"},{title:"M\xe9xico Liga MX",canal:"mexico",url:"mexico-liga-mx",img:"/_next/static/media/LigaMX.090dab26.webp"},{title:"Francia Ligue 1",canal:"francia",url:"francia-liga-1",img:"/_next/static/media/Ligue1_Uber_Eats_logo.3d8f6d34.webp"},{title:"Supercopa de Espa\xf1a",canal:"supercopaespana",url:"supercopa-de-espanha"},{title:"Supercopa de Italia",canal:"supercopaitalia",url:"supercopa-de-italia"},{title:"Community Shield",canal:"facshield",url:"community-Shield"},{title:"Supercopa de Francia",canal:"supercopafrancia",url:"supercopa-de-francia"},{title:"Supercopa de Alemania",canal:"supercopaalemania",url:"supercopa-de-alemania"},{title:"Copa del Rey",canal:"copadelrey",url:"copa-del-rey"},{title:"Copa Italia",canal:"copaitalia",url:"copa-italia"},{title:"FA Cup",canal:"copafa",url:"fa-cup",img:"/_next/static/media/emirates-fa-cup.d7a49e79.webp"},{title:"Copa de Francia",canal:"copafrancia",url:"copa-de-francia"},{title:"Copa de Alemania",canal:"copaalemania",url:"copa-de-alemania"},{title:"Copa del Mundo Femenina",canal:"mundialfemenino",url:"copa-del-mundo-femenina"},]},25846:function(a,e,n){"use strict";n.r(e);var i=n(85893),t=n(7037),r=n(39709),l=n(86253),o=n(59288),c=n(88575),u=function(){return(0,r.r)({PageURL:window.location.href,PageTitle:"Calendario de F\xfatbol",PageCategory:"Calendario de F\xfatbol"}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h,{title:"Calendario de F\xfatbol | Informaci\xf3n apuestas deportivas",description:"Encuentra el calendario de futbol de los mejores ligas del mundo en la p\xe1gina informativa de apuestas deportivas de Apuesta Total"}),(0,i.jsx)(l.v,{}),(0,i.jsxs)(c.vx,{children:[(0,i.jsx)(c.N0,{children:"Calendario de F\xfatbol"}),(0,i.jsx)(o.S,{})]})]})};e.default=u}},function(a){a.O(0,[3662,7574,9774,2888,179],function(){return a(a.s=48078)}),_N_E=a.O()}]);
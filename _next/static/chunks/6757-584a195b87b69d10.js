"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6757],{63345:function(e,n,a){a.d(n,{Z:function(){return p}});var t={lessThanXSeconds:{one:"menos de un segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos de un minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"alrededor de 1 hora",other:"alrededor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 d\xeda",other:"{{count}} d\xedas"},aboutXWeeks:{one:"alrededor de 1 semana",other:"alrededor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"alrededor de 1 mes",other:"alrededor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"alrededor de 1 a\xf1o",other:"alrededor de {{count}} a\xf1os"},xYears:{one:"1 a\xf1o",other:"{{count}} a\xf1os"},overXYears:{one:"m\xe1s de 1 a\xf1o",other:"m\xe1s de {{count}} a\xf1os"},almostXYears:{one:"casi 1 a\xf1o",other:"casi {{count}} a\xf1os"}},r=function(e,n,a){var r,i=t[e];return(r="string"==typeof i?i:1===n?i.one:i.other.replace("{{count}}",n.toString()),null!=a&&a.addSuffix)?a.comparison&&a.comparison>0?"en "+r:"hace "+r:r},i=a(49526),o={date:(0,i.Z)({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,i.Z)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.Z)({formats:{full:"{{date}} 'a las' {{time}}",long:"{{date}} 'a las' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={lastWeek:"'el' eeee 'pasado a la' p",yesterday:"'ayer a la' p",today:"'hoy a la' p",tomorrow:"'ma\xf1ana a la' p",nextWeek:"eeee 'a la' p",other:"P"},s={lastWeek:"'el' eeee 'pasado a las' p",yesterday:"'ayer a las' p",today:"'hoy a las' p",tomorrow:"'ma\xf1ana a las' p",nextWeek:"eeee 'a las' p",other:"P"},u=function(e,n,a,t){return 1!==n.getUTCHours()?s[e]:d[e]},c=a(88486),l={ordinalNumber:function(e,n){return Number(e)+"\xba"},era:(0,c.Z)({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","despu\xe9s de cristo"]},defaultWidth:"wide"}),quarter:(0,c.Z)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,c.Z)({values:{narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],wide:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]},defaultWidth:"wide"}),day:(0,c.Z)({values:{narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","mi","ju","vi","s\xe1"],abbreviated:["dom","lun","mar","mi\xe9","jue","vie","s\xe1b"],wide:["domingo","lunes","martes","mi\xe9rcoles","jueves","viernes","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:(0,c.Z)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"ma\xf1ana",afternoon:"tarde",evening:"tarde",night:"noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"ma\xf1ana",afternoon:"tarde",evening:"tarde",night:"noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"ma\xf1ana",afternoon:"tarde",evening:"tarde",night:"noche"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"de la ma\xf1ana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"de la ma\xf1ana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"de la ma\xf1ana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"}},defaultFormattingWidth:"wide"})},m=a(60974),f=a(76723),h={ordinalNumber:(0,m.Z)({matchPattern:/^(\d+)(º)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,f.Z)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes de la era com[uú]n)/i,/^(despu[eé]s de cristo|era com[uú]n)/i]},defaultParseWidth:"any"}),quarter:(0,f.Z)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,f.Z)({matchPatterns:{narrow:/^[efmajsond]/i,abbreviated:/^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,wide:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^e/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^en/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i]},defaultParseWidth:"any"}),day:(0,f.Z)({matchPatterns:{narrow:/^[dlmjvs]/i,short:/^(do|lu|ma|mi|ju|vi|s[áa])/i,abbreviated:/^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,wide:/^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^mi/i,/^ju/i,/^vi/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,f.Z)({matchPatterns:{narrow:/^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,any:/^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/mañana/i,afternoon:/tarde/i,evening:/tarde/i,night:/noche/i}},defaultParseWidth:"any"})},p={code:"es",formatDistance:r,formatLong:o,formatRelative:u,localize:l,match:h,options:{weekStartsOn:1,firstWeekContainsDate:1}}},95904:function(e,n,a){a.d(n,{J:function(){return s}});var t=a(7297),r=a(85893),i=a(5434),o=a(53918);function d(){var e=(0,t.Z)(["\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n    align-items: center;\n    padding: 20px 0px;\n"]);return d=function(){return e},e}var s=function(){return(0,r.jsxs)(u,{children:[(0,r.jsx)("span",{children:"No tienes Notificaciones"}),(0,r.jsx)(i.gqM,{})]})},u=o.default.div(d())},25081:function(e,n,a){a.d(n,{t:function(){return w}});var t=a(47568),r=a(7297),i=a(70655),o=a(85893),d=a(10335),s=a(27746),u=a(94184),c=a.n(u),l=a(73710),m=a.n(l),f=a(11163),h=a(67294),p=a(63750),g=a(53918),v=function(e,n){var a=(0,h.useRef)(),t=(0,h.useState)(!1),r=t[0],i=t[1];return e||(e=a),(0,h.useEffect)(function(){var a=function(e){if(e)return!(e.getBoundingClientRect().top-n)},t=function(){a(e.current)?i(!0):i(!1)};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}},[n]),{ref:e,activeSticky:r}};function b(){var e=(0,r.Z)(["\n\n"]);return b=function(){return e},e}function x(){var e=(0,r.Z)(["\n	display: flex;\n	align-items: center;\n	> button {\n		background: transparent;\n		outline: none;\n		padding: 0.8rem;\n		display: grid;\n		place-items: center;\n		border-radius: 50%;\n		transition: 300ms;\n		border: 1px solid transparent;\n		svg {\n			color: black;\n		}\n\n		&:disabled{\n			opacity: 0.5;\n		}\n\n		&.loading{\n		    border: 1px solid ",";\n			background: ",";\n		}\n	\n	}\n"]);return x=function(){return e},e}function y(){var e=(0,r.Z)(["\n	display: flex;\n	align-items: center;\n	justify-content: end;\n	position: sticky;\n    z-index: 2;\n	background: white;\n    top: ","px;\n	transition: 200ms linear;\n	gap: 1rem;\n	padding: 5px;\n    &.active {\n        border-bottom: 2px solid ",";\n    }\n	\n"]);return y=function(){return e},e}var w=function(e){var n=e.init,a=e.end,r=e.size,u=e.total,l=e.loading;null!=r||(r=20);var m,g=(0,d.Z)().heightHeader,b=v(null,g),x=b.ref,y=b.activeSticky,w=(0,h.useRef)(),P=(0,h.useRef)(),W=(0,f.useRouter)(),Z=0===n,N=a>=u;(0,h.useEffect)(function(){l||(w.current.classList.remove("loading"),P.current.classList.remove("loading"))},[l,n,a]);var C,E=(m=(0,t.Z)(function(){return(0,i.__generator)(this,function(e){switch(e.label){case 0:if(Z)return[2];return P.current.classList.add("loading"),[4,W.push({pathname:s.y.notificaciones.url,query:{init:n-r,end:a-r}})];case 1:return e.sent(),[2]}})}),function(){return m.apply(this,arguments)}),T=(C=(0,t.Z)(function(){return(0,i.__generator)(this,function(e){switch(e.label){case 0:if(N)return[2];return w.current.classList.add("loading"),[4,W.push({pathname:s.y.notificaciones.url,query:{init:n+r,end:a+r}})];case 1:return e.sent(),[2]}})}),function(){return C.apply(this,arguments)});return(0,o.jsxs)(M,{ref:x,className:c()({active:y}),$heightHeader:g,children:[(0,o.jsxs)(j,{children:[n||1,"-",a>u?u:a," de ",u]}),(0,o.jsxs)(k,{children:[(0,o.jsx)("button",{type:"button",ref:P,onClick:E,disabled:Z,children:(0,o.jsx)(p.pjk,{})}),(0,o.jsx)("button",{type:"button",ref:w,onClick:T,disabled:N,children:(0,o.jsx)(p.fmn,{})})]})]})},j=g.default.div(b()),k=g.default.div(x(),function(e){return m()(e.theme.contrastText,.2)},function(e){return m()(e.theme.contrastText,.15)}),M=g.default.div(y(),function(e){return e.$heightHeader},function(e){return m()(e.theme.contrastText,.1)})},78703:function(e,n,a){a.d(n,{c:function(){return f}});var t=a(7297),r=a(85893),i=a(23200),o=a(94184),d=a.n(o),s=a(73710),u=a.n(s),c=a(5434),l=a(53918);function m(){var e=(0,t.Z)(["\n    display: grid;\n    grid-template-columns: 2.5rem 1fr auto;\n    align-items: center;\n    padding: 10px 14px;\n    transition: 200ms;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    > * {\n        display: flex;\n        align-items: flex-end;\n        svg {\n            font-size: 1.2rem;\n            /* filter: drop-shadow(0 0 2px rgb(0 0 0 / 1)); */\n            filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.5));\n        }\n\n        &.date {\n            font-size: 0.85rem;\n            color: ",";\n        }\n    }\n    :hover {\n        ","\n    }\n\n    &.PROMOTION {\n        background: ",";\n    }\n    &.NOTIFIED {\n        > * {\n            font-weight: 400;\n        }\n    }\n    &.PENDING {\n        background: ",";\n        > * {\n            font-weight: 600;\n            .status {\n                font-weight: 400;\n            }\n            .icon__wrap {\n                position: relative;\n                > svg {\n                    color: ",";\n                }\n            }\n        }\n    }\n"]);return m=function(){return e},e}var f=function(e){var n=e.notification;return(0,r.jsxs)(h,{className:d()(null==n?void 0:n.type,null==n?void 0:n.status),children:[(0,r.jsx)("div",{className:"icon",children:(0,r.jsx)("div",{className:"icon__wrap",children:"PENDING"!==n.status?(0,r.jsx)(c.BI3,{}):(0,r.jsx)(c.GSm,{})})}),(0,r.jsx)("div",{className:"body",children:(0,r.jsx)("div",{children:n.subject})}),(0,r.jsx)("div",{className:"date",children:n.date})]})},h=l.default.div(m(),function(e){return u()(e.theme.contrastText,.7)},(0,i.q)({transparency:.15}).medium,function(e){return u()(e.theme.primary,.03)},function(e){return u()(e.theme.secondary,.1)},function(e){return e.theme.secondary})},69379:function(e,n,a){a.d(n,{P:function(){return l}});var t=a(26042),r=a(50211),i=a(67962),o=a(77566),d=a(17520),s=a(47041),u=a(67294),c=a(26281),l=function(e){var n=e.lobby,a=(0,r.Z)(),l=a.session,m=a.userId,f=(0,i.$_)({session:l,lobby:n},{skip:!l}).data,h=(0,d.TL)(),p=(0,u.useState)([]),g=p[0],v=p[1],b="".concat("NOTIFICACIONS_").concat(n).concat(m);return(0,u.useEffect)(function(){if(f&&(null==f?void 0:f.length)>0){var e=(0,s.getCookie)(b);if(e&&"string"==typeof e){var n=JSON.parse(e);v(f.filter(function(e){return -1===n.findIndex(function(n){return n.name===e.name})}))}else v(f);var a=new Date,t=new Date(a.getFullYear()+1,a.getMonth(),a.getDate());(0,s.setCookie)(b,f,{expires:t})}},[f]),(0,u.useEffect)(function(){g.length>0&&g.forEach(function(e){var n=(0,c.Vj)();h((0,o.VF)((0,t.Z)({reduxId:n,sub_type:"POPUP_FIXED"},e)))})},[g]),null}}}]);
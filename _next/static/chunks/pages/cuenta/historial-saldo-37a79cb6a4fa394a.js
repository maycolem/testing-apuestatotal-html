(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3623],{86010:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e){if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t)}return i}t.Z=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},63345:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a={lessThanXSeconds:{one:"menos de un segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos de un minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"alrededor de 1 hora",other:"alrededor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 d\xeda",other:"{{count}} d\xedas"},aboutXWeeks:{one:"alrededor de 1 semana",other:"alrededor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"alrededor de 1 mes",other:"alrededor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"alrededor de 1 a\xf1o",other:"alrededor de {{count}} a\xf1os"},xYears:{one:"1 a\xf1o",other:"{{count}} a\xf1os"},overXYears:{one:"m\xe1s de 1 a\xf1o",other:"m\xe1s de {{count}} a\xf1os"},almostXYears:{one:"casi 1 a\xf1o",other:"casi {{count}} a\xf1os"}},i=function(e,t,n){var i,r=a[e];return(i="string"==typeof r?r:1===t?r.one:r.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix)?n.comparison&&n.comparison>0?"en "+i:"hace "+i:i},r=n(49526),o={date:(0,r.Z)({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,r.Z)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,r.Z)({formats:{full:"{{date}} 'a las' {{time}}",long:"{{date}} 'a las' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},s={lastWeek:"'el' eeee 'pasado a la' p",yesterday:"'ayer a la' p",today:"'hoy a la' p",tomorrow:"'ma\xf1ana a la' p",nextWeek:"eeee 'a la' p",other:"P"},d={lastWeek:"'el' eeee 'pasado a las' p",yesterday:"'ayer a las' p",today:"'hoy a las' p",tomorrow:"'ma\xf1ana a las' p",nextWeek:"eeee 'a las' p",other:"P"},l=function(e,t,n,a){return 1!==t.getUTCHours()?d[e]:s[e]},c=n(88486),u={ordinalNumber:function(e,t){return Number(e)+"\xba"},era:(0,c.Z)({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","despu\xe9s de cristo"]},defaultWidth:"wide"}),quarter:(0,c.Z)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,c.Z)({values:{narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],wide:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]},defaultWidth:"wide"}),day:(0,c.Z)({values:{narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","mi","ju","vi","s\xe1"],abbreviated:["dom","lun","mar","mi\xe9","jue","vie","s\xe1b"],wide:["domingo","lunes","martes","mi\xe9rcoles","jueves","viernes","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:(0,c.Z)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"ma\xf1ana",afternoon:"tarde",evening:"tarde",night:"noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"ma\xf1ana",afternoon:"tarde",evening:"tarde",night:"noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"ma\xf1ana",afternoon:"tarde",evening:"tarde",night:"noche"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"de la ma\xf1ana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"de la ma\xf1ana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"de la ma\xf1ana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"}},defaultFormattingWidth:"wide"})},m=n(60974),h=n(76723),f={ordinalNumber:(0,m.Z)({matchPattern:/^(\d+)(º)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,h.Z)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes de la era com[uú]n)/i,/^(despu[eé]s de cristo|era com[uú]n)/i]},defaultParseWidth:"any"}),quarter:(0,h.Z)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,h.Z)({matchPatterns:{narrow:/^[efmajsond]/i,abbreviated:/^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,wide:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^e/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^en/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i]},defaultParseWidth:"any"}),day:(0,h.Z)({matchPatterns:{narrow:/^[dlmjvs]/i,short:/^(do|lu|ma|mi|ju|vi|s[áa])/i,abbreviated:/^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,wide:/^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^mi/i,/^ju/i,/^vi/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,h.Z)({matchPatterns:{narrow:/^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,any:/^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/mañana/i,afternoon:/tarde/i,evening:/tarde/i,night:/noche/i}},defaultParseWidth:"any"})},p={code:"es",formatDistance:i,formatLong:o,formatRelative:l,localize:u,match:f,options:{weekStartsOn:1,firstWeekContainsDate:1}}},87979:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var a=n(94184),i=n.n(a),r=n(76642),o=n(67294),s=n(53918),d=n(85893),l=o.forwardRef(function(e,t){var n=e.color,a=e.type,o=e.children,s=e.loading,l=e.disabled,m=e.onClick,h=e.className,f=e.size,p=e.underline,g=e.id,v=e.fullWidth,b=e.variant;return(0,d.jsxs)(u,{type:void 0===a?"button":a,$color:void 0===n?"primary":n,disabled:l,onClick:m,className:h,$size:void 0===f?"normal":f,$underline:void 0!==p&&p,id:g,$fullWidth:v,$variant:void 0===b?"contained":b,ref:t,children:[(0,d.jsx)(c,{className:i()({hidden:s}),children:o}),s&&(0,d.jsx)(r.g,{loading:!0})]})}),c=s.default.div.withConfig({displayName:"Button__ContentCss",componentId:"sc-qfjn0s-0"})(["&.hidden{opacity:0;}"]),u=s.default.button.withConfig({displayName:"Button__Css",componentId:"sc-qfjn0s-1"})(["padding:1rem;font-size:1rem;font-weight:500;border-radius:0.5rem;position:relative;box-shadow:0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08);&:disabled{opacity:0.2;cursor:not-allowed;pointer-events:none;}"," "," "," ",""],function(e){if(e.$fullWidth)return(0,s.css)(["width:100%;"])},function(e){if(e.$underline)return(0,s.css)(["text-decoration:underline;"])},function(e){switch(e.$color){case"primary":return(0,s.css)(["border:1px solid ",";background:",";color:white;",""],function(e){return e.theme.status.primary},function(e){return e.theme.status.primary},function(){if("outline"===e.$variant)return(0,s.css)(["background:transparent;color:",";"],function(e){return e.theme.status.primary})});case"info":return(0,s.css)(["background:",";border:1px solid ",";color:white;"],function(e){return e.theme.status.info},function(e){return e.theme.status.info});case"secondary":return(0,s.css)(["background:",";border:1px solid ",";color:black;"],function(e){return e.theme.secondary},function(e){return e.theme.secondary});case"success":return(0,s.css)(["background:",";border:1px solid ",";color:white;"],function(e){return e.theme.status.success},function(e){return e.theme.status.success});case"alternate4":return(0,s.css)(["background:",";border:1px solid ",";color:black;"],function(e){return e.theme.status.alternate4},function(e){return e.theme.status.alternate4});case"dark":return(0,s.css)(["background:",";border:1px solid ",";color:white;",""],function(e){return e.theme.status.dark},function(e){return e.theme.status.dark},function(){if("outline"===e.$variant)return(0,s.css)(["background:transparent;color:",";"],function(e){return e.theme.status.dark})});case"light":return(0,s.css)(["background:",";border:1px solid ",";color:black;"],function(e){return e.theme.status.light},function(e){return e.theme.status.alternate4});default:return(0,s.css)(["background:",";border:1px solid ",";color:white;"],function(e){return e.theme.status.primary},function(e){return e.theme.status.primary})}},function(e){switch(e.$size){case"xs":return(0,s.css)(["height:28px;font-size:15px !important;padding:0.25rem 1rem;border-radius:4px;"]);case"small":return(0,s.css)(["padding:0.7rem 1rem;"]);default:return(0,s.css)(["padding:1rem;"])}})},76642:function(e,t,n){"use strict";n.d(t,{g:function(){return d}});var a=n(94184),i=n.n(a),r=n(67294),o=n(53918),s=n(85893),d=function(e){var t=e.width,n=e.height,a=e.loading,d=e.color,c=(0,r.useState)(),u=c[0],m=c[1],h=(0,o.useTheme)().status;return(0,r.useEffect)(function(){if(u){var e=u.parentElement,a=e.offsetWidth,i=e.offsetHeight;if(t||n)u.style.width=t,u.style.height=n;else{var r=.5*(a<i?a:i);r<12&&(r=12),u.style.width="".concat(r,"px"),u.style.height="".concat(r,"px")}}},[u,t,n]),(0,s.jsx)(l,{ref:function(e){m(e)},className:i()("wrapper-chase",{loading:a}),$background:h[d],$width:t,$height:n,children:(0,s.jsxs)("div",{className:"sk-chase",children:[(0,s.jsx)("div",{className:"sk-chase-dot first"}),(0,s.jsx)("div",{className:"sk-chase-dot"}),(0,s.jsx)("div",{className:"sk-chase-dot"}),(0,s.jsx)("div",{className:"sk-chase-dot"}),(0,s.jsx)("div",{className:"sk-chase-dot"}),(0,s.jsx)("div",{className:"sk-chase-dot"})]})})},l=o.default.div.withConfig({displayName:"Loading__Css",componentId:"sc-1jpsoaq-0"})(["transition:150ms;opacity:0;&.loading{opacity:1;}&.wrapper-chase{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:",";height:",';}.sk-chase{width:100%;height:100%;position:relative;animation:sk-chase 2.5s infinite linear both;}.sk-chase-dot{width:100%;height:100%;position:absolute;left:0;top:0;animation:sk-chase-dot 2s infinite ease-in-out both;}.sk-chase-dot:before{content:"";display:block;width:30%;height:30%;background-color:',";border-radius:100%;animation:sk-chase-dot-before 2s infinite ease-in-out both;}.sk-chase-dot:nth-child(1){animation-delay:-1.1s;}.sk-chase-dot:nth-child(2){animation-delay:-1s;}.sk-chase-dot:nth-child(3){animation-delay:-0.9s;}.sk-chase-dot:nth-child(4){animation-delay:-0.8s;}.sk-chase-dot:nth-child(5){animation-delay:-0.7s;}.sk-chase-dot:nth-child(6){animation-delay:-0.6s;}.sk-chase-dot:nth-child(1):before{animation-delay:-1.1s;}.sk-chase-dot:nth-child(2):before{animation-delay:-1s;}.sk-chase-dot:nth-child(3):before{animation-delay:-0.9s;}.sk-chase-dot:nth-child(4):before{animation-delay:-0.8s;}.sk-chase-dot:nth-child(5):before{animation-delay:-0.7s;}.sk-chase-dot:nth-child(6):before{animation-delay:-0.6s;}@keyframes sk-chase{100%{transform:rotate(360deg);}}@keyframes sk-chase-dot{80%,100%{transform:rotate(360deg);}}@keyframes sk-chase-dot-before{50%{transform:scale(0.4);}100%,0%{transform:scale(1);}}"],function(e){return e.$width},function(e){return e.$height},function(e){var t;return null!==(t=e.$background)&&void 0!==t?t:"white"})},63933:function(e,t,n){"use strict";var a=n(67294);t.Z=function(){var e=(0,a.useState)({width:void 0,height:void 0}),t=e[0],n=e[1];return(0,a.useEffect)(function(){function e(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}},[]),t}},29918:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eg}});var a,i,r,o,s,d,l,c,u,m,h=n(59499),f=n(85260),p=n(2817),g=n(53918),v=n(84225),b=n(94184),y=n.n(b),x=n(85893),w=function(e){var t=e.data;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(P,{children:t.map(function(e,t){return(0,x.jsxs)(j,{children:[(0,x.jsx)("div",{className:"title-id",children:e.operation}),(0,x.jsxs)(E,{children:[(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"title",children:"Fecha y Hora"}),(0,x.jsx)("div",{className:"row-content",children:e.operation_dateFormat})]}),(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"title",children:"Tipo Movimiento"}),(0,x.jsxs)("div",{className:"row-content",children:[e.type_nameTranslate," "]})]}),(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"title",children:"M\xe9todo"}),(0,x.jsx)("div",{className:"row-content",children:e.method_nameTranslate})]}),(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"title",children:"Monto"}),(0,x.jsx)("div",{className:y()("row-content amount",{negative:e.amount<0}),children:e.amountCurrency})]}),(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"title",children:"Saldo"}),(0,x.jsx)("div",{className:"row-content",children:e.balanceCurrency})]})]})]},e.operation+e.operation_date+t)})})})},j=g.default.div.withConfig({displayName:"Cards__StyledItem",componentId:"sc-1mvnbe-0"})(["&{border:1px solid ",";border-radius:8px;padding:10px;padding-bottom:0;background:",';display:flex;flex-direction:column;gap:10px;box-shadow:rgba(149,157,165,0.2) 0px 4px 10px;.title-id{text-align:center;font-feature-settings:"tnum";font-weight:400;}}'],function(e){return e.theme.alternate8},function(e){return e.theme.background}),E=g.default.div.withConfig({displayName:"Cards__StyledItemContent",componentId:"sc-1mvnbe-1"})(["display:flex;justify-content:flex-start;flex-wrap:wrap;display:grid;position:relative;top:1px;border-top:1px solid ",";grid-auto-flow:dense;grid-template-columns:repeat(auto-fill,minmax(calc(100% / 2),1fr));","{grid-template-columns:repeat(auto-fill,minmax(calc(100% / 3),1fr));}.row{display:flex;flex-direction:column;gap:2px;border-bottom:1px solid ",";padding-bottom:7px;padding-top:7px;padding-left:0;padding-right:10px;.title{font-size:0.75rem;text-transform:uppercase;color:#1a1b25;font-weight:500;}.row-content{&.negative{color:",';}white-space:nowrap;text-overflow:ellipsis;overflow:hidden;color:#6e6e73;font-size:0.95rem;font-feature-settings:"tnum";}}'],function(e){return e.theme.alternate8},v.q.min_width.tabletS,function(e){return e.theme.alternate8},function(e){return e.theme.primary}),P=g.default.div.withConfig({displayName:"Cards__Styled",componentId:"sc-1mvnbe-2"})(["padding:1rem 1rem;padding-top:0;display:flex;flex-direction:column;gap:1rem;overflow:hidden;"]),T=n(13614),_=n(75921),N=n(98102),O=n(37858),C=n(58439),S=n(73710),k=n.n(S),A=function(e){var t=e.data;return(0,x.jsx)(I,{className:"scroll-container",children:(0,x.jsx)("div",{children:(0,x.jsxs)(T.Z,{"aria-label":"sticky table",stickyHeader:!0,children:[(0,x.jsx)(M,{children:(0,x.jsxs)(_.Z,{children:[(0,x.jsx)(N.Z,{title:"El ID del movimiento no es el ID de la apuesta",children:"ID MOVIMIENTO"}),(0,x.jsx)(N.Z,{children:"FECHA Y HORA"}),(0,x.jsx)(N.Z,{children:"TIPO DE MOVIMIENTO"}),(0,x.jsxs)(N.Z,{children:["M\xc9TODO"," "]}),(0,x.jsx)(N.Z,{align:"right",children:"MONTO"}),(0,x.jsx)(N.Z,{align:"right",children:"SALDO"})]})}),(0,x.jsx)(Z,{children:t.map(function(e,t){return(0,x.jsxs)(_.Z,{children:[(0,x.jsx)(N.Z,{children:e.operation}),(0,x.jsx)(N.Z,{children:e.operation_dateFormat}),(0,x.jsx)(N.Z,{children:e.type_nameTranslate}),(0,x.jsx)(N.Z,{children:e.method_nameTranslate}),(0,x.jsx)(N.Z,{align:"right",className:y()({negative:e.amount<0}),children:e.amountCurrency}),(0,x.jsx)(N.Z,{align:"right",children:e.balanceCurrency})]},e.operation+e.operation_date+t)})})]})})})},I=g.default.div.withConfig({displayName:"Table__StyledScrollContainer",componentId:"sc-qirl5t-0"})(["flex:1;overflow:auto;min-width:max-content;"]),M=(0,g.default)(O.Z).withConfig({displayName:"Table__TableHeadS",componentId:"sc-qirl5t-1"})([".MuiTableCell-root{color:",";background:",';font-family:"Rubik";border-bottom:1px solid ',";padding:8px 1rem;font-weight:500;white-space:nowrap;font-size:0.8rem;}"],function(e){return e.theme.contrastText},function(e){return k()(e.theme.contrastText,.04)},function(e){return k()(e.theme.contrastText,.2)}),Z=(0,g.default)(C.Z).withConfig({displayName:"Table__TableBodyS",componentId:"sc-qirl5t-2"})(['.MuiTableCell-root{font-family:"Rubik";border-bottom:1px solid ',';padding:8px 1rem;font-weight:400;white-space:nowrap;color:#6e6e73;font-feature-settings:"tnum";&.negative{color:',";}}"],function(e){return k()(e.theme.contrastText,.2)},function(e){return e.theme.primary}),D=function(e){var t=e.viewMode,n=e.data;return(0,x.jsx)(R,{children:"table"===t?(0,x.jsx)(A,{data:n}):(0,x.jsx)(w,{data:n})})},R=g.default.div.withConfig({displayName:"DataDisplayManager__Css",componentId:"sc-k9p5is-0"})(["overflow:auto;width:100%;"]),W=n(94566),H=n(27644),U=function(e,t){switch(e){case"Go to page":H.f.push({event:"atm.event",eventName:"recarga_historial_de_saldo",option:"pagina ".concat(t),action:"click"});break;case"Go to next page":H.f.push({event:"atm.event",eventName:"recarga_historial_de_saldo",option:"siguiente",action:"click"});break;case"Go to previous page":H.f.push({event:"atm.event",eventName:"recarga_historial_de_saldo",option:"atras",action:"click"})}};(d=a||(a={})).WINNING="WINNING",d.WAGER="WAGER",d.DEPOSIT="DEPOSIT",d.PAYOUT="PAYOUT",(l=i||(i={})).NIUBIZ="NIUBIZ",l.PROMETEO="PROMETEO",l.ASTROPAY="ASTROPAY",l.KUSHKI="KUSHKI",l.KUSHKI_TRANSFER_IN="KUSHKI_TRANSFER_IN",l.CASH_DEPOSIT_CASH="CASH_DEPOSIT_CASH",l.CASH="CASH",l.NUVEI="NUVEI",l.KASHIO="KASHIO",l.MONNET="MONNET",l.PAGOEFECTIVO="PAGOEFECTIVO",l.PAGOEFECTIVOQR="PAGOEFECTIVOQR",l.ATPAYMENTTELESERVICIOS="ATPAYMENTTELESERVICIOS",l.SAFETYPAY="SAFETYPAY",l.BANK_PAYOUT="BANK_PAYOUT",l.NIUBIZ_PAYOUT="NIUBIZ_PAYOUT",l.ATPAYMENTSERVICE_PAYOUT="ATPAYMENTSERVICE_PAYOUT",(c=r||(r={})).Atp="ATP",(u=o||(o={})).Pen="PEN",(m=s||(s={})).PROCESSED="PROCESSED",m.SUCCESS="SUCCESS",m.DENIED="DENIED",m.CANCELLED="CANCELLED",m.NEW="NEW",m.ACCEPTED="ACCEPTED";var L=[{value:"LAST-MOUNTH",descripcion:"\xdaltimos 30 d\xedas",filter:"op_date_init"},{value:"ALL",descripcion:"Todos",filter:"all"}].concat([{value:"DEPOSIT",descripcion:"Dep\xf3sito",filter:"type"},{value:"PAYOUT",descripcion:"Retiro",filter:"type"},{value:"REDEEM",descripcion:"Conversion Bono",filter:"type"},{value:"WAGER",descripcion:"Apuesta",filter:"type"},{value:"ROLLBACK",descripcion:"Rollback",filter:"type"},{value:"WINNING",descripcion:"Premio",filter:"type"}],[{value:i.NIUBIZ_PAYOUT,descripcion:"Niubiz",filter:"method",advanced:!0},{value:i.BANK_PAYOUT,descripcion:"Bank Transfer",filter:"method",advanced:!0},{value:i.ATPAYMENTTELESERVICIOS,descripcion:"Servicios Pago Apuesta Total",filter:"method",advanced:!0},{value:i.ATPAYMENTSERVICE_PAYOUT,descripcion:"Tienda AT",filter:"method",advanced:!0},{value:i.ATPAYMENTTELESERVICIOS,descripcion:"Apuesta Total Teleservicios",filter:"method",advanced:!0}]),Y=n(50029),z=n(87794),F=n.n(z),V=n(67294),B=function(e){var t,n=e.sizePerPage,a=e.total,i=(0,V.useState)(1),r=i[0],o=i[1],s=(0,V.useState)(!1),d=s[0],l=s[1],c=(t=(0,Y.Z)(F().mark(function e(t,n){return F().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),o(n),e.next=4,(0,f.g)(200);case 4:l(!1);case 5:case"end":return e.stop()}},e)})),function(e,n){return t.apply(this,arguments)});return{init:(r-1)*n,end:r*n,count:Math.ceil(a/n),page:r,updatePage:c,isUpdatePage:d}},q=n(668),G=n(82771),$=n(43335),K=n(32912);function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach(function(t){(0,h.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var J=function(e){var t=e.sizePerPage,n=void 0===t?"13":t,a=q.T.getPeruTime(),i=new Date(new Date().setDate(a.getDate()-30)).setHours(0,0,0),r=(0,K.Z)(i,"yyyy-MM-dd'T'HH:mm"),o=(0,$.CG)(G.Up),s={amount:"",operation:"",type:"",op_date_init:r,op_date_end:"",init:"0",end:n,status:"",session:o,method:""},d=(0,V.useState)(s),l=d[0],c=d[1];(0,V.useEffect)(function(){o&&c(X(X({},l),{},{session:o}))},[o]);var u=function(e){c(X(X({},l),e))},m=function(e){c(X(X(X({},l),e),{},{op_date_init:r}))};return{query:l,sizePerPage:n,updateQuery:u,updateQueryWithLastMonth:m,resetQueryLastMonth:function(){c(s)},resetQueryAllRows:function(){c(X(X({},s),{},{op_date_init:"2021-01-01 00:00:00"}))},session:o,lastMonth:r}},ee=n(98353),et=n(36844),en=n(24705),ea=n(34853),ei=function(e){var t=e.amount/100,n=e.previous_amount/100,a=null;return a=t>0?t+n:Math.abs(Math.abs(t)-n),{balanceCurrency:(0,ee.fO)(a),balance:a}},er=function(e){var t;return null!==(t=({PAGOEFECTIVO:"PagoEfectivo",PAGOEFECTIVOQR:"PagoEfectivoQR"})[null==e?void 0:e.method])&&void 0!==t?t:null==e?void 0:e.method_name},eo=function(e){var t=(null==e?void 0:e.amount)/100;if("PAYOUT"!==e.type)return null==e?void 0:e.type;if("ACCEPTED"===e.status)return"Solicitud Retiro Aceptada";if("DENIED"===e.status)return t>0?"Solicitud Retiro Denegada":"Solicitud Retiro";if("PROCESSED"===e.status)return"Pagado";if("CANCELLED"===e.status)return t>0?"Solicitud Retiro Cancelado":"Solicitud Retiro";else if((null==e?void 0:e.status)==="NEW")return"Nueva Solicitud";else return null==e?void 0:e.type},es=function(e){if(null!=e&&e.machine)return(null==e?void 0:e.machine_name)==="Altenar SportsBetting"?"Apuesta Deportivas":null==e?void 0:e.machine_name},ed=en.ll.injectEndpoints({endpoints:function(e){return{getBalanceHistory:e.query({query:function(e){var t=e.op_date_init,n=e.op_date_end,a=e.init,i=e.end,r=e.status,o=e.operation,s=e.amount,d=e.session,l=e.method,c=e.type;return d?{url:"data/getOperationsHistory",method:"POST",body:new URLSearchParams({company:"ATP",session:d,filter:JSON.stringify({op_date_init:t,op_date_end:n,operation:o,type:c,amount:s,status:r,method:l}),limits:JSON.stringify({init:a,end:i})})}:null},transformResponse:function(e,t,n){var a,i=e,r=[];return(null==i?void 0:i.result)==="OK"&&null!=i&&i.data&&(null==i||null===(a=i.data)||void 0===a||a.forEach(function(e){var t,n;e.balance=null===(t=ei(e))||void 0===t?void 0:t.balance,e.balanceCurrency=null===(n=ei(e))||void 0===n?void 0:n.balanceCurrency,e.amountCurrency=(0,ee.Aq)(null==e?void 0:e.amount),e.operation_dateFormat=(0,et.f)(e.operation_date),e.method_nameTranslate="".concat(ea.ZP.t(es(e))," ").concat(ea.ZP.t(er(e))),e.type_nameTranslate=ea.ZP.t(eo(e)),r.push(e)})),i.data=r,i},keepUnusedDataFor:60,providesTags:function(e){return["getBalanceHistory"]}})}}}).useGetBalanceHistoryQuery,el=n(64840),ec=n(76642),eu=n(6952),em=n(75883),eh=n(96486);function ef(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function ep(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ef(Object(n),!0).forEach(function(t){(0,h.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ef(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var eg=function(){var e,t,n=(0,p.Z)(v.q.min_width.tabletL),a=(0,p.Z)(v.q.min_width.mobileM),i=(0,p.Z)(v.q.min_width.desktopS),r=(0,V.useState)(null),o=r[0],s=r[1],d=J({sizePerPage:"13"}),l=d.query,c=d.sizePerPage,u=d.updateQuery,m=d.resetQueryLastMonth,g=d.resetQueryAllRows,b=d.session,y=d.updateQueryWithLastMonth,w=ed(l,{skip:!b}),j=w.data,E=w.isLoading,P=w.refetch,T=w.isFetching,_=null!==(e=null==j?void 0:j.data)&&void 0!==e?e:[],N=null!==(t=null==j?void 0:j.total)&&void 0!==t?t:0,O=B({sizePerPage:c,total:N}),C=O.count,S=O.end,k=O.init,A=O.page,I=O.updatePage,M=O.isUpdatePage;(0,V.useEffect)(function(){M&&(u(ep(ep({},l),{},{end:String(S),init:String(k)})),(0,f.g)(200).then(function(){document.documentElement.scrollIntoView({inline:"start",block:"start",behavior:"smooth"})}))},[M]);var Z,R,H=function(e){if((0,eh.isObject)(e))"CUSTOM_FILTER"===e.value&&(u(ep(ep({},l),{},{type:e.obj.type,method:e.obj.method,op_date_init:e.obj.dateObj.init,op_date_end:e.obj.dateObj.end,operation:e.obj.operation})),s(null));else{var t=L.find(function(t){return t.value===e});switch(s(t),t.filter){case"op_date_init":"LAST-MOUNTH"===t.value&&m();break;case"all":g();break;default:y(ep(ep({},l),{},(0,h.Z)({},t.filter,t.value)))}}};return(0,x.jsxs)(ew,{children:[(0,x.jsx)(W.A,{onActivateFilter:H,items:L}),(0,x.jsxs)(ey,{children:[(0,x.jsx)(eu.t,{loading:E||T,refetch:P,delayMS:1e3}),(R=(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{children:N})," resultados"]}),o&&!["ALL","LAST-MOUNTH"].includes(o.value)&&(R=(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{children:N})," resultados ",(0,x.jsx)("span",{className:"last30",children:"de los ultimos 30 dias"})]})),(0,x.jsx)(ev,{children:R}))]}),_.length>0?(0,x.jsx)(eb,{children:(0,x.jsx)(D,{data:_,viewMode:i?"table":"cards"})}):E||T?(0,x.jsx)(ec.g,{loading:E||T,color:"primary",width:"50px",height:"50px"}):(0,x.jsx)(em.Z,{}),(0,x.jsx)(ex,{children:(0,x.jsx)(el.Z,{count:C,onChange:function(e,t){I(e,t);var n=null==e?void 0:e.currentTarget,a=null==n?void 0:n.ariaLabel,i=(null==a?void 0:a.indexOf("page"))+4;U(null==a?void 0:a.slice(0,i),t)},page:A,shape:"rounded",variant:"text",boundaryCount:n?2:1,siblingCount:n?2:a?1:0})})]})},ev=g.default.div.withConfig({displayName:"historial-saldo__StyledTotalResult",componentId:"sc-1l8f960-0"})(["> p{color:",';font-feature-settings:"tnum";max-width:200px;text-align:right;padding:14px 0px;span{font-weight:500;&.last30{white-space:nowrap;font-weight:400;}}}'],function(e){return e.theme.alternate11}),eb=g.default.div.withConfig({displayName:"historial-saldo__ContentCss",componentId:"sc-1l8f960-1"})(["&{display:flex;flex:1;flex-direction:column;padding:0;gap:1rem;width:100%;}"]),ey=g.default.div.withConfig({displayName:"historial-saldo__StyledWrapperTop",componentId:"sc-1l8f960-2"})(["display:flex;padding:0 14px;align-items:center;justify-content:space-between;"]),ex=g.default.div.withConfig({displayName:"historial-saldo__StyledWrapperPagination",componentId:"sc-1l8f960-3"})(['padding:1rem 1rem;display:flex;flex-direction:column;gap:1rem;> nav{display:flex;justify-content:center;> ul{margin:auto;> li button[aria-current="true"]{color:',";background:",';}> li button[aria-current="true"]:hover{color:',";background:",";}}}"],function(e){return e.theme.background},function(e){return e.theme.primary},function(e){return e.theme.shadow},function(e){return k()(e.theme.shadow,.04)}),ew=g.default.div.withConfig({displayName:"historial-saldo__HistorySalesS",componentId:"sc-1l8f960-4"})(["&{display:flex;flex:1;flex-direction:column;}"]);g.default.div.withConfig({displayName:"historial-saldo__ContentMainS",componentId:"sc-1l8f960-5"})(["&{display:flex;flex:1;flex-direction:column;padding:0;gap:1rem;width:100%;}"])},13134:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cuenta/historial-saldo",function(){return n(29918)}])},55394:function(e,t,n){"use strict";function a(e,t,n){if(!t.has(e))throw TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}n.d(t,{Z:function(){return a}})},76078:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(55394);function i(e,t){var n,i,r=(0,a.Z)(e,t,"get");return r.get?r.get.call(e):r.value}},82227:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(55394);function i(e,t,n){var i=(0,a.Z)(e,t,"set");return!function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=n}}(e,i,n),n}}},function(e){e.O(0,[3662,2715,1465,2912,6581,5095,4356,7139,7103,7628,9774,2888,179],function(){return e(e.s=13134)}),_N_E=e.O()}]);
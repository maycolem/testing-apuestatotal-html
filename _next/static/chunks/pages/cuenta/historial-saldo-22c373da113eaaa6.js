(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3623],{63933:function(e,t,n){"use strict";var i=n(67294);t.Z=function(){var e=(0,i.useState)({width:void 0,height:void 0}),t=e[0],n=e[1];return(0,i.useEffect)(function(){function e(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}},[]),t}},29918:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ev}});var i,a,o,r,l,s,d,c,u,p,f=n(59499),m=n(67049),h=n(85260),v=n(2817),g=n(53918),x=n(84225),y=n(94184),E=n.n(y),O=n(85893),_=function(e){var t=e.data;return(0,O.jsx)(O.Fragment,{children:(0,O.jsx)(b,{children:t.map(function(e,t){return(0,O.jsxs)(T,{children:[(0,O.jsx)("div",{className:"title-id",children:e.operation}),(0,O.jsxs)(w,{children:[(0,O.jsxs)("div",{className:"row",children:[(0,O.jsx)("div",{className:"title",children:"Fecha y Hora"}),(0,O.jsx)("div",{className:"row-content",children:e.operation_dateFormat})]}),(0,O.jsxs)("div",{className:"row",children:[(0,O.jsx)("div",{className:"title",children:"Tipo Movimiento"}),(0,O.jsxs)("div",{className:"row-content",children:[e.type_nameTranslate," "]})]}),(0,O.jsxs)("div",{className:"row",children:[(0,O.jsx)("div",{className:"title",children:"M\xe9todo"}),(0,O.jsx)("div",{className:"row-content",children:e.method_nameTranslate})]}),(0,O.jsxs)("div",{className:"row",children:[(0,O.jsx)("div",{className:"title",children:"Monto"}),(0,O.jsx)("div",{className:E()("row-content amount",{negative:e.amount<0}),children:e.amountCurrency})]}),(0,O.jsxs)("div",{className:"row",children:[(0,O.jsx)("div",{className:"title",children:"Saldo"}),(0,O.jsx)("div",{className:"row-content",children:e.balanceCurrency})]})]})]},e.operation+e.operation_date+t)})})})},T=g.default.div.withConfig({displayName:"Cards__StyledItem",componentId:"sc-1mvnbe-0"})(["&{border:1px solid ",";border-radius:8px;padding:10px;padding-bottom:0;background:",';display:flex;flex-direction:column;gap:10px;box-shadow:rgba(149,157,165,0.2) 0px 4px 10px;.title-id{text-align:center;font-feature-settings:"tnum";font-weight:400;}}'],function(e){return e.theme.alternate8},function(e){return e.theme.background}),w=g.default.div.withConfig({displayName:"Cards__StyledItemContent",componentId:"sc-1mvnbe-1"})(["display:flex;justify-content:flex-start;flex-wrap:wrap;display:grid;position:relative;top:1px;border-top:1px solid ",";grid-auto-flow:dense;grid-template-columns:repeat(auto-fill,minmax(calc(100% / 2),1fr));","{grid-template-columns:repeat(auto-fill,minmax(calc(100% / 3),1fr));}.row{display:flex;flex-direction:column;gap:2px;border-bottom:1px solid ",";padding-bottom:7px;padding-top:7px;padding-left:0;padding-right:10px;.title{font-size:0.75rem;text-transform:uppercase;color:#1a1b25;font-weight:500;}.row-content{&.negative{color:",';}white-space:nowrap;text-overflow:ellipsis;overflow:hidden;color:#6e6e73;font-size:0.95rem;font-feature-settings:"tnum";}}'],function(e){return e.theme.alternate8},x.q.min_width.tabletS,function(e){return e.theme.alternate8},function(e){return e.theme.primary}),b=g.default.div.withConfig({displayName:"Cards__Styled",componentId:"sc-1mvnbe-2"})(["padding:1rem 1rem;padding-top:0;display:flex;flex-direction:column;gap:1rem;overflow:hidden;"]),N=n(13614),P=n(75921),j=n(98102),S=n(37858),A=n(58439),C=n(73710),I=n.n(C),D=function(e){var t=e.data;return(0,O.jsx)(M,{className:"scroll-container",children:(0,O.jsx)("div",{children:(0,O.jsxs)(N.Z,{"aria-label":"sticky table",stickyHeader:!0,children:[(0,O.jsx)(R,{children:(0,O.jsxs)(P.Z,{children:[(0,O.jsx)(j.Z,{title:"El ID del movimiento no es el ID de la apuesta",children:"ID MOVIMIENTO"}),(0,O.jsx)(j.Z,{children:"FECHA Y HORA"}),(0,O.jsx)(j.Z,{children:"TIPO DE MOVIMIENTO"}),(0,O.jsxs)(j.Z,{children:["M\xc9TODO"," "]}),(0,O.jsx)(j.Z,{align:"right",children:"MONTO"}),(0,O.jsx)(j.Z,{align:"right",children:"SALDO"})]})}),(0,O.jsx)(Z,{children:t.map(function(e,t){return(0,O.jsxs)(P.Z,{children:[(0,O.jsx)(j.Z,{children:e.operation}),(0,O.jsx)(j.Z,{children:e.operation_dateFormat}),(0,O.jsx)(j.Z,{children:e.type_nameTranslate}),(0,O.jsx)(j.Z,{children:e.method_nameTranslate}),(0,O.jsx)(j.Z,{align:"right",className:E()({negative:e.amount<0}),children:e.amountCurrency}),(0,O.jsx)(j.Z,{align:"right",children:e.balanceCurrency})]},e.operation+e.operation_date+t)})})]})})})},M=g.default.div.withConfig({displayName:"Table__StyledScrollContainer",componentId:"sc-qirl5t-0"})(["flex:1;overflow:auto;min-width:max-content;"]),R=(0,g.default)(S.Z).withConfig({displayName:"Table__TableHeadS",componentId:"sc-qirl5t-1"})([".MuiTableCell-root{color:",";background:",';font-family:"Rubik";border-bottom:1px solid ',";padding:8px 1rem;font-weight:500;white-space:nowrap;font-size:0.8rem;}"],function(e){return e.theme.contrastText},function(e){return I()(e.theme.contrastText,.04)},function(e){return I()(e.theme.contrastText,.2)}),Z=(0,g.default)(A.Z).withConfig({displayName:"Table__TableBodyS",componentId:"sc-qirl5t-2"})(['.MuiTableCell-root{font-family:"Rubik";border-bottom:1px solid ',';padding:8px 1rem;font-weight:400;white-space:nowrap;color:#6e6e73;font-feature-settings:"tnum";&.negative{color:',";}}"],function(e){return I()(e.theme.contrastText,.2)},function(e){return e.theme.primary}),U=function(e){var t=e.viewMode,n=e.data;return(0,O.jsx)(L,{children:"table"===t?(0,O.jsx)(D,{data:n}):(0,O.jsx)(_,{data:n})})},L=g.default.div.withConfig({displayName:"DataDisplayManager__Css",componentId:"sc-k9p5is-0"})(["overflow:auto;width:100%;"]),H=n(94566),k=n(27644),Y=function(e,t){switch(e){case"Go to page":k.f.push({event:"atm.event",eventName:"recarga_historial_de_saldo",option:"pagina ".concat(t),action:"click"});break;case"Go to next page":k.f.push({event:"atm.event",eventName:"recarga_historial_de_saldo",option:"siguiente",action:"click"});break;case"Go to previous page":k.f.push({event:"atm.event",eventName:"recarga_historial_de_saldo",option:"atras",action:"click"})}};(s=i||(i={})).WINNING="WINNING",s.WAGER="WAGER",s.DEPOSIT="DEPOSIT",s.PAYOUT="PAYOUT",(d=a||(a={})).NIUBIZ="NIUBIZ",d.PROMETEO="PROMETEO",d.ASTROPAY="ASTROPAY",d.KUSHKI="KUSHKI",d.KUSHKI_TRANSFER_IN="KUSHKI_TRANSFER_IN",d.CASH_DEPOSIT_CASH="CASH_DEPOSIT_CASH",d.CASH="CASH",d.NUVEI="NUVEI",d.KASHIO="KASHIO",d.MONNET="MONNET",d.PAGOEFECTIVO="PAGOEFECTIVO",d.PAGOEFECTIVOQR="PAGOEFECTIVOQR",d.ATPAYMENTTELESERVICIOS="ATPAYMENTTELESERVICIOS",d.SAFETYPAY="SAFETYPAY",d.BANK_PAYOUT="BANK_PAYOUT",d.NIUBIZ_PAYOUT="NIUBIZ_PAYOUT",d.ATPAYMENTSERVICE_PAYOUT="ATPAYMENTSERVICE_PAYOUT",(c=o||(o={})).Atp="ATP",(u=r||(r={})).Pen="PEN",(p=l||(l={})).PROCESSED="PROCESSED",p.SUCCESS="SUCCESS",p.DENIED="DENIED",p.CANCELLED="CANCELLED",p.NEW="NEW",p.ACCEPTED="ACCEPTED";var F=[{value:"LAST-MOUNTH",descripcion:"\xdaltimos 30 d\xedas",filter:"op_date_init"},{value:"ALL",descripcion:"Todos",filter:"all"}].concat([{value:"DEPOSIT",descripcion:"Dep\xf3sito",filter:"type"},{value:"PAYOUT",descripcion:"Retiro",filter:"type"},{value:"REDEEM",descripcion:"Conversion Bono",filter:"type"},{value:"WAGER",descripcion:"Apuesta",filter:"type"},{value:"ROLLBACK",descripcion:"Rollback",filter:"type"},{value:"WINNING",descripcion:"Premio",filter:"type"}],[{value:a.NIUBIZ_PAYOUT,descripcion:"Niubiz",filter:"method",advanced:!0},{value:a.BANK_PAYOUT,descripcion:"Bank Transfer",filter:"method",advanced:!0},{value:a.ATPAYMENTTELESERVICIOS,descripcion:"Servicios Pago Apuesta Total",filter:"method",advanced:!0},{value:a.ATPAYMENTSERVICE_PAYOUT,descripcion:"Tienda AT",filter:"method",advanced:!0},{value:a.ATPAYMENTTELESERVICIOS,descripcion:"Apuesta Total Teleservicios",filter:"method",advanced:!0}]),V=n(50029),G=n(87794),B=n.n(G),K=n(67294),W=function(e){var t,n=e.sizePerPage,i=e.total,a=(0,K.useState)(1),o=a[0],r=a[1],l=(0,K.useState)(!1),s=l[0],d=l[1],c=(t=(0,V.Z)(B().mark(function e(t,n){return B().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),r(n),e.next=4,(0,h.g)(200);case 4:d(!1);case 5:case"end":return e.stop()}},e)})),function(e,n){return t.apply(this,arguments)});return{init:(o-1)*n,end:o*n,count:Math.ceil(i/n),page:o,updatePage:c,isUpdatePage:s}},Q=n(668),q=n(82771),z=n(43335),J=n(32912);function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach(function(t){(0,f.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ee=function(e){var t=e.sizePerPage,n=void 0===t?"13":t,i=Q.T.getPeruTime(),a=new Date(new Date().setDate(i.getDate()-30)).setHours(0,0,0),o=(0,J.Z)(a,"yyyy-MM-dd'T'HH:mm"),r=(0,z.CG)(q.Up),l={amount:"",operation:"",type:"",op_date_init:o,op_date_end:"",init:"0",end:n,status:"",session:r,method:""},s=(0,K.useState)(l),d=s[0],c=s[1];(0,K.useEffect)(function(){r&&c($($({},d),{},{session:r}))},[r]);var u=function(e){c($($({},d),e))},p=function(e){c($($($({},d),e),{},{op_date_init:o}))};return{query:d,sizePerPage:n,updateQuery:u,updateQueryWithLastMonth:p,resetQueryLastMonth:function(){c(l)},resetQueryAllRows:function(){c($($({},l),{},{op_date_init:"2021-01-01 00:00:00"}))},session:r,lastMonth:o}},et=n(98353),en=n(36844),ei=n(24705),ea=n(34853),eo=function(e){var t=e.amount/100,n=e.previous_amount/100,i=null;return i=t>0?t+n:Math.abs(Math.abs(t)-n),{balanceCurrency:(0,et.fO)(i),balance:i}},er=function(e){var t;return null!==(t=({PAGOEFECTIVO:"PagoEfectivo",PAGOEFECTIVOQR:"PagoEfectivoQR"})[null==e?void 0:e.method])&&void 0!==t?t:null==e?void 0:e.method_name},el=function(e){var t=(null==e?void 0:e.amount)/100;if("PAYOUT"!==e.type)return null==e?void 0:e.type;if("ACCEPTED"===e.status)return"Solicitud Retiro Aceptada";if("DENIED"===e.status)return t>0?"Solicitud Retiro Denegada":"Solicitud Retiro";if("PROCESSED"===e.status)return"Pagado";if("CANCELLED"===e.status)return t>0?"Solicitud Retiro Cancelado":"Solicitud Retiro";else if((null==e?void 0:e.status)==="NEW")return"Nueva Solicitud";else return null==e?void 0:e.type},es=function(e){if(null!=e&&e.machine)return(null==e?void 0:e.machine_name)==="Altenar SportsBetting"?"Apuesta Deportivas":null==e?void 0:e.machine_name},ed=ei.ll.injectEndpoints({endpoints:function(e){return{getBalanceHistory:e.query({query:function(e){var t=e.op_date_init,n=e.op_date_end,i=e.init,a=e.end,o=e.status,r=e.operation,l=e.amount,s=e.session,d=e.method,c=e.type;return s?{url:"data/getOperationsHistory",method:"POST",body:new URLSearchParams({company:"ATP",session:s,filter:JSON.stringify({op_date_init:t,op_date_end:n,operation:r,type:c,amount:l,status:o,method:d}),limits:JSON.stringify({init:i,end:a})})}:null},transformResponse:function(e,t,n){var i,a=e,o=[];return(null==a?void 0:a.result)==="OK"&&null!=a&&a.data&&(null==a||null===(i=a.data)||void 0===i||i.forEach(function(e){var t,n;e.balance=null===(t=eo(e))||void 0===t?void 0:t.balance,e.balanceCurrency=null===(n=eo(e))||void 0===n?void 0:n.balanceCurrency,e.amountCurrency=(0,et.Aq)(null==e?void 0:e.amount),e.operation_dateFormat=(0,en.f)(e.operation_date),e.method_nameTranslate="".concat(ea.ZP.t(es(e))," ").concat(ea.ZP.t(er(e))),e.type_nameTranslate=ea.ZP.t(el(e)),o.push(e)})),a.data=o,a},keepUnusedDataFor:60,providesTags:function(e){return["getBalanceHistory"]}})}}}).useGetBalanceHistoryQuery,ec=n(64840),eu=n(6952),ep=n(75883),ef=n(96486);function em(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function eh(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?em(Object(n),!0).forEach(function(t){(0,f.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):em(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ev=function(){var e,t,n=(0,v.Z)(x.q.min_width.tabletL),i=(0,v.Z)(x.q.min_width.mobileM),a=(0,v.Z)(x.q.min_width.desktopS),o=(0,K.useState)(null),r=o[0],l=o[1],s=ee({sizePerPage:"13"}),d=s.query,c=s.sizePerPage,u=s.updateQuery,p=s.resetQueryLastMonth,g=s.resetQueryAllRows,y=s.session,E=s.updateQueryWithLastMonth,_=ed(d,{skip:!y}),T=_.data,w=_.isLoading,b=_.refetch,N=_.isFetching,P=null!==(e=null==T?void 0:T.data)&&void 0!==e?e:[],j=null!==(t=null==T?void 0:T.total)&&void 0!==t?t:0,S=W({sizePerPage:c,total:j}),A=S.count,C=S.end,I=S.init,D=S.page,M=S.updatePage,R=S.isUpdatePage;(0,K.useEffect)(function(){R&&(u(eh(eh({},d),{},{end:String(C),init:String(I)})),(0,h.g)(200).then(function(){document.documentElement.scrollIntoView({inline:"start",block:"start",behavior:"smooth"})}))},[R]);var Z,L,k=function(e){if((0,ef.isObject)(e))"CUSTOM_FILTER"===e.value&&(u(eh(eh({},d),{},{type:e.obj.type,method:e.obj.method,op_date_init:e.obj.dateObj.init,op_date_end:e.obj.dateObj.end,operation:e.obj.operation})),l(null));else{var t=F.find(function(t){return t.value===e});switch(l(t),t.filter){case"op_date_init":"LAST-MOUNTH"===t.value&&p();break;case"all":g();break;default:E(eh(eh({},d),{},(0,f.Z)({},t.filter,t.value)))}}};return(0,O.jsxs)(eO,{children:[(0,O.jsx)(H.A,{onActivateFilter:k,items:F}),(0,O.jsxs)(ey,{children:[(0,O.jsx)(eu.t,{loading:w||N,refetch:b,delayMS:1e3}),(L=(0,O.jsxs)("p",{children:[(0,O.jsx)("span",{children:j})," resultados"]}),r&&!["ALL","LAST-MOUNTH"].includes(r.value)&&(L=(0,O.jsxs)("p",{children:[(0,O.jsx)("span",{children:j})," resultados ",(0,O.jsx)("span",{className:"last30",children:"de los ultimos 30 dias"})]})),(0,O.jsx)(eg,{children:L}))]}),P.length>0?(0,O.jsx)(ex,{children:(0,O.jsx)(U,{data:P,viewMode:a?"table":"cards"})}):w||N?(0,O.jsx)(m.Z,{loading:w||N}):(0,O.jsx)(ep.Z,{}),(0,O.jsx)(eE,{children:(0,O.jsx)(ec.Z,{color:"primary",count:A,onChange:function(e,t){M(e,t);var n=null==e?void 0:e.currentTarget,i=null==n?void 0:n.ariaLabel,a=(null==i?void 0:i.indexOf("page"))+4;Y(null==i?void 0:i.slice(0,a),t)},page:D,shape:"rounded",variant:"text",boundaryCount:n?2:1,siblingCount:n?2:i?1:0})})]})},eg=g.default.div.withConfig({displayName:"historial-saldo__StyledTotalResult",componentId:"sc-1l8f960-0"})(["> p{color:",';font-feature-settings:"tnum";max-width:200px;text-align:right;padding:14px 0px;span{font-weight:500;&.last30{white-space:nowrap;font-weight:400;}}}'],function(e){return e.theme.alternate11}),ex=g.default.div.withConfig({displayName:"historial-saldo__ContentCss",componentId:"sc-1l8f960-1"})(["&{display:flex;flex:1;flex-direction:column;padding:0;gap:1rem;width:100%;}"]),ey=g.default.div.withConfig({displayName:"historial-saldo__StyledWrapperTop",componentId:"sc-1l8f960-2"})(["display:flex;padding:0 14px;align-items:center;justify-content:space-between;"]),eE=g.default.div.withConfig({displayName:"historial-saldo__StyledWrapperPagination",componentId:"sc-1l8f960-3"})(["padding:1rem 1rem;display:flex;flex-direction:column;gap:1rem;> nav{display:flex;justify-content:center;> ul{margin:auto;}}"]),eO=g.default.div.withConfig({displayName:"historial-saldo__HistorySalesS",componentId:"sc-1l8f960-4"})(["&{display:flex;flex:1;flex-direction:column;}"]);g.default.div.withConfig({displayName:"historial-saldo__ContentMainS",componentId:"sc-1l8f960-5"})(["&{display:flex;flex:1;flex-direction:column;padding:0;gap:1rem;width:100%;}"])},13134:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cuenta/historial-saldo",function(){return n(29918)}])}},function(e){e.O(0,[3662,2715,1465,2912,6581,5095,4356,7139,7103,4534,2735,9774,2888,179],function(){return e(e.s=13134)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2737],{52531:function(e,t,r){"use strict";r.d(t,{n:function(){return p}});var n=r(96919),o=r(54728),i=r(60161),a=r(59644),s=r(60269),d=r(37779),c=r(96721),l=r(17418),u=r(93969),p={ASTROPAY:a.Z.src,ATPAYMENTTELESERVICIOS:u.Z.src,KUSHKI:s.Z.src,NIUBIZ:d.Z.src,PAGOEFECTIVO:o.Z.src,PAGOEFECTIVOQR:i.Z.src,SAFETYPAY:l.Z.src,PROMETEO:c.Z.src,MONNET:"/_next/static/media/100x69px_LOGO-RECARGA-MONNET-f.b2b6bc1e.png",NUVEI:n.Z.src,KUSHKI_TRANSFER_IN:"/_next/static/media/pagando-con-kushki.adb35704.png",KASHIO:"/_next/static/media/kashio.529fbfa1.png"}},28779:function(e,t,r){"use strict";r.d(t,{_:function(){return i}});var n=r(16835),o=r(44405),i=function(){var e,t=(0,o.ZY)(),r=(0,n.Z)(t,2),i=r[0],a=r[1],s=a.isLoading;return{getPayment:i,loading:s,success:a.isSuccess,data:a.data}}},87697:function(e,t,r){"use strict";var n=r(94184),o=r.n(n),i=r(67294),a=r(53918),s=r(85893),d=function(e){var t=e.className,r=e.init,n=e.end,a=e.hoursToFinish,d=void 0===a?10:a,u=(0,i.useState)(""),p=u[0],m=u[1],f=(0,i.useState)(""),h=f[0],g=f[1],x=(0,i.useState)(""),v=x[0],b=x[1],y=(0,i.useState)(""),w=y[0],_=y[1],j=(0,i.useState)(!1),C=j[0],N=j[1];return(0,i.useEffect)(function(){var e=new Date(null==n?void 0:n.replace(" ","T")),t=e.setHours(e.getHours()-5),r=new Date(t).getTime(),o=setInterval(function(){var e=new Date().getTime(),t=r-e;N(t/36e5<d),m(Math.floor(t/864e5).toString()),g("0".concat(Math.floor(t%864e5/36e5).toString()).slice(-2)),b("0".concat(Math.floor(t%36e5/6e4).toString()).slice(-2)),_("0".concat(Math.floor(t%6e4/1e3).toString()).slice(-2))},1e3);return function(){clearInterval(o)}},[r,n]),(0,s.jsxs)(c,{className:o()(t,{fewToFinish:C}),children:[(0,s.jsxs)(l,{children:[(0,s.jsx)("span",{className:"top day",children:p}),(0,s.jsx)("span",{className:"bottom",children:"D\xeda"})]}),(0,s.jsx)("span",{className:"points",children:":"}),(0,s.jsxs)(l,{children:[(0,s.jsx)("span",{className:"top hour",children:h}),(0,s.jsx)("span",{className:"bottom",children:"Hora"})]}),(0,s.jsx)("span",{className:"points",children:":"}),(0,s.jsxs)(l,{children:[(0,s.jsx)("span",{className:"top min",children:v}),(0,s.jsx)("span",{className:"bottom",children:"Min."})]}),(0,s.jsx)("span",{className:"points",children:":"}),(0,s.jsxs)(l,{children:[(0,s.jsx)("span",{className:"top second",children:w}),(0,s.jsx)("span",{className:"bottom",children:"Seg."})]})]})};t.Z=d;var c=a.default.div.withConfig({displayName:"TorneoCuentaRegresiva__TorneoCuentaRegresivaS",componentId:"sc-1x21iz7-0"})(["&{display:grid;grid-template-columns:1fr 1ch 1fr 1ch 1fr 1ch 1fr;align-items:center;border-radius:5px;> .points{text-align:center;}&.fewToFinish{color:red;}}"]),l=a.default.div.withConfig({displayName:"TorneoCuentaRegresiva__BlockS",componentId:"sc-1x21iz7-1"})(["font-size:clamp(1.2rem,1.2vw,1.4rem);font-weight:500;text-transform:uppercase;padding:0;display:flex;flex-direction:column;justify-content:center;align-items:center;> span{}> .bottom{font-size:0.7rem;text-transform:capitalize;}"])},90782:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return V}});var n=r(6045),o=r(59499),i=r(50029),a=r(87794),s=r.n(a),d=r(46407),c=r(52531),l=r(28779),u=r(32866),p=r(95496),m=r(87697),f=r(7631),h=r(34023),g=r(94184),x=r.n(g),v=r(6767),b=r.n(v),y=r(87979),w=r(41664),_=r.n(w),j=r(11163),C=r(67294),N=r(87536),k=r(41248),S=r(53918),O=r(7258),P=r(85893);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var z=function(e){var t,r,a,m,g=e.title,v=(e.description,e.amount),b=(e.img,e.method),y=e.isDisabled,w=e.promotion,S=e.image,z=(0,C.useState)(!1);z[0],z[1];var q=(0,C.useState)(!1);q[0],q[1];var G=(0,j.useRouter)(),U=(0,l._)(),L=U.getPayment,Y=(U.data,U.loading);U.success;var K,X,V,Q,J,W,$=(0,n.Z)(),ee=$.session,et=$.user,er=(0,k.I0)(),en=(0,f.Mv)({promotion:w},{skip:!w}).data,eo=(0,N.cI)({mode:"onChange",criteriaMode:"all",resolver:(0,p.X)(O.object({terms_and_Conditions:O.boolean().isTrue("*Debes aceptar los TyC")}))}),ei=eo.register,ea=eo.formState.errors,es=(eo.setError,eo.watch),ed=eo.handleSubmit,ec=Object.values(es()),el=!((null==ec?void 0:ec.length)>0)||ec.some(function(e){return!e}),eu=Object.values(ea).length>0,ep=c.n[null==b?void 0:b.toUpperCase()],em=(K=(0,i.Z)(s().mark(function e(t){var r,n,o;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null!=t&&t.terms_and_Conditions)){e.next=9;break}return e.next=3,L({method:null==b?void 0:b.toLocaleUpperCase(),amount:100*Number(v),company:null==et?void 0:et.company,session:ee}).unwrap();case 3:if(!(o=null==(n=e.sent)?void 0:null===(r=n.data)||void 0===r?void 0:r.redirectionURL)){e.next=9;break}return er((0,h.v5)(o)),e.next=9,G.push({pathname:d.H["/cuenta/recargar/[methodName]/confirmar"].url,query:{methodName:b}});case 9:case"end":return e.stop()}},e)})),function(e){return K.apply(this,arguments)});return(W=(X=new Date(null==en?void 0:null===(V=en.details)||void 0===V?void 0:null===(Q=V.calendar)||void 0===Q?void 0:null===(J=Q.end_date)||void 0===J?void 0:J.replace(" ","T"))).getTime(),new Date().getTime()>W)?(0,P.jsx)(P.Fragment,{}):(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(B,{onSubmit:ed(em),className:x()({isDisabled:y}),id:w,children:[(0,P.jsx)(M,{src:ep,alt:b}),(0,P.jsxs)(R,{children:[(0,P.jsx)("div",{className:"title",children:g}),(0,P.jsx)("div",{className:"image",children:(0,P.jsx)("img",{src:"".concat("https://new.apuestatotal.com","/").concat(S),alt:"gift"})})]}),(0,P.jsx)(D,{className:x()({error:eu}),children:(0,P.jsxs)("li",{children:[(0,P.jsx)("input",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({id:w,type:"checkbox"},ei("terms_and_Conditions"))),(0,P.jsxs)("label",{htmlFor:w,className:x()({error:eu}),children:["He le\xeddo y acepto los"," ",(0,P.jsx)(_(),{href:{pathname:d.H["/promociones/[promotion]"].url,query:{promotion:w}},target:"_blank",passHref:!0,rel:"noreferrer",children:(0,P.jsx)("a",{target:"_blank",children:(0,P.jsx)("strong",{children:"t\xe9rminos y condiciones"})})})," ","de la promo."]})]})}),(0,P.jsxs)(H,{children:[(0,P.jsx)(E,{size:"small",variant:"contained",color:"secondary",fullWidth:!0,type:"submit",className:x()({disabled:el,error:eu}),disabled:Y,children:"Recargar"}),(null==ea?void 0:ea.terms_and_Conditions)&&(0,P.jsx)(F,{children:(0,P.jsx)(u.B,{name:"terms_and_Conditions",errors:ea})})]}),y?(0,P.jsx)(I,{className:"promo__utilizada",children:"Promo utilizada"}):(0,P.jsxs)(A,{children:[(0,P.jsx)("span",{children:"Termina en:"}),(0,P.jsx)(Z,{className:"timer",end:null==en?void 0:null===(t=en.details)||void 0===t?void 0:null===(r=t.calendar)||void 0===r?void 0:r.end_date,init:null==en?void 0:null===(a=en.details)||void 0===a?void 0:null===(m=a.calendar)||void 0===m?void 0:m.init_date})]})]})})},I=S.default.div.withConfig({displayName:"SingleCardPromo__FinishCss",componentId:"sc-yro7z0-0"})(["flex:1;display:grid;place-items:center;font-size:1.8rem;color:",";min-height:80px;"],function(e){return e.theme.primary}),E=(0,S.default)(y.z).withConfig({displayName:"SingleCardPromo__ButtonOverrideCss",componentId:"sc-yro7z0-1"})(["&.disabled{background:",";border-color:",";color:",";}&.error{border-color:",";}"],function(e){return b()(e.theme.alternative).darken(.18)},function(e){return b()(e.theme.alternative).darken(.18)},function(e){return b()(e.theme.alternative).darken(.4)},function(e){return b()(e.theme.status.error)}),F=S.default.div.withConfig({displayName:"SingleCardPromo__ErrorCss",componentId:"sc-yro7z0-2"})(["font-size:0.9rem;text-align:center;color:",";"],function(e){return e.theme.primary}),D=S.default.div.withConfig({displayName:"SingleCardPromo__CheckboxCss",componentId:"sc-yro7z0-3"})(["padding:0 1rem;li{position:relative;list-style:none;display:grid;flex-direction:row;grid-template-columns:auto 1fr;gap:1rem;}@supports(-webkit-appearance:none) or (-moz-appearance:none){input[type='checkbox'],input[type='radio']{--active:",";--active-inner:#fff;--focus:2px ",";--border:#A7A7A7;--border-hover:",";--background:#fff;--disabled:#F6F8FF;--disabled-inner:#E1E6F9;-webkit-appearance:none;-moz-appearance:none;height:1.8rem;outline:none;display:inline-block;vertical-align:top;position:relative;margin:0;cursor:pointer;border:2px solid var(--bc,var(--border));background:var(--b,var(--background));transition:background .3s,border-color .3s,box-shadow .2s;&:after{content:'';display:block;left:0;top:0;position:absolute;transition:transform var(--d-t,.3s) var(--d-t-e,ease),opacity var(--d-o,.2s);}&:checked{--b:var(--active);--bc:var(--active);--d-o:.3s;--d-t:.6s;--d-t-e:cubic-bezier(.2,.85,.32,1.2);}&:disabled{--b:var(--disabled);cursor:not-allowed;opacity:.9;&:checked{--b:var(--disabled-inner);--bc:var(--border);}& + label{cursor:not-allowed;}}&:hover{&:not(:checked){&:not(:disabled){--bc:var(--border-hover);}}}&:focus{box-shadow:0 0 0 var(--focus);}&:not(.switch){width:1.8rem;&:after{opacity:var(--o,0);}&:checked{--o:1;}}& + label{display:inline-block;vertical-align:top;cursor:pointer;margin-left:4px;font-size:0.9rem;color:",";&.error{color:",";}}}input[type='checkbox']{&:not(.switch){border-radius:.4rem;&:after{width:.5rem;height:1.05rem;border:3px solid var(--active-inner);border-top:0;border-left:0;left:.51rem;top:.12rem;transform:rotate(var(--r,20deg));}&:checked{--r:43deg;}}&.switch{width:38px;border-radius:11px;&:after{left:2px;top:2px;border-radius:50%;width:15px;height:15px;background:var(--ab,var(--border));transform:translateX(var(--x,0));}&:checked{--ab:var(--active-inner);--x:17px;}&:disabled{&:not(:checked){&:after{opacity:.6;}}}}}}&.error{@supports(-webkit-appearance:none) or (-moz-appearance:none){input[type='checkbox']{--active:",";--focus:2px ",";--border-hover:",";--border:",";}}}"],function(e){return e.theme.status.success},function(e){return b()(e.theme.status.success).lighten(.7)},function(e){return e.theme.status.success},function(e){return b()(e.theme.contrastText).fade(.4)},function(e){return b()(e.theme.status.error)},function(e){return e.theme.status.error},function(e){return b()(e.theme.status.error).lighten(.7)},function(e){return e.theme.status.error},function(e){return e.theme.status.error}),Z=(0,S.default)(m.Z).withConfig({displayName:"SingleCardPromo__TimerS",componentId:"sc-yro7z0-4"})(["display:grid;grid-template-columns:1fr 0.5fr 1fr 0.5fr 1fr 0.5fr 1fr;width:100%;> .points{text-align:center;align-self:center;}> div{background:#F5F5F5;border-radius:8px;padding:.5rem;gap:.4rem;font-variant-numeric:tabular-nums;font-weight:400;> :first-of-type.top.day{font-weight:700;}}"]),A=S.default.div.withConfig({displayName:"SingleCardPromo__CountDownCss",componentId:"sc-yro7z0-5"})(["display:flex;justify-content:center;align-items:center;flex-direction:column;gap:1rem;padding:1rem;> span{font-size:0.9rem;}"]),H=S.default.div.withConfig({displayName:"SingleCardPromo__ButtonCss",componentId:"sc-yro7z0-6"})(["padding:1rem;display:flex;width:100%;flex-direction:column;gap:.5rem;> button{font-size:1.3rem;}"]),R=S.default.div.withConfig({displayName:"SingleCardPromo__TitleCss",componentId:"sc-yro7z0-7"})(["display:grid;padding:0 1rem;align-items:center;grid-template-columns:1fr 80px;gap:.5rem;min-height:100px;> .image{display:flex;align-items:center;justify-content:center;> img{width:100%;height:100%;object-fit:contain;}}> .title{p{font-size:1.1rem;}}"]),M=S.default.img.withConfig({displayName:"SingleCardPromo__IMGCss",componentId:"sc-yro7z0-8"})(["width:100%;object-fit:contain;max-width:160px;margin:auto;"]),B=S.default.form.withConfig({displayName:"SingleCardPromo__CardPromoCss",componentId:"sc-yro7z0-9"})(["flex:1;border-radius:10px;border:1px solid #BEBEBE;background:",";transition:.5s;display:flex;flex-direction:column;display:grid;grid-template-rows:80px auto auto auto 1fr;padding-top:.5rem;&.isDisabled > *:not(.promo__utilizada){filter:grayscale(100%);}&.isDisabled > *{pointer-events:none;}.PromoHead{display:flex;flex-direction:row;justify-content:space-between;border-radius:10px 10px 0 0;background-color:#f5f5f5;width:100%;padding:10px;}.PromoDescription{display:flex;flex-direction:column;justify-content:space-between;align-items:left;padding:10px;gap:1rem;}.FootContent{gap:1rem;padding:10px;display:flex;flex-direction:column;align-items:center;span{cursor:pointer;text-decoration:underline;:hover{color:#5e5e5e;}}}"],function(e){return e.theme.background});(0,S.default)(y.z).withConfig({displayName:"SingleCardPromo__ButtonStyled",componentId:"sc-yro7z0-10"})(["&&{border:1px solid #5d5d5d;background-color:#f5f5f5;color:#5d5d5d;padding:0.2rem 1rem;border-radius:6px;:hover{background-color:#eaeaea;color:",";}:active{transform:scale(1.05)}}"],function(e){return e.theme.contrastText});var q=r(9008),G=r.n(q),U=r(45138),L=r(68225),Y=r(26780),K=r(84225),X=r(47583);d.H["/test/cuenta/recarga"].title,d.H["/test/cuenta/recarga"].url,d.H["/test/cuenta/promo"].title,d.H["/test/cuenta/promo"].url;var V=function(){var e=(0,n.Z)(),t=e.session;e.isInThisGruouple;var r=(0,L.Y)(),o=r.data;r.unusedNotifications;var i=(0,Y.J)({session:t}).data,a=null==i?void 0:i.map(function(e){var t;return null==e?void 0:null===(t=e.promotion)||void 0===t?void 0:t.promotion});return(0,P.jsxs)("div",{children:[(0,P.jsx)(G(),{children:(0,P.jsx)("title",{children:"Promo Test"})}),(0,P.jsx)(U.G,{}),(0,P.jsx)(Q,{children:"\xa1Sobrin@, elige aqu\xed tu m\xe9todo de recarga con promo!"}),(0,P.jsx)(J,{children:null==o?void 0:o.map(function(e){var t=null==a?void 0:a.includes(e.promotion);return(0,P.jsx)(z,{image:null==e?void 0:e.image,title:null==e?void 0:e.summary_title,description:null==e?void 0:e.summary_body,img:(0,X.OQ)(null==e?void 0:e.body,{wordwrap:130}),amount:null==e?void 0:e.title,method:null==e?void 0:e.body,isDisabled:t,promotion:e.promotion},null==e?void 0:e.summary_title)})})]})};S.default.div.withConfig({displayName:"promociones__ButtonCss",componentId:"sc-13ld1ea-0"})(["width:100%;flex:1;&.promotion__recargas{background:",";padding:0.5rem 1rem;border-radius:8px;font-weight:700;display:grid;grid-template-columns:40px 1fr;place-items:center;max-width:min-content;gap:.5rem;position:relative;min-width:180px;","{min-width:200px;}p.text{display:flex;justify-content:flex-start;color:",";text-transform:initial;> span{width:80%;}}> .promotion__recargas__count{background:red;position:absolute;width:22px;height:22px;display:grid;place-items:center;aspect-ratio:1;font-size:13px;border-radius:50%;color:white;right:-8px;top:-8px;}}"],function(e){return e.theme.secondary},K.q.min_width.desktopS,function(e){return e.theme.contrastText});var Q=S.default.p.withConfig({displayName:"promociones__SubtitleCss",componentId:"sc-13ld1ea-1"})(["font-weight:600;font-size:1rem;text-align:center;padding:1.5rem 1rem;"]),J=S.default.div.withConfig({displayName:"promociones__PromotionsCss",componentId:"sc-13ld1ea-2"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(calc(200px + 1vw),.8fr));padding:1rem;padding-top:0;place-content:center;gap:1rem;margin:auto;","{grid-template-columns:repeat(auto-fill,minmax(230px,1fr));width:100%;}","{grid-template-columns:repeat(auto-fill,minmax(265px,1fr));width:100%;}","{grid-template-columns:repeat(auto-fill,minmax(275px,1fr));width:100%;}"],K.q.min_width.desktopXS,K.q.min_width.desktopS,K.q.min_width.desktopL)},39518:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cuenta/recargar/promociones",function(){return r(90782)}])}},function(e){e.O(0,[7536,7948,5138,9774,2888,179],function(){return e(e.s=39518)}),_N_E=e.O()}]);
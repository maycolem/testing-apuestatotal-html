(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3459],{9e4:function(e,t,n){"use strict";n.d(t,{r:function(){return o}});var s=n(6045),i=n(67294),o=function(e){var t=e.PageURL,n=e.PageTitle,o=e.PageCategory,r=(0,s.Z)().user,a=r?"".concat(r.user):null;(0,i.useEffect)(function(){var e;null!==(e=window.optimoveSDK)&&void 0!==e&&e.API&&(a?window.optimoveSDK.API.setPageVisit(t,n,o,a):window.optimoveSDK.API.setPageVisit(t,n,o))},[t,n,o,a])}},28676:function(e,t,n){"use strict";n.d(t,{U:function(){return A}});var s=n(50029),i=n(87794),o=n.n(i),r=n(46407),a=n(95496),l=n(68894),c=n(98787),u=n(87979),d=n(42197),p=n(75734),m=n(41664),g=n.n(m),x=n(11163),f=n(24721),h=n(67294),w=n(87536),v=n(77058),j=n(47516),y=n(5434),b=n(53918),C=n(86841),k=n(90236),_=n(11046),E=n(63084),I=n(6045),N=n(90395),S=n(55263),P=n(85893),A=function(e){var t,n,i,m=e.className,b=e.onClickForgetPassword,A=(0,v.$)().t,B=(0,x.useRouter)(),M=(0,h.useState)(!1),Z=M[0],q=M[1],D=(0,l.Z)(),V=(0,_.f)(),H=V.login,O=V.states.isLoading,X=(0,N.v)(),G=X.getUserDetail,K=X.states.isLoading,$=(0,I.Z)(),Q=$.setUserAction,Y=$.isUserSelfExcluded,J=$.isUserDisabled,W=$.user,ee=(0,E.Z)().closeModalLoginAction,et=(0,w.cI)({mode:"onChange",criteriaMode:"all",resolver:(0,a.X)((0,S.jS)(S.M8)),defaultValues:{email:"",password:""}}),en=et.register,es=et.formState,ei=es.errors,eo=es.isSubmitting,er=et.setError,ea=et.handleSubmit,el=(i=(0,s.Z)(o().mark(function e(t){var n,s,i,a,l,c,u;return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(O||K||W)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,H({captcha:D,alias:t.email,password:t.password}).unwrap();case 4:if(s=null==(n=e.sent)?void 0:n.user,i=null==n?void 0:n.code,a=null==n?void 0:n.description,!s){e.next=35;break}return(0,k.ni)(s),e.next=12,G({session:null==s?void 0:s.session}).unwrap();case 12:if(!Y(l=e.sent)){e.next=16;break}return er("root.serverError",{type:"400",message:"Su cuenta esta autoexcluida"}),e.abrupt("return");case 16:if(!J(l)){e.next=19;break}return er("root.serverError",{type:"400",message:"Su cuenta ah sido desabilitada de nuestra plataforma, comunicate con soporte."}),e.abrupt("return");case 19:if(Q(l),ee(),!B.query.returnUrl){e.next=25;break}return e.next=24,B.push(B.query.returnUrl);case 24:case 29:return e.abrupt("return");case 25:if(!B.backReferrer){e.next=33;break}if(!(B.backReferrer!==B.asPath)){e.next=30;break}return e.next=29,B.push(B.backReferrer);case 30:if("/login"!==B.backReferrer){e.next=33;break}return e.next=33,B.push(r.H["/"].url);case 33:e.next=38;break;case 35:(0,k.PH)(),u=C.T.find(function(e){return(null==i?void 0:i.toString())===e.code.toString()}),er("root.serverError",{type:"".concat(i),message:null!==(c=null==u?void 0:u.message)&&void 0!==c?c:A(a)});case 38:case"end":return e.stop()}},e)})),function(e){return i.apply(this,arguments)}),ec=function(){(0,k.rp)(),null==b||b()},eu=null==ei?void 0:null===(t=ei.root)||void 0===t?void 0:null===(n=t.serverError)||void 0===n?void 0:n.message;return(0,P.jsxs)(z,{className:m,children:[(0,P.jsx)("h1",{className:"title",children:"BIENVENIDO A"}),(0,P.jsx)(g(),{href:"/",children:(0,P.jsx)(L,{src:f.Z.src,alt:""})}),(0,P.jsx)(j.ePx,{size:40}),(0,P.jsx)("h2",{children:"INICIA SESI\xd3N"}),(0,P.jsxs)(U,{onSubmit:ea(el),children:[(0,P.jsx)(d.I,{label:"Usuario o Email",id:"email",variant:"outline",type:"text",register:en,errors:ei,required:!0}),(0,P.jsx)(d.I,{required:!0,register:en,errors:ei,variant:"outline",label:"Contrase\xf1a",id:"password",type:Z?"text":"password",endContent:(0,P.jsx)(R,{onClick:function(){return q(!Z)},children:Z?(0,P.jsx)(y.t2l,{}):(0,P.jsx)(y.wqE,{})})}),(0,P.jsx)(F,{onClick:ec,children:"\xbfOlvidaste tu contrase\xf1a?"}),(0,P.jsx)(u.z,{type:"submit",color:"dark",loading:O||K||eo||!D,disabled:O||K||eo||!D,children:"INGRESA"}),eu&&(0,P.jsx)(c.b,{severity:"error",children:(0,P.jsx)(p.y,{text:eu})}),(0,P.jsxs)(T,{children:[(0,P.jsx)("p",{children:"\xbfNo tienes una cuenta?"}),(0,P.jsx)("p",{children:"\xa1Qu\xe9 esperas!"})]}),(0,P.jsx)(u.z,{type:"button",onClick:function(){return B.push("/registro")},children:"\xa1REG\xcdSTRATE AQU\xcd!"})]})]})},L=b.default.img.withConfig({displayName:"LoginForm__ImgCss",componentId:"sc-1yw7im0-0"})(["width:90%;margin:auto;"]),T=b.default.div.withConfig({displayName:"LoginForm__MessageCss",componentId:"sc-1yw7im0-1"})(["display:flex;flex-direction:column;align-items:center;font-size:0.9rem;"]),F=b.default.div.withConfig({displayName:"LoginForm__RecoryPasswordCss",componentId:"sc-1yw7im0-2"})(["text-align:right;cursor:pointer;padding:0.5rem 0;font-size:0.9rem;"]),R=b.default.div.withConfig({displayName:"LoginForm__ButtonEndContentCss",componentId:"sc-1yw7im0-3"})(["svg{font-size:1.8rem;}"]),U=b.default.form.withConfig({displayName:"LoginForm__FormCss",componentId:"sc-1yw7im0-4"})(["width:100%;display:flex;flex-direction:column;gap:1rem;padding-top:1rem;"]),z=b.default.div.withConfig({displayName:"LoginForm__Css",componentId:"sc-1yw7im0-5"})(["padding:1rem;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:0.5rem;h1,h2{font-weight:400;font-size:1.1rem;}h2{font-size:0.9rem;}"])},21516:function(e,t,n){"use strict";n.r(t);var s=n(9e4),i=n(28676),o=n(7262),r=n(96834),a=n(37748),l=n(9008),c=n.n(l),u=n(11163),d=n(67294),p=n(8193),m=n(53918),g=n(85893),x=function(){var e=(0,d.useState)(0),t=e[0],n=e[1],a=(0,u.useRouter)();return(0,s.r)({PageURL:window.location.href,PageTitle:"Login",PageCategory:"Login"}),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.Y,{}),(0,g.jsxs)(c(),{children:[(0,g.jsx)("title",{children:"Login | Apuesta Total"}),(0,g.jsx)("meta",{content:"Login | Apuesta Total",property:"og:title"}),(0,g.jsx)("meta",{content:"Login | Apuesta Total",itemProp:"name"}),(0,g.jsx)("meta",{content:"Login | Apuesta Total",name:"twitter:title"}),(0,g.jsx)("meta",{content:"Encuentra promociones, apuestas deportivas en vivo, pr\xf3ximos encuentros, juegos virtuales, casino y m\xe1s en Apuesta Total",name:"description"}),(0,g.jsx)("meta",{content:"Encuentra promociones, apuestas deportivas en vivo, pr\xf3ximos encuentros, juegos virtuales, casino y m\xe1s en Apuesta Total",property:"og:description"}),(0,g.jsx)("meta",{content:"Encuentra promociones, apuestas deportivas en vivo, pr\xf3ximos encuentros, juegos virtuales, casino y m\xe1s en Apuesta Total",itemProp:"description"}),(0,g.jsx)("meta",{content:"Encuentra promociones, apuestas deportivas en vivo, pr\xf3ximos encuentros, juegos virtuales, casino y m\xe1s en Apuesta Total",name:"twitter:description"}),(0,g.jsx)("meta",{content:"apuesta total, torneos, poker, juegos, recargas, casino, Bet Games, TV Bet, ruleta rusa, yan ken po, tragamonedas online, torneos de casino, premios",name:"keywords"}),(0,g.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",property:"og:image"}),(0,g.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",name:"image"}),(0,g.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",property:"og:image:secure_url"}),(0,g.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",itemProp:"image"}),(0,g.jsx)("meta",{content:"https://static.springbuilder.site/fs/userFiles-v2/apuestatotal2/images/85-seo-apuesta-total.png",name:"twitter:image"}),(0,g.jsx)("meta",{content:"1145",property:"og:image:width"}),(0,g.jsx)("meta",{content:"513",property:"og:image:height"}),(0,g.jsx)("meta",{content:"website",property:"og:type"}),(0,g.jsx)("meta",{content:"https://www.apuestatotal.com/login",property:"og:url"}),(0,g.jsx)("meta",{content:"summary",name:"twitter:card"}),(0,g.jsx)("meta",{content:"text/html; charset=utf-8",httpEquiv:"content-type"}),(0,g.jsx)("meta",{content:"width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=0",name:"viewport"}),(0,g.jsx)("meta",{content:"true",name:"HandheldFriendly"}),(0,g.jsx)("meta",{content:"telephone=no",name:"format-detection"}),(0,g.jsx)("meta",{content:"YES",name:"apple-mobile-web-app-capable"}),(0,g.jsx)("link",{href:"https://www.apuestatotal.com/login",rel:"canonical"}),(0,g.jsx)("link",{href:"/favicon.ico",rel:"icon"}),(0,g.jsx)("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"})]}),(0,g.jsxs)(h,{children:[(0,g.jsx)(f,{children:(0,g.jsxs)("button",{onClick:function(){return a.push("/")},children:[(0,g.jsx)(p.V9Z,{}),(0,g.jsx)("span",{children:"Inicio"})]})}),(0,g.jsx)(w,{hiddenBackArrow:0===t,onClickBackArrow:function(){return n(t-1)},backArrowText:"Login",hiddenButtonClose:!0,children:(0,g.jsxs)(j,{$snap:t,children:[(0,g.jsx)(v,{children:(0,g.jsx)(i.U,{onClickForgetPassword:function(){n(1)}})}),(0,g.jsx)(v,{children:(0,g.jsx)(o.u,{})})]})})]})]})};t.default=x;var f=m.default.div.withConfig({displayName:"login__TopCss",componentId:"sc-1dfnxy3-0"})(["padding:0rem 1rem;max-width:450px;box-shadow:none;border:none;margin:auto;margin-top:initial;margin-bottom:initial;width:100%;button{background:transparent;border:none;color:",";display:flex;align-items:center;gap:0.5rem;> span{font-size:1.3rem;}> svg{font-size:1.6rem;}}"],function(e){return e.theme.primary}),h=m.default.div.withConfig({displayName:"login__HomeCss",componentId:"sc-1dfnxy3-1"})(["min-height:100vh;min-height:100dvh;display:flex;flex-direction:column;justify-content:center;"]),w=(0,m.default)(a.h).withConfig({displayName:"login__ModalContentCss",componentId:"sc-1dfnxy3-2"})(["background:white;.ModalContentStyled__wrap{max-width:450px;box-shadow:none;border:none;padding:0;}"]),v=m.default.div.withConfig({displayName:"login__SnapCss",componentId:"sc-1dfnxy3-3"})(["flex:1 0 100%;max-width:100%;position:relative;transition:200ms;"]),j=m.default.div.withConfig({displayName:"login__SnapsCss",componentId:"sc-1dfnxy3-4"})(["display:flex;overflow:hidden;",""],function(e){return(0,m.css)(["","{transform:translateX(calc(("," * 100%) * -1));}"],v,e.$snap)})},73700:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(21516)}])}},function(e){e.O(0,[2013,4617,3234,9866,6158,3874,7536,7948,1354,1808,1441,9774,2888,179],function(){return e(e.s=73700)}),_N_E=e.O()}]);
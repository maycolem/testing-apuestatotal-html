(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1851],{28566:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/altenar",function(){return t(72344)}])},82668:function(n,e,t){"use strict";t.d(e,{u:function(){return i}});var o=t(85893),r=t(67294),i=function(n){var e=n.props,t=n.tokens,i=(0,r.useRef)();return(0,r.useEffect)(function(){var n,o=null===(n=window.altenarWSDK)||void 0===n?void 0:n.addWidget({widget:"WBetSlip",props:e,tokens:t,container:i.current});return function(){null==o||o.remove()}},[]),(0,o.jsx)("div",{ref:i})}},60980:function(n,e,t){"use strict";t.d(e,{M:function(){return i}});var o=t(85893),r=t(67294),i=function(n){var e=n.props,t=n.tokens,i=(0,r.useRef)();return(0,r.useEffect)(function(){var n,o=null===(n=window.altenarWSDK)||void 0===n?void 0:n.addWidget({widget:"WTopEventsCarousel",props:e,tokens:t,container:i.current});return function(){null==o||o.remove()}},[]),(0,o.jsx)("div",{ref:i})}},72344:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return nn}});var o=t(47568),r=t(7297),i=t(70655),a=t(85893),c=t(72050),l=t(69635),s=t(708),u=t(5765),d=t(60980),p=t(17520),f=t(85803),h=t(53881),b=function(){var n,e=(0,p.TL)(),t=(0,p.CG)(h.vG).open;return{isOpenBetsModal:t,betsSelectionsCount:(0,p.CG)(f.Rk).betsSelectionsCount,openBetsModalAction:function(){e((0,h.h7)())},closeBetsModalAction:function(){e((0,h.Mr)())},setBetsSelectionsAction:function(n){e((0,f.Rh)(n))},updateBetsSelectionsAction:function(){e((0,f.V8)())}}},m=t(94688),g=t(11163),v=t(53918);function x(){var n=(0,r.Z)(["\n    & {\n        font-size: clamp(16px, 2.5vw, 25px);\n		font-weight: 500;\n		position: relative;\n		letter-spacing: 0;\n		display: block;\n		color: ",";\n		transition: 200ms;\n    }\n"]);return x=function(){return n},n}function w(){var n=(0,r.Z)(["\n	& {\n		width: calc(100% + 28px);\n		position: relative;\n		right: 14px;\n		padding: 14px;\n		padding-right: 0;\n	}\n"]);return w=function(){return n},n}var k=function(){var n=b(),e=n.updateBetsSelectionsAction,t=n.openBetsModalAction,o=(0,u.Z)(m.q.min_width.desktopS),r=(0,g.useRouter)();return(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(C,{children:"Widget Top Events Carousel"}),(0,a.jsx)(B,{children:(0,a.jsx)(d.M,{props:{eventCount:7,onEventSelect:function(n){console.log("Event selected:",n),r.push("/test/altenar/SportBook/#/event/".concat(n.id))},onOddSelect:function(n){console.log("Odd selected:",n),o&&t(),e()},variants:{OddBox:2,BannerEventBoxCompetitors:1,BannerEventBox:3},scrollerControls:2},tokens:{OddBox:{labelFont:["Rubik",13,"normal",400,"normal"]},BannerEventBox:{width:400,mobileWidth:250,background:'url("https://new.apuestatotal.com//cms/img/banners/63/mas-8-172x172.jpg") no-repeat center center / cover',borderRadius:0,iconColor:"",timeColor:"",dateColor:"",championshipColor:"",competitorColor:"",statsIconColor:""},MarketBox:{spacing:4},LiveIndicator:{background:"#ff0000",borderRadius:2,borderWidth:0,font:["Rubik",10,"normal",700,"normal"]},EventsCarousel:{}}})})]})},C=v.default.div(x(),function(n){return n.theme.casino.slider.contrastText}),B=v.default.div(w()),S=t(6757),y=t(82670),_=t(82668),j=t(50211),Z=t(23200),R=t(73710),E=t.n(R),M=t(67294),T=t(73935),N=t(53990);function W(){var n=(0,r.Z)(["\n                	/* width */\n				::-webkit-scrollbar {\n				width: 10px;\n				}\n\n				/* Track */\n				::-webkit-scrollbar-track {\n				background: #f1f1f1; \n				}\n				\n				/* Handle */\n				::-webkit-scrollbar-thumb {\n				background: #888; \n				box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n						background-color: ",";\n						border-radius: 100px;\n						border: 2px solid #e4e4e4;\n				}\n\n				/* Handle on hover */\n				::-webkit-scrollbar-thumb:hover {\n				background: #555; \n				}\n            "]);return W=function(){return n},n}function A(){var n=(0,r.Z)(["\n    ","\n"]);return A=function(){return n},n}function O(){var n=(0,r.Z)(["\n		padding: 20px 10px;\n		height: 100%;	\n		display: flex;\n		align-items: center;\n		justify-content: center;\n		> .ModalContentStyled__wrap{\n			position: relative;\n			border-radius: 6px;\n			border: 1px solid ",";\n			","\n			background-color: ",";\n			max-height: 100%;\n			width: 100%;\n			max-width: calc(320px + 1vw);\n			overflow: auto;	\n			","\n		\n\n			.close {\n				color: #aaaaaa;\n				cursor: pointer;\n				font-size: 2rem;\n				font-weight: bold;\n				line-height: 2rem;\n				margin-left: auto;\n				position: sticky;\n				top: 0;\n				width: 100%;\n				height: 2.5rem;\n				margin: initial;\n				margin-left: auto;\n				display: flex;\n				justify-content: flex-end;\n				align-items: center;\n				background-color: ",";	\n				padding : 0 1rem;			\n			}\n		}\n\n		"," {\n			> .ModalContentStyled__wrap{\n				pointer-events: all;\n				position: fixed;\n				right: 2rem;\n          		bottom: 6rem;\n				max-height: 80vh;\n			}\n		}\n		\n"]);return O=function(){return n},n}function z(){var n=(0,r.Z)(["\n    display: ",";\n    position: fixed;\n    z-index: 999;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n	animation: modalPortalBackdrop 300ms linear 1 forwards;\n	pointer-events: all;\n	\n	\n	@keyframes modalPortalBackdrop {\n        from {\n            background: rgba(0, 0, 0, 0);\n        }\n        to {\n            background: rgba(0, 0, 0, 0.3);\n        }\n    }\n\n	\n	"," {\n		animation : none;\n		pointer-events: none;\n	}\n\n"]);return z=function(){return n},n}function F(){var n=(0,r.Z)(["\n                    visibility: visible;\n                    opacity: 1;\n                    pointer-events: all;\n                "]);return F=function(){return n},n}function G(){var n=(0,r.Z)(["\n    & {\n		position: fixed;\n		bottom: calc(2rem + 100px);\n		right: 1rem;\n        width: 50px;\n        height: 50px; \n        z-index: 15;\n        transition: opacity 300ms;\n        visibility: hidden;\n        opacity: 0;\n        pointer-events: none;\n        "," {\n            right: 2rem;\n			bottom: 6rem;\n			width: 60px;\n        	height: 60px; \n        }\n        ","\n        > button {\n            height: 100%;\n            width: 100%;\n            border-radius: 50%;\n            background: ",";\n            opacity: 1;\n            transition: opacity 300ms;\n			border: 1px solid gray;\n\n            ","\n\n            > svg {\n                font-size: 1.7rem;\n				color:black;\n            }\n            > p.coupon {\n                text-transform: uppercase;\n                font-size: 0.7rem;\n				color:black;\n				font-weight:500;\n            }\n            > span.badge {\n                position: absolute;\n                top: -5px;\n                right: -5px;\n                font-size: 0.8rem;\n				font-weight:400;\n                color: white;\n				background:",';\n                padding: 4px;\n                min-width: 22px;\n                font-feature-settings: "tnum";\n                text-align: center;\n                border-radius: 50%;\n				aspect-ratio:1;\n            }\n        }\n    }\n']);return G=function(){return n},n}var L=function(){(0,g.useRouter)();var n=(0,j.Z)(),e=n.openModalLoginAction,t=n.isOpenModalLogin,r=(0,u.Z)(m.q.min_width.desktopS),c=b(),l=c.isOpenBetsModal,s=c.closeBetsModalAction,d=c.openBetsModalAction,p=c.betsSelectionsCount;c.setBetsSelectionsAction;var f=(0,M.useState)(!1),h=f[0],v=f[1],x=(0,M.useRef)(null),w=document.body;return(0,M.useEffect)(function(){if(l){var n=document.createElement("div");n.className="modal_bets",x.current=n,w.appendChild(x.current);var e="".concat(window.innerWidth-w.clientWidth,"px");v(!0),r||(w.style.setProperty("padding-right",e,"important"),w.style.overflow="hidden")}else{if((0,y.Z)(null==x?void 0:x.current,Node)&&(null==x?void 0:x.current))try{w.removeChild(x.current),w.style.paddingRight="initial",w.style.overflow="initial"}catch(t){console.log(t)}v(!1)}},[l,r]),(0,M.useEffect)(function(){return function(){if((0,y.Z)(null==x?void 0:x.current,Node)&&(null==x?void 0:x.current))try{w.removeChild(x.current),w.style.paddingRight="initial",w.style.overflow="initial"}catch(n){console.log(n)}}},[]),console.log(l),console.log(h),h&&x.current&&l?(0,T.createPortal)((0,a.jsx)(H,{$open:!t,children:(0,a.jsx)(q,{children:(0,a.jsxs)("div",{className:"ModalContentStyled__wrap",children:[(0,a.jsx)("span",{onClick:s,className:"close",children:"\xd7"}),(0,a.jsx)(_.u,{props:{betTypes:[0,1,2,3],betShareTypes:[0,1,2,3],betShareURL:"https://calimaco.apuestatotal.dev/test/altenar/SportBook",onShareCode:function(n){console.log(n),console.log("".concat(n.link,"?reservationCode=").concat(n.code))},onSignInButtonClick:function(){e()},onSelectionCountChange:function(n){console.log("onSelectionCountChange",n)},onBetHistoryButtonClick:(0,o.Z)(function(){return(0,i.__generator)(this,function(n){return console.log("onBetHistoryButtonClick"),s(),[2]})})},tokens:{BetSlipSelectionBox:{background:"#ededed",borderWidth:1,borderColor:"#b5b5b5",oddNameColor:"#595959",oddValueColor:"#595959",winColor:"#595959",oddNameFont:["Rubik",14,"normal",400,"normal"],oddValueFont:["Rubik",14,"normal",400,"normal"],winFont:["Rubik",14,"normal",400,"normal"]},BetSlipTab:{textTransform:"uppercase"},BetSlipTabSelected:{borderColor:"red"},BetSlipTabDisabled:{color:"rgba(0, 0, 0, 0.2)"},BetSlipStakeInput:{borderColor:"#F3F3F4",borderRadius:4,color:"#595959",paddingHorizontal:6,paddingVertical:6},LiveIndicator:{background:"#ff0000",borderRadius:2,font:["Rubik",10,"normal",700,"normal"]}}})]})})}),x.current):(0,a.jsx)(I,{$visibleButton:p>0,children:(0,a.jsxs)("button",{type:"button",onClick:d,title:"Abrir hoja de apuestas",children:[(0,a.jsx)(N.woi,{}),(0,a.jsx)("p",{className:"coupon",children:"Cup\xf3n"}),(0,a.jsx)("span",{className:"badge",children:p})]})})},P=(0,v.css)(A(),function(){if(!("ontouchstart"in window))return(0,v.css)(W(),function(n){return E()(n.theme.contrastText,.1)})}),q=v.default.div(O(),function(n){return E()(n.theme.contrastText,.2)},(0,Z.q)().medium,function(n){return n.theme.background},P,function(n){return n.theme.background},m.q.min_width.desktopS),H=v.default.div(z(),function(n){return n.$open?"block":"none"},m.q.min_width.desktopS),I=v.default.div(G(),m.q.min_width.tabletL,function(n){if(n.$visibleButton)return(0,v.css)(F())},function(n){return n.theme.background},(0,Z.q)({shadowColorHSL:"0deg 8% 5%"}).medium,function(n){return n.theme.primary}),V=t(5152),$=t.n(V);function D(){var n=(0,r.Z)(["\n    background: ",";\n    position: relative;\n    width: calc(100% + 28px);\n    right: 14px;\n"]);return D=function(){return n},n}function K(){var n=(0,r.Z)(["\n    padding-top: 10px;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 0 14px;\n"]);return K=function(){return n},n}var X=$()((0,o.Z)(function(){return(0,i.__generator)(this,function(n){switch(n.label){case 0:return[4,Promise.all([t.e(3605),t.e(4558)]).then(t.bind(t,24558))];case 1:return[2,n.sent()]}})}),{loadableGenerated:{webpack:function(){return[24558]}}}),U=$()((0,o.Z)(function(){return(0,i.__generator)(this,function(n){switch(n.label){case 0:return[4,Promise.all([t.e(3605),t.e(6518)]).then(t.bind(t,76518))];case 1:return[2,n.sent()]}})}),{loadableGenerated:{webpack:function(){return[76518]}}}),J=$()((0,o.Z)(function(){return(0,i.__generator)(this,function(n){switch(n.label){case 0:return[4,t.e(8544).then(t.bind(t,88544))];case 1:return[2,n.sent()]}})}),{loadableGenerated:{webpack:function(){return[88544]}}}),Q=$()((0,o.Z)(function(){return(0,i.__generator)(this,function(n){switch(n.label){case 0:return[4,t.e(1048).then(t.bind(t,97311))];case 1:return[2,n.sent()]}})}),{loadableGenerated:{webpack:function(){return[97311]}}}),Y=$()((0,o.Z)(function(){return(0,i.__generator)(this,function(n){switch(n.label){case 0:return[4,t.e(6234).then(t.bind(t,56234))];case 1:return[2,n.sent()]}})}),{loadableGenerated:{webpack:function(){return[56234]}}}),nn=function(){return(0,a.jsx)(S.jr,{children:(0,a.jsxs)(ne,{children:[(0,a.jsx)(l.Z,{}),(0,a.jsxs)(nt,{children:[(0,a.jsx)(k,{}),(0,a.jsx)(c.Z,{}),(0,a.jsx)(X,{}),(0,a.jsx)(U,{}),(0,a.jsx)(J,{}),(0,a.jsx)(Q,{}),(0,a.jsx)(Y,{}),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(L,{})})]})]})})},ne=v.default.div(D(),function(n){return n.theme.home.background}),nt=(0,v.default)("div")(K())}},function(n){n.O(0,[3609,7842,9979,9774,2888,179],function(){return n(n.s=28566)}),_N_E=n.O()}]);
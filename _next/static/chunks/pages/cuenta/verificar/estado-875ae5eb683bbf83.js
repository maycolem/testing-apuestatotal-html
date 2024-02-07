(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7891],{96785:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cuenta/verificar/estado",function(){return r(95635)}])},95635:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return G}});var t=r(47568),a=r(7297),i=r(70655),o=r(85893),s=r(11163),c=r(67294),u=r(53918),d=r(1451),l=r(50211),f=r(42912),p=r(26042),m=r(69396),h=r(94184),x=r.n(h),v=r(6767),g=r.n(v),b=r(89583),k=[{label:"Iniciada",keys:[]},{label:"En proceso",keys:["REVISING","PENDING"]},{label:"Verificado",keys:["EXPIRED","DENIED","APPROVED"]},];function E(){var n=(0,a.Z)(["\n    padding: 1rem;\n"]);return E=function(){return n},n}function j(){var n=(0,a.Z)(["\n    display: flex;\n	flex-direction: row;\n    align-items: flex-start;\n    justify-content: space-between;\n    position: relative;\n	background: ",";\n	border-radius: 0.8rem;\n	padding: clamp(1rem, 3vw, 1.5rem);\n	z-index: 1;\n	border: 1px solid ",";\n	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n"]);return j=function(){return n},n}function w(){var n=(0,a.Z)(['\n	display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    flex: 1;\n	\n    &::before {\n        content: "";\n        position: absolute;\n        top: 15px;\n        left: 0;\n        right: calc(50% + 15px + .5rem);\n        height: 1px;\n        background: ',';\n        z-index: 0;\n    }\n\n    &::after {\n        content: "";\n        position: absolute;\n        top: 15px;\n        left: calc(50% + 15px + .5rem);\n        right: 0;\n        height: 1px;\n        background: ',";\n        z-index: 0;\n    }\n\n    &:first-child::before, &:last-child::after {\n        display: none;\n    }\n"]);return w=function(){return n},n}function N(){var n=(0,a.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: clamp(30px, 3vw, 35px);\n    height: clamp(30px, 3vw, 35px);\n    border-radius: 50%;\n    background-color: ",";\n    color: ",";\n    z-index: 1;\n    font-size: 1rem;\n\n    &.active {\n        background-color: ",";\n		font-weight: 600;\n    }\n\n    &.error {\n        background-color: ",";\n    }\n\n    &.completed {\n		background-color: ",";\n		font-weight: 500;\n    }\n\n	&.completed-error {\n        background-color: ",";\n    }\n\n	svg {\n		font-size: 1rem;\n	}\n"]);return N=function(){return n},n}function _(){var n=(0,a.Z)(["\n    margin-top: 8px;\n    text-align: center;\n\n	> p {\n		font-size: clamp(0.8rem, 3vw, 1rem);\n		color: ",";\n		word-break: break-word;\n	}\n\n	&.active {\n		> p {\n			color: ",";\n			font-weight: 600;\n		}\n	}\n\n	&.error {\n		> p {\n			color: ",";\n		}\n	}\n\n	&.completed {\n		> p {\n			color: ",";\n			font-weight: 500;\n		}\n	}\n\n"]);return _=function(){return n},n}var y=function(n){var e=n.status,r=(0,c.useState)(!1),t=r[0],a=r[1],i=(0,c.useState)(k),s=i[0],u=i[1];(0,c.useEffect)(function(){"DENIED"===e?(a(!0),u(function(n){return n.map(function(n){return"Verificado"===n.label?(0,m.Z)((0,p.Z)({},n),{label:"Verificaci\xf3n rechazada",keys:["EXPIRED","DENIED"]}):n})})):(a(!1),u(k))},[e]);var d=function(n){var r=n.findIndex(function(n){return n.keys.includes(e)});return r<1?0:r};return(0,o.jsx)(D,{children:(0,o.jsx)(I,{children:s.map(function(n,e){return(0,o.jsxs)(Z,{children:[(0,o.jsx)(z,{className:x()({active:d(s)===e,error:t,completed:d(s)>e,"completed-error":d(s)>e&&t}),children:d(s)>e?(0,o.jsx)(b.l_A,{}):(0,o.jsx)("span",{children:e+1})}),(0,o.jsx)(P,{className:x()({active:d(s)===e?1:0,error:t,completed:d(s)>e}),children:(0,o.jsx)("p",{children:n.label})})]},"step-".concat(e))})})})},D=u.default.div(E()),I=u.default.div(j(),function(n){return n.theme.background},function(n){return g()(n.theme.contrastText).alpha(.1)}),Z=u.default.div(w(),function(n){return g()(n.theme.contrastText).alpha(.1)},function(n){return g()(n.theme.contrastText).alpha(.1)}),z=u.default.div(N(),function(n){return g()(n.theme.status.dark).alpha(.4)},function(n){return n.theme.background},function(n){return n.theme.status.success},function(n){return n.theme.status.error},function(n){return n.theme.status.success},function(n){return g()(n.theme.status.dark).alpha(.2)}),P=u.default.div(_(),function(n){return g()(n.theme.status.dark).alpha(.4)},function(n){return g()(n.theme.status.dark).alpha(.9)},function(n){return g()(n.theme.status.error).darken(.1)},function(n){return g()(n.theme.status.dark).alpha(.3)}),q=r(37242),V=r(86031),R=r(94688);function S(){var n=(0,a.Z)(["\n	display: flex;\n	flex-direction: column;\n	background: ",";\n	padding: 0;\n	gap: .1rem;\n	flex: 1;\n\n	"," {\n		padding: 1rem;\n	}\n"]);return S=function(){return n},n}function T(){var n=(0,a.Z)(["\n	0% {\n		opacity: 1;\n	}\n	50% {\n		opacity: 0.4;\n	}\n	100% {\n		opacity: 1;\n	}\n"]);return T=function(){return n},n}function X(){var n=(0,a.Z)(["\n	margin: 1rem;\n	width: auto;\n	height: 100px;\n	border-radius: 10px;\n	background-color: #d7d7d7;\n	animation: "," 1.5s ease-in-out infinite;\n"]);return X=function(){return n},n}var G=function(){var n,e=(0,c.useState)(""),r=e[0],a=e[1],u=(0,l.Z)(),p=u.session,m=u.verified,h=(0,s.useRouter)(),x=(0,V.i)({session:p,verified:m}),v=x.data,g=x.loading,b=x.refetch;(0,c.useEffect)(function(){var n;m&&k(),a(null==v?void 0:null===(n=v[0])||void 0===n?void 0:n.status)},[m,v]);var k=(n=(0,t.Z)(function(){return(0,i.__generator)(this,function(n){switch(n.label){case 0:return[4,h.push({pathname:d.H["/"].url})];case 1:return n.sent(),[2]}})}),function(){return n.apply(this,arguments)});return(0,o.jsxs)(H,{children:["DENIED"===r?(0,o.jsx)(q.q,{severity:"error",children:(0,o.jsxs)("p",{className:"text__paragrah",children:["Hola, te recordamos que tu ",(0,o.jsx)("span",{className:"warning",children:"documento ha sido rechazado"}),". \xdanicamente las cuentas verificadas pueden retirar sus ganancias. Verificamos las cuentas para asegurarnos que seas t\xfa el titular de la misma."]})}):(0,o.jsx)(q.q,{severity:"info",children:(0,o.jsxs)("p",{className:"text__paragrah",children:["Hola, te recordamos que tu cuenta a\xfan ",(0,o.jsx)("span",{className:"warning",children:"no ha sido verificada"}),". \xdanicamente las cuentas verificadas pueden retirar sus ganancias. Verificamos las cuentas para asegurarnos que seas t\xfa el titular de la misma."]})}),(0,o.jsxs)("div",{className:"state-wrapper",children:[g?(0,o.jsx)(A,{}):(0,o.jsx)(y,{status:r}),"PENDING"===r&&(0,o.jsx)(q.q,{className:"simple___alert",children:(0,o.jsxs)("p",{children:[(0,o.jsx)("span",{className:"warning",children:"La imagen enviada se encuentra en evaluaci\xf3n"}),", En un plazo no mayor a 24 horas tu cuenta ser\xe1 verificada. En caso de haber alguna observaci\xf3n, te enviaremos un correo con nuestros comentarios."]})}),"DENIED"===r&&(0,o.jsx)(q.q,{className:"simple___alert",children:(0,o.jsxs)("p",{children:[(0,o.jsx)("span",{className:"warning",children:"La imagen enviada no fue aceptada."})," Para poder verificar tu cuenta te recomendamos subir una foto n\xedtida de tu documento de identidad original. Peso m\xe1ximo 2 Mb, formatos aceptados jpg y png. No aceptamos documentos escaneados ni fotocopias."]})})]}),"DENIED"===r&&(0,o.jsx)(f.p,{refetch:b})]})},H=u.default.div(S(),function(n){return n.theme.palette.alternate12.main},R.q.min_width.tabletS),O=(0,u.keyframes)(T()),A=u.default.div(X(),O)}},function(n){n.O(0,[2013,4617,5445,972,9774,2888,179],function(){return n(n.s=96785)}),_N_E=n.O()}]);
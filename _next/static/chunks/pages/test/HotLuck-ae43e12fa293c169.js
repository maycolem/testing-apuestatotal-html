(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9466],{31812:function(t,i,n){"use strict";n.d(i,{Z:function(){return C}});var a=n(63366),o=n(87462),e=n(67294),r=n(98216),l=n(27909),d=n(94780),s=n(90948),c=n(71657),u=n(69397),g=n(66489),p=n(34867),v=n(1588);function h(t){return(0,p.ZP)("MuiLoadingButton",t)}let f=(0,v.Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);var m=n(85893);let A=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],b=t=>{let{loading:i,loadingPosition:n,classes:a}=t,e={root:["root",i&&"loading"],startIcon:[i&&`startIconLoading${(0,r.Z)(n)}`],endIcon:[i&&`endIconLoading${(0,r.Z)(n)}`],loadingIndicator:["loadingIndicator",i&&`loadingIndicator${(0,r.Z)(n)}`]},l=(0,d.Z)(e,h,a);return(0,o.Z)({},a,l)},w=t=>"ownerState"!==t&&"theme"!==t&&"sx"!==t&&"as"!==t&&"classes"!==t,x=(0,s.ZP)(u.Z,{shouldForwardProp:t=>w(t)||"classes"===t,name:"MuiLoadingButton",slot:"Root",overridesResolver:(t,i)=>[i.root,i.startIconLoadingStart&&{[`& .${f.startIconLoadingStart}`]:i.startIconLoadingStart},i.endIconLoadingEnd&&{[`& .${f.endIconLoadingEnd}`]:i.endIconLoadingEnd}]})(({ownerState:t,theme:i})=>(0,o.Z)({[`& .${f.startIconLoadingStart}, & .${f.endIconLoadingEnd}`]:{transition:i.transitions.create(["opacity"],{duration:i.transitions.duration.short}),opacity:0}},"center"===t.loadingPosition&&{transition:i.transitions.create(["background-color","box-shadow","border-color"],{duration:i.transitions.duration.short}),[`&.${f.loading}`]:{color:"transparent"}},"start"===t.loadingPosition&&t.fullWidth&&{[`& .${f.startIconLoadingStart}, & .${f.endIconLoadingEnd}`]:{transition:i.transitions.create(["opacity"],{duration:i.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===t.loadingPosition&&t.fullWidth&&{[`& .${f.startIconLoadingStart}, & .${f.endIconLoadingEnd}`]:{transition:i.transitions.create(["opacity"],{duration:i.transitions.duration.short}),opacity:0,marginLeft:-8}})),j=(0,s.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver(t,i){let{ownerState:n}=t;return[i.loadingIndicator,i[`loadingIndicator${(0,r.Z)(n.loadingPosition)}`]]}})(({theme:t,ownerState:i})=>(0,o.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===i.loadingPosition&&("outlined"===i.variant||"contained"===i.variant)&&{left:"small"===i.size?10:14},"start"===i.loadingPosition&&"text"===i.variant&&{left:6},"center"===i.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:t.palette.action.disabled},"end"===i.loadingPosition&&("outlined"===i.variant||"contained"===i.variant)&&{right:"small"===i.size?10:14},"end"===i.loadingPosition&&"text"===i.variant&&{right:6},"start"===i.loadingPosition&&i.fullWidth&&{position:"relative",left:-10},"end"===i.loadingPosition&&i.fullWidth&&{position:"relative",right:-10})),y=e.forwardRef(function(t,i){let n=(0,c.Z)({props:t,name:"MuiLoadingButton"}),{children:r,disabled:d=!1,id:s,loading:u=!1,loadingIndicator:p,loadingPosition:v="center",variant:h="text"}=n,f=(0,a.Z)(n,A),w=(0,l.Z)(s),y=null!=p?p:(0,m.jsx)(g.Z,{"aria-labelledby":w,color:"inherit",size:16}),C=(0,o.Z)({},n,{disabled:d,loading:u,loadingIndicator:y,loadingPosition:v,variant:h}),I=b(C);return(0,m.jsx)(x,(0,o.Z)({disabled:d||u,id:w,ref:i},f,{variant:h,classes:I,ownerState:C,children:"end"===C.loadingPosition?(0,m.jsxs)(e.Fragment,{children:[r,u&&(0,m.jsx)(j,{className:I.loadingIndicator,ownerState:C,children:y})]}):(0,m.jsxs)(e.Fragment,{children:[u&&(0,m.jsx)(j,{className:I.loadingIndicator,ownerState:C,children:y}),r]})}))});var C=y},27909:function(t,i,n){"use strict";var a=n(92996);i.Z=a.Z},67049:function(t,i,n){"use strict";var a=n(66489),o=n(53918),e=n(85893),r=function(t){var i=t.loading,n=t.size,o=t.minHeight,r=(t.color,t.width);return void 0!==i&&i?(0,e.jsx)(l,{$minHeight:void 0===o?"100px":o,$width:void 0===r?"100%":r,children:(0,e.jsx)(a.Z,{sx:{color:"red"},size:void 0===n?30:n})}):null};i.Z=r;var l=o.default.div.withConfig({displayName:"LoadingDefault__Styled",componentId:"sc-t3uly3-0"})(["&{display:flex;align-items:center;justify-content:center;min-height:",";width:",";flex:1;}"],function(t){return t.$minHeight},function(t){return t.$width})},49588:function(t,i,n){"use strict";n.d(i,{p:function(){return l}});var a=n(98353),o=n(67294),e=n(56408),r=n(44603),l=function(t){var i=t.sub_provider,n=t.external_id,l=(0,e.dv)("jphotluck").data,d=(0,e.D6)("jpctinteractive").data,s=(0,e.rn)().data,c=(0,r.Z)({skip:!1}).jackpots,u=(0,o.useState)(null),g=u[0],p=u[1],v=(0,o.useState)(null),h=v[0],f=v[1];return(0,o.useEffect)(function(){var t=function(){var t,a,o,e,r,u;switch(i){case"HotLuck":return null==l?void 0:null===(t=l.levels[0])||void 0===t?void 0:t.value;case"ctgaming":return null==d?void 0:null===(a=d.levels[0])||void 0===a?void 0:a.value;case"egt":return null==s?void 0:s.currentLevelIV;case"pragmatic":if(null!=c&&null!==(o=c.pragmatic)&&void 0!==o&&null!==(e=o.games_ids)&&void 0!==e&&e.includes(n))return null==c?void 0:null===(r=c.pragmatic)||void 0===r?void 0:null===(u=r.levels[0])||void 0===u?void 0:u.value;break;default:return}}();void 0!==t&&(p(t),f(("pragmatic"===i?a._3:a.Aq)(t)))},[i,l,d,s,n,c]),{mega:g,megaString:h}}},44603:function(t,i,n){"use strict";var a=n(27812),o=n(43335),e=n(67294),r=n(56408),l=n(13674),d=function(t){var i,n=null===(i=null==t?void 0:t.skip)||void 0===i||i,d=(0,o.TL)(),s=(0,o.CG)(l.Eh),c=(0,r.dY)(null,{skip:n}).data,u=function(){};(0,e.useEffect)(function(){var t,i;(null==s||null===(t=s.pragmatic)||void 0===t||null===(i=t.levels)||void 0===i||!i.length)&&c&&g(c)},[c]);var g=function(t){if(t.length){var i,n,o=(0,a.Z)(t),e=o.sort(function(t,i){var n=t.amount;return i.amount-n}).map(function(t,i){var n;return{value:t.amount,valueName:0===i?"Grand":1===i?"Mega":2===i?"Major":3===i?"Minor":void 0}});d((0,l.M4)({levels:e,games_ids:null===(i=o[0])||void 0===i?void 0:null===(n=i.games)||void 0===n?void 0:n.split(",")}))}};return{setJackpotPragmaticAction:g,jackpots:s,initJackpotsPragmatic:u}};i.Z=d},40748:function(t,i,n){"use strict";n.d(i,{Q:function(){return o}});var a=n(20324),o=function(){var t=(0,a.Zc)({props:{init:0,end:999,lobby:"TOURNAMENTMACHINES"}}).data,i=(0,a.Zc)({props:{init:0,end:999,lobby:"CARRERASMACHINE"}}).data;return{belongsToTheTournament:function(i){if(t&&i)return null==t?void 0:t.entities[i]},belongsToTheTournamentCarreras:function(n){if(t&&n)return null==i?void 0:i.entities[n]}}}},97929:function(t,i,n){"use strict";n.r(i);var a=n(67294),o=n(53918),e=n(7631),r=n(48065),l=n(84225),d=n(4298),s=n.n(d),c=n(85260),u=n(85893),g=function(){var t,i=(0,a.useRef)(),n=(0,a.useRef)();(0,a.useEffect)(function(){(0,c.g)(1e3).then(function(){for(var t=null===(e=document.getElementById("jp-main-container-combined"))||void 0===e?void 0:e.querySelectorAll(".newJPDisplay"),a=null==i?void 0:null===(r=i.current)||void 0===r?void 0:r.querySelector("#jackpot"),o=null==n?void 0:null===(l=n.current)||void 0===l?void 0:l.querySelector("#jackpot");null!=a&&a.hasChildNodes();)null==a||a.removeChild(null==a?void 0:a.lastChild);for(;null!=o&&o.hasChildNodes();)null==o||o.removeChild(null==o?void 0:o.lastChild);if((null==t?void 0:t.length)>0){var e,r,l,d,s,c=null===(d=t[0])||void 0===d?void 0:d.cloneNode(!0),u=null===(s=t[1])||void 0===s?void 0:s.cloneNode(!0);null==a||a.appendChild(c),null==o||o.appendChild(u)}setInterval(function(){for(var t=null===(e=document.getElementById("jp-main-container-combined"))||void 0===e?void 0:e.querySelectorAll(".newJPDisplay"),a=null==i?void 0:null===(r=i.current)||void 0===r?void 0:r.querySelector("#jackpot"),o=null==n?void 0:null===(l=n.current)||void 0===l?void 0:l.querySelector("#jackpot");a.hasChildNodes();)a.removeChild(null==a?void 0:a.lastChild);for(;null!=o&&o.hasChildNodes();)null==o||o.removeChild(null==o?void 0:o.lastChild);if((null==t?void 0:t.length)>0){var e,r,l,d,s,c=null===(d=t[0])||void 0===d?void 0:d.cloneNode(!0),u=null===(s=t[1])||void 0===s?void 0:s.cloneNode(!0);null==a||a.appendChild(c),null==o||o.appendChild(u)}},500)})},[]);var o=(0,e.Hg)({container:"CASINO_TOP_LEFT"}).data,l=[],d=function(t,i,n){l.includes(t)||(l.push(t),(0,r.mI)(t,i)),(0,r.vJ)(t,i,n)};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s(),{type:"text/javascript",className:"ctscript ct-jp-display 1",src:"https://cdn3.ctrgs.com/jp-display-stable/jsc/jackpot-multidisplay.min.js?v=2.80.003","display-ids":"https://rgs1.ctrgs.com/jpdisplay-cache-pub/local_jpdisp_403.json,https://rgs1.ctrgs.com/jpdisplay-cache-pub/local_jpdisp_321.json","display-style":"ct-hotcash-display-desktop-2020","display-lang":"en","display-tooltip":"bottom"}),(0,u.jsxs)(p,{children:[(0,u.jsxs)(h,{ref:i,children:[(0,u.jsx)("div",{id:"jackpot"}),(0,u.jsx)("div",{id:"button",children:(0,u.jsx)("a",{href:"https://www.apuestatotal.com/casino/?provider=ctgaming",target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)("button",{children:"Cazar Jackpot"})})})]}),(0,u.jsxs)(h,{ref:n,children:[(0,u.jsx)("div",{id:"jackpot"}),(0,u.jsx)("div",{id:"button",children:(0,u.jsx)("a",{href:"https://www.apuestatotal.com/casino/?provider=ctgaming",target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)("button",{children:"Cazar Jackpot"})})})]})]}),(0,u.jsx)(m,{id:"casino-banner",children:(0,u.jsx)("div",{children:null==o?void 0:null===(t=o.banners)||void 0===t?void 0:t.map(function(t,i){var n=t.config;return(0,u.jsx)(f,{children:(0,u.jsx)("img",{alt:"Banner Apuesta Total",onLoad:function(){d(null==n?void 0:n.title,"casino",i+1)},src:"".concat("https://new.apuestatotal.com","/").concat(null==n?void 0:n.image)})},i)})})})]})},p=o.default.div.withConfig({displayName:"HotLuck__StyledJackpots",componentId:"sc-1f1c9uf-0"})(["display:flex;gap:10px;padding:10px;"]),v=(0,o.css)(["background-image:radial-gradient(circle at center center,transparent 0%,rgb(0,0,0) 85%),linear-gradient( 78deg,rgba(192,192,192,0.05) 0%,rgba(192,192,192,0.05) 50%,rgba(60,60,60,0.05) 50%,rgba(60,60,60,0.05) 100% ),linear-gradient( 227deg,rgba(97,97,97,0.05) 0%,rgba(97,97,97,0.05) 50%,rgba(52,52,52,0.05) 50%,rgba(52,52,52,0.05) 100% ),linear-gradient( 240deg,rgba(98,98,98,0.05) 0%,rgba(98,98,98,0.05) 50%,rgba(249,249,249,0.05) 50%,rgba(249,249,249,0.05) 100% ),linear-gradient( 187deg,rgba(1,1,1,0.05) 0%,rgba(1,1,1,0.05) 50%,rgba(202,202,202,0.05) 50%,rgba(202,202,202,0.05) 100% ),linear-gradient( 101deg,rgba(61,61,61,0.05) 0%,rgba(61,61,61,0.05) 50%,rgba(254,254,254,0.05) 50%,rgba(254,254,254,0.05) 100% ),linear-gradient( 176deg,rgba(237,237,237,0.05) 0%,rgba(237,237,237,0.05) 50%,rgba(147,147,147,0.05) 50%,rgba(147,147,147,0.05) 100% ),linear-gradient( 304deg,rgba(183,183,183,0.05) 0%,rgba(183,183,183,0.05) 50%,rgba(57,57,57,0.05) 50%,rgba(57,57,57,0.05) 100% ),radial-gradient(circle at center center,hsl(351,4%,12%),hsl(351,4%,12%));"]);i.default=g;var h=o.default.div.withConfig({displayName:"HotLuck__StyledWrap",componentId:"sc-1f1c9uf-1"})(["padding:1rem;overflow:hidden;width:100%;max-width:calc(600px + 1vw);color:white;flex:1 0 300px;gap:20px;display:flex;flex-direction:column;border-radius:10px;",' &&{#button{display:flex;justify-content:center;a{> button{color:white;background:red;margin:auto;padding:10px;width:auto;text-align:center;border-radius:7px;}}.title{margin-bottom:10px;}.row-winners{display:grid;grid-template-columns:auto 1fr auto;gap:10px;width:50%;}}.newJPDisplay{display:grid;grid-template-columns:1fr 1fr;gap:10px;row-gap:25px;margin:auto;padding:0;> a,div{grid-column:span 2;width:100%;margin:initial;height:initial;}a{width:220px;margin:auto;grid-column:span 2;margin-bottom:10px;height:60px;}> div[name="Major"],div[name="Minor"]{grid-column:span 1;}> div{.sideRight,.sideLeft{display:none;}.jpName{font-size:1rem !important;width:auto;}.sideLeft,.sideMiddle,.sideRight,.jpValCont{height:calc(2.2rem + 0.3vw);line-height:calc(2.2rem + 0.3vw);width:100%;font-size:1rem !important;font-size:calc(1rem + 0.3vw) !important;}.currency{top:50%;bottom:50%;position:absolute;right:5px;left:initial;transform:rotate(-90deg);width:auto;}#apalmsbetcomMega,#apalmsbetcomMajor,#apalmsbetcomMinor{font-size:1.1rem;}}}}'],v),f=o.default.div.withConfig({displayName:"HotLuck__StyledBanner",componentId:"sc-1f1c9uf-2"})(["cursor:pointer;position:relative;height:auto;overflow:initial;display:block !important;height:100%;max-height:100%;img{object-fit:contain;display:block;}"]),m=o.default.div.withConfig({displayName:"HotLuck__StyledWrapperSlider",componentId:"sc-1f1c9uf-3"})(["position:relative;right:14px;overflow:auto;> div{display:grid;grid-template-columns:repeat(6,100%);}","{> div{grid-template-columns:repeat(6,50%);}}","{> div{grid-template-columns:repeat(6,calc(100% / 3));}}"],l.q.min_width.tabletL,l.q.min_width.desktopM)},68198:function(t,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/HotLuck",function(){return n(97929)}])},92809:function(t,i){"use strict";i.Z={src:"/_next/static/media/Top_10.57aa0a60.svg",height:432,width:389}},19131:function(t,i){"use strict";i.Z={src:"/_next/static/media/torneo.ef8b7d11.png",height:200,width:200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAwklEQVR42jWOzwoBURjFz/Ue9p7DG3gdslWW2FAiShaIEglDETsba6ZspEnDTLFgZo7vzozF7/75nXNvH5ylSpCE5jFHWugIx5gu/qFrqPpzoegIepeHlEIUimhfx9DCu8/gye7L3Rfv4bNRmcsQXJTwHRQQAOCoCBplUHu81sow+2AzB29bBVNJcFcDW3nQHCD83rLnYCOL4CzFvYSnHtiWgmTh5LY+uEsV3CbgqgJaU+gho4IsBylR8LV4r6MgdvwBTtmeKzUE4koAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},54537:function(t,i){"use strict";i.Z={src:"/_next/static/media/torneoCarrera.bb3a30a2.png",height:1126,width:1699,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/AcOqNyUeGgoHHh8K9M7S8hna4PYp8vL5Jvn6/hDg4vO+AcGpNl6vuOWd1+D59TEh/g4EAPgBFxD6AODn/gCNqP8AAQAAAACEdCTEwbjcO2hZAPz4+gAC9PYAAggGAACTqAD5Ac2zOkqRn9218enpAC8oCQDf6wcADAsG8QoJA/3x7vISAcCnNjjf4/VP/f8B/wkKBeQnIArXKCQO3gsTCP/o0tYvA+9Ncw+GOQwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},9254:function(t,i){"use strict";i.Z={src:"/_next/static/media/fondoJackpotLobby.42e16f23.png",height:138,width:646,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAS0lEQVR4nGNcM83A4fCp100fP//+zsLMyPifgYHh/z+G/2xsTOwWhkL1jPO7tO2PnX3b/uv3v1+MjAxAxMDw99//f9xcLJyuthL1ANUCG1a36cGwAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},4298:function(t,i,n){t.exports=n(72189)}},function(t){t.O(0,[3662,2715,1465,6602,7842,8065,9774,2888,179],function(){return t(t.s=68198)}),_N_E=t.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1261],{46574:function(n,t,e){"use strict";var r=e(35266),i=e(98216),a=e(90948),o=e(71657);let s=(0,r.Z)({createStyledComponent:(0,a.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver(n,t){let{ownerState:e}=n;return[t.root,t[`maxWidth${(0,i.Z)(String(e.maxWidth))}`],e.fixed&&t.fixed,e.disableGutters&&t.disableGutters]}}),useThemeProps:n=>(0,o.Z)({props:n,name:"MuiContainer"})});t.Z=s},35266:function(n,t,e){"use strict";e.d(t,{Z:function(){return b}});var r=e(63366),i=e(87462),a=e(67294),o=e(70828),s=e(14142),c=e(34867),d=e(94780),u=e(29628),l=e(13264),p=e(88647),m=e(85893);let f=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,p.Z)(),h=(0,l.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver(n,t){let{ownerState:e}=n;return[t.root,t[`maxWidth${(0,s.Z)(String(e.maxWidth))}`],e.fixed&&t.fixed,e.disableGutters&&t.disableGutters]}}),g=n=>(0,u.Z)({props:n,name:"MuiContainer",defaultTheme:x}),v=(n,t)=>{let e=n=>(0,c.ZP)(t,n),{classes:r,fixed:i,disableGutters:a,maxWidth:o}=n,u={root:["root",o&&`maxWidth${(0,s.Z)(String(o))}`,i&&"fixed",a&&"disableGutters"]};return(0,d.Z)(u,e,r)};function b(n={}){let{createStyledComponent:t=h,useThemeProps:e=g,componentName:s="MuiContainer"}=n,c=t(({theme:n,ownerState:t})=>(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:n.spacing(2),paddingRight:n.spacing(2),[n.breakpoints.up("sm")]:{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}}),({theme:n,ownerState:t})=>t.fixed&&Object.keys(n.breakpoints.values).reduce((t,e)=>{let r=n.breakpoints.values[e];return 0!==r&&(t[n.breakpoints.up(e)]={maxWidth:`${r}${n.breakpoints.unit}`}),t},{}),({theme:n,ownerState:t})=>(0,i.Z)({},"xs"===t.maxWidth&&{[n.breakpoints.up("xs")]:{maxWidth:Math.max(n.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[n.breakpoints.up(t.maxWidth)]:{maxWidth:`${n.breakpoints.values[t.maxWidth]}${n.breakpoints.unit}`}})),d=a.forwardRef(function(n,t){let a=e(n),{className:d,component:u="div",disableGutters:l=!1,fixed:p=!1,maxWidth:x="lg"}=a,h=(0,r.Z)(a,f),g=(0,i.Z)({},a,{component:u,disableGutters:l,fixed:p,maxWidth:x}),b=v(g,s);return(0,m.jsx)(c,(0,i.Z)({as:u,ownerState:g,className:(0,o.Z)(b.root,d),ref:t},h))});return d}},32337:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/captureImage",function(){return e(75664)}])},75664:function(n,t,e){"use strict";e.r(t);var r=e(47568),i=e(7297),a=e(70655),o=e(85893),s=e(46574),c=e(69397),d=e(12065),u=e(94688),l=e(94184),p=e.n(l),m=e(29306),f=e.n(m),x=e(73710),h=e.n(x),g=e(67294),v=e(5434),b=e(41248),w=e(53918);function j(){var n=(0,i.Z)(["\n    background: ",";\n    position: relative;\n    width: calc(100% + 28px);\n    right: 14px;\n    "," {\n        width: calc(100% + 100px);\n        right: 50px;\n    }\n    "," {\n        width: calc(100% + 100px);\n        right: 50px;\n    }\n"]);return j=function(){return n},n}function Z(){var n=(0,i.Z)(["\n    & {\n        width: 100%;\n        padding-top: 40px;\n    }\n    & h1 {\n        font-size: 1.7rem;\n        font-weight: 600;\n        text-align: center;\n    }\n"]);return Z=function(){return n},n}function k(){var n=(0,i.Z)(["\n    & {\n        text-align: center;\n        padding: 2rem;\n    }\n    & div {\n        max-width: 500px;\n        margin: auto;\n        background: ",";\n        border: 1px solid ",";\n        border-radius: 10px;\n        padding: 1rem;\n        & strong {\n            font-weight: bold !important;\n        }\n    }\n"]);return k=function(){return n},n}function N(){var n=(0,i.Z)(["\n    text-align: center;\n    margin-bottom: 2.5rem;\n"]);return N=function(){return n},n}function y(){var n=(0,i.Z)(["\n                color: ",";\n            "]);return y=function(){return n},n}function _(){var n=(0,i.Z)(["\n                color: #616161;\n            "]);return _=function(){return n},n}function C(){var n=(0,i.Z)(["\n                color: #009847;\n            "]);return C=function(){return n},n}function S(){var n=(0,i.Z)(["\n                color: #0081e0;\n            "]);return S=function(){return n},n}function W(){var n=(0,i.Z)(["\n    ","\n"]);return W=function(){return n},n}function $(){var n=(0,i.Z)(["\n    color: ",";\n    display: flex;\n    align-items: center;\n    /* margin: auto; */\n    padding: 2px 10px;\n    border-radius: 8px;\n    font-size: 0.9rem;\n    background: ",";\n\n	svg {\n		font-size: 1rem;\n	}\n"]);return $=function(){return n},n}function R(){var n=(0,i.Z)(["\n                background: ",";\n                color: white;\n                border-color: #b80000;\n            "]);return R=function(){return n},n}function T(){var n=(0,i.Z)(["\n                background: #616161;\n                color: white;\n                border-color: #3c3c3c;\n            "]);return T=function(){return n},n}function O(){var n=(0,i.Z)(["\n                background: #009847;\n                color: white;\n                border-color: #005e12;\n            "]);return O=function(){return n},n}function E(){var n=(0,i.Z)(["\n                background: #0081e0;\n                color: white;\n                border-color: #004ea5;\n            "]);return E=function(){return n},n}function L(){var n=(0,i.Z)(['\n    padding: 7px 10px;\n    text-align: center;\n    font-feature-settings: "tnum";\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n    border: 8px solid transparent;\n    background: ',";\n\n    ","\n"]);return L=function(){return n},n}function P(){var n=(0,i.Z)(["\n    & {\n        border: 1px solid ",";\n        border-radius: 8px;\n        padding-bottom: 0;\n        background: ",";\n        display: flex;\n        flex-direction: column;\n        box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 10px;\n        overflow: hidden;\n        transition: 200ms;\n    }\n"]);return P=function(){return n},n}function q(){var n=(0,i.Z)(["\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    display: grid;\n    position: relative;\n    top: 1px;\n    grid-auto-flow: dense;\n    grid-template-columns: repeat(2, 1fr);\n    padding: 0 10px;\n    background: ",";\n    "," {\n        grid-template-columns: repeat(3, 1fr);\n    }\n\n    "," {\n        grid-template-columns: repeat(6, 1fr);\n    }\n    .row {\n        display: flex;\n        flex-direction: column;\n        gap: 2px;\n        border-bottom: 1px solid ",";\n        padding: 7px;\n\n        &.ver-mas {\n            grid-column: span 2;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            "," {\n                grid-column: span 3;\n            }\n\n            "," {\n                grid-column: span 6;\n            }\n            & button {\n                font-size: 0.75rem;\n                margin: 7px;\n                & svg:first-type-of {\n                    font-size: 1rem;\n                }\n            }\n        }\n\n        .title {\n            font-size: 0.75rem;\n            text-transform: uppercase;\n            color: ",";\n            font-weight: 500;\n            white-space: nowrap;\n            padding: 7px;\n            padding-bottom: 0;\n        }\n        .row-content {\n            &.negative {\n                color: ",";\n            }\n            display: flex;\n            align-items: center;\n            gap: 5px;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            overflow: hidden;\n            color: ",';\n            font-size: 0.95rem;\n            font-feature-settings: "tnum";\n            padding: 7px;\n            padding-top: 0;\n            > p {\n                text-transform: lowercase;\n                &::first-letter {\n                    text-transform: uppercase;\n                }\n            }\n        }\n    }\n']);return q=function(){return n},n}function I(){var n=(0,i.Z)(["\n    padding: 1rem 1rem;\n    padding-top: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    overflow: hidden;\n"]);return I=function(){return n},n}var z=function(){var n,t=(0,b.I0)(),e=(0,g.useRef)(),i=function(n){f().toBlob(document.getElementById(n)).then(function(n){})},u=function(n){var e,i=new ClipboardItem({"image/png":new Promise((e=(0,r.Z)(function(e){return(0,a.__generator)(this,function(r){return f().toBlob(n).then(function(n){e(new Blob([n],{type:"image/png"})),t((0,d.TQ)(URL.createObjectURL(n)))}),[2]})}),function(n){return e.apply(this,arguments)}))});navigator.clipboard.write([i]).then(function(){console.log("Se ha copiado la imagen!"),t((0,d.A_)())}).catch(function(n){alert("Error Clipboard Write: ".concat(n))})},l=(n=(0,r.Z)(function(n){return(0,a.__generator)(this,function(t){return f().toBlob(document.getElementById(n)).then(function(n){var t=URL.createObjectURL(n);confirm("Este navegador no admite la copia de im\xe1genes en el portapapeles.\n\n 1. Presione 'Aceptar' para generar la imagen en una nueva pesta\xf1a.\n 2. Presione 'Cancelar' para regresar a la web.")&&window.open(t,"_blank")}),[2]})}),function(t){return n.apply(this,arguments)}),m=function(n){var t=document.getElementById(n);navigator.clipboard&&"undefined"!=typeof ClipboardItem?u(t):l(n)};return(0,o.jsx)(B,{children:(0,o.jsx)(G,{children:(0,o.jsx)(s.Z,{fixed:!0,maxWidth:"lg",children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Capture Image"}),(0,o.jsx)("div",{id:"section-print",children:(0,o.jsx)(M,{children:(0,o.jsxs)("div",{id:"card-test",children:[(0,o.jsx)("strong",{children:"Browsers"}),(0,o.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in voluptatibus aut aspernatur. Quam dolorum, nostrum ex porro ullam consequuntur, et veritatis illum nulla vitae voluptatem ipsum praesentium ea eos?"})]})})}),(0,o.jsx)(U,{children:(0,o.jsxs)(c.Z,{variant:"contained",color:"success",onClick:function(){i("card-test")},children:["Copy Card\xa0",(0,o.jsx)(v.Fqs,{})]})}),(0,o.jsx)(X,{children:"Mis Apuestas Deportivas"}),(0,o.jsx)(D,{children:[1,2,3,4,5].map(function(n,t){return(0,o.jsxs)(H,{ref:e,id:"".concat(n),className:p()("StyledItem"),children:[(0,o.jsx)(X,{className:"title-id",children:"item.game.".concat(n)}),(0,o.jsxs)(Q,{children:[(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"title",children:"Fecha y hora de creaci\xf3n"}),(0,o.jsx)("div",{className:"row-content",children:(0,o.jsx)("p",{children:"item.created_date"})})]}),(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"title",children:"Tipo"}),(0,o.jsx)("div",{className:"row-content",children:(0,o.jsx)("p",{children:"item.type"})})]}),(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"title",children:"Monto"}),(0,o.jsx)("div",{className:"row-content",children:(0,o.jsx)("p",{children:"item?.wager"})})]}),(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"title",children:"Cuota"}),(0,o.jsx)("div",{className:"row-content",children:(0,o.jsx)("p",{children:"item.odds"})})]}),(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"title",children:"Resultado"}),(0,o.jsx)("div",{className:"row-content",children:(0,o.jsx)(A,{$status:"item.status",children:"item.status"})})]}),(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"title",children:"Ganancia"}),(0,o.jsx)("div",{className:"row-content",children:(0,o.jsx)("p",{children:"item?.winning"})})]}),(0,o.jsxs)("div",{className:"row ver-mas",children:[(0,o.jsx)(F,{children:(0,o.jsxs)(o.Fragment,{children:["Ver m\xe1s ",(0,o.jsx)(v.Yc6,{})]})}),(0,o.jsxs)(F,{onClick:function(){m(n)},children:["Copy\xa0",(0,o.jsx)(v.Fqs,{})]})]})]})]},"bet-".concat(t))})})]})})})})};t.default=z;var B=w.default.div(j(),function(n){return n.theme.background},u.q.min_width.desktopS,u.q.min_width.tabletL),G=w.default.div(Z()),M=w.default.div(k(),function(n){return n.theme.background},function(n){return n.theme.contrastText}),U=w.default.div(N()),A=w.default.p(W(),function(n){return"LOST"===n.$status?(0,w.css)(y(),function(n){return n.theme.palette.primary.main}):"OPEN"===n.$status?(0,w.css)(_()):"WON"===n.$status?(0,w.css)(C()):"CASHOUT"===n.$status?(0,w.css)(S()):void 0}),F=w.default.button($(),function(n){return n.theme.primary},function(n){return h()(n.theme.palette.primary.main,.1)}),X=w.default.div(L(),function(n){return n.theme.background},function(n){return"LOST"===n.$status?(0,w.css)(R(),function(n){return n.theme.palette.primary.main}):"OPEN"===n.$status?(0,w.css)(T()):"WON"===n.$status?(0,w.css)(O()):"CASHOUT"===n.$status?(0,w.css)(E()):void 0}),H=w.default.div(P(),function(n){return h()(n.theme.contrastText,.2)},function(n){return h()(n.theme.background,.02)}),Q=w.default.div(q(),function(n){return n.theme.background},u.q.min_width.tabletS,u.q.min_width.desktopXS,function(n){return h()(n.theme.contrastText,.2)},u.q.min_width.tabletS,u.q.min_width.desktopXS,function(n){return h()(n.theme.contrastText,.7)},function(n){return n.theme.primary},function(n){return h()(n.theme.contrastText,.4)}),D=w.default.div(I())}},function(n){n.O(0,[9306,9774,2888,179],function(){return n(n.s=32337)}),_N_E=n.O()}]);
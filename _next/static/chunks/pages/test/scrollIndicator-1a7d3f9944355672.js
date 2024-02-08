(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[976],{32045:function(e,t,i){"use strict";var o=i(35266);let n=(0,o.Z)();t.Z=n},35266:function(e,t,i){"use strict";i.d(t,{Z:function(){return g}});var o=i(63366),n=i(87462),r=i(67294),d=i(70828),u=i(14142),a=i(34867),s=i(94780),c=i(29628),l=i(13264),m=i(88647),p=i(85893);let h=["className","component","disableGutters","fixed","maxWidth","classes"],f=(0,m.Z)(),x=(0,l.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver(e,t){let{ownerState:i}=e;return[t.root,t[`maxWidth${(0,u.Z)(String(i.maxWidth))}`],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}}),v=e=>(0,c.Z)({props:e,name:"MuiContainer",defaultTheme:f}),b=(e,t)=>{let i=e=>(0,a.ZP)(t,e),{classes:o,fixed:n,disableGutters:r,maxWidth:d}=e,c={root:["root",d&&`maxWidth${(0,u.Z)(String(d))}`,n&&"fixed",r&&"disableGutters"]};return(0,s.Z)(c,i,o)};function g(e={}){let{createStyledComponent:t=x,useThemeProps:i=v,componentName:u="MuiContainer"}=e,a=t(({theme:e,ownerState:t})=>(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,i)=>{let o=e.breakpoints.values[i];return 0!==o&&(t[e.breakpoints.up(i)]={maxWidth:`${o}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,n.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})),s=r.forwardRef(function(e,t){let r=i(e),{className:s,component:c="div",disableGutters:l=!1,fixed:m=!1,maxWidth:f="lg"}=r,x=(0,o.Z)(r,h),v=(0,n.Z)({},r,{component:c,disableGutters:l,fixed:m,maxWidth:f}),g=b(v,u);return(0,p.jsx)(a,(0,n.Z)({as:c,ownerState:v,className:(0,d.Z)(g.root,s),ref:t},x))});return s}},10384:function(e,t,i){"use strict";i.d(t,{Z:function(){return h}});var o=i(59499),n=i(16835),r=i(67294),d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0px",i=(0,r.useState)(!1),o=i[0],d=i[1];return(0,r.useEffect)(function(){var i=new IntersectionObserver(function(e){(0,n.Z)(e,1)[0].isIntersecting&&(d(!0),i.disconnect())},{rootMargin:t});return e.current&&i.observe(e.current),function(){e.current&&i.unobserve(e.current)}},[o]),o},u=i(85893);function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,o)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach(function(t){(0,o.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var c,l,m,p=function(e){var t=e.from,i=e.to,o=e.children,n=e.delay,a=void 0===n?0:n,c=(0,r.useRef)(null),l=d(c),m={transition:"850ms ease-in-out ".concat(a>500?500:a,"ms")};return(0,u.jsx)("div",{ref:c,style:l?s(s({},m),i):s(s({},m),t),children:o})},h={FadeIn:function(e){var t=e.children;return(0,u.jsx)(p,{from:{opacity:0},to:{opacity:1},children:t})},FadeUp:function(e){var t=e.children,i=e.delay;return(0,u.jsx)(p,{from:{opacity:0,translate:"0 2rem"},to:{opacity:1,translate:"none"},delay:i,children:t})},ScaleIn:function(e){var t=e.children;return(0,u.jsx)(p,{from:{scale:"0"},to:{scale:"1"},children:t})}}},73837:function(e,t,i){"use strict";i.d(t,{j:function(){return a}});var o=i(29105),n=i(67294),r=function(){var e=(0,n.useState)(0),t=e[0],i=e[1];return(0,n.useEffect)(function(){var e=function(){var e,t=document.documentElement.scrollTop;i(t/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}},[]),{scroll:t}},d=i(53918),u=i(85893),a=function(e){var t=e.className,i=r().scroll,n=(0,o.Z)().heightHeader;return(0,u.jsx)(s,{$heightHeader:"".concat(n,"px"),className:void 0===t?"":t,children:(0,u.jsx)(c,{className:"progress",style:{width:"".concat(i,"%")}})})},s=d.default.div.withConfig({displayName:"ScrollIndicator__ScrollIndicatorCss",componentId:"sc-1s618ai-0"})(["position:fixed;background-color:",";left:0;top:",";z-index:99999;width:100%;"],function(e){return e.theme.background},function(e){return e.$heightHeader||0}),c=d.default.div.withConfig({displayName:"ScrollIndicator__Progress",componentId:"sc-1s618ai-1"})(["height:3px;background:",";"],function(e){return e.theme.secondary})},29105:function(e,t,i){"use strict";var o=i(67294),n=i(63933),r=function(){var e=(0,o.useState)(0),t=e[0],i=e[1],r=(0,n.Z)().width;return(0,o.useEffect)(function(){var e=setTimeout(function(){var e=document.getElementById("layout-default-at-apuesta");null!==e&&i(e.offsetHeight)},200);return function(){clearTimeout(e)}},[window,document,r]),{heightHeader:t}};t.Z=r},63933:function(e,t,i){"use strict";var o=i(67294);t.Z=function(){var e=(0,o.useState)({width:void 0,height:void 0}),t=e[0],i=e[1];return(0,o.useEffect)(function(){function e(){i({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}},[]),t}},342:function(e,t,i){"use strict";i.r(t),i.d(t,{Heading:function(){return c}});var o=i(53918),n=i(32045),r=i(73837),d=i(10384),u=i(85893),a=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.j,{}),(0,u.jsx)(n.Z,{fixed:!0,children:(0,u.jsxs)(s,{children:[(0,u.jsx)(c,{children:"Animations"}),(0,u.jsx)(d.Z.FadeIn,{children:(0,u.jsx)("p",{children:"FadeIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,u.jsx)(d.Z.FadeUp,{children:(0,u.jsx)("p",{children:"FadeUp: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,u.jsx)(d.Z.ScaleIn,{children:(0,u.jsx)("p",{children:"ScaleIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,u.jsx)(d.Z.FadeIn,{children:(0,u.jsx)("p",{children:"FadeIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,u.jsx)(d.Z.ScaleIn,{children:(0,u.jsx)("p",{children:"ScaleIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,u.jsx)(d.Z.FadeIn,{children:(0,u.jsx)("p",{children:"FadeIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,u.jsx)(d.Z.ScaleIn,{children:(0,u.jsx)("p",{children:"ScaleIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,u.jsx)(d.Z.ScaleIn,{children:(0,u.jsx)("p",{children:"ScaleIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,u.jsx)(d.Z.FadeIn,{children:(0,u.jsx)("p",{children:"FadeIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,u.jsx)(d.Z.FadeUp,{children:(0,u.jsx)("p",{children:"FadeUp: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,u.jsx)(d.Z.ScaleIn,{children:(0,u.jsx)("p",{children:"ScaleIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})})]})})]})};t.default=a;var s=o.default.div.withConfig({displayName:"scrollIndicator__ScrollContentAnimate",componentId:"sc-1kwlsp8-0"})(["padding:10px;width:auto;> div > p{color:",";margin:3rem;text-align:justify;line-height:2;font-weight:400;font-size:2rem;}"],function(e){return e.theme.contrastText}),c=o.default.h1.withConfig({displayName:"scrollIndicator__Heading",componentId:"sc-1kwlsp8-1"})(["text-align:center;font-size:2rem;"])},49812:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/scrollIndicator",function(){return i(342)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=49812)}),_N_E=e.O()}]);
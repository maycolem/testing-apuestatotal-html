(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[418],{46574:function(e,i,t){"use strict";var o=t(35266),n=t(98216),a=t(90948),r=t(71657);let d=(0,o.Z)({createStyledComponent:(0,a.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver(e,i){let{ownerState:t}=e;return[i.root,i[`maxWidth${(0,n.Z)(String(t.maxWidth))}`],t.fixed&&i.fixed,t.disableGutters&&i.disableGutters]}}),useThemeProps:e=>(0,r.Z)({props:e,name:"MuiContainer"})});i.Z=d},35266:function(e,i,t){"use strict";t.d(i,{Z:function(){return Z}});var o=t(63366),n=t(87462),a=t(67294),r=t(70828),d=t(14142),u=t(34867),s=t(94780),l=t(29628),c=t(13264),m=t(88647),p=t(85893);let x=["className","component","disableGutters","fixed","maxWidth","classes"],h=(0,m.Z)(),v=(0,c.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver(e,i){let{ownerState:t}=e;return[i.root,i[`maxWidth${(0,d.Z)(String(t.maxWidth))}`],t.fixed&&i.fixed,t.disableGutters&&i.disableGutters]}}),b=e=>(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:h}),q=(e,i)=>{let t=e=>(0,u.ZP)(i,e),{classes:o,fixed:n,disableGutters:a,maxWidth:r}=e,l={root:["root",r&&`maxWidth${(0,d.Z)(String(r))}`,n&&"fixed",a&&"disableGutters"]};return(0,s.Z)(l,t,o)};function Z(e={}){let{createStyledComponent:i=v,useThemeProps:t=b,componentName:d="MuiContainer"}=e,u=i(({theme:e,ownerState:i})=>(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!i.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:i})=>i.fixed&&Object.keys(e.breakpoints.values).reduce((i,t)=>{let o=e.breakpoints.values[t];return 0!==o&&(i[e.breakpoints.up(t)]={maxWidth:`${o}${e.breakpoints.unit}`}),i},{}),({theme:e,ownerState:i})=>(0,n.Z)({},"xs"===i.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},i.maxWidth&&"xs"!==i.maxWidth&&{[e.breakpoints.up(i.maxWidth)]:{maxWidth:`${e.breakpoints.values[i.maxWidth]}${e.breakpoints.unit}`}})),s=a.forwardRef(function(e,i){let a=t(e),{className:s,component:l="div",disableGutters:c=!1,fixed:m=!1,maxWidth:h="lg"}=a,v=(0,o.Z)(a,x),b=(0,n.Z)({},a,{component:l,disableGutters:c,fixed:m,maxWidth:h}),Z=q(b,d);return(0,p.jsx)(u,(0,n.Z)({as:l,ownerState:b,className:(0,r.Z)(Z.root,s),ref:i},v))});return s}},3108:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/scrollReveal",function(){return t(99817)}])},1689:function(e,i,t){"use strict";t.d(i,{Z:function(){return m}});var o,n,a,r=t(26042),d=t(85893),u=t(828),s=t(67294),l=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0px",t=(0,s.useState)(!1),o=t[0],n=t[1];return(0,s.useEffect)(function(){var t=new IntersectionObserver(function(e){(0,u.Z)(e,1)[0].isIntersecting&&(n(!0),t.disconnect())},{rootMargin:i});return e.current&&t.observe(e.current),function(){e.current&&t.unobserve(e.current)}},[o]),o},c=function(e){var i=e.from,t=e.to,o=e.children,n=e.delay,a=void 0===n?0:n,u=(0,s.useRef)(null),c=l(u),m={transition:"850ms ease-in-out ".concat(a>500?500:a,"ms")};return(0,d.jsx)("div",{ref:u,style:c?(0,r.Z)({},m,t):(0,r.Z)({},m,i),children:o})},m={FadeIn:function(e){var i=e.children;return(0,d.jsx)(c,{from:{opacity:0},to:{opacity:1},children:i})},FadeUp:function(e){var i=e.children,t=e.delay;return(0,d.jsx)(c,{from:{opacity:0,translate:"0 2rem"},to:{opacity:1,translate:"none"},delay:t,children:i})},ScaleIn:function(e){var i=e.children;return(0,d.jsx)(c,{from:{scale:"0"},to:{scale:"1"},children:i})}}},99817:function(e,i,t){"use strict";t.r(i);var o=t(7297),n=t(85893),a=t(1689),r=t(46574),d=t(23972),u=t(53918);function s(){var e=(0,o.Z)(["\n    padding: 20px;\n"]);return s=function(){return e},e}var l=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.Z,{children:(0,n.jsxs)(c,{children:[(0,n.jsx)(a.Z.FadeIn,{children:(0,n.jsx)(d.Z,{variant:"h2",children:"FadeIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,n.jsx)(a.Z.FadeUp,{children:(0,n.jsx)(d.Z,{variant:"h2",children:"FadeUp: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,n.jsx)(a.Z.ScaleIn,{children:(0,n.jsx)(d.Z,{variant:"h2",children:"ScaleIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,n.jsx)(a.Z.FadeIn,{children:(0,n.jsx)(d.Z,{variant:"h2",children:"FadeIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,n.jsx)(a.Z.ScaleIn,{children:(0,n.jsx)(d.Z,{variant:"h2",children:"ScaleIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,n.jsx)(a.Z.FadeIn,{children:(0,n.jsx)(d.Z,{variant:"h2",children:"FadeIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,n.jsx)(a.Z.ScaleIn,{children:(0,n.jsx)(d.Z,{variant:"h2",children:"ScaleIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,n.jsx)(a.Z.ScaleIn,{children:(0,n.jsx)(d.Z,{variant:"h2",children:"ScaleIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,n.jsx)(a.Z.FadeIn,{children:(0,n.jsx)(d.Z,{variant:"h2",children:"FadeIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,n.jsx)(a.Z.FadeUp,{children:(0,n.jsx)(d.Z,{variant:"h2",children:"FadeUp: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,n.jsx)(a.Z.ScaleIn,{children:(0,n.jsx)(d.Z,{variant:"h2",children:"ScaleIn: Ad aliquip voluptate duis qui consequat tempor incididunt velit laboris laborum dolor aliquip do. Excepteur amet sunt tempor duis commodo id esse duis elit enim est minim cupidatat elit. Eu reprehenderit commodo quis anim incididunt et nostrud cupidatat dolore esse dolor ea eiusmod. Aute nulla commodo est ut exercitation exercitation sit labore veniam sit."})}),(0,n.jsx)(a.Z.ScaleIn,{children:(0,n.jsx)(d.Z,{variant:"h1",children:"Im Scale In"})})]})})})};i.default=l;var c=u.default.div(s())}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=3108)}),_N_E=e.O()}]);
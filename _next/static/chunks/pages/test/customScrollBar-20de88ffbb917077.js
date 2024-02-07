(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5714],{32045:function(i,e,t){"use strict";var r=t(35266);let s=(0,r.Z)();e.Z=s},35266:function(i,e,t){"use strict";t.d(e,{Z:function(){return j}});var r=t(63366),s=t(87462),a=t(67294),n=t(70828),o=t(14142),u=t(34867),l=t(94780),c=t(29628),d=t(13264),m=t(88647),p=t(85893);let h=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,m.Z)(),g=(0,d.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver(i,e){let{ownerState:t}=i;return[e.root,e[`maxWidth${(0,o.Z)(String(t.maxWidth))}`],t.fixed&&e.fixed,t.disableGutters&&e.disableGutters]}}),Z=i=>(0,c.Z)({props:i,name:"MuiContainer",defaultTheme:x}),b=(i,e)=>{let t=i=>(0,u.ZP)(e,i),{classes:r,fixed:s,disableGutters:a,maxWidth:n}=i,c={root:["root",n&&`maxWidth${(0,o.Z)(String(n))}`,s&&"fixed",a&&"disableGutters"]};return(0,l.Z)(c,t,r)};function j(i={}){let{createStyledComponent:e=g,useThemeProps:t=Z,componentName:o="MuiContainer"}=i,u=e(({theme:i,ownerState:e})=>(0,s.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!e.disableGutters&&{paddingLeft:i.spacing(2),paddingRight:i.spacing(2),[i.breakpoints.up("sm")]:{paddingLeft:i.spacing(3),paddingRight:i.spacing(3)}}),({theme:i,ownerState:e})=>e.fixed&&Object.keys(i.breakpoints.values).reduce((e,t)=>{let r=i.breakpoints.values[t];return 0!==r&&(e[i.breakpoints.up(t)]={maxWidth:`${r}${i.breakpoints.unit}`}),e},{}),({theme:i,ownerState:e})=>(0,s.Z)({},"xs"===e.maxWidth&&{[i.breakpoints.up("xs")]:{maxWidth:Math.max(i.breakpoints.values.xs,444)}},e.maxWidth&&"xs"!==e.maxWidth&&{[i.breakpoints.up(e.maxWidth)]:{maxWidth:`${i.breakpoints.values[e.maxWidth]}${i.breakpoints.unit}`}})),l=a.forwardRef(function(i,e){let a=t(i),{className:l,component:c="div",disableGutters:d=!1,fixed:m=!1,maxWidth:x="lg"}=a,g=(0,r.Z)(a,h),Z=(0,s.Z)({},a,{component:c,disableGutters:d,fixed:m,maxWidth:x}),j=b(Z,o);return(0,p.jsx)(u,(0,s.Z)({as:c,ownerState:Z,className:(0,n.Z)(j.root,l),ref:e},g))});return l}},63286:function(i,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/customScrollBar",function(){return t(45676)}])},45676:function(i,e,t){"use strict";t.r(e),t.d(e,{default:function(){return k}});var r=t(7297),s=t(85893),a=t(5357),n=t(26042),o=t(69396),u=t(99534),l=t(67294),c=function(){var i=(0,l.useState)(!1),e=i[0],t=i[1],r=(0,l.useState)({scrollTop:0,scrollHeight:0,clientHeight:0}),a=r[0],c=r[1],d=function(i){c((0,o.Z)((0,n.Z)({},a),{scrollTop:i.scrollTop,scrollHeight:i.scrollHeight,clientHeight:i.clientHeight}))},m=(0,l.useCallback)(function(){e||t(!0)},[e]),p=(0,l.useCallback)(function(){e&&t(!1)},[e]);return{renderTrackVertical:function(i){var e=i.style,t=(0,u.Z)(i,["style"]);return(0,s.jsx)("div",(0,o.Z)((0,n.Z)({},t),{style:(0,o.Z)((0,n.Z)({},e),{position:"absolute",width:"8px",right:"3px",bottom:"3px",top:"3px",borderRadius:"10px",zIndex:"1000",transition:"all 0.1s ease-in-out"})}))},renderThumbVertical:function(i){var e=i.style,t=(0,u.Z)(i,["style"]);return(0,s.jsx)("div",(0,o.Z)((0,n.Z)({},t),{style:(0,o.Z)((0,n.Z)({},e),{background:"#bcc0c4bc",position:"relative",display:"block",width:"100%",cursor:"pointer",borderRadius:"inherit"})}))},renderTrackHorizontal:function(i){var e=i.style,t=(0,u.Z)(i,["style"]);return(0,s.jsx)("div",(0,o.Z)((0,n.Z)({},t),{style:(0,o.Z)((0,n.Z)({},e),{position:"absolute",height:"9px",right:"2px",bottom:"2px",left:"2px",borderRadius:"10px",zIndex:"1000",transition:"all 0.1s ease-in-out"})}))},renderThumbHorizontal:function(i){var e=i.style,t=(0,u.Z)(i,["style"]);return(0,s.jsx)("div",(0,o.Z)((0,n.Z)({},t),{style:(0,o.Z)((0,n.Z)({},e),{background:"#bcc0c4bc",position:"relative",display:"block",height:"100%",cursor:"pointer",borderRadius:"inherit"})}))},handleUpdateScroll:d,handleMouseOver:m,handleMouseOut:p,hovering:e,scrollOnWindow:a}},d=t(13614),m=t(37858),p=t(75921),h=t(98102),x=t(58439),g=t(32045),Z=t(31298),b=t(53918);function j(){var i=(0,r.Z)(["\n	margin: 0 -14px;\n	background: ",";\n"]);return j=function(){return i},i}function q(){var i=(0,r.Z)(["\n	width: 100%;\n	padding-top: 40px;\n\n    h1 {\n        font-size: 1.7rem;\n        font-weight: 600;\n        text-align: center;\n    }\n"]);return q=function(){return i},i}function f(){var i=(0,r.Z)(["\n    display: flex;\n    gap: 24px;\n    height: 250px;\n    padding: 15px 0;\n    > div {\n        min-width: calc(50% - 24px);\n        & div,\n        span {\n            color: ",";\n            font-style: normal;\n            font-weight: 400;\n            font-size: 1rem;\n            text-align: justify;\n            font-family: Rubik, Helvetica, Arial, sans-serif;\n            line-height: 25px;\n            word-spacing: 2px;\n            padding: 2px 0;\n        }\n    }\n"]);return f=function(){return i},i}function v(){var i=(0,r.Z)(["\n    height: 350px;\n    border: 1px solid black;\n    border-radius: 0.5rem;\n    overflow: hidden;\n    max-width: 70%;\n    margin: 2rem auto;\n    background: ",";\n    border: 1px solid ",";\n"]);return v=function(){return i},i}var k=function(){var i=c(),e=i.renderTrackVertical,t=i.renderThumbVertical,r=i.renderTrackHorizontal,n=i.renderThumbHorizontal;return(0,s.jsx)(T,{children:(0,s.jsx)(O,{children:(0,s.jsx)(g.Z,{fixed:!0,maxWidth:"lg",children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:"Custom Scrollbar"}),(0,s.jsx)(a.Z,{style:{height:240,border:"1px solid peru"},onEnd:function(){console.log("\xa1Fin!")},overlay:!1,children:(0,s.jsxs)("p",{className:"its-parrafo",style:{width:"110%",border:"1px solid gold"},children:["Lorem ipsum dolor sit amet consectetur adipisicing elit. ",(0,s.jsx)("strong",{children:"Qui, iusto!"})," Exercitationem veniam incidunt quae quidem praesentium magni assumenda modi a, consequuntur, iste asperiores ipsa iusto, officia eos. Iste labore voluptate odit neque. Beatae distinctio aspernatur eum? Dolorum quis nesciunt omnis voluptatibus exercitationem illum provident, alias voluptas earum consequuntur officia dicta laboriosam. Optio vero perspiciatis, molestias ipsam illo rem quae fugit alias suscipit! Dignissimos esse corrupti animi dolores architecto quaerat reprehenderit a atque dolorum sint similique, quasi soluta quam alias nobis cum et iure eveniet quos rem! ",(0,s.jsx)("strong",{children:" Illo a voluptatum"})," vel rerum pariatur omnis nihil exercitationem corporis, ex porro, tempore, id ad cum deleniti provident. Dolorum ullam provident nostrum reiciendis accusamus soluta optio, velit officiis porro a, autem quam ipsam nulla numquam explicabo assumenda tenetur ab iste atque veniam fugit ipsa, asperiores temporibus. Debitis beatae modi minima repellendus saepe? Ad, ipsa corporis! Sed, harum quam quibusdam odio nisi quisquam. Maiores officiis, quibusdam reprehenderit aut, delectus ratione, quam modi odit enim ipsum ex ad dolorem! Ea aliquid vitae nesciunt natus? Magni eos at fugaut provident corrupti aliquam possimus sequi et accusantium, in labore sapiente, quo quae minima eaque! Odit beatae ratione magni porro ut velit, animi ipsam? Veritatis, eius! Aspernatur obcaecati repellat facilis voluptatem assumenda aliquid at exercitationem harum? Nulla, aliquam necessitatibus mollitia porro fugit consequuntur vel natus itaque repellendus ipsam enim delectus laborum. Quis dolor earum veniam molestiae! Inventore suscipit consectetur aliquid officiis in vero libero voluptas ut nemo, saepe eos mollitia repellat iure architecto, accusantium aperiam magnam quia molestias voluptatum praesentium quam quisquam. Nisi quia quaerat repellat?"]})}),(0,s.jsxs)(y,{children:[(0,s.jsx)(Z.$B,{autoHide:!0,renderTrackVertical:e,renderThumbVertical:t,children:(0,s.jsx)("div",{children:"Lorem, iusto! Beatae distinctio aspernatur eum? Dolorum quis nesciunt omnis voluptatibus exercitationem illum provident, alias voluptas earum consequuntur officia. Ad, ipsa corporis! Sed, harum quam quibusdam odio nisi quisquam. Maiores officiis, quibusdam reprehenderit aut, delectus ratione, quam modi odit enim ipsum ex ad dolorem! Veritatis, eius! Inventore suscipit consectetur aliquid officiis in vero libero voluptas ut nemo, saepe eos mollitia repellat iurearchitecto, accusantium aperiam magnam quia molestias voluptatum praesentium quam quisquam."})}),(0,s.jsx)(Z.$B,{autoHide:!0,renderTrackVertical:e,renderThumbVertical:t,children:(0,s.jsxs)("span",{children:["Lorem ipsum dolor sit amet consectetur adipisicing elit. ",(0,s.jsx)("strong",{children:"Qui, iusto!"})," Exercitationem veniam incidunt quae quidem praesentium magni assumenda modi a, consequuntur, iste asperiores ipsa iusto, officia eos. Iste labore voluptate odit neque. Beatae distinctio aspernatur eum? Dolorum quis nesciunt omnis voluptatibus exercitationem illum provident, alias voluptas earum consequuntur officia dicta laboriosam. Optio vero perspiciatis, molestias ipsam illo rem quae fugit alias suscipit! Dignissimos esse corrupti animi dolores architecto quaerat reprehenderit a atque dolorum sint similique, quasi soluta quam alias nobis cum et iure eveniet quos rem!"," ",(0,s.jsx)("strong",{children:" Illo a voluptatum"})," vel rerum pariatur omnis nihil exercitationem corporis, ex porro, tempore, id ad cum deleniti provident. Dolorum ullam provident nostrum reiciendis accusamus soluta optio, velit officiis porro a, autem quam ipsam nulla numquam explicabo assumenda tenetur ab iste atque veniam fugit ipsa, asperiores temporibus. Debitis beatae modi minima repellendus saepe? Ad, ipsa corporis! Sed, harum quam quibusdam odio nisi quisquam. Maiores officiis, quibusdam reprehenderit aut, delectus ratione, quam modi odit enim ipsum ex ad dolorem! Ea aliquid vitae nesciunt natus? Magni eos at fugaut provident corrupti aliquam possimus sequi et accusantium, in labore sapiente, quo quae minima eaque! Odit beatae ratione magni porro ut velit, animi ipsam? Veritatis, eius! Aspernatur obcaecati repellat facilis voluptatem assumenda aliquid at exercitationem harum? Nulla, aliquam necessitatibus mollitia porro fugit consequuntur vel natus itaque repellendus ipsam enim delectus laborum. Quis dolor earum veniam molestiae! Inventore suscipit consectetur aliquid officiis in vero libero voluptas ut nemo, saepe eos mollitia repellat iure architecto, accusantium aperiam magnam quia molestias voluptatum praesentium quam quisquam. Nisi quia quaerat repellat?"]})})]}),(0,s.jsx)(I,{children:(0,s.jsx)(Z.$B,{autoHide:!0,renderTrackVertical:e,renderThumbVertical:t,children:(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{src:"https://new.apuestatotal.com//cms/img/banners/79/cumple_home.webp",alt:"test img"}),(0,s.jsx)("div",{style:{padding:"15px 30px"},children:(0,s.jsx)(y,{style:{padding:"0"},children:(0,s.jsx)("div",{children:(0,s.jsx)("span",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea tenetur, neque distinctio iste nemo, aperiam, sapiente id ipsum hic est. Omnis ipsum alias autem est aut inventore saepe sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sequi totam unde corporis magni. Distinctio nam assumenda accusamus cumque nostrum aliquam pariatur quam architecto dignissimos, numquam ullam nobis, libero nihil. Labore dolor aliquam fuga ea voluptatum quo nam nulla repellendus, quisquam velit, blanditiis consequuntur suscipit corporis error cumque quia sequi assumenda odit porro explicabo incidunt nisi officiis, asperiores culpa! Commodi. Ad dignissimos eum optio ratione dolore sint odit sit itaque cum esse. Adipisci alias ipsa reprehenderit explicabo quis odio consequuntur iste reiciendis aliquid. Voluptatibus reprehenderit nam suscipit accusantium, consequatur perspiciatis!"})})})})]})})}),(0,s.jsx)("br",{}),(0,s.jsx)(Z.$B,{autoHide:!0,renderTrackVertical:e,renderThumbVertical:t,style:{height:200},children:(0,s.jsxs)(d.Z,{"aria-label":"sticky table",stickyHeader:!0,children:[(0,s.jsx)(m.Z,{children:(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(h.Z,{title:"El ID del movimiento no es el ID de la apuesta",children:"ID MOVIMIENTO"}),(0,s.jsx)(h.Z,{children:"FECHA Y HORA"}),(0,s.jsx)(h.Z,{children:"TIPO DE MOVIMIENTO"}),(0,s.jsxs)(h.Z,{children:["M\xc9TODO"," "]}),(0,s.jsx)(h.Z,{align:"right",children:"MONTO"}),(0,s.jsx)(h.Z,{align:"right",children:"SALDO"})]})}),(0,s.jsxs)(x.Z,{children:[(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(h.Z,{children:"Uno test"}),(0,s.jsx)(h.Z,{children:"2 test"}),(0,s.jsx)(h.Z,{children:"three"}),(0,s.jsx)(h.Z,{children:"Fourth"}),(0,s.jsx)(h.Z,{align:"right",children:"Cinco test"}),(0,s.jsx)(h.Z,{align:"right",children:"6"})]}),(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(h.Z,{children:"Uno test"}),(0,s.jsx)(h.Z,{children:"2 test"}),(0,s.jsx)(h.Z,{children:"three"}),(0,s.jsx)(h.Z,{children:"Fourth"}),(0,s.jsx)(h.Z,{align:"right",children:"Cinco test"}),(0,s.jsx)(h.Z,{align:"right",children:"6"})]}),(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(h.Z,{children:"Uno test"}),(0,s.jsx)(h.Z,{children:"2 test"}),(0,s.jsx)(h.Z,{children:"three"}),(0,s.jsx)(h.Z,{children:"Fourth"}),(0,s.jsx)(h.Z,{align:"right",children:"Cinco test"}),(0,s.jsx)(h.Z,{align:"right",children:"6"})]}),(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(h.Z,{children:"Uno test"}),(0,s.jsx)(h.Z,{children:"2 test"}),(0,s.jsx)(h.Z,{children:"three"}),(0,s.jsx)(h.Z,{children:"Fourth"}),(0,s.jsx)(h.Z,{align:"right",children:"Cinco test"}),(0,s.jsx)(h.Z,{align:"right",children:"6"})]})]})]})}),(0,s.jsx)("br",{}),(0,s.jsx)(Z.$B,{autoHide:!0,renderTrackVertical:e,renderThumbVertical:t,renderTrackHorizontal:r,renderThumbHorizontal:n,style:{height:180,width:300},children:(0,s.jsxs)(d.Z,{"aria-label":"sticky table",stickyHeader:!0,children:[(0,s.jsx)(m.Z,{children:(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(h.Z,{title:"El ID del movimiento no es el ID de la apuesta",children:"ID MOVIMIENTO"}),(0,s.jsx)(h.Z,{children:"FECHA Y HORA"}),(0,s.jsx)(h.Z,{children:"TIPO DE MOVIMIENTO"}),(0,s.jsxs)(h.Z,{children:["M\xc9TODO"," "]}),(0,s.jsx)(h.Z,{align:"right",children:"MONTO"}),(0,s.jsx)(h.Z,{align:"right",children:"SALDO"})]})}),(0,s.jsxs)(x.Z,{children:[(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(h.Z,{children:"Uno test"}),(0,s.jsx)(h.Z,{children:"2 test"}),(0,s.jsx)(h.Z,{children:"three"}),(0,s.jsx)(h.Z,{children:"Fourth"}),(0,s.jsx)(h.Z,{align:"right",children:"Cinco test"}),(0,s.jsx)(h.Z,{align:"right",children:"6"})]}),(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(h.Z,{children:"Uno test"}),(0,s.jsx)(h.Z,{children:"2 test"}),(0,s.jsx)(h.Z,{children:"three"}),(0,s.jsx)(h.Z,{children:"Fourth"}),(0,s.jsx)(h.Z,{align:"right",children:"Cinco test"}),(0,s.jsx)(h.Z,{align:"right",children:"6"})]}),(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(h.Z,{children:"Uno test"}),(0,s.jsx)(h.Z,{children:"2 test"}),(0,s.jsx)(h.Z,{children:"three"}),(0,s.jsx)(h.Z,{children:"Fourth"}),(0,s.jsx)(h.Z,{align:"right",children:"Cinco test"}),(0,s.jsx)(h.Z,{align:"right",children:"6"})]}),(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(h.Z,{children:"Uno test"}),(0,s.jsx)(h.Z,{children:"2 test"}),(0,s.jsx)(h.Z,{children:"three"}),(0,s.jsx)(h.Z,{children:"Fourth"}),(0,s.jsx)(h.Z,{align:"right",children:"Cinco test"}),(0,s.jsx)(h.Z,{align:"right",children:"6"})]})]})]})})]})})})})},T=b.default.div(j(),function(i){return i.theme.background}),O=b.default.div(q()),y=b.default.div(f(),function(i){return i.theme.contrastText}),I=b.default.div(v(),function(i){return i.theme.alternative},function(i){return i.theme.contrastText})}},function(i){i.O(0,[7139,9774,2888,179],function(){return i(i.s=63286)}),_N_E=i.O()}]);
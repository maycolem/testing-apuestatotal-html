"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1872],{97311:function(n,t,e){e.r(t),e.d(t,{default:function(){return R}});var i=e(47568),r=e(7297),o=e(70655),l=e(85893),a=e(708),s=e(29815),c=e(53918),u=e(67294);e(98322),e(98745);var d=e(94688),f=e(70804),h=e(34386),p=e(73710),m=e.n(p);function v(){var n=(0,r.Z)(["\n    display: flex !important;\n    flex-direction: column;\n    gap: 0.5rem;\n    background: transparent;\n    position: relative;\n    cursor: pointer;\n    background: ",";\n    box-shadow: "," 0px 3px 6px;\n    flex: 1 0 40%;\n    max-width: 220px;\n    border-radius: 12px;\n    overflow: hidden;\n    > .MorePromotion__image {\n        /* max-height: 190px; */\n        overflow: hidden;\n        aspect-ratio: 1;\n        border-radius: 12px;\n        overflow: hidden;\n        position: relative;\n        img {\n            object-fit: fill;\n            display: block;\n        }\n    }\n"]);return v=function(){return n},n}function x(){var n=(0,r.Z)(["\n    position: relative;\n"]);return x=function(){return n},n}function g(){var n=(0,r.Z)(["\n    background: black;\n    color: white;\n    position: absolute;\n    bottom: 0;\n    padding: 5px 30px;\n    width: calc(82% + 30px);\n    left: -20px;\n    min-height: 40px;\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n    justify-content: center;\n    transform: skew(-15deg);\n    transition: 150ms;\n    transform-origin: left bottom;\n    & {\n        span {\n            line-height: 1.1;\n            font-size: 0.9rem;\n            text-transform: uppercase;\n            font-weight: 300;\n            white-space: nowrap;\n            &.top {\n                color: ",";\n            }\n        }\n        :hover {\n            transform: skew(-15deg) scale(1.2);\n        }\n    }\n"]);return g=function(){return n},n}function w(){var n=(0,r.Z)(["\n    & {\n        height: calc(100% - 28px);\n        right: -14px;\n        z-index: 10;\n        position: absolute;\n        top: 14px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: red;\n        font-weight: 500;\n        cursor: pointer;\n        transition: 250ms;\n        &.left {\n            left: -14px;\n            right: initial;\n        }\n        span {\n            transition: 150ms;\n            transform: scaleY(1.2);\n        }\n        :hover {\n            span {\n                transform: scaleY(1.5) scaleX(1.3);\n            }\n        }\n\n        width: 30px;\n        font-size: 2.2rem;\n\n        "," {\n            width: 50px;\n            font-size: calc(3rem + 1vw);\n            :hover {\n                span {\n                    transform: scaleY(1.5) scaleX(1.3);\n                }\n            }\n        }\n    }\n"]);return w=function(){return n},n}function b(){var n=(0,r.Z)(["\n    position: relative;\n    display: flex;\n    gap: 0.8rem;\n    min-width: 100%;\n    padding: 14px;\n    width: calc(100% + 28px);\n    right: 14px;\n"]);return b=function(){return n},n}var j=function(n){var t=n.onClickSlideParams,e=n.onClickSlide,i=n.banners,r=void 0===i?[]:i,o=n.selectorItem,a=void 0===o?"slider-at-item-only-img":o,c=n.baseURL,d=void 0===c?null:c,f=(0,u.useState)(!1),p=f[0],m=f[1],v=(0,u.useState)(!1),x=v[0],g=v[1],w=function(n){h.f.push({event:"atm.event",option:n.toLowerCase(),eventName:"home_click",title:"mas diversion"})},b=!1,j=(0,u.useRef)();return((0,u.useEffect)(function(){if(j&&j.current){var n=j.current;if(n){var t=n.scrollLeft;0===t&&m(!1),t>200&&m(!0),Math.abs(n.scrollLeft)===n.scrollWidth-n.clientWidth?g(!1):g(!0),n.onscroll=function(){var t=n.scrollLeft;0===t&&m(!1),t>200&&m(!0),Math.abs(n.scrollLeft)===n.scrollWidth-n.clientWidth?g(!1):g(!0)}}}},[j]),!r||r.length<1)?null:(0,l.jsxs)(_,{children:[(0,l.jsxs)(l.Fragment,{children:[p&&(0,l.jsx)(Z,{className:"left",onClick:function(){var n=j.current,t=n.scrollLeft-500,e=window.innerWidth/100*15;n.scroll({top:0,left:t-e,behavior:"smooth"})},children:(0,l.jsx)("span",{children:"<"})}),x&&(0,l.jsx)(Z,{className:"right",onClick:function(){var n=j.current,t=window.innerWidth/100*15;n.scroll({top:0,left:n.scrollLeft+500+t,behavior:"smooth"})},children:(0,l.jsx)("span",{children:">"})})]}),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(y,{ref:j,children:(0,l.jsx)(l.Fragment,{children:r.map(function(n,i){var r=n.config;return(0,l.jsx)(k,{className:a,onMouseDown:function(){return b=!1},onMouseMove:function(){return b=!0},onMouseUp:function(){if(!b){w((null==r?void 0:r.title)?null==r?void 0:r.title:"Sin Titulo");var n=[];t.forEach(function(t){n.push(r[t])}),e.apply(void 0,(0,s.Z)(n))}},children:(0,l.jsxs)("div",{className:"MorePromotion__image",children:[(0,l.jsx)("img",{alt:"Banner Apuesta Total",src:"".concat(d?d+"/":"").concat(r.image),loading:"lazy"}),(0,l.jsx)(N,{children:1===r.title.split(" ").length?(0,l.jsx)("span",{className:"bottom",children:r.title}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:"top",children:r.title.split(" ")[0]}),(0,l.jsx)("span",{className:"bottom",children:r.title.split(" ").slice(1).join(" ")})]})})]})},i)})})})})]})},k=(0,c.default)("div")(v(),function(n){return n.theme.casino.slider.background},function(n){return m()(n.theme.casino.slider.shadow,.1)}),_=c.default.div(x()),N=c.default.div(g(),function(n){return n.theme.palette.alternate7.main}),Z=c.default.div(w(),d.q.min_width.desktopS),y=(0,c.default)(f.ZP)(b()),M=e(3390),S=e(26601),L=e(86792),C=e(11163);function O(){var n=(0,r.Z)(["\n    position: relative;\n    z-index: 1;\n"]);return O=function(){return n},n}var R=function(){var n,t=(0,C.useRouter)(),e=(0,L.Hg)({container:"HOME_MASDIVERSION"}),r=e.data;e.isLoading,e.isFetching;var s,c=null==r?void 0:null===(n=r.banners)||void 0===n?void 0:n.filter(function(n){var t;return(null==n?void 0:null===(t=n.config)||void 0===t?void 0:t.title)!=="TORITO DE ORO - PRONTO"});return(0,l.jsx)(E,{children:(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(M.Z,{hiddenShowAll:!0,title:"M\xe1s diversi\xf3n"}),(0,l.jsx)(j,{banners:c,baseURL:"https://new.apuestatotal.com",onClickSlide:(s=(0,i.Z)(function(n){return(0,o.__generator)(this,function(e){switch(e.label){case 0:return[4,t.push(n)];case 1:return[2,e.sent()]}})}),function(n){return s.apply(this,arguments)}),onClickSlideParams:["url"]})]})})},E=S.Z.div(O())}}]);
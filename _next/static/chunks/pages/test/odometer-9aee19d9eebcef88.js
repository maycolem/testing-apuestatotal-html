(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2662],{96966:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/odometer",function(){return t(57941)}])},57941:function(n,e,t){"use strict";t.r(e);var r=t(7297),i=t(85893),o=t(67294),a=t(9669),c=t.n(a),d=t(5152),s=t.n(d),l=t(53918),u=t(8942);function f(){var n=(0,r.Z)(["\n    height: 100vh;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n    align-items: center;\n    & .center {\n        display: flex;\n        flex-flow: row wrap;\n        justify-content: center;\n        gap: 1rem;\n    }\n    & .odometer-container {\n        font-size: 20px;\n        border: 1px solid red;\n        padding: 0 2rem;\n        border-radius: 8px;\n        width: fit-content;\n        height: fit-content;\n        background-image: radial-gradient(ellipse at top center, #20403f, #252525 60%); /* green */\n        background-image: radial-gradient(ellipse at top center, #5a5858, #2b2b2b 60%);\n        color: white;\n        text-shadow: 0 0 3px rgb(255, 255, 255);\n        font-weight: 700;\n    }\n    & .odometer.odometer-auto-theme .odometer-digit:last-child {\n        display: none;\n    }\n    & .odometer-value,\n    .odometer-digit {\n        line-height: 54px;\n        text-align: center;\n        min-width: 13.533px;\n        text-align: center;\n    }\n"]);return f=function(){return n},n}var p=s()(t.e(1514).then(t.bind(t,51514)),{loadableGenerated:{webpack:function(){return[51514]}},ssr:!1,loading:function(){return(0,i.jsx)(i.Fragment,{})}}),g=function(){var n=(0,o.useState)([]),e=n[0],t=n[1],r=function(){c().get("https://rgs1.ctrgs.com/jpdisplay-cache-pub/local_jpdisp_321.json?seed=0.5838105013109718").then(function(n){var e=n.data.jpsystems[37].jpsystem_current_levels;console.log(e),t(e)})};return(0,o.useEffect)(function(){(0,u.g)(1500).then(function(){r();var n=setInterval(function(){r()},5e3);return function(){clearInterval(n)}})},[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(h,{children:(0,i.jsx)("div",{className:"center",children:e.map(function(n,e){return(0,i.jsx)("div",{className:"odometer-container",children:(0,i.jsx)(p,{value:n.value_vis,format:"( ddd).ddd",duration:5e3})},"digit-".concat(e))})})})})};e.default=g;var h=l.default.div(f())}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=96966)}),_N_E=n.O()}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3328],{28491:function(e,t,r){var i=r(59499),n=r(69587),l=r(63931);r(73710),r(67294);var a=r(53918),o=r(85893);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var c=function(e){var t=e.defaultValue,r=e.label,i=e.register,n=e.size,l=e.items,a=e.maxHeight,s=e.itemKeyValue,c=void 0===s?"value":s,p=e.itemsKeyLabel,m=void 0===p?"label":p,b=e.disabled;return(0,o.jsx)(d,u(u({MenuProps:{PaperProps:{style:{maxHeight:void 0===a?400:a}}},defaultValue:void 0===t?"":t,disabled:b,label:r},i),{},{size:void 0===n?"small":n,children:(void 0===l?[]:l).map(function(e,t){return(0,o.jsx)(f,{value:e[c],children:e[m]},t)})}))};t.Z=c;var d=(0,a.default)(n.Z).withConfig({displayName:"CustomSelect__StyledSelect",componentId:"sc-1i8yfto-0"})(["&{svg{font-size:1.5rem !important;color:",";}}"],function(e){return e.theme.contrastText}),f=(0,a.default)(l.Z).withConfig({displayName:"CustomSelect__StyledMenuItem",componentId:"sc-1i8yfto-1"})(["&&{min-height:2rem;font-size:1rem;}&.Mui-selected{}"])},3328:function(e,t,r){r.r(t);var i=r(60076),n=r(28491),l=r(85893),a=function(e){var t=e.register,r=e.defaultValue;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{style:{position:"relative"},children:[(0,l.jsx)(i.Z,{children:"Tipo de documento"}),(0,l.jsx)(n.Z,{defaultValue:r,items:[{value:"DNI",label:"DNI"},{value:"CARNET_EXTRANJERIA",label:"Carnet de extranjeria"},{value:"PASAPORTE",label:"Pasaporte"}],label:"Tipo de documento",register:t})]})})};t.default=a}}]);
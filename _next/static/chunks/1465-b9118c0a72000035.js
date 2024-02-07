"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1465],{21465:function(e,t,n){n.d(t,{Z:function(){return eN}});var o=n(87462),r=n(63366),i=n(67294),a=n(33703),s=n(73546),f=n(82690);function p(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function c(e){var t=p(e).Element;return e instanceof t||e instanceof Element}function l(e){var t=p(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function u(e){if("undefined"==typeof ShadowRoot)return!1;var t=p(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var d=Math.max,m=Math.min,h=Math.round;function v(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function y(){return!/^((?!chrome|android).)*safari/i.test(v())}function g(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var o=e.getBoundingClientRect(),r=1,i=1;t&&l(e)&&(r=e.offsetWidth>0&&h(o.width)/e.offsetWidth||1,i=e.offsetHeight>0&&h(o.height)/e.offsetHeight||1);var a=(c(e)?p(e):window).visualViewport,s=!y()&&n,f=(o.left+(s&&a?a.offsetLeft:0))/r,u=(o.top+(s&&a?a.offsetTop:0))/i,d=o.width/r,m=o.height/i;return{width:d,height:m,top:u,right:f+d,bottom:u+m,left:f,x:f,y:u}}function b(e){var t,n=p(e);return{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function x(e){return e?(e.nodeName||"").toLowerCase():null}function w(e){return((c(e)?e.ownerDocument:e.document)||window.document).documentElement}function O(e){return g(w(e)).left+b(e).scrollLeft}function E(e){return p(e).getComputedStyle(e)}function j(e){var t=E(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function P(e){var t=g(e),n=e.offsetWidth,o=e.offsetHeight;return 1>=Math.abs(t.width-n)&&(n=t.width),1>=Math.abs(t.height-o)&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function D(e){return"html"===x(e)?e:e.assignedSlot||e.parentNode||(u(e)?e.host:null)||w(e)}function R(e,t){void 0===t&&(t=[]);var n,o=function e(t){return["html","body","#document"].indexOf(x(t))>=0?t.ownerDocument.body:l(t)&&j(t)?t:e(D(t))}(e),r=o===(null==(n=e.ownerDocument)?void 0:n.body),i=p(o),a=r?[i].concat(i.visualViewport||[],j(o)?o:[]):o,s=t.concat(a);return r?s:s.concat(R(D(a)))}function A(e){return["table","td","th"].indexOf(x(e))>=0}function k(e){return l(e)&&"fixed"!==E(e).position?e.offsetParent:null}function M(e){for(var t=p(e),n=k(e);n&&A(n)&&"static"===E(n).position;)n=k(n);return n&&("html"===x(n)||"body"===x(n)&&"static"===E(n).position)?t:n||function(e){var t=/firefox/i.test(v());if(/Trident/i.test(v())&&l(e)&&"fixed"===E(e).position)return null;var n=D(e);for(u(n)&&(n=n.host);l(n)&&0>["html","body"].indexOf(x(n));){var o=E(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}var L="bottom",W="right",T="left",Z="auto",B=["top",L,W,T],H="start",S="viewport",C="popper",V=B.reduce(function(e,t){return e.concat([t+"-"+H,t+"-end"])},[]),q=[].concat(B,[Z]).reduce(function(e,t){return e.concat([t,t+"-"+H,t+"-end"])},[]),N=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],_={placement:"bottom",modifiers:[],strategy:"absolute"};function I(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var U={passive:!0};function F(e){return e.split("-")[0]}function $(e){return e.split("-")[1]}function z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e){var t,n=e.reference,o=e.element,r=e.placement,i=r?F(r):null,a=r?$(r):null,s=n.x+n.width/2-o.width/2,f=n.y+n.height/2-o.height/2;switch(i){case"top":t={x:s,y:n.y-o.height};break;case L:t={x:s,y:n.y+n.height};break;case W:t={x:n.x+n.width,y:f};break;case T:t={x:n.x-o.width,y:f};break;default:t={x:n.x,y:n.y}}var p=i?z(i):null;if(null!=p){var c="y"===p?"height":"width";switch(a){case H:t[p]=t[p]-(n[c]/2-o[c]/2);break;case"end":t[p]=t[p]+(n[c]/2-o[c]/2)}}return t}var Y={top:"auto",right:"auto",bottom:"auto",left:"auto"};function G(e){var t,n,o=e.popper,r=e.popperRect,i=e.placement,a=e.variation,s=e.offsets,f=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,d=e.isFixed,m=s.x,v=void 0===m?0:m,y=s.y,g=void 0===y?0:y,b="function"==typeof u?u({x:v,y:g}):{x:v,y:g};v=b.x,g=b.y;var x=s.hasOwnProperty("x"),O=s.hasOwnProperty("y"),j=T,P="top",D=window;if(l){var R=M(o),A="clientHeight",k="clientWidth";R===p(o)&&(R=w(o),"static"!==E(R).position&&"absolute"===f&&(A="scrollHeight",k="scrollWidth")),("top"===i||(i===T||i===W)&&"end"===a)&&(P=L,g-=(d&&R===D&&D.visualViewport?D.visualViewport.height:R[A])-r.height,g*=c?1:-1),(i===T||("top"===i||i===L)&&"end"===a)&&(j=W,v-=(d&&R===D&&D.visualViewport?D.visualViewport.width:R[k])-r.width,v*=c?1:-1)}var Z,B,H,S,C,V=Object.assign({position:f},l&&Y),q=!0===u?(Z={x:v,y:g},B=p(o),H=Z.x,S=Z.y,{x:h(H*(C=B.devicePixelRatio||1))/C||0,y:h(S*C)/C||0}):{x:v,y:g};return(v=q.x,g=q.y,c)?Object.assign({},V,((n={})[P]=O?"0":"",n[j]=x?"0":"",n.transform=1>=(D.devicePixelRatio||1)?"translate("+v+"px, "+g+"px)":"translate3d("+v+"px, "+g+"px, 0)",n)):Object.assign({},V,((t={})[P]=O?g+"px":"",t[j]=x?v+"px":"",t.transform="",t))}var J={left:"right",right:"left",bottom:"top",top:"bottom"};function K(e){return e.replace(/left|right|bottom|top/g,function(e){return J[e]})}var Q={start:"end",end:"start"};function ee(e){return e.replace(/start|end/g,function(e){return Q[e]})}function et(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&u(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function en(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function eo(e,t,n){var o,r,i,a,s,f,l,u,m,h,v,x;return t===S?en(function(e,t){var n=p(e),o=w(e),r=n.visualViewport,i=o.clientWidth,a=o.clientHeight,s=0,f=0;if(r){i=r.width,a=r.height;var c=y();(c||!c&&"fixed"===t)&&(s=r.offsetLeft,f=r.offsetTop)}return{width:i,height:a,x:s+O(e),y:f}}(e,n)):c(t)?((i=g(t,!1,"fixed"===n)).top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i):en((a=w(e),f=w(a),l=b(a),u=null==(s=a.ownerDocument)?void 0:s.body,m=d(f.scrollWidth,f.clientWidth,u?u.scrollWidth:0,u?u.clientWidth:0),h=d(f.scrollHeight,f.clientHeight,u?u.scrollHeight:0,u?u.clientHeight:0),v=-l.scrollLeft+O(a),x=-l.scrollTop,"rtl"===E(u||f).direction&&(v+=d(f.clientWidth,u?u.clientWidth:0)-m),{width:m,height:h,x:v,y:x}))}function er(){return{top:0,right:0,bottom:0,left:0}}function ei(e){return Object.assign({},er(),e)}function ea(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}function es(e,t){void 0===t&&(t={});var n,o,r,i,a,s,f,p,u,h,v=t,y=v.placement,b=void 0===y?e.placement:y,O=v.strategy,j=void 0===O?e.strategy:O,P=v.boundary,A=v.rootBoundary,k=v.elementContext,T=void 0===k?C:k,Z=v.altBoundary,H=v.padding,V=void 0===H?0:H,q=ei("number"!=typeof V?V:ea(V,B)),N=e.rects.popper,_=e.elements[void 0!==Z&&Z?T===C?"reference":C:T],I=(n=c(_)?_:_.contextElement||w(e.elements.popper),u=(p=[].concat("clippingParents"===(o=void 0===P?"clippingParents":P)?(s=R(D(n)),f=["absolute","fixed"].indexOf(E(n).position)>=0&&l(n)?M(n):n,c(f)?s.filter(function(e){return c(e)&&et(e,f)&&"body"!==x(e)}):[]):[].concat(o),[void 0===A?S:A]))[0],(h=p.reduce(function(e,t){var o=eo(n,t,j);return e.top=d(o.top,e.top),e.right=m(o.right,e.right),e.bottom=m(o.bottom,e.bottom),e.left=d(o.left,e.left),e},eo(n,u,j))).width=h.right-h.left,h.height=h.bottom-h.top,h.x=h.left,h.y=h.top,h),U=g(e.elements.reference),F=X({reference:U,element:N,strategy:"absolute",placement:b}),$=en(Object.assign({},N,F)),z=T===C?$:U,Y={top:I.top-z.top+q.top,bottom:z.bottom-I.bottom+q.bottom,left:I.left-z.left+q.left,right:z.right-I.right+q.right},G=e.modifiersData.offset;if(T===C&&G){var J=G[b];Object.keys(Y).forEach(function(e){var t=[W,L].indexOf(e)>=0?1:-1,n=["top",L].indexOf(e)>=0?"y":"x";Y[e]+=J[n]*t})}return Y}function ef(e,t,n){return d(e,m(t,n))}function ep(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ec(e){return["top",W,L,T].some(function(t){return e[t]>=0})}var el,eu,ed,em,eh,ev,ey=(el={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,i=void 0===r||r,a=o.resize,s=void 0===a||a,f=p(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(e){e.addEventListener("scroll",n.update,U)}),s&&f.addEventListener("resize",n.update,U),function(){i&&c.forEach(function(e){e.removeEventListener("scroll",n.update,U)}),s&&f.removeEventListener("resize",n.update,U)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=X({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=n.adaptive,i=n.roundOffsets,a=void 0===i||i,s={placement:F(t.placement),variation:$(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===o||o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,G(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===r||r,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,G(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];l(r)&&x(r)&&(Object.assign(r.style,n),Object.keys(o).forEach(function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var o=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]="",e},{});l(o)&&x(o)&&(Object.assign(o.style,i),Object.keys(r).forEach(function(e){o.removeAttribute(e)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,i=void 0===r?[0,0]:r,a=q.reduce(function(e,n){var o,r,a,s,f,p,c,l;return e[n]=(r=t.rects,f=[T,"top"].indexOf(s=F(n))>=0?-1:1,c=(p="function"==typeof i?i(Object.assign({},r,{placement:n})):i)[0],l=p[1],c=c||0,l=(l||0)*f,[T,W].indexOf(s)>=0?{x:l,y:c}:{x:c,y:l}),e},{}),s=a[t.placement],f=s.x,p=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=p),t.modifiersData[o]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,p=n.padding,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,y=F(v),g=[v].concat(f||(y!==v&&m?function(e){if(F(e)===Z)return[];var t=K(e);return[ee(e),t,ee(t)]}(v):[K(v)])).reduce(function(e,n){var o,r,i,a,s,f,u,d,v,y,g,b,x,w;return e.concat(F(n)===Z?(r={placement:n,boundary:c,rootBoundary:l,padding:p,flipVariations:m,allowedAutoPlacements:h},a=(i=r).placement,s=i.boundary,f=i.rootBoundary,u=i.padding,d=i.flipVariations,y=void 0===(v=i.allowedAutoPlacements)?q:v,0===(x=(b=(g=$(a))?d?V:V.filter(function(e){return $(e)===g}):B).filter(function(e){return y.indexOf(e)>=0})).length&&(x=b),Object.keys(w=x.reduce(function(e,n){return e[n]=es(t,{placement:n,boundary:s,rootBoundary:f,padding:u})[F(n)],e},{})).sort(function(e,t){return w[e]-w[t]})):n)},[]),b=t.rects.reference,x=t.rects.popper,w=new Map,O=!0,E=g[0],j=0;j<g.length;j++){var P=g[j],D=F(P),R=$(P)===H,A=["top",L].indexOf(D)>=0,k=A?"width":"height",M=es(t,{placement:P,boundary:c,rootBoundary:l,altBoundary:u,padding:p}),S=A?R?W:T:R?L:"top";b[k]>x[k]&&(S=K(S));var C=K(S),N=[];if(i&&N.push(M[D]<=0),s&&N.push(M[S]<=0,M[C]<=0),N.every(function(e){return e})){E=P,O=!1;break}w.set(P,N)}if(O)for(var _=m?3:1,I=function(e){var t=g.find(function(t){var n=w.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return E=t,"break"},U=_;U>0&&"break"!==I(U);U--);t.placement!==E&&(t.modifiersData[o]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.options,r=e.name,i=o.mainAxis,a=o.altAxis,s=o.boundary,f=o.rootBoundary,p=o.altBoundary,c=o.padding,l=o.tether,u=void 0===l||l,h=o.tetherOffset,v=void 0===h?0:h,y=es(n,{boundary:s,rootBoundary:f,padding:c,altBoundary:p}),g=F(n.placement),b=$(n.placement),x=!b,w=z(g),O="x"===w?"y":"x",E=n.modifiersData.popperOffsets,j=n.rects.reference,D=n.rects.popper,R="function"==typeof v?v(Object.assign({},n.rects,{placement:n.placement})):v,A="number"==typeof R?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),k=n.modifiersData.offset?n.modifiersData.offset[n.placement]:null,Z={x:0,y:0};if(E){if(void 0===i||i){var B,S="y"===w?"top":T,C="y"===w?L:W,V="y"===w?"height":"width",q=E[w],N=q+y[S],_=q-y[C],I=u?-D[V]/2:0,U=b===H?j[V]:D[V],X=b===H?-D[V]:-j[V],Y=n.elements.arrow,G=u&&Y?P(Y):{width:0,height:0},J=n.modifiersData["arrow#persistent"]?n.modifiersData["arrow#persistent"].padding:er(),K=J[S],Q=J[C],ee=ef(0,j[V],G[V]),et=x?j[V]/2-I-ee-K-A.mainAxis:U-ee-K-A.mainAxis,en=x?-j[V]/2+I+ee+Q+A.mainAxis:X+ee+Q+A.mainAxis,eo=n.elements.arrow&&M(n.elements.arrow),ei=eo?"y"===w?eo.clientTop||0:eo.clientLeft||0:0,ea=null!=(B=null==k?void 0:k[w])?B:0,ep=ef(u?m(N,q+et-ea-ei):N,q,u?d(_,q+en-ea):_);E[w]=ep,Z[w]=ep-q}if(void 0!==a&&a){var ec,el,eu,ed,em,eh=E[O],ev="y"===O?"height":"width",ey=eh+y["x"===w?"top":T],eg=eh-y["x"===w?L:W],eb=-1!==["top",T].indexOf(g),ex=null!=(ec=null==k?void 0:k[O])?ec:0,ew=eb?ey:eh-j[ev]-D[ev]-ex+A.altAxis,eO=eb?eh+j[ev]+D[ev]-ex-A.altAxis:eg,eE=u&&eb?(em=ef(ew,eh,eO))>eO?eO:em:ef(u?ew:ey,eh,u?eO:eg);E[O]=eE,Z[O]=eE-eh}n.modifiersData[r]=Z}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,r=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=F(n.placement),f=z(s),p=[T,W].indexOf(s)>=0?"height":"width";if(i&&a){var c,l,u=ei("number"!=typeof(c="function"==typeof(c=r.padding)?c(Object.assign({},n.rects,{placement:n.placement})):c)?c:ea(c,B)),d=P(i),m=n.rects.reference[p]+n.rects.reference[f]-a[f]-n.rects.popper[p],h=a[f]-n.rects.reference[f],v=M(i),y=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,g=u["y"===f?"top":T],b=y-d[p]-u["y"===f?L:W],x=y/2-d[p]/2+(m/2-h/2),w=ef(g,x,b);n.modifiersData[o]=((t={})[f]=w,t.centerOffset=w-x,t)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!=typeof o||(o=t.elements.popper.querySelector(o)))&&et(t.elements.popper,o)&&(t.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=es(t,{elementContext:"reference"}),s=es(t,{altBoundary:!0}),f=ep(a,o),p=ep(s,r,i),c=ec(f),l=ec(p);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:p,isReferenceHidden:c,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":l})}}]},em=void 0===(ed=(eu=el).defaultModifiers)?[]:ed,ev=void 0===(eh=eu.defaultOptions)?_:eh,function(e,t,n){void 0===n&&(n=ev);var o,r,i={placement:"bottom",orderedModifiers:[],options:Object.assign({},_,ev),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,f={state:i,setOptions:function(n){var o,r,s,p,l,d,m,h,v="function"==typeof n?n(i.options):n;u(),i.options=Object.assign({},ev,i.options,v),i.scrollParents={reference:c(e)?R(e):e.contextElement?R(e.contextElement):[],popper:R(t)};var y=(s=Object.keys(r=(o=[].concat(em,i.options.modifiers)).reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{})).map(function(e){return r[e]}),l=new Map,d=new Set,m=[],s.forEach(function(e){l.set(e.name,e)}),s.forEach(function(e){d.has(e.name)||function e(t){d.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!d.has(t)){var n=l.get(t);n&&e(n)}}),m.push(t)}(e)}),N.reduce(function(e,t){return e.concat(m.filter(function(e){return e.phase===t}))},[]));return i.orderedModifiers=y.filter(function(e){return e.enabled}),i.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,o=e.effect;if("function"==typeof o){var r=o({state:i,name:t,instance:f,options:void 0===n?{}:n}),s=function(){};a.push(r||s)}}),f.update()},forceUpdate:function(){if(!s){var e,t,n,o,r,a,c,u,d,m,v,y,E,D=i.elements,R=D.reference,A=D.popper;if(I(R,A)){i.rects={reference:(e=R,t=M(A),n="fixed"===i.options.strategy,o=l(t),d=l(t)&&(c=h((a=(r=t).getBoundingClientRect()).width)/r.offsetWidth||1,u=h(a.height)/r.offsetHeight||1,1!==c||1!==u),m=w(t),v=g(e,d,n),y={scrollLeft:0,scrollTop:0},E={x:0,y:0},(o||!o&&!n)&&(("body"!==x(t)||j(m))&&(y=function(e){var t;return e!==p(e)&&l(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:b(e)}(t)),l(t)?(E=g(t,!0),E.x+=t.clientLeft,E.y+=t.clientTop):m&&(E.x=O(m))),{x:v.left+y.scrollLeft-E.x,y:v.top+y.scrollTop-E.y,width:v.width,height:v.height}),popper:P(A)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach(function(e){return i.modifiersData[e.name]=Object.assign({},e.data)});for(var k=0;k<i.orderedModifiers.length;k++){if(!0===i.reset){i.reset=!1,k=-1;continue}var L=i.orderedModifiers[k],W=L.fn,T=L.options,Z=void 0===T?{}:T,B=L.name;"function"==typeof W&&(i=W({state:i,options:Z,name:B,instance:f})||i)}}}},update:function(){return r||(r=new Promise(function(e){Promise.resolve().then(function(){r=void 0,e(new Promise(function(e){f.forceUpdate(),e(i)}))})})),r},destroy:function(){u(),s=!0}};if(!I(e,t))return f;function u(){a.forEach(function(e){return e()}),a=[]}return f.setOptions(n).then(function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)}),f}),eg=n(94780),eb=n(8173),ex=n(34867);let ew="base";function eO(e,t){var n,o,r;let i=ex._v[t];return i?`${ew}--${i}`:`${ew}-${e}-${t}`}let eE="Popper";function ej(e){return eO(eE,e)}!function(e,t){let n={};return t.forEach(t=>{n[t]=eO(e,t)}),n}(eE,["root"]);var eP=n(83265),eD=n(85893);let eR=i.createContext({disableDefaultClasses:!1}),eA=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],ek=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function eM(e){return"function"==typeof e?e():e}let eL=()=>(0,eg.Z)({root:["root"]},function(e){let{disableDefaultClasses:t}=i.useContext(eR);return n=>t?"":e(n)}(ej)),eW={},eT=i.forwardRef(function(e,t){var n;let{anchorEl:f,children:p,direction:c,disablePortal:l,modifiers:u,open:d,placement:m,popperOptions:h,popperRef:v,slotProps:y={},slots:g={},TransitionProps:b}=e,x=(0,r.Z)(e,eA),w=i.useRef(null),O=(0,a.Z)(w,t),E=i.useRef(null),j=(0,a.Z)(E,v),P=i.useRef(j);(0,s.Z)(()=>{P.current=j},[j]),i.useImperativeHandle(v,()=>E.current,[]);let D=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(m,c),[R,A]=i.useState(D),[k,M]=i.useState(eM(f));i.useEffect(()=>{E.current&&E.current.forceUpdate()}),i.useEffect(()=>{f&&M(eM(f))},[f]),(0,s.Z)(()=>{if(!k||!d)return;let e=e=>{A(e.placement)},t=[{name:"preventOverflow",options:{altBoundary:l}},{name:"flip",options:{altBoundary:l}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn({state:t}){e(t)}}];null!=u&&(t=t.concat(u)),h&&null!=h.modifiers&&(t=t.concat(h.modifiers));let n=ey(k,w.current,(0,o.Z)({placement:D},h,{modifiers:t}));return P.current(n),()=>{n.destroy(),P.current(null)}},[k,l,u,d,h,D]);let L={placement:R};null!==b&&(L.TransitionProps=b);let W=eL(),T=null!=(n=g.root)?n:"div",Z=(0,eP.y)({elementType:T,externalSlotProps:y.root,externalForwardedProps:x,additionalProps:{role:"tooltip",ref:O},ownerState:e,className:W.root});return(0,eD.jsx)(T,(0,o.Z)({},Z,{children:"function"==typeof p?p(L):p}))}),eZ=i.forwardRef(function(e,t){let{anchorEl:n,children:a,container:s,direction:p="ltr",disablePortal:c=!1,keepMounted:l=!1,modifiers:u,open:d,placement:m="bottom",popperOptions:h=eW,popperRef:v,style:y,transition:g=!1,slotProps:b={},slots:x={}}=e,w=(0,r.Z)(e,ek),[O,E]=i.useState(!0),j=()=>{E(!1)},P=()=>{E(!0)};if(!l&&!d&&(!g||O))return null;let D;if(s)D=s;else if(n){var R;let A=eM(n);D=A&&void 0!==A.nodeType?(0,f.Z)(A).body:(0,f.Z)(null).body}return(0,eD.jsx)(eb.h,{disablePortal:c,container:D,children:(0,eD.jsx)(eT,(0,o.Z)({anchorEl:n,direction:p,disablePortal:c,modifiers:u,ref:t,open:g?!O:d,placement:m,popperOptions:h,popperRef:v,slotProps:b,slots:x},w,{style:(0,o.Z)({position:"fixed",top:0,left:0,display:!d&&l&&(!g||O)?"none":void 0},y),TransitionProps:g?{in:d,onEnter:j,onExited:P}:void 0,children:a}))})});var eB=n(34168),eH=n(90948),eS=n(71657);let eC=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],eV=(0,eH.ZP)(eZ,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),eq=i.forwardRef(function(e,t){var n;let i=(0,eB.Z)(),a=(0,eS.Z)({props:e,name:"MuiPopper"}),{anchorEl:s,component:f,components:p,componentsProps:c,container:l,disablePortal:u,keepMounted:d,modifiers:m,open:h,placement:v,popperOptions:y,popperRef:g,transition:b,slots:x,slotProps:w}=a,O=(0,r.Z)(a,eC),E=null!=(n=null==x?void 0:x.root)?n:null==p?void 0:p.Root,j=(0,o.Z)({anchorEl:s,container:l,disablePortal:u,keepMounted:d,modifiers:m,open:h,placement:v,popperOptions:y,popperRef:g,transition:b},O);return(0,eD.jsx)(eV,(0,o.Z)({as:f,direction:null==i?void 0:i.direction,slots:{root:E},slotProps:null!=w?w:c},j,{ref:t}))});var eN=eq}}]);
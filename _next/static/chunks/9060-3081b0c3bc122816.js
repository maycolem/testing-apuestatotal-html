"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9060],{9060:function(n,e,t){t.r(e),t.d(e,{LayoutUserPanel:function(){return nR}});var r=t(47568),i=t(7297),a=t(70655),o=t(85893),c=t(10335),l=t(75733),s=t(53918);function u(){var n=(0,i.Z)(["\n    && {\n        position: static;\n        max-height: initial;\n        height: initial;\n        z-index: 99 !important;\n        opacity: 1;\n        top: initial;\n        right: initial;\n        pointer-events: all;\n        flex: 1;\n        flex-direction: column;\n        box-shadow: none;\n        border: 0;\n        width: 100%;\n        ::after,\n        ::before {\n            display: none;\n        }\n        > .menu__wrapper {\n            border: 0;\n            padding: 0;\n            flex: 1;\n            max-height: initial;\n            background: transparent;\n            width: initial;\n            border-radius: 0;\n            width: 100%;\n            a {\n                border-radius: 0;\n                border-top-left-radius: 0;\n                border-top-right-radius: 0;\n\n                > span {\n                    flex: 1;\n                    max-width: initial;\n                }\n            }\n        }\n    }\n"]);return u=function(){return n},n}var d=function(){return(0,o.jsx)(m,{children:"UserMenu"})},m=(0,s.default)(l.v2)(u()),f=t(828),p=t(98396),h=t(63083),x=t(36830),g=t(61250),v=t(43240),b=t(17520),y=t(94688),j=t(73710),w=t.n(j),N=t(67294),k=t(5434),Z=t(8942),z=t(87952);function E(){var n=(0,i.Z)(["\n    position: absolute;\n    z-index: 1;\n    top: 50%;\n    transform: translateY(-50%);\n    background: black;\n    padding: 3px 7px;\n    border-radius: 5px;\n    font-size: 0.9rem;\n    left: 110%;\n    border: 1px solid gray;\n    transition: 250ms;\n    pointer-events: none;\n    visibility: hidden;\n    opacity: 0;\n    &.animatedButton {\n        pointer-events: initial;\n        visibility: initial;\n        opacity: 1;\n    }\n"]);return E=function(){return n},n}function C(){var n=(0,i.Z)(["\n    background: ",";\n    padding: 4px 4px 1px 4px;\n    border-radius: 4px;\n    color: white;\n    margin-left: 1rem;\n    transition: 250ms;\n    position: relative;\n    & > svg {\n        color: white;\n        font-size: 16px;\n    }\n\n    &.animatedButton {\n        transition: 500ms;\n        background: gray;\n    }\n"]);return C=function(){return n},n}function S(){var n=(0,i.Z)(["\n    display: flex;\n    align-items: center;\n    /* justify-content: center; */\n    justify-content: center;\n    padding-right: 5px;\n    gap: 1rem;\n    /* padding: calc(20px + 0.5vmax) 20px; */\n"]);return S=function(){return n},n}function _(){var n=(0,i.Z)(["\n    & {\n        width: 50px;\n        height: 50px;\n\n        outline: 1px solid ",";\n        outline-offset: 2px;\n    }\n"]);return _=function(){return n},n}function I(){var n=(0,i.Z)(["\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: inherit;\n    background-color: ",";\n    border-radius: 50%;\n    color: white;\n    text-transform: capitalize;\n    font-size: 25px;\n"]);return I=function(){return n},n}function B(){var n=(0,i.Z)(["\n    & {\n        text-align: left;\n        p:first-of-type {\n            margin-bottom: 2px;\n        }\n        p {\n            text-transform: capitalize;\n            font-weight: 700;\n            color: ",";\n        }\n        p.id {\n            color: ",";\n            font-weight: 400;\n            display: flex;\n            flex-direction: row;\n            place-items: center;\n            gap: .5rem;\n            /* justify-content: space-between; */\n        }\n    }\n"]);return B=function(){return n},n}var P=function(n){var e=n.src,t=n.id,i=n.fullName,c=n.withoutIMG;return(0,o.jsxs)(U,{children:[!c&&(0,o.jsx)(R,{src:e,variant:"circular",children:(0,o.jsx)(F,{children:i.slice(0,1)})}),(0,o.jsxs)(T,{children:[(0,o.jsx)("p",{children:i}),(0,o.jsxs)("p",{className:"id",children:[(0,o.jsx)("span",{children:"ID: "}),t,(0,o.jsxs)(A,{id:"button-copy-id-user",onClick:(0,r.Z)(function(){var n,e;return(0,a.__generator)(this,function(r){switch(r.label){case 0:return n=document.getElementById("button-copy-id-user"),e=document.getElementById("copy-text"),n.classList.add("animatedButton"),e.classList.add("animatedButton"),[4,(0,Z.g)(500)];case 1:return r.sent(),navigator.clipboard.writeText(String(t)).then(function(){console.log("Async: Copying to clipboard was successful!"),n.classList.remove("animatedButton"),e.classList.remove("animatedButton")},function(t){console.error("Async: Could not copy text: ",t),n.classList.remove("animatedButton"),e.classList.remove("animatedButton")}),[2]}})}),children:[(0,o.jsx)(k.Fqs,{}),(0,o.jsx)(L,{id:"copy-text",children:"Copiado!"})]})]})]})]})},L=s.default.div(E()),A=s.default.button(C(),function(n){return n.theme.primary}),U=s.default.div(S()),R=(0,s.default)(z.Z)(_(),function(n){return n.theme.palette.primary.main}),F=s.default.div(I(),function(n){return n.theme.palette.primary.main}),T=s.default.div(B(),function(n){return w()(n.theme.contrastText,.6)},function(n){return n.theme.palette.primary.main});function q(){var n=(0,i.Z)(["\n    display: flex;\n    justify-content: space-around;\n    gap: 0.2rem;\n    width: 100%;\n\n    & {\n        div {\n            flex: 1;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            // background: ",";\n            padding: 0.7rem 1.4rem;\n            gap: 0.2rem;\n            width: 100%;\n            span {\n                color: #828282;\n                font-weight: 400;\n                text-align: center;\n            }\n            span:nth-of-type(2) {\n                font-weight: 600;\n                color: #595959;\n            }\n        }\n    }\n"]);return q=function(){return n},n}var M=function(){var n=(0,b.CG)(v.np);return(0,o.jsxs)(H,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:"Saldo Total"}),(0,o.jsx)("span",{children:Intl.NumberFormat("es-PE",{style:"currency",currency:"PEN"}).format((null==n?void 0:n.totalAmount)/100)})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:"Saldo Retirable"}),(0,o.jsx)("span",{children:Intl.NumberFormat("es-PE",{style:"currency",currency:"PEN"}).format((null==n?void 0:n.saldoRetirable)/100)})]})]})},H=s.default.div(q(),function(n){return n.theme.palette.alternate12.main}),$=t(26042),O=t(69396),G=t(20847),V=t(72852),D=t(67962);function W(){var n=(0,i.Z)(["\n    & {\n        background: inherit;\n        display: flex;\n        flex-direction: column;\n        overflow: hidden;\n        border-radius: 5px;\n        z-index: 99;\n        position: relative;\n        > .wrapper-detail {\n            padding: 0.5rem;\n            padding-left: 1rem;\n            padding-right: 1rem;\n            display: grid;\n            grid-template-columns: 1fr 1fr 1fr;\n            align-items: center;\n            :hover {\n                /* background: ","; */\n            }\n            > div {\n                min-width: 80px;\n                min-height: 30px;\n                text-align: left;\n                display: flex;\n                align-items: center;\n                color: ",";\n                font-size: 0.9rem;\n                font-weight: 400;\n                white-space: nowrap;\n                &.status {\n                    justify-content: center;\n                    position: relative;\n                    z-index: 99;\n                    .MuiFormControlLabel-root {\n                        margin: 0 !important;\n                    }\n                }\n                &.amount {\n                    justify-content: flex-end;\n                }\n            }\n        }\n    }\n"]);return W=function(){return n},n}var Y=function(n){var e,t=n.className,i=(0,b.CG)(v.Up),c=(0,b.CG)(v.np),l=(0,N.useState)(!1),s=l[0],u=l[1],d=(0,f.Z)((0,D.YE)(),2),m=d[0],p=d[1].isLoading,h=(0,f.Z)((0,D.tx)(),1)[0],x=(0,b.TL)(),g=(e=(0,r.Z)(function(n){var e,t,r,o,c;return(0,a.__generator)(this,function(a){switch(a.label){case 0:return u(e=n.target.checked),[4,m({session:i,account:"CASINO-BONUS",active:Number(e)})];case 1:if(!("data"in(t=a.sent())&&"OK"===t.data.result))return[3,3];return[4,h({session:i})];case 2:"data"in(r=a.sent())&&"user"in(o=r.data)&&(c=o.user,y((0,O.Z)((0,$.Z)({},c),{session:i}))),a.label=3;case 3:return[2]}})}),function(n){return e.apply(this,arguments)}),y=function(n){x((0,v.av)(n))};(0,N.useEffect)(function(){c&&j()},[c]);var j=function(){var n,e=null==c?void 0:null===(n=c.accounts)||void 0===n?void 0:n.find(function(n){return"CASINO-BONUS"===n.account});if(e){u(Boolean(e.active));return}u(!1)};return(0,o.jsxs)(K,{className:t,children:[(0,o.jsxs)("div",{className:"wrapper-detail",children:[(0,o.jsx)("div",{className:"balance-name",children:"Casino"}),(0,o.jsx)("div",{className:"status",children:(0,o.jsx)(G.Z,{control:(0,o.jsx)(V.Z,{checked:s,color:"success",disabled:p,inputProps:{"aria-label":"controlled"},onChange:g}),label:""})}),(0,o.jsx)("div",{className:"amount",children:Intl.NumberFormat("es-PE",{style:"currency",currency:"PEN"}).format((null==c?void 0:c.casinoBonus)/100)})]}),(0,o.jsxs)("div",{className:"wrapper-detail",children:[(0,o.jsx)("div",{className:"balance-name",children:"Deportivas"}),(0,o.jsx)("div",{className:"status"}),(0,o.jsx)("div",{className:"amount",children:Intl.NumberFormat("es-PE",{style:"currency",currency:"PEN"}).format((null==c?void 0:c.bettingBonus)/100)})]}),(0,o.jsxs)("div",{className:"wrapper-detail",children:[(0,o.jsx)("div",{className:"balance-name",children:"Total bonos"}),(0,o.jsx)("div",{className:"status"}),(0,o.jsx)("div",{className:"amount",children:Intl.NumberFormat("es-PE",{style:"currency",currency:"PEN"}).format((null==c?void 0:c.totalBonus)/100)})]})]})},K=s.default.div(W(),function(n){return w()(n.theme.palette.primary.main,.2)},function(n){return w()(n.theme.contrastText,.6)});function J(){var n=(0,i.Z)(["\n    & {\n        /* margin-top: 1rem; */\n        margin-top: 1rem;\n        background: ",";\n        height: 1px;\n        width: 90%;\n        margin-left: auto;\n        margin-right: auto;\n    }\n"]);return J=function(){return n},n}function Q(){var n=(0,i.Z)(["\n    display: flex;\n    flex-direction: column;\n    /* gap: 1rem; */\n    "," {\n        /* padding-top: calc(1rem + 3vh); */\n    }\n"]);return Q=function(){return n},n}function X(){var n=(0,i.Z)(["\n    && {\n        padding: 1rem 2rem;\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n        max-width: 450px;\n        margin: auto !important;\n    }\n"]);return X=function(){return n},n}function nn(){var n=(0,i.Z)(["\n    && {\n        box-shadow: none;\n        background: ",";\n        ::before {\n            content: none;\n        }\n    }\n"]);return nn=function(){return n},n}function ne(){var n=(0,i.Z)(["\n    && {\n        min-height: 60px !important;\n        padding: 0;\n        padding: 1rem 0;\n        padding-right: 8px;\n\n        /* &:hover {\n            background: ",";\n            p {\n                color: ",";\n            }\n        } */\n        &:hover {\n            background: ",";\n        }\n        .MuiAccordionSummary-content {\n            justify-content: center;\n            margin: 0 !important;\n            color: ",";\n            padding-left: 3rem;\n        }\n        .MuiAccordionSummary-expandIconWrapper {\n            > svg {\n                font-size: 3rem;\n                color: ",";\n            }\n        }\n    }\n"]);return ne=function(){return n},n}function nt(){var n=(0,i.Z)(["\n    && {\n        background: ",";\n        padding: 1rem !important;\n        height: initial !important;\n        &:hover {\n            background: ",";\n        }\n        .MuiAccordionSummary-content {\n            flex: initial;\n            justify-content: center;\n            margin: 0 !important;\n            color: ",";\n            width: 100%;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }\n        .MuiAccordionSummary-expandIconWrapper {\n            margin-left: 1rem;\n            .MuiSvgIcon-root {\n                font-size: 3rem;\n            }\n        }\n        .bottonBono {\n            /* position: absolute;\n      bottom: 0px; */\n            display: flex;\n            align-items: center;\n             > svg {\n                font-size: 1.5rem;\n             }\n        }\n        .balanceS {\n            /* padding-bottom: 30px; */\n            white-space: nowrap;\n        }\n    }\n"]);return nt=function(){return n},n}var nr=function(){var n,e=(0,b.CG)(v.np),t=(0,p.Z)(y.q.min_width.desktopS),r=(0,f.Z)(N.useState(""),2),i=r[0],a=r[1];return(0,o.jsxs)(na,{children:[t&&(0,o.jsx)(P,{fullName:"".concat(null==e?void 0:e.firstName," ").concat(null==e?void 0:e.lastName),id:null==e?void 0:e.user,src:null==e?void 0:e.image}),t&&(0,o.jsx)(ni,{}),t&&(0,o.jsx)("div",{className:"",children:(0,o.jsxs)(nc,{children:[(0,o.jsxs)(ns,{children:[(0,o.jsx)("div",{className:"balanceS",children:(0,o.jsx)(M,{})}),(0,o.jsxs)("div",{className:"bottonBono",children:["Total Bonos"," ",Intl.NumberFormat("es-PE",{style:"currency",currency:"PEN"}).format((null==e?void 0:e.totalBonus)/100)," ",(0,o.jsx)(k.Ix0,{})]})]}),(0,o.jsx)(Y,{})]})}),!t&&(0,o.jsxs)(nc,{expanded:"panel1"===i,onChange:function(n,e){a(!!e&&"panel1")},onClick:function(n){var e=n.target,t=document.getElementById("button-copy-id-user");(null==t?void 0:t.contains(e))&&a(i)},children:[(0,o.jsx)(nl,{"aria-controls":"panel1a-content",expandIcon:(0,o.jsx)(k.Ix0,{}),id:"panel1a-header",children:(0,o.jsx)(P,{fullName:"".concat(null==e?void 0:e.firstName," ").concat(null==e?void 0:e.lastName),id:null==e?void 0:e.user,src:null==e?void 0:e.image,withoutIMG:!0})}),(0,o.jsxs)(no,{children:[(0,o.jsx)(M,{}),(0,o.jsx)(Y,{})]})]})]})},ni=s.default.div(J(),function(n){return n.theme.background}),na=s.default.div(Q(),y.q.min_width.desktopS),no=(0,s.default)(h.Z)(X()),nc=(0,s.default)(x.Z)(nn(),function(n){return n.theme.background}),nl=(0,s.default)(g.Z)(ne(),function(n){return n.theme.palette.linkPink.main},function(n){return w()(n.theme.background,.7)},function(n){return w()(n.theme.primary,.08)},function(n){return n.theme.primary},function(n){return n.theme.primary}),ns=(0,s.default)(g.Z)(nt(),function(n){return n.theme.background},function(n){return w()(n.theme.primary,.08)},function(n){return n.theme.primary}),nu=t(69397),nd=t(8041),nm=t(27746),nf=t(86792),np=t(42395),nh=t(94718),nx=t(23200),ng=t(94184),nv=t.n(ng),nb=t(38086),ny=t(41664),nj=t.n(ny),nw=t(11163),nN=t(77058),nk=t(41248);function nZ(){var n=(0,i.Z)(["\n    & {\n        /* margin-top: 1rem; */\n        background: ",";\n        height: 1px;\n        width: 90%;\n        margin-left: auto;\n        margin-right: auto;\n    }\n"]);return nZ=function(){return n},n}function nz(){var n=(0,i.Z)(["\n                    opacity: 0;\n                "]);return nz=function(){return n},n}function nE(){var n=(0,i.Z)(["\n    & {\n        ","\n    }\n"]);return nE=function(){return n},n}function nC(){var n=(0,i.Z)(["\n    & {\n        li:last-of-type {\n            color: ",";\n            font-weight: 500;\n        }\n        p {\n            text-transform: lowercase;\n            ::first-letter {\n                text-transform: capitalize;\n            }\n            color: ",";\n        }\n    }\n"]);return nC=function(){return n},n}function nS(){var n=(0,i.Z)(["\n    & {\n        min-height: 50px;\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n        padding-bottom: 1rem;\n        background: ",";\n        > .top {\n            display: flex;\n            justify-content: space-between;\n            > .button {\n                right: 0;\n                top: 0;\n                border-radius: 0;\n                font-size: 0.9rem;\n                display: flex;\n                align-items: center;\n                text-transform: capitalize;\n                padding: 2px 1rem;\n                font-weight: 400;\n                box-shadow: none;\n                color: white;\n                background: ",";\n                ","\n                > svg {\n                    font-size: 0.9rem;\n                }\n            }\n        }\n        > .bottom {\n            padding: 0rem 1rem;\n        }\n    }\n"]);return nS=function(){return n},n}function n_(){var n=(0,i.Z)(["\n    & {\n        /* padding-left: 14px; */ //agrega un padding de mas a la izquierda\n        position: absolute;\n        top: 0;\n        height: 100%;\n        background: rgba(0, 0, 0, 0.8);\n        z-index: 99;\n        backdrop-filter: blur(2px);\n        width: 100%;\n        > .content-text {\n            background: ",";\n            padding: 4rem 3rem;\n            padding-bottom: 8rem;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            gap: 1rem;\n            > .text {\n                font-size: 1rem;\n                line-height: 1.6;\n                text-align: center;\n            }\n            > .accions {\n                display: flex;\n                gap: 1rem;\n                width: 100%;\n                flex-wrap: wrap;\n                > button {\n                    flex: 1;\n                    padding: 0.8rem 1rem;\n                    text-transform: capitalize;\n                    font-size: 1rem;\n                    min-width: 200px;\n                }\n            }\n            > .icon {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                gap: 1rem;\n                > .title {\n                    font-size: 1.2rem;\n                    color: ",";\n                }\n                svg {\n                    font-size: 3rem;\n                    color: ",";\n                }\n            }\n        }\n        "," {\n            padding: 0;\n            top: 0;\n            right: 0;\n            > .content-text {\n                padding: 1rem 50px;\n                flex-direction: row;\n                > .text {\n                    text-align: left;\n                    line-height: 1.4;\n                }\n                > .accions {\n                    flex: 0 1 30%;\n                    > button {\n                        white-space: nowrap;\n                        flex: 1;\n                    }\n                }\n            }\n        }\n    }\n"]);return n_=function(){return n},n}function nI(){var n=(0,i.Z)(["\n                min-height: ",";\n            "]);return nI=function(){return n},n}function nB(){var n=(0,i.Z)(["\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    position: relative;\n    min-height: 600px;\n\n    ","\n\n    > div.main__content {\n        flex: 1;\n        display : flex;\n        flex-direction: column;\n    }\n"]);return nB=function(){return n},n}function nP(){var n=(0,i.Z)(["\n    flex: 1;\n    display: grid;\n    grid-template-columns: 100%;\n    min-height: inherit;\n    margin-bottom: 2rem;\n    max-width: 100rem;\n    margin: auto;\n    box-sizing: border-box;\n    width: calc(100% + 28px);\n    position: relative;\n    right: 14px;\n\n    "," {\n        display: grid;\n        grid-template-columns: minmax(0, 0.3fr) minmax(0, 1fr);        \n        grid-template-rows: 1fr;\n    }\n    "," {\n        grid-template-columns:minmax(0, 0.25fr) minmax(0, 1fr);\n    }\n"]);return nP=function(){return n},n}function nL(){var n=(0,i.Z)(["\n    display: flex;\n    flex-direction: column;\n    "," {\n        padding-top: 1rem;\n        border-right: 1px solid ",";\n    }\n"]);return nL=function(){return n},n}function nA(){var n=(0,i.Z)(["\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    padding: 1rem 14px;\n    padding-bottom: 0.5rem;\n    align-items: center;\n\n    > button {\n        border-radius: 0;\n        padding: 0.3rem;\n        line-height: 1;\n        min-width: initial;\n        background: ",";\n        color: white;\n        ","\n        display: grid;\n        place-content: center;\n        svg {\n            color: white;\n            font-size: 2.5rem;\n            font-size: 1.8rem;\n        }\n    }\n"]);return nA=function(){return n},n}function nU(){var n=(0,i.Z)(["\n    & {\n        font-size: 0.95rem;\n        display: block;\n        ::first-letter {\n            text-transform: capitalize;\n        }\n    }\n"]);return nU=function(){return n},n}var nR=function(n){var e,t=n.children,i=(0,nk.v9)(v.np),l=(0,nf.BA)({company:"ATP",session:null==i?void 0:i.session,fragment:"VERIFICA_TU_CUENTA"},{skip:!!(null==i?void 0:i.verified)}).data,s=(0,nk.v9)(np.ee).backURL,u=(0,p.Z)(y.q.min_width.desktopS),m=(0,nk.I0)(),f=(0,N.useState)([]),h=f[0],x=f[1],g=(0,nw.useRouter)(),b=(0,nk.v9)(nh.s).isVerify,j=(0,nw.useRouter)().asPath,w=(0,nN.$)().t,Z=(0,c.Z)().heightHeader;(0,N.useEffect)(function(){if(j){var n=j.split("?")[0].trim().split("/").filter(function(n){return null!=n?n:""}).map(function(n){return n&&void 0!==n&&"string"==typeof n?n.replace(/-/g," "):""}).slice(1);if((null==n?void 0:n.includes("mybets"))||(null==n?void 0:n.includes("mis notificaciones"))){x(null==n?void 0:n.slice(0,1));return}x(n)}},[j]);var z,E=function(){m((0,nh.t8)(!1))},C=(z=(0,r.Z)(function(){return(0,a.__generator)(this,function(n){switch(n.label){case 0:return m((0,nh.t8)(!1)),[4,g.push({pathname:nm.y.CUENTA_VERIFICAR.url})];case 1:return n.sent(),[2]}})}),function(){return z.apply(this,arguments)});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(nO,{children:[!u&&(0,o.jsxs)(nV,{children:[(0,o.jsx)(nj(),{href:null!=s?s:"",children:(0,o.jsx)(nT,{$backURL:s,className:nv()("back"),children:(0,o.jsx)(k.lrP,{})})}),(0,o.jsx)(nD,{children:null!==(e=h[0])&&void 0!==e?e:""}),(0,o.jsx)(nj(),{href:(null==g?void 0:g.backReferrer)||nm.y.HOME.url,children:(0,o.jsx)("button",{className:"close",children:(0,o.jsx)(k.FU5,{})})})]}),(0,o.jsxs)(nG,{children:[(0,o.jsx)(nr,{}),u&&(0,o.jsx)(nF,{}),u&&(0,o.jsx)(d,{})]}),(0,o.jsxs)(n$,{$heightHeader:Z,children:[u&&(0,o.jsxs)(nM,{className:"close",children:[(0,o.jsxs)("div",{className:"top",children:[(0,o.jsx)(nj(),{href:null!=s?s:"",children:(0,o.jsxs)(nT,{$backURL:s,className:nv()("button"),children:[(0,o.jsx)(k.lrP,{}),(0,o.jsx)("span",{children:"Atras"})]})}),(0,o.jsx)(nj(),{href:(null==g?void 0:g.backReferrer)||nm.y.HOME.url,children:(0,o.jsxs)("button",{className:"button",children:[(0,o.jsx)("span",{children:"Cerrar"}),(0,o.jsx)(k.FU5,{})]})})]}),(0,o.jsx)("div",{className:"bottom",children:(0,o.jsx)(nq,{"aria-label":"breadcrumb",children:null==h?void 0:h.map(function(n,e){return(0,o.jsx)("p",{className:"",children:w(n)},n)})})})]}),(0,o.jsx)("div",{className:"main__content",children:t})]})]}),b&&(null==i?void 0:i.verified)===0&&(0,o.jsx)(nH,{children:(0,o.jsxs)("div",{className:"content-text",children:[(0,o.jsxs)("div",{className:"icon",children:[(0,o.jsx)(k.ESo,{}),!u&&(0,o.jsx)("span",{className:"title",children:"Verifica tu cuenta"})]}),(0,o.jsx)("p",{className:"text",children:(0,nb.Parser)().parse(l)}),(0,o.jsxs)("div",{className:"accions",children:[(0,o.jsx)(nu.Z,{onClick:E,variant:"outlined",children:"Verificar m\xe1s tarde"}),(0,o.jsx)(nu.Z,{onClick:C,variant:"contained",children:"Verificar aqu\xed"})]})]})})]})},nF=s.default.div(nZ(),function(n){return n.theme.background}),nT=s.default.button(nE(),function(n){return n.$backURL&&""!==n.$backURL?null:(0,s.css)(nz())}),nq=(0,s.default)(nd.Z)(nC(),function(n){return n.theme.contrastText},function(n){return w()(n.theme.contrastText,.6)}),nM=s.default.div(nS(),function(n){return n.theme.background},function(n){return n.theme.primary},(0,nx.q)({shadowColorHSL:"0deg 100% 29%"}).small),nH=s.default.div(n_(),function(n){return n.theme.palette.linkPink.main},function(n){return n.theme.palette.primary.main},function(n){return n.theme.palette.primary.main},y.q.min_width.desktopS),n$=s.default.div(nB(),function(n){if(n.$heightHeader){var e="calc(100vh - ".concat(n.$heightHeader,"px)");return(0,s.css)(nI(),e)}return null}),nO=s.default.div(nP(),y.q.min_width.desktopS,y.q.min_width.desktopL),nG=s.default.div(nL(),y.q.min_width.desktopS,function(n){return n.theme.palette.alternate8.main}),nV=s.default.div(nA(),function(n){return n.theme.primary},(0,nx.q)({shadowColorHSL:"0deg 100% 29%"}).small),nD=s.default.div(nU())}}]);
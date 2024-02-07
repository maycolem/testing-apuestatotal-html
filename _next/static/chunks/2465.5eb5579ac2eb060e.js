"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2465,1705],{10335:function(n,e,t){var r=t(67294),i=t(93451),o=function(){var n=(0,r.useState)(0),e=n[0],t=n[1],o=(0,i.Z)().width;return(0,r.useEffect)(function(){var n=setTimeout(function(){var n=document.getElementById("layout-default-at-apuesta");null!==n&&t(n.offsetHeight)},200);return function(){clearTimeout(n)}},[window,document,o]),{heightHeader:e}};e.Z=o},93451:function(n,e,t){var r=t(67294);e.Z=function(){var n=(0,r.useState)({width:void 0,height:void 0}),e=n[0],t=n[1];return(0,r.useEffect)(function(){var n=function(){t({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",n),n(),function(){window.removeEventListener("resize",n)}},[]),e}},52465:function(n,e,t){t.r(e),t.d(e,{Hamburguer:function(){return m},Menu:function(){return I}});var r=t(7297),i=t(85893),o=t(54227),a=t(90970),s=t(94184),c=t.n(s),l=t(11163),u=t(67294),d=t(53918);function f(){var n=(0,r.Z)(["\n    & {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        max-height: 15px;\n        height: 15px;\n    }\n"]);return f=function(){return n},n}function p(){var n=(0,r.Z)(["\n    & {\n        width: 20px;\n        height: 2px;\n        background: ",";\n        animation-name: none;\n        animation-duration: 250ms;\n        animation-iteration-count: 1;\n        animation-fill-mode: forwards;\n        opacity: 1;\n        position: relative;\n        @keyframes openMenu1 {\n            from {\n            }\n            50% {\n                transform: translateY(6px);\n                opacity: 0.5;\n            }\n            to {\n                transform: translateY(6.5px) rotate(-45deg);\n                opacity: 1;\n            }\n        }\n        @keyframes openMenu2 {\n            from {\n            }\n            50% {\n                width: 0;\n                opacity: 0.5;\n            }\n            to {\n                width: 0;\n                opacity: 1;\n            }\n        }\n        @keyframes openMenu3 {\n            from {\n            }\n            50% {\n                transform: translateY(-6px);\n                opacity: 0.5;\n            }\n            to {\n                transform: translateY(-6.5px) rotate(45deg);\n                opacity: 1;\n            }\n        }\n        @keyframes closeMenu1 {\n            from {\n                transform: translateY(6px) rotate(-45deg);\n            }\n            50% {\n                transform: translateY(6px);\n            }\n            to {\n            }\n        }\n        @keyframes closeMenu2 {\n            from {\n                width: 0;\n            }\n            50% {\n                width: 0;\n            }\n            to {\n                width: 20px;\n            }\n        }\n        @keyframes closeMenu3 {\n            from {\n                transform: translateY(-6px) rotate(45deg);\n            }\n            50% {\n                transform: translateY(-6px);\n            }\n            to {\n            }\n        }\n        &.open_StyledLine {\n            animation-name: ",";\n        }\n        &.close_StyledLine {\n            animation-name: ",";\n        }\n    }\n"]);return p=function(){return n},n}function h(){var n=(0,r.Z)(["\n    & {\n        height: 100%;\n        min-height: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 4px;\n        /* width: 30px; */\n        cursor: pointer;\n        padding-left: 10px;\n        /* padding-right: 10px; */\n    }\n"]);return h=function(){return n},n}var m=function(){var n=(0,u.useState)(!1),e=n[0],t=n[1],r=(0,l.useRouter)(),s=function(){e&&(0,o.Ge)(),t(!1)},d=function(){t(!e),(0,o.Ge)()};return(0,u.useEffect)(function(){t(!1)},[r.asPath]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.d,{onClickAway:s,children:(0,i.jsxs)(v,{id:"toggle-menu-hamburgues-menu",children:[(0,i.jsxs)(x,{onClick:d,children:[(0,i.jsx)(g,{$indexdsa:"1",className:c()({open_StyledLine:e,close_StyledLine:!e})}),(0,i.jsx)(g,{$indexdsa:"2",className:c()({open_StyledLine:e,close_StyledLine:!e})}),(0,i.jsx)(g,{$indexdsa:"3",className:c()({open_StyledLine:e,close_StyledLine:!e})})]}),(0,i.jsx)(I,{open:e,setOpen:t})]})})})},x=d.default.div(f()),g=d.default.div(p(),function(n){return n.theme.contrastText},function(n){return"openMenu".concat(n.$indexdsa)},function(n){return"closeMenu".concat(n.$indexdsa)}),v=d.default.div(h()),w=t(5357),j=t(1451),b=t(10335),k=t(50211),y=t(6839),H=t(71281),C=t(7573),Z=t(47648),_=t(28853),T=t(68679),z=t(94688),N=t(73710),S=t.n(N),L=t(41664),M=t.n(L);function $(){var n=(0,r.Z)(["\n                    transform: scale(1);\n                    opacity: 1;\n                    top: ","px;\n                    pointer-events: all;\n                    visibility: visible;\n                "]);return $=function(){return n},n}function E(){var n=(0,r.Z)(["\n    && {\n        /* border-radius: 5px; */\n        top: calc(100% + 4px);\n        right: 0;\n        width: 80%;\n        max-width: 400px;\n        position: absolute;\n        --shadow-1: rgba(0, 0, 0, 0.1);\n        --shadow-2: rgba(0, 0, 0, 0.2);\n        --shadow-inset: rgba(255, 255, 255, 0.5);\n        box-shadow: 0 4px 8px 0 var(--shadow-2), 0 2px 4px 0 var(--shadow-1), inset 0 0 0 1px var(--shadow-inset);\n        display: flex;\n        flex-direction: column;\n        background: ",";\n        z-index: 999;\n        padding-left: 1.5rem;\n        > .scrollbars > div:first-of-type {\n            padding-top: 1rem;\n            padding-bottom: 1rem;\n        }\n        > div > div > div {\n            margin-right: 1.5rem;\n        }\n        > div > div > hr {\n            margin-right: 1.5rem;\n            border-color: ",";\n        }\n        "," {\n            /* right: 50px; */\n            max-width: 450px;\n        }\n        > span.space {\n            margin: 7px;\n        }\n        > div > div > a,\n        > div > div > button {\n            margin-right: 1.5rem;\n            background: transparent;\n            z-index: 2;\n            padding: 0.4rem 0.5rem;\n            font-size: 1rem;\n            color: ",";\n            border-radius: 5px;\n            border: 2px solid ",";\n            display: flex;\n            align-items: center;\n            gap: 8px;\n			position: relative;\n            > span.icon {\n                background: ",";\n                border-radius: 50%;\n                width: 14px;\n                height: 14px;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                > svg {\n                    font-size: 10px;\n                    position: relative;\n                    right: 1px;\n                    color: white;\n                }\n            }\n            &.nuestras-tiendas {\n                color: ",";\n\n                /* color: ","; */\n                font-size: 0.8rem;\n            }\n\n            &.recargar {\n                background: ",";\n                text-align: center;\n                justify-content: center;\n                font-size: 0.95rem;\n                padding: 0.7rem 1rem;\n                border-color: ",";\n            }\n            &.opac {\n                color: ",";\n                /* color: ","; */\n                font-size: 0.9rem;\n                font-size: 1rem;\n            }\n        }\n\n        > button {\n            margin-top: 10px;\n            margin-bottom: 10px;\n            > div {\n                display: flex;\n                align-items: center;\n                flex-direction: row;\n                line-height: 1;\n                gap: 5px;\n\n                img {\n                    display: block;\n                    object-fit: cover;\n                    max-height: 2rem;\n                    position: relative;\n                    bottom: 0.2rem;\n                    &.sol {\n                        bottom: 0rem;\n                    }\n                }\n            }\n        }\n\n        transition: transform 30ms linear 40ms, opacity 40ms linear, right 40ms, top 40ms, pointer-events 40ms linear 40ms;\n        opacity: 0;\n        top: 38px;\n        pointer-events: none;\n        transform: scale(0.99);\n        visibility: hidden;\n        ","\n    }\n"]);return E=function(){return n},n}function Y(){var n=(0,r.Z)(['\n	width: fit-content;\n    padding: 3px 5px;\n    height: 1rem;\n    position: relative;\n    background: red;\n    top: 0;\n    right: 0.7ch;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 6px;\n    ::after {\n        content: "Nuevo";\n        color: white;\n        font-weight: 600;\n        font-size: 0.6rem;\n    }\n']);return Y=function(){return n},n}function A(){var n=(0,r.Z)(['\n    width: fit-content;\n    padding: 3px 5px;\n    height: 1rem;\n    position: absolute;\n    background: red;\n    top: 0;\n    right: -2.6rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 6px;\n    ::after {\n        content: "Top 1";\n        color: white;\n        font-weight: 600;\n        font-size: 0.6rem;\n    }\n']);return A=function(){return n},n}function F(){var n=(0,r.Z)(["\n    position: relative;\n"]);return F=function(){return n},n}function G(){var n=(0,r.Z)(["\n    height: 1px;\n    background: ",";\n"]);return G=function(){return n},n}function O(){var n=(0,r.Z)(["\n    position: relative;\n    > div {\n        display: flex;\n        flex-direction: column;\n        img {\n            position: relative;\n            min-width: 30px;\n            max-width: 30px;\n            margin-bottom: -10px;\n            margin-top: -10px;\n            &.whatsapp {\n                min-width: 17px;\n                max-width: 17px;\n                z-index: 1;\n            }\n            &.Telegram {\n                z-index: 2;\n                min-width: 18px;\n                max-width: 18px;\n                margin-top: -6px;\n                margin-left: 5px;\n            }\n        }\n    }\n"]);return O=function(){return n},n}function Q(){var n=(0,r.Z)(['\n    & {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 0.5rem;\n        margin-top: 0.5rem;\n        > a {\n            max-width: 25px;\n            opacity: 0.9;\n            &.tiktok {\n                max-width: 30px;\n                max-height: 30px;\n            }\n            > img {\n                transition: 150ms;\n                filter: grayscale(1);\n\n                &:hover {\n                    filter: grayscale(0);\n                }\n            }\n			> img[alt="twitter"]{\n				padding: 2px;\n			}\n        }\n    }\n']);return Q=function(){return n},n}function q(){var n=(0,r.Z)(["\n    & {\n        padding-left: 0.5rem;\n        padding-right: 0.5rem;\n        > .name__wrapper {\n            text-transform: capitalize;\n            padding-bottom: 1rem;\n            text-align: center;\n            font-weight: 500;\n            color: ",";\n        }\n    }\n"]);return q=function(){return n},n}var B=[{name:"facebook",url:"https://www.facebook.com/apuestatotaloficial/",icon:H.Z.src},{name:"twitter",url:"https://twitter.com/apuestatotalof",icon:_.Z.src},{name:"instagram",url:"https://www.instagram.com/apuestatotaloficial",icon:C.Z.src},{name:"tiktok",url:"https://www.tiktok.com/@eltioat",icon:Z.Z.src},{name:"youtube",url:"https://www.youtube.com/c/ApuestaTotal/featured",icon:T.Z.src},],I=function(n){var e=n.open,t=n.setOpen,r=(0,k.Z)().user,a=(0,b.Z)().heightHeader,s=function(n){e&&(0,o.fH)(n),t(!e)};return(0,i.jsx)(R,{$heightHeader:a,$open:e,children:(0,i.jsxs)(w.Z,{className:"scrollbars",hideScroll:!0,autoHeightMax:"calc(90vh - ".concat(a,"px)"),children:[r&&(0,i.jsx)(X,{children:(0,i.jsxs)("div",{className:"name__wrapper",children:[null==r?void 0:r.firstName," ",null==r?void 0:r.lastName]})}),!r&&(0,i.jsx)(M(),{href:j.H["/cuenta/recargar"].url,className:"recargar",passHref:!0,children:(0,i.jsx)("a",{onClick:function(){s("recarga")},children:j.H["/cuenta/recargar"].title})}),(0,i.jsx)(K,{}),(0,i.jsx)(M(),{href:j.H["/apuestas-en-vivo"].url,children:(0,i.jsx)("a",{onClick:function(){s("apuestas en vivo")},children:j.H["/apuestas-en-vivo"].title})}),(0,i.jsx)(M(),{href:j.H["/apuestas-deportivas"].url,children:(0,i.jsx)("a",{onClick:function(){s("apuestas deportivas")},children:j.H["/apuestas-deportivas"].title})}),(0,i.jsx)(M(),{href:j.H["/casino"].url,children:(0,i.jsx)("a",{onClick:function(){s("casino")},children:j.H["/casino"].title})}),(0,i.jsx)(M(),{href:"https://www.apuestatotal.com/casino/evolution2/Football-studio/",children:(0,i.jsx)("a",{onClick:function(){s("football Studio")},children:(0,i.jsxs)(J,{children:["football Studio",(0,i.jsx)(D,{})]})})}),(0,i.jsx)(M(),{href:j.H["/casino-en-vivo"].url,children:(0,i.jsx)("a",{onClick:function(){s("casino en vivo")},children:j.H["/casino-en-vivo"].title})}),(0,i.jsx)(M(),{href:j.H["/juegos-virtuales"].url,children:(0,i.jsx)("a",{onClick:function(){s("juegos virtuales")},children:j.H["/juegos-virtuales"].title})}),(0,i.jsx)(M(),{href:j.H["/promociones"].url,children:(0,i.jsx)("a",{onClick:function(){s("promociones")},children:j.H["/promociones"].title})}),(0,i.jsx)(M(),{href:j.H["/calendario-de-futbol"].url,children:(0,i.jsx)("a",{onClick:function(){s("calendario de futbol")},children:j.H["/calendario-de-futbol"].title})}),(0,i.jsx)(M(),{href:j.H["/teleservicios"].url,children:(0,i.jsx)("a",{onClick:function(){s("teleservicios")},children:"Acerca de Teleservicios"})}),(0,i.jsx)(M(),{href:j.H["/torneos"].url,children:(0,i.jsx)("a",{onClick:function(){s("torneos")},children:j.H["/torneos"].title})}),(0,i.jsx)(M(),{href:j.H["/carreras"].url,children:(0,i.jsxs)("a",{onClick:function(){s("Carrera")},children:[j.H["/carreras"].title,(0,i.jsx)(W,{})]})}),(0,i.jsx)(M(),{href:j.H["/sorteos"].url,children:(0,i.jsx)("a",{onClick:function(){s("sorteos")},children:j.H["/sorteos"].title})}),(0,i.jsx)(M(),{href:j.H["/resultados"].url,children:(0,i.jsx)("a",{onClick:function(){s("resultados")},children:j.H["/resultados"].title})}),(0,i.jsx)(K,{}),(0,i.jsx)("a",{href:"https://agentes-at.com/",target:"_blank",onClick:function(){s("\xbfQuiero ser agente AT?")},rel:"noreferrer",children:"\xbfQuiero ser agente AT?"}),(0,i.jsx)(M(),{href:j.H["/nuestras-tiendas"].url,className:"opac",children:(0,i.jsx)("a",{onClick:function(){s("nuestras tiendas")},children:j.H["/nuestras-tiendas"].title})}),(0,i.jsx)(M(),{href:j.H["/tutoriales"].url,className:"opac",children:(0,i.jsx)("a",{onClick:function(){s("tutoriales")},children:j.H["/tutoriales"].title})}),(0,i.jsx)(M(),{href:"https://teleservicios.at/juega/",className:"Teleservicios",children:(0,i.jsxs)(U,{href:"https://teleservicios.at/juega/",target:"_blank",rel:"nofollow noreferrer",onClick:function(){s("teleservicios")},children:[(0,i.jsx)("p",{children:"Teleservicios"}),(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:y.Z.src,alt:"logos"})})]})}),(0,i.jsx)(M(),{href:j.H["/podcast"].url,className:"opac",children:(0,i.jsx)("a",{onClick:function(){s("podcast")},children:j.H["/podcast"].title})}),(0,i.jsx)(K,{}),(0,i.jsx)(V,{children:B.map(function(n,e){return(0,i.jsx)(P,{name:n.name,href:n.url,icon:n.icon},"social-".concat(e))})})]})})},P=function(n){var e=n.name,t=n.href,r=n.icon;return(0,i.jsx)(M(),{href:t,passHref:!0,children:(0,i.jsx)("a",{target:"_blank",rel:"nofollow",onClick:function(){return(0,o.fH)(e.toLowerCase())},children:(0,i.jsx)("img",{src:r,alt:e})})})},R=d.default.div(E(),function(n){return n.theme.background},function(n){return S()(n.theme.contrastText,.4)},z.q.min_width.desktopS,function(n){return n.theme.contrastText},function(n){return n.theme.background},function(n){return n.theme.palette.alternate19.main},function(n){return n.theme.contrastText},function(n){return n.theme.palette.alternate19.main},function(n){return n.theme.palette.secondary.main},function(n){return n.theme.primary},function(n){return n.theme.contrastText},function(n){return n.theme.palette.alternate19.main},function(n){if(n.$open)return(0,d.css)($(),n.$heightHeader)}),W=d.default.div(Y()),D=d.default.div(A()),J=d.default.div(F()),K=d.default.div(G(),function(n){return n.theme.contrastText}),U=d.default.a(O()),V=d.default.div(Q()),X=d.default.div(q(),function(n){return n.theme.contrastText})}}]);
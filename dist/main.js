(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),d=t(667),c=t.n(d),l=new URL(t(981),t.b),s=new URL(t(218),t.b),p=i()(o()),u=c()(l),f=c()(s);p.push([e.id,`/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n\n@font-face {\n    font-family: 'MyFontBold';\n    src: url(${u});\n    font-weight: 600;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'MyFont';\n    src: url(${f});\n    font-weight: 600;\n    font-style: normal;\n  }\n\n\n#content{\n    display: grid;\n    grid-template-columns: 250px 1fr;\n    grid-template-rows: 1fr 5fr;\n    min-height: 100vh;\n    \n    \n                \n}  \n.top{\n    grid-column: 1/3;\n    grid-row: 1/2;\n    background-color: rgb(221, 200, 197);\n    font-family: 'MyFontBold',monospace;\n    display: flex;\n    justify-content: center;\n    gap:5px;\n    padding: 10px 0 0 0;\n    align-items: center;\n    font-size: 5rem;\n}\n    \n.sidebar{\n    grid-column: 1/2;\n    grid-row: 2/3;\n    background-color: rgb(130, 185, 240);\n    gap:5px;\n    padding: 30px 10px 10px 10px;\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n\n}\n    \n.main{\n    grid-column: 2/3;\n    grid-row: 2/3;\n    background-color: rgb(28, 70, 107);\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.project{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    padding: 10px 10px 20px 10px;\n    width: 90%;\n    height:90%;\n    background-color: rgb(194, 180, 180);\n    border-radius: 10px;\n    align-items: center;\n    border: 5px solid rgb(80, 76, 76);\n}\n\n\n\n.middle{\n display: flex;\n background-size: 100px 100px;\n background-repeat: repeat;\n justify-content: center;\n flex:1;\n}\n\n\n.button, .buttonAct{\n    box-sizing: border-box;\n    background-color: rgb(196, 187, 173);\n    height: 45px;\n    width: 90%;\n    border-radius: 5px 5px 0px 0px;\n    text-align: center;\n    padding-top: 8px;\n}\n\n.button:active{\n    background-color: rgb(138, 136, 132);\n}\n.buttonAct{\n    background-color: grey;\n}\n\n.containerMenu{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    gap:10px;\n    padding: 10px 0 30px 0;\n    background-color: grey;\n    min-width: 700px;\n    align-items: center;\n    opacity: 0.95;\n    \n}\nh1{\n    font-family: MyFontBold;\n    padding: 15px;\n    font-size: 50px;\n}\n\n\n\n.title{\n    font-family: MyFontBold;\n    padding: 15px;\n    font-size: 30px;\n    background-color: rgb(194, 180, 180);\n    text-align:center;\n \n}\n\n.container{\n    display: flex;\n    justify-content: space-between;\n    gap: 5px;\n    border: 1px solid black;\n    border-radius: 10px;\n    padding: 5px;\n    background-color: aqua;\n    width: 100%;\n}\n\ninput:hover{\n    cursor:grab;\n}\n\ninput{\n    border: none;\n    background-color: aqua;\n}\n\n.projButtons{\n    display: flex;\n    justify-content: flex-end;\n    width:100%;\n    gap:5px;\n    \n}\n\n\n.img{\n background-size: 100vw 100vh;\n background-repeat: no-repeat;\n width: 250px;\n height: 150px;\n justify-content: center;\n border-radius: 5px;\n}`,""]);const m=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],d=0;d<e.length;d++){var c=e[d],l=r.base?c[0]+r.base:c[0],s=a[l]||0,p="".concat(l," ").concat(s);a[l]=s+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=d,n.splice(d,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=t(a[i]);n[d].references--}for(var c=r(e,o),l=0;l<a.length;l++){var s=t(a[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},981:(e,n,t)=>{e.exports=t.p+"1e95243e851dda853e18.ttf"},218:(e,n,t)=>{e.exports=t.p+"df0d3c4ca2d995f55fc1.ttf"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),d=t(565),c=t.n(d),l=t(216),s=t.n(l),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=s(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g=(e,n,t)=>({title:e,descrip:n,dueDate:t});var h=[];const y=()=>{const e=document.querySelector("div.sidebar"),n=document.createElement("div");n.classList.add("button"),n.textContent="project",e.appendChild(n),h.push({array:[]}),n.id=h.length-1,h[n.id].array.push("tytul"),h[n.id].array.push(n.id),b(h[n.id].array,g("test2",n.id)),b(h[n.id].array,g("test3",n.id)),n.addEventListener("click",(e=>{E(h[n.id])}))},b=(e,n)=>(e.push(n),{array:e}),v=()=>{document.querySelectorAll("input").forEach((e=>e.disabled=!1))},x=e=>{h[e]=[],h[e]={array:[]},h[e].array[0]=document.querySelector("input.title").value,h[e].array[1]=e,document.querySelectorAll("div.container").forEach((n=>{let t=n.querySelectorAll("input");b(h[e].array,g(t[0].value,t[1].value,t[2].value))}))},E=e=>{const n=document.querySelector("div.main");n.childNodes.forEach((e=>e.remove()));const t=document.createElement("div");t.classList.add("project"),t.id="viewProject"+e.array[1],n.appendChild(t);const r=document.createElement("input");r.value=e.array[0],r.classList.add("title"),t.appendChild(r),e.array.forEach((n=>{if("string"!=typeof n){let r=document.createElement("div");r.classList.add("container"),t.appendChild(r);let o=document.createElement("input");r.appendChild(o),o.value=n.title;let a=document.createElement("input");r.appendChild(a),a.value=n.descrip;let i=document.createElement("input");i.type="date",i.value=n.dueDate,r.appendChild(i);let d=document.createElement("span");r.appendChild(d),d.classList.add("material-symbols-outlined"),d.textContent="delete",d.addEventListener("click",(n=>{r.remove(),x(e.array[1])}))}document.querySelectorAll("input").forEach((e=>e.disabled=!0))}));let o=document.createElement("div");o.classList.add("projButtons"),t.appendChild(o);let a=document.createElement("span");o.appendChild(a),a.classList.add("material-symbols-outlined"),a.textContent="edit",a.addEventListener("click",v);let i=document.createElement("span");o.appendChild(i),i.classList.add("material-symbols-outlined"),i.textContent="delete",i.addEventListener("click",(n=>{document.getElementById(e.array[1]).remove(),document.getElementById("viewProject"+e.array[1]).remove(),console.log(h),console.log(h)}));let d=document.createElement("span");o.appendChild(d),d.classList.add("material-symbols-outlined"),d.textContent="Add",d.addEventListener("click",(n=>{x(e.array[1]),b(h[t.id.slice(-1)].array,g()),E(h[t.id.slice(-1)]),v()}));let c=document.createElement("span");o.appendChild(c),c.classList.add("material-symbols-outlined"),c.textContent="save",c.addEventListener("click",(n=>{x(e.array[1]),document.querySelectorAll("input").forEach((e=>e.disabled=!0))}))};(()=>{const e=document.getElementById("content"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div");n.classList.add("top"),t.classList.add("sidebar"),r.classList.add("main"),o.classList.add("button"),o.textContent="Add project",o.addEventListener("click",y),n.textContent="ToDo App",e.appendChild(n),e.appendChild(t),e.appendChild(r),t.appendChild(o)})()})()})();
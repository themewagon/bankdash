import{a as Ie,g as we,s as Se,c as k,_ as C,i as ie,r as x,u as Ce,b as ke,j as E,d as Te,e as Ee}from"./index-Cle6PEI3.js";import{B as Qe}from"./Button-kiDOCLdx.js";import{q as Ve,H as Ge}from"./TextField-X0L3enfy.js";import{T as We}from"./Typography-Cmvl76n5.js";import{B as Je}from"./Box-DHO0fgBv.js";function Ke(e){return we("MuiIconButton",e)}const Xe=Ie("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Ye=["edge","children","className","color","disabled","disableFocusRipple","size"],Ze=e=>{const{classes:t,disabled:n,color:r,edge:o,size:i}=e,s={root:["root",n&&"disabled",r!=="default"&&`color${k(r)}`,o&&`edge${k(o)}`,`size${k(i)}`]};return Ee(s,Ke,t)},et=Se(Qe,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="default"&&t[`color${k(n.color)}`],n.edge&&t[`edge${k(n.edge)}`],t[`size${k(n.size)}`]]}})(({theme:e,ownerState:t})=>C({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:ie(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12}),({theme:e,ownerState:t})=>{var n;const r=(n=(e.vars||e).palette)==null?void 0:n[t.color];return C({},t.color==="inherit"&&{color:"inherit"},t.color!=="inherit"&&t.color!=="default"&&C({color:r==null?void 0:r.main},!t.disableRipple&&{"&:hover":C({},r&&{backgroundColor:e.vars?`rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ie(r.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),t.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},t.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${Xe.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),bn=x.forwardRef(function(t,n){const r=Ce({props:t,name:"MuiIconButton"}),{edge:o=!1,children:i,className:s,color:c="default",disabled:a=!1,disableFocusRipple:l=!1,size:u="medium"}=r,p=ke(r,Ye),f=C({},r,{edge:o,color:c,disabled:a,disableFocusRipple:l,size:u}),h=Ze(f);return E.jsx(et,C({className:Te(h.root,s),centerRipple:!0,focusRipple:!l,disabled:a,ref:n},p,{ownerState:f,children:i}))});function tt(e){return we("MuiInputAdornment",e)}const se=Ie("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var ce;const nt=["children","className","component","disablePointerEvents","disableTypography","position","variant"],ot=(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${k(n.position)}`],n.disablePointerEvents===!0&&t.disablePointerEvents,t[n.variant]]},rt=e=>{const{classes:t,disablePointerEvents:n,hiddenLabel:r,position:o,size:i,variant:s}=e,c={root:["root",n&&"disablePointerEvents",o&&`position${k(o)}`,s,r&&"hiddenLabel",i&&`size${k(i)}`]};return Ee(c,tt,t)},it=Se("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:ot})(({theme:e,ownerState:t})=>C({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},t.variant==="filled"&&{[`&.${se.positionStart}&:not(.${se.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),vn=x.forwardRef(function(t,n){const r=Ce({props:t,name:"MuiInputAdornment"}),{children:o,className:i,component:s="div",disablePointerEvents:c=!1,disableTypography:a=!1,position:l,variant:u}=r,p=ke(r,nt),f=Ve()||{};let h=u;u&&f.variant,f&&!h&&(h=f.variant);const y=C({},r,{hiddenLabel:f.hiddenLabel,size:f.size,disablePointerEvents:c,position:l,variant:h}),b=rt(y);return E.jsx(Ge.Provider,{value:null,children:E.jsx(it,C({as:s,ownerState:y,className:Te(b.root,i),ref:n},p,{children:typeof o=="string"&&!a?E.jsx(We,{color:"text.secondary",children:o}):E.jsxs(x.Fragment,{children:[l==="start"?ce||(ce=E.jsx("span",{className:"notranslate",children:"​"})):null,o]})}))})}),Pe=Object.freeze({left:0,top:0,width:16,height:16}),B=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Y=Object.freeze({...Pe,...B}),Q=Object.freeze({...Y,body:"",hidden:!1});function st(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function ae(e,t){const n=st(e,t);for(const r in Q)r in B?r in e&&!(r in n)&&(n[r]=B[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function ct(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function i(s){if(n[s])return o[s]=[];if(!(s in o)){o[s]=null;const c=r[s]&&r[s].parent,a=c&&i(c);a&&(o[s]=[c].concat(a))}return o[s]}return Object.keys(n).concat(Object.keys(r)).forEach(i),o}function at(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let i={};function s(c){i=ae(r[c]||o[c],i)}return s(t),n.forEach(s),ae(e,i)}function je(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=ct(e);for(const o in r){const i=r[o];i&&(t(o,at(e,o,i)),n.push(o))}return n}const L=/^[a-z0-9]+(-[a-z0-9]+)*$/,_=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),a=o.pop(),l={provider:o.length>0?o[0]:r,prefix:a,name:c};return t&&!N(l)?null:l}const i=o[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!N(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:i};return t&&!N(c,n)?null:c}return null},N=(e,t)=>e?!!((e.provider===""||e.provider.match(L))&&(t&&e.prefix===""||e.prefix.match(L))&&e.name.match(L)):!1,lt={provider:"",aliases:{},not_found:{},...Pe};function H(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Me(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!H(e,lt))return null;const n=t.icons;for(const o in n){const i=n[o];if(!o.match(L)||typeof i.body!="string"||!H(i,Q))return null}const r=t.aliases||Object.create(null);for(const o in r){const i=r[o],s=i.parent;if(!o.match(L)||typeof s!="string"||!n[s]&&!r[s]||!H(i,Q))return null}return t}const le=Object.create(null);function ut(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function P(e,t){const n=le[e]||(le[e]=Object.create(null));return n[t]||(n[t]=ut(e,t))}function Z(e,t){return Me(t)?je(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function ft(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let R=!1;function Le(e){return typeof e=="boolean"&&(R=e),R}function ue(e){const t=typeof e=="string"?_(e,!0,R):e;if(t){const n=P(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function dt(e,t){const n=_(e,!0,R);if(!n)return!1;const r=P(n.provider,n.prefix);return ft(r,n.name,t)}function pt(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),R&&!t&&!e.prefix){let o=!1;return Me(e)&&(e.prefix="",je(e,(i,s)=>{s&&dt(i,s)&&(o=!0)})),o}const n=e.prefix;if(!N({provider:t,prefix:n,name:"a"}))return!1;const r=P(t,n);return!!Z(r,e)}const Oe=Object.freeze({width:null,height:null}),Re=Object.freeze({...Oe,...B}),ht=/(-?[0-9.]*[0-9]+[0-9.]*)/g,gt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function fe(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(ht);if(r===null||!r.length)return e;const o=[];let i=r.shift(),s=gt.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?o.push(i):o.push(Math.ceil(c*t*n)/n)}else o.push(i);if(i=r.shift(),i===void 0)return o.join("");s=!s}}function mt(e,t="defs"){let n="";const r=e.indexOf("<"+t);for(;r>=0;){const o=e.indexOf(">",r),i=e.indexOf("</"+t);if(o===-1||i===-1)break;const s=e.indexOf(">",i);if(s===-1)break;n+=e.slice(o+1,i).trim(),e=e.slice(0,r).trim()+e.slice(s+1)}return{defs:n,content:e}}function yt(e,t){return e?"<defs>"+e+"</defs>"+t:t}function bt(e,t,n){const r=mt(e);return yt(r.defs,t+r.content+n)}const vt=e=>e==="unset"||e==="undefined"||e==="none";function xt(e,t){const n={...Y,...e},r={...Re,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(b=>{const d=[],g=b.hFlip,S=b.vFlip;let v=b.rotate;g?S?v+=2:(d.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),d.push("scale(-1 1)"),o.top=o.left=0):S&&(d.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),d.push("scale(1 -1)"),o.top=o.left=0);let I;switch(v<0&&(v-=Math.floor(v/4)*4),v=v%4,v){case 1:I=o.height/2+o.top,d.unshift("rotate(90 "+I.toString()+" "+I.toString()+")");break;case 2:d.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:I=o.width/2+o.left,d.unshift("rotate(-90 "+I.toString()+" "+I.toString()+")");break}v%2===1&&(o.left!==o.top&&(I=o.left,o.left=o.top,o.top=I),o.width!==o.height&&(I=o.width,o.width=o.height,o.height=I)),d.length&&(i=bt(i,'<g transform="'+d.join(" ")+'">',"</g>"))});const s=r.width,c=r.height,a=o.width,l=o.height;let u,p;s===null?(p=c===null?"1em":c==="auto"?l:c,u=fe(p,a/l)):(u=s==="auto"?a:s,p=c===null?fe(u,l/a):c==="auto"?l:c);const f={},h=(b,d)=>{vt(d)||(f[b]=d.toString())};h("width",u),h("height",p);const y=[o.left,o.top,a,l];return f.viewBox=y.join(" "),{attributes:f,viewBox:y,body:i}}const It=/\sid="(\S+)"/g,wt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let St=0;function Ct(e,t=wt){const n=[];let r;for(;r=It.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const s=typeof t=="function"?t(i):t+(St++).toString(),c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+s+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}const V=Object.create(null);function kt(e,t){V[e]=t}function G(e){return V[e]||V[""]}function ee(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const te=Object.create(null),M=["https://api.simplesvg.com","https://api.unisvg.com"],$=[];for(;M.length>0;)M.length===1||Math.random()>.5?$.push(M.shift()):$.push(M.pop());te[""]=ee({resources:["https://api.iconify.design"].concat($)});function Tt(e,t){const n=ee(t);return n===null?!1:(te[e]=n,!0)}function ne(e){return te[e]}const Et=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let de=Et();function Pt(e,t){const n=ne(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(s=>{o=Math.max(o,s.length)});const i=t+".json?icons=";r=n.maxURL-o-n.path.length-i.length}return r}function jt(e){return e===404}const Mt=(e,t,n)=>{const r=[],o=Pt(e,t),i="icons";let s={type:i,provider:e,prefix:t,icons:[]},c=0;return n.forEach((a,l)=>{c+=a.length+1,c>=o&&l>0&&(r.push(s),s={type:i,provider:e,prefix:t,icons:[]},c=a.length),s.icons.push(a)}),r.push(s),r};function Lt(e){if(typeof e=="string"){const t=ne(e);if(t)return t.path}return"/"}const Ot=(e,t,n)=>{if(!de){n("abort",424);return}let r=Lt(t.provider);switch(t.type){case"icons":{const i=t.prefix,c=t.icons.join(","),a=new URLSearchParams({icons:c});r+=i+".json?"+a.toString();break}case"custom":{const i=t.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let o=503;de(e+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(jt(s)?"abort":"next",s)});return}return o=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",o)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",o)})},Rt={prepare:Mt,send:Ot};function At(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,i)=>o.provider!==i.provider?o.provider.localeCompare(i.provider):o.prefix!==i.prefix?o.prefix.localeCompare(i.prefix):o.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const i=o.provider,s=o.prefix,c=o.name,a=n[i]||(n[i]=Object.create(null)),l=a[s]||(a[s]=P(i,s));let u;c in l.icons?u=t.loaded:s===""||l.missing.has(c)?u=t.missing:u=t.pending;const p={provider:i,prefix:s,name:c};u.push(p)}),t}function Ae(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function Ft(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(a=>{if(a.prefix!==o)return!0;const l=a.name;if(e.icons[l])s.loaded.push({provider:r,prefix:o,name:l});else if(e.missing.has(l))s.missing.push({provider:r,prefix:o,name:l});else return n=!0,!0;return!1}),s.pending.length!==c&&(n||Ae([e],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let zt=0;function Nt(e,t,n){const r=zt++,o=Ae.bind(null,n,r);if(!t.pending.length)return o;const i={id:r,icons:t,callback:e,abort:o};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),o}function $t(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const i=typeof o=="string"?_(o,t,n):o;i&&r.push(i)}),r}var Bt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function _t(e,t,n,r){const o=e.resources.length,i=e.random?Math.floor(Math.random()*o):e.index;let s;if(e.random){let m=e.resources.slice(0);for(s=[];m.length>1;){const w=Math.floor(Math.random()*m.length);s.push(m[w]),m=m.slice(0,w).concat(m.slice(w+1))}s=s.concat(m)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const c=Date.now();let a="pending",l=0,u,p=null,f=[],h=[];typeof r=="function"&&h.push(r);function y(){p&&(clearTimeout(p),p=null)}function b(){a==="pending"&&(a="aborted"),y(),f.forEach(m=>{m.status==="pending"&&(m.status="aborted")}),f=[]}function d(m,w){w&&(h=[]),typeof m=="function"&&h.push(m)}function g(){return{startTime:c,payload:t,status:a,queriesSent:l,queriesPending:f.length,subscribe:d,abort:b}}function S(){a="failed",h.forEach(m=>{m(void 0,u)})}function v(){f.forEach(m=>{m.status==="pending"&&(m.status="aborted")}),f=[]}function I(m,w,j){const F=w!=="success";switch(f=f.filter(T=>T!==m),a){case"pending":break;case"failed":if(F||!e.dataAfterTimeout)return;break;default:return}if(w==="abort"){u=j,S();return}if(F){u=j,f.length||(s.length?U():S());return}if(y(),v(),!e.random){const T=e.resources.indexOf(m.resource);T!==-1&&T!==e.index&&(e.index=T)}a="completed",h.forEach(T=>{T(j)})}function U(){if(a!=="pending")return;y();const m=s.shift();if(m===void 0){if(f.length){p=setTimeout(()=>{y(),a==="pending"&&(v(),S())},e.timeout);return}S();return}const w={status:"pending",resource:m,callback:(j,F)=>{I(w,j,F)}};f.push(w),l++,p=setTimeout(U,e.rotate),n(m,t,w.callback)}return setTimeout(U),g}function Fe(e){const t={...Bt,...e};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,a,l){const u=_t(t,c,a,(p,f)=>{r(),l&&l(p,f)});return n.push(u),u}function i(c){return n.find(a=>c(a))||null}return{query:o,find:i,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function pe(){}const q=Object.create(null);function Dt(e){if(!q[e]){const t=ne(e);if(!t)return;const n=Fe(t),r={config:t,redundancy:n};q[e]=r}return q[e]}function Ut(e,t,n){let r,o;if(typeof e=="string"){const i=G(e);if(!i)return n(void 0,424),pe;o=i.send;const s=Dt(e);s&&(r=s.redundancy)}else{const i=ee(e);if(i){r=Fe(i);const s=e.resources?e.resources[0]:"",c=G(s);c&&(o=c.send)}}return!r||!o?(n(void 0,424),pe):r.query(t,o,n)().abort}const he="iconify2",A="iconify",ze=A+"-count",ge=A+"-version",Ne=36e5,Ht=168,qt=50;function W(e,t){try{return e.getItem(t)}catch{}}function oe(e,t,n){try{return e.setItem(t,n),!0}catch{}}function me(e,t){try{e.removeItem(t)}catch{}}function J(e,t){return oe(e,ze,t.toString())}function K(e){return parseInt(W(e,ze))||0}const D={local:!0,session:!0},$e={local:new Set,session:new Set};let re=!1;function Qt(e){re=e}let z=typeof window>"u"?{}:window;function Be(e){const t=e+"Storage";try{if(z&&z[t]&&typeof z[t].length=="number")return z[t]}catch{}D[e]=!1}function _e(e,t){const n=Be(e);if(!n)return;const r=W(n,ge);if(r!==he){if(r){const c=K(n);for(let a=0;a<c;a++)me(n,A+a.toString())}oe(n,ge,he),J(n,0);return}const o=Math.floor(Date.now()/Ne)-Ht,i=c=>{const a=A+c.toString(),l=W(n,a);if(typeof l=="string"){try{const u=JSON.parse(l);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,c))return!0}catch{}me(n,a)}};let s=K(n);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,J(n,s)):$e[e].add(c))}function De(){if(!re){Qt(!0);for(const e in D)_e(e,t=>{const n=t.data,r=t.provider,o=n.prefix,i=P(r,o);if(!Z(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function Vt(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in D)_e(r,o=>{const i=o.data;return o.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t});return!0}function Gt(e,t){re||De();function n(r){let o;if(!D[r]||!(o=Be(r)))return;const i=$e[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=K(o),s>=qt||!J(o,s+1))return;const c={cached:Math.floor(Date.now()/Ne),provider:e.provider,data:t};return oe(o,A+s.toString(),JSON.stringify(c))}t.lastModified&&!Vt(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function ye(){}function Wt(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Ft(e)}))}function Jt(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let i;if(!o||!(i=G(n)))return;i.prepare(n,r,o).forEach(c=>{Ut(n,c,a=>{if(typeof a!="object")c.icons.forEach(l=>{e.missing.add(l)});else try{const l=Z(e,a);if(!l.length)return;const u=e.pendingIcons;u&&l.forEach(p=>{u.delete(p)}),Gt(e,a)}catch(l){console.error(l)}Wt(e)})})}))}const Kt=(e,t)=>{const n=$t(e,!0,Le()),r=At(n);if(!r.pending.length){let a=!0;return t&&setTimeout(()=>{a&&t(r.loaded,r.missing,r.pending,ye)}),()=>{a=!1}}const o=Object.create(null),i=[];let s,c;return r.pending.forEach(a=>{const{provider:l,prefix:u}=a;if(u===c&&l===s)return;s=l,c=u,i.push(P(l,u));const p=o[l]||(o[l]=Object.create(null));p[u]||(p[u]=[])}),r.pending.forEach(a=>{const{provider:l,prefix:u,name:p}=a,f=P(l,u),h=f.pendingIcons||(f.pendingIcons=new Set);h.has(p)||(h.add(p),o[l][u].push(p))}),i.forEach(a=>{const{provider:l,prefix:u}=a;o[l][u].length&&Jt(a,o[l][u])}),t?Nt(t,r,i):ye};function Xt(e,t){const n={...e};for(const r in t){const o=t[r],i=typeof o;r in Oe?(o===null||o&&(i==="string"||i==="number"))&&(n[r]=o):i===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const Yt=/[\s,]+/;function Zt(e,t){t.split(Yt).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function en(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(e.slice(0,e.length-n.length));return isNaN(i)?0:(i=i/o,i%1===0?r(i):0)}}return t}function tn(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function nn(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function on(e){return"data:image/svg+xml,"+nn(e)}function rn(e){return'url("'+on(e)+'")'}let O;function sn(){try{O=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{O=null}}function cn(e){return O===void 0&&sn(),O?O.createHTML(e):e}const Ue={...Re,inline:!1},an={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},ln={display:"inline-block"},X={backgroundColor:"currentColor"},He={backgroundColor:"transparent"},be={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},ve={WebkitMask:X,mask:X,background:He};for(const e in ve){const t=ve[e];for(const n in be)t[e+n]=be[n]}const un={...Ue,inline:!0};function xe(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const fn=(e,t,n)=>{const r=t.inline?un:Ue,o=Xt(r,t),i=t.mode||"svg",s={},c=t.style||{},a={...i==="svg"?an:{}};if(n){const d=_(n,!1,!0);if(d){const g=["iconify"],S=["provider","prefix"];for(const v of S)d[v]&&g.push("iconify--"+d[v]);a.className=g.join(" ")}}for(let d in t){const g=t[d];if(g!==void 0)switch(d){case"icon":case"style":case"children":case"onLoad":case"mode":case"ssr":break;case"_ref":a.ref=g;break;case"className":a[d]=(a[d]?a[d]+" ":"")+g;break;case"inline":case"hFlip":case"vFlip":o[d]=g===!0||g==="true"||g===1;break;case"flip":typeof g=="string"&&Zt(o,g);break;case"color":s.color=g;break;case"rotate":typeof g=="string"?o[d]=en(g):typeof g=="number"&&(o[d]=g);break;case"ariaHidden":case"aria-hidden":g!==!0&&g!=="true"&&delete a["aria-hidden"];break;default:r[d]===void 0&&(a[d]=g)}}const l=xt(e,o),u=l.attributes;if(o.inline&&(s.verticalAlign="-0.125em"),i==="svg"){a.style={...s,...c},Object.assign(a,u);let d=0,g=t.id;return typeof g=="string"&&(g=g.replace(/-/g,"_")),a.dangerouslySetInnerHTML={__html:cn(Ct(l.body,g?()=>g+"ID"+d++:"iconifyReact"))},x.createElement("svg",a)}const{body:p,width:f,height:h}=e,y=i==="mask"||(i==="bg"?!1:p.indexOf("currentColor")!==-1),b=tn(p,{...u,width:f+"",height:h+""});return a.style={...s,"--svg":rn(b),width:xe(u.width),height:xe(u.height),...ln,...y?X:He,...c},x.createElement("span",a)};Le(!0);kt("",Rt);if(typeof document<"u"&&typeof window<"u"){De();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!pt(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Tt(n,o)||console.error(r)}catch{console.error(r)}}}}function qe(e){const[t,n]=x.useState(!!e.ssr),[r,o]=x.useState({});function i(h){if(h){const y=e.icon;if(typeof y=="object")return{name:"",data:y};const b=ue(y);if(b)return{name:y,data:b}}return{name:""}}const[s,c]=x.useState(i(!!e.ssr));function a(){const h=r.callback;h&&(h(),o({}))}function l(h){if(JSON.stringify(s)!==JSON.stringify(h))return a(),c(h),!0}function u(){var h;const y=e.icon;if(typeof y=="object"){l({name:"",data:y});return}const b=ue(y);if(l({name:y,data:b}))if(b===void 0){const d=Kt([y],u);o({callback:d})}else b&&((h=e.onLoad)===null||h===void 0||h.call(e,y))}x.useEffect(()=>(n(!0),a),[]),x.useEffect(()=>{t&&u()},[e.icon,t]);const{name:p,data:f}=s;return f?fn({...Y,...f},e,p):e.children?e.children:x.createElement("span",{})}const dn=x.forwardRef((e,t)=>qe({...e,_ref:t}));x.forwardRef((e,t)=>qe({inline:!0,...e,_ref:t}));const xn=({icon:e,width:t=20,sx:n,...r})=>{const o={width:t,height:t,flexShrink:0,display:"inline-flex"};return E.jsx(Je,{component:dn,icon:e,sx:{...o,...n},...r})};export{bn as I,xn as a,vn as b};

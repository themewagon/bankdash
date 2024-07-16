import{g as q,a as N,q as h,s as m,c as o,_ as l,t as x,r as M,u as z,b as D,h as T,j as s,d as U,e as O,w as A,x as K}from"./index-FKFKMd_Y.js";import{S as w}from"./Stack-mkp1rc4M.js";import"./styled-C8Jpgrk1.js";function E(r){return q("MuiLinearProgress",r)}N("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const W=["className","color","value","valueBuffer","variant"];let c=r=>r,$,k,L,_,B,I;const v=4,X=h($||($=c`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),G=h(k||(k=c`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),H=h(L||(L=c`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),F=r=>{const{classes:a,variant:e,color:t}=r,p={root:["root",`color${o(t)}`,e],dashed:["dashed",`dashedColor${o(t)}`],bar1:["bar",`barColor${o(t)}`,(e==="indeterminate"||e==="query")&&"bar1Indeterminate",e==="determinate"&&"bar1Determinate",e==="buffer"&&"bar1Buffer"],bar2:["bar",e!=="buffer"&&`barColor${o(t)}`,e==="buffer"&&`color${o(t)}`,(e==="indeterminate"||e==="query")&&"bar2Indeterminate",e==="buffer"&&"bar2Buffer"]};return O(p,E,a)},C=(r,a)=>a==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${a}Bg`]:r.palette.mode==="light"?A(r.palette[a].main,.62):K(r.palette[a].main,.5),J=m("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.root,a[`color${o(e.color)}`],a[e.variant]]}})(({ownerState:r,theme:a})=>l({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:C(a,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),Q=m("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.dashed,a[`dashedColor${o(e.color)}`]]}})(({ownerState:r,theme:a})=>{const e=C(a,r.color);return l({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${e} 0%, ${e} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},x(_||(_=c`
    animation: ${0} 3s infinite linear;
  `),H)),V=m("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.bar,a[`barColor${o(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&a.bar1Indeterminate,e.variant==="determinate"&&a.bar1Determinate,e.variant==="buffer"&&a.bar1Buffer]}})(({ownerState:r,theme:a})=>l({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(a.vars||a).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${v}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${v}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&x(B||(B=c`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),X)),Y=m("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.bar,a[`barColor${o(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&a.bar2Indeterminate,e.variant==="buffer"&&a.bar2Buffer]}})(({ownerState:r,theme:a})=>l({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(a.vars||a).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:C(a,r.color),transition:`transform .${v}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&x(I||(I=c`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),G)),Z=M.forwardRef(function(a,e){const t=z({props:a,name:"MuiLinearProgress"}),{className:p,color:R="primary",value:g,valueBuffer:y,variant:i="indeterminate"}=t,j=D(t,W),u=l({},t,{color:R,variant:i}),d=F(u),P=T(),f={},b={bar1:{},bar2:{}};if((i==="determinate"||i==="buffer")&&g!==void 0){f["aria-valuenow"]=Math.round(g),f["aria-valuemin"]=0,f["aria-valuemax"]=100;let n=g-100;P&&(n=-n),b.bar1.transform=`translateX(${n}%)`}if(i==="buffer"&&y!==void 0){let n=(y||0)-100;P&&(n=-n),b.bar2.transform=`translateX(${n}%)`}return s.jsxs(J,l({className:U(d.root,p),ownerState:u,role:"progressbar"},f,{ref:e},j,{children:[i==="buffer"?s.jsx(Q,{className:d.dashed,ownerState:u}):null,s.jsx(V,{className:d.bar1,ownerState:u,style:b.bar1}),i==="determinate"?null:s.jsx(Y,{className:d.bar2,ownerState:u,style:b.bar2})]}))}),er=({sx:r,...a})=>s.jsx(w,{sx:{px:5,width:1,flexGrow:1,minHeight:1,display:"flex",alignItems:"center",justifyContent:"center",...r},...a,children:s.jsx(Z,{color:"primary",sx:{width:1,maxWidth:360}})});export{er as default};

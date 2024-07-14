import{r as l,g as D,a as I,s as W,c as g,_ as a,u as $,G as H,b as N,j as A,d as P,e as w,a0 as E,i as G}from"./index-C7G9Mmg2.js";import{u as J}from"./Box-DDCPHIj0.js";const F={};function X(t,e){const r=l.useRef(F);return r.current===F&&(r.current=t(e)),r}const Y=[];function Z(t){l.useEffect(t,Y)}class b{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new b}start(e,r){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,r()},e)}}function Tt(){const t=X(b.create).current;return Z(t.disposeEffect),t}let x=!0,B=!1;const q=new b,Q={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function S(t){const{type:e,tagName:r}=t;return!!(r==="INPUT"&&Q[e]&&!t.readOnly||r==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function tt(t){t.metaKey||t.altKey||t.ctrlKey||(x=!0)}function V(){x=!1}function et(){this.visibilityState==="hidden"&&B&&(x=!0)}function rt(t){t.addEventListener("keydown",tt,!0),t.addEventListener("mousedown",V,!0),t.addEventListener("pointerdown",V,!0),t.addEventListener("touchstart",V,!0),t.addEventListener("visibilitychange",et,!0)}function nt(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch{}return x||S(e)}function ot(){const t=l.useCallback(n=>{n!=null&&rt(n.ownerDocument)},[]),e=l.useRef(!1);function r(){return e.current?(B=!0,q.start(100,()=>{B=!1}),e.current=!1,!0):!1}function o(n){return nt(n)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:o,onBlur:r,ref:t}}function st(t){return D("MuiTypography",t)}I("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const at=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],it=t=>{const{align:e,gutterBottom:r,noWrap:o,paragraph:n,variant:s,classes:c}=t,i={root:["root",s,t.align!=="inherit"&&`align${g(e)}`,r&&"gutterBottom",o&&"noWrap",n&&"paragraph"]};return w(i,st,c)},ut=W("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],r.align!=="inherit"&&e[`align${g(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})(({theme:t,ownerState:e})=>a({margin:0},e.variant==="inherit"&&{font:"inherit"},e.variant!=="inherit"&&t.typography[e.variant],e.align!=="inherit"&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),M={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},lt={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},ct=t=>lt[t]||t,pt=l.forwardRef(function(e,r){const o=$({props:e,name:"MuiTypography"}),n=ct(o.color),s=H(a({},o,{color:n})),{align:c="inherit",className:i,component:p,gutterBottom:v=!1,noWrap:T=!1,paragraph:h=!1,variant:u="body1",variantMapping:f=M}=s,m=N(s,at),y=a({},s,{align:c,color:n,className:i,component:p,gutterBottom:v,noWrap:T,paragraph:h,variant:u,variantMapping:f}),C=p||(h?"p":f[u]||M[u])||"span",R=it(y);return A.jsx(ut,a({as:C,ref:r,ownerState:y,className:P(R.root,i)},m))});function ht(t){return D("MuiLink",t)}const dt=I("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),U={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},ft=t=>U[t]||t,mt=({theme:t,ownerState:e})=>{const r=ft(e.color),o=E(t,`palette.${r}`,!1)||e.color,n=E(t,`palette.${r}Channel`);return"vars"in t&&n?`rgba(${n} / 0.4)`:G(o,.4)},yt=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],gt=t=>{const{classes:e,component:r,focusVisible:o,underline:n}=t,s={root:["root",`underline${g(n)}`,r==="button"&&"button",o&&"focusVisible"]};return w(s,ht,e)},bt=W(pt,{name:"MuiLink",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[`underline${g(r.underline)}`],r.component==="button"&&e.button]}})(({theme:t,ownerState:e})=>a({},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},e.underline==="always"&&a({textDecoration:"underline"},e.color!=="inherit"&&{textDecorationColor:mt({theme:t,ownerState:e})},{"&:hover":{textDecorationColor:"inherit"}}),e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${dt.focusVisible}`]:{outline:"auto"}})),Ct=l.forwardRef(function(e,r){const o=$({props:e,name:"MuiLink"}),{className:n,color:s="primary",component:c="a",onBlur:i,onFocus:p,TypographyClasses:v,underline:T="always",variant:h="inherit",sx:u}=o,f=N(o,yt),{isFocusVisibleRef:m,onBlur:y,onFocus:C,ref:R}=ot(),[j,L]=l.useState(!1),K=J(r,R),O=d=>{y(d),m.current===!1&&L(!1),i&&i(d)},_=d=>{C(d),m.current===!0&&L(!0),p&&p(d)},k=a({},o,{color:s,component:c,focusVisible:j,underline:T,variant:h}),z=gt(k);return A.jsx(bt,a({color:s,className:P(z.root,n),classes:v,component:c,onBlur:O,onFocus:_,ref:K,ownerState:k,variant:h,sx:[...Object.keys(U).includes(s)?[]:[{color:s}],...Array.isArray(u)?u:[u]]},f))});export{Ct as L,pt as T,ot as a,b,X as c,Z as d,Tt as u};

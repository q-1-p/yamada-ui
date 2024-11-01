import{j as e}from"./extends-CwFRzn3r.js";import{r as u}from"./index-BwDkhjyp.js";import{p as q,b as d,c as b,d as R,m as J,a as K}from"./factory-CBW6YcbY.js";import{f as I}from"./forward-ref-BWI-Phbn.js";import{u as Q,R as V}from"./use-ripple-BqSD0U-m.js";import{L as G}from"./loading-DZQf4R8P.js";import{u as W}from"./use-component-style-Givb0biW.js";import{o as X}from"./theme-provider-B8NHi_rL.js";const[Y,Z]=q({name:"ButtonGroupContext",strict:!1}),T=I(({className:n,size:t,variant:s,columnGap:r,direction:o,gap:a,isAttached:i,isDisabled:m,rowGap:f,...y},B)=>{const l=o==="column"||o==="column-reverse",c={display:"inline-flex",flexDirection:o},j=u.useMemo(()=>({size:t,variant:s,isDisabled:m}),[t,s,m]);return i?Object.assign(c,{"> *:first-of-type:not(:last-of-type)":l?{borderBottomRadius:0,marginBlockEnd:"-1px"}:{borderRightRadius:0,marginInlineEnd:"-1px"},"> *:not(:first-of-type):last-of-type":l?{borderTopRadius:0,marginBlockStart:"-1px"}:{borderLeftRadius:0},"> *:not(:first-of-type):not(:last-of-type)":l?{borderRadius:0,marginBlockStart:"-1px"}:{borderRadius:0,marginInlineEnd:"-1px"}}):Object.assign(c,{columnGap:r,gap:a,rowGap:f}),e.jsx(Y,{value:j,children:e.jsx(d.div,{ref:B,className:b("ui-button-group",n),"data-attached":R(i),role:"group",__css:c,...y})})});T.displayName="ButtonGroup";T.__ui__="ButtonGroup";const w=I(({children:n,__isProcessSkip:t,__styles:s,...r},o)=>{const a=Z(),[i,m]=W("Button",{...a,...r},{isProcessSkip:t,styles:s}),{as:f,type:y,className:B,disableRipple:l,isActive:c,isDisabled:j=a==null?void 0:a.isDisabled,isLoading:p,isRounded:h,leftIcon:E,loadingIcon:M,loadingPlacement:N="start",loadingText:v,rightIcon:O,__css:k,...C}=X(m),P=j||p,{ref:A,type:D}=$(f),{onPointerDown:z,...F}=Q({...C,isDisabled:l||P}),H=u.useMemo(()=>{const U="_focus"in i?J(i._focus??{},{zIndex:"fallback(yamcha, 1)"}):{};return{alignItems:"center",appearance:"none",display:"inline-flex",gap:"fallback(2, 0.5rem)",justifyContent:"center",outline:"none",overflow:"hidden",position:"relative",userSelect:"none",verticalAlign:"middle",whiteSpace:"nowrap",...i,...k,...a?{_focus:U}:{},...h?{borderRadius:"fallback(full, 9999px)"}:{}}},[i,k,a,h]),S={children:n,leftIcon:E,rightIcon:O},L={loadingIcon:M,loadingText:v};return e.jsxs(d.button,{ref:K(o,A),as:f,type:y??D,className:b("ui-button",B),"data-active":R(c),"data-loading":R(p),disabled:P,__css:H,...C,onPointerDown:z,children:[p&&N==="start"?e.jsx(_,{className:"ui-button__loading--start",...L}):null,p?v||e.jsx(d.span,{opacity:0,children:e.jsx(x,{...S})}):e.jsx(x,{...S}),p&&N==="end"?e.jsx(_,{className:"ui-button__loading--end",...L}):null,e.jsx(V,{...F})]})});w.displayName="Button";w.__ui__="Button";const _=({className:n,loadingIcon:t,loadingText:s})=>{const r=u.useMemo(()=>({alignItems:"center",display:"flex",fontSize:"1em",lineHeight:"normal",position:s?"relative":"absolute"}),[s]),o=u.useMemo(()=>typeof t=="string"?e.jsx(G,{variant:t,color:"current"}):t||e.jsx(G,{color:"current"}),[t]);return e.jsx(d.div,{className:b("ui-button__loading",n),__css:r,children:o})};_.displayName="ButtonLoading";_.__ui__="ButtonLoading";const x=({children:n,leftIcon:t,rightIcon:s})=>e.jsxs(e.Fragment,{children:[t?e.jsx(g,{children:t}):null,n,s?e.jsx(g,{children:s}):null]});x.displayName="ButtonContent";x.__ui__="ButtonContent";const g=({className:n,children:t,...s})=>e.jsx(d.span,{className:b("ui-button__icon",n),"aria-hidden":!0,alignSelf:"center",display:"inline-flex",flexShrink:0,...s,children:t});g.displayName="ButtonIcon";g.__ui__="ButtonIcon";const $=n=>{const t=u.useRef(!n),s=u.useCallback(o=>{o&&(t.current=o.tagName==="BUTTON")},[]),r=t.current?"button":void 0;return{ref:s,type:r}};export{w as B,T as a};

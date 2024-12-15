import{j as n}from"./jsx-runtime-CfatFE5O.js";import{u as S}from"./index-CZSIMnfE.js";import{r as h}from"./index-ClcD9ViR.js";import{b as E}from"./icon-DeZ7GCXS.js";import{u as sn}from"./index-D-iNr3rb.js";import{A as an,b as p,d as R,c as q,h as M}from"./factory-Bqmz9C5P.js";import{u as en,R as on}from"./use-ripple-DFvMPDyV.js";import{f as H}from"./forward-ref-D13m8o2p.js";import{a as tn}from"./use-component-style-D7fUVUlo.js";import{o as ln}from"./theme-provider-Dit74geM.js";const z=e=>n.jsx(E,{viewBox:"0 0 16 16",...e,children:n.jsx("path",{d:"M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z",fill:"currentColor"})});z.displayName="PaginationEllipsisIcon";z.__ui__="PaginationEllipsisIcon";const B=e=>n.jsx(E,{viewBox:"0 0 16 16",...e,children:n.jsx("path",{d:"M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z",fill:"currentColor"})});B.displayName="PaginationFirstIcon";B.__ui__="PaginationFirstIcon";const G=e=>n.jsx(E,{viewBox:"0 0 16 16",...e,children:n.jsx("path",{d:"M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z",fill:"currentColor"})});G.displayName="PaginationLastIcon";G.__ui__="PaginationLastIcon";const A=e=>n.jsx(E,{viewBox:"0 0 16 16",...e,children:n.jsx("path",{d:"M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z",fill:"currentColor"})});A.displayName="PaginationPrevIcon";A.__ui__="PaginationPrevIcon";const D=e=>n.jsx(E,{viewBox:"0 0 16 16",...e,children:n.jsx("path",{d:"M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z",fill:"currentColor"})});D.displayName="PaginationNextIcon";D.__ui__="PaginationNextIcon";const[rn,cn]=an({name:"PaginationContext",errorMessage:`usePaginationContext returned is 'undefined'. Seems you forgot to wrap the components in "<Pagination />"`}),d=(e,C)=>Array.from({length:C-e+1},(u,r)=>r+e),un=({boundaries:e=1,defaultPage:C=1,isDisabled:u=!1,disabled:r=u,page:v,siblings:I=1,total:i,onChange:L})=>{const t=S(I),s=S(e),[c,o]=sn({defaultValue:C,value:v,onChange:L}),g=h.useMemo(()=>{if(t*2+3+s*2>=i)return d(1,i);const x=Math.max(c-t,s),_=Math.min(c+t,i-s),l=x>s+2,m=_<i-(s+1);if(!l&&m){const w=t*2+s+2;return[...d(1,w),"ellipsis",...d(i-(s-1),i)]}if(l&&!m){const w=s+1+2*t;return[...d(1,s),"ellipsis",...d(i-w,i)]}return[...d(1,s),"ellipsis",...d(x,_),"ellipsis",...d(i-s+1,i)]},[s,t,c,i]),k=h.useCallback(()=>o(1),[o]),N=h.useCallback(()=>o(i),[o,i]),y=h.useCallback(()=>o(a=>a===1?a:a-1),[o]),f=h.useCallback(()=>o(a=>a===i?a:a+1),[o,i]),P=h.useCallback(a=>o(a),[o]);return{currentPage:c,disabled:r,range:g,total:i,onChange:P,onFirst:k,onLast:N,onNext:f,onPrev:y}},mn={ellipsis:n.jsx(z,{}),first:n.jsx(B,{}),last:n.jsx(G,{}),next:n.jsx(D,{}),prev:n.jsx(A,{})},F=H(({className:e,isActive:C,active:u=C,page:r,children:v=mn[r]??r,isDisabled:I,disabled:i=I,disableRipple:L,...t},s)=>{const c=cn(),o=r==="ellipsis",{onPointerDown:g,...k}=en({...t,disabled:L||i||o}),N={alignItems:"center",display:"flex",justifyContent:"center",overflow:"hidden",position:"relative",userSelect:"none",...c.item,...c[r]},y=p[o?"span":"button"];return n.jsxs(y,{ref:s,...o?{}:{type:"button","data-disabled":R(i),"data-selected":R(u),disabled:i},className:q("ui-pagination__item",o?"ui-pagination__item--ellipsis":void 0,e),tabIndex:o?-1:0,__css:N,...t,onPointerDown:g,children:[v,n.jsx(on,{...k})]})});F.displayName="PaginationItem";F.__ui__="PaginationItem";const J=H((e,C)=>{const[u,r]=tn("Pagination",e),{className:v,boundaries:I,component:i=F,defaultPage:L,isDisabled:t,disabled:s=t,page:c,siblings:o,total:g,withControls:k=!0,withEdges:N=!1,containerProps:y,controlNextProps:f,controlPrevProps:P,controlProps:a,edgeFirstProps:x,edgeLastProps:_,edgeProps:l,itemProps:m,onChange:w,...K}=ln(r),Z=S(k),T=S(N),{currentPage:j,range:V,onChange:$,onFirst:O,onLast:Q,onNext:U,onPrev:W}=un({boundaries:I,defaultPage:L,disabled:s,page:c,siblings:o,total:g,onChange:w}),X=h.useMemo(()=>V.map((b,nn)=>n.jsx(p.li,{children:n.jsx(i,{"aria-label":b!=="ellipsis"?`Go to page ${b}`:void 0,active:j===b,disabled:s,...m,page:b,onClick:M(m==null?void 0:m.onClick,b!=="ellipsis"?()=>$(b):void 0)})},nn)),[i,j,s,$,V,m]),Y={...u.container};return n.jsx(rn,{value:u,children:n.jsx(p.nav,{ref:C,className:q("ui-pagination",v),"data-disabled":R(s),__css:Y,...y,children:n.jsxs(p.ul,{className:"ui-pagination-inner","data-disabled":R(s),__css:{alignItems:"center",display:"flex",...u.inner},...K,children:[T?n.jsx(p.li,{children:n.jsx(i,{className:"ui-pagination__item--first","aria-label":"Go to first page",disabled:s||j===1,page:"first",...l,...x,onClick:M(l==null?void 0:l.onClick,x==null?void 0:x.onClick,O)})}):null,Z?n.jsx(p.li,{children:n.jsx(i,{className:"ui-pagination__item--prev","aria-label":"Go to previous page",disabled:s||j===1,page:"prev",...a,...P,onClick:M(a==null?void 0:a.onClick,P==null?void 0:P.onClick,W)})}):null,X,Z?n.jsx(p.li,{children:n.jsx(i,{className:"ui-pagination__item--next","aria-label":"Go to next page",disabled:s||j===g,page:"next",...a,...f,onClick:M(a==null?void 0:a.onClick,f==null?void 0:f.onClick,U)})}):null,T?n.jsx(p.li,{children:n.jsx(i,{className:"ui-pagination__item--last","aria-label":"Go to last page",disabled:s||j===g,page:"last",...l,..._,onClick:M(l==null?void 0:l.onClick,_==null?void 0:_.onClick,Q)})}):null]})})})});J.displayName="Pagination";J.__ui__="Pagination";export{J as P};

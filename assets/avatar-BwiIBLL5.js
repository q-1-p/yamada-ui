import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as C}from"./index-BwDkhjyp.js";import{b as y}from"./icon-DBsGF4uC.js";import{u as I}from"./use-image-xHT-CwHT.js";import{b as g,l as w,c as F,d as E,h as P}from"./factory-CtEVzbYf.js";import{f as S}from"./forward-ref-BmTAT9U5.js";import{a as M}from"./use-component-style-D3qgkwVB.js";import{o as R}from"./theme-provider-DwNsBv-g.js";const T=t=>e.jsxs(y,{viewBox:"0 0 128 128",color:["white","black"],width:"100%",height:"100%",className:"ui-avatar__icon",...t,children:[e.jsx("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),e.jsx("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]}),$=t=>{const a=t.trim().split(" "),s=a[0]??"",r=a.length>1?a[a.length-1]:"";return s&&r?`${s.charAt(0)}${r.charAt(0)}`:s.charAt(0)},B=({name:t,format:a=$,...s})=>{const o={...W().name};return e.jsx(g.div,{className:"ui-avatar__name",role:"img","aria-label":t,__css:o,...s,children:t?a(t):null})},[O,W]=w({strict:!1,name:"AvatarContext"}),U=S((t,a)=>{const[s,r]=M("Avatar",t),{className:o,src:i,srcSet:c,name:m,loading:n,alt:d,icon:u,ignoreFallback:f,referrerPolicy:x,borderRadius:l="fallback(full, 9999px)",rounded:h="fallback(full, 9999px)",onError:p,onLoad:A,crossOrigin:v,format:j,children:b,..._}=R(r),[L,N]=C.useState(!1),k={position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",flexShrink:0,textAlign:"center",textTransform:"uppercase",fontWeight:"medium",...s.container};return e.jsx(O,{value:s,children:e.jsxs(g.span,{ref:a,className:F("ui-avatar",o),"data-loaded":E(L),borderRadius:l,rounded:h,__css:k,..._,children:[e.jsx(Z,{src:i,alt:d,srcSet:c,loading:n,borderRadius:l,rounded:h,onLoad:P(A,()=>N(!0)),onError:p,crossOrigin:v,format:j,name:m,icon:u,ignoreFallback:f,referrerPolicy:x}),b]})})}),Z=({src:t,alt:a,srcSet:s,onError:r,onLoad:o,format:i,borderRadius:c,rounded:m,name:n,loading:d,icon:u=e.jsx(T,{}),ignoreFallback:f,crossOrigin:x,referrerPolicy:l})=>{const p=I({src:t,onLoad:o,onError:r,crossOrigin:x,ignoreFallback:f})==="loaded";if(!t||!p)return n?e.jsx(B,{name:n,format:i}):C.cloneElement(u,{role:"img","aria-label":a??"Avatar Icon"});const v={width:"100%",height:"100%",objectFit:"cover"};return e.jsx(g.img,{className:"ui-avatar__image",src:t,srcSet:s,alt:a??n,loading:d,referrerPolicy:l,borderRadius:c,rounded:m,__css:v})};export{U as A,W as u};

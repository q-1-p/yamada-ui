import{j as x}from"./jsx-runtime-CfatFE5O.js";import{A as j}from"./index-r0TXmcNt.js";import{m as P}from"./forward-ref-2BKBy0Yi.js";import{u as v}from"./use-component-style-CLSKeq_H.js";import{o as N}from"./theme-provider-CNI9L2WW.js";import{m as h}from"./factory-ep9rrzy9.js";import{c as A}from"./factory-COau3w21.js";import{t as O,a as R}from"./utils-COso-ZNO.js";const g={enter:({delay:s,duration:o,enter:t,transition:a,transitionEnd:e}={})=>({opacity:1,scale:1,transition:O(a==null?void 0:a.enter)(s,o),transitionEnd:e==null?void 0:e.enter,...t}),exit:({delay:s,duration:o,exit:t,reverse:a,scale:e,transition:r,transitionEnd:m}={})=>({opacity:0,transition:R(r==null?void 0:r.exit)(s,o),...a?{scale:e,transitionEnd:m==null?void 0:m.exit}:{transitionEnd:{scale:e,...m==null?void 0:m.exit}},...t})},w={animate:"enter",exit:"exit",initial:"exit",variants:g},i=P((s,o)=>{const[t,a]=v("ScaleFade",s);let{className:e,delay:r,duration:m,isOpen:u,open:c,reverse:f,scale:y,transition:F,transitionEnd:S,unmountOnExit:p,..._}=N(a);const d=c||p?"enter":"exit";c??(c=u);const l={delay:r,duration:m,reverse:f,scale:y,transition:F,transitionEnd:S};return c=p?c&&p:!0,x.jsx(j,{custom:l,children:c?x.jsx(h.div,{ref:o,className:A("ui-scale-fade",e),custom:l,...w,animate:d,__css:t,..._}):null})});i.displayName="ScaleFade";i.__ui__="ScaleFade";export{i as S,w as s};

import{j as i}from"./jsx-runtime-Nms4Y4qS.js";import{A as y}from"./index-Ms_xn5rh.js";import{m as d,M as j}from"./motion-BbiaHiM5.js";import{u as F}from"./use-component-style-CvJcpWCJ.js";import{o as P}from"./theme-provider-pE-Jw8XJ.js";import{c as h}from"./factory-CZghEhwx.js";import{a as A,t as M}from"./utils-BSzVtHmY.js";const N={enter:({transition:e,transitionEnd:t,delay:s,duration:m,enter:o}={})=>({opacity:1,transition:A(e==null?void 0:e.enter)(s,m),transitionEnd:t==null?void 0:t.enter,...o}),exit:({transition:e,transitionEnd:t,delay:s,duration:m,exit:o}={})=>({opacity:0,transition:M(e==null?void 0:e.exit)(s,m),transitionEnd:t==null?void 0:t.exit,...o})},O={initial:"exit",animate:"enter",exit:"exit",variants:N},T=d((e,t)=>{const[s,m]=F("Fade",e);let{unmountOnExit:o,isOpen:r,transition:c,transitionEnd:p,delay:x,duration:f,className:u,...l}=P(m);const n=r||o?"enter":"exit",a={transition:c,transitionEnd:p,delay:x,duration:f};return r=o?r&&o:!0,i.jsx(y,{custom:a,children:r?i.jsx(j,{ref:t,className:h("ui-fade",u),custom:a,...O,animate:n,__css:s,...l}):null})});export{T as F,O as f};

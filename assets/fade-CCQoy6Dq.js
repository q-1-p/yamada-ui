import{j as s}from"./jsx-runtime-Nms4Y4qS.js";import{A as i}from"./index-NLnnGRqa.js";import{M as u}from"./motion-DCl-xI7h.js";import{f as w}from"./forward-ref-BmTAT9U5.js";import{c as y}from"./factory-CtEVzbYf.js";import{a as A,t as F}from"./utils-CaOb0Y6o.js";const M={enter:({transition:r,transitionEnd:e,delay:t,duration:a,enter:c}={})=>({opacity:1,transition:A(r==null?void 0:r.enter)(t,a),transitionEnd:e==null?void 0:e.enter,...c}),exit:({transition:r,transitionEnd:e,delay:t,duration:a,exit:c}={})=>({opacity:0,transition:F(r==null?void 0:r.exit)(t,a),transitionEnd:e==null?void 0:e.exit,...c})},P={initial:"exit",animate:"enter",exit:"exit",variants:M},g=w(({unmountOnExit:r,isOpen:e,transition:t,transitionEnd:a,delay:c,duration:o,className:f,...x},p)=>{const l=e||r?"enter":"exit",m={transition:t,transitionEnd:a,delay:c,duration:o};e=r?e&&r:!0;const j={w:"100%"};return s.jsx(i,{custom:m,children:e?s.jsx(u,{ref:p,className:y("ui-fade",f),custom:m,...P,animate:l,__css:j,...x}):null})});export{g as F,P as f};

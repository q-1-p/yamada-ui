import{j as p}from"./extends-CwFRzn3r.js";import{A as y,m as F}from"./factory-CmtZP4aZ.js";import{m as _}from"./forward-ref-scR1bmHx.js";import{u as j}from"./use-component-style-_O1yHJxH.js";import{o as P}from"./theme-provider-gLqcKpHk.js";import{c as N}from"./factory-CTJ-ITwV.js";import{t as h,a as v}from"./utils-CgaDd4SB.js";const A={enter:({delay:m,duration:o,enter:s,transition:e,transitionEnd:t}={})=>({opacity:1,transition:h(e==null?void 0:e.enter)(m,o),transitionEnd:t==null?void 0:t.enter,...s}),exit:({delay:m,duration:o,exit:s,transition:e,transitionEnd:t}={})=>({opacity:0,transition:v(e==null?void 0:e.exit)(m,o),transitionEnd:t==null?void 0:t.exit,...s})},O={animate:"enter",exit:"exit",initial:"exit",variants:A},c=_((m,o)=>{const[s,e]=j("Fade",m);let{className:t,delay:x,duration:u,isOpen:a,transition:f,transitionEnd:l,unmountOnExit:r,...n}=P(e);const d=a||r?"enter":"exit",i={delay:x,duration:u,transition:f,transitionEnd:l};return a=r?a&&r:!0,p.jsx(y,{custom:i,children:a?p.jsx(F.div,{ref:o,className:N("ui-fade",t),custom:i,...O,animate:d,__css:s,...n}):null})});c.displayName="Fade";c.__ui__="Fade";export{c as F,O as f};

import{j as x}from"./extends-CwFRzn3r.js";import{r as l}from"./index-BwDkhjyp.js";import{m as w}from"./forward-ref-scR1bmHx.js";import{M as m,a as A,t as C}from"./utils-CBG5DmzQ.js";import{A as H,m as I}from"./factory-BfCzQy-p.js";import{u as M}from"./use-component-style-CMyamFpN.js";import{o as T}from"./theme-provider-DVkG1YcR.js";import{c as R,P as v}from"./factory-CPqzzHTm.js";const B=s=>s!=null&&parseFloat(s.toString())>0,E={enter:({animationOpacity:s,endingHeight:i,transition:e,transitionEnd:t,delay:r,duration:o,enter:n}={})=>({...s?{opacity:1}:{},height:i,transition:A(e==null?void 0:e.enter)(r,o),transitionEnd:t==null?void 0:t.enter,...n}),exit:({animationOpacity:s,startingHeight:i,transition:e,transitionEnd:t,delay:r,duration:o,exit:n}={})=>({...s?{opacity:B(i)?1:0}:{},height:i,transition:C(e==null?void 0:e.exit)(r,o),transitionEnd:t==null?void 0:t.exit,...n})},F={initial:"exit",animate:"enter",exit:"exit",variants:E},Q=w((s,i)=>{const[e,t]=M("Collapse",s);let{unmountOnExit:r,isOpen:o,animationOpacity:n,startingHeight:d,endingHeight:g,transition:c,transitionEnd:y,delay:h,duration:a,className:N,__css:O,...p}=T(t);const[u,P]=l.useState(!1);l.useEffect(()=>{v()&&P(!0)},[]);const S=o||r?"enter":"exit";o=r?o:!0;const _=l.useMemo(()=>u?c||{enter:{height:{duration:a??.3,ease:m.ease},opacity:{duration:a??.4,ease:m.ease}},exit:{height:{duration:a??.3,ease:m.ease},opacity:{duration:a??.4,ease:m.ease}}}:{enter:{duration:0}},[u,a,c]),f={animationOpacity:n,startingHeight:d,endingHeight:g,transition:_,transitionEnd:y,delay:h,duration:a},j={...e,...O};return x.jsx(H,{initial:!1,custom:f,children:o?x.jsx(I.div,{ref:i,className:R("ui-collapse",N),...p,...F,custom:f,animate:S,initial:r?"exit":!1,__css:j,style:{overflow:"hidden",...p.style}}):null})});export{Q as C};

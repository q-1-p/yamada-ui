import{j as u}from"./extends-CwFRzn3r.js";import{r as b}from"./index-BwDkhjyp.js";import{u as _,s as h}from"./use-image-BaSF7u3x.js";import{f as N}from"./forward-ref-BWI-Phbn.js";import{u as P}from"./use-component-style-CMyamFpN.js";import{o as w}from"./theme-provider-DVkG1YcR.js";import{b as p,c as x}from"./factory-CPqzzHTm.js";const q=N((o,t)=>{const[m,{size:d,...k}]=P("Image",o);let{boxSize:e,fit:i,fallback:r,src:I,srcSet:j,loading:l,ignoreFallback:s,crossOrigin:E,className:c,fallbackStrategy:F="beforeLoadOrError",onError:n,onLoad:f,referrerPolicy:S,...a}=w(k);e??(e=d),s=l!=null||s||!r;const g=b.useMemo(()=>({...m,boxSize:e,objectFit:i}),[m,e,i]),y=_({...o,ignoreFallback:s});return h(y,F)?b.isValidElement(r)?r:u.jsx(p.img,{ref:t,className:x("ui-image--fallback",c),src:r,__css:g,...s?{...a,onError:n,onLoad:f}:a}):u.jsx(p.img,{ref:t,src:I,srcSet:j,crossOrigin:E,loading:l,referrerPolicy:S,className:x("ui-image",c),__css:g,...s?{...a,onError:n,onLoad:f}:a})});export{q as I};

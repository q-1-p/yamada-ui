import{r as c}from"./index-BwDkhjyp.js";import{f as v,P as g}from"./factory-CTJ-ITwV.js";import{u as E}from"./theme-provider-gLqcKpHk.js";const l=()=>{var w;const e=c.useRef(0),{theme:t}=E(),n=t.__breakpoints,{containerRef:u,direction:b="down",identifier:p="@media screen"}=((w=t.__config)==null?void 0:w.breakpoint)??{},a=!!u;n||console.warn("useBreakpoint: `breakpoints` is undefined. Seems you forgot to put theme in `breakpoints`");const i=c.useMemo(()=>n?n.queries.map(({breakpoint:f,maxW:r,minMaxQuery:o,minW:s})=>{const k=p==="@media screen"?"@media screen and ":`${p} `,d=(o==null?void 0:o.replace(k,""))??"";return{breakpoint:f,maxW:r,minW:s,query:d}}):[],[n,p]),m=!!i.length,[q,B]=c.useState(()=>{if(!g()||a||!m)return"base";for(const{breakpoint:r,query:o}of i)if(window.matchMedia(o).matches)return r}),h=c.useCallback(f=>{for(const{breakpoint:r,maxW:o,minW:s}of i)if(b!=="up"){if((s??0)<=f)return r}else if(f<=(o??1/0))return r;return"base"},[i,b]);return c.useEffect(()=>{if(!a||!m||!g())return;const r=new ResizeObserver(([o])=>{if(!o)return;cancelAnimationFrame(e.current);const{width:s}=o.contentRect;e.current=requestAnimationFrame(()=>{const k=h(s);B(k)})});return u.current&&r.observe(u.current),()=>{r.disconnect(),cancelAnimationFrame(e.current)}},[m,a,u,h]),c.useEffect(()=>{if(a||!m)return;const f=i.map(({breakpoint:r,query:o})=>{const s=window.matchMedia(o),k=d=>{d.matches&&B(r)};return typeof s.addEventListener=="function"&&s.addEventListener("change",k),()=>{typeof s.removeEventListener=="function"&&s.removeEventListener("change",k)}});return()=>{f.forEach(r=>r())}},[i,m,a]),q},_=e=>{const{theme:t}=E(),n=l();return c.useMemo(()=>V(e)(t,n),[e,t,n])},V=(e={})=>(t,n)=>{var p;t||console.warn("getBreakpointValue: `theme` is undefined.");const u=((p=t==null?void 0:t.__breakpoints)==null?void 0:p.keys)??[];u.length||console.warn("getBreakpointValue: `breakpoints` is undefined.");const b=u.indexOf(n);for(let a=b;0<a;a--){const i=u[a];if(i&&e.hasOwnProperty(i))return e[i]}return e.base},S=e=>{const t=_(e);return c.useState(t)},y=(e,t)=>{const n=l();c.useEffect(()=>{e(n)},[n,...t])},A=(e,t)=>{const n=l();v(()=>{e(n)},[n,...t])};export{S as a,y as b,A as c,_ as d,V as g,l as u};

import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{d as P,a as S}from"./index-BH89NuV_.js";import{b as y,c as E,f as h,B as M,a6 as N,a7 as g}from"./factory-CtEVzbYf.js";import{T as I,R as T,G as C}from"./theme-provider-DwNsBv-g.js";import{r as u}from"./index-BwDkhjyp.js";import{M as j,u as L,l as R,d as U,m as k}from"./motion-D3fQgylo.js";import{L as z}from"./loading-provider-BaRMknX5.js";import{u as A}from"./index-D5xNZpPq.js";import{n as v}from"./notice-B_tmHw7O.js";import{A as G}from"./index-NLnnGRqa.js";import{P as H}from"./container-portal-L5A7yTqF.js";function K({children:o,isValidProp:s,...t}){s&&R(s),t={...u.useContext(j),...t},t.isStatic=L(()=>t.isStatic);const r=u.useMemo(()=>t,[JSON.stringify(t.transition),t.transformPagePoint,t.reducedMotion]);return e.jsx(j.Provider,{value:r,children:o})}const O=({variants:o,gap:s="fallback(4, 1rem)",appendToParentPortal:t,containerRef:r})=>{const a=u.useSyncExternalStore(v.subscribe,v.getSnapshot,v.getSnapshot),l=Object.entries(a).map(([i,m])=>{const x=i.includes("top")?"env(safe-area-inset-top, 0px)":void 0,c=i.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,n=i.includes("left")?void 0:"env(safe-area-inset-right, 0px)",d=i.includes("right")?void 0:"env(safe-area-inset-left, 0px)",p={position:"fixed",zIndex:"fallback(zarbon, 160)",pointerEvents:"none",display:"flex",flexDirection:"column",margin:s,gap:s,top:x,bottom:c,right:n,left:d};return e.jsx(y.ul,{className:E("ui-notice__list",`ui-notice__list--${i}`),__css:p,children:e.jsx(G,{initial:!1,children:m.map(f=>e.jsx(_,{variants:o,...f},f.id))})},i)});return e.jsx(H,{appendToParentPortal:t,containerRef:r,children:l})},W={initial:({placement:o})=>({opacity:0,[["top","bottom"].includes(o)?"y":"x"]:(o==="bottom"||o.includes("right")?1:-1)*24}),animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.95,transition:{duration:.2,ease:[.4,0,1,1]}}},_=u.memo(({variants:o=W,placement:s,duration:t=5e3,message:r,onCloseComplete:a,isDelete:l=!1,onDelete:i,style:m})=>{const[x,c]=u.useState(t),n=U();h(()=>{n||a==null||a()},[n]),h(()=>{c(t)},[t]);const d=()=>c(null),p=()=>c(t),f=()=>{n&&i()};u.useEffect(()=>{n&&l&&i()},[n,l,i]),A(f,x);const b={pointerEvents:"auto",maxW:"36rem",minW:"20rem",...m};return e.jsx(k.li,{layout:!0,className:"ui-notice__list__item",variants:o,initial:"initial",animate:"animate",exit:"exit",onHoverStart:d,onHoverEnd:p,custom:{placement:s},style:{display:"flex",justifyContent:s.includes("left")?"flex-start":s.includes("right")?"flex-end":"center"},children:e.jsx(y.div,{className:"ui-notice__list__item__inner",__css:b,children:M(r,{onClose:f})})})});_.displayName="NoticeComponent";const D=({theme:o=P,config:s=S,disableResetStyle:t,disableGlobalStyle:r,colorModeManager:a,colorModeStorageKey:l,themeSchemeManager:i,themeSchemeStorageKey:m,environment:x,disableEnvironment:c,children:n})=>{var d;return e.jsx(N,{environment:x,disabled:c,children:e.jsx(I,{theme:o,config:s,themeSchemeManager:i,storageKey:m,children:e.jsx(g,{colorModeManager:a,storageKey:l,config:s,children:e.jsx(K,{...(d=s.motion)==null?void 0:d.config,children:e.jsxs(z,{...s.loading,children:[t?null:e.jsx(T,{}),r?null:e.jsx(C,{}),n,e.jsx(O,{...s.notice})]})})})})})};export{D as U};

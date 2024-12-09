import{j as e}from"./jsx-runtime-CfatFE5O.js";import{a as S,d as E}from"./index-D-3WpywC.js";import{b,c as N,n as y,I,ak as M,al as g}from"./factory-ZSnRp-09.js";import{I as C}from"./i18n-provider-hIJzsxvZ.js";import{e as k,R as L,G as R}from"./theme-provider-B08WIPTu.js";import{r as f}from"./index-ClcD9ViR.js";import{M as P,u as T,l as U,e as z}from"./proxy-Cmv22F1b.js";import{L as A}from"./loading-provider--y3RkBPg.js";import{u as G}from"./index-B2YNaAAX.js";import{n as h}from"./notice-DvQqbFbR.js";import{A as H}from"./index-CIS69Ejq.js";import{P as K}from"./portal-Dqf7N2XQ.js";import{m as O}from"./memo-CTsy6qLS.js";import{m as W}from"./factory-g1ZPYqox.js";function F({children:o,isValidProp:n,...t}){n&&U(n),t={...f.useContext(P),...t},t.isStatic=T(()=>t.isStatic);const a=f.useMemo(()=>t,[JSON.stringify(t.transition),t.transformPagePoint,t.reducedMotion]);return e.jsx(P.Provider,{value:a,children:o})}const J=({appendToParentPortal:o,containerRef:n,gap:t="fallback(4, 1rem)",variants:a,itemProps:s,listProps:d})=>{const u=f.useSyncExternalStore(h.subscribe,h.getSnapshot,h.getSnapshot),l=Object.entries(u).map(([i,x])=>{const c=i.includes("top")?"env(safe-area-inset-top, 0px)":void 0,r=i.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,m=i.includes("left")?void 0:"env(safe-area-inset-right, 0px)",_=i.includes("right")?void 0:"env(safe-area-inset-left, 0px)",p={bottom:r,display:"flex",flexDirection:"column",gap:t,left:_,margin:t,pointerEvents:"none",position:"fixed",right:m,top:c,zIndex:"fallback(zarbon, 160)"};return e.jsx(b.ul,{className:N("ui-notice__list",`ui-notice__list--${i}`),__css:p,...d,children:e.jsx(H,{initial:!1,children:x.map(v=>e.jsx(j,{variants:a,itemProps:s,...v},v.id))})},i)});return e.jsx(K,{appendToParentPortal:o,containerRef:n,children:l})},V={animate:{opacity:1,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]},x:0,y:0},exit:{opacity:0,scale:.95,transition:{duration:.2,ease:[.4,0,1,1]}},initial:({placement:o})=>({[["bottom","top"].includes(o)?"y":"x"]:(o==="bottom"||o.includes("right")?1:-1)*24,opacity:0})},j=O(({style:o,duration:n=5e3,isDelete:t=!1,message:a,placement:s,variants:d=V,itemProps:u,onCloseComplete:l,onDelete:i})=>{const[x,c]=f.useState(n),r=z();y(()=>{r||l==null||l()},[r]),y(()=>{c(n)},[n]);const m=()=>c(null),_=()=>c(n),p=()=>{r&&i()};f.useEffect(()=>{r&&t&&i()},[r,t,i]),G(p,x);const v={maxW:"36rem",minW:"20rem",pointerEvents:"auto",...o};return e.jsx(W.li,{className:"ui-notice__list__item",style:{display:"flex",justifyContent:s.includes("left")?"flex-start":s.includes("right")?"flex-end":"center"},animate:"animate",custom:{placement:s},exit:"exit",initial:"initial",layout:!0,variants:d,onHoverEnd:_,onHoverStart:m,...u,children:e.jsx(b.div,{className:"ui-notice__list__item__inner",__css:v,children:I(a,{onClose:p})})})});j.displayName="NoticeComponent";j.__ui__="NoticeComponent";const nt=({children:o,colorMode:n,colorModeManager:t,colorModeStorageKey:a,config:s=S,disableEnvironment:d,disableGlobalStyle:u,disableResetStyle:l,environment:i,theme:x=E,themeSchemeManager:c,themeSchemeStorageKey:r})=>{var m;return e.jsx(M,{disabled:d,environment:i,children:e.jsx(C,{direction:s.direction,locale:s.locale,children:e.jsx(k,{config:s,storageKey:r,theme:x,themeSchemeManager:c,children:e.jsx(g,{colorMode:n,colorModeManager:t,config:s,storageKey:a,children:e.jsx(F,{...(m=s.motion)==null?void 0:m.config,children:e.jsxs(A,{...s.loading,children:[l?null:e.jsx(L,{}),u?null:e.jsx(R,{}),o,e.jsx(J,{...s.notice})]})})})})})})};export{nt as U};

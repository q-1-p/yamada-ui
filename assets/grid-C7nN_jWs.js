import{j as d}from"./jsx-runtime-Nms4Y4qS.js";import{b as f,r as m,p as C,Q as R}from"./factory-CtEVzbYf.js";import{f as u}from"./forward-ref-BmTAT9U5.js";import{u as g}from"./theme-provider-DwNsBv-g.js";const G=u(({templateColumns:o,templateRows:t,templateAreas:e,column:s,row:n,area:a,gap:i,rowGap:p,columnGap:c,autoFlow:l,autoColumns:r,autoRows:x,...w},j)=>{const $={display:"grid",gridTemplateColumns:o,gridTemplateRows:t,gridTemplateAreas:e,gridColumn:s,gridRow:n,gridArea:a,gap:i,rowGap:p,columnGap:c,gridAutoFlow:l,gridAutoColumns:r,gridAutoRows:x};return d.jsx(f.div,{ref:j,__css:$,...w})}),S=(o,t)=>e=>t?m(t,s=>(s=C(e,`sizes.${s}`,R.px(s)),s!=null?`repeat(auto-fit, minmax(${s}, 1fr))`:void 0)):m(o,s=>s!=null?`repeat(${s}, minmax(0, 1fr))`:void 0),O=u(({minChildWidth:o,columns:t,...e},s)=>{const{theme:n}=g();let a=S(t,o)(n);return d.jsx(G,{ref:s,templateColumns:a,...e})}),h=u(({area:o,colSpan:t,rowSpan:e,colStart:s,colEnd:n,rowStart:a,rowEnd:i,...p},c)=>{const l={gridColumn:m(t,r=>r!=null?`span ${r}/span ${r}`:void 0),gridRow:m(e,r=>r!=null?`span ${r}/span ${r}`:void 0),gridColumnStart:s,gridColumnEnd:n,gridRowStart:a,gridRowEnd:i,gridArea:o};return d.jsx(f.div,{ref:c,__css:l,...p})});export{G,O as S,h as a};

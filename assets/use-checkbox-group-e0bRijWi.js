import{u as f}from"./index-_1kmLYlG.js";import{r}from"./index-ClcD9ViR.js";import{q as x,y as u}from"./factory-ZSnRp-09.js";const g=o=>o&&u(o)&&u(o.target),R=({defaultValue:o=[],isNative:l,value:C,onChange:i,...h})=>{const k=x(i),[t,c]=f({defaultValue:o,value:C,onChange:k}),a=r.useCallback(e=>{const n=g(e)?e.target.checked:!t.includes(e),s=g(e)?e.target.value:e,p=n?[...t,s]:t.filter(d=>String(d)!==String(s));c(p)},[t,c]),b=r.useCallback((e={},n=null)=>({role:"group",...e,ref:n}),[]),m=r.useCallback((e={},n=null)=>({...e,ref:n,[l?"checked":"isChecked"]:t.some(s=>String(e.value)===String(s)),onChange:a}),[a,l,t]);return{props:h,setValue:c,value:t,getCheckboxProps:m,getContainerProps:b,onChange:a}};export{R as u};

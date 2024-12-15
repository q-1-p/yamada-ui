import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as j}from"./index-ClcD9ViR.js";import{A as C,a4 as F,b as a,c as L}from"./factory-Bqmz9C5P.js";import{u as T}from"./use-checkbox-Bmr8WAWN.js";import{e as V}from"./form-control-DNngTyAT.js";import{A as z}from"./index-BkD6i14w.js";import{a as H}from"./use-component-style-D7fUVUlo.js";import{o as J}from"./theme-provider-Dit74geM.js";import{m}from"./factory-Cbq3E2qU.js";const[ie,K]=C({name:"CheckboxGroupContext",strict:!1}),[re,ae]=C({name:"CheckboxCardGroupContext",strict:!1}),[te,ce]=C({name:"CheckboxCardContext",errorMessage:`useCheckboxCardContext returned is 'undefined'. Seems you forgot to wrap the components in "<CheckboxCard />"`}),P=j.forwardRef((n,h)=>{const y=K(),{value:t,...s}={...y},r=V(n),[c,f]=H("Checkbox",{...s,...n}),{className:v,children:I,disabled:l=s.disabled??r.disabled,gap:g="0.5rem",invalid:i=s.invalid??r.invalid,label:N,readOnly:u=s.readOnly??r.readOnly,required:x=s.required??r.required,iconProps:q,inputProps:O,labelProps:R,...o}=J(f);o.checked??(o.checked=o.isChecked);const D=t&&o.value?t.includes(o.value):o.checked,w=s.onChange&&o.value?F(s.onChange,o.onChange):o.onChange,{checked:p,indeterminate:d,props:G,getContainerProps:A,getIconProps:E,getInputProps:S,getLabelProps:X}=T({...o,checked:D,disabled:l,invalid:i,readOnly:u,required:x,onChange:w}),{children:B,...M}={...q},W=j.cloneElement(B??e.jsx(k,{}),{checked:p,disabled:l,indeterminate:d,invalid:i,isDisabled:l,isIndeterminate:d,isInvalid:i,isReadOnly:u,isRequired:x,readOnly:u,required:x,__css:{opacity:p||d?1:0,transform:p||d?"scale(1)":"scale(0.95)",transitionDuration:"normal",transitionProperty:"transform"}});return e.jsxs(a.label,{className:L("ui-checkbox",v),...A(),__css:{alignItems:"center",cursor:"pointer",display:"inline-flex",gap:g,position:"relative",verticalAlign:"top",...c.container},...G,children:[e.jsx(a.input,{className:"ui-checkbox__input",...S(O,h)}),e.jsx(a.div,{className:"ui-checkbox__icon",__css:{display:"inline-block",position:"relative",userSelect:"none",...c.icon},...E(M),children:W}),e.jsx(a.span,{className:"ui-checkbox__label",__css:{...c.label},...X(R),children:I??N})]})});P.displayName="Checkbox";P.__ui__="Checkbox";const k=({isChecked:n,checked:h=n,disabled:y,isIndeterminate:t,indeterminate:s=t,invalid:r,isDisabled:c,isInvalid:f,isReadOnly:v,isRequired:I,readOnly:l,required:g,...i})=>e.jsx(z,{initial:!1,children:s||h?e.jsx(a.div,{__css:{left:"50%",position:"absolute",top:"50%",transform:"translate(-50%, -50%)"},children:e.jsx(m.div,{style:{alignItems:"center",display:"flex",justifyContent:"center"},animate:"checked",exit:"unchecked",initial:"unchecked",variants:{checked:{scale:1},unchecked:{scale:.5}},children:s?e.jsx(_,{...i}):e.jsx(b,{...i})})}):null});k.displayName="CheckboxIcon";k.__ui__="CheckboxIcon";const b=n=>e.jsx(m.svg,{style:{fill:"none",stroke:"currentColor",strokeDasharray:16,strokeWidth:2},variants:{checked:{opacity:1,strokeDashoffset:0,transition:{duration:.2}},unchecked:{opacity:0,strokeDashoffset:16}},viewBox:"0 0 12 10",width:"1.2em",...n,children:e.jsx("polyline",{points:"1.5 6 4.5 9 10.5 1"})});b.displayName="CheckboxCheckIcon";b.__ui__="CheckboxCheckIcon";const _=n=>e.jsx(m.svg,{style:{stroke:"currentColor",strokeWidth:4},variants:{checked:{opacity:1,scaleX:1,transition:{opacity:{duration:.02},scaleX:{duration:0}}},unchecked:{opacity:0,scaleX:.65}},viewBox:"0 0 24 24",width:"1.2em",...n,children:e.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})});_.displayName="CheckboxIndeterminateIcon";_.__ui__="CheckboxIndeterminateIcon";export{P as C,ie as a,ae as b,k as c,te as d,re as e,ce as u};

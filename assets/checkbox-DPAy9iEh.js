import{j as t}from"./extends-CwFRzn3r.js";import{t as oe}from"./index-7IszJd0q.js";import{r as s}from"./index-BwDkhjyp.js";import{l as te,V as ne,b as R,c as ae,S as re,k as U,u as V,f as ce,a as Y,d as C,h as c}from"./factory-CPqzzHTm.js";import{a as ie,u as le,f as ue}from"./form-control-Jh-MfcNu.js";import{A as de,m as G}from"./factory-BfCzQy-p.js";import{a as pe}from"./use-component-style-CMyamFpN.js";import{o as he}from"./theme-provider-DVkG1YcR.js";const[Re,fe]=te({strict:!1,name:"CheckboxGroupContext"}),me=({id:o,...P})=>{o??(o=s.useId());const{id:A,name:v,value:i,isChecked:m,defaultIsChecked:d,tabIndex:w,isIndeterminate:l,onChange:I,...F}=le({id:o,...P}),[{required:g,disabled:p,readOnly:b,"aria-readonly":T,onFocus:E,onBlur:B,...u},h]=re(F,ue),[_,L]=s.useState(!1),[f,k]=s.useState(!1),[D,S]=s.useState(!1),[j,x]=s.useState(!1),n=s.useRef(null),[M,q]=s.useState(!0),[N,O]=s.useState(!!d),K=m!==void 0,a=K?m:N,X=U(e=>{if(b||p){e.preventDefault();return}K||O(!a||l?!0:e.target.checked),I==null||I(e)},[b,p,K,a,l]),H=U(E),W=U(B),z=s.useCallback(({key:e})=>{e===" "&&x(!0)},[x]),J=s.useCallback(({key:e})=>{e===" "&&x(!1)},[x]);s.useEffect(()=>oe(L),[]),V(()=>{n.current&&(n.current.indeterminate=!!l)},[l]),ce(()=>{p&&k(!1)},[p,k]),V(()=>{var e;(e=n.current)!=null&&e.form&&(n.current.form.onreset=()=>O(!!d))},[]),V(()=>{n.current&&n.current.checked!==a&&O(n.current.checked)},[n.current]);const Z=s.useCallback((e={},y=null)=>({...u,...e,ref:Y(y,r=>{r&&q(r.tagName==="LABEL")}),"data-checked":C(a),onClick:c(e.onClick,()=>{var r;M||((r=n.current)==null||r.click(),requestAnimationFrame(()=>{var Q;return(Q=n.current)==null?void 0:Q.focus()}))})}),[a,M,u]),$=s.useCallback((e={},y=null)=>({...u,...e,ref:y,"data-active":C(j),"data-hover":C(D),"data-checked":C(a),"data-focus":C(f),"data-focus-visible":C(f&&_),"data-indeterminate":C(l),"aria-hidden":!0,onMouseDown:c(e.onMouseDown,r=>{f&&r.preventDefault(),x(!0)}),onMouseUp:c(e.onMouseUp,()=>x(!1)),onMouseEnter:c(e.onMouseEnter,()=>S(!0)),onMouseLeave:c(e.onMouseLeave,()=>S(!1))}),[j,a,f,D,_,l,u]),ee=s.useCallback((e={},y=null)=>({...u,...e,ref:Y(n,y),id:o,type:"checkbox",name:v,value:i,tabIndex:w,required:g,disabled:p,readOnly:b,checked:a,"aria-checked":l?"mixed":a,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:c(e.onChange,X),onBlur:c(e.onBlur,W,()=>k(!1)),onFocus:c(e.onFocus,H,()=>k(!0)),onKeyDown:c(e.onKeyDown,z),onKeyUp:c(e.onKeyUp,J)}),[l,u,o,v,i,w,g,p,b,a,X,W,H,z,J]),se=s.useCallback((e={},y=null)=>({...u,...e,ref:y,"data-checked":C(a),onMouseDown:c(e.onMouseDown,r=>{r.preventDefault(),r.stopPropagation()}),onTouchStart:c(e.onTouchStart,r=>{r.preventDefault(),r.stopPropagation()})}),[a,u]);return{props:h,isFocusVisible:_,isFocused:f,isHovered:D,isActive:j,isChecked:a,isIndeterminate:l,getContainerProps:Z,getIconProps:$,getInputProps:ee,getLabelProps:se}},ke=s.forwardRef((o,P)=>{const A=fe(),{value:v,...i}={...A},m=ie(o),[d,w]=pe("Checkbox",{...i,...o}),{className:l,gap:I="0.5rem",isRequired:F=i.isRequired??m.isRequired,isReadOnly:g=i.isReadOnly??m.isReadOnly,isDisabled:p=i.isDisabled??m.isDisabled,isInvalid:b=i.isInvalid??m.isInvalid,iconProps:T,inputProps:E,labelProps:B,children:u,...h}=he(w),_=v&&h.value?v.includes(h.value):h.isChecked,L=i.onChange&&h.value?ne(i.onChange,h.onChange):h.onChange,{isChecked:f,isIndeterminate:k,getContainerProps:D,getInputProps:S,getIconProps:j,getLabelProps:x,props:n}=me({...h,isRequired:F,isReadOnly:g,isDisabled:p,isInvalid:b,isChecked:_,onChange:L}),{children:M,...q}={...T},N=s.cloneElement(M??t.jsx(xe,{}),{__css:{opacity:f||k?1:0,transform:f||k?"scale(1)":"scale(0.95)",transitionProperty:"transform",transitionDuration:"normal"},isIndeterminate:k,isChecked:f,isRequired:F,isReadOnly:g,isDisabled:p,isInvalid:b});return t.jsxs(R.label,{className:ae("ui-checkbox",l),...D(),__css:{cursor:"pointer",position:"relative",display:"inline-flex",alignItems:"center",verticalAlign:"top",gap:I,...d.container},...n,children:[t.jsx(R.input,{className:"ui-checkbox__input",...S(E,P)}),t.jsx(R.span,{className:"ui-checkbox__icon",__css:{pointerEvents:g?"none":void 0,position:"relative",display:"inline-block",userSelect:"none",...d.icon},...j(q),children:N}),t.jsx(R.span,{className:"ui-checkbox__label",__css:{...d.label},...x(B),children:u})]})});ke.displayName="Checkbox";const xe=({isIndeterminate:o,isChecked:P,isRequired:A,isReadOnly:v,isDisabled:i,isInvalid:m,...d})=>t.jsx(de,{initial:!1,children:o||P?t.jsx(R.div,{__css:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:t.jsx(G.div,{variants:{unchecked:{scale:.5},checked:{scale:1}},initial:"unchecked",animate:"checked",exit:"unchecked",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:o?t.jsx(be,{...d}):t.jsx(Ce,{...d})})}):null}),Ce=o=>t.jsx(G.svg,{width:"1.2em",viewBox:"0 0 12 10",variants:{unchecked:{opacity:0,strokeDashoffset:16},checked:{opacity:1,strokeDashoffset:0,transition:{duration:.2}}},style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...o,children:t.jsx("polyline",{points:"1.5 6 4.5 9 10.5 1"})}),be=o=>t.jsx(G.svg,{width:"1.2em",viewBox:"0 0 24 24",variants:{unchecked:{scaleX:.65,opacity:0},checked:{scaleX:1,opacity:1,transition:{scaleX:{duration:0},opacity:{duration:.02}}}},style:{stroke:"currentColor",strokeWidth:4},...o,children:t.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})});export{ke as C,Re as a,me as u};

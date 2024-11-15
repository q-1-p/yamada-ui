import{j as x}from"./jsx-runtime-CfatFE5O.js";import{r as s}from"./index-ClcD9ViR.js";import{t as Me,a as Ee,c as Xe}from"./number-CcP_arM8.js";import{k as F,Z as Ye,f as Ze,u as $e,a as ne,x as Je,h as _,p as Qe,b as Z,c as L}from"./factory-COau3w21.js";import{u as et}from"./index-qyuJ8aiN.js";import{u as tt}from"./index-jqgMfdbg.js";import{c as nt,f as st}from"./form-control-Y8qD5MxJ.js";import{a as Re}from"./icon-BodRPJCf.js";import{f as K}from"./forward-ref-D13m8o2p.js";import{a as rt}from"./use-component-style-CLSKeq_H.js";import{o as ot}from"./theme-provider-CNI9L2WW.js";const at=({keepWithinRange:n=!0,max:o=Number.MAX_SAFE_INTEGER,min:r=Number.MIN_SAFE_INTEGER,...t}={})=>{const u=F(t.onChange),[d,m]=s.useState(()=>t.defaultValue==null?"":se(t.defaultValue,t.step??1,t.precision)??""),p=typeof t.value<"u",a=p?t.value:d,h=Te(V(a),t.step??1),v=t.precision??h,f=s.useCallback(c=>{c!==a&&(p||m(c.toString()),u(c.toString(),V(c)))},[u,p,a]),i=s.useCallback(c=>{let l=c;return n&&(l=Xe(l,r,o)),Me(l,v)},[v,n,o,r]),g=s.useCallback((c=t.step??1)=>{let l;a===""?l=V(c):l=V(a)+c,l=i(l),f(l)},[i,t.step,f,a]),P=s.useCallback((c=t.step??1)=>{let l;a===""?l=V(-c):l=V(a)-c,l=i(l),f(l)},[i,t.step,f,a]),R=s.useCallback(()=>{let c;t.defaultValue==null?c="":c=se(t.defaultValue,t.step??1,t.precision)??r,f(c)},[t.defaultValue,t.precision,t.step,f,r]),J=s.useCallback(c=>{const l=se(c,t.step??1,v)??r;f(l)},[v,t.step,f,r]),b=V(a),Q=b<r||o<b;return{cast:J,clamp:i,decrement:P,increment:g,isMax:b===o,isMin:b===r,isOut:Q,precision:v,reset:R,setValue:m,update:f,value:a,valueAsNumber:b}},V=n=>parseFloat(n.toString().replace(/[^\w.-]+/g,"")),Te=(n,o)=>Math.max(Ee(o),Ee(n)),se=(n,o,r)=>(n=V(n),Number.isNaN(n)?void 0:Me(n,r??Te(n,o))),ut=n=>/^[Ee0-9+\-.]$/.test(n),ct=({key:n,altKey:o,ctrlKey:r,metaKey:t},u)=>{const d=r||o||t;return!(n.length===1)||d?!0:u(n)},ke=({ctrlKey:n,metaKey:o,shiftKey:r})=>{let t=1;return(o||n)&&(t=.1),r&&(t=10),t},it=(n={})=>{const{id:o,name:r,allowMouseWheel:t,clampValueOnBlur:u=!0,defaultValue:d,focusInputOnChange:m=!0,format:p,getAriaValueText:a,inputMode:h="decimal",isValidCharacter:v,keepWithinRange:f=!0,max:i=Number.MAX_SAFE_INTEGER,min:g=Number.MIN_SAFE_INTEGER,parse:P,pattern:R="[0-9]*(.[0-9]+)?",precision:J,step:b,value:Q,onChange:ce,onInvalid:ie,...c}=nt(n),{"aria-invalid":l,disabled:D,readOnly:S,required:M,onBlur:Oe,onFocus:Le,...T}=Ye(c,st),Ke=M,Ue=S,Be=D,[Ge,le]=s.useState(!1),U=!(S||D),w=s.useRef(null),B=s.useRef(null),me=s.useRef(null),fe=s.useRef(null),de=F(_(Le,e=>{le(!0),B.current&&(e.target.selectionStart=B.current.start??e.currentTarget.value.length,e.currentTarget.selectionEnd=B.current.end??e.currentTarget.selectionStart)})),pe=F(_(Oe,()=>{le(!1),u&&qe()})),ee=F(ie),be=F(a),G=F(v??ut),{cast:ge,isMax:Ce,isMin:Ne,isOut:Ie,setValue:te,update:O,value:C,valueAsNumber:I,...q}=at({defaultValue:d,keepWithinRange:f,max:i,min:g,precision:J,step:b,value:Q,onChange:ce}),_e=s.useMemo(()=>{let e=be(C);return e??(e=C.toString(),e||void 0)},[C,be]),z=s.useCallback(e=>e.split("").filter(G).join(""),[G]),W=s.useCallback(e=>(P==null?void 0:P(e))??e,[P]),j=s.useCallback(e=>((p==null?void 0:p(e))??e).toString(),[p]),H=s.useCallback((e=b??1)=>{U&&q.increment(e)},[U,q,b]),X=s.useCallback((e=b??1)=>{U&&q.decrement(e)},[U,q,b]),qe=s.useCallback(()=>{let e=C;if(C==="")return;/^[eE]/.test(C.toString())?te(""):(I<g&&(e=g),I>i&&(e=i),ge(e))},[ge,i,g,te,C,I]),xe=s.useCallback(e=>{if(e.nativeEvent.isComposing)return;const N=W(e.currentTarget.value);O(z(N)),B.current={end:e.currentTarget.selectionEnd,start:e.currentTarget.selectionStart}},[W,O,z]),ve=s.useCallback(e=>{if(e.nativeEvent.isComposing)return;ct(e,G)||e.preventDefault();const N=ke(e)*(b??1),y={ArrowDown:()=>X(N),ArrowUp:()=>H(N),End:()=>O(i),Home:()=>O(g)}[e.key];y&&(e.preventDefault(),y(e))},[X,H,G,i,g,b,O]),{down:ye,isSpinning:Se,stop:E,up:he}=mt(H,X);Ve(me,["disabled"],Se,E),Ve(fe,["disabled"],Se,E);const Y=s.useCallback(()=>{m&&requestAnimationFrame(()=>{var e;(e=w.current)==null||e.focus()})},[m]),Pe=s.useCallback(e=>{e.preventDefault(),he(),Y()},[Y,he]),De=s.useCallback(e=>{e.preventDefault(),ye(),Y()},[Y,ye]);Ze(()=>{(I>i||I<g)&&ee("rangeOverflow",j(C),I)},[I,C,j,ee]),$e(()=>{if(!w.current||!(w.current.value!=C))return;const N=W(w.current.value);te(z(N))},[W,z]),et(()=>w.current,"wheel",e=>{var we;const k=(((we=w.current)==null?void 0:we.ownerDocument)??document).activeElement===w.current;if(!t||!k)return;e.preventDefault();const y=ke(e)*(b??1),A=Math.sign(e.deltaY);A===-1?H(y):A===1&&X(y)},{passive:!1});const ze=s.useCallback((e={},N=null)=>({id:o,type:"text",name:r,disabled:D,inputMode:h,pattern:R,readOnly:S,required:M,role:"spinbutton",...T,...e,ref:ne(w,N),"aria-invalid":Je(l??Ie),"aria-valuemax":i,"aria-valuemin":g,"aria-valuenow":Number.isNaN(I)?void 0:I,"aria-valuetext":_e,autoComplete:"off",autoCorrect:"off",max:i,min:g,step:b,value:j(C),onBlur:_(e.onBlur,pe),onChange:_(e.onChange,xe),onFocus:_(e.onFocus,de),onKeyDown:_(e.onKeyDown,ve)}),[o,r,h,R,M,D,S,T,g,i,b,j,C,I,_e,l,Ie,xe,ve,de,pe]),We=s.useCallback((e={},N=null)=>{var y;const k=D||f&&Ce;return{"aria-label":"Increase",disabled:k,readOnly:S,required:M,...T,...e,ref:ne(N,me),style:{...e.style,cursor:S?"not-allowed":(y=e.style)==null?void 0:y.cursor},tabIndex:-1,onPointerDown:_(e.onPointerDown,A=>{A.button===0&&!k&&Pe(A)}),onPointerLeave:_(e.onPointerLeave,E),onPointerUp:_(e.onPointerUp,E)}},[D,f,Ce,M,S,T,E,Pe]),He=s.useCallback((e={},N=null)=>{var y;const k=D||f&&Ne;return{"aria-label":"Decrease",disabled:k,readOnly:S,required:M,...T,...e,ref:ne(N,fe),style:{...e.style,cursor:S?"not-allowed":(y=e.style)==null?void 0:y.cursor},tabIndex:-1,onPointerDown:_(e.onPointerDown,A=>{A.button===0&&!k&&De(A)}),onPointerLeave:_(e.onPointerLeave,E),onPointerUp:_(e.onPointerUp,E)}},[D,f,Ne,M,S,T,E,De]);return{isDisabled:Be,isFocused:Ge,isReadOnly:Ue,isRequired:Ke,props:c,value:j(C),valueAsNumber:I,getDecrementProps:He,getIncrementProps:We,getInputProps:ze}},lt=50,Ae=300,mt=(n,o)=>{const[r,t]=s.useState(!1),[u,d]=s.useState(null),[m,p]=s.useState(!0),a=s.useRef(null),h=()=>clearTimeout(a.current);tt(()=>{u==="increment"&&n(),u==="decrement"&&o()},r?lt:null);const v=s.useCallback(()=>{m&&n(),a.current=setTimeout(()=>{p(!1),t(!0),d("increment")},Ae)},[n,m]),f=s.useCallback(()=>{m&&o(),a.current=setTimeout(()=>{p(!1),t(!0),d("decrement")},Ae)},[o,m]),i=s.useCallback(()=>{p(!0),t(!1),h()},[]);return s.useEffect(()=>()=>h(),[]),{down:f,isSpinning:r,stop:i,up:v}},Ve=(n,o,r,t)=>{s.useEffect(()=>{if(!n.current||!r)return;const u=n.current.ownerDocument.defaultView??window,d=new u.MutationObserver(m=>{for(const{type:p,attributeName:a}of m)p==="attributes"&&a&&o.includes(a)&&t()});return d.observe(n.current,{attributeFilter:o,attributes:!0}),()=>d.disconnect()})},[ft,$]=Qe({name:"NumberInputContext",errorMessage:`useNumberInputContext returned is 'undefined'. Seems you forgot to wrap the components in "<NumberInput />"`}),je=K((n,o)=>{const[r,t]=rt("NumberInput",n),{className:u,isStepper:d=!0,addonProps:m,containerProps:p,decrementProps:a,incrementProps:h,...v}=ot(t),{props:f,getDecrementProps:i,getIncrementProps:g,getInputProps:P}=it(v),R={position:"relative",zIndex:0,...r.container};return x.jsx(ft,{value:{styles:r,getDecrementProps:i,getIncrementProps:g,getInputProps:P},children:x.jsxs(Z.div,{className:L("ui-number-input",u),role:"group",__css:R,...p,children:[x.jsx(re,{...P(f,o)}),d?x.jsxs(oe,{...m,children:[x.jsx(ae,{...h}),x.jsx(ue,{...a})]}):null]})})});je.displayName="NumberInput";je.__ui__="NumberInput";const re=K(({className:n,...o},r)=>{const{styles:t}=$(),u={width:"100%",...t.field};return x.jsx(Z.input,{ref:r,className:L("ui-number-input__field",n),__css:u,...o})});re.displayName="NumberInputField";re.__ui__="NumberInputField";const oe=K(({className:n,...o},r)=>{const{styles:t}=$(),u={display:"flex",flexDirection:"column",height:"calc(100% - 2px)",insetEnd:"0px",margin:"1px",position:"absolute",top:"0",zIndex:"fallback(yamcha, 1)",...t.addon};return x.jsx(Z.div,{ref:r,className:L("ui-number-input__addon",n),"aria-hidden":!0,__css:u,...o})});oe.displayName="NumberInputAddon";oe.__ui__="NumberInputAddon";const Fe=Z("button",{baseStyle:{alignItems:"center",cursor:"pointer",display:"flex",flex:1,justifyContent:"center",lineHeight:"normal",transitionDuration:"normal",transitionProperty:"common",userSelect:"none"}}),ae=K(({className:n,children:o,...r},t)=>{const{styles:u,getIncrementProps:d}=$(),m={...u.stepper};return x.jsx(Fe,{className:L("ui-number-input__stepper--up",n),...d(r,t),__css:m,children:o??x.jsx(Re,{__css:{transform:"rotate(180deg)"}})})});ae.displayName="NumberIncrementStepper";ae.__ui__="NumberIncrementStepper";const ue=K(({className:n,children:o,...r},t)=>{const{styles:u,getDecrementProps:d}=$(),m={...u.stepper};return x.jsx(Fe,{className:L("ui-number-input__stepper--down",n),...d(r,t),__css:m,children:o??x.jsx(Re,{})})});ue.displayName="NumberDecrementStepper";ue.__ui__="NumberDecrementStepper";export{je as N,it as u};

import{j as x}from"./extends-CwFRzn3r.js";import{r as s}from"./index-BwDkhjyp.js";import{t as Me,a as Ee,c as Xe}from"./number-CcP_arM8.js";import{k as F,W as Ye,f as $e,u as Je,a as ne,t as Qe,h as _,o as Ze,b as $,c as L}from"./factory-CTJ-ITwV.js";import{u as et}from"./index-BzKTRvGl.js";import{u as tt}from"./index-Db2B9TMO.js";import{u as nt,f as st}from"./form-control-CExpHBXs.js";import{c as Re}from"./icon-DlOX_f12.js";import{f as K}from"./forward-ref-BWI-Phbn.js";import{a as rt}from"./use-component-style-_O1yHJxH.js";import{o as ot}from"./theme-provider-gLqcKpHk.js";const ut=({keepWithinRange:n=!0,max:o=Number.MAX_SAFE_INTEGER,min:r=Number.MIN_SAFE_INTEGER,...t}={})=>{const a=F(t.onChange),[d,m]=s.useState(()=>t.defaultValue==null?"":se(t.defaultValue,t.step??1,t.precision)??""),p=typeof t.value<"u",u=p?t.value:d,h=Te(V(u),t.step??1),v=t.precision??h,f=s.useCallback(c=>{c!==u&&(p||m(c.toString()),a(c.toString(),V(c)))},[a,p,u]),i=s.useCallback(c=>{let l=c;return n&&(l=Xe(l,r,o)),Me(l,v)},[v,n,o,r]),g=s.useCallback((c=t.step??1)=>{let l;u===""?l=V(c):l=V(u)+c,l=i(l),f(l)},[i,t.step,f,u]),P=s.useCallback((c=t.step??1)=>{let l;u===""?l=V(-c):l=V(u)-c,l=i(l),f(l)},[i,t.step,f,u]),R=s.useCallback(()=>{let c;t.defaultValue==null?c="":c=se(t.defaultValue,t.step??1,t.precision)??r,f(c)},[t.defaultValue,t.precision,t.step,f,r]),Q=s.useCallback(c=>{const l=se(c,t.step??1,v)??r;f(l)},[v,t.step,f,r]),b=V(u),Z=b<r||o<b;return{cast:Q,clamp:i,decrement:P,increment:g,isMax:b===o,isMin:b===r,isOut:Z,precision:v,reset:R,setValue:m,update:f,value:u,valueAsNumber:b}},V=n=>parseFloat(n.toString().replace(/[^\w.-]+/g,"")),Te=(n,o)=>Math.max(Ee(o),Ee(n)),se=(n,o,r)=>(n=V(n),Number.isNaN(n)?void 0:Me(n,r??Te(n,o))),at=n=>/^[Ee0-9+\-.]$/.test(n),ct=({key:n,altKey:o,ctrlKey:r,metaKey:t},a)=>{const d=r||o||t;return!(n.length===1)||d?!0:a(n)},ke=({ctrlKey:n,metaKey:o,shiftKey:r})=>{let t=1;return(o||n)&&(t=.1),r&&(t=10),t},it=(n={})=>{const{id:o,name:r,allowMouseWheel:t,clampValueOnBlur:a=!0,defaultValue:d,focusInputOnChange:m=!0,format:p,getAriaValueText:u,inputMode:h="decimal",isValidCharacter:v,keepWithinRange:f=!0,max:i=Number.MAX_SAFE_INTEGER,min:g=Number.MIN_SAFE_INTEGER,parse:P,pattern:R="[0-9]*(.[0-9]+)?",precision:Q,step:b,value:Z,onChange:ce,onInvalid:ie,...c}=nt(n),{"aria-invalid":l,disabled:D,readOnly:S,required:M,onBlur:Oe,onFocus:Le,...T}=Ye(c,st),Ke=M,Ue=S,Be=D,[Ge,le]=s.useState(!1),U=!(S||D),w=s.useRef(null),B=s.useRef(null),me=s.useRef(null),fe=s.useRef(null),de=F(_(Le,e=>{le(!0),B.current&&(e.target.selectionStart=B.current.start??e.currentTarget.value.length,e.currentTarget.selectionEnd=B.current.end??e.currentTarget.selectionStart)})),pe=F(_(Oe,()=>{le(!1),a&&We()})),ee=F(ie),be=F(u),G=F(v??at),{cast:ge,isMax:Ce,isMin:Ne,isOut:Ie,setValue:te,update:O,value:C,valueAsNumber:I,...W}=ut({defaultValue:d,keepWithinRange:f,max:i,min:g,precision:Q,step:b,value:Z,onChange:ce}),_e=s.useMemo(()=>{let e=be(C);return e??(e=C.toString(),e||void 0)},[C,be]),q=s.useCallback(e=>e.split("").filter(G).join(""),[G]),z=s.useCallback(e=>(P==null?void 0:P(e))??e,[P]),j=s.useCallback(e=>((p==null?void 0:p(e))??e).toString(),[p]),H=s.useCallback((e=b??1)=>{U&&W.increment(e)},[U,W,b]),X=s.useCallback((e=b??1)=>{U&&W.decrement(e)},[U,W,b]),We=s.useCallback(()=>{let e=C;if(C==="")return;/^[eE]/.test(C.toString())?te(""):(I<g&&(e=g),I>i&&(e=i),ge(e))},[ge,i,g,te,C,I]),xe=s.useCallback(e=>{if(e.nativeEvent.isComposing)return;const N=z(e.currentTarget.value);O(q(N)),B.current={end:e.currentTarget.selectionEnd,start:e.currentTarget.selectionStart}},[z,O,q]),ve=s.useCallback(e=>{if(e.nativeEvent.isComposing)return;ct(e,G)||e.preventDefault();const N=ke(e)*(b??1),y={ArrowDown:()=>X(N),ArrowUp:()=>H(N),End:()=>O(i),Home:()=>O(g)}[e.key];y&&(e.preventDefault(),y(e))},[X,H,G,i,g,b,O]),{down:ye,isSpinning:Se,stop:E,up:he}=mt(H,X);Ve(me,["disabled"],Se,E),Ve(fe,["disabled"],Se,E);const Y=s.useCallback(()=>{m&&requestAnimationFrame(()=>{var e;(e=w.current)==null||e.focus()})},[m]),Pe=s.useCallback(e=>{e.preventDefault(),he(),Y()},[Y,he]),De=s.useCallback(e=>{e.preventDefault(),ye(),Y()},[Y,ye]);$e(()=>{(I>i||I<g)&&ee("rangeOverflow",j(C),I)},[I,C,j,ee]),Je(()=>{if(!w.current||!(w.current.value!=C))return;const N=z(w.current.value);te(q(N))},[z,q]),et(()=>w.current,"wheel",e=>{var we;const k=(((we=w.current)==null?void 0:we.ownerDocument)??document).activeElement===w.current;if(!t||!k)return;e.preventDefault();const y=ke(e)*(b??1),A=Math.sign(e.deltaY);A===-1?H(y):A===1&&X(y)},{passive:!1});const qe=s.useCallback((e={},N=null)=>({id:o,type:"text",name:r,disabled:D,inputMode:h,pattern:R,readOnly:S,required:M,role:"spinbutton",...T,...e,ref:ne(w,N),"aria-invalid":Qe(l??Ie),"aria-valuemax":i,"aria-valuemin":g,"aria-valuenow":Number.isNaN(I)?void 0:I,"aria-valuetext":_e,autoComplete:"off",autoCorrect:"off",max:i,min:g,step:b,value:j(C),onBlur:_(e.onBlur,pe),onChange:_(e.onChange,xe),onFocus:_(e.onFocus,de),onKeyDown:_(e.onKeyDown,ve)}),[o,r,h,R,M,D,S,T,g,i,b,j,C,I,_e,l,Ie,xe,ve,de,pe]),ze=s.useCallback((e={},N=null)=>{var y;const k=D||f&&Ce;return{disabled:k,readOnly:S,required:M,...T,...e,ref:ne(N,me),style:{...e.style,cursor:S?"not-allowed":(y=e.style)==null?void 0:y.cursor},tabIndex:-1,onPointerDown:_(e.onPointerDown,A=>{A.button===0&&!k&&Pe(A)}),onPointerLeave:_(e.onPointerLeave,E),onPointerUp:_(e.onPointerUp,E)}},[D,f,Ce,M,S,T,E,Pe]),He=s.useCallback((e={},N=null)=>{var y;const k=D||f&&Ne;return{disabled:k,readOnly:S,required:M,...T,...e,ref:ne(N,fe),style:{...e.style,cursor:S?"not-allowed":(y=e.style)==null?void 0:y.cursor},tabIndex:-1,onPointerDown:_(e.onPointerDown,A=>{A.button===0&&!k&&De(A)}),onPointerLeave:_(e.onPointerLeave,E),onPointerUp:_(e.onPointerUp,E)}},[D,f,Ne,M,S,T,E,De]);return{isDisabled:Be,isFocused:Ge,isReadOnly:Ue,isRequired:Ke,props:c,value:j(C),valueAsNumber:I,getDecrementProps:He,getIncrementProps:ze,getInputProps:qe}},lt=50,Ae=300,mt=(n,o)=>{const[r,t]=s.useState(!1),[a,d]=s.useState(null),[m,p]=s.useState(!0),u=s.useRef(null),h=()=>clearTimeout(u.current);tt(()=>{a==="increment"&&n(),a==="decrement"&&o()},r?lt:null);const v=s.useCallback(()=>{m&&n(),u.current=setTimeout(()=>{p(!1),t(!0),d("increment")},Ae)},[n,m]),f=s.useCallback(()=>{m&&o(),u.current=setTimeout(()=>{p(!1),t(!0),d("decrement")},Ae)},[o,m]),i=s.useCallback(()=>{p(!0),t(!1),h()},[]);return s.useEffect(()=>()=>h(),[]),{down:f,isSpinning:r,stop:i,up:v}},Ve=(n,o,r,t)=>{s.useEffect(()=>{if(!n.current||!r)return;const a=n.current.ownerDocument.defaultView??window,d=new a.MutationObserver(m=>{for(const{type:p,attributeName:u}of m)p==="attributes"&&u&&o.includes(u)&&t()});return d.observe(n.current,{attributeFilter:o,attributes:!0}),()=>d.disconnect()})},[ft,J]=Ze({name:"NumberInputContext",errorMessage:`useNumberInputContext returned is 'undefined'. Seems you forgot to wrap the components in "<NumberInput />"`}),je=K((n,o)=>{const[r,t]=rt("NumberInput",n),{className:a,isStepper:d=!0,addonProps:m,containerProps:p,decrementProps:u,incrementProps:h,...v}=ot(t),{props:f,getDecrementProps:i,getIncrementProps:g,getInputProps:P}=it(v),R={position:"relative",zIndex:0,...r.container};return x.jsx(ft,{value:{styles:r,getDecrementProps:i,getIncrementProps:g,getInputProps:P},children:x.jsxs($.div,{className:L("ui-number-input",a),__css:R,...p,children:[x.jsx(re,{...P(f,o)}),d?x.jsxs(oe,{...m,children:[x.jsx(ue,{...h}),x.jsx(ae,{...u})]}):null]})})});je.displayName="NumberInput";je.__ui__="NumberInput";const re=K(({className:n,...o},r)=>{const{styles:t}=J(),a={width:"100%",...t.field};return x.jsx($.input,{ref:r,className:L("ui-number-input__field",n),__css:a,...o})});re.displayName="NumberInputField";re.__ui__="NumberInputField";const oe=K(({className:n,...o},r)=>{const{styles:t}=J(),a={display:"flex",flexDirection:"column",height:"calc(100% - 2px)",insetEnd:"0px",margin:"1px",position:"absolute",top:"0",zIndex:"fallback(yamcha, 1)",...t.addon};return x.jsx($.div,{ref:r,className:L("ui-number-input__addon",n),"aria-hidden":!0,__css:a,...o})});oe.displayName="NumberInputAddon";oe.__ui__="NumberInputAddon";const Fe=$("button",{baseStyle:{alignItems:"center",cursor:"pointer",display:"flex",flex:1,justifyContent:"center",lineHeight:"normal",transitionDuration:"normal",transitionProperty:"common",userSelect:"none"}}),ue=K(({className:n,children:o,...r},t)=>{const{styles:a,getIncrementProps:d}=J(),m={...a.stepper};return x.jsx(Fe,{className:L("ui-number-input__stepper--up",n),...d(r,t),__css:m,children:o??x.jsx(Re,{__css:{transform:"rotate(180deg)"}})})});ue.displayName="NumberIncrementStepper";ue.__ui__="NumberIncrementStepper";const ae=K(({className:n,children:o,...r},t)=>{const{styles:a,getDecrementProps:d}=J(),m={...a.stepper};return x.jsx(Fe,{className:L("ui-number-input__stepper--down",n),...d(r,t),__css:m,children:o??x.jsx(Re,{})})});ae.displayName="NumberDecrementStepper";ae.__ui__="NumberDecrementStepper";export{je as N,it as u};

import{j as T}from"./extends-CwFRzn3r.js";import{u as ce}from"./index-DK-MzzHQ.js";import{u as de}from"./index-BD59kUnL.js";import{r as n}from"./index-BwDkhjyp.js";import{u as fe,f as be}from"./form-control-CExpHBXs.js";import{o as me,z as pe,b as W,c as A,k as Ee,W as ge,u as Ce,f as he,X as Y,a as S,h as d}from"./factory-CTJ-ITwV.js";import{f as z}from"./forward-ref-BWI-Phbn.js";import{a as Pe}from"./use-component-style-_O1yHJxH.js";import{o as ye}from"./theme-provider-gLqcKpHk.js";const _e=f=>{const{id:i,defaultValue:b,isPreviewFocusable:l=!0,placeholder:a,selectAllOnFocus:m=!0,startWithEditView:M,submitOnBlur:B=!0,value:U,onCancel:y,onChange:L,onEdit:X,onSubmit:_,...G}=fe(f),N=Ee(X),{disabled:r,readOnly:u,required:x,...c}=ge(G,be),[s,R]=n.useState(!!M&&!r),[o,k]=ce({defaultValue:b||"",value:U,onChange:L}),v=!s&&!r,D=o.length===0,[F,j]=n.useState(o),E=n.useRef(null),H=n.useRef(null),K=n.useRef(null),I=n.useRef(null),V=n.useRef(null);de({ref:E,elements:[I,V],enabled:s}),Ce(()=>{var e,t;s&&((e=E.current)==null||e.focus(),m&&((t=E.current)==null||t.select()))},[]),he(()=>{var e,t,P;if(!s){(e=K.current)==null||e.focus();return}(t=E.current)==null||t.focus(),m&&((P=E.current)==null||P.select()),N()},[s,N,m]),n.useEffect(()=>{if(s)return;const e=E.current;(e==null?void 0:e.ownerDocument.activeElement)===e&&(e==null||e.blur())},[s]);const w=n.useCallback(e=>k(e.currentTarget.value),[k]),g=n.useCallback(()=>j(o),[o]),C=n.useCallback(()=>{v&&R(!0)},[v]),p=n.useCallback(()=>{R(!1),k(F),y==null||y(F)},[F,y,k]),h=n.useCallback(()=>{R(!1),j(o),_==null||_(o)},[_,o]),J=n.useCallback(e=>{if(!(e.key!=="Escape"&&e.key!=="Enter"))if(e.preventDefault(),e.key==="Escape")p();else{const{metaKey:t,shiftKey:P}=e;!P&&!t&&h()}},[p,h]),Q=n.useCallback(e=>{e.key==="Escape"&&(e.preventDefault(),p())},[p]),O=n.useCallback(e=>{if(!s)return;const t=e.currentTarget.ownerDocument,P=e.relatedTarget??t.activeElement,le=Y(I.current,P),ue=Y(V.current,P);!le&&!ue&&(B?h():p())},[s,B,h,p]),ne=n.useCallback((e={},t=null)=>({...e,ref:S(t,H),children:D?a:o,hidden:s,tabIndex:v&&l?0:void 0,onFocus:d(e.onFocus,C,g)}),[s,v,l,D,C,g,a,o]),se=n.useCallback((e={},t=null)=>({...c,...e,id:i,ref:S(t,E),disabled:r,hidden:!s,placeholder:a,readOnly:u,required:x,value:o,onBlur:d(e.onBlur,O),onChange:d(e.onChange,w),onFocus:d(e.onFocus,g),onKeyDown:d(e.onKeyDown,J)}),[r,i,s,O,w,J,g,a,u,x,c,o]),oe=n.useCallback((e={},t=null)=>({...c,...e,id:i,ref:S(t,E),disabled:r,hidden:!s,placeholder:a,readOnly:u,required:x,value:o,onBlur:d(e.onBlur,O),onChange:d(e.onChange,w),onFocus:d(e.onFocus,g),onKeyDown:d(e.onKeyDown,Q)}),[r,i,s,O,w,Q,g,a,u,x,c,o]),ae=n.useCallback((e={},t=null)=>({...c,...e,ref:S(t,K),type:"button",disabled:r,readOnly:u,onClick:d(e.onClick,C)}),[r,C,u,c]),ie=n.useCallback((e={},t=null)=>({...c,...e,ref:S(V,t),type:"button",disabled:r,readOnly:u,onClick:d(e.onClick,h)}),[r,h,u,c]),re=n.useCallback((e={},t=null)=>({...c,...e,ref:S(I,t),type:"button",disabled:r,readOnly:u,onClick:d(e.onClick,p)}),[r,p,u,c]);return{isEditing:s,value:o,getCancelProps:re,getEditProps:ae,getInputProps:se,getPreviewProps:ne,getSubmitProps:ie,getTextareaProps:oe,onCancel:p,onEdit:C,onSubmit:h}},Be=()=>{const{isEditing:f,getCancelProps:i,getEditProps:b,getSubmitProps:l}=q();return{isEditing:f,getCancelProps:i,getEditProps:b,getSubmitProps:l}},[xe,q]=me({name:"EditableContext",errorMessage:"useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`"}),Z=z(({errorBorderColor:f,focusBorderColor:i,...b},l)=>{const[a,m]=Pe("Editable",{errorBorderColor:f,focusBorderColor:i,...b}),{className:M,children:B,defaultValue:U,isDisabled:y,isInvalid:L,isPreviewFocusable:X,isReadOnly:_,isRequired:G,placeholder:N,selectAllOnFocus:r,startWithEditView:u,submitOnBlur:x,value:c,onCancel:s,onChange:R,onEdit:o,onSubmit:k,...v}=ye(m),{isEditing:D,getCancelProps:F,getEditProps:j,getInputProps:E,getPreviewProps:H,getSubmitProps:K,getTextareaProps:I,onCancel:V,onEdit:w,onSubmit:g}=_e({defaultValue:U,isDisabled:y,isInvalid:L,isPreviewFocusable:X,isReadOnly:_,isRequired:G,placeholder:N,selectAllOnFocus:r,startWithEditView:u,submitOnBlur:x,value:c,onCancel:s,onChange:R,onEdit:o,onSubmit:k}),C=pe(B,{isEditing:D,onCancel:V,onEdit:w,onSubmit:g}),p={...a.container};return T.jsx(xe,{value:{isEditing:D,styles:a,getCancelProps:F,getEditProps:j,getInputProps:E,getPreviewProps:H,getSubmitProps:K,getTextareaProps:I},children:T.jsx(W.div,{ref:l,className:A("ui-editable",M),...v,__css:p,children:C})})});Z.displayName="Editable";Z.__ui__="Editable";const $=z(({className:f,...i},b)=>{const{styles:l,getPreviewProps:a}=q(),m={bg:"transparent",cursor:"text",display:"inline-block",fontSize:"inherit",fontWeight:"inherit",textAlign:"inherit",...l.preview};return T.jsx(W.span,{className:A("ui-editable__preview",f),...a(i,b),__css:m})});$.displayName="EditablePreview";$.__ui__="EditablePreview";const ee=z(({className:f,...i},b)=>{const{styles:l,getInputProps:a}=q(),m={bg:"transparent",fontSize:"inherit",fontWeight:"inherit",outline:0,textAlign:"inherit",...l.input};return T.jsx(W.input,{className:A("ui-editable__input",f),...a(i,b),__css:m})});ee.displayName="EditableInput";ee.__ui__="EditableInput";const te=z(({className:f,...i},b)=>{const{styles:l,getTextareaProps:a}=q(),m={bg:"transparent",fontSize:"inherit",fontWeight:"inherit",outline:0,textAlign:"inherit",...l.textarea};return T.jsx(W.textarea,{className:A("ui-editable__textarea",f),...a(i,b),__css:m})});te.displayName="EditableTextarea";te.__ui__="EditableTextarea";export{Z as E,$ as a,ee as b,te as c,Be as u};

import{j as B}from"./extends-CwFRzn3r.js";import{u as re}from"./index-DWlkt5Zz.js";import{u as ie}from"./index-JbipPWcI.js";import{r as n}from"./index-BwDkhjyp.js";import{u as le,f as ue}from"./form-control-Jh-MfcNu.js";import{l as ce,B as de,b as N,c as z,k as fe,T as be,u as me,f as ge,U as Y,a as S,h as d}from"./factory-CPqzzHTm.js";import{f as U}from"./forward-ref-BWI-Phbn.js";import{a as Ce}from"./use-component-style-CMyamFpN.js";import{o as pe}from"./theme-provider-DVkG1YcR.js";const Ee=f=>{const{id:r,placeholder:o,value:b,onChange:g,onCancel:l,onSubmit:k,onEdit:M,defaultValue:L,startWithEditView:G,isPreviewFocusable:T=!0,submitOnBlur:j=!0,selectAllOnFocus:R=!0,...H}=le(f),K=fe(M),{required:x,disabled:i,readOnly:u,...c}=be(H,ue),[s,_]=n.useState(!!G&&!i),[a,y]=re({defaultValue:L||"",value:b,onChange:g}),v=!s&&!i,D=a.length===0,[F,O]=n.useState(a),C=n.useRef(null),J=n.useRef(null),A=n.useRef(null),V=n.useRef(null),I=n.useRef(null);ie({ref:C,enabled:s,elements:[V,I]}),me(()=>{var e,t;s&&((e=C.current)==null||e.focus(),R&&((t=C.current)==null||t.select()))},[]),ge(()=>{var e,t,P;if(!s){(e=A.current)==null||e.focus();return}(t=C.current)==null||t.focus(),R&&((P=C.current)==null||P.select()),K()},[s,K,R]),n.useEffect(()=>{if(s)return;const e=C.current;(e==null?void 0:e.ownerDocument.activeElement)===e&&(e==null||e.blur())},[s]);const w=n.useCallback(e=>y(e.currentTarget.value),[y]),p=n.useCallback(()=>O(a),[a]),E=n.useCallback(()=>{v&&_(!0)},[v]),m=n.useCallback(()=>{_(!1),y(F),l==null||l(F)},[F,l,y]),h=n.useCallback(()=>{_(!1),O(a),k==null||k(a)},[k,a]),Q=n.useCallback(e=>{if(!(e.key!=="Escape"&&e.key!=="Enter"))if(e.preventDefault(),e.key==="Escape")m();else{const{shiftKey:t,metaKey:P}=e;!t&&!P&&h()}},[m,h]),X=n.useCallback(e=>{e.key==="Escape"&&(e.preventDefault(),m())},[m]),W=n.useCallback(e=>{if(!s)return;const t=e.currentTarget.ownerDocument,P=e.relatedTarget??t.activeElement,oe=Y(V.current,P),ae=Y(I.current,P);!oe&&!ae&&(j?h():m())},[s,j,h,m]),Z=n.useCallback((e={},t=null)=>({...e,ref:S(t,J),hidden:s,tabIndex:v&&T?0:void 0,children:D?o:a,onFocus:d(e.onFocus,E,p)}),[s,v,T,D,E,p,o,a]),$=n.useCallback((e={},t=null)=>({...c,...e,ref:S(t,C),id:r,placeholder:o,hidden:!s,value:a,required:x,disabled:i,readOnly:u,onBlur:d(e.onBlur,W),onChange:d(e.onChange,w),onKeyDown:d(e.onKeyDown,Q),onFocus:d(e.onFocus,p)}),[i,r,s,W,w,Q,p,o,u,x,c,a]),ee=n.useCallback((e={},t=null)=>({...c,...e,ref:S(t,C),id:r,placeholder:o,hidden:!s,value:a,required:x,disabled:i,readOnly:u,onBlur:d(e.onBlur,W),onChange:d(e.onChange,w),onKeyDown:d(e.onKeyDown,X),onFocus:d(e.onFocus,p)}),[i,r,s,W,w,X,p,o,u,x,c,a]),te=n.useCallback((e={},t=null)=>({...c,...e,ref:S(t,A),type:"button",disabled:i,readOnly:u,onClick:d(e.onClick,E)}),[i,E,u,c]),ne=n.useCallback((e={},t=null)=>({...c,...e,ref:S(I,t),type:"button",disabled:i,readOnly:u,onClick:d(e.onClick,h)}),[i,h,u,c]),se=n.useCallback((e={},t=null)=>({...c,...e,ref:S(V,t),type:"button",disabled:i,readOnly:u,onClick:d(e.onClick,m)}),[i,m,u,c]);return{isEditing:s,value:a,onEdit:E,onCancel:m,onSubmit:h,getPreviewProps:Z,getInputProps:$,getTextareaProps:ee,getEditProps:te,getSubmitProps:ne,getCancelProps:se}},Fe=()=>{const{isEditing:f,getEditProps:r,getCancelProps:o,getSubmitProps:b}=q();return{isEditing:f,getEditProps:r,getCancelProps:o,getSubmitProps:b}},[he,q]=ce({name:"EditableContext",errorMessage:"useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`"}),Ve=U(({focusBorderColor:f,errorBorderColor:r,...o},b)=>{const[g,l]=Ce("Editable",{focusBorderColor:f,errorBorderColor:r,...o}),{className:k,children:M,isInvalid:L,isReadOnly:G,isRequired:T,isDisabled:j,placeholder:R,value:H,defaultValue:K,startWithEditView:x,isPreviewFocusable:i,submitOnBlur:u,selectAllOnFocus:c,onChange:s,onCancel:_,onSubmit:a,onEdit:y,...v}=pe(l),{isEditing:D,getPreviewProps:F,getInputProps:O,getTextareaProps:C,getEditProps:J,getCancelProps:A,getSubmitProps:V,onSubmit:I,onCancel:w,onEdit:p}=Ee({isInvalid:L,isReadOnly:G,isRequired:T,isDisabled:j,placeholder:R,value:H,defaultValue:K,startWithEditView:x,isPreviewFocusable:i,submitOnBlur:u,selectAllOnFocus:c,onChange:s,onCancel:_,onSubmit:a,onEdit:y}),E=de(M,{isEditing:D,onSubmit:I,onCancel:w,onEdit:p}),m={...g.container};return B.jsx(he,{value:{isEditing:D,getPreviewProps:F,getInputProps:O,getTextareaProps:C,getEditProps:J,getCancelProps:A,getSubmitProps:V,styles:g},children:B.jsx(N.div,{ref:b,className:z("ui-editable",k),...v,__css:m,children:E})})}),Ie=U(({className:f,...r},o)=>{const{styles:b,getPreviewProps:g}=q(),l={cursor:"text",display:"inline-block",fontSize:"inherit",fontWeight:"inherit",textAlign:"inherit",bg:"transparent",...b.preview};return B.jsx(N.span,{className:z("ui-editable__preview",f),...g(r,o),__css:l})}),Be=U(({className:f,...r},o)=>{const{styles:b,getInputProps:g}=q(),l={outline:0,fontSize:"inherit",fontWeight:"inherit",textAlign:"inherit",bg:"transparent",...b.input};return B.jsx(N.input,{className:z("ui-editable__input",f),...g(r,o),__css:l})}),Te=U(({className:f,...r},o)=>{const{styles:b,getTextareaProps:g}=q(),l={outline:0,fontSize:"inherit",fontWeight:"inherit",textAlign:"inherit",bg:"transparent",...b.textarea};return B.jsx(N.textarea,{className:z("ui-editable__textarea",f),...g(r,o),__css:l})});export{Ve as E,Ie as a,Be as b,Te as c,Fe as u};

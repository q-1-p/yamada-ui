import{j as d}from"./jsx-runtime-Nms4Y4qS.js";import{r as M}from"./index-BwDkhjyp.js";import{l as H,t as Q,x as q,b as C,c as h,d as u,y as g,h as D}from"./factory-CtEVzbYf.js";import{f as y}from"./forward-ref-BmTAT9U5.js";import{a as U}from"./use-component-style-D3qgkwVB.js";import{o as W}from"./theme-provider-DwNsBv-g.js";const[X,x]=H({strict:!1,name:"FormControlContext"}),[Y,F]=H({strict:!1,name:"FormControlStyleContext"}),ls=y(({id:o,...i},a)=>{const[r,t]=U("FormControl",i),{className:l,isRequired:c=!1,isDisabled:n=!1,isInvalid:m=!1,isReadOnly:e=!1,isReplace:f=!0,label:s,helperMessage:_,errorMessage:p,children:b,requiredIndicator:v,optionalIndicator:I,labelProps:R,helperMessageProps:L,errorMessageProps:A,...O}=W(t);o??(o=M.useId());const V=M.useId(),[P,E]=M.useState(!1),j=Q(b),[w]=q(j,N),[T]=q(j,B),[k]=q(j,S),z=!!w,G=!!T,J=!!k,K={...r.container};return d.jsx(X,{value:{id:o,labelId:V,isFocused:P,isRequired:c,isDisabled:n,isInvalid:m,isReadOnly:e,isReplace:f,onFocus:()=>E(!0),onBlur:()=>E(!1)},children:d.jsx(Y,{value:r,children:d.jsxs(C.div,{ref:a,className:h("ui-form__control",l),"data-focus":u(P),"data-disabled":u(n),"data-invalid":u(m),"data-readonly":u(e),__css:K,...O,children:[!z&&s?d.jsx(N,{requiredIndicator:v,optionalIndicator:I,...R,children:s}):null,b,!G&&_?d.jsx(B,{...L,children:_}):null,!J&&p?d.jsx(S,{...A,children:p}):null]})})})}),ns=({id:o,disabled:i,readOnly:a,required:r,isDisabled:t,isReadOnly:l,isRequired:c,isInvalid:n,...m})=>{const e=x(),f=o??(e==null?void 0:e.id),s=e==null?void 0:e.labelId,_=i??t??(e==null?void 0:e.isDisabled),p=a??l??(e==null?void 0:e.isReadOnly),b=r??c??(e==null?void 0:e.isRequired),v=n??(e==null?void 0:e.isInvalid);return{id:f,labelId:s,isDisabled:_,isReadOnly:p,isRequired:b,isInvalid:v,...m}},ds=({id:o,disabled:i,readOnly:a,required:r,isDisabled:t,isReadOnly:l,isRequired:c,isInvalid:n,onFocus:m,onBlur:e,...f})=>{const s=x();return i??(i=t??(s==null?void 0:s.isDisabled)),r??(r=c??(s==null?void 0:s.isRequired)),a??(a=l??(s==null?void 0:s.isReadOnly)),n??(n=s==null?void 0:s.isInvalid),{id:o??(s==null?void 0:s.id),disabled:i,required:r,readOnly:a,"aria-disabled":g(i),"aria-readonly":g(a),"aria-required":g(r),"aria-invalid":g(n),"data-readonly":u(a),onFocus:D(s==null?void 0:s.onFocus,m),onBlur:D(s==null?void 0:s.onBlur,e),...i||a?{_hover:{},_active:{},_focus:{},_invalid:{},_focusVisible:{}}:{},...f}},Z=["disabled","required","readOnly","aria-disabled","aria-readonly","aria-required","aria-invalid","data-readonly","onFocus","onBlur","_hover","_active","_focus","_invalid","_focusVisible"],$=Z,cs=({omit:o=[],pick:i=[]}={})=>{let a=$;return i.length&&(a=a.filter(r=>i.includes(r))),o.length&&(a=a.filter(r=>!o.includes(r))),a},N=y(({id:o,className:i,htmlFor:a,isRequired:r,requiredIndicator:t=d.jsx(ss,{}),optionalIndicator:l=null,children:c,...n},m)=>{const{id:e,labelId:f,isRequired:s,isFocused:_,isDisabled:p,isInvalid:b,isReadOnly:v}=x()??{},I=F()??{};o??(o=f),r??(r=s);const R={display:"block",pointerEvents:v?"none":void 0,...I.label};return d.jsxs(C.label,{ref:m,id:o,className:h("ui-form__label",i),"data-focus":u(_),"data-disabled":u(p),"data-readonly":u(v),"data-invalid":u(b),htmlFor:a??e,__css:R,style:{cursor:p?"not-allowed":void 0},...n,children:[c,r?t:l]})}),ss=y(({className:o,...i},a)=>{const t={...(F()??{}).requiredIndicator};return d.jsx(C.span,{ref:a,className:h("ui-form__required-indicator",o),role:"presentation","aria-hidden":!0,__css:t,...i,children:"*"})}),B=y(({className:o,...i},a)=>{const{id:r,isInvalid:t,isReplace:l}=x()??{},c=F()??{};if(l&&t)return null;const n={...c.helperMessage};return d.jsx(C.span,{ref:a,className:h("ui-form__helper-message",o),__css:n,"aria-describedby":r,...i})}),S=y(({className:o,...i},a)=>{const{isInvalid:r}=x()??{},t=F()??{};if(!r)return null;const l={...t.errorMessage};return d.jsx(C.span,{ref:a,className:h("ui-form__error-message",o),"aria-live":"polite",__css:l,...i})});export{S as E,ls as F,B as H,N as L,ss as R,ns as a,X as b,Y as c,x as d,F as e,$ as f,cs as g,ds as u};

import{j as c}from"./extends-CwFRzn3r.js";import{u as $}from"./index-C_k6bTeh.js";import{r as e}from"./index-BwDkhjyp.js";import{l as q,f as J,R as ee,V as Q,h as S,a as X,ah as ne,b as L,c as N,x as se,am as te}from"./factory-CPqzzHTm.js";import{P as oe,b as re}from"./popover-content-DU7dP830.js";import{a as ce}from"./use-component-style-CMyamFpN.js";import{o as ae}from"./theme-provider-DVkG1YcR.js";import{u as ue}from"./index-BEfMoi0_.js";import{f as T}from"./forward-ref-BWI-Phbn.js";import{c as le}from"./index-BqvrmGIG.js";const{DescendantsContextProvider:ie,useDescendantsContext:fe,useDescendants:me,useDescendant:de}=le(),[xe,B]=q({name:"MenuContext",errorMessage:`useMenu returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />"`}),[Ae,Ce]=q({strict:!1,name:"ContextMenuContext"}),[pe,Me]=q({strict:!1,name:"UpstreamMenuContext"}),[ve,Y]=q({strict:!1,name:"UpstreamMenuItemContext"}),Ee=a=>{const{styles:n}=Ce()??{},[i,m]=ce("Menu",a,{isProcessSkip:!!n,styles:n});let{initialFocusRef:u,closeOnSelect:v=!0,closeOnBlur:l,placement:o,duration:j=.2,offset:R,onOpen:t,onClose:C,...b}=ae(m);const{relatedRef:d,onUpstreamClose:h,onDownstreamCloseMapRef:x}=Me()??{},{setDownstreamOpen:s,hasDownstreamRef:I}=Y()??{},p=!!d;p?(o??(o="right-start"),R??(R=[-8,8]),l??(l=!1)):o??(o="bottom-start");const M=me(),[g,k]=e.useState(-1),O=e.useRef(null),w=e.useRef(new Set([])),y=e.useRef(null),K=e.useRef(new Map),P=e.useCallback(()=>{requestAnimationFrame(()=>{var r;return(r=O.current)==null?void 0:r.focus({preventScroll:!1})})},[]),H=e.useCallback(()=>{const r=setTimeout(()=>{if(u)return;const D=M.enabledFirstValue();D&&k(D.index)});w.current.add(r)},[M,u]),A=e.useCallback(()=>{const r=setTimeout(()=>{if(u)return;const D=M.enabledLastValue();D&&k(D.index)});w.current.add(r)},[M,u]),z=e.useCallback(()=>{t==null||t(),p||P()},[t,p,P]),W=e.useCallback(()=>{C==null||C();for(const r of K.current.values())r()},[C]),E=e.useId(),{isOpen:_,onOpen:V,onClose:F}=$({...a,onOpen:z,onClose:W});return e.useEffect(()=>{const r=x==null?void 0:x.current;return r==null||r.set(E,F),()=>{r==null||r.delete(E)}},[E,F,x]),e.useEffect(()=>{s&&s(_)},[s,_]),e.useEffect(()=>(I&&(I.current=!0),()=>{I&&(I.current=!1)})),J(()=>{_||k(-1)},[_]),ee(()=>{w.current.forEach(r=>clearTimeout(r)),w.current.clear()}),c.jsx(ie,{value:M,children:c.jsx(pe,{value:{relatedRef:O,onDownstreamCloseMapRef:K,onUpstreamClose:Q(h,F)},children:c.jsx(xe,{value:{isOpen:_,onOpen:V,onClose:F,onUpstreamClose:h,onFocusFirstItem:H,onFocusLastItem:A,closeOnSelect:v,focusedIndex:g,setFocusedIndex:k,menuRef:O,requestAnimationFrameId:y,isNested:p,styles:i},children:c.jsx(oe,{trigger:p?"hover":"click",...b,isOpen:_,onOpen:V,onClose:F,placement:o,offset:R,duration:j,initialFocusRef:u,relatedRef:d,closeOnButton:!1,closeOnBlur:l})})})})},be=a=>{var n;return te(a)&&!!((n=a==null?void 0:a.getAttribute("role"))!=null&&n.startsWith("menuitem"))},he=T(({className:a,isDisabled:n,isFocusable:i,closeOnSelect:m,icon:u,command:v,children:l,...o},j)=>{const{focusedIndex:R,setFocusedIndex:t,isOpen:C,onClose:b,onUpstreamClose:d,closeOnSelect:h,menuRef:x,requestAnimationFrameId:s,isNested:I,styles:p}=B(),{onUpstreamRestoreFocus:M}=Y()??{},g=n&&!i,k=e.useRef(null),O=e.useRef(!1),w=e.useRef(()=>{}),{index:y,register:K}=de({disabled:g}),[P,H]=e.useState(!1),A=y===R,z=e.useCallback(()=>{n||t(y)},[y,n,t]),W=e.useCallback(()=>{n||t(-1)},[t,n]),E=e.useCallback(f=>{if(!be(f.currentTarget))return;const U=O.current;(m??(!U&&h))&&(b(),d==null||d())},[m,h,b,d]),_=e.useCallback(()=>{t(y)},[t,y]),V=e.useCallback(()=>{var f;(f=k.current)==null||f.focus(),t(y)},[t,y]),F=e.useCallback(f=>{const G={ArrowLeft:I?Q(M,b):void 0}[f.key];G&&(f.preventDefault(),f.stopPropagation(),G())},[M,b,I]),r=ue({focusOnClick:!1,...o,onClick:S(o.onClick,E),onFocus:S(o.onFocus,_),onMouseOver:S(o.onMouseOver,z),onMouseLeave:S(o.onMouseLeave,W),onKeyDown:S(o.onKeyDown,F,w.current),ref:X(K,k,j),isDisabled:n,isFocusable:i});J(()=>{if(!C)return;const f=s.current;return A&&!g&&k.current?(f&&cancelAnimationFrame(f),s.current=requestAnimationFrame(()=>{var U;(U=k.current)==null||U.focus({preventScroll:!0}),s.current=null})):x.current&&!ne(x.current)&&x.current.focus({preventScroll:!0}),()=>{f&&cancelAnimationFrame(f)}},[A,g,x,C]),l=u||v?c.jsx(L.span,{style:{flex:1},children:l}):l;const D={textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,gap:"0.75rem",...p.item};return c.jsx(ve,{value:{onKeyDownRef:w,onUpstreamRestoreFocus:V,setDownstreamOpen:H,hasDownstreamRef:O},children:c.jsxs(L.li,{...r,...P?{"data-active":""}:{},role:"menuitem",tabIndex:A?0:-1,className:N("ui-menu__item",a),__css:D,children:[u?c.jsx(Z,{children:u}):null,l,v?c.jsx(ke,{children:v}):null]})})}),Ue=T(({className:a,icon:n,isChecked:i,closeOnSelect:m=!1,children:u,...v},l)=>c.jsxs(he,{ref:l,className:N("ui-menu__item--option",a),"aria-checked":se(i),closeOnSelect:m,...v,children:[n!==null?c.jsx(Z,{opacity:i?1:0,children:n||c.jsx(ye,{})}):null,u]})),Z=T(({className:a,...n},i)=>{const{styles:m}=B(),u={flexShrink:0,display:"inline-flex",justifyContent:"center",alignItems:"center",fontSize:"0.85em",...m.icon};return c.jsx(L.span,{ref:i,className:N("ui-menu__item__icon",a),__css:u,...n})}),ke=T(({className:a,...n},i)=>{const{styles:m}=B(),u={...m.command};return c.jsx(L.span,{ref:i,className:N("ui-menu__item__command",a),__css:u,...n})}),ye=()=>c.jsx("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",children:c.jsx("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),Le=T(({className:a,contentProps:n,children:i,...m},u)=>{const{menuRef:v,focusedIndex:l,setFocusedIndex:o,onClose:j,styles:R}=B(),t=fe(),C=e.useCallback(()=>{const s=t.enabledNextValue(l);s&&o(s.index)},[t,l,o]),b=e.useCallback(()=>{const s=t.enabledPrevValue(l);s&&o(s.index)},[t,l,o]),d=e.useCallback(()=>{const s=t.enabledFirstValue();s&&o(s.index)},[t,o]),h=e.useCallback(()=>{const s=t.enabledLastValue();s&&o(s.index)},[t,o]),x=e.useCallback(s=>{const p={Tab:M=>M.preventDefault(),Escape:j,ArrowDown:l===-1?d:C,ArrowUp:l===-1?h:b,Home:d,End:h}[s.key];p&&(s.preventDefault(),p(s))},[l,j,d,h,C,b]);return c.jsx(re,{as:"div",className:"ui-menu__content",__css:{...R.content},...n,onKeyDown:S(n==null?void 0:n.onKeyDown,x),children:c.jsx(L.ul,{ref:X(v,u),role:"menu",className:N("ui-menu__list",a),tabIndex:-1,__css:{...R.list},...m,children:i})})});export{Ae as C,Z as M,B as a,Ee as b,Le as c,he as d,Ce as e,Ue as f,Y as u};

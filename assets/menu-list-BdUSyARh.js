import{j as c}from"./jsx-runtime-Nms4Y4qS.js";import{r as e}from"./index-BwDkhjyp.js";import{c as ne}from"./index-DsEil29M.js";import{u as te}from"./index-CFefAklC.js";import{l as q,h as O,a as J,f as Q,ae as se,b as V,c as U,y as oe,ah as re,V as X,S as ce}from"./factory-CtEVzbYf.js";import{a as Y}from"./use-component-style-D3qgkwVB.js";import{o as Z}from"./theme-provider-DwNsBv-g.js";import{u as ae}from"./index-CXXWvYyT.js";import{f as L}from"./forward-ref-BmTAT9U5.js";import{P as ue,b as le}from"./popover-content-KEWUzlYu.js";const[ie,fe]=q({strict:!1,name:"ContextMenuContext"}),Ee=o=>{const[t,l]=Y("ContextMenu",o),{...i}=Z(l);return c.jsx(ie,{value:{styles:t},children:c.jsx(we,{trigger:"contextmenu",...i})})},[me,$]=q({strict:!1,name:"UpstreamMenuItemContext"}),de=o=>{var t;return re(o)&&!!((t=o==null?void 0:o.getAttribute("role"))!=null&&t.startsWith("menuitem"))},xe=L(({className:o,isDisabled:t,isFocusable:l,closeOnSelect:i,icon:s,command:a,children:m,...d},x)=>{const{focusedIndex:R,setFocusedIndex:u,isOpen:p,onClose:C,onUpstreamClose:v,closeOnSelect:F,menuRef:n,requestAnimationFrameId:k,isNested:M,styles:y}=B(),{onUpstreamRestoreFocus:I}=$()??{},S=t&&!l,b=e.useRef(null),g=e.useRef(!1),j=e.useRef(()=>{}),{index:h,register:N}=be({disabled:S}),[T,H]=e.useState(!1),A=h===R,z=e.useCallback(()=>{t||u(h)},[h,t,u]),W=e.useCallback(()=>{t||u(-1)},[u,t]),P=e.useCallback(f=>{if(!de(f.currentTarget))return;const E=g.current;(i??(!E&&F))&&(C(),v==null||v())},[i,F,C,v]),w=e.useCallback(()=>{u(h)},[u,h]),K=e.useCallback(()=>{var f;(f=b.current)==null||f.focus(),u(h)},[u,h]),D=e.useCallback(f=>{const G={ArrowLeft:M?X(I,C):void 0}[f.key];G&&(f.preventDefault(),f.stopPropagation(),G())},[I,C,M]),r=ae({focusOnClick:!1,...d,onClick:O(d.onClick,P),onFocus:O(d.onFocus,w),onMouseOver:O(d.onMouseOver,z),onMouseLeave:O(d.onMouseLeave,W),onKeyDown:O(d.onKeyDown,D,j.current),ref:J(N,b,x),isDisabled:t,isFocusable:l});Q(()=>{if(!p)return;const f=k.current;return A&&!S&&b.current?(f&&cancelAnimationFrame(f),k.current=requestAnimationFrame(()=>{var E;(E=b.current)==null||E.focus({preventScroll:!0}),k.current=null})):n.current&&!se(n.current)&&n.current.focus({preventScroll:!0}),()=>{f&&cancelAnimationFrame(f)}},[A,S,n,p]),m=s||a?c.jsx(V.span,{style:{flex:1},children:m}):m;const _={textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,gap:"0.75rem",...y.item};return c.jsx(me,{value:{onKeyDownRef:j,onUpstreamRestoreFocus:K,setDownstreamOpen:H,hasDownstreamRef:g},children:c.jsxs(V.li,{...r,...T?{"data-active":""}:{},role:"menuitem",tabIndex:A?0:-1,className:U("ui-menu__item",o),__css:_,children:[s?c.jsx(ee,{children:s}):null,m,a?c.jsx(pe,{children:a}):null]})})}),Ue=L(({className:o,icon:t,isChecked:l,closeOnSelect:i=!1,children:s,...a},m)=>c.jsxs(xe,{ref:m,className:U("ui-menu__item--option",o),"aria-checked":oe(l),closeOnSelect:i,...a,children:[t!==null?c.jsx(ee,{opacity:l?1:0,children:t||c.jsx(Ce,{})}):null,s]})),ee=L(({className:o,...t},l)=>{const{styles:i}=B(),s={flexShrink:0,display:"inline-flex",justifyContent:"center",alignItems:"center",fontSize:"0.85em",...i.icon};return c.jsx(V.span,{ref:l,className:U("ui-menu__item__icon",o),__css:s,...t})}),pe=L(({className:o,...t},l)=>{const{styles:i}=B(),s={...i.command};return c.jsx(V.span,{ref:l,className:U("ui-menu__item__command",o),__css:s,...t})}),Ce=()=>c.jsx("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",children:c.jsx("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),{DescendantsContextProvider:Me,useDescendantsContext:ve,useDescendants:ye,useDescendant:be}=ne(),[he,B]=q({name:"MenuContext",errorMessage:`useMenu returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />"`}),[ke,Ie]=q({strict:!1,name:"UpstreamMenuContext"}),we=o=>{const{styles:t}=fe()??{},[l,i]=Y("Menu",o,{isProcessSkip:!!t,styles:t});let{initialFocusRef:s,closeOnSelect:a=!0,closeOnBlur:m,placement:d,duration:x=.2,offset:R,onOpen:u,onClose:p,...C}=Z(i);const{relatedRef:v,onUpstreamClose:F,onDownstreamCloseMapRef:n}=Ie()??{},{setDownstreamOpen:k,hasDownstreamRef:M}=$()??{},y=!!v;y?(d??(d="right-start"),R??(R=[-8,8]),m??(m=!1)):d??(d="bottom-start");const I=ye(),[S,b]=e.useState(-1),g=e.useRef(null),j=e.useRef(new Set([])),h=e.useRef(null),N=e.useRef(new Map),T=e.useCallback(()=>{requestAnimationFrame(()=>{var r;return(r=g.current)==null?void 0:r.focus({preventScroll:!1})})},[]),H=e.useCallback(()=>{const r=setTimeout(()=>{if(s)return;const _=I.enabledFirstValue();_&&b(_.index)});j.current.add(r)},[I,s]),A=e.useCallback(()=>{const r=setTimeout(()=>{if(s)return;const _=I.enabledLastValue();_&&b(_.index)});j.current.add(r)},[I,s]),z=e.useCallback(()=>{u==null||u(),y||T()},[u,y,T]),W=e.useCallback(()=>{p==null||p();for(const r of N.current.values())r()},[p]),P=e.useId(),{isOpen:w,onOpen:K,onClose:D}=te({...o,onOpen:z,onClose:W});return e.useEffect(()=>{const r=n==null?void 0:n.current;return r==null||r.set(P,D),()=>{r==null||r.delete(P)}},[P,D,n]),e.useEffect(()=>{k&&k(w)},[k,w]),e.useEffect(()=>(M&&(M.current=!0),()=>{M&&(M.current=!1)})),Q(()=>{w||b(-1)},[w]),ce(()=>{j.current.forEach(r=>clearTimeout(r)),j.current.clear()}),c.jsx(Me,{value:I,children:c.jsx(ke,{value:{relatedRef:g,onDownstreamCloseMapRef:N,onUpstreamClose:X(F,D)},children:c.jsx(he,{value:{isOpen:w,onOpen:K,onClose:D,onUpstreamClose:F,onFocusFirstItem:H,onFocusLastItem:A,closeOnSelect:a,focusedIndex:S,setFocusedIndex:b,menuRef:g,requestAnimationFrameId:h,isNested:y,styles:l},children:c.jsx(ue,{trigger:y?"hover":"click",...C,isOpen:w,onOpen:K,onClose:D,placement:d,offset:R,duration:x,initialFocusRef:s,relatedRef:v,closeOnButton:!1,closeOnBlur:m})})})})},Le=L(({className:o,...t},l)=>{const{menuRef:i,focusedIndex:s,setFocusedIndex:a,onClose:m,styles:d}=B(),x=ve(),R=e.useCallback(()=>{const n=x.enabledNextValue(s);n&&a(n.index)},[x,s,a]),u=e.useCallback(()=>{const n=x.enabledPrevValue(s);n&&a(n.index)},[x,s,a]),p=e.useCallback(()=>{const n=x.enabledFirstValue();n&&a(n.index)},[x,a]),C=e.useCallback(()=>{const n=x.enabledLastValue();n&&a(n.index)},[x,a]),v=e.useCallback(n=>{const M={Tab:y=>y.preventDefault(),Escape:m,ArrowDown:s===-1?p:R,ArrowUp:s===-1?C:u,Home:p,End:C}[n.key];M&&(n.preventDefault(),M(n))},[s,m,p,C,R,u]),F={...d.list};return c.jsx(le,{as:"ul",ref:J(i,l),className:U("ui-menu__list",o),role:"menu",tabIndex:-1,__css:F,...t,onKeyDown:O(t.onKeyDown,v)})});export{Ee as C,ee as M,B as a,we as b,Le as c,xe as d,fe as e,Ue as f,$ as u};

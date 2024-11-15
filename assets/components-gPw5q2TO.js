import{j as n}from"./jsx-runtime-CfatFE5O.js";import{u as at}from"./index-BcE809qD.js";import{r as u}from"./index-ClcD9ViR.js";import{u as Le}from"./index-BTMolVUU.js";import{o as Pe,S as lt,C as it}from"./theme-provider-CNI9L2WW.js";import{U as ct}from"./ui-provider-eJsiD_iL.js";import{C as ut}from"./container-9UL7bQcu.js";import{H as dt,V as He}from"./stack-DfTvLKXJ.js";import{B as mt}from"./box-Co1KKng-.js";import{T as Ee}from"./text-BnztNdZ-.js";import{u as ht}from"./checkbox-NVBvN1eg.js";import{f as J}from"./forward-ref-D13m8o2p.js";import{a as je}from"./use-component-style-CLSKeq_H.js";import{p as Ue,k as me,x as _e,d as M,a as ie,h as te,q as We,b as P,c as N,ao as pt,w as $e,aa as ft,ab as bt,ac as gt,Z as xt,f as Ct,g as Ae,I as St,J as _t}from"./factory-COau3w21.js";import{m as ye}from"./factory-ep9rrzy9.js";import{c as kt,f as vt,d as ke}from"./form-control-Y8qD5MxJ.js";import{u as Xe}from"./index-DPt_fcIQ.js";import{u as yt,a as Pt,b as jt}from"./index-BCBmayc8.js";import{r as Be,v as Oe,c as ve,p as wt}from"./number-CcP_arM8.js";import{m as Tt}from"./use-var-YCfkKbSC.js";import{T as It}from"./tooltip-DqnSdWX7.js";import{c as Nt}from"./index-Btt-sfjQ.js";import{t as Vt}from"./index-CRS5qAAq.js";import{L as Rt}from"./index-B5Z2HpMN.js";import{S as Ft}from"./select-DiVSeaVw.js";const{DescendantsContextProvider:Mt,useDescendant:zt,useDescendants:Dt}=Nt(),[Et,Je]=Ue({name:"SegmentedControlContext",errorMessage:`useSegmentedControl returned is 'undefined'. Seems you forgot to wrap the components in "<SegmentedControl />"`}),we=J((r,s)=>{const[t,a]=je("SegmentedControl",r);let{id:o,name:d,className:f,children:b,defaultValue:g,isDisabled:l,isReadOnly:i,items:h=[],value:z,onChange:A,...D}=Pe(a);const V=u.useId();o??(o=V),d??(d=`segmented-control-${V}`);const H=me(A),E=Dt(),[j,k]=u.useState(-1),[w,U]=u.useState(!1),W=u.useRef(null),[T,R]=Xe({defaultValue:g,value:z,onChange:H}),K=u.useCallback(x=>{if(l||i){x.preventDefault();return}R(x.target.value)},[l,i,R]),_=u.useCallback((x,v)=>{if(!l)if(v){const F=E.enabledNextValue(x);F&&k(F.index)}else k(x)},[E,l]),Z=u.useCallback(()=>k(-1),[]),Y=u.useCallback((x={},v=null)=>({"aria-disabled":_e(l),"data-readonly":M(i),role:"radiogroup",...D,...x,id:o,ref:ie(W,v),onBlur:te(x.onBlur,Z)}),[o,l,i,Z,D]),de=u.useCallback(({index:x,isDisabled:v,isReadOnly:F,...S},B=null)=>{const p=S.disabled??v??l,O=S.readOnly??F??i,ne=S.value===T;return{...S,id:`${o}-${x}`,ref:B,type:"radio",name:d,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"},"aria-disabled":_e(p),"data-checked":M(ne),"data-focus":M(x===j),"data-readonly":M(O),checked:ne,disabled:p||O,readOnly:O,onChange:te(S.onChange,L=>!p&&!O?K(L):{})}},[l,i,T,o,d,j,K]),pe=u.useCallback(({index:x,isDisabled:v,isReadOnly:F,...S},B=null)=>{const p=S.disabled??v??l,O=S.readOnly??F??i,ne=S.value===T,L=x===j;return{...S,ref:B,"aria-disabled":_e(p),"data-checked":M(ne),"data-focus":M(L),"data-focus-visible":M(L&&w),"data-readonly":M(O),onFocus:te(S.onFocus,()=>_(x,p||O||!1)),...p||O?{_active:{},_focus:{},_focusVisible:{},_hover:{},_invalid:{}}:{}}},[j,l,w,i,_,T]);u.useEffect(()=>Vt(U),[]);const se={alignItems:"center",display:"inline-flex",...t.container},Q=We(b);let q=[];if(!Q.length&&h.length?q=h.map(({label:x,value:v,...F},S)=>n.jsx(ce,{value:v,...F,children:x},S)):q=Q,T==null&&g==null)for(const x of q){if(x.type!==ce&&x.type.displayName!==ce.displayName)continue;const v=x.props.value;R(v);break}return n.jsx(Mt,{value:E,children:n.jsx(Et,{value:{styles:t,value:T,getInputProps:de,getLabelProps:pe},children:n.jsx(Rt,{id:o,children:n.jsx(P.div,{...Y({},s),className:N("ui-segmented-control",f),__css:se,children:q})})})})});we.displayName="SegmentedControl";we.__ui__="SegmentedControl";const ce=J(({className:r,children:s,disabled:t,isDisabled:a,isReadOnly:o,readOnly:d,value:f,motionProps:b,onChange:g,...l},i)=>{const[,h]=pt({rerender:!0}),{styles:z,value:A,getInputProps:D,getLabelProps:V}=Je(),{index:H,register:E}=zt({disabled:a||o}),j={disabled:t,index:H,isDisabled:a,isReadOnly:o,readOnly:d,value:f},k={alignItems:"center",cursor:"pointer",display:"inline-flex",flex:"1 1 0%",justifyContent:"center",position:"relative",...z.button},w=f===A;return n.jsxs(P.label,{...V(j),className:N("ui-segmented-control__button",r),__css:k,...l,children:[n.jsx(P.input,{...D({onChange:g,...j},ie(E,i))}),w&&h?n.jsx(Te,{...b}):null,n.jsx(P.span,{zIndex:"1",children:s})]})});ce.displayName="SegmentedControlButton";ce.__ui__="SegmentedControlButton";const Te=({className:r,transition:s,...t})=>{const{styles:a}=Je(),o={h:"100%",position:"absolute",w:"100%",...a.cursor};return n.jsx(ye.div,{className:N("ui-segmented-control__cursor",r),layoutDependency:!1,layoutId:"cursor",transition:{type:"spring",bounce:.15,duration:.4,...s},__css:o,...t})};Te.displayName="SegmentedControlCursor";Te.__ui__="SegmentedControlCursor";const $t=(r,s)=>{var t,a,o,d,f,b,g,l,i,h;return r??((t=s.thumb)==null?void 0:t.boxSize)??((a=s.thumb)==null?void 0:a.minBoxSize)??((o=s.thumb)==null?void 0:o.width)??((d=s.thumb)==null?void 0:d.w)??((f=s.thumb)==null?void 0:f.minWidth)??((b=s.thumb)==null?void 0:b.minW)??((g=s.thumb)==null?void 0:g.height)??((l=s.thumb)==null?void 0:l.h)??((i=s.thumb)==null?void 0:i.minHeight)??((h=s.thumb)==null?void 0:h.minH)??"3.5"},At=({focusThumbOnChange:r=!0,...s})=>{r||(s.isReadOnly=!0);let{id:t,name:a,"aria-label":o,"aria-labelledby":d,"aria-valuetext":f,defaultValue:b,getAriaValueText:g,isReversed:l,max:i=100,min:h=0,orientation:z="horizontal",step:A=1,thumbSize:D,value:V,onChange:H,onChangeEnd:E,onChangeStart:j,...k}=kt(s);const{"aria-readonly":w,disabled:U,readOnly:W,required:T,onBlur:R,onFocus:K,..._}=xt(k,vt);if(i<h)throw new Error("Do not assign a number less than 'min' to 'max'");const Z=me(j),Y=me(E),de=me(g),[pe,se]=Xe({defaultValue:b??h+(i-h)/2,value:V,onChange:H}),[Q,q]=u.useState(!1),[x,v]=u.useState(!1),F=!(U||W),S=(i-h)/10,B=A||(i-h)/100,p=ve(pe,h,i),O=i-p+h,L=Oe(l?O:p,h,i),y=z==="vertical",I=yt({focusThumbOnChange:r,isInteractive:F,max:i,min:h,step:A,value:p}),fe=u.useRef(null),Re=u.useRef(null),be=u.useRef(null),ge=u.useRef(null),ee=Pt(ge);jt(Re,{onMove:e=>{const{isInteractive:m}=I.current;m&&Fe(e)},onSessionEnd:()=>{const{isInteractive:e,value:m}=I.current;e&&(q(!1),Y(m))},onSessionStart:e=>{const{isInteractive:m,value:c}=I.current;m&&(q(!0),Me(),Fe(e),Z(c))}});const Ye=u.useCallback(e=>{var De;if(!be.current)return;const{max:m,min:c,step:C}=I.current;fe.current="pointer";const{bottom:X,height:ae,left:xe,width:Ce}=be.current.getBoundingClientRect(),{clientX:rt,clientY:ot}=((De=e.touches)==null?void 0:De[0])??e;let Se=(y?X-ot:rt-xe)/(y?ae:Ce);l&&(Se=1-Se);let le=wt(Se,c,m);return C&&(le=parseFloat(Be(le,c,C))),le=ve(le,c,m),le},[y,l,I]),Fe=e=>{const{value:m}=I.current,c=Ye(e);c!=null&&c!==m&&se(c)},Me=u.useCallback(()=>{const{focusThumbOnChange:e}=I.current;e&&setTimeout(()=>{var m;return(m=ge.current)==null?void 0:m.focus()})},[I]),$=u.useCallback(e=>{const{isInteractive:m,max:c,min:C}=I.current;m&&(e=parseFloat(Be(e,C,B)),e=ve(e,C,c),se(e))},[B,se,I]),re=u.useCallback((e=B)=>$(l?p-e:p+e),[$,l,B,p]),oe=u.useCallback((e=B)=>$(l?p+e:p-e),[$,l,B,p]),qe=u.useCallback(()=>$(b||0),[$,b]),Ge=u.useCallback(e=>$(e),[$]),ze=u.useCallback(e=>{const{max:m,min:c}=I.current,X={ArrowDown:()=>oe(),ArrowLeft:()=>oe(),ArrowRight:()=>re(),ArrowUp:()=>re(),End:()=>$(m),Home:()=>$(c),PageDown:()=>oe(S),PageUp:()=>re(S)}[e.key];X&&(e.preventDefault(),e.stopPropagation(),X(e),fe.current="keyboard")},[$,I,oe,re,S]);Ct(()=>{const{value:e}=I.current;Me(),fe.current==="keyboard"&&Y(e)},[p,Y]);const Ze=u.useCallback((e={},m=null)=>{let{height:c,width:C}=ee??{height:"var(--ui-thumb-size)",width:"var(--ui-thumb-size)"};Ae(C)&&(C=`${C}px`),Ae(c)&&(c=`${c}px`);const X=y?{paddingLeft:`calc(${C} / 2)`,paddingRight:`calc(${C} / 2)`}:{paddingBottom:`calc(${c} / 2)`,paddingTop:`calc(${c} / 2)`},ae={...e.style,outline:0,position:"relative",touchAction:"none",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",...X};return{...k,...e,ref:ie(m,Re),style:ae,tabIndex:-1,vars:Tt(k.vars,[{name:"thumb-size",token:"sizes",value:D,__prefix:"ui"}])}},[y,k,ee,D]),Qe=u.useCallback((e={},m=null)=>({"aria-readonly":w,..._,...e,id:t,ref:m,type:"hidden",name:a,disabled:U,readOnly:W,required:T,value:p}),[w,U,_,t,a,W,T,p]),et=u.useCallback((e={},m=null)=>{const c={...e.style,position:"absolute",...y?{height:"100%",left:"50%",transform:"translateX(-50%)"}:{top:"50%",transform:"translateY(-50%)",width:"100%"}};return{..._,...e,ref:ie(m,be),style:c}},[y,_]),tt=u.useCallback((e={},m=null)=>{const c=Math.abs(l?100-L:L),C={...e.style,position:"absolute",...y?{height:`${c}%`,left:"50%",transform:"translateX(-50%)",...l?{top:"0%"}:{bottom:"0%"}}:{top:"50%",transform:"translateY(-50%)",width:`${c}%`,...l?{right:"0%"}:{left:"0%"}}};return{..._,...e,ref:m,style:C}},[l,y,_,L]),st=u.useCallback((e,m=null)=>{let c=Oe(e.value,h,i);c=l?100-c:c;const C={...e.style,pointerEvents:"none",position:"absolute",...y?{bottom:`${c}%`}:{left:`${c}%`}};return{..._,...e,ref:m,style:C,"aria-hidden":!0,"data-highlighted":M(e.value<=p),"data-invalid":M(e.value<h||i<e.value)}},[l,y,i,h,_,p]),nt=u.useCallback((e={},m=null)=>{const c=L;let C="var(--ui-thumb-size)",X="var(--ui-thumb-size)";ee&&(C=`${ee.width}px`,X=`${ee.height}px`);const ae=`calc(${c}% - (${X} / 2))`,xe=`calc(${c}% - (${C} / 2))`,Ce={...e.style,position:"absolute",touchAction:"none",userSelect:"none",...y?{bottom:ae}:{left:xe}};return{"aria-label":o??"Slider thumb","aria-labelledby":d,"aria-readonly":w,..._,...e,ref:ie(m,ge),style:Ce,"aria-orientation":z,"aria-valuemax":i,"aria-valuemin":h,"aria-valuenow":p,"aria-valuetext":f??de(p)??p.toString(),"data-active":M(Q&&r),role:"slider",tabIndex:F&&r?0:void 0,onBlur:te(e.onBlur,R,()=>v(!1)),onFocus:te(e.onFocus,K,()=>v(!0)),onKeyDown:te(e.onKeyDown,ze)}},[L,ee,y,o,d,w,_,z,i,h,p,f,de,Q,r,F,R,K,ze]);return{isDragging:Q,isFocused:x,isVertical:y,reset:qe,stepDown:oe,stepTo:Ge,stepUp:re,value:p,getContainerProps:Ze,getFilledTrackProps:tt,getInputProps:Qe,getMarkProps:st,getThumbProps:nt,getTrackProps:et}},[Bt,he]=Ue({name:"SliderContext",errorMessage:`useSliderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Slider />" `}),Ie=J((r,s)=>{const[t,a]=je("Slider",r),{className:o,children:d,filledTrackColor:f,thumbColor:b,thumbSize:g,trackColor:l,trackSize:i,filledTrackProps:h,inputProps:z,thumbProps:A,trackProps:D,...V}=Pe(a),{isVertical:H,getContainerProps:E,getFilledTrackProps:j,getInputProps:k,getMarkProps:w,getThumbProps:U,getTrackProps:W}=At({...V,thumbSize:$t(g,t)}),T={...t.container},R=We(d),K=$e(R,ue),_=$e(R,G),Z=ft(R,G),Y=bt(R)?d:gt(R,ue,G);return n.jsx(Bt,{value:{filledTrackColor:f,isVertical:H,styles:t,thumbColor:b,thumbSize:g,trackColor:l,trackSize:i,filledTrackProps:h,getFilledTrackProps:j,getMarkProps:w,getThumbProps:U,getTrackProps:W,thumbProps:A,trackProps:D},children:n.jsxs(P.div,{className:N("ui-slider",o),__css:T,...E(),children:[n.jsx(P.input,{...k(z,s)}),K??n.jsx(ue,{}),Y,_??(Z?null:n.jsx(G,{}))]})})});Ie.displayName="Slider";Ie.__ui__="Slider";const ue=J(({className:r,children:s,filledTrackProps:t,...a},o)=>{const{isVertical:d,styles:f,trackColor:b,trackSize:g,getTrackProps:l,trackProps:i}=he(),h={...f.track};return n.jsx(P.div,{className:N("ui-slider__track",r),__css:h,...l({...b?{bg:b}:{},...g?d?{w:g}:{h:g}:{},...i,...a},o),children:s??n.jsx(Ne,{...t})})});ue.displayName="SliderTrack";ue.__ui__="SliderTrack";const Ne=J(({className:r,...s},t)=>{const{filledTrackColor:a,styles:o,filledTrackProps:d,getFilledTrackProps:f}=he(),b={...o.filledTrack};return n.jsx(P.div,{className:N("ui-slider__track-filled",r),__css:b,...f({...a?{bg:a}:{},...d,...s},t)})});Ne.displayName="SliderFilledTrack";Ne.__ui__="SliderFilledTrack";const Ke=J(({className:r,...s},t)=>{const{styles:a,getMarkProps:o}=he(),d={alignItems:"center",display:"inline-flex",justifyContent:"center",...a.mark};return n.jsx(P.div,{className:N("ui-slider__mark",r),__css:d,...o(s,t)})});Ke.displayName="SliderMark";Ke.__ui__="SliderMark";const G=J(({className:r,...s},t)=>{const{styles:a,thumbColor:o,thumbSize:d,getThumbProps:f,thumbProps:b}=he(),g={...a.thumb};return n.jsx(P.div,{className:N("ui-slider__thumb",r),__css:g,...f({...o?{bg:o}:{},...d?{boxSize:d}:{},...b,...s},t)})});G.displayName="SliderThumb";G.__ui__="SliderThumb";const Ve=J((r,s)=>{const[t,a]=je("Switch",r),{className:o,children:d,flexDirection:f,gap:b="0.5rem",icon:g,isReverse:l,transition:i={type:"spring",damping:40,stiffness:700},inputProps:h,labelProps:z,...A}=Pe(a),{isActive:D,isChecked:V,isFocused:H,isHovered:E,props:j,getContainerProps:k,getIconProps:w,getInputProps:U,getLabelProps:W}=ht({selectOnEnter:!0,...A}),T=g?u.cloneElement(g,{isActive:D,isChecked:V,isFocused:H,isHovered:E}):null;return n.jsxs(P.label,{ref:s,className:N("ui-switch",o),__css:{alignItems:"center",cursor:"pointer",display:"inline-flex",flexDirection:f??(l?"row-reverse":"row"),gap:b,position:"relative",verticalAlign:"top",...t.container},...k(),...j,children:[n.jsx(P.input,{className:N("ui-switch__input",o),"aria-checked":V,role:"switch",...U(h,s)}),T??n.jsx(ye.div,{layout:!0,layoutRoot:!0,children:n.jsx(P.span,{className:N("ui-switch__track",o),__css:{alignItems:"center",boxSizing:"content-box",display:"inline-flex",flexShrink:0,justifyContent:"flex-start",...t.track},...w(),children:n.jsx(ye.span,{className:N("ui-switch__thumb",o),"data-checked":M(V),layout:!0,transition:i,__css:{...t.thumb}})})}),d?n.jsx(P.span,{className:N("ui-switch__label",o),__css:{...t.label},...W(z),children:d}):null]})});Ve.displayName="Switch";Ve.__ui__="Switch";const gs=[...lt,...it],xs=({children:r})=>n.jsx(ct,{children:n.jsx(Ot,{children:r})}),Ot=({children:r})=>{const{changeColorMode:s}=St(),t=Le()?"dark":"light";return u.useEffect(()=>{s(t)},[t,s]),n.jsx(ut,{children:r})},Cs=({name:r,colors:s})=>Object.entries(s[r]??{}).map(([t,a])=>n.jsx(Lt,{name:r,tone:t,value:a},t)),Lt=({name:r,tone:s,value:t})=>{const a=Le()?"dark":"light";return n.jsxs(dt,{children:[n.jsx(mt,{bg:s?`${r}.${s}`:r,boxShadow:"inner",minH:"12",minW:"12",rounded:"md"}),n.jsxs(He,{gap:"1",children:[n.jsxs(Ee,{fontWeight:"semibold",lineClamp:1,m:"0",children:[r.charAt(0).toUpperCase()+r.slice(1)," ",s]}),n.jsx(Ee,{lineClamp:1,m:"0",children:_t(t)?a==="light"?t[0]:t[1]:t})]})]},s)},Ss=({colorScheme:r,size:s,variant:t,component:a,items:o,...d})=>{const f={colorScheme:r,size:s,variant:t};return n.jsx(He,{w:"auto",...d,children:o.map((b,g)=>n.jsx(Ht,{component:a,item:{...f,...b}},g))})},Ht=({component:r,item:s})=>{const{label:t,...a}=s,{isOpen:o,onClose:d,onOpen:f}=at();switch(r){case"Select":return n.jsx(ke,{label:t,children:n.jsx(Ft,{...a})});case"SegmentedControl":return n.jsx(ke,{label:t,children:n.jsx(we,{...a})});case"Slider":return n.jsx(ke,{label:t,children:n.jsx(Ie,{onMouseEnter:f,onMouseLeave:d,...a,children:n.jsx(It,{label:a.value,open:o,placement:"top",children:n.jsx(G,{})})})});default:return n.jsx(Ve,{...a,children:t})}};export{Lt as C,xs as J,Ss as P,we as S,ce as a,Ie as b,gs as c,Ke as d,G as e,ue as f,Ne as g,Ve as h,Cs as i,$t as j};

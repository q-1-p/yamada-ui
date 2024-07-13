import{j as d}from"./jsx-runtime-Nms4Y4qS.js";import{r as n}from"./index-BwDkhjyp.js";import{f as y}from"./forward-ref-BmTAT9U5.js";import{r as v,t as z,b as W,c as N,a as $}from"./factory-CtEVzbYf.js";const L=y(({direction:s="column",justify:e,align:r,wrap:w,gap:o="fallback(md, 1rem)",divider:m,className:_,children:R,...E},j)=>{const f=t=>t==="column"||t==="column-reverse",H=n.useMemo(()=>({w:v(s,t=>f(t)?"100%":"fix-content"),h:v(s,t=>f(t)?"fix-content":"100%"),borderLeftWidth:v(s,t=>f(t)?0:"1px"),borderBottomWidth:v(s,t=>f(t)?"1px":0)}),[s]),x=z(R),M=m?x.map((t,k)=>{const c=typeof t.key<"u"?t.key:k,h=n.cloneElement(m,{__css:H});return d.jsxs(n.Fragment,{children:[k?h:null,t]},c)}):x,S=n.useMemo(()=>({display:"flex",flexDirection:s,justifyContent:e,alignItems:r,flexWrap:w,gap:o}),[r,s,w,o,e]);return d.jsx(W.div,{ref:j,className:N("ui-stack",_),__css:S,...E,children:M})}),O=y(({className:s,...e},r)=>d.jsx(L,{ref:r,className:N("ui-stack--horizontal",s),direction:"row",align:"center",...e})),P=y(({className:s,...e},r)=>d.jsx(L,{ref:r,className:N("ui-stack--vertical",s),direction:"column",align:"stretch",w:"100%",...e})),q=y(({className:s,direction:e="bottom",startIndex:r=0,gap:w="fallback(md, 1rem)",reverse:o=!1,fit:m=!0,children:_,...R},E)=>{const j=n.useRef(new Map),[f,H]=n.useState({width:0,height:0}),x={minWidth:`${f.width}px`,minHeight:`${f.height}px`},M={position:"relative",overflow:"hidden",var:[{__prefix:"ui",name:"space",token:"spaces",value:w}],...m?x:{}},S=n.useCallback(c=>e.includes("top")?{[o?"top":"bottom"]:c}:e.includes("bottom")?{[o?"bottom":"top"]:c}:{[o?"bottom":"top"]:0},[e,o]),t=n.useCallback(c=>e.includes("left")?{[o?"left":"right"]:c}:e.includes("right")?{[o?"right":"left"]:c}:{[o?"right":"left"]:0},[e,o]),k=n.useMemo(()=>z(_).map((l,i)=>{const g=n.createRef();j.current.set(i,g);const b=l.key??i,p=r+i,u=`calc(var(--ui-space) * ${i})`;let a={};a={...a,position:"absolute",zIndex:p},a={...a,...S(u)},a={...a,...t(u)};const C={...l.props,ref:$(l.ref,g),__css:a},V=n.cloneElement(l,C);return d.jsx(n.Fragment,{children:V},b)}),[_,r,S,t]);return n.useEffect(()=>{if(!m)return;let c=e.includes("left"),h=e.includes("top"),l=0,i=0;o&&(c=!c,h=!h);for(const g of j.current.values()){if(!g.current)continue;let{offsetParent:b,offsetWidth:p,offsetHeight:u,offsetTop:a,offsetLeft:C}=g.current;b&&(c&&(C=b.offsetWidth-C-p),h&&(a=b.offsetHeight-a-u),p+=C,u+=a,p>l&&(l=p),u>i&&(i=u))}H({width:l,height:i})},[k,e,o,m]),d.jsx(W.div,{ref:E,className:N("ui-stack--depth",s),__css:M,...R,children:k})});export{O as H,L as S,P as V,q as Z};

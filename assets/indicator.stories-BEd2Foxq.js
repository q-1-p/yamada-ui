import{j as a}from"./jsx-runtime-CfatFE5O.js";import{u as Sa}from"./index-CjWtGFYg.js";import{u as Y}from"./index-CZSIMnfE.js";import{r as za}from"./index-ClcD9ViR.js";import{f as _a}from"./forward-ref-D13m8o2p.js";import{u as Ca}from"./use-component-style-D7fUVUlo.js";import{o as ya}from"./theme-provider-Dit74geM.js";import{b as u,c as A}from"./factory-Bqmz9C5P.js";import{W as w}from"./flex-CcbyqeIa.js";import{A as r}from"./avatar-B284UsOW.js";import{G as Wa}from"./grid-CMJGCuw8.js";import{B as Ba}from"./box-CS_Q_mBe.js";import"./index-gGKStiao.js";import"./index-B4UZJbBZ.js";import"./index-Pbv_ILj1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-DeZ7GCXS.js";import"./use-var-DKkLsRXg.js";import"./use-image-DwPG3Una.js";const Pa=(s,o)=>{const e={};let i="",n="";return s.includes("top")?(e.top=o,n="-50%"):s.includes("bottom")?(e.bottom=o,n="50%"):(e.top="50%",n="-50%"),s.includes("left")?(e.left=o,i="-50%"):s.includes("right")?(e.right=o,i="50%"):(e.left="50%",i="-50%"),e.transform=`translate(${i}, ${n})`,e},t=_a((s,o)=>{const[e,i]=Ca("Indicator",s),{className:n,children:na,isDisabled:sa,disabled:ia=sa,inline:ca=!1,label:c,offset:ma=0,overflowCount:H=99,ping:ua,pingColor:la="$ping",pingCount:da="infinite",pingDuration:pa="1.4s",pingScale:ha=1.8,placement:va="top-right",showZero:ba=!0,containerProps:ga,...xa}=ya(i,["withBorder"]),fa=Sa({duration:pa,fillMode:"forwards",iterationCount:da,keyframes:{"75%, 100%":{opacity:0,transform:`scale(${ha})`}},timingFunction:"cubic-bezier(0, 0, 0.2, 1)"}),m=typeof c=="number",ja=ia??(m&&!ba&&c<=0),Ia=Y(ca),wa=Y(va),Ha=Y(ma),Ya=za.useMemo(()=>m&&c>H?a.jsxs(a.Fragment,{children:[H,a.jsx(u.span,{lineHeight:1,children:"+"})]}):c,[m,c,H]),Aa={position:"absolute",...Pa(wa,Ha),...m?{fontWeight:"medium"}:{},...e};return a.jsxs(u.div,{ref:o,className:A("ui-indicator",n),__css:{display:Ia?"inline-block":"block",position:"relative"},...ga,children:[ja?null:a.jsxs(u.div,{ref:o,className:A("ui-indicator__icon",n),__css:Aa,...xa,children:[Ya,ua?a.jsx(u.div,{className:"ui-indicator__icon__ping",animation:fa,__css:{bg:la,boxSize:"100%",opacity:.75,position:"absolute",rounded:"fallback(full, 9999px)",zIndex:-1}}):null]}),na]})});t.displayName="Indicator";t.__ui__="Indicator";const Ua={component:t,title:"Components / Media And Icons / Indicator"},l=()=>a.jsxs(w,{gap:"md",children:[a.jsx(t,{label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{size:"lg",offset:1.5,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),d=()=>a.jsxs(w,{gap:"md",children:[a.jsx(t,{size:"sm",label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{size:"md",label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{size:"lg",label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),p=()=>a.jsxs(w,{gap:"md",children:[a.jsx(t,{variant:"solid",label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{variant:"subtle",label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),h=()=>a.jsxs(Wa,{gap:"md",p:"md",templateColumns:"repeat(3, 1fr)",children:[a.jsx(t,{label:99,placement:"top-left",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{label:99,placement:"top",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{label:99,placement:"top-right",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{label:99,placement:"left",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(Ba,{}),a.jsx(t,{label:99,placement:"right",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{label:99,placement:"bottom-left",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{label:99,placement:"bottom",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{label:99,placement:"bottom-right",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),v=()=>a.jsx(t,{label:"new",offset:4,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4",size:"2xl"})}),b=()=>a.jsx(t,{label:100,overflowCount:99,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),g=()=>a.jsxs(a.Fragment,{children:[a.jsx(t,{label:0,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{label:0,showZero:!1,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]}),x=()=>a.jsx(t,{label:99,withBorder:!0,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),f=()=>a.jsx(t,{isDisabled:!0,label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),j=()=>a.jsx(t,{inline:!0,label:"new",children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),I=()=>a.jsxs(w,{gap:"md",children:[a.jsx(t,{label:"new",ping:!0,pingScale:1.4,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{variant:"subtle",label:"new",ping:!0,pingScale:1.4,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{size:"lg",offset:1.5,ping:!0,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})}),a.jsx(t,{size:"lg",variant:"subtle",offset:1.5,ping:!0,children:a.jsx(r,{name:"Hirotomo Yamada",src:"https://avatars.githubusercontent.com/u/84060430?v=4"})})]});var S,z,_;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Indicator label="new">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>

      <Indicator size="lg" offset={1.5}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
    </Wrap>;
}`,...(_=(z=l.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var C,y,W;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Indicator size="sm" label="new">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator size="md" label="new">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator size="lg" label="new">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
    </Wrap>;
}`,...(W=(y=d.parameters)==null?void 0:y.docs)==null?void 0:W.source}}};var B,P,k;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Indicator variant="solid" label="new">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator variant="subtle" label="new">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
    </Wrap>;
}`,...(k=(P=p.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var O,D,N;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Grid gap="md" p="md" templateColumns="repeat(3, 1fr)">
      <Indicator label={99} placement="top-left">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator label={99} placement="top">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator label={99} placement="top-right">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator label={99} placement="left">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Box />
      <Indicator label={99} placement="right">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator label={99} placement="bottom-left">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator label={99} placement="bottom">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator label={99} placement="bottom-right">
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
    </Grid>;
}`,...(N=(D=h.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var Z,G,$;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <Indicator label="new" offset={4}>
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" size="2xl" />
    </Indicator>;
}`,...($=(G=v.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var E,F,M;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <Indicator label={100} overflowCount={99}>
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
    </Indicator>;
}`,...(M=(F=b.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var V,R,L;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <>
      <Indicator label={0}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
      <Indicator label={0} showZero={false}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
    </>;
}`,...(L=(R=g.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var T,X,q;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Indicator label={99} withBorder>
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
    </Indicator>;
}`,...(q=(X=x.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <Indicator isDisabled label="new">
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
    </Indicator>;
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,aa,ta;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <Indicator inline label="new">
      <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
    </Indicator>;
}`,...(ta=(aa=j.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var ra,ea,oa;I.parameters={...I.parameters,docs:{...(ra=I.parameters)==null?void 0:ra.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Indicator label="new" ping pingScale={1.4}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>

      <Indicator variant="subtle" label="new" ping pingScale={1.4}>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>

      <Indicator size="lg" offset={1.5} ping>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>

      <Indicator size="lg" variant="subtle" offset={1.5} ping>
        <Avatar name="Hirotomo Yamada" src="https://avatars.githubusercontent.com/u/84060430?v=4" />
      </Indicator>
    </Wrap>;
}`,...(oa=(ea=I.parameters)==null?void 0:ea.docs)==null?void 0:oa.source}}};const at=["basic","withSize","withVariant","withPlacement","withOffset","withOverflowCount","withShowZero","withBorder","hidden","useInlineBlock","withPing"];export{at as __namedExportsOrder,l as basic,Ua as default,f as hidden,j as useInlineBlock,x as withBorder,v as withOffset,b as withOverflowCount,I as withPing,h as withPlacement,g as withShowZero,d as withSize,p as withVariant};

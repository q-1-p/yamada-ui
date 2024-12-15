import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as B}from"./index-ClcD9ViR.js";import{u as oe}from"./index-D-iNr3rb.js";import{m as ne}from"./forward-ref-2BKBy0Yi.js";import{u as ae}from"./use-var-DKkLsRXg.js";import{u as se}from"./use-animation-DC2bV0hb.js";import{m as ie}from"./factory-Cbq3E2qU.js";import{c as ce,d as O}from"./factory-Bqmz9C5P.js";import{u as le}from"./use-component-style-D7fUVUlo.js";import{o as xe}from"./theme-provider-Dit74geM.js";import{C as o}from"./center-DxI5r7X_.js";import{T as r}from"./text-Cr1YzEG3.js";import{M as S}from"./menu-DgzhaZLz.js";import{X as y}from"./x-CzIGVV0l.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./proxy-BYKFXsWv.js";import"./forward-ref-D13m8o2p.js";import"./icon-DeZ7GCXS.js";import"./createLucideIcon-C_T9K6g-.js";const t=ne((m,p)=>{const[j,G]=le("Airy",m),{className:H,defaultValue:J="from",delay:z=0,isDisabled:K,disabled:v=K,duration:d=.2,from:L,isReadOnly:Q,readOnly:f=Q,to:U,value:W,onChange:Y,...w}=xe(G),[Z,{opacity:u}]=ae({opacity:1,...j,...w},["opacity"],{transform:!0}),n=se(),[h,C]=oe({defaultValue:J,value:W,onChange:Y}),ee={vars:Z,...j},re=B.useCallback(async()=>{f||(await n.start({opacity:0,transition:{delay:z,duration:d}}),C(te=>te==="from"?"to":"from"),await n.start({opacity:u,transition:{duration:d}}))},[n,C,f,u,d,z]);return e.jsx(ie.button,{ref:p,type:"button",className:ce("ui-airy",`ui-airy--${h}`,H),"data-disabled":O(v),"data-readonly":O(f),"data-value":h,animate:n,disabled:v,initial:{opacity:u},onClick:re,__css:ee,...w,children:h==="from"?L:U})});t.displayName="Airy";t.__ui__="Airy";const be={component:t,title:"Components / Transitions / Airy"},a=()=>e.jsxs(o,{flexDirection:"column",gap:"md",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(t,{from:e.jsx(r,{fontSize:"2xl",children:"ON"}),to:e.jsx(r,{fontSize:"2xl",children:"OFF"})}),e.jsx(t,{from:e.jsx(S,{fontSize:"2xl"}),to:e.jsx(y,{fontSize:"2xl"})})]}),s=()=>e.jsxs(o,{flexDirection:"column",gap:"md",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(t,{duration:.6,from:e.jsx(r,{fontSize:"2xl",children:"ON"}),to:e.jsx(r,{fontSize:"2xl",children:"OFF"})}),e.jsx(t,{duration:.6,from:e.jsx(S,{fontSize:"2xl"}),to:e.jsx(y,{fontSize:"2xl"})})]}),i=()=>e.jsxs(o,{flexDirection:"column",gap:"md",h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:[e.jsx(t,{delay:1,from:e.jsx(r,{fontSize:"2xl",children:"ON"}),to:e.jsx(r,{fontSize:"2xl",children:"OFF"})}),e.jsx(t,{delay:1,from:e.jsx(S,{fontSize:"2xl"}),to:e.jsx(y,{fontSize:"2xl"})})]}),c=()=>e.jsx(o,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(t,{disabled:!0,from:e.jsx(r,{fontSize:"2xl",children:"ON"}),to:e.jsx(r,{fontSize:"2xl",children:"OFF"})})}),l=()=>e.jsx(o,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(t,{from:e.jsx(r,{fontSize:"2xl",children:"ON"}),readOnly:!0,to:e.jsx(r,{fontSize:"2xl",children:"OFF"})})}),x=()=>{const[m,p]=B.useState("to");return e.jsx(o,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:e.jsx(t,{from:e.jsx(r,{fontSize:"2xl",children:"ON"}),to:e.jsx(r,{fontSize:"2xl",children:"OFF"}),value:m,onChange:p})})};var T,F,g;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Center flexDirection="column" gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy from={<Text fontSize="2xl">ON</Text>} to={<Text fontSize="2xl">OFF</Text>} />

      <Airy from={<MenuIcon fontSize="2xl" />} to={<XIcon fontSize="2xl" />} />
    </Center>;
}`,...(g=(F=a.parameters)==null?void 0:F.docs)==null?void 0:g.source}}};var A,N,b;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <Center flexDirection="column" gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy duration={0.6} from={<Text fontSize="2xl">ON</Text>} to={<Text fontSize="2xl">OFF</Text>} />

      <Airy duration={0.6} from={<MenuIcon fontSize="2xl" />} to={<XIcon fontSize="2xl" />} />
    </Center>;
}`,...(b=(N=s.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var D,I,_;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Center flexDirection="column" gap="md" h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy delay={1} from={<Text fontSize="2xl">ON</Text>} to={<Text fontSize="2xl">OFF</Text>} />

      <Airy delay={1} from={<MenuIcon fontSize="2xl" />} to={<XIcon fontSize="2xl" />} />
    </Center>;
}`,...(_=(I=i.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var M,R,X;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy disabled from={<Text fontSize="2xl">ON</Text>} to={<Text fontSize="2xl">OFF</Text>} />
    </Center>;
}`,...(X=(R=c.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var P,E,V;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy from={<Text fontSize="2xl">ON</Text>} readOnly to={<Text fontSize="2xl">OFF</Text>} />
    </Center>;
}`,...(V=(E=l.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var k,$,q;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<AiryIdent>("to");
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Airy from={<Text fontSize="2xl">ON</Text>} to={<Text fontSize="2xl">OFF</Text>} value={value} onChange={onChange} />
    </Center>;
}`,...(q=($=x.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const De=["basic","withDuration","withDelay","isDisabled","isReadonly","customControl"];export{De as __namedExportsOrder,a as basic,x as customControl,be as default,c as isDisabled,l as isReadonly,i as withDelay,s as withDuration};

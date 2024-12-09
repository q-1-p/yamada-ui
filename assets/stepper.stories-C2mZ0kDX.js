import{j as t}from"./jsx-runtime-CfatFE5O.js";import{c as mt}from"./components-DwxTyLM4.js";import{r as m}from"./index-ClcD9ViR.js";import{c as St}from"./index-BaE0cyT7.js";import{A as rt,a as xt,b as x,c as v,d as ht,I as M}from"./factory-ZSnRp-09.js";import{f as j}from"./forward-ref-D13m8o2p.js";import{b as vt}from"./icon-D-mdHq7J.js";import{a as jt}from"./use-component-style-Bj6hwx_Q.js";import{o as _t}from"./theme-provider-B08WIPTu.js";import{H as F}from"./stack-C-NTCosl.js";import{B as h}from"./button-CP_V-DFs.js";import{B as ot}from"./box-C9iD9jp7.js";import{G as kt}from"./ghost-BgUXhf6-.js";import"./text-Q2VnSl4h.js";import"./index-CReU6qRk.js";import"./use-checkbox-U_dzeJq7.js";import"./index-C676fJGf.js";import"./form-control-CsCePsX1.js";import"./factory-g1ZPYqox.js";import"./proxy-Cmv22F1b.js";import"./index-_1kmLYlG.js";import"./index-BLmAVBUH.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-BqMKFNOM.js";import"./tooltip-rXJtZ5n9.js";import"./index-DX5Nxq0F.js";import"./index-DB9HLODl.js";import"./index-CP6OdolE.js";import"./index-kFzQREm-.js";import"./index-Co5PRCxP.js";import"./index-CIS69Ejq.js";import"./portal-Dqf7N2XQ.js";import"./index-ZuzByk-F.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./slide-fade-CyNwX6Ij.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-CcwEU3c6.js";import"./scale-fade-C0eR_7w0.js";import"./index-1Z3RJR9I.js";import"./select-DPhgsqyB.js";import"./select-list-Dk68ypy9.js";import"./index-CGbpPqLk.js";import"./popover-trigger-BUAG4wKM.js";import"./close-button-zTZFYbSs.js";import"./use-ripple-DvgegkL5.js";import"./index-CYzpnABI.js";import"./index-gGKStiao.js";import"./index-Bnw1OyhA.js";import"./loading-YSmVr9V5.js";import"./createLucideIcon-C_T9K6g-.js";const{DescendantsContextProvider:Ct,useDescendant:ft,useDescendants:Nt}=St(),[gt,_]=rt({name:"StepperContext",errorMessage:`useStepperContext returned is 'undefined'. Seems you forgot to wrap the components in "<Stepper />"`}),Pt=({index:e,orientation:s="horizontal",showLastSeparator:n=!1,...r})=>{const o=Nt(),i=m.useCallback(c=>c<e?"complete":c>e?"incomplete":"active",[e]),p=m.useCallback((c={},a=null)=>({...r,...c,ref:a,"data-orientation":s}),[s,r]);return{descendants:o,getStepStatus:i,index:e,orientation:s,showLastSeparator:n,getContainerProps:p}},Bt=()=>{var S;const{getStepStatus:e,orientation:s}=_(),{descendants:n,index:r,register:o}=ft(),i=r===0,p=r===((S=n.lastValue())==null?void 0:S.index),c=e(r),a=m.useCallback((d={},k=null)=>({...d,ref:xt(k,o),"data-orientation":s,"data-status":c}),[s,o,c]);return{index:r,isFirst:i,isLast:p,status:c,getStepProps:a}},[yt,C]=rt({name:"StepperContext",errorMessage:`useStepContext returned is 'undefined'. Seems you forgot to wrap the components in "<Step />"`}),f=j(({className:e,...s},n)=>{const{orientation:r,showLastSeparator:o,styles:i}=_(),{index:p,isFirst:c,isLast:a,status:S,getStepProps:d}=Bt(),k={...i.step};return t.jsx(yt,{value:{index:p,isFirst:c,isLast:a,status:S},children:t.jsx(x.div,{className:v("ui-step",e),"data-orientation":r,"data-stretch":ht(o),__css:k,...d(s,n)})})});f.displayName="Step";f.__ui__="Step";const N=j(({className:e,...s},n)=>{const{styles:r}=_(),{status:o}=C(),i={...r.description};return t.jsx(x.p,{ref:n,className:v("ui-step__description",e),"data-status":o,__css:i,...s})});N.displayName="StepDescription";N.__ui__="StepDescription";const g=j(({className:e,...s},n)=>{const{orientation:r,showLastSeparator:o,styles:i}=_(),{isLast:p,status:c}=C(),a={...i.separator};return p&&!o?null:t.jsx(x.div,{ref:n,className:v("ui-step__separator",e),"data-orientation":r,"data-status":c,role:"separator",__css:a,...s})});g.displayName="StepSeparator";g.__ui__="StepSeparator";const P=j(({className:e,active:s=t.jsx(I,{}),complete:n=t.jsx(L,{}),incomplete:r=t.jsx(I,{}),...o},i)=>{const{styles:p}=_(),{status:c,...a}=C(),S={...p.status};let d=null;switch(c){case"complete":d=M(n,a);break;case"incomplete":d=M(r,a);break;case"active":d=M(s,a);break}return t.jsx(x.div,{ref:i,className:v("ui-step__status",e),"data-status":c,__css:S,...o,children:d||null})});P.displayName="StepStatus";P.__ui__="StepStatus";const I=j(({className:e,children:s,...n},r)=>{const{styles:o}=_(),{index:i,status:p}=C(),c={...o.number};return t.jsx(x.div,{ref:r,className:v("ui-step__number",e),"data-status":p,__css:c,...n,children:s||i+1})});I.displayName="StepNumber";I.__ui__="StepNumber";const L=j(({className:e,...s},n)=>{const{styles:r}=_(),{status:o}=C(),i=o==="complete"?bt:void 0,p={...r.icon};return t.jsx(vt,{ref:n,as:i,className:v("ui-step__icon",e),"data-status":o,__css:p,...s})});L.displayName="StepIcon";L.__ui__="StepIcon";const bt=e=>t.jsx("svg",{"aria-hidden":"true",fill:"currentColor",height:"1em",stroke:"currentColor",strokeWidth:"0",viewBox:"0 0 20 20",width:"1em",...e,children:t.jsx("path",{clipRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",fillRule:"evenodd"})}),B=j(({className:e,...s},n)=>{const{styles:r}=_(),{status:o}=C(),i={...r.title};return t.jsx(x.h3,{ref:n,className:v("ui-step__title",e),"data-status":o,__css:i,...s})});B.displayName="StepTitle";B.__ui__="StepTitle";const u=j((e,s)=>{const[n,r]=jt("Stepper",e),{className:o,children:i,steps:p,...c}=_t(r),{descendants:a,getContainerProps:S,...d}=Pt(c),k=m.useMemo(()=>i??(p==null?void 0:p.map(({description:R,hasSeparator:it=!0,title:A,descriptionProps:pt,separatorProps:ct,statusProps:at,titleProps:lt,...dt},ut)=>t.jsxs(f,{...dt,children:[t.jsx(P,{...at}),t.jsxs(x.div,{flexShrink:0,children:[A?t.jsx(B,{...lt,children:A}):null,R?t.jsx(N,{...pt,children:R}):null]}),it?t.jsx(g,{...ct}):null]},ut))),[i,p]),l={...n.stepper};return t.jsx(Ct,{value:a,children:t.jsx(gt,{value:{...d,styles:n},children:t.jsx(x.div,{className:v("ui-stepper",o),__css:l,...S({},s),children:k})})})});u.displayName="Stepper";u.__ui__="Stepper";const T=({count:e,index:s=0})=>{const[n,r]=m.useState(s),o=typeof e=="number"?e-1:0,i=n/o,p=m.useCallback(l=>l===n,[n]),c=m.useCallback(l=>l<n,[n]),a=m.useCallback(l=>l>n,[n]),S=m.useCallback(l=>l<n?"complete":l>n?"incomplete":"active",[n]),d=m.useCallback(()=>r(l=>typeof e=="number"?Math.min(e,l+1):l+1),[e]),k=m.useCallback(()=>r(l=>Math.max(0,l-1)),[]);return{activeStep:n,activeStepPercent:i,getStepStatus:S,isActiveStep:p,isCompleteStep:c,isIncompleteStep:a,setActiveStep:r,onStepNext:d,onStepPrev:k}},ye={component:u,title:"Components / Navigation / Stepper"},y=()=>{const e=[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}],{activeStep:s,onStepNext:n,onStepPrev:r}=T({count:e.length,index:1});return t.jsxs(t.Fragment,{children:[t.jsx(u,{index:s,steps:e}),t.jsxs(F,{children:[t.jsx(h,{onClick:r,children:"Prev"}),t.jsx(h,{onClick:n,children:"Next"})]})]})},b=()=>{const e=[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}];return t.jsxs(t.Fragment,{children:[t.jsx(u,{size:"sm",index:1,steps:e}),t.jsx(u,{size:"md",index:1,steps:e}),t.jsx(u,{size:"lg",index:1,steps:e})]})},w=()=>{const e=[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}];return t.jsx(t.Fragment,{children:mt.map(s=>t.jsx(u,{colorScheme:s,index:1,steps:e},s))})},z=()=>{const e=[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}],{activeStep:s,onStepNext:n,onStepPrev:r}=T({count:e.length,index:1});return t.jsxs(t.Fragment,{children:[t.jsx(u,{index:s,orientation:"horizontal",steps:e}),t.jsx(u,{h:"sm",index:s,orientation:"vertical",steps:e}),t.jsxs(F,{children:[t.jsx(h,{onClick:r,children:"Prev"}),t.jsx(h,{onClick:n,children:"Next"})]})]})},D=()=>{const e=[{description:"レッドリボン軍",title:"孫悟空少年編"},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編"},{description:"ベジータ・ナッパ",title:"サイヤ人編"}],{activeStep:s,onStepNext:n,onStepPrev:r}=T({count:e.length,index:1});return t.jsxs(t.Fragment,{children:[t.jsx(u,{index:s,children:e.map(({description:o,title:i},p)=>t.jsxs(f,{children:[t.jsx(P,{}),t.jsxs(ot,{flexShrink:"0",children:[t.jsx(B,{children:i}),t.jsx(N,{children:o})]}),t.jsx(g,{})]},p))}),t.jsxs(F,{children:[t.jsx(h,{onClick:r,children:"Prev"}),t.jsx(h,{onClick:n,children:"Next"})]})]})},H=()=>{const e=[{description:"レッドリボン軍",title:"孫悟空少年編",statusProps:{active:"😎",complete:"😇",incomplete:"😑"}},{description:"ピッコロ大魔王",title:"ピッコロ大魔王編",statusProps:{active:"😎",complete:"😇",incomplete:"😑"}},{description:"ベジータ・ナッパ",title:"サイヤ人編",statusProps:{active:"😎",complete:"😇",incomplete:"😑"}}],{activeStep:s,onStepNext:n,onStepPrev:r}=T({count:e.length,index:1});return t.jsxs(t.Fragment,{children:[t.jsx(u,{index:s,steps:e}),t.jsx(u,{index:s,children:e.map(({description:o,title:i},p)=>t.jsxs(f,{children:[t.jsx(P,{complete:t.jsx(kt,{fontSize:"xl"})}),t.jsxs(ot,{flexShrink:"0",children:[t.jsx(B,{children:i}),t.jsx(N,{children:o})]}),t.jsx(g,{})]},p))}),t.jsxs(F,{children:[t.jsx(h,{onClick:r,children:"Prev"}),t.jsx(h,{onClick:n,children:"Next"})]})]})};var E,G,O;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    description: "レッドリボン軍",
    title: "孫悟空少年編"
  }, {
    description: "ピッコロ大魔王",
    title: "ピッコロ大魔王編"
  }, {
    description: "ベジータ・ナッパ",
    title: "サイヤ人編"
  }];
  const {
    activeStep,
    onStepNext,
    onStepPrev
  } = useSteps({
    count: steps.length,
    index: 1
  });
  return <>
      <Stepper index={activeStep} steps={steps} />

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>;
}`,...(O=(G=y.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var V,W,q;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    description: "レッドリボン軍",
    title: "孫悟空少年編"
  }, {
    description: "ピッコロ大魔王",
    title: "ピッコロ大魔王編"
  }, {
    description: "ベジータ・ナッパ",
    title: "サイヤ人編"
  }];
  return <>
      <Stepper size="sm" index={1} steps={steps} />

      <Stepper size="md" index={1} steps={steps} />

      <Stepper size="lg" index={1} steps={steps} />
    </>;
}`,...(q=(W=b.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var J,K,Q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    description: "レッドリボン軍",
    title: "孫悟空少年編"
  }, {
    description: "ピッコロ大魔王",
    title: "ピッコロ大魔王編"
  }, {
    description: "ベジータ・ナッパ",
    title: "サイヤ人編"
  }];
  return <>
      {colorSchemes.map(colorScheme => <Stepper key={colorScheme} colorScheme={colorScheme} index={1} steps={steps} />)}
    </>;
}`,...(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;z.parameters={...z.parameters,docs:{...(U=z.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    description: "レッドリボン軍",
    title: "孫悟空少年編"
  }, {
    description: "ピッコロ大魔王",
    title: "ピッコロ大魔王編"
  }, {
    description: "ベジータ・ナッパ",
    title: "サイヤ人編"
  }];
  const {
    activeStep,
    onStepNext,
    onStepPrev
  } = useSteps({
    count: steps.length,
    index: 1
  });
  return <>
      <Stepper index={activeStep} orientation="horizontal" steps={steps} />

      <Stepper h="sm" index={activeStep} orientation="vertical" steps={steps} />

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>;
}`,...(Y=(X=z.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,tt;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    description: "レッドリボン軍",
    title: "孫悟空少年編"
  }, {
    description: "ピッコロ大魔王",
    title: "ピッコロ大魔王編"
  }, {
    description: "ベジータ・ナッパ",
    title: "サイヤ人編"
  }];
  const {
    activeStep,
    onStepNext,
    onStepPrev
  } = useSteps({
    count: steps.length,
    index: 1
  });
  return <>
      <Stepper index={activeStep}>
        {steps.map(({
        description,
        title
      }, index) => <Step key={index}>
            <StepStatus />

            <Box flexShrink="0">
              <StepTitle>{title}</StepTitle>
              <StepDescription>{description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>)}
      </Stepper>

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>;
}`,...(tt=($=D.parameters)==null?void 0:$.docs)==null?void 0:tt.source}}};var et,nt,st;H.parameters={...H.parameters,docs:{...(et=H.parameters)==null?void 0:et.docs,source:{originalSource:`() => {
  const steps: Steps = [{
    description: "レッドリボン軍",
    title: "孫悟空少年編",
    statusProps: {
      active: \`😎\`,
      complete: \`😇\`,
      incomplete: \`😑\`
    }
  }, {
    description: "ピッコロ大魔王",
    title: "ピッコロ大魔王編",
    statusProps: {
      active: \`😎\`,
      complete: \`😇\`,
      incomplete: \`😑\`
    }
  }, {
    description: "ベジータ・ナッパ",
    title: "サイヤ人編",
    statusProps: {
      active: \`😎\`,
      complete: \`😇\`,
      incomplete: \`😑\`
    }
  }];
  const {
    activeStep,
    onStepNext,
    onStepPrev
  } = useSteps({
    count: steps.length,
    index: 1
  });
  return <>
      <Stepper index={activeStep} steps={steps} />

      <Stepper index={activeStep}>
        {steps.map(({
        description,
        title
      }, index) => <Step key={index}>
            <StepStatus complete={<GhostIcon fontSize="xl" />} />

            <Box flexShrink="0">
              <StepTitle>{title}</StepTitle>
              <StepDescription>{description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>)}
      </Stepper>

      <HStack>
        <Button onClick={onStepPrev}>Prev</Button>
        <Button onClick={onStepNext}>Next</Button>
      </HStack>
    </>;
}`,...(st=(nt=H.parameters)==null?void 0:nt.docs)==null?void 0:st.source}}};const be=["basic","withSize","withColorScheme","withOrientation","customStep","customStatus"];export{be as __namedExportsOrder,y as basic,H as customStatus,D as customStep,ye as default,w as withColorScheme,z as withOrientation,b as withSize};

import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as l}from"./index-ClcD9ViR.js";import{u as Pn,C as jn}from"./index.esm-Dl1kyd6X.js";import{u as Tn}from"./index-D-iNr3rb.js";import{c as En}from"./index-CieLuCnG.js";import{u as Fn,f as Ln}from"./form-control-DNngTyAT.js";import{A as zn,L as Nn,G as Hn,h as w,g as Jn,b as bn,c as Sn,a as Gn}from"./factory-Bqmz9C5P.js";import{f as yn}from"./forward-ref-D13m8o2p.js";import{a as Un}from"./use-component-style-D7fUVUlo.js";import{o as Wn}from"./theme-provider-Dit74geM.js";import{u as Cn}from"./loading-provider-DwZ6aWGm.js";import{F as S}from"./fieldset-2iPkQaSi.js";import{V as wn}from"./stack-DEpjuaqO.js";import{B as vn}from"./button-B8Q1YJpe.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-FkUjIXEe.js";import"./Combination-CkmEMpJG.js";import"./loading-CmllsJT7.js";import"./icon-DeZ7GCXS.js";import"./use-var-DKkLsRXg.js";import"./index-BkD6i14w.js";import"./proxy-BYKFXsWv.js";import"./portal-DBnEVTNa.js";import"./index-ZuzByk-F.js";import"./memo-CTsy6qLS.js";import"./factory-Cbq3E2qU.js";import"./visually-hidden-CuTTkjW9.js";import"./use-ripple-DFvMPDyV.js";const me=a=>a==null?void 0:a.split(""),ge=(a,u)=>(u==="alphanumeric"?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(a),[Xn,$n]=zn({name:"PinInputContext",errorMessage:`PinInputContext returned is 'undefined'. Seems you forgot to wrap the components in "<PinInput />"`}),{DescendantsContextProvider:Kn,useDescendant:Zn,useDescendants:Qn}=En(),n=yn(({errorBorderColor:a,focusBorderColor:u,...d},p)=>{const[g,f]=Un("PinInput",{errorBorderColor:a,focusBorderColor:u,...d}),m=l.useId(),{id:I=m,type:P="number",className:Vn,autoFocus:Y,children:Dn,defaultValue:kn,items:Rn=4,manageFocus:y=!0,mask:ee,otp:ne=!1,placeholder:se="○",value:Mn,onChange:U,onComplete:h,..._n}=Fn(Wn(f)),[{"aria-readonly":Yn,disabled:re,readOnly:W,...X},qn]=Nn(_n,Ln),o=Qn(),[te,$]=l.useState(!0),[ae,oe]=l.useState(-1),[j,C]=Tn({defaultValue:me(kn)||[],value:me(Mn),onChange:s=>U==null?void 0:U(s.join(""))}),On={alignItems:"center",display:"flex",...g.container},ie=l.useCallback(s=>{if(!te||!y)return;const r=o.nextValue(s,void 0,!1);r&&requestAnimationFrame(()=>r.node.focus())},[o,te,y]),K=l.useCallback((s,r)=>{const i=s==="next"?o.nextValue(r,void 0,!1):o.prevValue(r,void 0,!1);if(!i)return;const c=i.node.value.length;requestAnimationFrame(()=>{i.node.focus(),i.node.setSelectionRange(0,c)})},[o]),F=l.useCallback((s,r,i=!0)=>{var b;let c=[...j];c[r]=s,C(c),c=c.filter(Boolean),s!==""&&c.length===o.count()?(h==null||h(c.join("")),(b=o.value(r))==null||b.node.blur()):i&&ie(r)},[j,C,o,h,ie]),ue=l.useCallback((s,r)=>{let i=r;return s!=null&&s.length&&(s.startsWith(r.charAt(0))?i=r.charAt(1):s.startsWith(r.charAt(1))&&(i=r.charAt(0))),i},[]),le=l.useCallback(s=>({target:r})=>{var b;const i=r.value,c=j[s],x=ue(c,i);if(x===""){F("",s);return}if(i.length>2){if(!ge(i,P))return;const Q=i.split("").filter((es,Bn)=>Bn<o.count());C(Q),Q.length===o.count()&&(h==null||h(Q.join("")),(b=o.value(s))==null||b.node.blur())}else ge(x,P)&&F(x,s),$(!0)},[o,ue,h,F,C,P,j]),ce=l.useCallback(s=>r=>{if(!y)return;const c={ArrowLeft:()=>{r.preventDefault(),K("prev",s)},ArrowRight:()=>{r.preventDefault(),K("next",s)},Backspace:()=>{if(r.target.value===""){const x=o.prevValue(s,void 0,!1);if(!x)return;F("",s-1,!1),x.node.focus(),$(!0)}else $(!1)}}[r.key];c&&c()},[o,K,y,F]),de=l.useCallback(s=>()=>oe(s),[]),pe=l.useCallback(()=>oe(-1),[]);l.useEffect(()=>{if(!Y)return;const s=o.firstValue();s&&requestAnimationFrame(()=>s.node.focus())},[Y,o]);const An=l.useCallback(({index:s,...r})=>({type:ee?"password":P==="number"?"tel":"text",disabled:re,inputMode:P==="number"?"numeric":"text",readOnly:W,...X,...Hn(r),id:`${I}-${s}`,autoComplete:ne?"one-time-code":"off",placeholder:ae===s&&!W&&!r.readOnly?"":se,value:j[s]||"",onBlur:w(r.onBlur,pe),onChange:w(r.onChange,le(s)),onFocus:w(r.onFocus,de(s)),onKeyDown:w(r.onKeyDown,ce(s))}),[P,ee,X,I,j,le,ce,de,pe,ne,ae,re,W,se]);let Z=Jn(Dn);if(!Z.length)for(let s=0;s<Rn;s++)Z.push(e.jsx(t,{},s));return e.jsx(Kn,{value:o,children:e.jsx(Xn,{value:{styles:g,getInputProps:An},children:e.jsx(bn.div,{ref:p,className:Sn("ui-pin-input",Vn),role:"group",__css:On,...X,...qn,children:Z})})})});n.displayName="PinInput";n.__ui__="PinInput";const t=yn(({className:a,...u},d)=>{const{styles:p,getInputProps:g}=$n(),{index:f,register:m}=Zn(),I={...p.field};return u=Fn(u),e.jsx(bn.input,{className:Sn("ui-pin-input__field",a),...g({...u,ref:Gn(m,d),index:f}),__css:I})});t.displayName="PinInputField";t.__ui__="PinInputField";const Ds={component:n,title:"Components / Forms / PinInput"},v=()=>e.jsx(n,{}),V=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"xs"}),e.jsx(n,{size:"sm"}),e.jsx(n,{size:"md"}),e.jsx(n,{size:"lg"})]}),D=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline"}),e.jsx(n,{variant:"filled"}),e.jsx(n,{variant:"flushed"}),e.jsx(n,{variant:"unstyled"})]}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{items:3}),e.jsx(n,{items:4}),e.jsx(n,{items:5}),e.jsx(n,{items:6})]}),R=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(n,{type:"alphanumeric"})]}),M=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{defaultValue:"1234"}),e.jsx(n,{defaultValue:"123"})]}),_=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(n,{focusBorderColor:"green.500"}),e.jsx(n,{errorBorderColor:"orange.500",isInvalid:!0})]}),q=()=>{const{page:a}=Cn();return e.jsx(n,{onComplete:()=>a.start({duration:5e3})})},O=()=>e.jsx(n,{otp:!0}),A=()=>e.jsx(n,{mask:!0}),B=()=>e.jsxs(n,{children:[e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{}),e.jsx(t,{})]}),T=()=>e.jsx(n,{placeholder:"💩"}),E=()=>{const{page:a}=Cn(),[u,d]=l.useState(""),p=()=>a.start({duration:5e3});return e.jsx(n,{value:u,onChange:d,onComplete:p})},L=()=>e.jsx(n,{manageFocus:!1}),z=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isDisabled:!0}),e.jsxs(n,{children:[e.jsx(t,{isDisabled:!0}),e.jsx(t,{isDisabled:!0}),e.jsx(t,{isDisabled:!0}),e.jsx(t,{isDisabled:!0})]}),e.jsx(S,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",isDisabled:!0,legend:"Please one-time password",children:e.jsx(n,{})})]}),N=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReadOnly:!0}),e.jsxs(n,{children:[e.jsx(t,{isReadOnly:!0}),e.jsx(t,{isReadOnly:!0}),e.jsx(t,{isReadOnly:!0}),e.jsx(t,{isReadOnly:!0})]}),e.jsx(S,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",isReadOnly:!0,legend:"Please one-time password",children:e.jsx(n,{})})]}),H=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isInvalid:!0}),e.jsxs(n,{children:[e.jsx(t,{isInvalid:!0}),e.jsx(t,{isInvalid:!0}),e.jsx(t,{isInvalid:!0}),e.jsx(t,{isInvalid:!0})]}),e.jsx(S,{errorMessage:"one-time password is required.",helperMessage:"Just sent you a one-time password to your e-mail address.",isInvalid:!0,legend:"Please one-time password",children:e.jsx(n,{})})]}),J=()=>{var f;const{control:a,formState:{errors:u},handleSubmit:d,watch:p}=Pn(),g=m=>console.log("submit:",m);return console.log("watch:",p()),e.jsxs(wn,{as:"form",onSubmit:d(g),children:[e.jsx(S,{errorMessage:(f=u.pinInput)==null?void 0:f.message,isInvalid:!!u.pinInput,legend:"Token",children:e.jsx(jn,{name:"pinInput",control:a,render:({field:m})=>e.jsx(n,{...m}),rules:{minLength:{message:"This is required.",value:4},required:{message:"This is required.",value:!0}}})}),e.jsx(vn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},G=()=>{var m;const a={pinInput:"5"},{control:u,formState:{errors:d},handleSubmit:p,watch:g}=Pn({defaultValues:a}),f=I=>console.log("submit:",I);return console.log("watch:",g()),e.jsxs(wn,{as:"form",onSubmit:p(f),children:[e.jsx(S,{errorMessage:(m=d.pinInput)==null?void 0:m.message,isInvalid:!!d.pinInput,legend:"Token",children:e.jsx(jn,{name:"pinInput",control:u,render:({field:I})=>e.jsx(n,{...I}),rules:{minLength:{message:"This is required.",value:4},required:{message:"This is required.",value:!0}}})}),e.jsx(vn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var fe,Ie,he;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <PinInput />;
}`,...(he=(Ie=v.parameters)==null?void 0:Ie.docs)==null?void 0:he.source}}};var xe,Pe,je;V.parameters={...V.parameters,docs:{...(xe=V.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  return <>
      <PinInput size="xs" />

      <PinInput size="sm" />

      <PinInput size="md" />

      <PinInput size="lg" />
    </>;
}`,...(je=(Pe=V.parameters)==null?void 0:Pe.docs)==null?void 0:je.source}}};var Fe,be,Se;D.parameters={...D.parameters,docs:{...(Fe=D.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <>
      <PinInput variant="outline" />

      <PinInput variant="filled" />

      <PinInput variant="flushed" />

      <PinInput variant="unstyled" />
    </>;
}`,...(Se=(be=D.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var ye,Ce,we;k.parameters={...k.parameters,docs:{...(ye=k.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <>
      <PinInput items={3} />

      <PinInput items={4} />

      <PinInput items={5} />

      <PinInput items={6} />
    </>;
}`,...(we=(Ce=k.parameters)==null?void 0:Ce.docs)==null?void 0:we.source}}};var ve,Ve,De;R.parameters={...R.parameters,docs:{...(ve=R.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  return <>
      <PinInput />

      <PinInput type="alphanumeric" />
    </>;
}`,...(De=(Ve=R.parameters)==null?void 0:Ve.docs)==null?void 0:De.source}}};var ke,Re,Me;M.parameters={...M.parameters,docs:{...(ke=M.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <>
      <PinInput defaultValue="1234" />

      <PinInput defaultValue="123" />
    </>;
}`,...(Me=(Re=M.parameters)==null?void 0:Re.docs)==null?void 0:Me.source}}};var _e,qe,Oe;_.parameters={..._.parameters,docs:{...(_e=_.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  return <>
      <PinInput />

      <PinInput focusBorderColor="green.500" />

      <PinInput errorBorderColor="orange.500" isInvalid />
    </>;
}`,...(Oe=(qe=_.parameters)==null?void 0:qe.docs)==null?void 0:Oe.source}}};var Ae,Be,Te;q.parameters={...q.parameters,docs:{...(Ae=q.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  return <PinInput onComplete={() => page.start({
    duration: 5000
  })} />;
}`,...(Te=(Be=q.parameters)==null?void 0:Be.docs)==null?void 0:Te.source}}};var Ee,Le,ze;O.parameters={...O.parameters,docs:{...(Ee=O.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <PinInput otp />;
}`,...(ze=(Le=O.parameters)==null?void 0:Le.docs)==null?void 0:ze.source}}};var Ne,He,Je;A.parameters={...A.parameters,docs:{...(Ne=A.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  return <PinInput mask />;
}`,...(Je=(He=A.parameters)==null?void 0:He.docs)==null?void 0:Je.source}}};var Ge,Ue,We;B.parameters={...B.parameters,docs:{...(Ge=B.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  return <PinInput>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>;
}`,...(We=(Ue=B.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var Xe,$e,Ke;T.parameters={...T.parameters,docs:{...(Xe=T.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
  return <PinInput placeholder="💩" />;
}`,...(Ke=($e=T.parameters)==null?void 0:$e.docs)==null?void 0:Ke.source}}};var Ze,Qe,Ye;E.parameters={...E.parameters,docs:{...(Ze=E.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  const [value, onChange] = useState("");
  const onComplete = () => page.start({
    duration: 5000
  });
  return <PinInput value={value} onChange={onChange} onComplete={onComplete} />;
}`,...(Ye=(Qe=E.parameters)==null?void 0:Qe.docs)==null?void 0:Ye.source}}};var en,nn,sn;L.parameters={...L.parameters,docs:{...(en=L.parameters)==null?void 0:en.docs,source:{originalSource:`() => {
  return <PinInput manageFocus={false} />;
}`,...(sn=(nn=L.parameters)==null?void 0:nn.docs)==null?void 0:sn.source}}};var rn,tn,an;z.parameters={...z.parameters,docs:{...(rn=z.parameters)==null?void 0:rn.docs,source:{originalSource:`() => {
  return <>
      <PinInput isDisabled />

      <PinInput>
        <PinInputField isDisabled />
        <PinInputField isDisabled />
        <PinInputField isDisabled />
        <PinInputField isDisabled />
      </PinInput>

      <Fieldset errorMessage="one-time password is required." helperMessage="Just sent you a one-time password to your e-mail address." isDisabled legend="Please one-time password">
        <PinInput />
      </Fieldset>
    </>;
}`,...(an=(tn=z.parameters)==null?void 0:tn.docs)==null?void 0:an.source}}};var on,un,ln;N.parameters={...N.parameters,docs:{...(on=N.parameters)==null?void 0:on.docs,source:{originalSource:`() => {
  return <>
      <PinInput isReadOnly />

      <PinInput>
        <PinInputField isReadOnly />
        <PinInputField isReadOnly />
        <PinInputField isReadOnly />
        <PinInputField isReadOnly />
      </PinInput>

      <Fieldset errorMessage="one-time password is required." helperMessage="Just sent you a one-time password to your e-mail address." isReadOnly legend="Please one-time password">
        <PinInput />
      </Fieldset>
    </>;
}`,...(ln=(un=N.parameters)==null?void 0:un.docs)==null?void 0:ln.source}}};var cn,dn,pn;H.parameters={...H.parameters,docs:{...(cn=H.parameters)==null?void 0:cn.docs,source:{originalSource:`() => {
  return <>
      <PinInput isInvalid />

      <PinInput>
        <PinInputField isInvalid />
        <PinInputField isInvalid />
        <PinInputField isInvalid />
        <PinInputField isInvalid />
      </PinInput>

      <Fieldset errorMessage="one-time password is required." helperMessage="Just sent you a one-time password to your e-mail address." isInvalid legend="Please one-time password">
        <PinInput />
      </Fieldset>
    </>;
}`,...(pn=(dn=H.parameters)==null?void 0:dn.docs)==null?void 0:pn.source}}};var mn,gn,fn;J.parameters={...J.parameters,docs:{...(mn=J.parameters)==null?void 0:mn.docs,source:{originalSource:`() => {
  interface Data {
    pinInput: string;
  }
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Fieldset errorMessage={errors.pinInput?.message} isInvalid={!!errors.pinInput} legend="Token">
        <Controller name="pinInput" control={control} render={({
        field
      }) => <PinInput {...field} />} rules={{
        minLength: {
          message: "This is required.",
          value: 4
        },
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(fn=(gn=J.parameters)==null?void 0:gn.docs)==null?void 0:fn.source}}};var In,hn,xn;G.parameters={...G.parameters,docs:{...(In=G.parameters)==null?void 0:In.docs,source:{originalSource:`() => {
  interface Data {
    pinInput: string;
  }
  const defaultValues: Data = {
    pinInput: "5"
  };
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Fieldset errorMessage={errors.pinInput?.message} isInvalid={!!errors.pinInput} legend="Token">
        <Controller name="pinInput" control={control} render={({
        field
      }) => <PinInput {...field} />} rules={{
        minLength: {
          message: "This is required.",
          value: 4
        },
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(xn=(hn=G.parameters)==null?void 0:hn.docs)==null?void 0:xn.source}}};const ks=["basic","withSize","withVariant","withFields","withType","withDefaultValue","withBorderColor","withOnComplete","useOneTimePassword","maskingValue","customFields","customPlaceholder","customControl","disabledFocusManagement","isDisabled","isReadonly","isInvalid","reactHookForm","reactHookFormWithDefaultValue"];export{ks as __namedExportsOrder,v as basic,E as customControl,B as customFields,T as customPlaceholder,Ds as default,L as disabledFocusManagement,z as isDisabled,H as isInvalid,N as isReadonly,A as maskingValue,J as reactHookForm,G as reactHookFormWithDefaultValue,O as useOneTimePassword,_ as withBorderColor,M as withDefaultValue,k as withFields,q as withOnComplete,V as withSize,R as withType,D as withVariant};

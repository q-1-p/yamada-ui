import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as l}from"./index-ClcD9ViR.js";import{u as ze,C as Pe}from"./index.esm-Dl1kyd6X.js";import{c as Le}from"./components-BHpPRnZt.js";import{u as Oe,f as _e,d as P}from"./form-control-DNngTyAT.js";import{B as z}from"./button-B8Q1YJpe.js";import{f as Me}from"./forward-ref-D13m8o2p.js";import{u as He}from"./use-component-style-D7fUVUlo.js";import{a2 as Ve,K as qe,l as Te,b as N,a as We,aa as Ae,c as Ne,h as Ee}from"./factory-Bqmz9C5P.js";import{I as s}from"./icon-button-C4sxXu5I.js";import{P as c}from"./plus-Bs4Af3ni.js";import{L as m}from"./link-ClNW6j8r.js";import{W as H}from"./flex-CcbyqeIa.js";import{T as Ge}from"./text-Cr1YzEG3.js";import{H as ye,V as Xe}from"./stack-DEpjuaqO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-provider-Dit74geM.js";import"./box-CS_Q_mBe.js";import"./index-DcJSUYRC.js";import"./use-checkbox-Bmr8WAWN.js";import"./index-5c62fTH4.js";import"./factory-Cbq3E2qU.js";import"./proxy-BYKFXsWv.js";import"./index-D-iNr3rb.js";import"./index-B_9DrOMl.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-DKkLsRXg.js";import"./tooltip-BRhMOSGw.js";import"./index-B4UZJbBZ.js";import"./index-D0QjGqiR.js";import"./index-C6P-3PHl.js";import"./index-CZSIMnfE.js";import"./index-Pbv_ILj1.js";import"./index-BkD6i14w.js";import"./portal-DBnEVTNa.js";import"./index-ZuzByk-F.js";import"./slide-fade-BhjlDBiO.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-BkYmOMuc.js";import"./scale-fade-13h1cMen.js";import"./index-CieLuCnG.js";import"./index-S7lgn1rl.js";import"./select-BAi0Gejg.js";import"./select-list-B1sjvTim.js";import"./index-DxQD85Cv.js";import"./icon-DeZ7GCXS.js";import"./popover-trigger-CaVm9NYE.js";import"./close-button-BPWfu35m.js";import"./use-ripple-DFvMPDyV.js";import"./index-CjWtGFYg.js";import"./index-gGKStiao.js";import"./index-Bqglt4Z4.js";import"./loading-CmllsJT7.js";import"./createLucideIcon-C_T9K6g-.js";const n=Me((o,r)=>{const[t,u]=He("FileButton",o),{id:a,as:h,form:L,name:O,className:f,accept:i,children:d,multiple:_,resetRef:M,onChange:x,onClick:ve,...V}=Oe(u),{onBlur:Ke,onFocus:Je,...q}=Ve(V,_e),{"aria-invalid":T,disabled:g,readOnly:B,required:W}=q,F=l.useRef(null),A=l.useCallback(()=>{var p;g||B||(p=F.current)==null||p.click()},[g,B]),Ie=l.useCallback(p=>{const De=qe(p.currentTarget.files)?void 0:Array.from(p.currentTarget.files);x==null||x(De)},[x]),we=l.useCallback(()=>{F.current&&(F.current.value="")},[]);return Te(M,we),e.jsxs(e.Fragment,{children:[e.jsx(N.input,{id:a,ref:We(F,r),form:L,type:"file",name:O,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"},"aria-hidden":!0,accept:i,multiple:_,tabIndex:-1,onChange:Ie,...q}),Ae(d)?d({disabled:g,invalid:T,isDisabled:g,isInvalid:T,isReadOnly:B,isRequired:W,readOnly:B,required:W,onClick:A}):e.jsx(N.button,{as:h||z,className:Ne("ui-file-button",f),__isProcessSkip:!h,__styles:t,...V,onClick:Ee(ve,A),children:d})]})});n.displayName="FileButton";n.__ui__="FileButton";const Zn={component:n,title:"Components / Forms / FileButton"},S=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Upload"}),e.jsx(n,{as:s,"aria-label":"Upload file",icon:e.jsx(c,{fontSize:"2xl"})}),e.jsx(n,{children:({onClick:o})=>e.jsx(m,{onClick:o,children:"Upload"})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{multiple:!0,children:"Upload"}),e.jsx(n,{as:s,"aria-label":"Upload file",icon:e.jsx(c,{fontSize:"2xl"}),multiple:!0}),e.jsx(n,{multiple:!0,children:({onClick:o})=>e.jsx(m,{onClick:o,children:"Upload"})})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{accept:"image/png,image/jpeg",children:"Upload"}),e.jsx(n,{as:s,"aria-label":"Upload file",accept:"image/png,image/jpeg",icon:e.jsx(c,{fontSize:"2xl"})}),e.jsx(n,{accept:"image/png,image/jpeg",children:({onClick:o})=>e.jsx(m,{onClick:o,children:"Upload"})})]}),C=()=>e.jsxs(H,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",size:"xs",children:"X Small"}),e.jsx(n,{colorScheme:"secondary",size:"sm",children:"Small"}),e.jsx(n,{colorScheme:"warning",size:"md",children:"Medium"}),e.jsx(n,{colorScheme:"danger",size:"lg",children:"Large"})]}),k=()=>e.jsx(H,{gap:"md",children:Le.map(o=>e.jsx(n,{colorScheme:o,children:o},o))}),U=()=>e.jsxs(H,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",variant:"solid",children:"Solid"}),e.jsx(n,{colorScheme:"secondary",variant:"outline",children:"Outline"}),e.jsx(n,{colorScheme:"warning",variant:"ghost",children:"Ghost"}),e.jsx(n,{colorScheme:"danger",variant:"link",children:"Link"}),e.jsx(n,{variant:"unstyled",children:"Unstyle"})]}),R=()=>e.jsx(n,{errorBorderColor:"orange.500",isInvalid:!0,children:"Upload"}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isDisabled:!0,children:"Upload"}),e.jsx(n,{as:s,"aria-label":"Upload file",icon:e.jsx(c,{fontSize:"2xl"}),isDisabled:!0}),e.jsx(n,{isDisabled:!0,children:({isDisabled:o,onClick:r})=>e.jsx(m,{cursor:o?"not-allowed":"pointer",opacity:o?.4:1,_hover:o?{textDecoration:"inherit"}:{textDecoration:"underline"},onClick:r,children:"Upload"})}),e.jsx(P,{helperMessage:"Please select a file to upload.",isDisabled:!0,label:"Upload file",children:e.jsx(n,{children:"Upload"})})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReadOnly:!0,children:"Upload"}),e.jsx(n,{as:s,"aria-label":"Upload file",icon:e.jsx(c,{fontSize:"2xl"}),isReadOnly:!0}),e.jsx(n,{isReadOnly:!0,children:({isReadOnly:o,onClick:r})=>e.jsx(m,{cursor:o?"default":"pointer",_hover:o?{textDecoration:"inherit"}:{textDecoration:"underline"},onClick:r,children:"Upload"})}),e.jsx(P,{helperMessage:"Please select a file to upload.",isReadOnly:!0,label:"Upload file",children:e.jsx(n,{children:"Upload"})})]}),I=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isInvalid:!0,children:"Upload"}),e.jsx(n,{as:s,"aria-label":"Upload file",icon:e.jsx(c,{fontSize:"2xl"}),isInvalid:!0}),e.jsx(P,{errorMessage:"File is required.",isInvalid:!0,label:"Upload file",children:e.jsx(n,{children:"Upload"})})]}),w=()=>{const[o,r]=l.useState(void 0),t=l.useRef(null),u=()=>{var a;r(void 0),(a=t.current)==null||a.call(t)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ge,{children:["files: ",(o==null?void 0:o.length)??0]}),e.jsxs(ye,{children:[e.jsx(n,{resetRef:t,onChange:r,children:"Upload"}),e.jsx(z,{onClick:u,children:"Reset"})]})]})},D=()=>{var f;const o=l.useRef(null),{control:r,formState:{errors:t},handleSubmit:u,setValue:a,watch:h}=ze(),L=()=>{var i;a("fileButton",null),(i=o.current)==null||i.call(o)},O=i=>console.log("submit:",i);return console.log("watch:",h()),e.jsxs(Xe,{as:"form",onSubmit:u(O),children:[e.jsx(P,{errorMessage:(f=t.fileButton)==null?void 0:f.message,isInvalid:!!t.fileButton,label:"Files",children:e.jsx(Pe,{name:"fileButton",control:r,render:({field:{ref:i,name:d,onBlur:_,onChange:M}})=>e.jsxs(ye,{children:[e.jsx(n,{ref:i,name:d,onBlur:_,onChange:M,resetRef:o,children:"Upload"}),e.jsx(z,{onClick:L,children:"Reset"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(z,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var E,G,X;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <>
      <FileButton>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} />

      <FileButton>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(X=(G=S.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var K,J,Q;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <>
      <FileButton multiple>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} multiple />

      <FileButton multiple>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(Q=(J=j.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,Z,$;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <>
      <FileButton accept="image/png,image/jpeg">Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" accept="image/png,image/jpeg" icon={<PlusIcon fontSize="2xl" />} />

      <FileButton accept="image/png,image/jpeg">
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,oe;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <FileButton colorScheme="primary" size="xs">
        X Small
      </FileButton>

      <FileButton colorScheme="secondary" size="sm">
        Small
      </FileButton>

      <FileButton colorScheme="warning" size="md">
        Medium
      </FileButton>

      <FileButton colorScheme="danger" size="lg">
        Large
      </FileButton>
    </Wrap>;
}`,...(oe=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,te,ie;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <FileButton key={colorScheme} colorScheme={colorScheme}>
          {colorScheme}
        </FileButton>)}
    </Wrap>;
}`,...(ie=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var le,ae,se;U.parameters={...U.parameters,docs:{...(le=U.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <FileButton colorScheme="primary" variant="solid">
        Solid
      </FileButton>

      <FileButton colorScheme="secondary" variant="outline">
        Outline
      </FileButton>

      <FileButton colorScheme="warning" variant="ghost">
        Ghost
      </FileButton>

      <FileButton colorScheme="danger" variant="link">
        Link
      </FileButton>

      <FileButton variant="unstyled">Unstyle</FileButton>
    </Wrap>;
}`,...(se=(ae=U.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ce,ue,de;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <FileButton errorBorderColor="orange.500" isInvalid>
      Upload
    </FileButton>;
}`,...(de=(ue=R.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,me,he;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <>
      <FileButton isDisabled>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} isDisabled />

      <FileButton isDisabled>
        {({
        isDisabled,
        onClick
      }) => <Link cursor={isDisabled ? "not-allowed" : "pointer"} opacity={isDisabled ? 0.4 : 1} _hover={isDisabled ? {
        textDecoration: "inherit"
      } : {
        textDecoration: "underline"
      }} onClick={onClick}>
            Upload
          </Link>}
      </FileButton>

      <FormControl helperMessage="Please select a file to upload." isDisabled label="Upload file">
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(he=(me=y.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var fe,xe,ge;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <>
      <FileButton isReadOnly>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} isReadOnly />

      <FileButton isReadOnly>
        {({
        isReadOnly,
        onClick
      }) => <Link cursor={isReadOnly ? "default" : "pointer"} _hover={isReadOnly ? {
        textDecoration: "inherit"
      } : {
        textDecoration: "underline"
      }} onClick={onClick}>
            Upload
          </Link>}
      </FileButton>

      <FormControl helperMessage="Please select a file to upload." isReadOnly label="Upload file">
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(ge=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};var Be,Fe,Se;I.parameters={...I.parameters,docs:{...(Be=I.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  return <>
      <FileButton isInvalid>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} isInvalid />

      <FormControl errorMessage="File is required." isInvalid label="Upload file">
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(Se=(Fe=I.parameters)==null?void 0:Fe.docs)==null?void 0:Se.source}}};var je,be,Ce;w.parameters={...w.parameters,docs:{...(je=w.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  const [files, onChange] = useState<File[] | undefined>(undefined);
  const resetRef = useRef<() => void>(null);
  const onReset = () => {
    onChange(undefined);
    resetRef.current?.();
  };
  return <>
      <Text>files: {files?.length ?? 0}</Text>

      <HStack>
        <FileButton resetRef={resetRef} onChange={onChange}>
          Upload
        </FileButton>

        <Button onClick={onReset}>Reset</Button>
      </HStack>
    </>;
}`,...(Ce=(be=w.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var ke,Ue,Re;D.parameters={...D.parameters,docs:{...(ke=D.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  interface Data {
    fileButton: File[] | null;
  }
  const resetRef = useRef<() => void>(null);
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    setValue,
    watch
  } = useForm<Data>();
  const onReset = () => {
    setValue("fileButton", null);
    resetRef.current?.();
  };
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl errorMessage={errors.fileButton?.message} isInvalid={!!errors.fileButton} label="Files">
        <Controller name="fileButton" control={control} render={({
        field: {
          ref,
          name,
          onBlur,
          onChange
        }
      }) => <HStack>
              <FileButton {...{
          ref,
          name,
          onBlur,
          onChange
        }} resetRef={resetRef}>
                Upload
              </FileButton>

              <Button onClick={onReset}>Reset</Button>
            </HStack>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Re=(Ue=D.parameters)==null?void 0:Ue.docs)==null?void 0:Re.source}}};const $n=["basic","withMultiple","withAccept","withSize","withColorScheme","withVariant","withBorderColor","isDisabled","isReadonly","isInvalid","useReset","reactHookForm"];export{$n as __namedExportsOrder,S as basic,Zn as default,y as isDisabled,I as isInvalid,v as isReadonly,D as reactHookForm,w as useReset,b as withAccept,R as withBorderColor,k as withColorScheme,j as withMultiple,C as withSize,U as withVariant};

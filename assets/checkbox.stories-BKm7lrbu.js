import{j as e}from"./extends-CwFRzn3r.js";import{u as Oe}from"./index-CoJrGj-T.js";import{r as k}from"./index-BwDkhjyp.js";import{u as Fe,C as W}from"./index.esm-DXPXqkjk.js";import{c as _e}from"./components-BiyJEhgw.js";import{C as o,a as Ee,u as Ue}from"./checkbox-zxFoXBJ5.js";import{u as Je}from"./index-DK-MzzHQ.js";import{a as Ke,F as d}from"./form-control-CExpHBXs.js";import{F as Le,W as we}from"./flex-bsZaxQ-D.js";import{k as Qe,p as Xe,c as Ye,n as T}from"./factory-CTJ-ITwV.js";import{V as D,H as Ze}from"./stack-l5SyeKEk.js";import{B as Ae}from"./button-DejEDEJ2.js";import{B as H}from"./box-n4vRcf5j.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-NtBqJrwW.js";import"./index-D7AEQMi7.js";import"./index-BneYb4WH.js";import"./theme-provider-gLqcKpHk.js";import"./ui-provider-DA9XzaWW.js";import"./index-D1qVlYM2.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-B2gpaJ8H.js";import"./index-Cs40PXXW.js";import"./Combination-IUp2vs9T.js";import"./loading-BNHDbHrX.js";import"./icon-DlOX_f12.js";import"./use-component-style-_O1yHJxH.js";import"./use-var-Cgd0M5xr.js";import"./forward-ref-BWI-Phbn.js";import"./factory-CmtZP4aZ.js";import"./portal-C-ggyOLy.js";import"./index-Drt3gf4w.js";import"./notice-0psAcPcU.js";import"./alert-ojwZhqaY.js";import"./close-button-IT3vRp6I.js";import"./use-ripple-MSZSdTJh.js";import"./container-Cbmp5Bbm.js";import"./text-BDycaLk7.js";import"./index-C365_6Ad.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./tooltip-yq5-CPkf.js";import"./index-BzKTRvGl.js";import"./index-CL25N26u.js";import"./index-C0-OrHt9.js";import"./index-cjYO0JtJ.js";import"./index-DHWdzpiJ.js";import"./slide-fade-BE8CIutX.js";import"./forward-ref-scR1bmHx.js";import"./utils-CgaDd4SB.js";import"./scale-fade-B7KN2sk_.js";import"./index-W7lu5wp_.js";import"./index-CmRh8_hi.js";import"./index-BAaRSIWS.js";import"./select-Cne2P-W4.js";import"./select-list-CGiiHoiU.js";import"./index-Cu2YeAMN.js";import"./popover-trigger-B7hqUX_i.js";import"./index-Dl4-Ephs.js";import"./index-BD59kUnL.js";const M=r=>r&&T(r)&&T(r.target),We=({defaultValue:r=[],isNative:n,value:t,onChange:h,...a})=>{const m=Qe(h),[s,c]=Je({defaultValue:r,value:t,onChange:m}),l=k.useCallback(u=>{const x=M(u)?u.target.checked:!s.includes(u),b=M(u)?u.target.value:u,R=x?[...s,b]:s.filter(B=>String(B)!==String(b));c(R)},[s,c]),p=k.useCallback((u={},x=null)=>({role:"group",...u,ref:x}),[]),q=k.useCallback((u={},x=null)=>({...u,ref:x,[n?"checked":"isChecked"]:s.some(b=>String(u.value)===String(b)),onChange:l}),[l,n,s]);return{props:a,setValue:c,value:s,getCheckboxProps:q,getContainerProps:p,onChange:l}},i=k.forwardRef(({className:r,colorScheme:n,size:t,variant:h,children:a,direction:m="column",gap:s,items:c=[],...l},p)=>{const{props:q,value:u,getContainerProps:x,onChange:b}=We(l),{isDisabled:R,isInvalid:B,isReadOnly:De,isRequired:qe,labelId:Re,...Be}=Ke(q),Pe=Xe(a);let P=[];return!Pe.length&&c.length&&(P=c.map(({label:Te,value:He,...Me},ze)=>e.jsx(o,{value:He,...Me,children:Te},ze))),e.jsx(Ee,{value:{colorScheme:n,size:t,variant:h,isDisabled:R,isInvalid:B,isReadOnly:De,isRequired:qe,value:u,onChange:b},children:e.jsx(Le,{ref:p,className:Ye("ui-checkbox-group",r),direction:m,gap:s??(m==="row"?"1rem":void 0),...x({"aria-labelledby":Re,...Be}),children:a??P})})});i.displayName="CheckboxGroup";i.__ui__="CheckboxGroup";const sr={component:o,title:"Components / Forms / Checkbox"},C=()=>e.jsx(o,{children:"孫悟空"}),v=()=>e.jsxs(we,{gap:"md",children:[e.jsx(o,{size:"sm",children:"孫悟空"}),e.jsx(o,{size:"md",children:"ベジータ"}),e.jsx(o,{size:"lg",children:"フリーザ"})]}),f=()=>e.jsx(o,{defaultIsChecked:!0,children:"孫悟空"}),g=()=>e.jsx(we,{gap:"md",children:_e.map(r=>e.jsx(o,{colorScheme:r,defaultIsChecked:!0,children:r},r))}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0,children:"All Notifications"}),e.jsx(o,{defaultIsChecked:!0,isDisabled:!0,children:"All Notifications"}),e.jsxs(i,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{isDisabled:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(d,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(d,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsxs(i,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0,children:"All Notifications"}),e.jsx(o,{defaultIsChecked:!0,isReadOnly:!0,children:"All Notifications"}),e.jsxs(i,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{isReadOnly:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(d,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(d,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsxs(i,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),I=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:!0,children:"All Notifications"}),e.jsx(o,{defaultIsChecked:!0,isInvalid:!0,children:"All Notifications"}),e.jsxs(i,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{isInvalid:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(d,{errorMessage:"This is required.",isInvalid:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{children:"All Notifications"})}),e.jsx(d,{errorMessage:"This is required.",isInvalid:!0,label:"Which notifications would you like to receive?",children:e.jsxs(i,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),N=()=>{const[r,n]=k.useState([!1,!1]),t=r.every(Boolean),h=r.some(Boolean)&&!t;return e.jsxs(D,{gap:"sm",children:[e.jsx(o,{isChecked:t,isIndeterminate:h,onChange:a=>n([a.target.checked,a.target.checked]),children:"地球人"}),e.jsxs(D,{gap:"sm",pl:"md",children:[e.jsx(o,{isChecked:r[0],onChange:a=>n([a.target.checked,r[1]]),children:"孫悟空"}),e.jsx(o,{isChecked:r[1],onChange:a=>n([r[0],a.target.checked]),children:"孫悟飯"})]})]})},G=()=>{const r=[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}];return e.jsxs(e.Fragment,{children:[e.jsxs(i,{defaultValue:["孫悟空","ベジータ"],children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(i,{defaultValue:["孫悟空","ベジータ"],direction:"row",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsx(i,{defaultValue:["孫悟空","ベジータ"],items:r})]})},y=()=>{const[r,{toggle:n}]=Oe(!1);return e.jsx(o,{isChecked:r,onChange:n,children:"孫悟空"})},V=()=>{const[r,n]=k.useState(["孫悟空","ベジータ"]);return e.jsxs(i,{value:r,onChange:t=>n(t),children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})},F=()=>{const r=t=>{const{getIconProps:h,getInputProps:a}=Ue(t);return e.jsxs(H,{as:"label",children:[e.jsx("input",{...a(),"aria-label":t.value}),e.jsx(H,{...h(),borderWidth:"1px",cursor:"pointer",px:"sm",py:"xs",rounded:"md",_checked:{bg:"blue.500",borderColor:"blue.500",color:"white"},children:t.value})]})},{getCheckboxProps:n}=We({defaultValue:["孫悟空"]});return e.jsxs(Ze,{gap:"sm",children:[e.jsx(r,{...n({value:"孫悟空"})}),e.jsx(r,{...n({value:"ベジータ"})}),e.jsx(r,{...n({value:"フリーザ"})})]})},w=()=>{var m,s;const{control:r,formState:{errors:n},handleSubmit:t,watch:h}=Fe(),a=c=>console.log("submit:",c);return console.log("watch:",h()),e.jsxs(D,{as:"form",onSubmit:t(a),children:[e.jsx(d,{errorMessage:(m=n.checkbox)==null?void 0:m.message,isInvalid:!!n.checkbox,label:"Who is your favorite character?",children:e.jsx(W,{name:"checkbox",control:r,render:({field:{value:c,...l}})=>e.jsx(o,{isChecked:c,...l,children:"孫悟空"}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(d,{errorMessage:(s=n.checkboxGroup)==null?void 0:s.message,isInvalid:!!n.checkboxGroup,label:"Who is your favorite character?",children:e.jsx(W,{name:"checkboxGroup",control:r,render:({field:c})=>e.jsxs(i,{...c,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Ae,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},A=()=>{var s,c;const r={checkbox:!0,checkboxGroup:["孫悟空"]},{control:n,formState:{errors:t},handleSubmit:h,watch:a}=Fe({defaultValues:r}),m=l=>console.log("submit:",l);return console.log("watch:",a()),e.jsxs(D,{as:"form",onSubmit:h(m),children:[e.jsx(d,{errorMessage:(s=t.checkbox)==null?void 0:s.message,isInvalid:!!t.checkbox,label:"Who is your favorite character?",children:e.jsx(W,{name:"checkbox",control:n,render:({field:{value:l,...p}})=>e.jsx(o,{isChecked:l,...p,children:"孫悟空"}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(d,{errorMessage:(c=t.checkboxGroup)==null?void 0:c.message,isInvalid:!!t.checkboxGroup,label:"Who is your favorite character?",children:e.jsx(W,{name:"checkboxGroup",control:n,render:({field:l})=>e.jsxs(i,{...l,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Ae,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var z,O,_;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Checkbox>孫悟空</Checkbox>;
}`,...(_=(O=C.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var E,U,J;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Checkbox size="sm">孫悟空</Checkbox>
      <Checkbox size="md">ベジータ</Checkbox>
      <Checkbox size="lg">フリーザ</Checkbox>
    </Wrap>;
}`,...(J=(U=v.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var K,L,Q;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Checkbox defaultIsChecked>孫悟空</Checkbox>;
}`,...(Q=(L=f.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Checkbox key={colorScheme} colorScheme={colorScheme} defaultIsChecked>
          {colorScheme}
        </Checkbox>)}
    </Wrap>;
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,oe;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <>
      <Checkbox isDisabled>All Notifications</Checkbox>
      <Checkbox defaultIsChecked isDisabled>
        All Notifications
      </Checkbox>

      <CheckboxGroup defaultValue={["all"]}>
        <Checkbox value="all">All Notifications</Checkbox>
        <Checkbox isDisabled value="important">
          Important Notifications
        </Checkbox>
        <Checkbox value="service">Service Notifications</Checkbox>
      </CheckboxGroup>

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <Checkbox defaultIsChecked>All Notifications</Checkbox>
      </FormControl>

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <CheckboxGroup defaultValue={["all"]}>
          <Checkbox value="all">All Notifications</Checkbox>
          <Checkbox value="important">Important Notifications</Checkbox>
          <Checkbox value="service">Service Notifications</Checkbox>
        </CheckboxGroup>
      </FormControl>
    </>;
}`,...(oe=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var re,ne,te;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <>
      <Checkbox isReadOnly>All Notifications</Checkbox>
      <Checkbox defaultIsChecked isReadOnly>
        All Notifications
      </Checkbox>

      <CheckboxGroup defaultValue={["all"]}>
        <Checkbox value="all">All Notifications</Checkbox>
        <Checkbox isReadOnly value="important">
          Important Notifications
        </Checkbox>
        <Checkbox value="service">Service Notifications</Checkbox>
      </CheckboxGroup>

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <Checkbox defaultIsChecked>All Notifications</Checkbox>
      </FormControl>

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <CheckboxGroup defaultValue={["all"]}>
          <Checkbox value="all">All Notifications</Checkbox>
          <Checkbox value="important">Important Notifications</Checkbox>
          <Checkbox value="service">Service Notifications</Checkbox>
        </CheckboxGroup>
      </FormControl>
    </>;
}`,...(te=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ae,se,ce;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <Checkbox isInvalid>All Notifications</Checkbox>
      <Checkbox defaultIsChecked isInvalid>
        All Notifications
      </Checkbox>

      <CheckboxGroup defaultValue={["all"]}>
        <Checkbox value="all">All Notifications</Checkbox>
        <Checkbox isInvalid value="important">
          Important Notifications
        </Checkbox>
        <Checkbox value="service">Service Notifications</Checkbox>
      </CheckboxGroup>

      <FormControl errorMessage="This is required." isInvalid label="Which notifications would you like to receive?">
        <Checkbox>All Notifications</Checkbox>
      </FormControl>

      <FormControl errorMessage="This is required." isInvalid label="Which notifications would you like to receive?">
        <CheckboxGroup defaultValue={["all"]}>
          <Checkbox value="all">All Notifications</Checkbox>
          <Checkbox value="important">Important Notifications</Checkbox>
          <Checkbox value="service">Service Notifications</Checkbox>
        </CheckboxGroup>
      </FormControl>
    </>;
}`,...(ce=(se=I.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var ie,le,ue;N.parameters={...N.parameters,docs:{...(ie=N.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const [values, setValues] = useState([false, false]);
  const allChecked = values.every(Boolean);
  const isIndeterminate = values.some(Boolean) && !allChecked;
  return <VStack gap="sm">
      <Checkbox isChecked={allChecked} isIndeterminate={isIndeterminate} onChange={e => setValues([e.target.checked, e.target.checked])}>
        地球人
      </Checkbox>

      <VStack gap="sm" pl="md">
        <Checkbox isChecked={values[0]} onChange={e => setValues([e.target.checked, values[1]!])}>
          孫悟空
        </Checkbox>

        <Checkbox isChecked={values[1]} onChange={e => setValues([values[0]!, e.target.checked])}>
          孫悟飯
        </Checkbox>
      </VStack>
    </VStack>;
}`,...(ue=(le=N.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var he,de,me;G.parameters={...G.parameters,docs:{...(he=G.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  const items: CheckboxItem[] = [{
    label: "孫悟空",
    value: "孫悟空"
  }, {
    label: "ベジータ",
    value: "ベジータ"
  }, {
    label: "フリーザ",
    value: "フリーザ"
  }];
  return <>
      <CheckboxGroup defaultValue={["孫悟空", "ベジータ"]}>
        <Checkbox value="孫悟空">孫悟空</Checkbox>
        <Checkbox value="ベジータ">ベジータ</Checkbox>
        <Checkbox value="フリーザ">フリーザ</Checkbox>
      </CheckboxGroup>

      <CheckboxGroup defaultValue={["孫悟空", "ベジータ"]} direction="row">
        <Checkbox value="孫悟空">孫悟空</Checkbox>
        <Checkbox value="ベジータ">ベジータ</Checkbox>
        <Checkbox value="フリーザ">フリーザ</Checkbox>
      </CheckboxGroup>

      <CheckboxGroup defaultValue={["孫悟空", "ベジータ"]} items={items} />
    </>;
}`,...(me=(de=G.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var xe,be,ke;y.parameters={...y.parameters,docs:{...(xe=y.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  const [isChecked, {
    toggle
  }] = useBoolean(false);
  return <Checkbox isChecked={isChecked} onChange={toggle}>
      孫悟空
    </Checkbox>;
}`,...(ke=(be=y.parameters)==null?void 0:be.docs)==null?void 0:ke.source}}};var pe,Ce,ve;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>(["孫悟空", "ベジータ"]);
  return <CheckboxGroup value={value} onChange={value => setValue(value)}>
      <Checkbox value="孫悟空">孫悟空</Checkbox>
      <Checkbox value="ベジータ">ベジータ</Checkbox>
      <Checkbox value="フリーザ">フリーザ</Checkbox>
    </CheckboxGroup>;
}`,...(ve=(Ce=V.parameters)==null?void 0:Ce.docs)==null?void 0:ve.source}}};var fe,ge,je;F.parameters={...F.parameters,docs:{...(fe=F.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  const CustomCheckbox: FC<ReturnType<UseCheckboxGroupReturn["getCheckboxProps"]>> = props => {
    const {
      getIconProps,
      getInputProps
    } = useCheckbox(props);
    return <Box as="label">
        <input {...getInputProps()} aria-label={props.value} />

        <Box {...getIconProps()} borderWidth="1px" cursor="pointer" px="sm" py="xs" rounded="md" _checked={{
        bg: "blue.500",
        borderColor: "blue.500",
        color: "white"
      }}>
          {props.value}
        </Box>
      </Box>;
  };
  const {
    getCheckboxProps
  } = useCheckboxGroup<string>({
    defaultValue: ["孫悟空"]
  });
  return <HStack gap="sm">
      <CustomCheckbox {...getCheckboxProps({
      value: "孫悟空"
    })} />
      <CustomCheckbox {...getCheckboxProps({
      value: "ベジータ"
    })} />
      <CustomCheckbox {...getCheckboxProps({
      value: "フリーザ"
    })} />
    </HStack>;
}`,...(je=(ge=F.parameters)==null?void 0:ge.docs)==null?void 0:je.source}}};var Se,Ie,Ne;w.parameters={...w.parameters,docs:{...(Se=w.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  interface Data {
    checkbox: boolean;
    checkboxGroup: string[];
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
      <FormControl errorMessage={errors.checkbox?.message} isInvalid={!!errors.checkbox} label="Who is your favorite character?">
        <Controller name="checkbox" control={control} render={({
        field: {
          value,
          ...rest
        }
      }) => <Checkbox isChecked={value} {...rest}>
              孫悟空
            </Checkbox>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </FormControl>

      <FormControl errorMessage={errors.checkboxGroup?.message} isInvalid={!!errors.checkboxGroup} label="Who is your favorite character?">
        <Controller name="checkboxGroup" control={control} render={({
        field
      }) => <CheckboxGroup {...field}>
              <Checkbox value="孫悟空">孫悟空</Checkbox>
              <Checkbox value="ベジータ">ベジータ</Checkbox>
              <Checkbox value="フリーザ">フリーザ</Checkbox>
            </CheckboxGroup>} rules={{
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
}`,...(Ne=(Ie=w.parameters)==null?void 0:Ie.docs)==null?void 0:Ne.source}}};var Ge,ye,Ve;A.parameters={...A.parameters,docs:{...(Ge=A.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  interface Data {
    checkbox: boolean;
    checkboxGroup: string[];
  }
  const defaultValues: Data = {
    checkbox: true,
    checkboxGroup: ["孫悟空"]
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
      <FormControl errorMessage={errors.checkbox?.message} isInvalid={!!errors.checkbox} label="Who is your favorite character?">
        <Controller name="checkbox" control={control} render={({
        field: {
          value,
          ...rest
        }
      }) => <Checkbox isChecked={value} {...rest}>
              孫悟空
            </Checkbox>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </FormControl>

      <FormControl errorMessage={errors.checkboxGroup?.message} isInvalid={!!errors.checkboxGroup} label="Who is your favorite character?">
        <Controller name="checkboxGroup" control={control} render={({
        field
      }) => <CheckboxGroup {...field}>
              <Checkbox value="孫悟空">孫悟空</Checkbox>
              <Checkbox value="ベジータ">ベジータ</Checkbox>
              <Checkbox value="フリーザ">フリーザ</Checkbox>
            </CheckboxGroup>} rules={{
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
}`,...(Ve=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:Ve.source}}};const cr=["basic","withSize","withDefaultIsChecked","withColorScheme","isDisabled","isReadonly","isInvalid","indeterminate","withGroup","customControl","customControlGroup","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{cr as __namedExportsOrder,C as basic,y as customControl,V as customControlGroup,F as customHook,sr as default,N as indeterminate,j as isDisabled,I as isInvalid,S as isReadonly,w as reactHookForm,A as reactHookFormWithDefaultValue,g as withColorScheme,f as withDefaultIsChecked,G as withGroup,v as withSize};

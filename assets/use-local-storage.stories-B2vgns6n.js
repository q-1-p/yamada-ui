import{j as S}from"./extends-CwFRzn3r.js";import{u as f}from"./index-D-rZG8aM.js";import{r as a}from"./index-BwDkhjyp.js";import{Z as b}from"./factory-CPqzzHTm.js";import{W as B}from"./flex-CibmYms-.js";import{B as h}from"./button-kHKaKMU7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./forward-ref-BWI-Phbn.js";import"./use-ripple-CtulSDJk.js";import"./factory-BfCzQy-p.js";import"./motion-I-9Hg3gW.js";import"./loading-ChaHMfSx.js";import"./icon-DRhEyT4F.js";import"./index-Cj00RqbZ.js";import"./theme-provider-DVkG1YcR.js";import"./use-component-style-CMyamFpN.js";const j=(e,n)=>{try{return JSON.stringify(e)}catch{throw new Error(`useLocalStorage ${n}: Failed to serialize the value`)}},N=e=>{if(!e)return e;try{return JSON.parse(e)}catch{return e}},W=(e,n)=>{const i="ui-local-storage";return({key:t,defaultValue:r=void 0,getInitialValueInEffect:d=!0,deserialize:p=N,serialize:w=c=>j(c,n)})=>{const c=a.useCallback(o=>{if(typeof window>"u"||!(e in window)||window[e]===null||o)return r??"";const u=window[e].getItem(t);return u!==null?p(u):r??""},[t,p,r]),[l,s]=a.useState(c(d)),g=a.useCallback(o=>{b(o)?s(u=>{const v=o(u);return window[e].setItem(t,w(v)),window.dispatchEvent(new CustomEvent(i,{detail:{key:t,value:o(u)}})),v}):(window[e].setItem(t,w(o)),window.dispatchEvent(new CustomEvent(i,{detail:{key:t,value:o}})),s(o))},[t,w]),L=a.useCallback(()=>{window[e].removeItem(t),s(r)},[r,t]);return f("storage",o=>{o.storageArea===window[e]&&o.key===t&&s(p(o.newValue??void 0))}),f(i,o=>{o.detail.key===t&&s(o.detail.value)}),a.useEffect(()=>{r!==void 0&&l===void 0&&g(r)},[r,l,g]),a.useEffect(()=>{d&&s(c())},[d,c]),[l===void 0?r:l,g,L]}},J=e=>W("localStorage","use-local-storage")(e),Q={title:"Hooks / useLocalStorage"},m=()=>{const[e,n,i]=J({key:"value",defaultValue:1});return S.jsxs(B,{gap:"md",children:[S.jsxs(h,{onClick:()=>n(t=>t+1),children:["Current Local Storage value: ",e]}),S.jsx(h,{colorScheme:"danger",onClick:i,children:"Reset Local Storage value"})]})};var C,E,x;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [value, setValue, resetValue] = useLocalStorage<number>({
    key: "value",
    defaultValue: 1
  });
  return <Wrap gap="md">
      <Button onClick={() => setValue(prev => prev + 1)}>
        Current Local Storage value: {value}
      </Button>

      <Button colorScheme="danger" onClick={resetValue}>
        Reset Local Storage value
      </Button>
    </Wrap>;
}`,...(x=(E=m.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};const T=["basic"];export{T as __namedExportsOrder,m as basic,Q as default};

import{j as l}from"./jsx-runtime-Nms4Y4qS.js";import{r}from"./index-BwDkhjyp.js";import{B as v}from"./box-Dp44rSxf.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-CtEVzbYf.js";import"./extends-CF3RwP-h.js";const i=()=>{const[t,o]=r.useState(!1),u=r.useRef(null),n=r.useCallback(()=>o(!0),[]),a=r.useCallback(()=>o(!1),[]);return r.useEffect(()=>{const e=u.current;if(e)return e.addEventListener("mouseenter",n),e.addEventListener("mouseleave",a),()=>{e.removeEventListener("mouseenter",n),e.removeEventListener("mouseleave",a)}},[n,a]),{ref:u,hovered:t}},H={title:"Hooks / useHover"},s=()=>{const{hovered:t,ref:o}=i();return l.jsx(v,{ref:o,w:"full",bg:"red.500",p:"md",rounded:"md",color:"white",children:t?"I am hovered":"Put mouse over me please"})};var m,d,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const {
    hovered,
    ref
  } = useHover();
  return <Box ref={ref} w="full" bg="red.500" p="md" rounded="md" color="white">
      {hovered ? "I am hovered" : "Put mouse over me please"}
    </Box>;
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const L=["basic"];export{L as __namedExportsOrder,s as basic,H as default};

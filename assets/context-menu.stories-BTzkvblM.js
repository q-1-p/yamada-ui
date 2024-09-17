import{j as e}from"./extends-CwFRzn3r.js";import{C as f,b as j,e as g,c as b,d as t}from"./menu-list-DtvGX5DM.js";import{a as I}from"./use-component-style-CMyamFpN.js";import{o as y}from"./theme-provider-DVkG1YcR.js";import{r as P}from"./index-BwDkhjyp.js";import{P as T}from"./popover-anchor-Bbunq_YX.js";import{a as v}from"./popover-content-DU7dP830.js";import{f as R}from"./forward-ref-BWI-Phbn.js";import{b as p,c as _,h as S}from"./factory-CPqzzHTm.js";import{M as D}from"./menu-divider-ZYNmgHNL.js";import{C as w}from"./center-BiJcy2pa.js";import{T as E}from"./text-DDc7b8zK.js";import"./index-C_k6bTeh.js";import"./index-BEfMoi0_.js";import"./index-DE5DHf0O.js";import"./index-BqvrmGIG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-lsZIJgTB.js";import"./index-Du0-7Fls.js";import"./index-JbipPWcI.js";import"./index-BnjqPAsg.js";import"./index-CKYwj09A.js";import"./index-mY403y5C.js";import"./close-button-JWZgMj1j.js";import"./use-ripple-CtulSDJk.js";import"./factory-BfCzQy-p.js";import"./motion-I-9Hg3gW.js";import"./icon-DRhEyT4F.js";import"./index-Cj00RqbZ.js";import"./slide-fade-Dq1TAfNq.js";import"./forward-ref-scR1bmHx.js";import"./utils-CBG5DmzQ.js";import"./scale-fade-ZTztv-t6.js";const d=n=>{const[s,r]=I("ContextMenu",n),{...i}=y(r);return e.jsx(f,{value:{styles:s},children:e.jsx(j,{trigger:"contextmenu",...i})})},L=R(({children:n,className:s,...r},i)=>{const{styles:x}=g(),[l,M]=P.useState({top:0,left:0}),h={...x.container},C=m=>{M({top:m.clientY,left:m.clientX})};return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx(p.div,{className:"ui-context-menu__anchor",style:{position:"absolute",...l}})}),e.jsx(v,{children:e.jsx(p.div,{ref:i,className:_("ui-context-menu",s),__css:h,...r,onContextMenu:S(r.onContextMenu,C),children:n})})]})}),xe={title:"Components / Overlay / ContextMenu",component:d},o=()=>e.jsxs(d,{children:[e.jsx(L,{as:w,w:"full",h:"xs",borderWidth:"1px",borderStyle:"dashed",p:"md",rounded:"md",children:e.jsx(E,{children:"Right click here"})}),e.jsxs(b,{children:[e.jsx(t,{children:"Undo"}),e.jsx(t,{children:"Redo"}),e.jsx(D,{}),e.jsx(t,{isDisabled:!0,children:"Cut"}),e.jsx(t,{children:"Copy"}),e.jsx(t,{children:"Paste"})]})]});var u,a,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <ContextMenu>
      <ContextMenuTrigger as={Center} w="full" h="xs" borderWidth="1px" borderStyle="dashed" p="md" rounded="md">
        <Text>Right click here</Text>
      </ContextMenuTrigger>

      <MenuList>
        <MenuItem>Undo</MenuItem>
        <MenuItem>Redo</MenuItem>
        <MenuDivider />
        <MenuItem isDisabled>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
      </MenuList>
    </ContextMenu>;
}`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const le=["basic"];export{le as __namedExportsOrder,o as basic,xe as default};

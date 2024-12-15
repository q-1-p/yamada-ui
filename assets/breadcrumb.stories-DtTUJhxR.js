import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as l}from"./index-ClcD9ViR.js";import{u as Y}from"./index-CZSIMnfE.js";import{b as Ve}from"./icon-DeZ7GCXS.js";import{A as Ae,g as Pe,I as Oe,b as k,c as T,o as Z}from"./factory-Bqmz9C5P.js";import{f as L}from"./forward-ref-D13m8o2p.js";import{a as Te}from"./use-component-style-D7fUVUlo.js";import{o as We}from"./theme-provider-Dit74geM.js";import{b as Ce,c as ye,d as A}from"./menu-list-CD8WhF9y.js";import{M as Ee}from"./menu-button-CbsPm7pX.js";import{C as qe}from"./chevrons-right-CLQVFnGg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Pbv_ILj1.js";import"./use-var-DKkLsRXg.js";import"./index-DcJSUYRC.js";import"./popover-trigger-CaVm9NYE.js";import"./close-button-BPWfu35m.js";import"./use-ripple-DFvMPDyV.js";import"./index-BkD6i14w.js";import"./proxy-BYKFXsWv.js";import"./factory-Cbq3E2qU.js";import"./slide-fade-BhjlDBiO.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-BkYmOMuc.js";import"./scale-fade-13h1cMen.js";import"./index-CjWtGFYg.js";import"./index-gGKStiao.js";import"./index-B4UZJbBZ.js";import"./index-Bqglt4Z4.js";import"./index-C6P-3PHl.js";import"./index-DxQD85Cv.js";import"./index-CieLuCnG.js";import"./createLucideIcon-C_T9K6g-.js";const[ze,W]=Ae({name:"BreadcrumbContext",errorMessage:`useBreadcrumb returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `}),i=L((s,u)=>{const[c,o]=Te("Breadcrumb",s),{className:t,children:h,ellipsis:f,endBoundaries:j,gap:I="fallback(2, 0.5rem)",items:d=[],separator:g="/",startBoundaries:q,listProps:M,separatorProps:J,...z}=We(o);let m=Y(q),a=Y(j);m===0&&(m=1),a===0&&(a=1),m&&(a??(a=1)),a&&(m??(m=1));const P=Z(m)&&Z(a),K=P&&m+a<d.length,we={alignItems:"center",display:"flex",...c.container},C=Pe(h),Q=C.length,y=l.useCallback(p=>{if(!f)return null;const x=p??d.slice(m,d.length-a);return Oe(f,{items:x})},[f,a,d,m]),Se=l.useMemo(()=>{if(Q)return C.map((p,x)=>l.cloneElement(p,{gap:I,lastChild:C.length===x+1,separator:g}));{let p=[];return d.map((x,B)=>{const{name:U,isCurrentPage:ve,currentPage:Ne=ve,isEllipsisPage:Ge,ellipsisPage:Re=Ge,containerProps:Fe,...X}=x,D=d.length===B+1,_={currentPage:Ne,gap:I,separator:g,...Fe};if(!P&&Re)return p.push(x),D?e.jsx(r,{..._,lastChild:!0,children:y([x])??e.jsx(b,{})},B):null;if(P&&K){const H=d.length-B-1;if(m<=B&&a<=H)return m===B?e.jsx(r,{..._,children:y()??e.jsx(b,{})},B):null}if(p.length){const H=y(p)??e.jsx(b,{});return p=[],e.jsxs(l.Fragment,{children:[e.jsx(r,{..._,children:H}),e.jsx(r,{..._,lastChild:D,children:e.jsx(n,{...X,children:U})})]},B)}else return e.jsx(r,{..._,lastChild:D,children:e.jsx(n,{...X,children:U})},B)})}},[Q,C,g,I,d,P,K,m,a,y]);return e.jsx(ze,{value:{styles:c,separatorProps:J},children:e.jsx(k.nav,{ref:u,className:T("ui-breadcrumb",t),"aria-label":"Breadcrumb",__css:c.container,...z,children:e.jsx(k.ol,{className:"ui-breadcrumb__list",...M,__css:we,children:Se})})})});i.displayName="Breadcrumb";i.__ui__="Breadcrumb";const r=L(({className:s,children:u,isCurrentPage:c,currentPage:o=c,gap:t,isLastChild:h,lastChild:f=h,separator:j,separatorProps:I,...d},g)=>{const{styles:q,separatorProps:M}=W(),z=Pe(u).map(a=>a.type===n?l.cloneElement(a,{currentPage:o}):a.type===O?l.cloneElement(a,{children:a.props.children||j,gap:t,...M,...I}):a),m={alignItems:"center",display:"inline-flex",...q.item};return e.jsxs(k.li,{ref:g,className:T("ui-breadcrumb__item",s),__css:m,...d,children:[z,f?null:e.jsx(O,{gap:t,...M,...I,children:j})]})});r.displayName="BreadcrumbItem";r.__ui__="BreadcrumbItem";const n=L(({href:s,className:u,children:c,isCurrentPage:o,currentPage:t=o,...h},f)=>{const{styles:j}=W();return e.jsx(k.a,{ref:f,as:t?"span":"a",href:t?void 0:s,className:T("ui-breadcrumb__link",u),"aria-current":t?"page":void 0,__css:j.link,...h,children:c})});n.displayName="BreadcrumbLink";n.__ui__="BreadcrumbLink";const O=L(({children:s,gap:u,...c},o)=>{const{styles:t}=W(),h={mx:u,...t.separator};return e.jsx(k.span,{ref:o,className:"ui-breadcrumb__item__separator",__css:h,...c,children:s})});O.displayName="BreadcrumbSeparator";O.__ui__="BreadcrumbSeparator";const b=L(({className:s,children:u,...c},o)=>{const{styles:t}=W(),h={...t.ellipsis};return u??e.jsxs(Ve,{ref:o,className:T("ui-breadcrumb__item__ellipsis",s),"aria-label":"ellipsis",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 36 24",xmlns:"http://www.w3.org/2000/svg",__css:h,...c,children:[e.jsx("circle",{cx:"10",cy:"12",fill:"currentColor",r:"2"}),e.jsx("circle",{cx:"20",cy:"12",fill:"currentColor",r:"2"}),e.jsx("circle",{cx:"30",cy:"12",fill:"currentColor",r:"2"})]})});b.displayName="BreadcrumbEllipsis";b.__ui__="BreadcrumbEllipsis";const kr={component:i,title:"Components / Navigation / Breadcrumb"},E=()=>e.jsxs(i,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{currentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),w=()=>{const s=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",currentPage:!0}],[]);return e.jsx(i,{items:s})},S=()=>{const s=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",currentPage:!0}],[]);return e.jsx(i,{endBoundaries:1,items:s,startBoundaries:1})},v=()=>{const s=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編",ellipsisPage:!0},{href:"/",name:"人造人間編",ellipsisPage:!0},{href:"/",name:"魔人ブウ編",currentPage:!0}],[]);return e.jsx(i,{items:s})},N=()=>{const s=l.useMemo(()=>[{href:"/",name:"サイヤ人編"},{href:"/",name:"ナメック星編"},{href:"/",name:"人造人間編"},{href:"/",name:"魔人ブウ編",currentPage:!0}],[]);return e.jsx(i,{ellipsis:({items:u})=>e.jsxs(Ce,{children:[e.jsx(Ee,{children:e.jsx(b,{})}),e.jsx(ye,{children:u.map(({href:c,name:o},t)=>e.jsx(A,{as:"a",href:c,children:o},t))})]}),endBoundaries:1,items:s,startBoundaries:1})},G=()=>e.jsxs(i,{separator:"-",children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{currentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),R=()=>e.jsxs(i,{separator:e.jsx(qe,{color:"gray.300"}),separatorProps:{alignItems:"center",display:"inline-flex",justifyContent:"center"},children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"サイヤ人編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"ナメック星編"})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{currentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),F=()=>e.jsxs(i,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"孫悟空少年編"})}),e.jsx(r,{children:e.jsx(b,{})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{currentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]}),V=()=>e.jsxs(i,{children:[e.jsx(r,{children:e.jsx(n,{href:"/",children:"孫悟空少年編"})}),e.jsx(r,{children:e.jsxs(Ce,{children:[e.jsx(Ee,{children:e.jsx(b,{})}),e.jsxs(ye,{children:[e.jsx(A,{as:"a",href:"/",children:"ピッコロ大魔王編"}),e.jsx(A,{as:"a",href:"/",children:"サイヤ人編"}),e.jsx(A,{as:"a",href:"/",children:"フリーザ編"})]})]})}),e.jsx(r,{children:e.jsx(n,{href:"/",children:"人造人間編"})}),e.jsx(r,{currentPage:!0,children:e.jsx(n,{href:"/",children:"魔人ブウ編"})})]});var $,ee,re;E.parameters={...E.parameters,docs:{...($=E.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">サイヤ人編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">ナメック星編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem currentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>;
}`,...(re=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,se,ae;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const items = useMemo<BreadcrumbGenerateItem[]>(() => [{
    href: "/",
    name: "サイヤ人編"
  }, {
    href: "/",
    name: "ナメック星編"
  }, {
    href: "/",
    name: "人造人間編"
  }, {
    href: "/",
    name: "魔人ブウ編",
    currentPage: true
  }], []);
  return <Breadcrumb items={items} />;
}`,...(ae=(se=w.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var te,ce,me;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  const items = useMemo<BreadcrumbGenerateItem[]>(() => [{
    href: "/",
    name: "サイヤ人編"
  }, {
    href: "/",
    name: "ナメック星編"
  }, {
    href: "/",
    name: "人造人間編"
  }, {
    href: "/",
    name: "魔人ブウ編",
    currentPage: true
  }], []);
  return <Breadcrumb endBoundaries={1} items={items} startBoundaries={1} />;
}`,...(me=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var ie,ue,oe;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const items = useMemo<BreadcrumbGenerateItem[]>(() => [{
    href: "/",
    name: "サイヤ人編"
  }, {
    href: "/",
    name: "ナメック星編",
    ellipsisPage: true
  }, {
    href: "/",
    name: "人造人間編",
    ellipsisPage: true
  }, {
    href: "/",
    name: "魔人ブウ編",
    currentPage: true
  }], []);
  return <Breadcrumb items={items} />;
}`,...(oe=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:oe.source}}};var de,le,he;N.parameters={...N.parameters,docs:{...(de=N.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  const items = useMemo<BreadcrumbGenerateItem[]>(() => [{
    href: "/",
    name: "サイヤ人編"
  }, {
    href: "/",
    name: "ナメック星編"
  }, {
    href: "/",
    name: "人造人間編"
  }, {
    href: "/",
    name: "魔人ブウ編",
    currentPage: true
  }], []);
  return <Breadcrumb ellipsis={({
    items
  }) => {
    return <Menu>
            <MenuButton>
              <BreadcrumbEllipsis />
            </MenuButton>

            <MenuList>
              {items.map(({
          href,
          name
        }, index) => <MenuItem key={index} as="a" href={href}>
                  {name}
                </MenuItem>)}
            </MenuList>
          </Menu>;
  }} endBoundaries={1} items={items} startBoundaries={1} />;
}`,...(he=(le=N.parameters)==null?void 0:le.docs)==null?void 0:he.source}}};var pe,Be,be;G.parameters={...G.parameters,docs:{...(pe=G.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <Breadcrumb separator="-">
      <BreadcrumbItem>
        <BreadcrumbLink href="/">サイヤ人編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">ナメック星編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem currentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>;
}`,...(be=(Be=G.parameters)==null?void 0:Be.docs)==null?void 0:be.source}}};var fe,xe,je;R.parameters={...R.parameters,docs:{...(fe=R.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <Breadcrumb separator={<ChevronsRightIcon color="gray.300" />} separatorProps={{
    alignItems: "center",
    display: "inline-flex",
    justifyContent: "center"
  }}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">サイヤ人編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">ナメック星編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem currentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>;
}`,...(je=(xe=R.parameters)==null?void 0:xe.docs)==null?void 0:je.source}}};var Ie,ge,_e;F.parameters={...F.parameters,docs:{...(Ie=F.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  return <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">孫悟空少年編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbEllipsis />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem currentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>;
}`,...(_e=(ge=F.parameters)==null?void 0:ge.docs)==null?void 0:_e.source}}};var ke,Le,Me;V.parameters={...V.parameters,docs:{...(ke=V.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">孫悟空少年編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Menu>
          <MenuButton>
            <BreadcrumbEllipsis />
          </MenuButton>

          <MenuList>
            <MenuItem as="a" href="/">
              ピッコロ大魔王編
            </MenuItem>
            <MenuItem as="a" href="/">
              サイヤ人編
            </MenuItem>
            <MenuItem as="a" href="/">
              フリーザ編
            </MenuItem>
          </MenuList>
        </Menu>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">人造人間編</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem currentPage>
        <BreadcrumbLink href="/">魔人ブウ編</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>;
}`,...(Me=(Le=V.parameters)==null?void 0:Le.docs)==null?void 0:Me.source}}};const Lr=["basic","withItems","withBoundaries","customBoundaries","customEllipsis","withSeparator","withCustomSeparator","withEllipsis","withMenu"];export{Lr as __namedExportsOrder,E as basic,v as customBoundaries,N as customEllipsis,kr as default,S as withBoundaries,R as withCustomSeparator,F as withEllipsis,w as withItems,V as withMenu,G as withSeparator};

import{j as t}from"./extends-CwFRzn3r.js";import{r as h}from"./index-BwDkhjyp.js";import{f as w}from"./forward-ref-BWI-Phbn.js";import{r as x,b as O,c as y}from"./factory-CPqzzHTm.js";import{I as R}from"./image-r31XksLP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./use-image-BaSF7u3x.js";import"./use-component-style-CMyamFpN.js";import"./theme-provider-DVkG1YcR.js";const s=w(({className:n,ratio:l=4/3,children:d,...f},u)=>{const g=h.Children.only(d),j={position:"relative",_before:{content:'""',display:"block",h:0,pb:x(l,b=>`${1/b*100}%`)},"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",w:"100%",h:"100%"},"& > img, & > video":{objectFit:"cover"}};return t.jsx(O.div,{ref:u,className:y("ui-aspect-ratio",n),__css:j,...f,children:g})}),E={title:"Components / Layouts / AspectRatio",component:s},e=()=>t.jsx(s,{w:"md",children:t.jsx(R,{src:"https://eiga.k-img.com/images/movie/100944/photo/14e876cfa5d3c633.jpg",alt:"シン・ゴジラ"})}),o=()=>t.jsx(s,{w:"full",ratio:16/9,children:t.jsx("iframe",{title:"map",src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12974.591815632506!2d139.6932331!3d35.6117497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b1a487a026f%3A0x16e7e351187c8216!2z5qCq5byP5Lya56S-IOOCouODkOODg-ODlw!5e0!3m2!1sja!2sjp!4v1674728815443!5m2!1sja!2sjp"})});var a,r,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <AspectRatio w="md">
      <Image src="https://eiga.k-img.com/images/movie/100944/photo/14e876cfa5d3c633.jpg" alt="シン・ゴジラ" />
    </AspectRatio>;
}`,...(m=(r=e.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};var i,c,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <AspectRatio w="full" ratio={16 / 9}>
      <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12974.591815632506!2d139.6932331!3d35.6117497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b1a487a026f%3A0x16e7e351187c8216!2z5qCq5byP5Lya56S-IOOCouODkOODg-ODlw!5e0!3m2!1sja!2sjp!4v1674728815443!5m2!1sja!2sjp" />
    </AspectRatio>;
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const L=["basic","withRatio"];export{L as __namedExportsOrder,e as basic,E as default,o as withRatio};

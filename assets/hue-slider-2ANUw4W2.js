import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{u as y}from"./use-color-slider-BQWyGTV3.js";import{f as S}from"./forward-ref-BmTAT9U5.js";import{a as w}from"./use-component-style-D3qgkwVB.js";import{o as N}from"./theme-provider-DwNsBv-g.js";import{b as o,c as k}from"./factory-CtEVzbYf.js";const C=(t,i,s)=>{let r=[{bgGradient:`linear(to-r, ${[...Array(7)].map((p,a)=>`hsl(${Math.round(t+(i-t)/6*a)}, 100%, 50%)`).join(", ")})`}];return s&&(r=[...r,{boxShadow:"rgba(0, 0, 0, .1) 0 0 0 1px inset, rgb(0, 0, 0, .15) 0 0 4px inset"}]),r},E=S((t,i)=>{const[s,r]=w("HueSlider",t),{className:p,inputProps:a,trackProps:u,thumbProps:n,min:l=0,max:m=360,withShadow:c=!0,overlays:d=C(l,m,c),__css:h,..._}=N(r),{getContainerProps:x,getTrackProps:f,getInputProps:b,getThumbProps:v}=y({min:l,max:m,step:1,..._}),P={position:"relative",...s.container,...h};return e.jsxs(o.div,{className:k("ui-hue-slider",p),__css:P,...x(),children:[e.jsx(o.input,{...b(a,i)}),d.map((g,j)=>e.jsx(o.div,{className:"ui-hue-slider__overlay",__css:{position:"absolute",top:0,left:0,right:0,bottom:0,...s.overlay},...g},j)),e.jsx(o.div,{className:"ui-hue-slider__track",__css:{position:"relative",w:"100%",h:"100%",...s.track},...f(u),children:e.jsx(o.div,{className:"ui-hue-slider__thumb",__css:{...s.thumb},...v(n)})})]})});export{E as H};

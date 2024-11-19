import{j as t}from"./jsx-runtime-CfatFE5O.js";import{u as Ne}from"./index-BZgEUlQ7.js";import{r as h}from"./index-ClcD9ViR.js";import{u as De,Z as Re,k as Ce,X as oe,f as se,h as w,p as Me,c as H,a as N,r as Te,C as Ve}from"./factory-CsPvKZdD.js";import{c as Ae,f as He}from"./form-control-DwB49xkU.js";import{f as Oe,c as re,p as Be,i as Le,j as Ie,h as K,k as Fe,r as We,o as $e}from"./theme-provider-BzJf26st.js";import{I as ze}from"./icon-button-BwOFskq3.js";import{b as Ge}from"./icon-DQQopEtL.js";import{f as O}from"./forward-ref-D13m8o2p.js";import{A as Ze}from"./alpha-slider-CPG4x_jE.js";import{H as qe}from"./hue-slider-g-hiYCkt.js";import{C as _e}from"./color-swatch-BW-JNdkH.js";import{I as Ue}from"./input-COoppZw0.js";import{S as Xe}from"./saturation-slider-DZiBodUM.js";import{a as Je}from"./use-component-style-DigxQCYK.js";const Ke=()=>{const[s,n]=h.useState(!1);De(()=>{n(typeof window<"u"&&"EyeDropper"in window)},[]);const c=h.useCallback(async(l={})=>s?new window.EyeDropper().open(l):Promise.resolve(void 0),[s]);return{supported:s,onOpen:c}},me=(s,n)=>{let[c,l,i,o]=Le(s,n)??[0,0,1,1];return o>1&&(o=1),{a:o,h:c,l:i,s:l}},fe=(s,n)=>{let[c,l,i,o]=Ie(s,n)??[255,255,255,1];return c>255&&(c=255),l>255&&(l=255),i>255&&(i=255),o>1&&(o=1),{a:o,b:i,g:l,r:c}},ae=(s,n)=>{const[c,l,i,o]=Be(s,n);return{a:o,h:c,s:l,v:i}},[Qe,W]=Me({name:"ColorSelectorContext",errorMessage:`useColorSelectorContext returned is 'undefined'. Seems you forgot to wrap the components in "<ColorSelector />"`}),Ye=({isInvalid:s,...n})=>{const{id:c,name:l,defaultValue:i,fallbackValue:o,format:m,value:u,onChange:f,onChangeEnd:_,onChangeStart:E,onSwatchClick:x,...S}=Ae({isInvalid:s,...n}),[{"aria-readonly":D,disabled:d,readOnly:g,required:b,...B},G]=Re(S,He),Z=Ce(E),q=Ce(_),{supported:Q,onOpen:U}=Ke(),[T,X]=Ne({defaultValue:i??o,value:u,onChange:f}),C=h.useMemo(()=>m??Oe(T||"#ffffff"),[T,m]),v=re(T,"#ffffff")(C),$=h.useRef(void 0),L=h.useRef(!1),[V,z]=h.useState(ae(v,o)),{a:A,h:k,s:R,v:I}=V,J=C.endsWith("a"),ge=!(d||g),ye=h.useMemo(()=>{if(v.startsWith("hsl")){const{a:e,h:a,l:r,s:p}=me(v,o);let y=[{label:"H",max:360,min:0,space:"h",value:Math.round(a)},{label:"S(%)",max:100,min:0,space:"s",value:Math.round(p*100)},{label:"L(%)",max:100,min:0,space:"l",value:Math.round(r*100)}];return J&&(y=[...y,{label:"A(%)",max:100,min:0,space:"a",value:Math.round(e*100)}]),y}else{const{a:e,b:a,g:r,r:p}=fe(v,o);let y=[{label:"R",max:255,min:0,space:"r",value:Math.round(p)},{label:"G",max:255,min:0,space:"g",value:Math.round(r)},{label:"B",max:255,min:0,space:"b",value:Math.round(a)}];return J&&(y=[...y,{label:"A(%)",max:100,min:0,space:"a",value:Math.round(e*100)}]),y}},[v,J,o]),P=h.useCallback(e=>{oe(e)?z(ae(e,o)):z(a=>({...a,...e}))},[o]),F=h.useCallback(e=>{window.clearTimeout($.current),L.current=!0;const{a,h:r,s:p,v:y}={...V,...e},M=K([r,p,y,a],o)(C);M&&Z(M)},[Z,o,V,C]),j=h.useCallback(e=>{window.clearTimeout($.current),$.current=window.setTimeout(()=>{L.current=!1},200);let a;if(oe(e))a=re(e,o)(C);else{const{a:r,h:p,s:y,v:M}={...V,...e};a=K([p,y,M,r],o)(C)}a&&q(a)},[q,o,V,C]),he=h.useCallback((e,a)=>{let r=Math.floor(parseFloat(e.target.value));isNaN(r)&&(r=0),["a","l","s"].includes(a)&&(r=r/100);let p;if(v.startsWith("hsl")){const{a:y,h:M,l:Y,s:ee}=Object.assign(me(v,o),{[a]:r});p=Fe([M,ee,Y,y],o)(C)}else{const{a:y,b:M,g:Y,r:ee}=Object.assign(fe(v,o),{[a]:r});p=We([ee,Y,M,y],o)(C)}p&&(P(p),j(p))},[v,P,j,o,C]),de=h.useCallback(async()=>{try{const{sRGBHex:e}=await U()??{};if(!e)return;P(e),j(e)}catch{}},[U,P,j]);se(()=>{const e=K([k,R,I,A],o)(C);e&&X(e)},[k,R,I,A]),se(()=>{L.current||u&&z(ae(u,o))},[u]),se(()=>{if(!T)return;const e=re(T,o)(C);e&&X(e)},[C]);const xe=h.useCallback((e={},a=null)=>({...e,ref:a,...B,...G}),[G,B]),be=h.useCallback((e={},a=null)=>({...B,"aria-readonly":D,...e,id:c,ref:a,type:"hidden",name:l,disabled:d,readOnly:g,required:b,value:v}),[B,D,c,l,v,b,d,g]),ve=h.useCallback((e={},a=null)=>({disabled:d,isInvalid:s,readOnly:g,required:b,...e,ref:a,value:[k,R,I],onChange:w(e.onChange,([,r,p])=>P({s:r,v:p})),onChangeEnd:w(e.onChangeEnd,([,r,p])=>j({s:r,v:p})),onChangeStart:w(e.onChangeStart,([,r,p])=>F({s:r,v:p}))}),[b,d,g,s,k,R,I,P,F,j]),Pe=h.useCallback((e={},a=null)=>({disabled:d,isInvalid:s,readOnly:g,required:b,...e,ref:a,value:k,onChange:w(e.onChange,r=>P({h:r})),onChangeEnd:w(e.onChangeEnd,r=>j({h:r})),onChangeStart:w(e.onChangeStart,r=>F({h:r}))}),[b,d,g,s,k,P,F,j]),je=h.useCallback((e={},a=null)=>({disabled:d,isInvalid:s,readOnly:g,required:b,...e,ref:a,color:K([k,R,I,A],o)(C),value:A,onChange:w(e.onChange,r=>P({a:r})),onChangeEnd:w(e.onChangeEnd,r=>j({a:r})),onChangeStart:w(e.onChangeStart,r=>F({a:r}))}),[o,b,d,g,s,C,k,R,I,A,P,F,j]),we=h.useCallback(({space:e,...a},r=null)=>({disabled:d,isInvalid:s,readOnly:g,required:b,...a,ref:r,type:"number",step:1,onChange:w(a.onChange,p=>he(p,e))}),[b,d,g,s,he]),Ee=h.useCallback((e={},a=null)=>({"aria-label":"Pick a color",disabled:d,...e,ref:a,onClick:w(e.onClick,de)}),[d,de]),ke=h.useCallback(({color:e,...a}={},r=null)=>({"aria-label":`Select ${e} as the color`,disabled:d,readOnly:g,role:"button",...a,ref:r,color:e,onClick:w(a.onClick,()=>{oe(e)&&(x==null||x(e),P(e),j(e))})}),[d,g,x,P,j]);return{channels:ye,disabled:d,eyeDropperSupported:Q,isInteractive:ge,readOnly:g,value:v,withAlpha:J,getAlphaSliderProps:je,getChannelProps:we,getContainerProps:xe,getEyeDropperProps:Ee,getHueSliderProps:Pe,getInputProps:be,getSaturationSliderProps:ve,getSwatchProps:ke,onChange:P}},le=O(({className:s,...n},c)=>{const{size:l,readOnly:i,styles:o,getEyeDropperProps:m}=W(),u={h:"auto",minW:"auto",pointerEvents:i?"none":void 0,...o.eyeDropper};return t.jsx(ze,{className:H("ui-color-selector__eye-dropper",s),size:l,variant:"outline",__css:u,...m(n,c),children:t.jsx(te,{className:"ui-color-selector__eye-dropper__icon"})})});le.displayName="ColorSelectorEyeDropper";le.__ui__="ColorSelectorEyeDropper";const te=({...s})=>t.jsxs(Ge,{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",...s,children:[t.jsx("path",{d:"m2 22 1-1h3l9-9"}),t.jsx("path",{d:"M3 21v-3l9-9"}),t.jsx("path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"})]});te.displayName="EyeDropperIcon";te.__ui__="EyeDropperIcon";const ne=O(({className:s,alphaSliderRef:n,hueSliderRef:c,alphaSliderProps:l,hueSliderProps:i,...o},m)=>{let{size:u,styles:f,withAlpha:_,getAlphaSliderProps:E,getHueSliderProps:x}=W();u==="full"&&(u="lg");const S={display:"flex",flexDirection:"column",...f.sliders};return t.jsxs(N.div,{ref:m,className:H("ui-color-selector__sliders",s),__css:S,...o,children:[t.jsx(qe,{className:"ui-color-selector__hue-slider",size:u,__css:{...f.hueSlider},...x(i,c)}),_?t.jsx(Ze,{className:"ui-color-selector__alpha-slider",size:u,__css:{...f.alphaSlider},...E(l,n)}):null]})});ne.displayName="ColorSelectorSliders";ne.__ui__="ColorSelectorSliders";const ce=O(({className:s,alphaSliderRef:n,eyeDropperRef:c,hueSliderRef:l,withEyeDropper:i=!0,withResult:o,alphaSliderProps:m,eyeDropperProps:u,hueSliderProps:f,..._},E)=>{const{eyeDropperSupported:x,styles:S,value:D}=W(),d={display:"flex",w:"100%",...S.body};return t.jsxs(N.div,{ref:E,className:H("ui-color-selector__body",s),__css:d,..._,children:[t.jsx(ne,{alphaSliderRef:n,hueSliderRef:l,alphaSliderProps:m,hueSliderProps:f}),i&&x?t.jsx(le,{ref:c,...u}):null,o?t.jsx(_e,{className:"ui-color-selector__result",color:D,__css:{...S.result}}):null]})});ce.displayName="ColorSelectorBody";ce.__ui__="ColorSelectorBody";const ie=O(({className:s,channelProps:n,...c},l)=>{const{channels:i,styles:o,withAlpha:m,getChannelProps:u}=W(),f={display:"grid",gridTemplateColumns:`repeat(${m?"4":"3"}, 1fr)`,...o.channels};return t.jsx(N.div,{ref:l,className:H("ui-color-selector__channels",s),__css:f,...c,children:i.map(({label:_,max:E,min:x,space:S,value:D})=>t.jsx(ue,{channelLabel:_,...u({...n,max:E,min:x,space:S,value:D})},_))})});ie.displayName="ColorSelectorChannels";ie.__ui__="ColorSelectorChannels";const ue=O(({className:s,channelLabel:n,...c},l)=>{const i=h.useId();let{size:o,disabled:m,readOnly:u,styles:f}=W();o==="full"&&(o="lg");const _={...f.channel};return t.jsxs(N.div,{className:H("ui-color-selector__channel",s),children:[n?t.jsx(N.label,{htmlFor:i,style:{cursor:m?"not-allowed":void 0},__css:{display:"block",pointerEvents:u?"none":void 0,...f.channelLabel},children:n}):null,t.jsx(Ue,{id:i,ref:l,size:o,__css:_,...c})]})});ue.displayName="ColorSelectorChannel";ue.__ui__="ColorSelectorChannel";const pe=O(({className:s,swatches:n,swatchesColumns:c,swatchesLabel:l,swatchesContainerProps:i,swatchProps:o,...m},u)=>{const{readOnly:f,styles:_,getSwatchProps:E}=W(),x={display:"grid",gridTemplateColumns:Te(c,S=>S!=null?`repeat(${S}, minmax(0, 1fr))`:void 0),..._.swatches};return n!=null&&n.length?t.jsxs(N.div,{...i,children:[l?t.jsx(N.p,{className:"ui-color-selector__swatches__label",__css:{..._.swatchesLabel},children:l}):null,t.jsx(N.div,{ref:u,className:H("ui-color-selector__swatches",s),__css:x,...m,children:n.map(S=>t.jsx(_e,{as:"button",__css:{boxSize:"100%",pointerEvents:f?"none":void 0,..._.swatch},...E({color:S,...o})},S))})]}):null});pe.displayName="ColorSelectorSwatches";pe.__ui__="ColorSelectorSwatches";const Se=O(({size:s,...n},c)=>{const[l,i]=Je("ColorSelector",{size:s,...n}),{className:o,alphaSliderRef:m,children:u,eyeDropperRef:f,hueSliderRef:_,saturationSliderRef:E,swatches:x,swatchesColumns:S=7,swatchesLabel:D,withChannel:d=!0,withEyeDropper:g,withPicker:b=!0,withResult:B=!0,alphaSliderProps:G,channelProps:Z,channelsProps:q,eyeDropperProps:Q,hueSliderProps:U,inputProps:T,saturationSliderProps:X,swatchesProps:C,swatchProps:v,...$}=$e(i),{value:L,getContainerProps:V,getInputProps:z,getSaturationSliderProps:A,...k}=Ye($),R={display:"flex",flexDirection:"column",...l.container};return t.jsx(Qe,{value:{size:s,styles:l,value:L,...k},children:t.jsxs(N.div,{ref:c,className:H("ui-color-selector",o),__css:R,...V(),children:[t.jsx(N.input,{...z(T,c)}),b?t.jsx(Xe,{className:"ui-color-selector__saturation-slider",size:s,__css:{...l.saturationSlider},...A(X,E)}):null,b?t.jsx(ce,{alphaSliderRef:m,eyeDropperRef:f,hueSliderRef:_,withEyeDropper:g,withResult:B,alphaSliderProps:G,eyeDropperProps:Q,hueSliderProps:U}):null,b&&d?t.jsx(ie,{channelProps:Z,...q}):null,t.jsx(pe,{swatches:x,swatchesColumns:S,swatchesLabel:D,swatchProps:v,...C}),Ve(u,{value:L})]})})});Se.displayName="ColorSelector";Se.__ui__="ColorSelector";export{Se as C,te as E,Ke as u};

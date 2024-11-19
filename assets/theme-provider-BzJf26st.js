import{j as O}from"./jsx-runtime-CfatFE5O.js";import{V as B,J as V,n as C,g as me,ad as _e,as as ge,M as J,N as q,a6 as be,X as pe,at as Y,m as U,D as ce,a4 as R,C as A,a3 as v,_ as G,l as Z,au as ye,af as xe,av as je,aw as $e,ax as X,T as Se,E as ke,I as ue,ay as fe}from"./factory-CsPvKZdD.js";import{r as k}from"./index-ClcD9ViR.js";function H(e,...t){return t.join(` ${e} `).replace(/calc/g,"")}function K(...e){return`calc(${H("+",...e)})`}function ee(...e){return`calc(${H("-",...e)})`}function L(...e){return`calc(${H("*",...e)})`}function te(...e){return`calc(${H("/",...e)})`}function ne(e){return isNaN(parseFloat(e.toString()))?L(e,-1):String(e).startsWith("-")?String(e).slice(1):`-${e}`}const w=Object.assign(e=>({add:(...t)=>w(K(e,...t)),divide:(...t)=>w(te(e,...t)),multiply:(...t)=>w(L(e,...t)),negate:()=>w(ne(e)),subtract:(...t)=>w(ee(e,...t)),toString:()=>e.toString()}),{add:K,divide:te,multiply:L,negate:ne,subtract:ee});function $(e,t,n){return Math.min(Math.max(e,n),t)}class ze extends Error{constructor(t){super(`Failed to parse color: "${t}"`)}}var E=ze;function S(e){if(typeof e!="string")throw new E(e);if(e.trim().toLowerCase()==="transparent")return[0,0,0,0];let t=e.trim();t=Fe.test(e)?Ce(e):e;const n=Ee.exec(t);if(n){const o=Array.from(n).slice(1);return[...o.slice(0,3).map(i=>parseInt(F(i,2),16)),parseInt(F(o[3]||"f",2),16)/255]}const s=Me.exec(t);if(s){const o=Array.from(s).slice(1);return[...o.slice(0,3).map(i=>parseInt(i,16)),parseInt(o[3]||"ff",16)/255]}const r=Oe.exec(t);if(r){const o=Array.from(r).slice(1);return[...o.slice(0,3).map(i=>parseInt(i,10)),parseFloat(o[3]||"1")]}const a=Re.exec(t);if(a){const[o,i,c,u]=Array.from(a).slice(1).map(parseFloat);if($(0,100,i)!==i)throw new E(e);if($(0,100,c)!==c)throw new E(e);return[...Ve(o,i,c),Number.isNaN(u)?1:u]}throw new E(e)}function Te(e){let t=5381,n=e.length;for(;n;)t=t*33^e.charCodeAt(--n);return(t>>>0)%2341}const re=e=>parseInt(e.replace(/_/g,""),36),we="1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e,t)=>{const n=re(t.substring(0,3)),s=re(t.substring(3)).toString(16);let r="";for(let a=0;a<6-s.length;a++)r+="0";return e[n]=`${r}${s}`,e},{});function Ce(e){const t=e.toLowerCase().trim(),n=we[Te(t)];if(!n)throw new E(e);return`#${n}`}const F=(e,t)=>Array.from(Array(t)).map(()=>e).join(""),Ee=new RegExp(`^#${F("([a-f0-9])",3)}([a-f0-9])?$`,"i"),Me=new RegExp(`^#${F("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`,"i"),Oe=new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${F(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,"i"),Re=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,Fe=/^[a-z]+$/i,se=e=>Math.round(e*255),Ve=(e,t,n)=>{let s=n/100;if(t===0)return[s,s,s].map(se);const r=(e%360+360)%360/60,a=(1-Math.abs(2*s-1))*(t/100),o=a*(1-Math.abs(r%2-1));let i=0,c=0,u=0;r>=0&&r<1?(i=a,c=o):r>=1&&r<2?(i=o,c=a):r>=2&&r<3?(c=a,u=o):r>=3&&r<4?(c=o,u=a):r>=4&&r<5?(i=o,u=a):r>=5&&r<6&&(i=a,u=o);const l=s-a/2,d=i+l,m=c+l,g=u+l;return[d,m,g].map(se)};function Q(e){const[t,n,s,r]=S(e).map((d,m)=>m===3?d:d/255),a=Math.max(t,n,s),o=Math.min(t,n,s),i=(a+o)/2;if(a===o)return[0,0,i,r];const c=a-o,u=i>.5?c/(2-a-o):c/(a+o);return[60*(t===a?(n-s)/c+(n<s?6:0):n===a?(s-t)/c+2:(t-n)/c+4),u,i,r]}function le(e,t,n,s){return`hsla(${(e%360).toFixed()}, ${$(0,100,t*100).toFixed()}%, ${$(0,100,n*100).toFixed()}%, ${parseFloat($(0,1,s).toFixed(3))})`}function I(e,t,n,s){return`rgba(${$(0,255,e).toFixed()}, ${$(0,255,t).toFixed()}, ${$(0,255,n).toFixed()}, ${parseFloat($(0,1,s).toFixed(3))})`}function he(e,t,n){const s=(j,T)=>T===3?j:j/255,[r,a,o,i]=S(e).map(s),[c,u,l,d]=S(t).map(s),m=d-i,g=n*2-1,f=((g*m===-1?g:g+m/(1+g*m))+1)/2,_=1-f,h=(r*_+c*f)*255,p=(a*_+u*f)*255,b=(o*_+l*f)*255,x=d*n+i*(1-n);return I(h,p,b,x)}function qe(e,t){const[n,s,r,a]=S(e);return I(n,s,r,a-t)}function z(e){const[t,n,s,r]=S(e);let a=o=>{const i=$(0,255,o).toString(16);return i.length===1?`0${i}`:i};return`#${a(t)}${a(n)}${a(s)}${r<1?a(Math.round(r*255)):""}`}function Ae(e){return I(...S(e))}function We(e){return le(...Q(e))}const ht=["primary","secondary","info","success","warning","danger","link"],dt=["gray","neutral","red","rose","pink","flashy","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia"],ve=[50,100,200,300,400,500,600,700,800,900,950];function mt(e){return e==="gray"||e==="neutral"}function _t(e){return e==="yellow"||e==="cyan"||e==="lime"}function N(e,t="#000000"){return function(n={},s="light",r="base"){var c,u;const[a,o]=e.split(".");if(o){const[,l]=Object.entries(((c=n.semantics)==null?void 0:c.colorSchemes)??{}).find(([d])=>a===d)??[];l&&(e=`${l}.${o}`)}else{const[,l]=Object.entries(((u=n.semantics)==null?void 0:u.colors)??{}).find(([d])=>a===d)??[];l&&(e=l)}const i=B(n,`colors.${e}`,e);try{return V(i)?z(String(i[s!=="dark"?0:1])):C(i)?z(String(i[r])):z(String(i))}catch{try{return z(t)}catch{return"#000000"}}}}function gt(e,t){return function(n,s,r){const a=N(e,e)(n,s,r);return z(he(a,"#fff",t/100))}}function bt(e,t){return function(n,s,r){const a=N(e,e)(n,s,r);return z(he(a,"#000",t/100))}}function pt(e,t){return function(n,s,r){const a=N(e,e)(n,s,r);return qe(a,1-t)}}function yt({colors:e,string:t}={}){const n=He();return t&&e?Ne(t,e)??n:t&&!e?Ie(t):e&&!t?Pe(e)??n:n}function He(){return`#${Math.floor(Math.random()*16777215).toString(16).padEnd(6,"0")}`}function Ie(e){let t=0;if(e.length===0)return t.toString();for(let s=0;s<e.length;s+=1)t=e.charCodeAt(s)+((t<<5)-t),t=t&t;let n="#";for(let s=0;s<3;s+=1){const r=t>>s*8&255;n+=`00${r.toString(16)}`.substr(-2)}return n}function Ne(e,t){let n=0;if(e.length===0)return t[0];for(let s=0;s<e.length;s+=1)n=e.charCodeAt(s)+((n<<5)-n),n=n&n;return n=(n%t.length+t.length)%t.length,t[n]}function Pe(e){return e[Math.floor(Math.random()*e.length)]}function De(e){const[t,n,s]=S(e);return(t*299+n*587+s*114)/1e3}function Ge(e){return function(t,n,s){const r=t?N(e)(t,n,s):e;return De(r)<128?"dark":"light"}}function xt(e){return function(t,n){return Ge(e)(t,n)==="light"}}function P(e,t){return function(n){try{const s=n.endsWith("a");if(/^[0-9a-fA-F]{6}$/.test(e)&&(e="#"+e),n.startsWith("hex")){let r=z(e);return s?r.length===7&&(r+="ff"):r=r.replace(new RegExp("(?<=^#([0-9a-fA-F]{6}))[0-9a-fA-F]{2}$"),""),r}else if(n.startsWith("hsl")){let r=We(e);return s||(r=r.replace(/hsla/,"hsl"),r=r.replace(/,\s*\d+(\.\d+)?\)$/,")")),r}else{let r=Ae(e);return s||(r=r.replace(/rgba/,"rgb"),r=r.replace(/,\s*\d+(\.\d+)?\)$/,")")),r}}catch{if(t)return P(t)(n)}}}function jt(e){return e.startsWith("hsl")?e.startsWith("hsla")?"hsla":"hsl":e.startsWith("rgb")?e.startsWith("rgba")?"rgba":"rgb":e.length===9?"hexa":"hex"}function $t(e){return 0>e&&(e=0),1<e&&(e=1),Math.round(e*255).toString(16).padStart(2,"0")}function Le(e,t){try{return/^[0-9a-fA-F]{6}$/.test(e)&&(e="#"+e),S(e)}catch{if(t)return S(t)}}function St(e,t){try{return/^[0-9a-fA-F]{6}$/.test(e)&&(e="#"+e),Q(e)}catch{if(t)return Q(t)}}function kt(e,t){let[n,s,r,a]=Le(e,t)??[255,255,255,1];n=n/255,s=s/255,r=r/255;const[o,i]=[Math.min(n,s,r),Math.max(n,s,r)],c=i-o;let[u,l,d]=[0,i,i==0?0:c/i];switch(o){case i:u=0;break;case n:u=60*((r-s)/c)+180;break;case s:u=60*((n-r)/c)+300;break;case r:u=60*((s-n)/c)+60;break}return[u,d,l,a]}function zt([e,t,n,s],r){return function(a="hex"){return P(I(e,t,n,s),r)(a)}}function Tt([e,t,n,s],r){return function(a="hex"){return P(le(e,t,n,s),r)(a)}}function wt([e,t,n,s],r){return function(a="hex"){e=e/60;let o=[n,n,n],i=Math.floor(e),c=e-i,u=n*(1-t),l=n*(1-t*c),d=n*(1-t*(1-c));switch(i){case 0:case 6:o=[n,d,u];break;case 1:o=[l,n,u];break;case 2:o=[u,n,d];break;case 3:o=[u,l,n];break;case 4:o=[d,u,n];break;case 5:o=[n,u,l];break}let m=`rgb(${o.map(g=>Math.round(g*255)).join(", ")})`;return me(s)&&(m=m.replace(/\)$/,`, ${s})`)),P(m,r)(a)}}function D(e,t,n="@media screen"){const s=[n];return e&&s.push("and",`(min-width: ${e}px)`),t&&s.push("and",`(max-width: ${t}px)`),s.length>1?s.join(" ").replace(/^@container(\s+\w*)?\s+and/,"@container$1"):void 0}function Qe(e,t){const{direction:n,identifier:s}=t,r=n!=="up";return Object.entries(e).map(([a,o],i,c)=>{const[,u]=c[i+1]??[];let l=r?u:o,d=r?o:u;a==="base"&&(r?d=void 0:l=void 0),r?l&&(l+=1):d&&(d-=1);const m=D(void 0,d,s),g=D(l,void 0,s),y=D(l,d,s);return{breakpoint:a,maxW:d,maxWQuery:m,minMaxQuery:y,minW:l,minWQuery:g,query:r?m:g}})}function Be(e,t){return Object.fromEntries(Object.entries(e).map(([n,s])=>[n,_e(s)]).sort((n,s)=>t.direction!=="up"?s[1]-n[1]:n[1]-s[1]))}function Ue(e,t={}){if(!e)return;t.base??(t.base="9999px"),t.direction??(t.direction="down"),e.base=t.direction!=="up"?t.base:"0px",e=Be(e,t);const n=Object.keys(e),s=Qe(e,t);return{isResponsive:(a,o=!1)=>{const i=Object.keys(a);return!i.length||o&&!i.includes("base")?!1:i.every(c=>n.includes(c))},keys:n,queries:s}}function Ct(e){return function(t){var s,r;return`var(--${((r=(s=t.__config)==null?void 0:s.var)==null?void 0:r.prefix)??ce}-${e})`}}const Xe=e=>e.startsWith("gradients."),Je=e=>e.startsWith("animations."),Ye=e=>e.startsWith("spaces.");function Ze(e=ce,t){function n(s){s=s.replace(/\./g,"-");const r=`--${[e,ge(s,"-")].filter(Boolean).join("-")}`;return{reference:`var(${r})`,variable:r}}return function(s){return function({cssMap:r={},cssVars:a={},prevTokens:o}={}){const i={__cssMap:r};function c(f,_=""){const h=[f.split(".")[0],_].join(".");if(!(s[h]??(o==null?void 0:o[h])))return[,_];const{reference:b,variable:x}=n(h);return[x,b]}function u(f){var _;return(_=t.find(({breakpoint:h})=>h===f))==null?void 0:_.query}function l(f){return pe(f)?f.replace(/\$([^,)/\s]+)/g,(_,h)=>{var b;return s[h]??(o==null?void 0:o[h])?n(h).reference:h in r&&((b=r[h])!=null&&b.ref)?r[h].ref:`var(--${e}-${h})`}):f}function d(f,_){const h=f.split("."),[p,...b]=h,x=`${p}.-${b.join(".")}`;return{negativeReference:w.negate(_),negativeToken:x}}function m(f){return V(f)?f.map(_=>J(_,i,q)).join(","):J(f,i,q)}function g(f,_){return function(h){if(h){const[p,b]=c(f,_);return p?b:Y(_,i)}else return Y(_,i)}}function y(f,_,h){return function(p,b=[]){if(V(_)){const[x,j]=_;y(f,x,h)(p,b),y(f,j,h)(p,[...b,be._dark])}else if(C(_))Object.entries(_).forEach(([x,j])=>{if(x==="base")y(f,j,h)(p,b);else{const T=u(x);if(!T)return;y(f,j,h)(p,[...b,T])}});else{let x=l(_);if(Xe(f))x=g(f,x)(p);else if(p){const[,j]=c(f,x);x=j}a=U(a,b.reduceRight((j,T)=>({[T]:j}),{[h]:x}))}}}for(let[f,{isSemantic:_,value:h}]of Object.entries(s)){const{reference:p,variable:b}=n(f);if(Je(f)&&(h=m(h)),y(f,h,b)(_),Ye(f)){const{negativeReference:x,negativeToken:j}=d(f,p);r[j]={ref:x,var:b}}r[f]={ref:p,var:b}}return{cssMap:r,cssVars:a}}}}const Ke="ui-theme-scheme",et=!!globalThis.document,tt=e=>({type:"localStorage",get:(t="base")=>(n=e)=>{if(!et)return t;try{return localStorage.getItem(n)||t}catch{return t}},set:t=>(n=e)=>{try{localStorage.setItem(n,String(t))}catch{}},ssr:!1}),nt={localStorage:tt(Ke)},ae=["blurs","borders","colors","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","shadows","sizes","spaces","zIndices"],oe=["gradients"];function rt(e,t){var m,g;e=at(e);const n=(m=t==null?void 0:t.var)==null?void 0:m.prefix,s=Ue(e.breakpoints,t==null?void 0:t.breakpoint),r=st(s,(g=t==null?void 0:t.theme)==null?void 0:g.responsive),{queries:a=[]}=s??{},o=Ze(n,a),i=r(e),c=r(e,"secondary"),u=r(e,"animation");let{cssMap:l,cssVars:d}=ie(o(i),o(c),o(u))();if(e.themeSchemes)for(const[y,f]of Object.entries(e.themeSchemes)){const _=r(f),h=r(f,"secondary"),p=r(f,"animation");let{cssVars:b}=ie(o(_),o(h),o(p))({...i,...c,...u});d={...d,[`[data-theme=${y}] &:not([data-theme]), &[data-theme=${y}]`]:b}}return Object.assign(e,{__breakpoints:s,__config:t,__cssMap:l,__cssVars:d}),e}function st(e,t){return function(n,s="primary"){let r,a=[],o=[],i=[];switch(t&&(r=m=>!(e!=null&&e.isResponsive(m,!0))),s){case"primary":a=[...ae,"transitions"],o=[...ae,"transitions","colorSchemes"];break;case"secondary":a=[...oe],o=[...oe];break;case"animation":a=["animations"],o=["animations"],i=["keyframes"];break}const c=G(n,a),u=G(n.semantics??{},o),l=Object.entries(Z(c,{omitKeys:i,shouldProcess:r})).map(([m,g])=>[m,{isSemantic:!1,value:g}]),d=Object.entries(Z(u,{omitKeys:i,shouldProcess:r})).reduce((m,[g,y])=>{if(g.startsWith("colorSchemes.")){const[,f,_]=g.split(".");if(_){const h={isSemantic:!1,value:y};m.push([`colors.${f}.${_}`,h])}else ve.forEach(h=>{const p={isSemantic:!0,value:V(y)?[`${y[0]}.${h}`,`${y[1]}.${h}`]:`${y}.${h}`};m.push([`colors.${f}.${h}`,p])})}else{const f={isSemantic:!0,value:y};m.push([g,f])}return m},[]);return ye([...l,...d])}}function ie(...e){return function(t){let n={},s={};for(const r of e){const{cssMap:a,cssVars:o}=r({cssMap:n,cssVars:s,prevTokens:t});n={...n,...a},s={...s,...o}}return{cssMap:n,cssVars:s}}}function at(e){return v(e,["__cssMap","__cssVar","__breakpoints"])}function Et(e,t=[]){return v(e,["size","variant","colorScheme",...t])}function Mt(e,...t){return function({omit:n=[],pick:s=[]}={}){return t.reduce((r,a)=>W(de(r)({omit:n,pick:s}),a),e)}}function Ot(e,...t){return function({omit:n=[],pick:s=[]}={}){return t.reduce((r,a)=>W(de(r)({isMulti:!0,omit:n,pick:s}),a),e)}}function W(e,t){let n=Object.assign({},e);if(C(t)&&C(e))for(const[s,r]of Object.entries(t)){const a=e[s];e.hasOwnProperty(s)?!R(a)&&!R(r)?n[s]=W(a,r):n[s]=o=>W(A(a,o),A(r,o)):Object.assign(n,{[s]:r})}else n=t;return n}function de(e){return function({isMulti:t=!1,omit:n,pick:s}){return C(e)&&(n.length&&(e=M(e,n,t)(v)),s.length&&(e=M(e,s,t)(G))),e}}function M(e,t,n,s=[]){return function(r){if(!C(e))return e;let a=Object.assign({},e);return a=r(a,t),Object.entries(a).forEach(([o,i])=>{const c=t.filter(l=>l!==o),u=[...s,o];ot(u,n)&&(R(i)?a[o]=l=>M(i(l),c,n,u)(r):r===v||Object.keys(i).some(l=>c.includes(l))?a[o]=M(i,c,n,u)(r):a[o]=U(a[o],M(i,c,n,u)(r)))}),a}}function ot(e,t){switch(e[0]){case"baseStyle":return e.length<(t?2:1);case"variants":case"sizes":return e.length<(t?3:2);default:return!1}}function Rt(e,t,n=!0){const s={};return Object.entries(e).forEach(([r,a])=>{switch(r){case"baseStyle":R(a)?s[r]=o=>a(o)[t]:s[r]=a[t];break;case"variants":case"sizes":s[r]=Object.entries(a).reduce((o,[i,c])=>(R(c)?o[i]=u=>c(u)[t]:c[t]&&(o[i]=c[t]),o),{});break;case"defaultProps":n&&(s[r]=a);break}}),s}const{localStorage:it}=nt,Ft=({children:e,config:t,storageKey:n,theme:s={},themeSchemeManager:r=it})=>{const a=xe(),[o,i]=k.useState(r.get(t==null?void 0:t.initialThemeScheme)(n)),c=k.useCallback(l=>{const{getDocument:d}=a,m=d(),g=t!=null&&t.disableTransitionOnChange?je(a):void 0;m&&(m.documentElement.dataset.theme=l),g==null||g(),i(l),r.set(l)(n)},[t,a,r,n]),u=k.useMemo(()=>rt(s,t),[s,t]);return k.useEffect(()=>{const l=r.get()(n);l&&c(l)},[c,r,n]),O.jsxs($e,{theme:{changeThemeScheme:c,themeScheme:o,...u},children:[O.jsx(ct,{}),e]})},ct=()=>O.jsx(X,{styles:({__cssVars:e})=>({":host, :root, [data-mode]":e})}),Vt=()=>{const{colorMode:e}=ue();return O.jsx(X,{styles:t=>{const{themeScheme:n}=t,s=B(t,"styles.resetStyle",{}),r=A(s,{colorMode:e,theme:t,themeScheme:n});if(!fe(r))return q(r)(t)}})},qt=()=>{const{colorMode:e}=ue();return O.jsx(X,{styles:t=>{const{themeScheme:n}=t;let s=B(t,"styles.globalStyle",{});const r=A(s,{colorMode:e,theme:t,themeScheme:n});if(!fe(r))return q(r)(t)}})},At=()=>{const e=k.useContext(Se),t=k.useMemo(()=>{var a;const{themeScheme:s}=e;if(ke(s)||s==="base")return e;const r=(a=e.themeSchemes)==null?void 0:a[s];return r?U(e,r):e},[e]);return k.useMemo(()=>{const{changeThemeScheme:s,themeScheme:r}=e;return{changeThemeScheme:s,internalTheme:e,theme:t,themeScheme:r}},[t,e])};export{dt as C,qt as G,Vt as R,ht as S,ve as T,$t as a,D as b,P as c,w as d,Ft as e,jt as f,Ct as g,wt as h,St as i,Le as j,Tt as k,mt as l,Ot as m,N as n,Et as o,kt as p,yt as q,zt as r,bt as s,xt as t,At as u,_t as v,pt as w,gt as x,Mt as y,Rt as z};

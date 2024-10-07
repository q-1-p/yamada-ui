import{r as m}from"./index-BwDkhjyp.js";import{b as P,i as K,g as j}from"./event-C_48urmU.js";import{u as U,K as G,F as N}from"./factory-CTJ-ITwV.js";const J=e=>{const t=m.useRef(null);return t.current=e,t},O=1/60*1e3,Q=typeof performance<"u"?()=>performance.now():()=>Date.now(),V=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(Q()),O);function X(e){let t=[],r=[],n=0,o=!1,a=!1;const c=new WeakSet,f={schedule:(s,i=!1,u=!1)=>{const l=u&&o,d=l?t:r;return i&&c.add(s),d.indexOf(s)===-1&&(d.push(s),l&&o&&(n=t.length)),s},cancel:s=>{const i=r.indexOf(s);i!==-1&&r.splice(i,1),c.delete(s)},process:s=>{if(o){a=!0;return}if(o=!0,[t,r]=[r,t],r.length=0,n=t.length,n)for(let i=0;i<n;i++){const u=t[i];u(s),c.has(u)&&(f.schedule(u),e())}o=!1,a&&(a=!1,f.process(s))}};return f}const Y=40;let S=!0,g=!1,F=!1;const x={delta:0,timestamp:0},y=["read","update","preRender","render","postRender"],E=y.reduce((e,t)=>(e[t]=X(()=>g=!0),e),{}),Z=y.reduce((e,t)=>{const r=E[t];return e[t]=(n,o=!1,a=!1)=>(g||k(),r.schedule(n,o,a)),e},{}),_=y.reduce((e,t)=>(e[t]=E[t].cancel,e),{});y.reduce((e,t)=>(e[t]=()=>E[t].process(x),e),{});const $=e=>E[e].process(x),A=e=>{g=!1,x.delta=S?O:Math.max(Math.min(e-x.timestamp,Y),1),x.timestamp=e,F=!0,y.forEach($),F=!1,g&&(S=!1,V(A))},k=()=>{g=!0,S=!0,F||V(A)},I=()=>x,L=(e,t)=>({x:e.x-((t==null?void 0:t.x)??0),y:e.y-((t==null?void 0:t.y)??0)}),R=(e,t)=>({delta:L(e.point,t[t.length-1]),offset:L(e.point,t[0]),point:e.point,velocity:te(t,.1)}),ee=e=>e*1e3,te=(e,t)=>{if(e.length<2)return{x:0,y:0};let r=e.length-1,n;const o=e[e.length-1];for(;r>=0&&(n=e[r],!(o&&n&&o.timestamp-n.timestamp>ee(t)));)r--;if(!o||!n)return{x:0,y:0};const a=(o.timestamp-n.timestamp)/1e3;if(a===0)return{x:0,y:0};const c={x:(o.x-n.x)/a,y:(o.y-n.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c},ne=(...e)=>t=>e.reduce((r,n)=>n(r),t),D=(e,t)=>Math.abs(e-t),H=e=>"x"in e&&"y"in e,se=(e,t)=>{if(typeof e=="number"&&typeof t=="number")return D(e,t);if(H(e)&&H(t)){const r=D(e.x,t.x),n=D(e.y,t.y);return Math.sqrt(r**2+n**2)}return 0},re=(e,t,r=3)=>{if(K(e))return;const n=e.view??window,o={point:j(e)},{timestamp:a}=I(),{onEnd:c,onMove:f,onSessionEnd:s,onSessionStart:i,onStart:u}=t,l=[{...o.point,timestamp:a}];let d=null,w=null,z=null;e.stopPropagation(),e.preventDefault(),i==null||i(e,R(o,l));const M=()=>{if(!(w&&z))return;const p=R(z,l),h=d!==null,v=se(p.offset,{x:0,y:0})>=r;if(!h&&!v)return;const{timestamp:B}=I();l.push({...p.point,timestamp:B}),h||(u==null||u(w,p),d=w),f==null||f(w,p)},C=(p,h)=>{w=p,z=h,Z.update(M,!0)},b=(p,h)=>{const v=R(h,l);s==null||s(p,v),T(),!(!c||!d)&&c(p,v)},W=p=>{t=p};let q=ne(P(n,"pointermove",C),P(n,"pointerup",b),P(n,"pointercancel",b));const T=()=>{q(),_.update(M)};return{end:T,updateHandlers:W}},le=(e,{threshold:t,onEnd:r,onMove:n,onSessionEnd:o,onSessionStart:a,onStart:c})=>{const f=!!n||!!c||!!r||!!a||!!o,s=m.useRef(null),i=J({onEnd:(u,l)=>{s.current=null,r==null||r(u,l)},onMove:n,onSessionEnd:o,onSessionStart:a,onStart:c});m.useEffect(()=>{var u;(u=s.current)==null||u.updateHandlers(i.current)}),m.useEffect(()=>{const u=e.current;return!u||!f?void 0:P(u,"pointerdown",d=>{s.current=re(d,i.current,t)})},[e,f,i,t]),m.useEffect(()=>()=>{var u;(u=s.current)==null||u.end(),s.current=null},[])},oe=(e,t)=>{if(!e){t(void 0);return}t({height:e.offsetHeight,width:e.offsetWidth});const r=e.ownerDocument.defaultView??window,n=new r.ResizeObserver(o=>{if(!N(o)||!o.length)return;const[a]=o;let c,f;if(a&&"borderBoxSize"in a){const s=a.borderBoxSize,i=N(s)?s[0]:s;c=i.inlineSize,f=i.blockSize}else c=e.offsetWidth,f=e.offsetHeight;t({height:f,width:c})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)},ie=(e,t)=>{if(!(e!=null&&e.parentElement))return;const r=e.ownerDocument.defaultView??window,n=new r.MutationObserver(()=>{t()});return n.observe(e.parentElement,{childList:!0}),()=>{n.disconnect()}},ce=({getNodes:e,observeMutation:t=!0})=>{const[r,n]=m.useState([]),[o,a]=m.useState(0);return U(()=>{const c=e(),f=c.map((s,i)=>oe(s,u=>{n(l=>[...l.slice(0,i),u,...l.slice(i+1)])}));if(t){const s=c[0];f.push(ie(s,()=>{a(i=>i+1)}))}return()=>{f.forEach(s=>{s==null||s()})}},[o]),r},pe=e=>{const[t]=ce({getNodes:()=>[G(e)?e.current:e],observeMutation:!1});return t};export{pe as a,le as b,ce as c,J as u};

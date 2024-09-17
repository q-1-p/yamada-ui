import{_ as he,j as y}from"./extends-CwFRzn3r.js";import{u as Ve}from"./index-CKYwj09A.js";import{r as m,R as Dr}from"./index-BwDkhjyp.js";import{c as Ce,a as Pr,u as Ar,R as Nr}from"./Combination-IUp2vs9T.js";import{f as Tr}from"./fade-Ce3mExaE.js";import{m as Z}from"./forward-ref-scR1bmHx.js";import{m as Ye,A as Br}from"./factory-BfCzQy-p.js";import{ay as jr,L as Lr,l as Fe,c as F,h as Ke,b as J,t as _e,w as se,s as Wr}from"./factory-CPqzzHTm.js";import{C as Ur}from"./close-button-JWZgMj1j.js";import{f as j}from"./forward-ref-BWI-Phbn.js";import{S as Rr}from"./slide-7a_LIRLl.js";import{s as ue}from"./slide-fade-Dq1TAfNq.js";import{s as Hr}from"./scale-fade-ZTztv-t6.js";import{P as Gr}from"./portal-B84gyEPp.js";import{_ as $r,a as qr}from"./defineProperty-UXmCCx-B.js";import{_ as Vr}from"./inheritsLoose-DR8r8Ogv.js";import{a as Yr}from"./use-component-style-CMyamFpN.js";import{o as Kr}from"./theme-provider-DVkG1YcR.js";var ge="data-focus-lock",Xe="data-focus-lock-disabled",Xr="data-no-focus-lock",Zr="data-autofocus-inside",Jr="data-no-autofocus",ve={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},Ze=Ce({},function(e){var r=e.target,t=e.currentTarget;return{target:r,currentTarget:t}}),Je=Ce(),Qr=Ce(),zr=Pr({async:!0,ssr:typeof document<"u"}),et=m.createContext(void 0),rt=[],Oe=m.forwardRef(function(r,t){var n,o=m.useState(),a=o[0],u=o[1],c=m.useRef(),l=m.useRef(!1),s=m.useRef(null),f=m.useState({}),i=f[1],d=r.children,p=r.disabled,v=p===void 0?!1:p,b=r.noFocusGuards,x=b===void 0?!1:b,h=r.persistentFocus,w=h===void 0?!1:h,C=r.crossFrame,S=C===void 0?!0:C,O=r.autoFocus,W=O===void 0?!0:O;r.allowTextSelection;var Q=r.group,P=r.className,z=r.whiteList,ee=r.hasPositiveIndices,g=r.shards,_=g===void 0?rt:g,E=r.as,U=E===void 0?"div":E,D=r.lockProps,A=D===void 0?{}:D,R=r.sideCar,ae=r.returnFocus,I=ae===void 0?!1:ae,H=r.focusOptions,re=r.onActivation,G=r.onDeactivation,yr=m.useState({}),xr=yr[0],wr=m.useCallback(function(M){var $=M.captureFocusRestore;if(!s.current){var q,N=(q=document)==null?void 0:q.activeElement;s.current=N,N!==document.body&&(s.current=$(N))}c.current&&re&&re(c.current),l.current=!0,i()},[re]),Cr=m.useCallback(function(){l.current=!1,G&&G(c.current),i()},[G]),Fr=m.useCallback(function(M){var $=s.current;if($){var q=(typeof $=="function"?$():$)||document.body,N=typeof I=="function"?I(q):I;if(N){var je=typeof N=="object"?N:void 0;s.current=null,M?Promise.resolve().then(function(){return q.focus(je)}):q.focus(je)}}},[I]),_r=m.useCallback(function(M){l.current&&Ze.useMedium(M)},[]),Or=Je.useMedium,Er=m.useCallback(function(M){c.current!==M&&(c.current=M,u(M))},[]),kr=he((n={},n[Xe]=v&&"disabled",n[ge]=Q,n),A),Be=x!==!0,Ir=Be&&x!=="tail",Mr=Ar([t,Er]),Sr=m.useMemo(function(){return{observed:c,shards:_,enabled:!v,active:l.current}},[v,l.current,_,a]);return m.createElement(m.Fragment,null,Be&&[m.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:v?-1:0,style:ve}),ee?m.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:v?-1:1,style:ve}):null],!v&&m.createElement(R,{id:xr,sideCar:zr,observed:a,disabled:v,persistentFocus:w,crossFrame:S,autoFocus:W,whiteList:z,shards:_,onActivation:wr,onDeactivation:Cr,returnFocus:Fr,focusOptions:H}),m.createElement(U,he({ref:Mr},kr,{className:P,onBlur:Or,onFocus:_r}),m.createElement(et.Provider,{value:Sr},d)),Ir&&m.createElement("div",{"data-focus-guard":!0,tabIndex:v?-1:0,style:ve}))});Oe.propTypes={};function tt(e,r){function t(n){return n.displayName||n.name||"Component"}return function(o){var a=[],u;function c(){u=e(a.map(function(s){return s.props})),r(u)}var l=function(s){Vr(f,s);function f(){return s.apply(this,arguments)||this}f.peek=function(){return u};var i=f.prototype;return i.componentDidMount=function(){a.push(this),c()},i.componentDidUpdate=function(){c()},i.componentWillUnmount=function(){var p=a.indexOf(this);a.splice(p,1),c()},i.render=function(){return Dr.createElement(o,this.props)},f}(m.PureComponent);return $r(l,"displayName","SideEffect("+t(o)+")"),l}}var k=function(e){for(var r=Array(e.length),t=0;t<e.length;++t)r[t]=e[t];return r},B=function(e){return Array.isArray(e)?e:[e]},Qe=function(e){return Array.isArray(e)?e[0]:e},nt=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var r=window.getComputedStyle(e,null);return!r||!r.getPropertyValue?!1:r.getPropertyValue("display")==="none"||r.getPropertyValue("visibility")==="hidden"},ze=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},er=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},ot=function(e){return e.hasAttribute("inert")},at=function(e,r){return!e||er(e)||!nt(e)&&!ot(e)&&r(ze(e))},rr=function(e,r){var t=e.get(r);if(t!==void 0)return t;var n=at(r,rr.bind(void 0,e));return e.set(r,n),n},ut=function(e,r){return e&&!er(e)?ct(e)?r(ze(e)):!1:!0},tr=function(e,r){var t=e.get(r);if(t!==void 0)return t;var n=ut(r,tr.bind(void 0,e));return e.set(r,n),n},nr=function(e){return e.dataset},st=function(e){return e.tagName==="BUTTON"},or=function(e){return e.tagName==="INPUT"},ar=function(e){return or(e)&&e.type==="radio"},it=function(e){return!((or(e)||st(e))&&(e.type==="hidden"||e.disabled))},ct=function(e){var r=e.getAttribute(Jr);return![!0,"true",""].includes(r)},Ee=function(e){var r;return!!(e&&(!((r=nr(e))===null||r===void 0)&&r.focusGuard))},ye=function(e){return!Ee(e)},lt=function(e){return!!e},ft=function(e,r){var t=Math.max(0,e.tabIndex),n=Math.max(0,r.tabIndex),o=t-n,a=e.index-r.index;if(o){if(!t)return 1;if(!n)return-1}return o||a},dt=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},ke=function(e,r,t){return k(e).map(function(n,o){var a=dt(n);return{node:n,index:o,tabIndex:t&&a===-1?(n.dataset||{}).focusGuard?0:-1:a}}).filter(function(n){return!r||n.tabIndex>=0}).sort(ft)},vt=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],Ie=vt.join(","),mt="".concat(Ie,", [data-focus-guard]"),ur=function(e,r){return k((e.shadowRoot||e).children).reduce(function(t,n){return t.concat(n.matches(r?mt:Ie)?[n]:[],ur(n))},[])},pt=function(e,r){var t;return e instanceof HTMLIFrameElement&&(!((t=e.contentDocument)===null||t===void 0)&&t.body)?X([e.contentDocument.body],r):[e]},X=function(e,r){return e.reduce(function(t,n){var o,a=ur(n,r),u=(o=[]).concat.apply(o,a.map(function(c){return pt(c,r)}));return t.concat(u,n.parentNode?k(n.parentNode.querySelectorAll(Ie)).filter(function(c){return c===n}):[])},[])},bt=function(e){var r=e.querySelectorAll("[".concat(Zr,"]"));return k(r).map(function(t){return X([t])}).reduce(function(t,n){return t.concat(n)},[])},Me=function(e,r){return k(e).filter(function(t){return rr(r,t)}).filter(function(t){return it(t)})},Le=function(e,r){return r===void 0&&(r=new Map),k(e).filter(function(t){return tr(r,t)})},Se=function(e,r,t){return ke(Me(X(e,t),r),!0,t)},ie=function(e,r){return ke(Me(X(e),r),!1)},ht=function(e,r){return Me(bt(e),r)},T=function(e,r){return e.shadowRoot?T(e.shadowRoot,r):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,r)?!0:k(e.children).some(function(t){var n;if(t instanceof HTMLIFrameElement){var o=(n=t.contentDocument)===null||n===void 0?void 0:n.body;return o?T(o,r):!1}return T(t,r)})},gt=function(e){for(var r=new Set,t=e.length,n=0;n<t;n+=1)for(var o=n+1;o<t;o+=1){var a=e[n].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&r.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&r.add(n)}return e.filter(function(u,c){return!r.has(c)})},sr=function(e){return e.parentNode?sr(e.parentNode):e},De=function(e){var r=B(e);return r.filter(Boolean).reduce(function(t,n){var o=n.getAttribute(ge);return t.push.apply(t,o?gt(k(sr(n).querySelectorAll("[".concat(ge,'="').concat(o,'"]:not([').concat(Xe,'="disabled"])')))):[n]),t},[])},yt=function(e){try{return e()}catch{return}},ne=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var r=e.activeElement;return r.shadowRoot?ne(r.shadowRoot):r instanceof HTMLIFrameElement&&yt(function(){return r.contentWindow.document})?ne(r.contentWindow.document):r}},xt=function(e,r){return e===r},wt=function(e,r){return!!k(e.querySelectorAll("iframe")).some(function(t){return xt(t,r)})},ir=function(e,r){return r===void 0&&(r=ne(Qe(e).ownerDocument)),!r||r.dataset&&r.dataset.focusGuard?!1:De(e).some(function(t){return T(t,r)||wt(t,r)})},Ct=function(e){e===void 0&&(e=document);var r=ne(e);return r?k(e.querySelectorAll("[".concat(Xr,"]"))).some(function(t){return T(t,r)}):!1},Ft=function(e,r){return r.filter(ar).filter(function(t){return t.name===e.name}).filter(function(t){return t.checked})[0]||e},Pe=function(e,r){return ar(e)&&e.name?Ft(e,r):e},_t=function(e){var r=new Set;return e.forEach(function(t){return r.add(Pe(t,e))}),e.filter(function(t){return r.has(t)})},We=function(e){return e[0]&&e.length>1?Pe(e[0],e):e[0]},Ue=function(e,r){return e.indexOf(Pe(r,e))},xe="NEW_FOCUS",Ot=function(e,r,t,n,o){var a=e.length,u=e[0],c=e[a-1],l=Ee(n);if(!(n&&e.indexOf(n)>=0)){var s=n!==void 0?t.indexOf(n):-1,f=o?t.indexOf(o):s,i=o?e.indexOf(o):-1;if(s===-1)return i!==-1?i:xe;if(i===-1)return xe;var d=s-f,p=t.indexOf(u),v=t.indexOf(c),b=_t(t),x=n!==void 0?b.indexOf(n):-1,h=x-(o?b.indexOf(o):s);if(!d&&i>=0||r.length===0)return i;var w=Ue(e,r[0]),C=Ue(e,r[r.length-1]);if(s<=p&&l&&Math.abs(d)>1)return C;if(s>=v&&l&&Math.abs(d)>1)return w;if(d&&Math.abs(h)>1)return i;if(s<=p)return C;if(s>v)return w;if(d)return Math.abs(d)>1?i:(a+i+d)%a}},Et=function(e){return function(r){var t,n=(t=nr(r))===null||t===void 0?void 0:t.autofocus;return r.autofocus||n!==void 0&&n!=="false"||e.indexOf(r)>=0}},Re=function(e,r,t){var n=e.map(function(a){var u=a.node;return u}),o=Le(n.filter(Et(t)));return o&&o.length?We(o):We(Le(r))},we=function(e,r){return r===void 0&&(r=[]),r.push(e),e.parentNode&&we(e.parentNode.host||e.parentNode,r),r},me=function(e,r){for(var t=we(e),n=we(r),o=0;o<t.length;o+=1){var a=t[o];if(n.indexOf(a)>=0)return a}return!1},cr=function(e,r,t){var n=B(e),o=B(r),a=n[0],u=!1;return o.filter(Boolean).forEach(function(c){u=me(u||c,c)||u,t.filter(Boolean).forEach(function(l){var s=me(a,l);s&&(!u||T(s,u)?u=s:u=me(s,u))})}),u},He=function(e,r){return e.reduce(function(t,n){return t.concat(ht(n,r))},[])},kt=function(e,r){var t=new Map;return r.forEach(function(n){return t.set(n.node,n)}),e.map(function(n){return t.get(n)}).filter(lt)},It=function(e,r){var t=ne(B(e).length>0?document:Qe(e).ownerDocument),n=De(e).filter(ye),o=cr(t||e,e,n),a=new Map,u=ie(n,a),c=u.filter(function(v){var b=v.node;return ye(b)});if(c[0]){var l=ie([o],a).map(function(v){var b=v.node;return b}),s=kt(l,c),f=s.map(function(v){var b=v.node;return b}),i=s.filter(function(v){var b=v.tabIndex;return b>=0}).map(function(v){var b=v.node;return b}),d=Ot(f,i,l,t,r);if(d===xe){var p=Re(u,i,He(n,a))||Re(u,f,He(n,a));if(p)return{node:p};console.warn("focus-lock: cannot find any node to move focus into");return}return d===void 0?d:s[d]}},Mt=function(e){var r=De(e).filter(ye),t=cr(e,e,r),n=ke(X([t],!0),!0,!0),o=X(r,!1);return n.map(function(a){var u=a.node,c=a.index;return{node:u,index:c,lockItem:o.indexOf(u)>=0,guard:Ee(u)}})},Ae=function(e,r){e&&("focus"in e&&e.focus(r),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},pe=0,be=!1,lr=function(e,r,t){t===void 0&&(t={});var n=It(e,r);if(!be&&n){if(pe>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),be=!0,setTimeout(function(){be=!1},1);return}pe++,Ae(n.node,t.focusOptions),pe--}};function te(e){if(!e)return null;if(typeof WeakRef>"u")return function(){return e||null};var r=e?new WeakRef(e):null;return function(){return(r==null?void 0:r.deref())||null}}var St=function(e){if(!e)return null;for(var r=[],t=e;t&&t!==document.body;)r.push({current:te(t),parent:te(t.parentElement),left:te(t.previousElementSibling),right:te(t.nextElementSibling)}),t=t.parentElement;return{element:te(e),stack:r,ownerDocument:e.ownerDocument}},Dt=function(e){var r,t,n,o,a;if(e)for(var u=e.stack,c=e.ownerDocument,l=new Map,s=0,f=u;s<f.length;s++){var i=f[s],d=(r=i.parent)===null||r===void 0?void 0:r.call(i);if(d&&c.contains(d)){for(var p=(t=i.left)===null||t===void 0?void 0:t.call(i),v=i.current(),b=d.contains(v)?v:void 0,x=(n=i.right)===null||n===void 0?void 0:n.call(i),h=Se([d],l),w=(a=(o=b??(p==null?void 0:p.nextElementSibling))!==null&&o!==void 0?o:x)!==null&&a!==void 0?a:p;w;){for(var C=0,S=h;C<S.length;C++){var O=S[C];if(w!=null&&w.contains(O.node))return O.node}w=w.nextElementSibling}if(h.length)return h[0].node}}},Pt=function(e){var r=St(e);return function(){return Dt(r)}},At=function(e,r,t){if(!e||!r)return console.error("no element or scope given"),{};var n=B(r);if(n.every(function(u){return!T(u,e)}))return console.error("Active element is not contained in the scope"),{};var o=t?Se(n,new Map):ie(n,new Map),a=o.findIndex(function(u){var c=u.node;return c===e});if(a!==-1)return{prev:o[a-1],next:o[a+1],first:o[0],last:o[o.length-1]}},Nt=function(e,r){var t=r?Se(B(e),new Map):ie(B(e),new Map);return{first:t[0],last:t[t.length-1]}},Tt=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},fr=function(e,r,t){r===void 0&&(r={});var n=Tt(r),o=At(e,n.scope,n.onlyTabbable);if(o){var a=t(o,n.cycle);a&&Ae(a.node,n.focusOptions)}},Bt=function(e,r){r===void 0&&(r={}),fr(e,r,function(t,n){var o=t.next,a=t.first;return o||n&&a})},jt=function(e,r){r===void 0&&(r={}),fr(e,r,function(t,n){var o=t.prev,a=t.last;return o||n&&a})},dr=function(e,r,t){var n,o=Nt(e,(n=r.onlyTabbable)!==null&&n!==void 0?n:!0),a=o[t];a&&Ae(a.node,r.focusOptions)},Lt=function(e,r){r===void 0&&(r={}),dr(e,r,"first")},Wt=function(e,r){r===void 0&&(r={}),dr(e,r,"last")};function Ne(e){setTimeout(e,1)}var Ut=function(r){return r&&"current"in r?r.current:r},Rt=function(){return document&&document.activeElement===document.body},Ht=function(){return Rt()||Ct()},Y=null,V=null,K=null,oe=!1,Gt=function(){return!0},$t=function(r){return(Y.whiteList||Gt)(r)},qt=function(r,t){K={observerNode:r,portaledElement:t}},Vt=function(r){return K&&K.portaledElement===r};function Ge(e,r,t,n){var o=null,a=e;do{var u=n[a];if(u.guard)u.node.dataset.focusAutoGuard&&(o=u);else if(u.lockItem){if(a!==e)return;o=null}else break}while((a+=t)!==r);o&&(o.node.tabIndex=0)}var Yt=function(r){return r?!!oe:oe==="meanwhile"},Kt=function e(r,t,n){return t&&(t.host===r&&(!t.activeElement||n.contains(t.activeElement))||t.parentNode&&e(r,t.parentNode,n))},Xt=function(r,t){return t.some(function(n){return Kt(r,n,n)})},ce=function(){var r=!1;if(Y){var t=Y,n=t.observed,o=t.persistentFocus,a=t.autoFocus,u=t.shards,c=t.crossFrame,l=t.focusOptions,s=n||K&&K.portaledElement,f=document&&document.activeElement;if(s){var i=[s].concat(u.map(Ut).filter(Boolean));if((!f||$t(f))&&(o||Yt(c)||!Ht()||!V&&a)&&(s&&!(ir(i)||f&&Xt(f,i)||Vt(f))&&(document&&!V&&f&&!a?(f.blur&&f.blur(),document.body.focus()):(r=lr(i,V,{focusOptions:l}),K={})),oe=!1,V=document&&document.activeElement),document&&f!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var d=document&&document.activeElement,p=Mt(i),v=p.map(function(b){var x=b.node;return x}).indexOf(d);v>-1&&(p.filter(function(b){var x=b.guard,h=b.node;return x&&h.dataset.focusAutoGuard}).forEach(function(b){var x=b.node;return x.removeAttribute("tabIndex")}),Ge(v,p.length,1,p),Ge(v,-1,-1,p))}}}return r},vr=function(r){ce()&&r&&(r.stopPropagation(),r.preventDefault())},Te=function(){return Ne(ce)},Zt=function(r){var t=r.target,n=r.currentTarget;n.contains(t)||qt(n,t)},Jt=function(){return null},mr=function(){oe="just",Ne(function(){oe="meanwhile"})},Qt=function(){document.addEventListener("focusin",vr),document.addEventListener("focusout",Te),window.addEventListener("blur",mr)},zt=function(){document.removeEventListener("focusin",vr),document.removeEventListener("focusout",Te),window.removeEventListener("blur",mr)};function en(e){return e.filter(function(r){var t=r.disabled;return!t})}var pr={moveFocusInside:lr,focusInside:ir,focusNextElement:Bt,focusPrevElement:jt,focusFirstElement:Lt,focusLastElement:Wt,captureFocusRestore:Pt};function rn(e){var r=e.slice(-1)[0];r&&!Y&&Qt();var t=Y,n=t&&r&&r.id===t.id;Y=r,t&&!n&&(t.onDeactivation(),e.filter(function(o){var a=o.id;return a===t.id}).length||t.returnFocus(!r)),r?(V=null,(!n||t.observed!==r.observed)&&r.onActivation(pr),ce(),Ne(ce)):(zt(),V=null)}Ze.assignSyncMedium(Zt);Je.assignMedium(Te);Qr.assignMedium(function(e){return e(pr)});const tn=tt(en,rn)(Jt);var br=m.forwardRef(function(r,t){return m.createElement(Oe,he({sideCar:tn,ref:t},r))}),hr=Oe.propTypes||{};hr.sideCar;qr(hr,["sideCar"]);br.propTypes={};const nn=jr(br),on=({initialFocusRef:e,finalFocusRef:r,contentRef:t,restoreFocus:n,children:o,isDisabled:a,autoFocus:u,persistentFocus:c,lockFocusAcrossFrames:l})=>{const s=m.useCallback(()=>{e!=null&&e.current?e.current.focus():t!=null&&t.current&&Lr(t.current).length===0&&requestAnimationFrame(()=>{var p;(p=t.current)==null||p.focus()})},[e,t]),f=m.useCallback(()=>{var d;(d=r==null?void 0:r.current)==null||d.focus()},[r]),i=n&&!r;return y.jsx(nn,{crossFrame:l,persistentFocus:c,autoFocus:u,disabled:a,onActivation:s,onDeactivation:f,returnFocus:i,children:o})},[an,L]=Fe({name:"ModalContext",errorMessage:`useModal returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `}),[Dn,gr]=Fe({name:"DialogContext",errorMessage:`useDialog returned is 'undefined'. Seems you forgot to wrap the components in "<Dialog />" `}),[Pn,de]=Fe({name:"DrawerContext",errorMessage:`useDrawer returned is 'undefined'. Seems you forgot to wrap the components in "<Drawer />" `}),le=Z(({className:e,__css:r,onClick:t,...n},o)=>{const{styles:a,closeOnOverlay:u,onOverlayClick:c,onClose:l,animation:s,duration:f}=L(),i={position:"fixed",top:0,left:0,w:"100vw",h:"100vh",...r||a.overlay},d=s!=="none"?Tr:{};return y.jsx(Ye.div,{ref:o,className:F("ui-modal__overlay",e),custom:{duration:f},__css:i,onClick:Ke(t,c,p=>{p.stopPropagation(),u&&(l==null||l())}),...d,...n})}),un=Z(({className:e,...r},t)=>{const o={...gr().overlay};return y.jsx(le,{ref:t,className:F("ui-dialog__overlay",e),__css:o,...r})}),fe=j(({onClick:e,__css:r,...t},n)=>{const{styles:o,onClose:a}=L(),u={position:"absolute",...r||o.closeButton};return y.jsx(Ur,{ref:n,className:F("ui-modal__close-button"),__css:u,onClick:Ke(e,c=>{c.stopPropagation(),a==null||a()}),...t})}),$e=j(({className:e,...r},t)=>{const o={...de().closeButton};return y.jsx(fe,{ref:t,className:F("ui-drawer__close-button",e),__css:o,...r})}),qe=j(({className:e,__css:r,...t},n)=>{const a={...de().dragBar};return y.jsx(J.div,{ref:n,className:F("ui-drawer__drag-bar",e),__css:a,...t})}),sn=Z(({className:e,children:r,placement:t,withCloseButton:n,withDragBar:o,closeOnDrag:a,dragConstraints:u,dragElastic:c,dragOffset:l,dragVelocity:s,blankForDragProps:f,...i},d)=>{const{isOpen:p,onClose:v,duration:b}=L(),x=de(),h=Ve(t),w=_e(r),[C,...S]=se(w,$e),O=m.useMemo(()=>{var U,D,A,R;const g=i.backgroundColor??i.bgColor??i.background??i.bg,_=((U=x.container)==null?void 0:U.backgroundColor)??((D=x.container)==null?void 0:D.bgColor)??((A=x.container)==null?void 0:A.background)??((R=x.container)==null?void 0:R.bg),E=g??_;return Wr(E)?E:[E]},[i,x]),W=m.useMemo(()=>{let g={};switch(h){case"top":g={top:"calc(-100dvh + 1px)",left:0,right:0};break;case"bottom":g={bottom:"calc(-100dvh + 1px)",left:0,right:0};break;case"left":g={left:"calc(-100% + 1px)",top:0,bottom:0};break;case"right":g={right:"calc(-100% + 1px)",top:0,bottom:0};break}const[_,E]=O;return{_after:{content:'""',display:"block",w:"100%",h:"100dvh",bg:_,position:"absolute",...g,...f},_dark:{_after:{bg:E}}}},[h,O,f]),Q=m.useMemo(()=>({display:"flex",flexDirection:h==="top"||h==="bottom"?"column":"row",outline:0,...a?W:{},...x.container}),[W,a,h,x]),P=m.useCallback(g=>{switch(h){case"top":return{bottom:g};case"bottom":return{top:g};case"left":return{right:g};case"right":return{left:g}}},[h]),z=m.useCallback(()=>{switch(h){case"top":case"bottom":return"y";case"left":case"right":return"x"}},[h]),ee=m.useCallback(g=>{switch(h){case"top":return g.velocity.y<=s*-1||g.offset.y<=l*-1;case"bottom":return g.velocity.y>=s||g.offset.y>=l;case"left":return g.velocity.x<=s*-1||g.offset.x<=l*-1;case"right":return g.velocity.x>=s||g.offset.x>=l}},[h,s,l]);return y.jsxs(Rr,{ref:d,className:F("ui-drawer",e),isOpen:p,placement:h,duration:b,drag:a?z():!1,dragConstraints:P(u),dragElastic:P(c),dragSnapToOrigin:!0,dragMomentum:!1,onDragEnd:(g,_)=>{ee(_)&&(v==null||v())},tabIndex:-1,__css:Q,...i,children:[C??(n&&v?y.jsx($e,{}):null),o&&a&&(h==="bottom"||h==="right")?y.jsx(qe,{}):null,y.jsx(J.div,{className:"ui-drawer__inner",__css:{display:"flex",flexDirection:"column",...x.inner},children:S}),o&&a&&(h==="top"||h==="left")?y.jsx(qe,{}):null]})}),cn=Z(({className:e,...r},t)=>{const o={...de().overlay};return y.jsx(le,{ref:t,className:F("ui-drawer__overlay",e),__css:o,...r})}),ln=j(({className:e,...r},t)=>{const o={...gr().closeButton};return y.jsx(fe,{ref:t,className:F("ui-dialog__close-button",e),__css:o,...r})}),fn=(e="scale",r)=>{switch(e){case"scale":return{...Hr,custom:{scale:.95,reverse:!0,duration:r}};case"top":return{...ue,custom:{offsetY:-16,reverse:!0,duration:r}};case"right":return{...ue,custom:{offsetX:16,reverse:!0,duration:r}};case"left":return{...ue,custom:{offsetX:-16,reverse:!0,duration:r}};case"bottom":return{...ue,custom:{offsetY:16,reverse:!0,duration:r}}}},dn=Z(({className:e,children:r,__css:t,...n},o)=>{const{styles:a,scrollBehavior:u,withCloseButton:c,onClose:l,animation:s,duration:f}=L(),i=_e(r),[d,...p]=se(i,fe,ln),v=s!=="none"?fn(s,f):{},b={position:"relative",maxH:"100%",display:"flex",flexDirection:"column",overflow:u==="inside"?"hidden":"auto",outline:0,...t||a.container};return y.jsxs(Ye.section,{role:"dialog","aria-modal":"true",ref:o,className:F("ui-modal",e),tabIndex:-1,__css:b,...v,...n,children:[d??(c&&l?y.jsx(fe,{}):null),p]})}),An=Z(({size:e,...r},t)=>{const[n,o]=Yr("Modal",{size:e,...r}),{className:a,children:u,isOpen:c,onClose:l,onOverlayClick:s,onEsc:f,onCloseComplete:i,placement:d="center",outside:p="fallback(4, 1rem)",withCloseButton:v=!0,withOverlay:b=!0,allowPinchZoom:x=!1,scrollBehavior:h="inside",autoFocus:w,restoreFocus:C,initialFocusRef:S,finalFocusRef:O,blockScrollOnMount:W=!0,closeOnOverlay:Q=!0,closeOnEsc:P=!0,lockFocusAcrossFrames:z=!0,animation:ee="scale",duration:g,portalProps:_,containerProps:E,...U}=Kr(o),D=m.useCallback(G=>{G.key==="Escape"&&(G.stopPropagation(),P&&(l==null||l()),f==null||f())},[P,l,f]),A=_e(u),[R,...ae]=se(A,le,un,cn);let[I]=se(A,sn);I&&(I=m.cloneElement(I,{onKeyDown:D}));const H=Ve(d),re={position:"fixed",top:0,left:0,zIndex:"fallback(jeice, 110)",w:"100vw",h:"100dvh",p:e!=="full"?p:void 0,display:"flex",justifyContent:H.includes("left")?"flex-start":H.includes("right")?"flex-end":"center",alignItems:H.includes("top")?"flex-start":H.includes("bottom")?"flex-end":"center"};return y.jsx(an,{value:{isOpen:c,onClose:l,onOverlayClick:s,withCloseButton:v,scrollBehavior:h,closeOnOverlay:Q,animation:ee,duration:g,styles:n},children:y.jsx(Br,{onExitComplete:i,children:c?y.jsx(Gr,{..._,children:y.jsx(on,{autoFocus:w,initialFocusRef:S,finalFocusRef:O,restoreFocus:C,lockFocusAcrossFrames:z,children:y.jsx(Nr,{allowPinchZoom:x,enabled:W,forwardProps:!0,children:y.jsxs(J.div,{__css:re,...E,children:[R??(b&&e!=="full"?y.jsx(le,{}):null),I??y.jsx(dn,{ref:t,className:a,onKeyDown:D,...U,children:ae})]})})})}):null})})}),Nn=j(({className:e,__css:r,...t},n)=>{const{styles:o}=L(),a={display:"flex",alignItems:"center",justifyContent:"flex-start",...r||o.header};return y.jsx(J.header,{ref:n,className:F("ui-modal__header",e),__css:a,...t})}),Tn=j(({className:e,__css:r,...t},n)=>{const{styles:o,scrollBehavior:a}=L(),u={display:"flex",flexDirection:"column",alignItems:"flex-start",overflow:a==="inside"?"auto":void 0,...r||o.body};return y.jsx(J.div,{ref:n,className:F("ui-modal__body",e),__css:u,...t})}),Bn=j(({className:e,__css:r,...t},n)=>{const{styles:o}=L(),a={display:"flex",alignItems:"center",justifyContent:"flex-end",...r||o.footer};return y.jsx(J.footer,{ref:n,className:F("ui-modal__footer",e),__css:a,...t})});export{ln as D,An as M,un as a,Nn as b,Tn as c,Bn as d,fe as e,le as f,Dn as g,Pn as h,cn as i,sn as j,de as k,$e as l,gr as u};

function o(e){const t=parseFloat(e);return typeof t!="number"||Number.isNaN(t)?0:t}function a(e,t){e=o(e);const r=10**(t??10);return e=Math.round(e*r)/r,t?e.toFixed(t):e.toString()}function c(e){if(!Number.isFinite(e))return 0;let t=1,r=0;for(;Math.round(e*t)/t!==e;)t*=10,r+=1;return r}function i(e,t,r){const n=Math.round((e-t)/r)*r+t,u=c(r);return a(n,u)}function s(e,t,r){return(e-t)*100/(r-t)}function l(e,t,r){return(r-t)*e+t}function f(e,t,r){return Math.min(Math.max(e,t),r)}export{c as a,f as c,l as p,i as r,a as t,s as v};

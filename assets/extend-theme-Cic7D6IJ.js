import{d as o}from"./index-DQZm7vWy.js";import{m as t,p as r,B as a,Y as g,T as h,Z as i,_ as l}from"./factory-CPqzzHTm.js";function _(e=o){return function(...n){return function({merge:s=!0,pick:f=[],omit:m=[]}={}){let c=[...n],u=n[n.length-1];return m.length&&(e=g(e,m)),f.length&&(e=h(e,f)),!i(u)&&c.length>1?(c=c.slice(0,c.length-1),s&&(u=t(e,u))):u=s?e:{},c.reduce((p,d)=>t(p,a(d,p)),u)}}}const C=_(o);function S(e,n){return t(r(o,e,{}),n??{})}function $(e,n){const s={theme:{themeScheme:"base",changeThemeScheme:l,__config:{},__cssMap:{},__cssVars:{},__breakpoints:void 0}};return t(a(r(o,`styles.${e}`,{}),s),a(n,s)??{})}function j(e,n){return t(r(o,`components.${e}`,{}),n??{})}function z(e,n){return t(r(o,`components.${e}.sizes`,{}),n??{})}function O(e,n){return t(r(o,`components.${e}.variants`,{}),n??{})}function k(e,n){return t(r(o,`components.${e}.defaultProps`,{}),n??{})}export{S as a,$ as b,j as c,O as d,C as e,z as f,k as g};

import{s as q,a as B,o as U,t as j,b as L}from"../chunks/scheduler.7c4769d9.js";import{S as W,i as z,s as F,e as d,c as G,a as b,t as h,b as R,d as p,f as w,g as H,h as J,j as K,k as D,l as m,m as M,n as Q,o as X,p as P,q as k,r as E,u as O,v as y,w as I}from"../chunks/index.40695441.js";const Y="modulepreload",Z=function(o){return"/"+o},T={},g=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Z(f),f in T)return;T[f]=!0;const t=f.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!s)for(let a=i.length-1;a>=0;a--){const u=i[a];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${r}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":Y,t||(c.as="script",c.crossOrigin=""),c.href=f,document.head.appendChild(c),t)return new Promise((a,u)=>{c.addEventListener("load",a),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e()).catch(f=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=f,window.dispatchEvent(t),!t.defaultPrevented)throw f})},re={};function $(o){let e,n,s;var i=o[1][0];function f(t,r){return{props:{data:t[3],form:t[2]}}}return i&&(e=k(i,f(o)),o[12](e)),{c(){e&&E(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,r){e&&y(e,t,r),b(t,n,r),s=!0},p(t,r){if(r&2&&i!==(i=t[1][0])){if(e){P();const l=e;h(l.$$.fragment,1,0,()=>{I(l,1)}),R()}i?(e=k(i,f(t)),t[12](e),E(e.$$.fragment),p(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(i){const l={};r&8&&(l.data=t[3]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){s||(e&&p(e.$$.fragment,t),s=!0)},o(t){e&&h(e.$$.fragment,t),s=!1},d(t){t&&w(n),o[12](null),e&&I(e,t)}}}function x(o){let e,n,s;var i=o[1][0];function f(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return i&&(e=k(i,f(o)),o[11](e)),{c(){e&&E(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,r){e&&y(e,t,r),b(t,n,r),s=!0},p(t,r){if(r&2&&i!==(i=t[1][0])){if(e){P();const l=e;h(l.$$.fragment,1,0,()=>{I(l,1)}),R()}i?(e=k(i,f(t)),t[11](e),E(e.$$.fragment),p(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(i){const l={};r&8&&(l.data=t[3]),r&8215&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)}},i(t){s||(e&&p(e.$$.fragment,t),s=!0)},o(t){e&&h(e.$$.fragment,t),s=!1},d(t){t&&w(n),o[11](null),e&&I(e,t)}}}function ee(o){let e,n,s;var i=o[1][1];function f(t,r){return{props:{data:t[4],form:t[2]}}}return i&&(e=k(i,f(o)),o[10](e)),{c(){e&&E(e.$$.fragment),n=d()},l(t){e&&O(e.$$.fragment,t),n=d()},m(t,r){e&&y(e,t,r),b(t,n,r),s=!0},p(t,r){if(r&2&&i!==(i=t[1][1])){if(e){P();const l=e;h(l.$$.fragment,1,0,()=>{I(l,1)}),R()}i?(e=k(i,f(t)),t[10](e),E(e.$$.fragment),p(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(i){const l={};r&16&&(l.data=t[4]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){s||(e&&p(e.$$.fragment,t),s=!0)},o(t){e&&h(e.$$.fragment,t),s=!1},d(t){t&&w(n),o[10](null),e&&I(e,t)}}}function V(o){let e,n=o[6]&&A(o);return{c(){e=H("div"),n&&n.c(),this.h()},l(s){e=J(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=K(e);n&&n.l(i),i.forEach(w),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),m(e,"position","absolute"),m(e,"left","0"),m(e,"top","0"),m(e,"clip","rect(0 0 0 0)"),m(e,"clip-path","inset(50%)"),m(e,"overflow","hidden"),m(e,"white-space","nowrap"),m(e,"width","1px"),m(e,"height","1px")},m(s,i){b(s,e,i),n&&n.m(e,null)},p(s,i){s[6]?n?n.p(s,i):(n=A(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&w(e),n&&n.d()}}}function A(o){let e;return{c(){e=M(o[7])},l(n){e=Q(n,o[7])},m(n,s){b(n,e,s)},p(n,s){s&128&&X(e,n[7])},d(n){n&&w(e)}}}function te(o){let e,n,s,i,f;const t=[x,$],r=[];function l(a,u){return a[1][1]?0:1}e=l(o),n=r[e]=t[e](o);let c=o[5]&&V(o);return{c(){n.c(),s=F(),c&&c.c(),i=d()},l(a){n.l(a),s=G(a),c&&c.l(a),i=d()},m(a,u){r[e].m(a,u),b(a,s,u),c&&c.m(a,u),b(a,i,u),f=!0},p(a,[u]){let v=e;e=l(a),e===v?r[e].p(a,u):(P(),h(r[v],1,1,()=>{r[v]=null}),R(),n=r[e],n?n.p(a,u):(n=r[e]=t[e](a),n.c()),p(n,1),n.m(s.parentNode,s)),a[5]?c?c.p(a,u):(c=V(a),c.c(),c.m(i.parentNode,i)):c&&(c.d(1),c=null)},i(a){f||(p(n),f=!0)},o(a){h(n),f=!1},d(a){a&&(w(s),w(i)),r[e].d(a),c&&c.d(a)}}}function ne(o,e,n){let{stores:s}=e,{page:i}=e,{constructors:f}=e,{components:t=[]}=e,{form:r}=e,{data_0:l=null}=e,{data_1:c=null}=e;B(s.page.notify);let a=!1,u=!1,v=null;U(()=>{const _=s.page.subscribe(()=>{a&&(n(6,u=!0),j().then(()=>{n(7,v=document.title||"untitled page")}))});return n(5,a=!0),_});function N(_){L[_?"unshift":"push"](()=>{t[1]=_,n(0,t)})}function S(_){L[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}function C(_){L[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}return o.$$set=_=>{"stores"in _&&n(8,s=_.stores),"page"in _&&n(9,i=_.page),"constructors"in _&&n(1,f=_.constructors),"components"in _&&n(0,t=_.components),"form"in _&&n(2,r=_.form),"data_0"in _&&n(3,l=_.data_0),"data_1"in _&&n(4,c=_.data_1)},o.$$.update=()=>{o.$$.dirty&768&&s.page.set(i)},[t,f,r,l,c,a,u,v,s,i,N,S,C]}class oe extends W{constructor(e){super(),z(this,e,ne,te,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>g(()=>import("../nodes/0.746a6583.js"),["_app/immutable/nodes/0.746a6583.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.40695441.js","_app/immutable/assets/0.e3f78a6d.css"]),()=>g(()=>import("../nodes/1.3a91ce1a.js"),["_app/immutable/nodes/1.3a91ce1a.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.40695441.js","_app/immutable/chunks/singletons.eb9d64f9.js"]),()=>g(()=>import("../nodes/2.52eafe3d.js"),["_app/immutable/nodes/2.52eafe3d.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.40695441.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/lg-zoom.es5.d5e898e1.js","_app/immutable/assets/2.19aaae42.css"]),()=>g(()=>import("../nodes/3.2401ee8c.js"),["_app/immutable/nodes/3.2401ee8c.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.40695441.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/assets/3.ed99ed90.css"]),()=>g(()=>import("../nodes/4.f6225dcb.js"),["_app/immutable/nodes/4.f6225dcb.js","_app/immutable/chunks/index.93323930.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.40695441.js","_app/immutable/assets/4.36825d80.css"]),()=>g(()=>import("../nodes/5.e533546b.js"),["_app/immutable/nodes/5.e533546b.js","_app/immutable/chunks/index.93323930.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.40695441.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/lg-zoom.es5.d5e898e1.js","_app/immutable/assets/5.e0232ee8.css"]),()=>g(()=>import("../nodes/6.9b2a4521.js"),["_app/immutable/nodes/6.9b2a4521.js","_app/immutable/chunks/index.93323930.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.40695441.js","_app/immutable/assets/6.bc64bcb8.css"])],le=[],fe={"/":[2],"/live-now":[3],"/live-now/[playlistId]":[4],"/playlists/[playlistId]":[5],"/playlists/[playlistId]/[videoId]":[6]},ce={handleError:({error:o})=>{console.error(o)}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};

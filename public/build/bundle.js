var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function s(e){e.forEach(t)}function r(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function i(e){e.parentNode.removeChild(e)}function c(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function f(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function h(){return u(" ")}function d(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}let p;function g(e){p=e}function $(){if(!p)throw new Error("Function called outside component initialization");return p}function v(e){$().$$.on_destroy.push(e)}function y(e,t){$().$$.context.set(e,t)}function b(e){return $().$$.context.get(e)}const w=[],_=[],x=[],j=[],k=Promise.resolve();let z=!1;function E(e){x.push(e)}let S=!1;const q=new Set;function A(){if(!S){S=!0;do{for(let e=0;e<w.length;e+=1){const t=w[e];g(t),F(t.$$)}for(w.length=0;_.length;)_.pop()();for(let e=0;e<x.length;e+=1){const t=x[e];q.has(t)||(q.add(t),t())}x.length=0}while(w.length);for(;j.length;)j.pop()();z=!1,S=!1,q.clear()}}function F(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}const L=new Set;let M;function O(e,t){e&&e.i&&(L.delete(e),e.i(t))}function C(e,t,n,s){if(e&&e.o){if(L.has(e))return;L.add(e),M.c.push(()=>{L.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}function H(e){e&&e.c()}function N(e,n,a){const{fragment:o,on_mount:l,on_destroy:i,after_update:c}=e.$$;o&&o.m(n,a),E(()=>{const n=l.map(t).filter(r);i?i.push(...n):s(n),e.$$.on_mount=[]}),c.forEach(E)}function I(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function P(e,t){-1===e.$$.dirty[0]&&(w.push(e),z||(z=!0,k.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function T(t,r,a,o,l,c,f=[-1]){const u=p;g(t);const h=r.props||{},d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:f};let m=!1;if(d.ctx=a?a(t,h,(e,n,...s)=>{const r=s.length?s[0]:n;return d.ctx&&l(d.ctx[e],d.ctx[e]=r)&&(d.bound[e]&&d.bound[e](r),m&&P(t,e)),n}):[],d.update(),m=!0,s(d.before_update),d.fragment=!!o&&o(d.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);d.fragment&&d.fragment.l(e),e.forEach(i)}else d.fragment&&d.fragment.c();r.intro&&O(t.$$.fragment),N(t,r.target,r.anchor),A()}g(u)}class B{$destroy(){I(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function D(t){let n,s,r,a,l,c;return{c(){n=f("meta"),s=f("link"),r=f("meta"),a=f("link"),l=f("link"),c=f("link"),document.title="Daria Stepanova",m(n,"name","description"),m(n,"content","Daria Stepanova retouch projects"),m(s,"itemprop","sameAs"),m(s,"href","https://www.instagram.com/stepanovadary_cam"),m(r,"itemprop","gender"),m(r,"content","female"),m(a,"itemprop","url"),m(a,"href","https://daria-retouch.art/"),m(l,"rel","stylesheet"),m(l,"href","https://use.fontawesome.com/releases/v5.8.1/css/all.css"),m(l,"integrity","sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"),m(l,"crossorigin","anonymous"),m(c,"rel","stylesheet"),m(c,"href","https://fonts.googleapis.com/css?family=Economica:400,400i,700,700i")},m(e,t){o(document.head,n),o(document.head,s),o(document.head,r),o(document.head,a),o(document.head,l),o(document.head,c)},p:e,i:e,o:e,d(e){i(n),i(s),i(r),i(a),i(l),i(c)}}}class U extends B{constructor(e){super(),T(this,e,null,D,a,{})}}function W(t){let n;return{c(){n=f("header"),n.innerHTML='<div class="wrap d-flex svelte-cayz6w"><a href="/#/" class="logo svelte-cayz6w"><span itemprop="givenName" class="svelte-cayz6w">Daria</span> \n            <span itemprop="familyName" class="svelte-cayz6w">Stepanova</span></a> \n        <p class="soc svelte-cayz6w"><a href="https://www.instagram.com/stepanovadary_cam/" target="_blank" class="svelte-cayz6w"><i class="fab fa-instagram"></i></a> \n                \n            <a href="https://www.facebook.com/dasha.stepanova.58726" target="_blank" class="svelte-cayz6w"><i class="fab fa-facebook-f"></i></a> \n            <a href="https://www.behance.net/stepanovadary" target="_blank" class="svelte-cayz6w"><i class="fab fa-behance"></i></a></p></div>',m(n,"class","header svelte-cayz6w")},m(e,t){l(e,n,t)},p:e,i:e,o:e,d(e){e&&i(n)}}}class J extends B{constructor(e){super(),T(this,e,null,W,a,{})}}const K=[];function Q(t,n=e){let s;const r=[];function o(e){if(a(t,e)&&(t=e,s)){const e=!K.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),K.push(n,t)}if(e){for(let e=0;e<K.length;e+=2)K[e][0](K[e+1]);K.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,l=e){const i=[a,l];return r.push(i),1===r.length&&(s=n(o)||e),a(t),()=>{const e=r.indexOf(i);-1!==e&&r.splice(e,1),0===r.length&&(s(),s=null)}}}}const R=[{name:"light",colors:{hoverColor:"#28B391",mainFontColor:"#000",mainFF:"Helvetica, Arial, sans-serif",lWidth:"1106px"}},{name:"dark",colors:{}}],X=Q(-1);function Y(e,t,n){const s=e.slice();return s[6]=t[n],s[8]=n,s}function G(e){let t,n,r,a,c,p,g,$,v,y=e[6].id+"";function b(...t){return e[3](e[8],...t)}return{c(){t=f("li"),n=f("a"),r=f("span"),a=u(y),g=h(),m(r,"class","svelte-1iwa3iq"),m(n,"href",c="/#/gallery/"+e[6].id),m(n,"class",p="gallery-nav__item "+(e[0]===e[8]?"hovered":"")+" svelte-1iwa3iq"),m(t,"class","svelte-1iwa3iq")},m(s,i){l(s,t,i),o(t,n),o(n,r),o(r,a),o(t,g),$||(v=[d(n,"mouseover",b),d(n,"mouseleave",e[4])],$=!0)},p(t,s){e=t,1&s&&p!==(p="gallery-nav__item "+(e[0]===e[8]?"hovered":"")+" svelte-1iwa3iq")&&m(n,"class",p)},d(e){e&&i(t),$=!1,s(v)}}}function V(t){let n,s,r=t[1],a=[];for(let e=0;e<r.length;e+=1)a[e]=G(Y(t,r,e));return{c(){n=f("div"),s=f("ul");for(let e=0;e<a.length;e+=1)a[e].c();m(s,"class","svelte-1iwa3iq"),m(n,"class","side-nav svelte-1iwa3iq")},m(e,t){l(e,n,t),o(n,s);for(let e=0;e<a.length;e+=1)a[e].m(s,null)},p(e,[t]){if(7&t){let n;for(r=e[1],n=0;n<r.length;n+=1){const o=Y(e,r,n);a[n]?a[n].p(o,t):(a[n]=G(o),a[n].c(),a[n].m(s,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=r.length}},i:e,o:e,d(e){e&&i(n),c(a,e)}}}function Z(e,t,n){const s=b("gallery");function r(e){X.set(e)}let a=-1;v(X.subscribe(e=>{n(0,a=e)}));return[a,s,r,e=>r(e),()=>r(-1)]}class ee extends B{constructor(e){super(),T(this,e,Z,V,a,{})}}function te(e,t,n){const s=e.slice();return s[6]=t[n],s[8]=n,s}function ne(e){let t,n,r,a,c,p,g,$,v,y,b,w,_=e[6].id+"";function x(...t){return e[3](e[8],...t)}return{c(){t=f("a"),n=f("img"),c=h(),p=f("span"),g=u(_),$=h(),n.src!==(r="img/"+e[6].id+"/000.jpg")&&m(n,"src",r),m(n,"alt",a=e[6].id),m(n,"class","svelte-4g52ij"),m(p,"class","svelte-4g52ij"),m(t,"href",v="/#/gallery/"+e[6].id),m(t,"class",y="gallery__item "+(e[0]===e[8]?"hovered":"")+" svelte-4g52ij")},m(s,r){l(s,t,r),o(t,n),o(t,c),o(t,p),o(p,g),o(t,$),b||(w=[d(t,"mouseover",x),d(t,"mouseleave",e[4])],b=!0)},p(n,s){e=n,1&s&&y!==(y="gallery__item "+(e[0]===e[8]?"hovered":"")+" svelte-4g52ij")&&m(t,"class",y)},d(e){e&&i(t),b=!1,s(w)}}}function se(t){let n,s,r=t[1],a=[];for(let e=0;e<r.length;e+=1)a[e]=ne(te(t,r,e));return{c(){n=f("div"),s=f("div");for(let e=0;e<a.length;e+=1)a[e].c();m(s,"id","gallery-view"),m(s,"class","gallery d-flex svelte-4g52ij"),m(n,"class","right-col svelte-4g52ij")},m(e,t){l(e,n,t),o(n,s);for(let e=0;e<a.length;e+=1)a[e].m(s,null)},p(e,[t]){if(7&t){let n;for(r=e[1],n=0;n<r.length;n+=1){const o=te(e,r,n);a[n]?a[n].p(o,t):(a[n]=ne(o),a[n].c(),a[n].m(s,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=r.length}},i:e,o:e,d(e){e&&i(n),c(a,e)}}}function re(e,t,n){const s=b("gallery");function r(e){X.set(e)}let a=-1;X.set(a);v(X.subscribe(e=>{n(0,a=e)}));return[a,s,r,e=>r(e),()=>r(-1)]}class ae extends B{constructor(e){super(),T(this,e,re,se,a,{})}}function oe(e,t,n){const s=e.slice();return s[6]=t[n],s}function le(e){let t,n,s;return{c(){t=f("img"),t.src!==(n="img/"+e[0].id+"/"+e[6]+".jpg")&&m(t,"src",n),m(t,"alt",s=e[0].id),m(t,"class","svelte-15f9igt")},m(e,n){l(e,t,n)},p(e,r){1&r&&t.src!==(n="img/"+e[0].id+"/"+e[6]+".jpg")&&m(t,"src",n),1&r&&s!==(s=e[0].id)&&m(t,"alt",s)},d(e){e&&i(t)}}}function ie(t){let n,s,r,a,u,d,p,g,$,v,y,b,w=t[0].pics,_=[];for(let e=0;e<w.length;e+=1)_[e]=le(oe(t,w,e));return{c(){n=f("section");for(let e=0;e<_.length;e+=1)_[e].c();s=h(),r=f("span"),a=f("a"),u=f("i"),p=h(),g=f("a"),g.innerHTML='<i class="fas fa-times"></i>',$=h(),v=f("a"),y=f("i"),m(n,"class","project-view svelte-15f9igt"),m(u,"class","fas fa-chevron-up"),m(a,"class","scroll-top-btn svelte-15f9igt"),m(a,"href",d="/#/gallery/"+t[1]),m(g,"class","close-btn svelte-15f9igt"),m(g,"href","/#/gallery/"),m(y,"class","fas fa-chevron-down"),m(v,"class","scroll-top-btn svelte-15f9igt"),m(v,"href",b="/#/gallery/"+t[2]),m(r,"class","project-nav svelte-15f9igt")},m(e,t){l(e,n,t);for(let e=0;e<_.length;e+=1)_[e].m(n,null);l(e,s,t),l(e,r,t),o(r,a),o(a,u),o(r,p),o(r,g),o(r,$),o(r,v),o(v,y)},p(e,[t]){if(1&t){let s;for(w=e[0].pics,s=0;s<w.length;s+=1){const r=oe(e,w,s);_[s]?_[s].p(r,t):(_[s]=le(r),_[s].c(),_[s].m(n,null))}for(;s<_.length;s+=1)_[s].d(1);_.length=w.length}2&t&&d!==(d="/#/gallery/"+e[1])&&m(a,"href",d),4&t&&b!==(b="/#/gallery/"+e[2])&&m(v,"href",b)},i:e,o:e,d(e){e&&i(n),c(_,e),e&&i(s),e&&i(r)}}}function ce(e,t,n){const s=b("gallery");let r,a,o,l,{params:i}=t;return e.$set=e=>{"params"in e&&n(3,i=e.params)},e.$$.update=()=>{8&e.$$.dirty&&n(0,r=s?s.find(e=>e.id===i):""),1&e.$$.dirty&&n(4,a=s.indexOf(r)),16&e.$$.dirty&&(0===a?(n(1,o=""),n(2,l=s[a+1].id)):a===s.length-1?(n(1,o=s[a-1].id),n(2,l="")):(n(1,o=s[a-1].id),n(2,l=s[a+1].id))),16&e.$$.dirty&&X.set(a)},n(1,o=s[0].id),n(2,l=s[0].id),[r,o,l,i]}class fe extends B{constructor(e){super(),T(this,e,ce,ie,a,{params:3})}}class ue{routes=[];mode=null;root="/";constructor(e){this.mode=window.history.pushState?"history":"hash",e.mode&&(this.mode=e.mode),e.root&&(this.root=e.root),this.listen()}add=(e,t)=>(this.routes.push({path:e,cb:t}),this);remove=e=>{for(let t=0;t<this.routes.length;t+=1)if(this.routes[t].path===e)return this.routes.slice(t,1),this;return this};flush=()=>(this.routes=[],this);clearSlashes=e=>e.toString().replace(/\/$/,"").replace(/^\//,"");getFragment=()=>{let e="";if("history"===this.mode)e=this.clearSlashes(decodeURI(window.location.pathname+window.location.search)),e=e.replace(/\?(.*)$/,""),e="/"!==this.root?e.replace(this.root,""):e;else{const t=window.location.href.match(/#(.*)$/);e=t?t[1]:""}return this.clearSlashes(e)};navigate=(e="")=>("history"===this.mode?window.history.pushState(null,null,this.root+this.clearSlashes(e)):window.location.href=`${window.location.href.replace(/#(.*)$/,"")}#${e}`,this);listen=()=>{clearInterval(this.interval),this.interval=setInterval(this.interval,50)};interval=()=>{this.current!==this.getFragment()&&(this.current=this.getFragment(),this.routes.some(e=>{const t=this.current.match(e.path);return!!t&&(t.shift(),e.cb.apply({},t),t)}))}}function he(e){let t,n,r,a,c,u,d,p,g,$;t=new U({}),r=new J({}),d=new ee({});var v=e[0];function y(e){return{props:{params:e[1]}}}return v&&(g=new v(y(e))),{c(){H(t.$$.fragment),n=h(),H(r.$$.fragment),a=h(),c=f("section"),u=f("div"),H(d.$$.fragment),p=h(),g&&H(g.$$.fragment),m(u,"class","wrap d-flex"),m(c,"class","content")},m(e,s){N(t,e,s),l(e,n,s),N(r,e,s),l(e,a,s),l(e,c,s),o(c,u),N(d,u,null),o(u,p),g&&N(g,u,null),$=!0},p(e,[t]){const n={};if(2&t&&(n.params=e[1]),v!==(v=e[0])){if(g){M={r:0,c:[],p:M};const e=g;C(e.$$.fragment,1,0,()=>{I(e,1)}),M.r||s(M.c),M=M.p}v?(g=new v(y(e)),H(g.$$.fragment),O(g.$$.fragment,1),N(g,u,null)):g=null}else v&&g.$set(n)},i(e){$||(O(t.$$.fragment,e),O(r.$$.fragment,e),O(d.$$.fragment,e),g&&O(g.$$.fragment,e),$=!0)},o(e){C(t.$$.fragment,e),C(r.$$.fragment,e),C(d.$$.fragment,e),g&&C(g.$$.fragment,e),$=!1},d(e){I(t,e),e&&i(n),I(r,e),e&&i(a),e&&i(c),I(d),g&&I(g)}}}function de(e,t,n){let s,r,{gallery:a}=t,o=[...R];const l=e=>o.find(t=>t.name===e);var i;y("theme",{theme:Q(l("light"))}),y("gallery",a),i=()=>{c(l("light"))},$().$$.on_mount.push(i);const c=e=>{for(let[t,n]of Object.entries(e.colors)){let e="--theme-"+t;document.documentElement.style.setProperty(e,n)}document.documentElement.style.setProperty("--theme-name",e.name)};return new ue({mode:"hash",root:"/"}).add(/gallery\/(.*)/,e=>{n(1,r=e),n(0,s=fe)}).add("///",()=>{}).add("",()=>{n(0,s=ae)}),e.$set=e=>{"gallery"in e&&n(2,a=e.gallery)},[s,r,a]}return new class extends B{constructor(e){super(),T(this,e,de,he,a,{gallery:2})}}({target:document.body,props:{gallery:[{id:"Alena",pics:["21d12972446587.5be80661ee5de","94ab4872446587.5be80661eb31f","731cd172446587.5be80661ed113","cb41ff72446587.5be80661ef168","d427e572446587.5be80661ec4a0","de1fb772446587.5be80661ee08d"]},{id:"Anzhelika",pics:["9a4c6d93547873.5e67b44e23267","965bba93547873.5e67b44eaebc1","62302c93547873.5e67b44e22b03","efa85a93547873.5e67b44eaf355"]},{id:"Yaroslav",pics:["0de72e93547349.5e67b25c975a4","31fe0d93547349.5e67b25b810c8","738a6f93547349.5e67b25b809df"]},{id:"Liza",pics:["03d33a72446415.5e67b34464307","5c923472446415.5e67b3459db47","11cf5f72446415.5e67b34536cb2"]}]}})}();//# sourceMappingURL=bundle.js.map
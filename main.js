(()=>{"use strict";var u,d,I={5593:(u,d,l)=>{l.d(d,{P:()=>j,V:()=>b});var h=l(4762);const g={},v={};let c=!1;function j(p,y){return new Promise((P,_)=>{if(g[p])return void P();const w=document.createElement("script");w.src=p,w.onerror=_,w.onload=()=>{(function(p){(0,h.mG)(this,void 0,void 0,function*(){const y=window[p];return v[p]||(c||(yield l.I("default"),c=!0),yield y.init(l.S.default),v[p]=!0),y})})(y),g[p]=!0,P()},document.body.appendChild(w)})}function b(p){return(0,h.mG)(this,void 0,void 0,function*(){return p.remoteEntry&&(yield j(p.remoteEntry,p.remoteName)),yield function(p,y){return(0,h.mG)(this,void 0,void 0,function*(){return(yield window[p].get(y))()})}(p.remoteName,p.exposedModule)})}},1902:(u,d,l)=>{l.d(d,{N:()=>h});const h={production:!0,mfeUrlPainel:"https://martins86.github.io/mfe-workspace-portal/",mfeUrlDashBoard:"https://martins86.github.io/mfe-workspace-dashboard/"}},8722:(u,d,l)=>{var h=l(5593),g=l(1902);Promise.all([(0,h.P)(`${g.N.mfeUrlDashBoard}remoteEntry.js`,"dashboard")]).catch(v=>console.error("Error loading remote entries",v)).then(()=>Promise.all([l.e(337),l.e(487),l.e(986),l.e(112)]).then(l.bind(l,9112))).catch(v=>console.error(v))},4762:(u,d,l)=>{function b(r,t,e,n){return new(e||(e=Promise))(function(a,f){function m(T){try{s(n.next(T))}catch(C){f(C)}}function M(T){try{s(n.throw(T))}catch(C){f(C)}}function s(T){T.done?a(T.value):function(a){return a instanceof e?a:new e(function(f){f(a)})}(T.value).then(m,M)}s((n=n.apply(r,t||[])).next())})}l.d(d,{mG:()=>b})}},G={};function i(u){var d=G[u];if(void 0!==d)return d.exports;var l=G[u]={exports:{}};return I[u](l,l.exports,i),l.exports}i.m=I,i.c=G,i.n=u=>{var d=u&&u.__esModule?()=>u.default:()=>u;return i.d(d,{a:d}),d},i.d=(u,d)=>{for(var l in d)i.o(d,l)&&!i.o(u,l)&&Object.defineProperty(u,l,{enumerable:!0,get:d[l]})},i.f={},i.e=u=>Promise.all(Object.keys(i.f).reduce((d,l)=>(i.f[l](u,d),d),[])),i.u=u=>u+".js",i.miniCssF=u=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(u){if("object"==typeof window)return window}}(),i.o=(u,d)=>Object.prototype.hasOwnProperty.call(u,d),u={},d="portal:",i.l=(l,h,g,v)=>{if(u[l])u[l].push(h);else{var c,E;if(void 0!==g)for(var S=document.getElementsByTagName("script"),j=0;j<S.length;j++){var b=S[j];if(b.getAttribute("src")==l||b.getAttribute("data-webpack")==d+g){c=b;break}}c||(E=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.setAttribute("data-webpack",d+g),c.src=i.tu(l)),u[l]=[h];var p=(P,_)=>{c.onerror=c.onload=null,clearTimeout(y);var w=u[l];if(delete u[l],c.parentNode&&c.parentNode.removeChild(c),w&&w.forEach(x=>x(_)),P)return P(_)},y=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),E&&document.head.appendChild(c)}},i.r=u=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})},(()=>{var u={},d={};i.f.remotes=(l,h)=>{i.o(u,l)&&u[l].forEach(g=>{var v=i.R;v||(v=[]);var c=d[g];if(!(v.indexOf(c)>=0)){if(v.push(c),c.p)return h.push(c.p);var E=y=>{y||(y=new Error("Container missing")),"string"==typeof y.message&&(y.message+='\nwhile loading "'+c[1]+'" from '+c[2]),I[g]=()=>{throw y},c.p=0},S=(y,P,_,w,x,U)=>{try{var A=y(P,_);if(!A||!A.then)return x(A,w,U);var V=A.then(F=>x(F,w),E);if(!U)return V;h.push(c.p=V)}catch(F){E(F)}},b=(y,P,_)=>S(P.get,c[1],v,0,p,_),p=y=>{c.p=1,I[g]=P=>{P.exports=y()}};S(i,c[2],0,0,(y,P,_)=>y?S(i.I,c[0],0,y,b,_):E(),1)}})}})(),(()=>{i.S={};var u={},d={};i.I=(l,h)=>{h||(h=[]);var g=d[l];if(g||(g=d[l]={}),!(h.indexOf(g)>=0)){if(h.push(g),u[l])return u[l];i.o(i.S,l)||(i.S[l]={});var v=i.S[l],E="portal",S=(p,y,P,_)=>{var w=v[p]=v[p]||{},x=w[y];(!x||!x.loaded&&(!_!=!x.eager?_:E>x.from))&&(w[y]={get:P,from:E,eager:!!_})},b=[];switch(l){case"default":S("@angular/common","12.2.13",()=>Promise.all([i.e(583),i.e(487)]).then(()=>()=>i(8583))),S("@angular/core","12.2.13",()=>Promise.all([i.e(823),i.e(639),i.e(957)]).then(()=>()=>i(639))),S("@angular/router","12.2.13",()=>Promise.all([i.e(823),i.e(353),i.e(487),i.e(986)]).then(()=>()=>i(7353)))}return u[l]=b.length?Promise.all(b).then(()=>u[l]=1):1}}})(),(()=>{var u;i.tu=d=>(void 0===u&&(u={createScriptURL:l=>l},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(u=trustedTypes.createPolicy("angular#bundler",u))),u.createScriptURL(d))})(),(()=>{var u;i.g.importScripts&&(u=i.g.location+"");var d=i.g.document;if(!u&&d&&(d.currentScript&&(u=d.currentScript.src),!u)){var l=d.getElementsByTagName("script");l.length&&(u=l[l.length-1].src)}if(!u)throw new Error("Automatic publicPath is not supported in this browser");u=u.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=u})(),(()=>{var u=r=>{var t=o=>o.split(".").map(a=>+a==a?+a:a),e=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(r),n=e[1]?t(e[1]):[];return e[2]&&(n.length++,n.push.apply(n,t(e[2]))),e[3]&&(n.push([]),n.push.apply(n,t(e[3]))),n},l=r=>{var t=r[0],e="";if(1===r.length)return"*";if(t+.5){e+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,o=1;o<r.length;o++)n--,e+="u"==(typeof(f=r[o]))[0]?"-":(n>0?".":"")+(n=2,f);return e}var a=[];for(o=1;o<r.length;o++){var f=r[o];a.push(0===f?"not("+m()+")":1===f?"("+m()+" || "+m()+")":2===f?a.pop()+" "+a.pop():l(f))}return m();function m(){return a.pop().replace(/^\((.+)\)$/,"$1")}},h=(r,t)=>{if(0 in r){t=u(t);var e=r[0],n=e<0;n&&(e=-e-1);for(var o=0,a=1,f=!0;;a++,o++){var m,M,s=a<r.length?(typeof r[a])[0]:"";if(o>=t.length||"o"==(M=(typeof(m=t[o]))[0]))return!f||("u"==s?a>e&&!n:""==s!=n);if("u"==M){if(!f||"u"!=s)return!1}else if(f)if(s==M)if(a<=e){if(m!=r[a])return!1}else{if(n?m>r[a]:m<r[a])return!1;m!=r[a]&&(f=!1)}else if("s"!=s&&"n"!=s){if(n||a<=e)return!1;f=!1,a--}else{if(a<=e||M<s!=n)return!1;f=!1}else"s"!=s&&"n"!=s&&(f=!1,a--)}}var T=[],C=T.pop.bind(T);for(o=1;o<r.length;o++){var O=r[o];T.push(1==O?C()|C():2==O?C()&C():O?h(O,t):!C())}return!!C()},c=(r,t)=>{var e=r[t];return Object.keys(e).reduce((n,o)=>!n||!e[n].loaded&&((r,t)=>{r=u(r),t=u(t);for(var e=0;;){if(e>=r.length)return e<t.length&&"u"!=(typeof t[e])[0];var n=r[e],o=(typeof n)[0];if(e>=t.length)return"u"==o;var a=t[e],f=(typeof a)[0];if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;if("o"!=o&&"u"!=o&&n!=a)return n<a;e++}})(n,o)?o:n,0)},j=(r,t,e,n)=>{var o=c(r,e);if(!h(n,o))throw new Error(((r,t,e)=>"Unsatisfied version "+t+" of shared singleton module "+r+" (required "+l(e)+")")(e,o,n));return _(r[e][o])},_=r=>(r.loaded=1,r.get()),B=(r=>function(t,e,n,o){var a=i.I(t);return a&&a.then?a.then(r.bind(r,t,i.S[t],e,n,o)):r(t,i.S[t],e,n,o)})((r,t,e,n,o)=>t&&i.o(t,e)?j(t,0,e,n):o()),D={},N={5487:()=>B("default","@angular/core",[2,12,2,0],()=>Promise.all([i.e(823),i.e(639),i.e(957)]).then(()=>()=>i(639))),4986:()=>B("default","@angular/common",[2,12,2,0],()=>i.e(583).then(()=>()=>i(8583))),4048:()=>B("default","@angular/router",[2,12,2,0],()=>Promise.all([i.e(823),i.e(353)]).then(()=>()=>i(7353)))},L={112:[4048],487:[5487],986:[4986]};i.f.consumes=(r,t)=>{i.o(L,r)&&L[r].forEach(e=>{if(i.o(D,e))return t.push(D[e]);var n=f=>{D[e]=0,i.m[e]=m=>{delete i.c[e],m.exports=f()}},o=f=>{delete D[e],i.m[e]=m=>{throw delete i.c[e],f}};try{var a=N[e]();a.then?t.push(D[e]=a.then(n).catch(o)):n(a)}catch(f){o(f)}})}})(),(()=>{var u={179:0};i.f.j=(h,g)=>{var v=i.o(u,h)?u[h]:void 0;if(0!==v)if(v)g.push(v[2]);else if(/^(487|986)$/.test(h))u[h]=0;else{var c=new Promise((b,p)=>v=u[h]=[b,p]);g.push(v[2]=c);var E=i.p+i.u(h),S=new Error;i.l(E,b=>{if(i.o(u,h)&&(0!==(v=u[h])&&(u[h]=void 0),v)){var p=b&&("load"===b.type?"missing":b.type),y=b&&b.target&&b.target.src;S.message="Loading chunk "+h+" failed.\n("+p+": "+y+")",S.name="ChunkLoadError",S.type=p,S.request=y,v[1](S)}},"chunk-"+h,h)}};var d=(h,g)=>{var S,j,[v,c,E]=g,b=0;for(S in c)i.o(c,S)&&(i.m[S]=c[S]);for(E&&E(i),h&&h(g);b<v.length;b++)i.o(u,j=v[b])&&u[j]&&u[j][0](),u[v[b]]=0},l=self.webpackChunkportal=self.webpackChunkportal||[];l.forEach(d.bind(null,0)),l.push=d.bind(null,l.push.bind(l))})(),i(8722)})();
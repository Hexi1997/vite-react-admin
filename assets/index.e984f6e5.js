import{r as t}from"./index.4af4ea9e.js";import{P as e}from"./index.f0afedfa.js";import{r,R as n}from"./vendor.e08318d7.js";import{h as o}from"./highlight.js.87f47241.js";import{k as i}from"./katex.7dc8b36a.js";import{Q as s}from"./quill.dd9f6519.js";import{s as a,c as l,a as u}from"./qs.a7e39f5a.js";import{S as p,m as c,C as f,d as h}from"./antd.f1a1dcbb.js";/* empty css                      */import"./recoil.10f8be27.js";function g(t,e,r){if(t==e)return t?[[0,t]]:[];(r<0||t.length<r)&&(r=null);var n=y(t,e),o=t.substring(0,n);n=m(t=t.substring(n),e=e.substring(n));var i=t.substring(t.length-n),s=function(t,e){var r;if(!t)return[[1,e]];if(!e)return[[-1,t]];var n=t.length>e.length?t:e,o=t.length>e.length?e:t,i=n.indexOf(o);if(-1!=i)return r=[[1,n.substring(0,i)],[0,o],[1,n.substring(i+o.length)]],t.length>e.length&&(r[0][0]=r[2][0]=-1),r;if(1==o.length)return[[-1,t],[1,e]];var s=function(t,e){var r=t.length>e.length?t:e,n=t.length>e.length?e:t;if(r.length<4||2*n.length<r.length)return null;function o(t,e,r){for(var n,o,i,s,a=t.substring(r,r+Math.floor(t.length/4)),l=-1,u="";-1!=(l=e.indexOf(a,l+1));){var p=y(t.substring(r),e.substring(l)),c=m(t.substring(0,r),e.substring(0,l));u.length<c+p&&(u=e.substring(l-c,l)+e.substring(l,l+p),n=t.substring(0,r-c),o=t.substring(r+p),i=e.substring(0,l-c),s=e.substring(l+p))}return 2*u.length>=t.length?[n,o,i,s,u]:null}var i,s,a,l,u,p=o(r,n,Math.ceil(r.length/4)),c=o(r,n,Math.ceil(r.length/2));if(!p&&!c)return null;i=c?p&&p[4].length>c[4].length?p:c:p;t.length>e.length?(s=i[0],a=i[1],l=i[2],u=i[3]):(l=i[0],u=i[1],s=i[2],a=i[3]);var f=i[4];return[s,a,l,u,f]}(t,e);if(s){var a=s[0],l=s[1],u=s[2],p=s[3],c=s[4],f=g(a,u),h=g(l,p);return f.concat([[0,c]],h)}return function(t,e){for(var r=t.length,n=e.length,o=Math.ceil((r+n)/2),i=o,s=2*o,a=new Array(s),l=new Array(s),u=0;u<s;u++)a[u]=-1,l[u]=-1;a[i+1]=0,l[i+1]=0;for(var p=r-n,c=p%2!=0,f=0,h=0,g=0,y=0,m=0;m<o;m++){for(var d=-m+f;d<=m-h;d+=2){for(var v=i+d,j=(E=d==-m||d!=m&&a[v-1]<a[v+1]?a[v+1]:a[v-1]+1)-d;E<r&&j<n&&t.charAt(E)==e.charAt(j);)E++,j++;if(a[v]=E,E>r)h+=2;else if(j>n)f+=2;else if(c){if((w=i+p-d)>=0&&w<s&&-1!=l[w])if(E>=(k=r-l[w]))return b(t,e,E,j)}}for(var x=-m+g;x<=m-y;x+=2){for(var k,w=i+x,O=(k=x==-m||x!=m&&l[w-1]<l[w+1]?l[w+1]:l[w-1]+1)-x;k<r&&O<n&&t.charAt(r-k-1)==e.charAt(n-O-1);)k++,O++;if(l[w]=k,k>r)y+=2;else if(O>n)g+=2;else if(!c){if((v=i+p-x)>=0&&v<s&&-1!=a[v]){var E;j=i+(E=a[v])-v;if(E>=(k=r-k))return b(t,e,E,j)}}}}return[[-1,t],[1,e]]}(t,e)}(t=t.substring(0,t.length-n),e=e.substring(0,e.length-n));return o&&s.unshift([0,o]),i&&s.push([0,i]),d(s),null!=r&&(s=function(t,e){var r=function(t,e){if(0===e)return[0,t];for(var r=0,n=0;n<t.length;n++){var o=t[n];if(-1===o[0]||0===o[0]){var i=r+o[1].length;if(e===i)return[n+1,t];if(e<i){t=t.slice();var s=e-r,a=[o[0],o[1].slice(0,s)],l=[o[0],o[1].slice(s)];return t.splice(n,1,a,l),[n+1,t]}r=i}}throw new Error("cursor_pos is out of bounds!")}(t,e),n=r[1],o=r[0],i=n[o],s=n[o+1];if(null==i)return t;if(0!==i[0])return t;if(null!=s&&i[1]+s[1]===s[1]+i[1])return n.splice(o,2,s,i),x(n,o,2);if(null!=s&&0===s[1].indexOf(i[1])){n.splice(o,2,[s[0],i[1]],[0,i[1]]);var a=s[1].slice(i[1].length);return a.length>0&&n.splice(o+2,0,[s[0],a]),x(n,o,3)}return t}(s,r)),s=function(t){for(var e=!1,r=function(t){return t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343},n=function(t){return t.charCodeAt(t.length-1)>=55296&&t.charCodeAt(t.length-1)<=56319},o=2;o<t.length;o+=1)0===t[o-2][0]&&n(t[o-2][1])&&-1===t[o-1][0]&&r(t[o-1][1])&&1===t[o][0]&&r(t[o][1])&&(e=!0,t[o-1][1]=t[o-2][1].slice(-1)+t[o-1][1],t[o][1]=t[o-2][1].slice(-1)+t[o][1],t[o-2][1]=t[o-2][1].slice(0,-1));if(!e)return t;var i=[];for(o=0;o<t.length;o+=1)t[o][1].length>0&&i.push(t[o]);return i}(s)}function b(t,e,r,n){var o=t.substring(0,r),i=e.substring(0,n),s=t.substring(r),a=e.substring(n),l=g(o,i),u=g(s,a);return l.concat(u)}function y(t,e){if(!t||!e||t.charAt(0)!=e.charAt(0))return 0;for(var r=0,n=Math.min(t.length,e.length),o=n,i=0;r<o;)t.substring(i,o)==e.substring(i,o)?i=r=o:n=o,o=Math.floor((n-r)/2+r);return o}function m(t,e){if(!t||!e||t.charAt(t.length-1)!=e.charAt(e.length-1))return 0;for(var r=0,n=Math.min(t.length,e.length),o=n,i=0;r<o;)t.substring(t.length-o,t.length-i)==e.substring(e.length-o,e.length-i)?i=r=o:n=o,o=Math.floor((n-r)/2+r);return o}function d(t){t.push([0,""]);for(var e,r=0,n=0,o=0,i="",s="";r<t.length;)switch(t[r][0]){case 1:o++,s+=t[r][1],r++;break;case-1:n++,i+=t[r][1],r++;break;case 0:n+o>1?(0!==n&&0!==o&&(0!==(e=y(s,i))&&(r-n-o>0&&0==t[r-n-o-1][0]?t[r-n-o-1][1]+=s.substring(0,e):(t.splice(0,0,[0,s.substring(0,e)]),r++),s=s.substring(e),i=i.substring(e)),0!==(e=m(s,i))&&(t[r][1]=s.substring(s.length-e)+t[r][1],s=s.substring(0,s.length-e),i=i.substring(0,i.length-e))),0===n?t.splice(r-o,n+o,[1,s]):0===o?t.splice(r-n,n+o,[-1,i]):t.splice(r-n-o,n+o,[-1,i],[1,s]),r=r-n-o+(n?1:0)+(o?1:0)+1):0!==r&&0==t[r-1][0]?(t[r-1][1]+=t[r][1],t.splice(r,1)):r++,o=0,n=0,i="",s=""}""===t[t.length-1][1]&&t.pop();var a=!1;for(r=1;r<t.length-1;)0==t[r-1][0]&&0==t[r+1][0]&&(t[r][1].substring(t[r][1].length-t[r-1][1].length)==t[r-1][1]?(t[r][1]=t[r-1][1]+t[r][1].substring(0,t[r][1].length-t[r-1][1].length),t[r+1][1]=t[r-1][1]+t[r+1][1],t.splice(r-1,1),a=!0):t[r][1].substring(0,t[r+1][1].length)==t[r+1][1]&&(t[r-1][1]+=t[r+1][1],t[r][1]=t[r][1].substring(t[r+1][1].length)+t[r+1][1],t.splice(r+1,1),a=!0)),r++;a&&d(t)}var v=g;v.INSERT=1,v.DELETE=-1,v.EQUAL=0;var j=v;function x(t,e,r){for(var n=e+r-1;n>=0&&n>=e-1;n--)if(n+1<t.length){var o=t[n],i=t[n+1];o[0]===i[1]&&t.splice(n,2,[o[0],o[1]+i[1]])}return t}var k,w=Object.prototype.toString,O=function(t){var e=w.call(t),r="[object Arguments]"===e;return r||(r="[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===w.call(t.callee)),r};if(!Object.keys){var E=Object.prototype.hasOwnProperty,S=Object.prototype.toString,A=O,L=Object.prototype.propertyIsEnumerable,$=!L.call({toString:null},"toString"),P=L.call((function(){}),"prototype"),T=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],M=function(t){var e=t.constructor;return e&&e.prototype===t},C={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},q=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!C["$"+t]&&E.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{M(window[t])}catch(e){return!0}}catch(e){return!0}return!1}();k=function(t){var e=null!==t&&"object"==typeof t,r="[object Function]"===S.call(t),n=A(t),o=e&&"[object String]"===S.call(t),i=[];if(!e&&!r&&!n)throw new TypeError("Object.keys called on a non-object");var s=P&&r;if(o&&t.length>0&&!E.call(t,0))for(var a=0;a<t.length;++a)i.push(String(a));if(n&&t.length>0)for(var l=0;l<t.length;++l)i.push(String(l));else for(var u in t)s&&"prototype"===u||!E.call(t,u)||i.push(String(u));if($)for(var p=function(t){if("undefined"==typeof window||!q)return M(t);try{return M(t)}catch(e){return!1}}(t),c=0;c<T.length;++c)p&&"constructor"===T[c]||!E.call(t,T[c])||i.push(T[c]);return i}}var N=k,D=Array.prototype.slice,_=O,H=Object.keys,z=H?function(t){return H(t)}:N,R=Object.keys;z.shim=function(){Object.keys?function(){var t=Object.keys(arguments);return t&&t.length===arguments.length}(1,2)||(Object.keys=function(t){return _(t)?R(D.call(t)):R(t)}):Object.keys=z;return Object.keys||z};var I=z,F=a,B=function(){return F()&&!!Symbol.toStringTag},Q=B(),V=l("Object.prototype.toString"),U=function(t){return!(Q&&t&&"object"==typeof t&&Symbol.toStringTag in t)&&"[object Arguments]"===V(t)},X=function(t){return!!U(t)||null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Array]"!==V(t)&&"[object Function]"===V(t.callee)},W=function(){return U(arguments)}();U.isLegacyArguments=X;var Y=W?U:X,G=I,J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),K=Object.prototype.toString,Z=Array.prototype.concat,tt=Object.defineProperty,et=tt&&function(){var t={};try{for(var e in tt(t,"x",{enumerable:!1,value:t}),t)return!1;return t.x===t}catch(r){return!1}}(),rt=function(t,e,r,n){var o;(!(e in t)||"function"==typeof(o=n)&&"[object Function]"===K.call(o)&&n())&&(et?tt(t,e,{configurable:!0,enumerable:!1,value:r,writable:!0}):t[e]=r)},nt=function(t,e){var r=arguments.length>2?arguments[2]:{},n=G(e);J&&(n=Z.call(n,Object.getOwnPropertySymbols(e)));for(var o=0;o<n.length;o+=1)rt(t,n[o],e[n[o]],r[n[o]])};nt.supportsDescriptors=!!et;var ot=nt,it=function(t){return t!=t},st=function(t,e){return 0===t&&0===e?1/t==1/e:t===e||!(!it(t)||!it(e))},at=st,lt=function(){return"function"==typeof Object.is?Object.is:at},ut=lt,pt=ot,ct=ot,ft=st,ht=lt,gt=function(){var t=ut();return pt(Object,{is:t},{is:function(){return Object.is!==t}}),t},bt=(0,u.exports)(ht(),Object);ct(bt,{getPolyfill:ht,implementation:ft,shim:gt});var yt,mt,dt,vt,jt=bt,xt=l,kt=B();if(kt){yt=xt("Object.prototype.hasOwnProperty"),mt=xt("RegExp.prototype.exec"),dt={};var wt=function(){throw dt};vt={toString:wt,valueOf:wt},"symbol"==typeof Symbol.toPrimitive&&(vt[Symbol.toPrimitive]=wt)}var Ot=xt("Object.prototype.toString"),Et=Object.getOwnPropertyDescriptor,St=kt?function(t){if(!t||"object"!=typeof t)return!1;var e=Et(t,"lastIndex");if(!(e&&yt(e,"value")))return!1;try{mt(t,vt)}catch(r){return r===dt}}:function(t){return!(!t||"object"!=typeof t&&"function"!=typeof t)&&"[object RegExp]"===Ot(t)},At=Object,Lt=TypeError,$t=function(){if(null!=this&&this!==At(this))throw new Lt("RegExp.prototype.flags getter called on non-object");var t="";return this.global&&(t+="g"),this.ignoreCase&&(t+="i"),this.multiline&&(t+="m"),this.dotAll&&(t+="s"),this.unicode&&(t+="u"),this.sticky&&(t+="y"),t},Pt=$t,Tt=ot.supportsDescriptors,Mt=Object.getOwnPropertyDescriptor,Ct=TypeError,qt=function(){if(!Tt)throw new Ct("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");if("gim"===/a/gim.flags){var t=Mt(RegExp.prototype,"flags");if(t&&"function"==typeof t.get&&"boolean"==typeof/a/.dotAll)return t.get}return Pt},Nt=ot.supportsDescriptors,Dt=qt,_t=Object.getOwnPropertyDescriptor,Ht=Object.defineProperty,zt=TypeError,Rt=Object.getPrototypeOf,It=/a/,Ft=ot,Bt=$t,Qt=qt,Vt=function(){if(!Nt||!Rt)throw new zt("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");var t=Dt(),e=Rt(It),r=_t(e,"flags");return r&&r.get===t||Ht(e,"flags",{configurable:!0,enumerable:!1,get:t}),t},Ut=(0,u.exports)(Bt);Ft(Ut,{getPolyfill:Qt,implementation:Bt,shim:Vt});var Xt=Ut,Wt=Date.prototype.getDay,Yt=Object.prototype.toString,Gt=B(),Jt=I,Kt=Y,Zt=jt,te=St,ee=Xt,re=function(t){return"object"==typeof t&&null!==t&&(Gt?function(t){try{return Wt.call(t),!0}catch(e){return!1}}(t):"[object Date]"===Yt.call(t))},ne=Date.prototype.getTime;function oe(t,e,r){var n=r||{};return!!(n.strict?Zt(t,e):t===e)||(!t||!e||"object"!=typeof t&&"object"!=typeof e?n.strict?Zt(t,e):t==e:function(t,e,r){var n,o;if(typeof t!=typeof e)return!1;if(ie(t)||ie(e))return!1;if(t.prototype!==e.prototype)return!1;if(Kt(t)!==Kt(e))return!1;var i=te(t),s=te(e);if(i!==s)return!1;if(i||s)return t.source===e.source&&ee(t)===ee(e);if(re(t)&&re(e))return ne.call(t)===ne.call(e);var a=se(t),l=se(e);if(a!==l)return!1;if(a||l){if(t.length!==e.length)return!1;for(n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}if(typeof t!=typeof e)return!1;try{var u=Jt(t),p=Jt(e)}catch(c){return!1}if(u.length!==p.length)return!1;for(u.sort(),p.sort(),n=u.length-1;n>=0;n--)if(u[n]!=p[n])return!1;for(n=u.length-1;n>=0;n--)if(!oe(t[o=u[n]],e[o],r))return!1;return!0}(t,e,n))}function ie(t){return null==t}function se(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}var ae=oe,le=Object.prototype.hasOwnProperty,ue=Object.prototype.toString,pe=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,fe=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===ue.call(t)},he=function(t){if(!t||"[object Object]"!==ue.call(t))return!1;var e,r=le.call(t,"constructor"),n=t.constructor&&t.constructor.prototype&&le.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!r&&!n)return!1;for(e in t);return void 0===e||le.call(t,e)},ge=function(t,e){pe&&"__proto__"===e.name?pe(t,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):t[e.name]=e.newValue},be=function(t,e){if("__proto__"===e){if(!le.call(t,e))return;if(ce)return ce(t,e).value}return t[e]},ye=function t(){var e,r,n,o,i,s,a=arguments[0],l=1,u=arguments.length,p=!1;for("boolean"==typeof a&&(p=a,a=arguments[1]||{},l=2),(null==a||"object"!=typeof a&&"function"!=typeof a)&&(a={});l<u;++l)if(null!=(e=arguments[l]))for(r in e)n=be(a,r),a!==(o=be(e,r))&&(p&&o&&(he(o)||(i=fe(o)))?(i?(i=!1,s=n&&fe(n)?n:[]):s=n&&he(n)?n:{},ge(a,{name:r,newValue:t(p,s,o)})):void 0!==o&&ge(a,{name:r,newValue:o}));return a},me=ae,de=ye,ve={attributes:{compose:function(t,e,r){"object"!=typeof t&&(t={}),"object"!=typeof e&&(e={});var n=de(!0,{},e);for(var o in r||(n=Object.keys(n).reduce((function(t,e){return null!=n[e]&&(t[e]=n[e]),t}),{})),t)void 0!==t[o]&&void 0===e[o]&&(n[o]=t[o]);return Object.keys(n).length>0?n:void 0},diff:function(t,e){"object"!=typeof t&&(t={}),"object"!=typeof e&&(e={});var r=Object.keys(t).concat(Object.keys(e)).reduce((function(r,n){return me(t[n],e[n])||(r[n]=void 0===e[n]?null:e[n]),r}),{});return Object.keys(r).length>0?r:void 0},transform:function(t,e,r){if("object"!=typeof t)return e;if("object"==typeof e){if(!r)return e;var n=Object.keys(e).reduce((function(r,n){return void 0===t[n]&&(r[n]=e[n]),r}),{});return Object.keys(n).length>0?n:void 0}}},iterator:function(t){return new je(t)},length:function(t){return"number"==typeof t.delete?t.delete:"number"==typeof t.retain?t.retain:"string"==typeof t.insert?t.insert.length:1}};function je(t){this.ops=t,this.index=0,this.offset=0}je.prototype.hasNext=function(){return this.peekLength()<1/0},je.prototype.next=function(t){t||(t=1/0);var e=this.ops[this.index];if(e){var r=this.offset,n=ve.length(e);if(t>=n-r?(t=n-r,this.index+=1,this.offset=0):this.offset+=t,"number"==typeof e.delete)return{delete:t};var o={};return e.attributes&&(o.attributes=e.attributes),"number"==typeof e.retain?o.retain=t:"string"==typeof e.insert?o.insert=e.insert.substr(r,t):o.insert=e.insert,o}return{retain:1/0}},je.prototype.peek=function(){return this.ops[this.index]},je.prototype.peekLength=function(){return this.ops[this.index]?ve.length(this.ops[this.index])-this.offset:1/0},je.prototype.peekType=function(){return this.ops[this.index]?"number"==typeof this.ops[this.index].delete?"delete":"number"==typeof this.ops[this.index].retain?"retain":"insert":"retain"},je.prototype.rest=function(){if(this.hasNext()){if(0===this.offset)return this.ops.slice(this.index);var t=this.offset,e=this.index,r=this.next(),n=this.ops.slice(this.index);return this.offset=t,this.index=e,[r].concat(n)}return[]};var xe=j,ke=ae,we=ye,Oe=ve,Ee=String.fromCharCode(0),Se=function(t){Array.isArray(t)?this.ops=t:null!=t&&Array.isArray(t.ops)?this.ops=t.ops:this.ops=[]};Se.prototype.insert=function(t,e){var r={};return 0===t.length?this:(r.insert=t,null!=e&&"object"==typeof e&&Object.keys(e).length>0&&(r.attributes=e),this.push(r))},Se.prototype.delete=function(t){return t<=0?this:this.push({delete:t})},Se.prototype.retain=function(t,e){if(t<=0)return this;var r={retain:t};return null!=e&&"object"==typeof e&&Object.keys(e).length>0&&(r.attributes=e),this.push(r)},Se.prototype.push=function(t){var e=this.ops.length,r=this.ops[e-1];if(t=we(!0,{},t),"object"==typeof r){if("number"==typeof t.delete&&"number"==typeof r.delete)return this.ops[e-1]={delete:r.delete+t.delete},this;if("number"==typeof r.delete&&null!=t.insert&&(e-=1,"object"!=typeof(r=this.ops[e-1])))return this.ops.unshift(t),this;if(ke(t.attributes,r.attributes)){if("string"==typeof t.insert&&"string"==typeof r.insert)return this.ops[e-1]={insert:r.insert+t.insert},"object"==typeof t.attributes&&(this.ops[e-1].attributes=t.attributes),this;if("number"==typeof t.retain&&"number"==typeof r.retain)return this.ops[e-1]={retain:r.retain+t.retain},"object"==typeof t.attributes&&(this.ops[e-1].attributes=t.attributes),this}}return e===this.ops.length?this.ops.push(t):this.ops.splice(e,0,t),this},Se.prototype.chop=function(){var t=this.ops[this.ops.length-1];return t&&t.retain&&!t.attributes&&this.ops.pop(),this},Se.prototype.filter=function(t){return this.ops.filter(t)},Se.prototype.forEach=function(t){this.ops.forEach(t)},Se.prototype.map=function(t){return this.ops.map(t)},Se.prototype.partition=function(t){var e=[],r=[];return this.forEach((function(n){(t(n)?e:r).push(n)})),[e,r]},Se.prototype.reduce=function(t,e){return this.ops.reduce(t,e)},Se.prototype.changeLength=function(){return this.reduce((function(t,e){return e.insert?t+Oe.length(e):e.delete?t-e.delete:t}),0)},Se.prototype.length=function(){return this.reduce((function(t,e){return t+Oe.length(e)}),0)},Se.prototype.slice=function(t,e){t=t||0,"number"!=typeof e&&(e=1/0);for(var r=[],n=Oe.iterator(this.ops),o=0;o<e&&n.hasNext();){var i;o<t?i=n.next(t-o):(i=n.next(e-o),r.push(i)),o+=Oe.length(i)}return new Se(r)},Se.prototype.compose=function(t){var e=Oe.iterator(this.ops),r=Oe.iterator(t.ops),n=[],o=r.peek();if(null!=o&&"number"==typeof o.retain&&null==o.attributes){for(var i=o.retain;"insert"===e.peekType()&&e.peekLength()<=i;)i-=e.peekLength(),n.push(e.next());o.retain-i>0&&r.next(o.retain-i)}for(var s=new Se(n);e.hasNext()||r.hasNext();)if("insert"===r.peekType())s.push(r.next());else if("delete"===e.peekType())s.push(e.next());else{var a=Math.min(e.peekLength(),r.peekLength()),l=e.next(a),u=r.next(a);if("number"==typeof u.retain){var p={};"number"==typeof l.retain?p.retain=a:p.insert=l.insert;var c=Oe.attributes.compose(l.attributes,u.attributes,"number"==typeof l.retain);if(c&&(p.attributes=c),s.push(p),!r.hasNext()&&ke(s.ops[s.ops.length-1],p)){var f=new Se(e.rest());return s.concat(f).chop()}}else"number"==typeof u.delete&&"number"==typeof l.retain&&s.push(u)}return s.chop()},Se.prototype.concat=function(t){var e=new Se(this.ops.slice());return t.ops.length>0&&(e.push(t.ops[0]),e.ops=e.ops.concat(t.ops.slice(1))),e},Se.prototype.diff=function(t,e){if(this.ops===t.ops)return new Se;var r=[this,t].map((function(e){return e.map((function(r){if(null!=r.insert)return"string"==typeof r.insert?r.insert:Ee;throw new Error("diff() called "+(e===t?"on":"with")+" non-document")})).join("")})),n=new Se,o=xe(r[0],r[1],e),i=Oe.iterator(this.ops),s=Oe.iterator(t.ops);return o.forEach((function(t){for(var e=t[1].length;e>0;){var r=0;switch(t[0]){case xe.INSERT:r=Math.min(s.peekLength(),e),n.push(s.next(r));break;case xe.DELETE:r=Math.min(e,i.peekLength()),i.next(r),n.delete(r);break;case xe.EQUAL:r=Math.min(i.peekLength(),s.peekLength(),e);var o=i.next(r),a=s.next(r);ke(o.insert,a.insert)?n.retain(r,Oe.attributes.diff(o.attributes,a.attributes)):n.push(a).delete(r)}e-=r}})),n.chop()},Se.prototype.eachLine=function(t,e){e=e||"\n";for(var r=Oe.iterator(this.ops),n=new Se,o=0;r.hasNext();){if("insert"!==r.peekType())return;var i=r.peek(),s=Oe.length(i)-r.peekLength(),a="string"==typeof i.insert?i.insert.indexOf(e,s)-s:-1;if(a<0)n.push(r.next());else if(a>0)n.push(r.next(a));else{if(!1===t(n,r.next(1).attributes||{},o))return;o+=1,n=new Se}}n.length()>0&&t(n,{},o)},Se.prototype.transform=function(t,e){if(e=!!e,"number"==typeof t)return this.transformPosition(t,e);for(var r=Oe.iterator(this.ops),n=Oe.iterator(t.ops),o=new Se;r.hasNext()||n.hasNext();)if("insert"!==r.peekType()||!e&&"insert"===n.peekType())if("insert"===n.peekType())o.push(n.next());else{var i=Math.min(r.peekLength(),n.peekLength()),s=r.next(i),a=n.next(i);if(s.delete)continue;a.delete?o.push(a):o.retain(i,Oe.attributes.transform(s.attributes,a.attributes,e))}else o.retain(Oe.length(r.next()));return o.chop()},Se.prototype.transformPosition=function(t,e){e=!!e;for(var r=Oe.iterator(this.ops),n=0;r.hasNext()&&n<=t;){var o=r.peekLength(),i=r.peekType();r.next(),"delete"!==i?("insert"===i&&(n<t||!e)&&(t+=o),n+=o):t-=Math.min(o,t-n)}return t};var Ae=Se;var Le="quillEditor_zlLIyM",$e="editorContent_HRAz-E";function Pe(e){const{placeholder:i="",minContentHeight:a=200,maxContentHeight:l=1e5,value:u="",onChange:f=(()=>{})}=e,[h,g]=r.exports.useState(),[b,y]=r.exports.useState(!1),[m,d]=r.exports.useState(u),v=Le,j=$e,x=()=>{const e=new s(`.${j}`,{formats:["background","bold","color","font","code","italic","link","strike","underline","blockquote","header","indent","list","align","direction","code-block","image","video","formula"],modules:{syntax:{highlight:t=>o.highlightAuto(t).value},toolbar:{container:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["link","image","video","formula"],["clean"]],handlers:{}}},placeholder:i,theme:"snow",readOnly:!1});g(e),(()=>{const t=e.theme.tooltip.root.querySelector("input[data-link]");t instanceof HTMLInputElement&&(t.dataset.link="https://my.example.com")})(),e.on("text-change",(()=>{var t;d((null==(t=null==e?void 0:e.root)?void 0:t.innerHTML)||"")})),e.getModule("toolbar").addHandler("image",(()=>{let r=e.container.querySelector("input.ql-image[type=file]");null===r&&(r=document.createElement("input"),r.classList.add("ql-image"),r.style.cssText="position:absolute;\n                                     z-index:-1;\n                                     opacity:0;",r.setAttribute("type","file"),r.setAttribute("accept","image/png, image/gif, image/jpeg, image/bmp, image/x-icon"),r.addEventListener("change",(()=>{const{files:n}=r;if(!n||!n.length)return void console.log("No files selected");const o=n[0];var i;o.size>5242880?c.error("单个文件大小不能超过 5MB"):(y(!0),e.enable(!1),(i={key:"49e27928735c3bd80e8aa27349a34c5b",image:o},t.postFormData("https://api.imgbb.com/1/upload",i)).then((({data:t})=>{if(t.display_url){const r=e.getSelection(!0);e.enable(!0),e.updateContents((new Ae).retain(r.index).delete(r.length).insert("\n").insert({image:t.display_url}).insert("\n"),"user"),e.setSelection(r.index,1,"silent")}else c.error("图片上传失败")})).finally((()=>{y(!1),e.enable(!0),r.value=""})))})),e.container.appendChild(r)),r.click()})),e.setContents(e.clipboard.convert(u))};return r.exports.useEffect((()=>{(()=>{const t=document.querySelector(`.${v}`),e=null==t?void 0:t.querySelectorAll(`.${v} .ql-toolbar`);e instanceof NodeList&&e.forEach((t=>t.remove()))})(),x()}),[]),r.exports.useEffect((()=>{u!==m&&d(u||"")}),[u]),r.exports.useEffect((()=>{f(m)}),[m,h]),console.log(m),n.createElement("div",{className:v},n.createElement(p,{spinning:b},n.createElement("div",{className:j,style:{minHeight:+a,maxHeight:+l}})))}o.configure({languages:["javascript","typescript"]}),window.katex=i;var Te={};const{Panel:Me}=h;function Ce(){const[t,o]=r.exports.useState({a:{b:"xxxxx message"}});return n.createElement(e,{className:Te.Page2},n.createElement(f,{title:"组件列表"},n.createElement(h,{accordion:!0},n.createElement(Me,{header:"【QuillEditor】富文本编辑器",key:"1"},n.createElement(Pe,{value:'<h2 class="ql-align-center"><strong><em><s><u>sa </u></s>是 撒风的</em></strong><strong style="background-color: rgb(255, 255, 102);"><em>范德萨发顺丰</em></strong></h2><p class="ql-align-center"><span class="ql-formula" data-value="e=mc^2"><span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>e</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">e=mc^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.43056em; vertical-align: 0em;"></span><span class="mord mathnormal">e</span><span class="mspace" style="margin-right: 0.277778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right: 0.277778em;"></span></span><span class="base"><span class="strut" style="height: 0.814108em; vertical-align: 0em;"></span><span class="mord mathnormal">m</span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.814108em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></span></span> </p><p><span style="color: rgb(198, 120, 221);">type</span> <span style="color: rgb(229, 192, 123);">QuillEditorProps</span></p><p>&lt;h2&gt;&lt;strong&gt;&lt;/h2&gt;dfds<a href="http://baidu.com" rel="noopener noreferrer" target="_blank">fdsfdsfds</a></p><p><img width="300" src="https://i.ibb.co/rbFTXB4/Ux-Hol6-Sw-Ly-M.jpg"></p>',minContentHeight:"300"})),n.createElement(Me,{header:"ErrorBoundary 捕获组件树异常",key:"3"},n.createElement("button",{onClick:()=>{o({})}},"点我测试ErrorBoundary组件"),n.createElement("h2",null,t.a.b)))))}export{Ce as default};

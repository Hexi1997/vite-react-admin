var e=Object.defineProperty,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,n=(r,a,t)=>a in r?e(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t;import"./index.5ecc34b2.js";import{c as l}from"./classnames.ca41f454.js";import{R as m,L as c}from"./vendor.a5ae8b09.js";import{S as o,P as s}from"./antd.ff053a27.js";var p="pageWrapper_1Vv8sm",b="pageContent_2LpKlm";function i(e){const{loading:i=!1,header:u=null,children:d=null,className:f=""}=e,v=l(p,{[f]:!!f}),j=e=>e.path?m.createElement(c,{to:e.path},e.breadcrumbName):m.createElement("span",null,e.breadcrumbName);return null!==u&&u.breadcrumb&&(u.breadcrumb.itemRender=j),m.createElement("div",{className:v},m.createElement(o,{spinning:i},u&&m.createElement(s,((e,l)=>{for(var m in l||(l={}))a.call(l,m)&&n(e,m,l[m]);if(r)for(var m of r(l))t.call(l,m)&&n(e,m,l[m]);return e})({},u)),m.createElement("div",{className:b},d)))}export{i as P};

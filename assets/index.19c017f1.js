import{_ as e,M as t,R as n}from"./index.4af4ea9e.js";import{j as s,r as o,R as l}from"./vendor.e08318d7.js";import{L as a}from"./antd.f1a1dcbb.js";/* empty css                      */import"./recoil.10f8be27.js";import"./qs.a7e39f5a.js";const i=o.exports.lazy((()=>e((()=>import("./index.97e42337.js")),["assets/index.97e42337.js","assets/index.eefc2003.css","assets/normalize.css.e029987c.css","assets/index.4af4ea9e.js","assets/index.a78bc89d.css","assets/vendor.e08318d7.js","assets/antd.f1a1dcbb.js","assets/recoil.10f8be27.js","assets/qs.a7e39f5a.js","assets/index.f0afedfa.js","assets/index.00965d8e.css"]))),u=o.exports.lazy((()=>e((()=>import("./index.e984f6e5.js")),["assets/index.e984f6e5.js","assets/index.05b7b2d0.css","assets/normalize.css.e029987c.css","assets/index.4af4ea9e.js","assets/index.a78bc89d.css","assets/vendor.e08318d7.js","assets/antd.f1a1dcbb.js","assets/recoil.10f8be27.js","assets/qs.a7e39f5a.js","assets/index.f0afedfa.js","assets/index.00965d8e.css","assets/highlight.js.87f47241.js","assets/katex.7dc8b36a.js","assets/quill.dd9f6519.js"]))),c=o.exports.lazy((()=>e((()=>import("./index.f4aa5482.js")),["assets/index.f4aa5482.js","assets/normalize.css.e029987c.css","assets/index.4af4ea9e.js","assets/index.a78bc89d.css","assets/vendor.e08318d7.js","assets/antd.f1a1dcbb.js","assets/recoil.10f8be27.js","assets/qs.a7e39f5a.js","assets/index.f0afedfa.js","assets/index.00965d8e.css"]))),r=o.exports.lazy((()=>e((()=>import("./index.563769ac.js")),["assets/index.563769ac.js","assets/normalize.css.e029987c.css","assets/vendor.e08318d7.js","assets/index.4af4ea9e.js","assets/index.a78bc89d.css","assets/antd.f1a1dcbb.js","assets/recoil.10f8be27.js","assets/qs.a7e39f5a.js"]))),_=[{key:"testMenu1",label:"测试菜单1",icon:"icon-xianxingdongqing",authcode:"l1_testMenu1",children:[{key:"testMenu1_1",label:"页面列表",link:"/l1/testMenu1/testMenu1_1/list",authcode:"l1_testMenu1_1"},{key:"testMenu1_2",label:"组件demo",link:"/l1/testMenu1/testMenu1_2/list",authcode:"l1_testMenu1_2"}]},{key:"testMenu2",label:"测试菜单2",icon:"icon-xianxingrongshu",link:"/l1/testMenu2/list",authcode:"l1_testMenu2"},{key:"testMenu3",label:"测试菜单3",icon:"icon-xianxingrongshu",link:"/l1/testMenu3/list",authcode:"l1_testMenu3"}],p=[{path:"/l1/testMenu1/testMenu1_1/list",authcode:"l1_testMenu1_1",component:i},{path:"/l1/testMenu1/testMenu1_2/list",authcode:"l1_testMenu1_2",component:u},{path:"/l1/testMenu2/list",component:c,authcode:"l1_testMenu2"},{path:"/l1/testMenu3/list",component:c,authcode:"l1_testMenu3"},{component:r}];var d="layout1_1mcTTn";const{Content:m,Sider:M}=a;function h(){const{openKeys:e,selectedKeys:i}=function(e=[]){const t=s(),[n,l]=o.exports.useState([]),[a,i]=o.exports.useState([]),u=o.exports.useMemo((()=>e.filter((e=>void 0===e.children)).map((e=>e.key))),[e]);return o.exports.useEffect((()=>{const e=t.pathname.split("/")[2],n=t.pathname.split("/")[3],s=u.includes(e);l(s?[]:[e]),i(s?[e]:[n])}),[t]),{openKeys:n,selectedKeys:a}}(_);return l.createElement(a,{className:d},l.createElement(M,{width:256},l.createElement(t,{mode:"inline",openKeys:e,selectedKeys:i,style:{height:"100%",borderRight:0},list:_})),l.createElement(m,null,l.createElement(n,{list:p})))}export{h as default};

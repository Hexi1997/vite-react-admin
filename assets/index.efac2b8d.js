import{_ as e,M as t,R as n}from"./index.a1b2473f.js";import{k as s,r as o,R as l}from"./vendor.007a0d56.js";import{L as i}from"./antd.8efb228f.js";/* empty css                      */import"./recoil.e34f1d37.js";import"./qs.2e7c19d0.js";const a=o.exports.lazy((()=>e((()=>import("./index.b3f339fd.js")),["assets/index.b3f339fd.js","assets/index.fcd0abea.css","assets/normalize.css.a00f81cc.css","assets/index.a1b2473f.js","assets/index.130713f8.css","assets/vendor.007a0d56.js","assets/antd.8efb228f.js","assets/recoil.e34f1d37.js","assets/qs.2e7c19d0.js","assets/index.67d317dd.js","assets/index.6265c69d.css"]))),u=o.exports.lazy((()=>e((()=>import("./index.0a5d34e5.js")),["assets/index.0a5d34e5.js","assets/index.7e02d43c.css","assets/normalize.css.a00f81cc.css","assets/index.a1b2473f.js","assets/index.130713f8.css","assets/vendor.007a0d56.js","assets/antd.8efb228f.js","assets/recoil.e34f1d37.js","assets/qs.2e7c19d0.js","assets/index.67d317dd.js","assets/index.6265c69d.css","assets/highlight.js.87f47241.js","assets/katex.afe4388c.js","assets/quill.2991d243.js","assets/cropperjs.79fa6fb7.js"]))),c=o.exports.lazy((()=>e((()=>import("./index.3bbda5bf.js")),["assets/index.3bbda5bf.js","assets/normalize.css.a00f81cc.css","assets/index.a1b2473f.js","assets/index.130713f8.css","assets/vendor.007a0d56.js","assets/antd.8efb228f.js","assets/recoil.e34f1d37.js","assets/qs.2e7c19d0.js","assets/index.67d317dd.js","assets/index.6265c69d.css"]))),r=o.exports.lazy((()=>e((()=>import("./index.e5655174.js")),["assets/index.e5655174.js","assets/normalize.css.a00f81cc.css","assets/vendor.007a0d56.js","assets/index.a1b2473f.js","assets/index.130713f8.css","assets/antd.8efb228f.js","assets/recoil.e34f1d37.js","assets/qs.2e7c19d0.js"]))),_=[{key:"testMenu1",label:"测试菜单1",icon:"icon-xianxingdongqing",authcode:"l1_testMenu1",children:[{key:"testMenu1_1",label:"页面列表",link:"/l1/testMenu1/testMenu1_1/list",authcode:"l1_testMenu1_1"},{key:"testMenu1_2",label:"组件demo",link:"/l1/testMenu1/testMenu1_2/list",authcode:"l1_testMenu1_2"}]},{key:"testMenu2",label:"测试菜单2",icon:"icon-xianxingrongshu",link:"/l1/testMenu2/list",authcode:"l1_testMenu2"},{key:"testMenu3",label:"测试菜单3",icon:"icon-xianxingrongshu",link:"/l1/testMenu3/list",authcode:"l1_testMenu3"}],d=[{path:"/l1/testMenu1/testMenu1_1/list",authcode:"l1_testMenu1_1",component:a},{path:"/l1/testMenu1/testMenu1_2/list",authcode:"l1_testMenu1_2",component:u},{path:"/l1/testMenu2/list",component:c,authcode:"l1_testMenu2"},{path:"/l1/testMenu3/list",component:c,authcode:"l1_testMenu3"},{component:r}];var p="layout1_1mcTTn";const{Content:m,Sider:M}=i;function h(){const{openKeys:e,selectedKeys:a}=function(e=[]){const t=s(),[n,l]=o.exports.useState([]),[i,a]=o.exports.useState([]),u=o.exports.useMemo((()=>e.filter((e=>void 0===e.children)).map((e=>e.key))),[e]);return o.exports.useEffect((()=>{const e=t.pathname.split("/")[2],n=t.pathname.split("/")[3],s=u.includes(e);l(s?[]:[e]),a(s?[e]:[n])}),[t]),{openKeys:n,selectedKeys:i}}(_);return l.createElement(i,{className:p},l.createElement(M,{width:256},l.createElement(t,{mode:"inline",openKeys:e,selectedKeys:a,style:{height:"100%",borderRight:0},list:_})),l.createElement(m,null,l.createElement(n,{list:d})))}export{h as default};

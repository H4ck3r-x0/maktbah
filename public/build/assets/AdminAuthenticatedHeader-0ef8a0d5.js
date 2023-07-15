import{r as l,a as e,j as t,F as g,d}from"./app-0f417571.js";import{A as x}from"./ApplicationLogo-d09776dc.js";import{t as p}from"./transition-4b5c5b4e.js";const u=l.createContext(),s=({children:r})=>{const[i,o]=l.useState(!1),a=()=>{o(c=>!c)};return e(u.Provider,{value:{open:i,setOpen:o,toggleOpen:a},children:e("div",{className:"relative",children:r})})},b=({children:r})=>{const{open:i,setOpen:o,toggleOpen:a}=l.useContext(u);return t(g,{children:[e("div",{onClick:a,children:r}),i&&e("div",{className:"fixed inset-0 z-40",onClick:()=>o(!1)})]})},v=({align:r="left",width:i="48",contentClasses:o="py-1 bg-white",children:a})=>{const{open:c,setOpen:f}=l.useContext(u);let m="origin-top";r==="left"?m="origin-top-left left-0":r==="right"&&(m="origin-top-right right-0");let h="";return i==="48"&&(h="w-48"),e(g,{children:e(p,{as:l.Fragment,show:c,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${m} ${h}`,onClick:()=>f(!1),children:e("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+o,children:a})})})})},y=({className:r="",children:i,...o})=>e(d,{...o,className:"block w-full px-4 py-2 text-right text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+r,children:i});s.Trigger=b;s.Content=v;s.Link=y;const n=s;function w({active:r=!1,className:i="",children:o,...a}){return e(d,{...a,className:"inline-flex ml-4 items-center px-1 pt-1 border-b-2 text-md font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(r?"border-indigo-400 text-gray-800 focus:border-indigo-700 font-semibold ":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ")+i,children:o})}function N({active:r=!1,className:i="",children:o,...a}){return e(d,{...a,className:`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${r?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${i}`,children:o})}function R({user:r}){const[i,o]=l.useState(!1);return t("nav",{className:"bg-white border-b border-gray-100",children:[e("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:t("div",{className:"flex justify-between h-16",children:[t("div",{className:"flex",children:[e("div",{className:"shrink-0 flex items-center",children:e(d,{href:route("admin.dashboard"),children:e(x,{className:"block h-9 w-auto fill-current text-gray-800"})})}),t("div",{className:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",children:[e(w,{href:route("admin.dashboard"),active:route().current("admin.dashboard"),children:"الرئيسية"}),e("div",{className:"inline-flex ml-4 items-center px-1 pt-1 border-b-2 text-md font-medium leading-5 transition duration-150 ease-in-out focus:outline-none",children:t(n,{children:[e(n.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:t("button",{type:"button",className:"inline-flex items-center  py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:["الطلبات",e("svg",{className:"mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e(n.Content,{children:e(n.Link,{href:route("admin.order.index"),children:"جميع الطلبات"})})]})}),e("div",{className:"inline-flex ml-4 items-center px-1 pt-1 border-b-2 text-md font-medium leading-5 transition duration-150 ease-in-out focus:outline-none",children:t(n,{children:[e(n.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:t("button",{type:"button",className:"inline-flex items-center  py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:["العملاء",e("svg",{className:"mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),t(n.Content,{children:[e(n.Link,{href:route("admin.user.index"),children:"جميع العملاء"}),e(n.Link,{href:route("admin.user.create"),children:"إضافة عميل جديد"})]})]})}),e("div",{className:"inline-flex ml-4 items-center px-1 pt-1 border-b-2 text-md font-medium leading-5 transition duration-150 ease-in-out focus:outline-none",children:t(n,{children:[e(n.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:t("button",{type:"button",className:"inline-flex items-center  py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:["المكتبات",e("svg",{className:"mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e(n.Content,{children:e(n.Link,{href:route("admin.library.index"),children:"المكتبات"})})]})}),e("div",{className:"inline-flex ml-4 items-center px-1 pt-1 border-b-2 text-md font-medium  transition duration-150 ease-in-out focus:outline-none",children:t(n,{children:[e(n.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:t("button",{type:"button",className:"inline-flex items-center py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:["الكتب",e("svg",{className:"mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),t(n.Content,{children:[e(n.Link,{href:route("admin.book.index"),children:"جميع الكتب"}),e(n.Link,{href:route("admin.book.create"),children:"اضافة كتاب"})]})]})}),e("div",{className:"inline-flex ml-4 items-center px-1 pt-1 border-b-2 text-md font-medium leading-5 transition duration-150 ease-in-out focus:outline-none",children:t(n,{children:[e(n.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:t("button",{type:"button",className:"inline-flex items-center  py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:["الاعدادات",e("svg",{className:"mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),t(n.Content,{children:[e(n.Link,{href:route("admin.city.create"),children:"اضافة مدن"}),e(n.Link,{href:route("admin.district.create"),children:"اضافة أحياء"}),e(n.Link,{href:route("admin.major.create"),children:"اضافة تخصصات"})]})]})})]})]}),e("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:e("div",{className:"ml-3 relative",children:t(n,{children:[e(n.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:t("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[r.name,e("svg",{className:"mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),t(n.Content,{children:[e(n.Link,{href:route("admin.dashboard"),children:"لوحة التحكم"}),e(n.Link,{href:route("admin.profile.edit"),children:"الملف الشخصي"}),e(n.Link,{href:route("logout"),method:"post",as:"button",children:"تسجيل الخروج"})]})]})})}),e("div",{className:"-mr-2 flex items-center sm:hidden",children:e("button",{onClick:()=>o(a=>!a),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:t("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e("path",{className:i?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e("path",{className:i?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),t("div",{className:(i?"block":"hidden")+" sm:hidden",children:[e("div",{className:"pt-2 pb-3 space-y-1"}),t("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[t("div",{className:"px-4",children:[e("div",{className:"font-medium text-base text-gray-800",children:r.name}),e("div",{className:"font-medium text-sm text-gray-500",children:r.email})]}),e("div",{className:"mt-3 space-y-1",children:e(N,{method:"post",href:route("logout"),as:"button",children:"تسجيل الخروج"})})]})]})]})}export{R as A,n as D,w as N,N as R};

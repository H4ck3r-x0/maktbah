import{r as l,a as e,j as r,F as g,d as s}from"./app-16f00f28.js";import{A as p}from"./ApplicationLogo-123847eb.js";import{t as v}from"./transition-6731b11a.js";const h=l.createContext(),c=({children:t})=>{const[i,o]=l.useState(!1),d=()=>{o(u=>!u)};return e(h.Provider,{value:{open:i,setOpen:o,toggleOpen:d},children:e("div",{className:"relative",children:t})})},b=({children:t})=>{const{open:i,setOpen:o,toggleOpen:d}=l.useContext(h);return r(g,{children:[e("div",{onClick:d,children:t}),i&&e("div",{className:"fixed inset-0 z-40",onClick:()=>o(!1)})]})},y=({align:t="left",width:i="48",contentClasses:o="py-1 bg-white",children:d})=>{const{open:u,setOpen:x}=l.useContext(h);let m="origin-top";t==="left"?m="origin-top-left left-0":t==="right"&&(m="origin-top-right right-0");let f="";return i==="48"&&(f="w-48"),e(g,{children:e(v,{as:l.Fragment,show:u,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${m} ${f}`,onClick:()=>x(!1),children:e("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+o,children:d})})})})},w=({className:t="",children:i,...o})=>e(s,{...o,className:"block w-full px-4 py-2 text-right text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+t,children:i});c.Trigger=b;c.Content=y;c.Link=w;const n=c;function N({active:t=!1,className:i="",children:o,...d}){return e(s,{...d,className:"inline-flex ml-4 items-center px-1 pt-1 border-b-2 text-md font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(t?"border-indigo-400 text-gray-800 focus:border-indigo-700 font-semibold ":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ")+i,children:o})}function a({active:t=!1,className:i="",children:o,...d}){return e(s,{...d,className:`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${t?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${i}`,children:o})}function R({user:t}){const[i,o]=l.useState(!1);return r("nav",{className:"bg-white border-b border-gray-100",children:[e("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r("div",{className:"flex justify-between h-16",children:[r("div",{className:"flex",children:[e("div",{className:"shrink-0 flex items-center",children:e(s,{href:route("admin.dashboard"),children:e(p,{className:"block h-9 w-auto fill-current text-gray-800"})})}),r("div",{className:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",children:[e("div",{className:"inline-flex ml-4 items-center px-1 pt-1 border-b-2 text-md font-medium leading-5 transition duration-150 ease-in-out focus:outline-none",children:r(n,{children:[e(n.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:r("button",{type:"button",className:"inline-flex items-center  py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:["الطلبات",e("svg",{className:"mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e(n.Content,{children:e(n.Link,{href:route("admin.order.index"),children:"جميع الطلبات"})})]})}),e("div",{className:"inline-flex ml-4 items-center px-1 pt-1 border-b-2 text-md font-medium leading-5 transition duration-150 ease-in-out focus:outline-none",children:r(n,{children:[e(n.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:r("button",{type:"button",className:"inline-flex items-center  py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:["العملاء",e("svg",{className:"mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),r(n.Content,{children:[e(n.Link,{href:route("admin.user.index"),children:"جميع العملاء"}),e(n.Link,{href:route("admin.user.create"),children:"إضافة عميل جديد"})]})]})}),e("div",{className:"inline-flex ml-4 items-center px-1 pt-1 border-b-2 text-md font-medium leading-5 transition duration-150 ease-in-out focus:outline-none",children:r(n,{children:[e(n.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:r("button",{type:"button",className:"inline-flex items-center  py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:["المكتبات",e("svg",{className:"mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),r(n.Content,{children:[e(n.Link,{href:route("admin.library.index"),children:"المكتبات"}),e(n.Link,{href:route("admin.branch.index"),children:"الفروع"})]})]})}),e("div",{className:"inline-flex ml-4 items-center px-1 pt-1 border-b-2 text-md font-medium  transition duration-150 ease-in-out focus:outline-none",children:r(n,{children:[e(n.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:r("button",{type:"button",className:"inline-flex items-center py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:["الكتب",e("svg",{className:"mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),r(n.Content,{children:[e(n.Link,{href:route("admin.book.index"),children:"جميع الكتب"}),e(n.Link,{href:route("admin.book.create"),children:"اضافة كتاب"})]})]})}),e("div",{className:"inline-flex ml-4 items-center px-1 pt-1 border-b-2 text-md font-medium  transition duration-150 ease-in-out focus:outline-none",children:r(n,{children:[e(n.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:r("button",{type:"button",className:"inline-flex items-center py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:["القرطاسيات",e("svg",{className:"mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),r(n.Content,{children:[e(n.Link,{href:route("admin.stationery.index"),children:" القرطاسيات"}),e(n.Link,{href:route("admin.stationery.branch.index"),children:"الفروع"})]})]})}),e(N,{href:route("admin.note.index"),active:route().current("admin.note.index"),children:"المذكرات"}),e("div",{className:"inline-flex ml-4 items-center px-1 pt-1 border-b-2 text-md font-medium leading-5 transition duration-150 ease-in-out focus:outline-none",children:r(n,{children:[e(n.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:r("button",{type:"button",className:"inline-flex items-center  py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:["الاعدادات",e("svg",{className:"mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),r(n.Content,{children:[e(n.Link,{href:route("admin.city.create"),children:"اضافة مدن"}),e(n.Link,{href:route("admin.district.create"),children:"اضافة أحياء"}),e(n.Link,{href:route("admin.university.create"),children:"اضافة جامعات"}),e(n.Link,{href:route("admin.major.create"),children:"اضافة تخصصات"}),e(n.Link,{href:route("admin.ads.create"),children:"اضافة اعلان"})]})]})})]})]}),e("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:e("div",{className:"ml-3 relative",children:r(n,{children:[e(n.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:r("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[t.username,e("svg",{className:"mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),r(n.Content,{children:[e(n.Link,{href:route("admin.dashboard"),children:"لوحة التحكم"}),e(n.Link,{href:route("admin.profile.edit"),children:"الملف الشخصي"}),e(n.Link,{href:route("logout"),method:"post",as:"button",children:"تسجيل الخروج"})]})]})})}),e("div",{className:"-mr-2 flex items-center sm:hidden",children:e("button",{onClick:()=>o(d=>!d),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:r("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e("path",{className:i?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e("path",{className:i?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),r("div",{className:(i?"block":"hidden")+" sm:hidden",children:[r("div",{className:"pt-2 pb-3 space-y-1",children:[e(a,{href:route("admin.dashboard"),active:route().current("admin.dashboard"),children:"الرئيسية"}),e(a,{href:route("admin.order.index"),active:route().current("admin.order.index"),children:"جميع الطلبات"}),e(a,{href:route("admin.user.index"),active:route().current("admin.user.index"),children:"جميع العملاء"}),e(a,{href:route("admin.user.create"),active:route().current("admin.user.create"),children:"إضافة عميل"}),e(a,{href:route("admin.book.index"),active:route().current("admin.book.index"),children:"جميع الكتب"}),e(a,{href:route("admin.book.create"),active:route().current("admin.book.create"),children:"إضافة كتب"}),e(a,{href:route("admin.note.index"),active:route().current("admin.note.index"),children:"المذكرات"}),e(a,{href:route("admin.major.create"),active:route().current("admin.major.create"),children:"إضافة تخصصات"}),e(a,{href:route("admin.university.create"),active:route().current("admin.university.create"),children:"إضافة جامعات"}),e(a,{href:route("admin.ads.create"),active:route().current("admin.ads.create"),children:"إضافة اعلان"})]}),r("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[e("div",{className:"px-4",children:e("div",{className:"font-medium text-base text-gray-800",children:t.username})}),r("div",{className:"mt-3 space-y-1",children:[e(a,{href:route("admin.profile.edit"),children:"الملف الشخصي"}),e(a,{method:"post",href:route("logout"),as:"button",children:"تسجيل الخروج"})]})]})]})]})}export{R as A,n as D,N,a as R};

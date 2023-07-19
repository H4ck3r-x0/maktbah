import{r as s,j as r,a as e,d as c}from"./app-922b3034.js";import{N as o,D as t,R as a,A as m}from"./AdminAuthenticatedHeader-a3910b16.js";import{A as h}from"./ApplicationLogo-8abf37ef.js";import{N as u,A as f,a as x}from"./AuthenticatedLibraryHeader-038be3f5.js";function p({user:n}){const[i,d]=s.useState(!1);return r("nav",{className:"bg-white border-b border-gray-100",children:[e("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r("div",{className:"flex justify-between h-16",children:[r("div",{className:"flex",children:[e("div",{className:"shrink-0 flex items-center",children:e(c,{href:"/",children:e(h,{className:"block h-9 w-auto fill-current text-gray-800"})})}),r("div",{className:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",children:[e(o,{href:route("branch.book.create"),active:route().current("branch.book.create"),children:"الكتب"}),e(o,{href:route("branch.order.index"),active:route().current("branch.order.index"),children:"الطلبات"})]})]}),e("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:r("div",{className:"flex items-center ml-3 relative",children:[e("div",{children:e(u,{})}),r(t,{children:[e(t.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:r("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[n.username,e("svg",{className:"mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),r(t.Content,{children:[e(t.Link,{href:route("branch.dashboard"),children:"لوحة التحكم"}),e(t.Link,{href:route("profile.edit"),children:"تحديث الملف الشخصي"}),e(t.Link,{href:route("logout"),method:"post",as:"button",children:"تسجيل الخروج"})]})]})]})}),e("div",{className:"-mr-2 flex items-center sm:hidden",children:e("button",{onClick:()=>d(l=>!l),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:r("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e("path",{className:i?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e("path",{className:i?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),r("div",{className:(i?"block":"hidden")+" sm:hidden",children:[r("div",{className:"pt-2 pb-3 space-y-1",children:[e(a,{href:route("dashboard"),active:route().current("dashboard"),children:"الرئيسية"}),e(a,{href:route("branch.book.create"),active:route().current("branch.book.create"),children:"إضافة كتب"}),e(a,{href:route("branch.order.index"),active:route().current("branch.order.index"),children:"الطلبات"})]}),r("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[e("div",{className:"px-4",children:e("div",{className:"font-medium text-base text-gray-800",children:n.username})}),r("div",{className:"mt-3 space-y-1",children:[e(a,{href:route("profile.edit"),children:"الملف الشخصي"}),e(a,{method:"post",href:route("logout"),as:"button",children:"تسجيل الخروج"})]})]})]})]})}function v({user:n}){const[i,d]=s.useState(!1);return r("nav",{className:"bg-white border-b border-gray-100",children:[e("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r("div",{className:"flex justify-between h-16",children:[r("div",{className:"flex",children:[e("div",{className:"shrink-0 flex items-center",children:e(c,{href:"/",children:e(h,{className:"block h-9 w-auto fill-current text-gray-800"})})}),e("div",{className:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"})]}),e("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:e("div",{className:"flex items-center ml-3 relative",children:r(t,{children:[e(t.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:r("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[n.username,e("svg",{className:"mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),r(t.Content,{children:[e(t.Link,{href:route("stationery.dashboard"),children:"لوحة التحكم"}),e(t.Link,{href:route("profile.edit"),children:"تحديث الملف الشخصي"}),e(t.Link,{href:route("logout"),method:"post",as:"button",children:"تسجيل الخروج"})]})]})})}),e("div",{className:"-mr-2 flex items-center sm:hidden",children:e("button",{onClick:()=>d(l=>!l),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:r("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e("path",{className:i?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e("path",{className:i?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),r("div",{className:(i?"block":"hidden")+" sm:hidden",children:[e("div",{className:"pt-2 pb-3 space-y-1",children:e(a,{href:route("stationery.dashboard"),active:route().current("stationery.dashboard"),children:"الرئيسية"})}),r("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[e("div",{className:"px-4",children:e("div",{className:"font-medium text-base text-gray-800",children:n.username})}),r("div",{className:"mt-3 space-y-1",children:[e(a,{href:route("profile.edit"),children:"الملف الشخصي"}),e(a,{method:"post",href:route("logout"),as:"button",children:"تسجيل الخروج"})]})]})]})]})}function b({user:n}){const[i,d]=s.useState(!1);return r("nav",{className:"bg-white border-b border-gray-100",children:[e("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r("div",{className:"flex justify-between h-16",children:[r("div",{className:"flex",children:[e("div",{className:"shrink-0 flex items-center",children:e(c,{href:"/",children:e(h,{className:"block h-9 w-auto fill-current text-gray-800"})})}),e("div",{className:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",children:e(o,{href:route("teacher.note.create"),active:route().current("teacher.note.create"),children:"إنشاء مذكرة جديدة"})})]}),e("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:e("div",{className:"flex items-center ml-3 relative",children:r(t,{children:[e(t.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:r("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[n.username,e("svg",{className:"mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),r(t.Content,{children:[e(t.Link,{href:route("teacher.dashboard"),children:"لوحة التحكم"}),e(t.Link,{href:route("profile.edit"),children:"تحديث الملف الشخصي"}),e(t.Link,{href:route("logout"),method:"post",as:"button",children:"تسجيل الخروج"})]})]})})}),e("div",{className:"-mr-2 flex items-center sm:hidden",children:e("button",{onClick:()=>d(l=>!l),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:r("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e("path",{className:i?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e("path",{className:i?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),r("div",{className:(i?"block":"hidden")+" sm:hidden",children:[r("div",{className:"pt-2 pb-3 space-y-1",children:[e(a,{href:route("dashboard"),active:route().current("dashboard"),children:"الرئيسية"}),e(a,{href:route("teacher.note.create"),active:route().current("teacher.note.create"),children:"إنشاء مذكرة جديدة"})]}),r("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[e("div",{className:"px-4",children:e("div",{className:"font-medium text-base text-gray-800",children:n.username})}),r("div",{className:"mt-3 space-y-1",children:[e(a,{href:route("profile.edit"),children:"الملف الشخصي"}),e(a,{method:"post",href:route("logout"),as:"button",children:"تسجيل الخروج"})]})]})]})]})}function k({user:n,header:i,children:d}){return r("div",{className:"min-h-screen bg-gray-100",children:[n.role=="admin"&&e(m,{user:n}),n.role=="user"&&e(f,{user:n}),n.role=="library"&&e(x,{user:n}),n.role=="branch"&&e(p,{user:n}),n.role=="teacher"&&e(b,{user:n}),n.role=="stationery"&&e(v,{user:n}),i&&e("header",{className:"bg-white shadow",children:e("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:i})}),e("main",{children:d})]})}export{k as A};

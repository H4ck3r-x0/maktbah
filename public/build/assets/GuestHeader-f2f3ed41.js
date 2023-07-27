import{r as l,j as i,a as e,d as t}from"./app-533a8615.js";import{A as d}from"./ApplicationLogo-2729fa4e.js";import{N as n,R as s}from"./AdminAuthenticatedHeader-87ede515.js";function u(){const[r,a]=l.useState(!1);return i("nav",{className:"bg-white",children:[e("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i("div",{className:"flex justify-between h-16",children:[i("div",{className:"flex",children:[e("div",{className:"shrink-0 flex items-center",children:e(t,{href:"/",children:e(d,{className:"block h-9 w-auto fill-current text-gray-800"})})}),i("div",{className:"hidden  sm:-my-px sm:ml-10 sm:flex",children:[e(n,{href:route("about"),active:route().current("about"),children:"من نحن؟"}),e(n,{href:route("contact"),active:route().current("contact"),children:"أتصل بنا"})]})]}),e("div",{className:"hidden sm:flex sm:items-center sm:mt-3 sm:ml-6",children:i("div",{className:"flex items-center gap-3",children:[e(t,{href:route("register"),children:e("button",{className:"bg-indigo-600 px-8 py-2 text-white font-semibold rounded-2xl hover:bg-indigo-700 shadow-lg transition-all",children:"إنضم إلينا الأن"})}),e(t,{href:route("login"),children:e("button",{className:"bg-white px-8 py-2 text-gray-800 border font-semibold rounded-2xl hover:bg-gray-100 shadow-sm transition-all",children:"تسجيل الدخول"})})]})}),e("div",{className:"-mr-2 flex items-center sm:hidden",children:e("button",{onClick:()=>a(o=>!o),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:i("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e("path",{className:r?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e("path",{className:r?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e("div",{className:(r?"block":"hidden")+" sm:hidden",children:e("div",{className:"pt-4 pb-1 border-t border-gray-200",children:i("div",{className:"flex items-center justify-between gap-2 px-4 mt-3 space-y-1",children:[e(s,{className:"bg-indigo-600 px-8 py-2 text-white font-semibold rounded-2xl  shadow-lg transition-all",href:route("register"),children:"إنضم إلينا الأن"}),e(s,{className:"bg-white  px-8 py-2 text-gray-700 font-semibold rounded-2xl shadow-md transition-all",href:route("login"),children:"تسجيل الدخول"})]})})})]})}export{u as G};
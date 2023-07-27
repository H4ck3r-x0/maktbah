import{j as r,a as e,d,b as l}from"./app-2a477420.js";import{P as t}from"./PrimaryButton-3fcd8d7d.js";import{A as m}from"./AuthenticatedLayout-93072b9c.js";import{m as o}from"./moment-with-locales-00d61704.js";import"./AdminAuthenticatedHeader-5f24ccc6.js";import"./ApplicationLogo-7ecee1c1.js";import"./transition-04b927ac.js";import"./AuthenticatedLibraryHeader-2d9818c3.js";function v({auth:s,notifications:i}){return r(m,{user:s.user,header:r("div",{className:"flex items-center justify-between",children:[e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"التنبيهات"}),e(d,{href:route("library.dashboard"),children:e(t,{children:"العودة"})})]}),children:[e(l,{title:"التنبيهات"}),e("div",{className:"py-4",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"overflow-hidden p-4",children:e("div",{className:"grid grid-cols-1 gap-3",children:i.map(a=>r("div",{className:"bg-white flex items-center justify-between gap-3 p-6 shadow-md rounded-md",children:[r("div",{className:"flex items-center gap-3",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"text-gray-600 w-8 h-8",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"})}),r("div",{className:"flex flex-col gap-1",children:[e("h1",{className:"text-lg text-gray-600",children:a.data.message}),r("h4",{className:"text-sm text-indigo-600 font-simibold",children:[e("span",{children:o(a.data.created_at).locale("ar").format("MMMM Do YYYY")}),e("span",{children:" - "}),r("span",{children:["رقم الطلب ( ",a.data.order_id," ) "]})]})]})]}),e(d,{href:route("library.order.show",a.data.order_id),children:e(t,{children:"مشاهدة الطلب"})})]},a.id))})})})})]})}export{v as default};
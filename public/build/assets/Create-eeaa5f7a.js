import{W as p,j as r,a as e,b as u,d as x}from"./app-cb4316c3.js";import{A as g}from"./AdminAuthenticatedLayout-dab9317b.js";import{I as N}from"./InputError-c744ba30.js";import{I as f}from"./InputLabel-701dc92e.js";import{P as t}from"./PrimaryButton-da87da90.js";import{T as v}from"./TextInput-9b2540c0.js";import{$ as y}from"./transition-3e9f14fd.js";import"./AdminAuthenticatedHeader-c96ceacd.js";import"./ApplicationLogo-d330570c.js";function B({auth:s,universities:l}){const{data:i,setData:d,post:n,errors:o,processing:m,recentlySuccessful:c}=p({name:""}),h=a=>{a.preventDefault(),n(route("admin.university.store"))};return r(g,{user:s.user,header:e("div",{className:"flex items-center justify-between",children:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"إضافة جامعات"})}),children:[e(u,{title:"إضافة جامعات"}),e("div",{className:"py-8",children:r("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e("div",{className:"p-6 text-gray-900",children:r("form",{onSubmit:h,className:"mt-6 space-y-6",children:[r("div",{children:[e(f,{htmlFor:"name",value:"اسم الجامعة"}),e(v,{id:"name",className:"mt-2 block w-full",value:i.name,onChange:a=>d("name",a.target.value),required:!0,autoComplete:"name"}),e(N,{className:"mt-2",message:o.name})]}),r("div",{className:"flex items-center gap-4",children:[e(t,{disabled:m,children:"حفظ"}),e(y,{show:c,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:e("p",{className:"text-sm text-gray-600",children:"تم الحفظ بنجاح"})})]})]})})}),e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg mt-8",children:e("div",{className:"p-6 text-gray-900",children:e("div",{className:"relative overflow-x-auto",children:r("table",{className:"w-full text-sm text-right text-gray-500 border ",children:[e("thead",{className:"text-sm text-gray-700 uppercase bg-gray-100 rounded-md border",children:r("tr",{children:[e("th",{scope:"col",className:"px-6 py-3",children:"#"}),e("th",{scope:"col",className:"px-6 py-3 tracking-wider",children:"الاسم"}),e("th",{scope:"col",className:"px-6 py-3 tracking-wider",children:"العمليات"})]})}),e("tbody",{children:l.map(a=>r("tr",{className:"bg-white border-b hover:bg-gray-100 hover:transition-all",children:[e("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 ",children:a.id}),e("td",{className:"px-6 py-4",children:a.name}),e("td",{className:"px-0 py-4",children:e("div",{className:"flex items-center gap-2",children:e(x,{href:route("admin.university.edit",a.id),children:e(t,{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})})})})})})]},a.id))})]})})})})]})})]})}export{B as default};
import{W as f,j as t,a as e,b as w,d as N}from"./app-0f417571.js";import{A as y}from"./AdminAuthenticatedLayout-8b466725.js";import{I as o}from"./InputError-1c82cc16.js";import{I as n}from"./InputLabel-8af051bd.js";import{P as d}from"./PrimaryButton-db8d02aa.js";import{T as m}from"./TextInput-6268610b.js";import{D as b}from"./DangerButton-3361b068.js";import{t as k}from"./transition-4b5c5b4e.js";import"./AdminAuthenticatedHeader-0ef8a0d5.js";import"./ApplicationLogo-d09776dc.js";function W({auth:c,majors:h}){const{data:r,setData:s,post:p,delete:u,errors:l,processing:i,recentlySuccessful:v}=f({name:"",levels:""}),g=a=>{a.preventDefault(),p(route("admin.major.store"))},x=a=>{window.confirm("هل انت متاكد من حذف المكتبة، ستخسر جميع البيانات")===!0&&u(route("admin.major.destroy",a))};return t(y,{user:c.user,header:e("div",{className:"flex items-center justify-between",children:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"إضافة تخصصات"})}),children:[e(w,{title:"إضافة تخصصات"}),e("div",{className:"py-8",children:t("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e("div",{className:"p-6 text-gray-900",children:t("form",{onSubmit:g,className:"mt-6 space-y-6",children:[t("div",{children:[e(n,{htmlFor:"name",value:"اسم التخصص"}),e(m,{id:"name",className:"mt-2 block w-full",value:r.name,onChange:a=>s("name",a.target.value),required:!0,autoComplete:"name"}),e(o,{className:"mt-2",message:l.name})]}),t("div",{children:[e(n,{htmlFor:"levels",value:"عدد المستويات"}),e(m,{type:"number",id:"levels",className:"mt-2 block w-full",value:r.levels,onChange:a=>s("levels",a.target.value),required:!0}),e(o,{className:"mt-2",message:l.levels})]}),t("div",{className:"flex items-center gap-4",children:[e(d,{disabled:i,children:"حفظ"}),e(k,{show:v,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:e("p",{className:"text-sm text-gray-600",children:"تم الحفظ بنجاح"})})]})]})})}),e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg mt-8",children:e("div",{className:"p-6 text-gray-900",children:e("div",{className:"relative overflow-x-auto",children:t("table",{className:"w-full text-sm text-right text-gray-500 border ",children:[e("thead",{className:"text-sm text-gray-700 uppercase bg-gray-100 rounded-md border",children:t("tr",{children:[e("th",{scope:"col",className:"px-6 py-3",children:"#"}),e("th",{scope:"col",className:"px-6 py-3 tracking-wider",children:"الاسم"}),e("th",{scope:"col",className:"px-6 py-3 tracking-wider",children:"العمليات"})]})}),e("tbody",{children:h.map(a=>t("tr",{className:"bg-white border-b hover:bg-gray-100 hover:transition-all",children:[e("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 ",children:a.id}),e("td",{className:"px-6 py-4",children:a.name}),e("td",{className:"px-0 py-4",children:t("div",{className:"flex items-center gap-2",children:[e(N,{href:route("admin.major.edit",a.id),children:e(d,{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})})})}),e(b,{onClick:()=>x(a.id),disabled:i,children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})})]})})]},a.id))})]})})})})]})})]})}export{W as default};

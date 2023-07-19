import{q as d,W as N,r as o,j as a,a as e,d as p,b as v}from"./app-922b3034.js";import{P as h}from"./PrimaryButton-fea96342.js";import{T as w}from"./TextInput-d3fcbf7e.js";import{A as b}from"./AdminAuthenticatedLayout-8ecc6989.js";import{d as k}from"./debounce-2238ed6a.js";import _ from"./Pagination-a7668a46.js";import"./AdminAuthenticatedHeader-a3910b16.js";import"./ApplicationLogo-8abf37ef.js";import"./transition-a43393a6.js";function H({auth:m,users:s}){const l=d().props.filters,i=d().props.currentPage,{data:c,setData:t,get:g}=N({search:l.search,account_type:l.account_type,gender:l.gender}),u=r=>{t("search",r.target.value)},y=r=>{t("account_type",r.target.value)},x=r=>{t("gender",r.target.value)},f=()=>{g(route("admin.user.index",{search:c.search,account_type:c.account_type,gender:c.gender,page:i}),{preserveScroll:!0,preserveState:!0,replace:!0})},n=o.useCallback(k(f,500),[c.search,c.account_type,c.gender,i]);return o.useEffect(()=>(n(),n.cancel),[c.search,c.account_type,c.gender,n]),a(b,{user:m.user,header:a("div",{className:"flex items-center justify-between",children:[e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"جميع اعضاء الموقع"}),e(p,{href:route("admin.user.create"),children:e(h,{children:"إضافة عضو جديد"})})]}),children:[e(v,{title:"جميع اعضاء الموقع"}),e("div",{className:"py-6",children:a("div",{className:"w-full  gap-3 px-2",children:[e("div",{className:"pb-3",children:a("div",{className:"flex flex-col  sm:flex-row gap-4",children:[e(w,{className:"w-full sm:w-1/3",type:"text",id:"search",name:"search",value:c.search||"",onChange:u,placeholder:"أبحث بالاسم .."}),e("div",{className:"mb-2",children:a("select",{onChange:y,name:"gender",id:"gender",className:"mt-2 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",children:[e("option",{value:"",children:"أختر نوع الحساب"}),e("option",{value:"user",children:"طالب / طالبة"}),e("option",{value:"library",children:"مكتبة"}),e("option",{value:"teacher",children:"استاذ / استاذة"}),e("option",{value:"stationery",children:"قرطاسية"})]})}),e("div",{className:"",children:a("select",{onChange:x,name:"gender",id:"account_type",className:"mt-2 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",children:[e("option",{value:"",children:"أختر نوع الجنس"}),e("option",{value:"male",children:"ذكر"}),e("option",{value:"female",children:"أنثى"})]})})]})}),e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e("div",{className:"p-6 text-gray-900",children:a("div",{className:"relative overflow-x-auto",children:[a("table",{className:"w-full text-sm text-right text-gray-500 border ",children:[e("thead",{className:"text-sm text-gray-700 uppercase bg-gray-100 rounded-md border",children:a("tr",{children:[e("th",{scope:"col",className:"px-2 py-3",children:"#"}),e("th",{scope:"col",className:"px-2 py-3 tracking-wider",children:"اسم المستخدم"}),e("th",{scope:"col",className:"px-2 py-3 tracking-wider",children:"الجوال"}),e("th",{scope:"col",className:"px-2 py-3 tracking-wider",children:"الجنس"}),e("th",{scope:"col",className:"px-2 py-3 tracking-wider",children:"المدينة"}),e("th",{scope:"col",className:"px-2 py-3 tracking-wider",children:"الفئة"}),e("th",{scope:"col",className:"px-2 py-3 tracking-wider",children:"الجامعة"}),e("th",{scope:"col",className:"px-2 py-3 tracking-wider",children:"التخصص"}),e("th",{scope:"col",className:"px-2 py-3 tracking-wider",children:"المستوى"}),e("th",{scope:"col",className:"px-2 py-3 tracking-wider",children:"العمليات"})]})}),e("tbody",{children:s.data.map(r=>a("tr",{className:"bg-white border-b hover:bg-gray-100 hover:transition-all",children:[e("th",{scope:"row",className:"px-2 py-4 font-medium text-gray-900 ",children:r.id}),e("td",{className:"px-2 py-4",children:r.username}),e("td",{className:"px-2 py-4",children:r.phone?r.phone:"لا يوجد"}),a("td",{className:"px-2 py-4",children:[r.gender=="male"&&"ذكر",r.gender=="female"&&"إنثى",r.gender==null&&"لا يوجد"]}),e("td",{className:"px-2 py-4",children:r.city?r.city:"لا يوجد"}),e("td",{className:"px-2 py-4",children:r.role_name}),e("td",{className:"px-2 py-4",children:r.user_profile?r.user_profile.university:"لايوجد"}),e("td",{className:"px-2 py-4",children:r.user_profile?r.user_profile.major:"لايوجد"}),e("td",{className:"px-2 py-4",children:r.user_profile?r.user_profile.level:"لايوجد"}),e("td",{className:"px-0 py-4",children:e("div",{className:"flex items-center gap-2",children:e(p,{href:route("admin.user.edit",r.id),children:e(h,{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})})})})})})]},r.id))})]}),e(_,{class:"mt-6",links:s.links})]})})})]})})]})}export{H as default};

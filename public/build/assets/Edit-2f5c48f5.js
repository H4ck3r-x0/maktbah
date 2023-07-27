import{r as F,W as I,j as r,a as e,d as _,b as O}from"./app-2a477420.js";import{I as i}from"./InputError-a4baecf1.js";import{I as o}from"./InputLabel-ae64d592.js";import{P as c}from"./PrimaryButton-3fcd8d7d.js";import{T as d}from"./TextInput-0cb64fd3.js";import{A as k}from"./AuthenticatedLayout-93072b9c.js";import{t as q}from"./transition-04b927ac.js";import"./AdminAuthenticatedHeader-5f24ccc6.js";import"./ApplicationLogo-7ecee1c1.js";import"./AuthenticatedLibraryHeader-2d9818c3.js";function W({auth:p,branch:s,cities:n,districts:g}){const[h,v]=F.useState(""),{data:m,setData:t,patch:f,errors:l,processing:N,recentlySuccessful:y}=I({libraryOwnerName:s.user.username,username:s.user.username,password:"",name:s.name,phone:s.phone,city:s.city,district:s.district,google_maps:s.google_maps,user_id:s.user.id}),w=a=>{a.preventDefault(),f(route("library.update.branch",s.id))},b=a=>{const x=a.target.value,u=n.filter(C=>x==C.id);v(u[0].id),t("city",u[0].name)};return r(k,{user:p.user,header:r("div",{className:"flex items-center justify-between",children:[e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"تعديل الفرع"}),e(_,{href:route("library.dashboard"),children:e(c,{children:"العودة"})})]}),children:[e(O,{title:"تعديل الفرع"}),e("div",{className:"py-8",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e("div",{className:"p-6 text-gray-900",children:r("form",{onSubmit:w,className:"mt-6 space-y-6",children:[r("div",{children:[e(o,{htmlFor:"city",value:"المدينة"}),r("select",{onChange:b,className:"w-full mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ",children:[e("option",{value:"",children:"أختر المدينة"}),n.map(a=>e("option",{value:a.id,children:a.name},a.id))]}),e(i,{className:"mt-2",message:l.city})]}),r("div",{children:[e(o,{htmlFor:"city",value:"الحي"}),r("select",{onChange:a=>t("district",a.target.value),className:"w-full mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ",children:[e("option",{value:"",children:"أختر الحي"}),g.filter(a=>a.city_id===h).map(a=>e("option",{value:a.name,children:a.name},a.id))]}),e(i,{className:"mt-2",message:l.district_id})]}),r("div",{children:[e(o,{htmlFor:"googleMaps",value:"عنوان قوقل مابز"}),e(d,{id:"googleMaps",className:"mt-2 block w-full",value:m.google_maps,onChange:a=>t("google_maps",a.target.value),required:!0,autoComplete:"googleMaps"}),e(i,{className:"mt-2",message:l.google_maps})]}),r("div",{children:[e(o,{htmlFor:"libraryOwnerName",value:"أسم صاحب المكتبة"}),e(d,{id:"libraryOwnerName",className:"mt-2 block w-full",value:m.libraryOwnerName,onChange:a=>t("libraryOwnerName",a.target.value),required:!0,isFocused:!0,autoComplete:"libraryOwnerName"}),e(i,{className:"mt-2",message:l.libraryOwnerName})]}),r("div",{children:[e(o,{htmlFor:"username",value:"أسم المستخدم"}),e(d,{id:"username",type:"text",className:"mt-2 block w-full",value:m.username,onChange:a=>t("username",a.target.value),required:!0}),e(i,{className:"mt-2",message:l.username})]}),r("div",{children:[e(o,{htmlFor:"password",value:"كلمة المرور"}),e(d,{id:"password",type:"password",className:"mt-2 block w-full",value:m.password,onChange:a=>t("password",a.target.value)}),e(i,{className:"mt-2",message:l.password})]}),r("div",{children:[e(o,{htmlFor:"name",value:"اسم المكتبة"}),e(d,{id:"name",className:"mt-2 block w-full",value:m.name,onChange:a=>t("name",a.target.value),required:!0,autoComplete:"name"}),e(i,{className:"mt-2",message:l.name})]}),r("div",{children:[e(o,{htmlFor:"phone",value:" رقم التواصل"}),e(d,{id:"phone",className:"mt-2 block w-full",value:m.phone,onChange:a=>t("phone",a.target.value),required:!0,autoComplete:"phone"}),e(i,{className:"mt-2",message:l.phone})]}),r("div",{className:"flex items-center gap-4",children:[e(c,{disabled:N,children:"تحديث"}),e(q,{show:y,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:e("p",{className:"text-sm text-gray-600",children:"تم الحفظ بنجاح"})})]})]})})})})})]})}export{W as default};
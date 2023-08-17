import{r as I,W as R,j as t,a as e,d as F,b as _}from"./app-16f00f28.js";import{A as j}from"./AdminAuthenticatedLayout-5ac0ff2d.js";import{I as i}from"./InputError-9d145645.js";import{I as r}from"./InputLabel-b01a3739.js";import{P as u}from"./PrimaryButton-5ef67552.js";import{T as n}from"./TextInput-7498b384.js";import{t as k}from"./transition-6731b11a.js";import"./AdminAuthenticatedHeader-7492c730.js";import"./ApplicationLogo-123847eb.js";function B({auth:h,library:s,cities:d,districts:g}){const[p,v]=I.useState(""),{data:m,setData:l,patch:f,errors:o,processing:C,recentlySuccessful:N}=R({name:s.name,phone:s.phone,CR:s.CR,city:s.city,district:s.district,google_maps:s.google_maps}),x=a=>{a.preventDefault(),f(route("admin.library.update",s.id))},y=a=>{const w=a.target.value,c=d.filter(b=>w==b.id);v(c[0].id),l("city",c[0].name)};return t(j,{user:h.user,header:t("div",{className:"flex items-center justify-between",children:[e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"تعديل المكتبة"}),e(F,{href:route("admin.library.index"),children:e(u,{children:"العودة"})})]}),children:[e(_,{title:"تعديل المكتبة"}),e("div",{className:"py-8",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e("div",{className:"p-6 text-gray-900",children:t("form",{onSubmit:x,className:"mt-6 space-y-6",children:[t("div",{children:[e(r,{htmlFor:"city",value:"المدينة"}),t("select",{onChange:y,className:"w-full mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ",children:[e("option",{value:"",children:"أختر المدينة"}),d.map(a=>e("option",{value:a.id,children:a.name},a.id))]}),e(i,{className:"mt-2",message:o.city})]}),t("div",{children:[e(r,{htmlFor:"city",value:"الحي"}),t("select",{onChange:a=>l("district",a.target.value),className:"w-full mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ",children:[e("option",{value:"",children:"أختر الحي"}),g.filter(a=>a.city_id===p).map(a=>e("option",{value:a.name,children:a.name},a.id))]}),e(i,{className:"mt-2",message:o.district_id})]}),t("div",{children:[e(r,{htmlFor:"googleMaps",value:"عنوان قوقل مابز"}),e(n,{id:"googleMaps",className:"mt-2 block w-full",value:m.google_maps,onChange:a=>l("google_maps",a.target.value),required:!0,autoComplete:"googleMaps"}),e(i,{className:"mt-2",message:o.google_maps})]}),t("div",{children:[e(r,{htmlFor:"name",value:"اسم المكتبة"}),e(n,{id:"name",className:"mt-2 block w-full",value:m.name,onChange:a=>l("name",a.target.value),required:!0,autoComplete:"name"}),e(i,{className:"mt-2",message:o.name})]}),t("div",{children:[e(r,{htmlFor:"phone",value:" رقم التواصل"}),e(n,{id:"phone",className:"mt-2 block w-full",value:m.phone,onChange:a=>l("phone",a.target.value),required:!0,autoComplete:"phone"}),e(i,{className:"mt-2",message:o.phone})]}),t("div",{children:[e(r,{htmlFor:"CR",value:"السجل التجاري"}),e(n,{id:"CR",className:"mt-2 block w-full",value:m.CR,onChange:a=>l("CR",a.target.value),required:!0,autoComplete:"CR"}),e(i,{className:"mt-2",message:o.CR})]}),t("div",{className:"flex items-center gap-4",children:[e(u,{disabled:C,children:"تحديث"}),e(k,{show:N,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:e("p",{className:"text-sm text-gray-600",children:"تم الحفظ بنجاح"})})]})]})})})})})]})}export{B as default};

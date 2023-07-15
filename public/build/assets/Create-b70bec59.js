import{r as C,W as x,j as r,a as e,d as F,b as I}from"./app-0f417571.js";import{P as u}from"./PrimaryButton-db8d02aa.js";import{I as s}from"./InputError-1c82cc16.js";import{I as o}from"./InputLabel-8af051bd.js";import{T as i}from"./TextInput-6268610b.js";import{A as k}from"./AuthenticatedLayout-1a784295.js";import{t as q}from"./transition-4b5c5b4e.js";import"./AdminAuthenticatedHeader-0ef8a0d5.js";import"./ApplicationLogo-d09776dc.js";import"./AuthenticatedLibraryHeader-2897ad78.js";function P({auth:h,cities:d,districts:p}){const[n,g]=C.useState(""),{data:m,setData:t,post:v,errors:l,processing:N,recentlySuccessful:f}=x({libraryOwnerName:"",username:"",password:"",name:"",phone:"",CR:"",city:"",selectedCityId:n||"",district:"",google_maps:""}),w=a=>{const c=d.filter(b=>a.target.value==b.id);g(c[0].id),t("city",c[0].name)},y=a=>{a.preventDefault(),v(route("branch.store"))};return r(k,{user:h.user,header:r("div",{className:"flex items-center justify-between",children:[e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"إضافة فرع جديد"}),e(F,{href:route("library.dashboard"),children:e(u,{children:"العودة"})})]}),children:[e(I,{title:"إضافة فرع جديد"}),e("div",{className:"py-8",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e("div",{className:"p-6 text-gray-900",children:r("form",{onSubmit:y,className:"mt-6 space-y-6",children:[r("div",{children:[e(o,{htmlFor:"city",value:"المدينة"}),r("select",{onChange:w,className:"w-full mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ",children:[e("option",{value:"",children:"أختر المدينة"}),d.map(a=>e("option",{value:a.id,children:a.name},a.id))]}),e(s,{className:"mt-2",message:l.city})]}),r("div",{children:[e(o,{htmlFor:"city",value:"الحي"}),r("select",{onChange:a=>t("district",a.target.value),className:"w-full mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ",children:[e("option",{value:"",children:"أختر الحي"}),p.filter(a=>a.city_id===n).map(a=>e("option",{value:a.name,children:a.name},a.id))]}),e(s,{className:"mt-2",message:l.district_id})]}),r("div",{children:[e(o,{htmlFor:"googleMaps",value:"عنوان قوقل مابز"}),e(i,{id:"googleMaps",className:"mt-2 block w-full",value:m.google_maps,onChange:a=>t("google_maps",a.target.value),required:!0,autoComplete:"googleMaps"}),e(s,{className:"mt-2",message:l.google_maps})]}),r("div",{children:[e(o,{htmlFor:"libraryOwnerName",value:"أسم صاحب المكتبة"}),e(i,{id:"libraryOwnerName",className:"mt-2 block w-full",value:m.libraryOwnerName,onChange:a=>t("libraryOwnerName",a.target.value),required:!0,autoComplete:"libraryOwnerName"}),e(s,{className:"mt-2",message:l.libraryOwnerName})]}),r("div",{children:[e(o,{htmlFor:"username",value:"أسم المستخدم"}),e(i,{id:"username",type:"text",className:"mt-2 block w-full",value:m.username,onChange:a=>t("username",a.target.value),required:!0}),e(s,{className:"mt-2",message:l.username})]}),r("div",{children:[e(o,{htmlFor:"password",value:"كلمة المرور"}),e(i,{id:"password",type:"password",className:"mt-2 block w-full",value:m.password,onChange:a=>t("password",a.target.value),required:!0}),e(s,{className:"mt-2",message:l.password})]}),r("div",{children:[e(o,{htmlFor:"name",value:"اسم المكتبة"}),e(i,{id:"name",className:"mt-2 block w-full",value:m.name,onChange:a=>t("name",a.target.value),required:!0,autoComplete:"name"}),e(s,{className:"mt-2",message:l.name})]}),r("div",{children:[e(o,{htmlFor:"phone",value:"رقم التواصل"}),e(i,{id:"phone",className:"mt-2 block w-full",value:m.phone,onChange:a=>t("phone",a.target.value),required:!0,autoComplete:"phone"}),e(s,{className:"mt-2",message:l.phone})]}),r("div",{children:[e(o,{htmlFor:"CR",value:"السجل التجاري"}),e(i,{id:"CR",className:"mt-2 block w-full",value:m.CR,onChange:a=>t("CR",a.target.value),required:!0,autoComplete:"CR"}),e(s,{className:"mt-2",message:l.CR})]}),r("div",{className:"flex items-center gap-4",children:[e(u,{disabled:N,children:"حفظ"}),e(q,{show:f,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:e("p",{className:"text-sm text-gray-600",children:"تم الحفظ بنجاح"})})]})]})})})})})]})}export{P as default};

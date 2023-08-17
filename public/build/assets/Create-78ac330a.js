import{r as b,W as C,j as t,a as e,d as I,b as F}from"./app-16f00f28.js";import{P as u}from"./PrimaryButton-5ef67552.js";import{I as l}from"./InputError-9d145645.js";import{I as o}from"./InputLabel-b01a3739.js";import{T as d}from"./TextInput-7498b384.js";import{A as _}from"./AuthenticatedLayout-fda8994a.js";import{t as j}from"./transition-6731b11a.js";import"./AdminAuthenticatedHeader-7492c730.js";import"./ApplicationLogo-123847eb.js";import"./AuthenticatedLibraryHeader-4cbca632.js";function L({auth:h,cities:n,districts:p}){const[m,g]=b.useState(""),{data:i,setData:s,post:v,errors:r,processing:f,recentlySuccessful:y}=C({username:"",password:"",phone:"",city:"",selectedCityId:m||"",district:"",google_maps:""}),N=a=>{const c=n.filter(x=>a.target.value==x.id);g(c[0].id),s("city",c[0].name)},w=a=>{a.preventDefault(),v(route("stationery.main.branch.store"))};return t(_,{user:h.user,header:t("div",{className:"flex items-center justify-between",children:[e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"إضافة فرع جديد"}),e(I,{href:route("stationery.dashboard"),children:e(u,{children:"العودة"})})]}),children:[e(F,{title:"إضافة فرع جديد"}),e("div",{className:"py-8",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e("div",{className:"p-6 text-gray-900",children:t("form",{onSubmit:w,className:"mt-6 space-y-6",children:[t("div",{children:[e(o,{htmlFor:"city",value:"المدينة"}),t("select",{onChange:N,className:"w-full mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ",children:[e("option",{value:"",children:"أختر المدينة"}),n.map(a=>e("option",{value:a.id,children:a.name},a.id))]}),e(l,{className:"mt-2",message:r.city})]}),t("div",{children:[e(o,{htmlFor:"city",value:"الحي"}),t("select",{onChange:a=>s("district",a.target.value),className:"w-full mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ",children:[e("option",{value:"",children:"أختر الحي"}),p.filter(a=>a.city_id===m).map(a=>e("option",{value:a.name,children:a.name},a.id))]}),e(l,{className:"mt-2",message:r.district_id})]}),t("div",{children:[e(o,{htmlFor:"username",value:"أسم المستخدم"}),e(d,{id:"username",type:"text",className:"mt-2 block w-full",value:i.username,onChange:a=>s("username",a.target.value),required:!0}),e(l,{className:"mt-2",message:r.username})]}),t("div",{children:[e(o,{htmlFor:"password",value:"كلمة المرور"}),e(d,{id:"password",type:"password",className:"mt-2 block w-full",value:i.password,onChange:a=>s("password",a.target.value),required:!0}),e(l,{className:"mt-2",message:r.password})]}),t("div",{children:[e(o,{htmlFor:"phone",value:"رقم التواصل"}),e(d,{id:"phone",className:"mt-2 block w-full",value:i.phone,onChange:a=>s("phone",a.target.value),required:!0,autoComplete:"phone"}),e(l,{className:"mt-2",message:r.phone})]}),t("div",{children:[e(o,{htmlFor:"googleMaps",value:"عنوان قوقل مابز"}),e(d,{id:"googleMaps",className:"mt-2 block w-full",value:i.google_maps,onChange:a=>s("google_maps",a.target.value),required:!0,autoComplete:"googleMaps"}),e(l,{className:"mt-2",message:r.google_maps})]}),t("div",{className:"flex items-center gap-4",children:[e(u,{disabled:f,children:"حفظ"}),e(j,{show:y,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:e("p",{className:"text-sm text-gray-600",children:"تم الحفظ بنجاح"})})]})]})})})})})]})}export{L as default};

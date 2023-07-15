import{W as g,j as r,a as e,d as v,b as f}from"./app-0f417571.js";import{A as N}from"./AdminAuthenticatedLayout-8b466725.js";import{I as l}from"./InputError-1c82cc16.js";import{I as n}from"./InputLabel-8af051bd.js";import{P as i}from"./PrimaryButton-db8d02aa.js";import{T as m}from"./TextInput-6268610b.js";import{t as y}from"./transition-4b5c5b4e.js";import"./AdminAuthenticatedHeader-0ef8a0d5.js";import"./ApplicationLogo-d09776dc.js";function j({auth:d}){const{data:o,setData:t,post:c,errors:s,processing:u,recentlySuccessful:h}=g({name:"",phone:"",username:"",gender:"",account_type:"",password:""}),p=a=>{a.preventDefault(),c(route("admin.user.store"))};return r(N,{user:d.user,header:r("div",{className:"flex items-center justify-between",children:[e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"إضافة العضو"}),e(v,{href:route("admin.user.index"),children:e(i,{children:"العودة"})})]}),children:[e(f,{title:"إضافة العضو"}),e("div",{className:"py-8",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e("div",{className:"p-6 text-gray-900",children:r("form",{onSubmit:p,className:"mt-6 space-y-6",children:[r("div",{className:"mb-2",children:[e(n,{htmlFor:"account_type",value:"نوع الحساب"}),r("select",{onChange:a=>t("account_type",a.target.value),name:"account_type",id:"account_type",autoFocus:!0,required:!0,className:"mt-2 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",children:[e("option",{value:"",children:"أختر نوع الحساب"}),e("option",{value:"user",children:"طالب / طالبة"}),e("option",{value:"library",children:"مكتبة"}),e("option",{value:"teacher",children:"استاذ / استاذة"}),e("option",{value:"stationery",children:"قرطاسية"})]}),e(l,{message:s.name,className:"mt-2"})]}),r("div",{className:"mb-2",children:[e(n,{htmlFor:"gender",value:"الجنس"}),r("select",{onChange:a=>t("gender",a.target.value),name:"gender",id:"gender",autoFocus:!0,required:!0,className:"mt-2 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",children:[e("option",{value:"",children:"أختر نوع الجنس"}),e("option",{value:"male",children:"ذكر"}),e("option",{value:"female",children:"أنثى"})]}),e(l,{message:s.gender,className:"mt-2"})]}),r("div",{children:[e(n,{htmlFor:"name",value:"الاسم"}),e(m,{id:"name",className:"mt-2 block w-full",value:o.name,onChange:a=>t("name",a.target.value),required:!0,autoComplete:"name"}),e(l,{className:"mt-2",message:s.name})]}),r("div",{children:[e(n,{htmlFor:"phone",value:"رقم الجوال"}),e(m,{id:"phone",className:"mt-2 block w-full",value:o.phone,onChange:a=>t("phone",a.target.value),required:!0,autoComplete:"name"}),e(l,{className:"mt-2",message:s.phone})]}),r("div",{children:[e(n,{htmlFor:"username",value:"أسم المستخدم"}),e(m,{id:"username",type:"text",className:"mt-2 block w-full",value:o.username,onChange:a=>t("username",a.target.value),required:!0}),e(l,{className:"mt-2",message:s.username})]}),r("div",{children:[e(n,{htmlFor:"password",value:"كلمة المرور"}),e(m,{id:"password",type:"password",className:"mt-2 block w-full",value:o.password,onChange:a=>t("password",a.target.value),required:!0}),e(l,{className:"mt-2",message:s.password})]}),r("div",{className:"flex items-center gap-4",children:[e(i,{disabled:u,children:"حفظ"}),e(y,{show:h,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:e("p",{className:"text-sm text-gray-600",children:"تم الحفظ بنجاح"})})]})]})})})})})]})}export{j as default};

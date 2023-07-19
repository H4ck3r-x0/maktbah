import{W as g,j as r,a as e,d as v,b as f}from"./app-922b3034.js";import{A as y}from"./AdminAuthenticatedLayout-8ecc6989.js";import{I as o}from"./InputError-d3a97534.js";import{I as l}from"./InputLabel-1e2919a6.js";import{P as d}from"./PrimaryButton-fea96342.js";import{T as i}from"./TextInput-d3fcbf7e.js";import{t as N}from"./transition-a43393a6.js";import"./AdminAuthenticatedHeader-a3910b16.js";import"./ApplicationLogo-8abf37ef.js";function j({auth:m}){const{data:n,setData:t,post:c,errors:s,processing:u,recentlySuccessful:h}=g({phone:"",username:"",gender:"",account_type:"",password:""}),p=a=>{a.preventDefault(),c(route("admin.user.store"))};return r(y,{user:m.user,header:r("div",{className:"flex items-center justify-between",children:[e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"إضافة العضو"}),e(v,{href:route("admin.user.index"),children:e(d,{children:"العودة"})})]}),children:[e(f,{title:"إضافة العضو"}),e("div",{className:"py-8",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e("div",{className:"p-6 text-gray-900",children:r("form",{onSubmit:p,className:"mt-6 space-y-6",children:[r("div",{className:"mb-2",children:[e(l,{htmlFor:"account_type",value:"نوع الحساب"}),r("select",{onChange:a=>t("account_type",a.target.value),name:"account_type",id:"account_type",autoFocus:!0,required:!0,className:"mt-2 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",children:[e("option",{value:"",children:"أختر نوع الحساب"}),e("option",{value:"user",children:"طالب / طالبة"}),e("option",{value:"library",children:"مكتبة"}),e("option",{value:"teacher",children:"استاذ / استاذة"}),e("option",{value:"stationery",children:"قرطاسية"})]}),e(o,{message:s.name,className:"mt-2"})]}),r("div",{className:"mb-2",children:[e(l,{htmlFor:"gender",value:"الجنس"}),r("select",{onChange:a=>t("gender",a.target.value),name:"gender",id:"gender",autoFocus:!0,required:!0,className:"mt-2 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",children:[e("option",{value:"",children:"أختر نوع الجنس"}),e("option",{value:"male",children:"ذكر"}),e("option",{value:"female",children:"أنثى"})]}),e(o,{message:s.gender,className:"mt-2"})]}),r("div",{children:[e(l,{htmlFor:"phone",value:"رقم الجوال"}),e(i,{id:"phone",className:"mt-2 block w-full",value:n.phone,onChange:a=>t("phone",a.target.value),required:!0,autoComplete:"name"}),e(o,{className:"mt-2",message:s.phone})]}),r("div",{children:[e(l,{htmlFor:"username",value:"أسم المستخدم"}),e(i,{id:"username",type:"text",className:"mt-2 block w-full",value:n.username,onChange:a=>t("username",a.target.value),required:!0}),e(o,{className:"mt-2",message:s.username})]}),r("div",{children:[e(l,{htmlFor:"password",value:"كلمة المرور"}),e(i,{id:"password",type:"password",className:"mt-2 block w-full",value:n.password,onChange:a=>t("password",a.target.value),required:!0}),e(o,{className:"mt-2",message:s.password})]}),r("div",{className:"flex items-center gap-4",children:[e(d,{disabled:u,children:"حفظ"}),e(N,{show:h,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:e("p",{className:"text-sm text-gray-600",children:"تم الحفظ بنجاح"})})]})]})})})})})]})}export{j as default};

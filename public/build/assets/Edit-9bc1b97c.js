import{W as u,j as a,a as e,b as p}from"./app-0f417571.js";import{A as h}from"./AdminAuthenticatedLayout-8b466725.js";import{I as f}from"./InputError-1c82cc16.js";import{I as x}from"./InputLabel-8af051bd.js";import{P as g}from"./PrimaryButton-db8d02aa.js";import{T as v}from"./TextInput-6268610b.js";import{t as N}from"./transition-4b5c5b4e.js";import"./AdminAuthenticatedHeader-0ef8a0d5.js";import"./ApplicationLogo-d09776dc.js";function E({auth:r,city:s}){const{data:m,setData:i,patch:l,errors:n,processing:o,recentlySuccessful:c}=u({name:s.name}),d=t=>{t.preventDefault(),l(route("admin.city.update",s.id))};return a(h,{user:r.user,header:e("div",{className:"flex items-center justify-between",children:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"تعديل مدن"})}),children:[e(p,{title:"تعديل مدن"}),e("div",{className:"py-8",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e("div",{className:"p-6 text-gray-900",children:a("form",{onSubmit:d,className:"mt-6 space-y-6",children:[a("div",{children:[e(x,{htmlFor:"name",value:"الاسم"}),e(v,{id:"name",className:"mt-2 block w-full",value:m.name,onChange:t=>i("name",t.target.value),required:!0,autoComplete:"name"}),e(f,{className:"mt-2",message:n.name})]}),a("div",{className:"flex items-center gap-4",children:[e(g,{disabled:o,children:"تحديث"}),e(N,{show:c,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:e("p",{className:"text-sm text-gray-600",children:"تم الحفظ بنجاح"})})]})]})})})})})]})}export{E as default};

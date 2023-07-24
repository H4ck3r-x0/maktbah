import{W as v,j as t,a as e,b as _}from"./app-cb4316c3.js";import{A as p}from"./AdminAuthenticatedLayout-dab9317b.js";import{I as n}from"./InputError-c744ba30.js";import{I as i}from"./InputLabel-701dc92e.js";import{P as g}from"./PrimaryButton-da87da90.js";import{T as s}from"./TextInput-9b2540c0.js";import{$ as f}from"./transition-3e9f14fd.js";import"./AdminAuthenticatedHeader-c96ceacd.js";import"./ApplicationLogo-d330570c.js";function q({auth:u,book:m}){const{data:r,setData:o,patch:d,errors:l,processing:c,recentlySuccessful:h}=v({book_name:m.book_name,author_name:m.author_name,edition_number:m.edition_number,volume_number:m.volume_number}),b=a=>{a.preventDefault(),d(route("admin.book.update",m.id))};return t(p,{user:u.user,header:e("div",{className:"flex items-center justify-between",children:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"إضافة كتاب"})}),children:[e(_,{title:"إضافة كتاب"}),e("div",{className:"py-8",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e("div",{className:"p-6 text-gray-900",children:t("form",{onSubmit:b,className:"mt-6 space-y-6",children:[t("div",{children:[e(i,{htmlFor:"book_name",value:"أسم الكتاب"}),e(s,{id:"book_name",className:"mt-2 block w-full",value:r.book_name,onChange:a=>o("book_name",a.target.value),required:!0,autoComplete:"book_name"}),e(n,{className:"mt-2",message:l.book_name})]}),t("div",{children:[e(i,{htmlFor:"author_name",value:"أسم المؤلف"}),e(s,{id:"author_name",className:"mt-2 block w-full",value:r.author_name,onChange:a=>o("author_name",a.target.value),required:!0,autoComplete:"author_name"}),e(n,{className:"mt-2",message:l.author_name})]}),t("div",{children:[e(i,{htmlFor:"edition_number",value:"رقم الطبعة"}),e(s,{id:"edition_number",className:"mt-2 block w-full",value:r.edition_number,onChange:a=>o("edition_number",a.target.value),required:!0,autoComplete:"edition_number"}),e(n,{className:"mt-2",message:l.edition_number})]}),t("div",{children:[e(i,{htmlFor:"volume_number",value:"رقم المجلد"}),e(s,{id:"volume_number",className:"mt-2 block w-full",value:r.volume_number,onChange:a=>o("volume_number",a.target.value),required:!0,autoComplete:"volume_number"}),e(n,{className:"mt-2",message:l.volume_number})]}),t("div",{className:"flex items-center gap-4",children:[e(g,{disabled:c,children:"تحديث"}),e(f,{show:h,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:e("p",{className:"text-sm text-gray-600",children:"تم الحفظ بنجاح"})})]})]})})})})})]})}export{q as default};
import{j as e,a as t,b as d,d as s}from"./app-922b3034.js";import{A as a}from"./AuthenticatedLayout-f9a9e7f4.js";import"./AdminAuthenticatedHeader-a3910b16.js";import"./ApplicationLogo-8abf37ef.js";import"./transition-a43393a6.js";import"./AuthenticatedLibraryHeader-038be3f5.js";function u({auth:r,library:l}){return e(a,{user:r.user,header:t("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"لوحة التحكم المكتبة"}),children:[t(d,{title:"لوحة التحكم المكتبة "}),t("div",{className:"py-1",children:t("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:t("div",{className:"overflow-hidden  sm:rounded-lg",children:e("div",{className:"p-6 text-gray-900",children:[t("h1",{className:"pb-3 text-2xl text-gray-900",children:"المكتبات / الفروع"}),e("div",{className:"flex items-center flex-wrap gap-2",children:[e("div",{className:"w-full sm:max-w-sm  p-6 bg-white border border-gray-200 rounded-lg shadow",children:[t("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 ",children:l.name}),t("div",{className:"mb-3 text-gray-700 ",children:e("ul",{className:"flex flex-col  justify-evenly gap-3 py-2",children:[e("li",{children:["المدينة ",l.city]}),e("li",{children:["الحي ",l.district]}),e("li",{children:["رقم الهاتف ",l.phone]})]})}),e("div",{className:"flex items-center justify-between",children:[t(s,{href:route("library.edit",l.id),className:"inline-flex items-center px-3 py-2 text-sm  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ",children:"تعديل المكتبة"}),t("span",{className:"bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ",children:"رئيسي"})]})]}),l.branches&&l.branches.map(i=>e("div",{className:"w-full sm:max-w-sm  p-6 bg-white border border-gray-200 rounded-lg shadow",children:[t("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 ",children:i.name}),t("div",{className:"mb-3 text-gray-700 ",children:e("ul",{className:"flex flex-col  justify-evenly gap-3 py-2",children:[e("li",{children:["المدينة ",i.city]}),e("li",{children:["الحي ",i.district]}),e("li",{children:["رقم الهاتف ",i.phone]})]})}),e("div",{className:"flex items-center justify-between",children:[t(s,{href:route("library.edit.branch",i.id),className:"inline-flex items-center px-3 py-2 text-sm  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ",children:"تعديل الفرع"}),t("span",{className:"bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ",children:"فرع"})]})]},i.id))]})]})})})})]})}export{u as default};

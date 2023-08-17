import{j as l,a as e,b as d,d as a}from"./app-16f00f28.js";import{A as n}from"./AuthenticatedLayout-fda8994a.js";import"./AdminAuthenticatedHeader-7492c730.js";import"./ApplicationLogo-123847eb.js";import"./transition-6731b11a.js";import"./AuthenticatedLibraryHeader-4cbca632.js";function u({auth:r,library:s,topSellingBooks:i}){return l(n,{user:r.user,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"لوحة التحكم المكتبة"}),children:[e(d,{title:"لوحة التحكم المكتبة "}),e("div",{className:"py-1",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"overflow-hidden  sm:rounded-lg",children:l("div",{className:"p-6 text-gray-900",children:[e("h1",{className:"pb-3 text-2xl text-gray-900",children:"المكتبات / الفروع"}),l("div",{className:"flex items-center flex-wrap gap-2",children:[l("div",{className:"w-full sm:max-w-sm  p-6 bg-white border border-gray-200 rounded-lg shadow",children:[e("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 ",children:s.name}),e("div",{className:"mb-3 text-gray-700 ",children:l("ul",{className:"flex flex-col  justify-evenly gap-3 py-2",children:[l("li",{children:["المدينة ",s.city]}),l("li",{children:["الحي ",s.district]}),l("li",{children:["رقم الهاتف ",s.phone]})]})}),l("div",{className:"flex items-center justify-between",children:[e(a,{href:route("library.edit",s.id),className:"inline-flex items-center px-3 py-2 text-sm  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ",children:"تعديل المكتبة"}),e("span",{className:"bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ",children:"رئيسي"})]})]}),s.branches&&s.branches.map(t=>l("div",{className:"w-full sm:max-w-sm  p-6 bg-white border border-gray-200 rounded-lg shadow",children:[e("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 ",children:t.name}),e("div",{className:"mb-3 text-gray-700 ",children:l("ul",{className:"flex flex-col  justify-evenly gap-3 py-2",children:[l("li",{children:["المدينة ",t.city]}),l("li",{children:["الحي ",t.district]}),l("li",{children:["رقم الهاتف ",t.phone]})]})}),l("div",{className:"flex items-center justify-between",children:[e(a,{href:route("library.edit.branch",t.id),className:"inline-flex items-center px-3 py-2 text-sm  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ",children:"تعديل الفرع"}),e("span",{className:"bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ",children:"فرع"})]})]},t.id))]})]})})})}),e("div",{className:"py-6",children:l("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e("h1",{className:"text-xl mb-2 font-semibold text-gray-600",children:"الكتب أكثر طلبا"}),e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:l("div",{className:"mx-auto grid grid-cols-1 sm:max-w-full sm:mx-0 sm:grid-cols-3 p-6 gap-2 flex-wrap text-gray-900",children:[!i.length&&e("h1",{children:"لا يوجد."}),i.map(t=>l("div",{className:"rounded-lg shadow-lg border",children:[e("div",{className:"flex items-center justify-between bg-indigo-300",children:e("h1",{className:"p-2 text-white text-xl whitespace-nowrap",children:t.book_name})}),l("div",{className:"flex flex-row justify-between gap-3 p-3",children:[l("div",{className:"flex flex-col items-center gap-3",children:[e("h1",{className:"text-lg text-gray-600",children:"إجمالي المبيعات"}),l("span",{className:"text-gray-500 font-semibold",children:[t.benefits||0," ريال"]})]}),l("div",{className:"flex flex-col items-center gap-3",children:[e("h1",{className:"text-lg text-gray-600",children:"عدد الطلبات"}),e("span",{className:"text-gray-500 font-semibold",children:t.total_sold||0})]})]})]},t.id))]})})]})})]})}export{u as default};

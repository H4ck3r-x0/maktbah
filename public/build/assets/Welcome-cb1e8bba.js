import{j as t,F as i,a as e,b as l,d as s}from"./app-cb4316c3.js";import{A as a}from"./AdminAuthenticatedHeader-c96ceacd.js";import{A as n,a as m}from"./AuthenticatedLibraryHeader-94a27a78.js";import{G as d}from"./GuestHeader-71bdff3b.js";import"./ApplicationLogo-d330570c.js";import"./transition-3e9f14fd.js";function p({auth:r}){return t(i,{children:[e(l,{title:"الصفحة الرئيسية"}),t("div",{className:" bg-white",children:[e("div",{className:"",children:(()=>r.user&&r.user.role==="admin"?e(a,{user:r.user}):r.user&&r.user.role==="user"?e(n,{user:r.user}):r.user&&r.user.role==="library"?e(m,{user:r.user}):e(d,{}))()}),t("div",{className:"max-w-7xl justify-center items-center flex flex-col mx-auto sm:px-6 lg:px-8 mt-8 px-6 ",children:[t("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[t("div",{className:"flex flex-col items-center justify-center",children:[e("h1",{className:"text-3xl sm:text-4xl text-indigo-600 font-semibold",children:"مرحبا بكم في متجر راحة"}),e("p",{className:"mt-4 text-lg tracking-wide font-semibold text-gray-500 leading-10 text-center",children:"راحة هو المكان المثالي للطلاب والمكتبات والمعلمين للحصول على الكتب والمذكرات. يمكنك العثور على كل ما تحتاجه في مكان واحد، ويمكنك التأكد من أنك تحصل على أفضل الأسعار. ونأمل أن يساعدك موقع راحة على تحقيق أقصى استفادة من تعليمك، وتوفير الراحة التي تحتاجها"})]}),e("img",{src:"/images/welcomeImage.svg",alt:"",className:"pb-4 w-96 h-96"})]}),e("div",{className:"mt-6 mb-20 sm:items-center justify-center sm:hidden sm:mt-3 sm:ml-6",children:t("div",{className:"flex items-center gap-3",children:[e(s,{href:route("register"),children:e("button",{className:"bg-indigo-600 px-8 py-2 text-white font-semibold rounded-2xl hover:bg-indigo-700 shadow-lg transition-all",children:"إنضم إلينا الأن"})}),e(s,{href:route("login"),children:e("button",{className:"bg-white px-8 py-2 text-gray-800 border font-semibold rounded-2xl hover:bg-gray-100 shadow-sm transition-all",children:"تسجيل الدخول"})})]})})]})]})]})}export{p as default};

import{j as a,a as m,b as i}from"./app-0f417571.js";import{A as t}from"./AuthenticatedLayout-1a784295.js";import d from"./UpdatePasswordForm-7169457a.js";import l from"./UpdateProfileInformationForm-ba3068ef.js";import p from"./UpdatePhoneForm-2d97bf0a.js";import c from"./UpdateMajorForm-1d85bce8.js";import"./AdminAuthenticatedHeader-0ef8a0d5.js";import"./ApplicationLogo-d09776dc.js";import"./transition-4b5c5b4e.js";import"./AuthenticatedLibraryHeader-2897ad78.js";import"./InputError-1c82cc16.js";import"./InputLabel-8af051bd.js";import"./PrimaryButton-db8d02aa.js";import"./TextInput-6268610b.js";import"./defineProperty-4870f27f.js";import"./typeof-7fd5df1e.js";function E({auth:e,majors:r,cities:s,districts:o}){return a(t,{user:e.user,header:m("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"تحديث الملف الشخصي"}),children:[m(i,{title:"تحديث الملف الشخصي"}),m("div",{className:"py-12",children:a("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:[m("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:m(l,{className:"max-w-xl",cities:s,districts:o})}),m("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:m(p,{className:"max-w-xl"})}),e.user.role=="user"&&m("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:m(c,{majors:r,className:"max-w-xl"})}),m("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:m(d,{className:"max-w-xl"})})]})})]})}export{E as default};

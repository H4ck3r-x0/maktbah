import{j as a,a as m,b as t}from"./app-32c80236.js";import{A as d}from"./AuthenticatedLayout-a268f854.js";import l from"./UpdatePasswordForm-52ff8b62.js";import p from"./UpdateProfileInformationForm-f1cd1db3.js";import c from"./UpdatePhoneForm-f9fa9bf2.js";import n from"./UpdateMajorForm-b6abc6a7.js";import"./AdminAuthenticatedHeader-09da165c.js";import"./ApplicationLogo-d72231db.js";import"./transition-344076e6.js";import"./AuthenticatedLibraryHeader-55de1915.js";import"./InputError-a2068c9f.js";import"./InputLabel-178f5e81.js";import"./PrimaryButton-7d05a6f7.js";import"./TextInput-01edf1da.js";import"./defineProperty-4870f27f.js";import"./typeof-7fd5df1e.js";function I({auth:e,majors:r,cities:s,districts:o,universities:i}){return a(d,{user:e.user,header:m("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"تحديث الملف الشخصي"}),children:[m(t,{title:"تحديث الملف الشخصي"}),m("div",{className:"py-12",children:a("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:[m("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:m(p,{className:"max-w-xl",cities:s,districts:o})}),m("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:m(c,{className:"max-w-xl"})}),e.user.role=="user"&&m("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:m(n,{majors:r,universities:i,className:"max-w-xl"})}),m("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:m(l,{className:"max-w-xl"})})]})})]})}export{I as default};
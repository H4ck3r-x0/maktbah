import{j as a,a as m,b as t}from"./app-922b3034.js";import{A as d}from"./AuthenticatedLayout-f9a9e7f4.js";import l from"./UpdatePasswordForm-596d2b98.js";import p from"./UpdateProfileInformationForm-547a0042.js";import c from"./UpdatePhoneForm-cdf0f911.js";import n from"./UpdateMajorForm-a084a468.js";import"./AdminAuthenticatedHeader-a3910b16.js";import"./ApplicationLogo-8abf37ef.js";import"./transition-a43393a6.js";import"./AuthenticatedLibraryHeader-038be3f5.js";import"./InputError-d3a97534.js";import"./InputLabel-1e2919a6.js";import"./PrimaryButton-fea96342.js";import"./TextInput-d3fcbf7e.js";import"./defineProperty-4870f27f.js";import"./typeof-7fd5df1e.js";function I({auth:e,majors:r,cities:s,districts:o,universities:i}){return a(d,{user:e.user,header:m("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"تحديث الملف الشخصي"}),children:[m(t,{title:"تحديث الملف الشخصي"}),m("div",{className:"py-12",children:a("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:[m("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:m(p,{className:"max-w-xl",cities:s,districts:o})}),m("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:m(c,{className:"max-w-xl"})}),e.user.role=="user"&&m("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:m(n,{majors:r,universities:i,className:"max-w-xl"})}),m("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:m(l,{className:"max-w-xl"})})]})})]})}export{I as default};

import{j as a,a as m,b as t}from"./app-3fbc7353.js";import{A as d}from"./AuthenticatedLayout-d8dfbac9.js";import l from"./UpdatePasswordForm-1d27ab04.js";import p from"./UpdateProfileInformationForm-26b78af5.js";import c from"./UpdatePhoneForm-8fd8810e.js";import n from"./UpdateMajorForm-dcccfefe.js";import"./AdminAuthenticatedHeader-e6060e2b.js";import"./ApplicationLogo-c5ebf159.js";import"./transition-c2bd286f.js";import"./AuthenticatedLibraryHeader-0c4afb20.js";import"./InputError-b6b9911e.js";import"./InputLabel-dbcd5822.js";import"./PrimaryButton-83dd7da4.js";import"./TextInput-7b8861a4.js";import"./defineProperty-4870f27f.js";import"./typeof-7fd5df1e.js";function I({auth:e,majors:r,cities:s,districts:o,universities:i}){return a(d,{user:e.user,header:m("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"تحديث الملف الشخصي"}),children:[m(t,{title:"تحديث الملف الشخصي"}),m("div",{className:"py-12",children:a("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:[m("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:m(p,{className:"max-w-xl",cities:s,districts:o})}),m("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:m(c,{className:"max-w-xl"})}),e.user.role=="user"&&m("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:m(n,{majors:r,universities:i,className:"max-w-xl"})}),m("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:m(l,{className:"max-w-xl"})})]})})]})}export{I as default};
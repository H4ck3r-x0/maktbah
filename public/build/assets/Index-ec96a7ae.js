import{j as t,a as e,b as l}from"./app-2a477420.js";import{P as i}from"./PrimaryButton-3fcd8d7d.js";import{A as c}from"./AuthenticatedLayout-93072b9c.js";import"./AdminAuthenticatedHeader-5f24ccc6.js";import"./ApplicationLogo-7ecee1c1.js";import"./transition-04b927ac.js";import"./AuthenticatedLibraryHeader-2d9818c3.js";function w({auth:r,notes:s}){return t(c,{user:r.user,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"المذكرات"}),children:[e(l,{title:"المذكرات"}),e("div",{className:"py-6",children:e("div",{className:"w-full items-center gap-3 px-2",children:e("div",{className:"relative overflow-x-auto",children:t("table",{className:"w-full text-xs sm:text-lg text-right text-gray-500 shadow border",children:[e("thead",{className:"text-xs sm:text-lg text-gray-700  border ",children:t("tr",{children:[e("th",{scope:"col",className:"px-2 py-3 whitespace-nowrap",children:"صاحب المذكرة"}),e("th",{scope:"col",className:"px-2 py-3 whitespace-nowrap",children:"أسم المذكرة"})]})}),e("tbody",{children:s.map(a=>t("tr",{className:"bg-white ",children:[e("th",{scope:"row",className:"px-2 py-4 whitespace-nowrap",children:a.user.username}),e("td",{className:"px-2 py-4 whitespace-nowrap",children:a.name}),e("td",{className:"px-2 py-4 whitespace-nowrap",children:e("a",{href:a.url,target:"_blank",children:e(i,{className:"text-xs sm:text-sm",children:"مشاهدة المذكرة"})})})]},a.id))})]})})})})]})}export{w as default};
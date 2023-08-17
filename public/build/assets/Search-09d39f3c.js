import{q as l,W as u,r as d,j as r,a as e,b as g,d as x}from"./app-16f00f28.js";import{A as f}from"./AuthenticatedLayout-fda8994a.js";import{d as v}from"./debounce-e9946d12.js";import N from"./Pagination-95a42628.js";import{m as y}from"./moment-with-locales-879f462f.js";import{P as w}from"./PrimaryButton-5ef67552.js";import"./AdminAuthenticatedHeader-7492c730.js";import"./ApplicationLogo-123847eb.js";import"./transition-6731b11a.js";import"./AuthenticatedLibraryHeader-4cbca632.js";function Y({auth:n,notes:t}){const m=l().props.filters,i=l().props.currentPage,{data:s,setData:o,get:h}=u({search:m.search}),p=()=>{h(route("search.notes.index",{search:s.search,page:i}),{preserveScroll:!0,preserveState:!0,replace:!0})},c=d.useCallback(v(p,500),[s.search,i]);return d.useEffect(()=>(c(),c.cancel),[s.search,c]),r(f,{user:n.user,children:[e(g,{title:"البحث عن المذكرات"}),e("div",{className:"py-4",children:r("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e("div",{className:"w-full  sm:inline-flex ml-4 items-center gap-3 px-6 ",children:e("input",{value:s.search||"",onChange:a=>o("search",a.target.value),type:"text",className:"w-full p-3  border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",placeholder:"إبحث بإسم المذكرة، الأستاذ/ه ..."})}),e("div",{className:"overflow-hidden sm:rounded-lg",children:r("div",{className:"p-6 text-gray-900",children:[r("div",{className:"container mx-auto grid grid-cols-1 sm:grid-cols-1  gap-4",children:[!t.data.length&&e("div",{children:e("h1",{className:"text-center sm:text-right text-lg sm:text-xl text-gray-900",children:"لا يوجد تطابق لبحثك، حاول مره اخرى!"})}),t.data.map(a=>e("div",{className:"grid grid-cols-1 gap-4",children:r("div",{className:"bg-white p-4 rounded-md shadow-md",children:[r("div",{className:"flex flex-col gap-2",children:[r("h1",{className:"text-xl text-gray-800",children:[e("span",{className:"font-semibold text-gray-700",children:"إسم المذكرة :"}),r("span",{children:[" ",a.name]})]}),r("h4",{children:[e("span",{className:"text-sm text-gray-500",children:y(a.created_at).locale("ar").format("MMMM Do YYYY")}),e("span",{children:" - "}),e("span",{className:"text-sm text-gray-500",children:a.user.username})]})]}),e("div",{className:"py-4",children:e("p",{children:a.description})}),e("div",{className:"flex justify-end py-3",children:e(x,{href:route("search.stationeries.index",a.id),children:e(w,{children:r("div",{className:"flex items-center gap-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"})}),"أختر القرطاسية للطباعة"]})})})})]})},a.id))]}),e(N,{class:"mt-6",links:t.links})]})})]})})]})}export{Y as default};

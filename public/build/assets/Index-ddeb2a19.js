import{q as v,W as _,r as m,j as s,a as t,b as C,d as D,g as p}from"./app-16f00f28.js";import{D as k}from"./DangerButton-e377c4e8.js";import{P as h}from"./PrimaryButton-5ef67552.js";import{S as j}from"./SecondaryButton-4e1e0e9b.js";import{A as M}from"./AuthenticatedLayout-fda8994a.js";import{m as O}from"./moment-with-locales-879f462f.js";import{d as Y}from"./debounce-e9946d12.js";import"./AdminAuthenticatedHeader-7492c730.js";import"./ApplicationLogo-123847eb.js";import"./transition-6731b11a.js";import"./AuthenticatedLibraryHeader-4cbca632.js";function G({auth:u,orders:x,STATUS:o}){const n=v().props.filters,{data:r,setData:i,get:y,reset:f}=_({search:n.search,status:n.status}),g=()=>{y(route("order.stationery.index",{search:r.search,status:r.status}),{preserveScroll:!0,preserveState:!0,replace:!0})},c=m.useCallback(Y(g,500),[r.search,r.status]);m.useEffect(()=>(c(),c.cancel),[r.search,r.status,c]);const N=e=>{i("status",e.target.value)},b=(e,a)=>{e.preventDefault(),p.post(route("order.stationery.cancel",a))},w=(e,a)=>{e.preventDefault(),p.post(route("order.stationery.restore",a))};return s(M,{user:u.user,header:t("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"الطلبات"}),children:[t(C,{title:"الطلبات"}),t("div",{className:"py-6",children:s("div",{className:"w-full  items-center gap-3 px-2",children:[s("div",{className:"w-full flex flex-col sm:flex-row ml-4  gap-3 pb-4 ",children:[t("input",{value:r.search||"",onChange:e=>i("search",e.target.value),type:"text",className:"w-full sm:max-w-xl md:max-w-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",placeholder:"إبحث برقم الطلب ، اسم المكتبة"}),s("select",{onChange:N,className:"block  border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",children:[t("option",{value:"",children:"إختر حالة الطلب"}),Object.keys(o).map((e,a)=>t("option",{value:e,children:o[e].message.ar},a))]}),t(h,{onClick:()=>f(),children:"إعادة تعيين"})]}),t("div",{className:"relative overflow-x-auto",children:s("table",{className:"w-full text-xs sm:text-lg text-right text-gray-500 shadow border",children:[t("thead",{className:"text-xs sm:text-lg text-gray-700  border ",children:s("tr",{children:[t("th",{scope:"col",className:"px-2 py-3",children:"رقم الطلب"}),t("th",{scope:"col",className:"px-2 py-3",children:"القرطاسية"}),t("th",{scope:"col",className:"px-2 py-3",children:"حالة الطلب"}),t("th",{scope:"col",className:"px-2 py-3",children:"إجمالي الطلب"}),t("th",{scope:"col",className:"px-2 py-3",children:"تاريخ الانشاء"}),t("th",{scope:"col",className:"px-2 py-3",children:"العمليات"})]})}),t("tbody",{children:x.map(e=>{var a,d;return s("tr",{className:"bg-white ",children:[t("th",{scope:"row",className:"px-2 py-4   whitespace-nowrap ",children:e.id}),t("th",{scope:"row",className:"px-2 py-4  whitespace-nowrap ",children:((a=e.stationery)==null?void 0:a.name)||((d=e.stationery_branch)==null?void 0:d.name)}),t("td",{className:"px-2 py-4",style:{color:`${e.current_status&&e.model_status[e.current_status].color}`},children:e.model_status[e.current_status].message.ar}),s("td",{className:"px-2 py-4",children:[e.total," ريال"]}),t("td",{className:"px-2 py-4",children:O(e.created_at).locale("ar").format("MMMM Do YYYY")}),s("td",{className:"flex items-center gap-2 px-2 py-4",children:[t(D,{href:route("order.stationery.show",e.id),children:t(h,{className:"text-xs sm:text-sm",children:"التفاصيل"})}),e.current_status==="canceled_by_user"?t(j,{className:"text-xs sm:text-sm",onClick:l=>w(l,e.id),children:"إستعادة الطلب"}):e.current_status!=="confirmed"&&e.current_status!=="canceled_by_stationery"&&t(k,{className:"text-xs sm:text-sm",onClick:l=>b(l,e.id),children:"إلغاء الطلب"})]})]},e.id)})})]})})]})})]})}export{G as default};

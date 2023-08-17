import{q as Q,W as Z,r as c,j as t,a as i,d as $,b as k,g as h}from"./app-16f00f28.js";import{P as f}from"./PrimaryButton-5ef67552.js";import{A as ee}from"./AuthenticatedLayout-fda8994a.js";import{D as N}from"./DangerButton-e377c4e8.js";import{S as W}from"./SecondaryButton-4e1e0e9b.js";import{d as re}from"./debounce-e9946d12.js";import ie from"./Pagination-95a42628.js";import{I as ae,_ as b}from"./index-95a40f27.js";import"./AdminAuthenticatedHeader-7492c730.js";import"./ApplicationLogo-123847eb.js";import"./transition-6731b11a.js";import"./AuthenticatedLibraryHeader-4cbca632.js";function pe({auth:z,books:v,addedBooks:o}){const G=Q().props.filters,w=Q().props.currentPage,{data:g,setData:H,get:J}=Z({search:G.search}),[p,K]=c.useState(!1),[n,u]=c.useState([]),[C,S]=c.useState(""),[q,B]=c.useState(""),[R,j]=c.useState(""),[P,x]=c.useState(null);c.useEffect(()=>{o.length>0&&u(o)},[o]);const T=e=>{H("search",e.target.value)},U=()=>{J(route("branch.book.create",{search:g.search,page:w}),{preserveScroll:!0,preserveState:!0,replace:!0})},_=c.useCallback(re(U,500),[g.search,w]);c.useEffect(()=>(_(),_.cancel),[g.search,_]);const A=(e,a)=>{e.preventDefault();const{book_id:s,qty:l,price:d,offer:r}=n.filter(m=>m.book_id===a)[0];h.post(route("branch.book.update",a),{book_id:s,qty:l,price:d,offer:r,ad_image:P},{preserveScroll:!0,onError:m=>{let y="";m.ad_image&&(x(null),y=m.ad_image),m.price&&(y=m.price),m.qty&&(y=m.qty),b.error(y,{duration:4e3,position:"top-center",className:"",ariaProps:{role:"status","aria-live":"polite"}})}})},I=e=>{if(q===""||C===""){b.error("الرجاء اكمال جميع بيانات الكتاب",{duration:4e3,position:"top-center",className:"",ariaProps:{role:"status","aria-live":"polite"}});return}h.post(route("branch.book.store"),{book_id:e,qty:C,price:q,offer:R,ad_image:P},{preserveScroll:!0,onSuccess:()=>{x(null),B(""),j(""),S("")},onError:a=>{let s="";a.ad_image&&(x(null),s=a.ad_image),a.price&&(s=a.price),a.qty&&(s=a.qty),b.error(s,{duration:4e3,position:"top-center",className:"",ariaProps:{role:"status","aria-live":"polite"}})}})},V=(e,a)=>{e.preventDefault(),h.delete(route("branch.book.deleteBookAdImage",a),{preserveScroll:!0,onSuccess:()=>{}})},D=(e,a)=>{e.preventDefault(),h.delete(route("branch.book.destroy",a),{preserveScroll:!0,onSuccess:()=>{u(s=>s.filter(l=>l.book_id!==a))}})},E=(e,a)=>{e.preventDefault(),h.post(route("branch.book.restore",a),{preserveScroll:!0,onSuccess:()=>{u(s=>s.filter(l=>l.book_id!==a))}})},L=(e,a)=>{const{value:s}=e.target;S(s),s!==""&&u(l=>l.map(d=>d.book_id===a?{...d,qty:s}:d))},M=(e,a)=>{const{value:s}=e.target;B(s),s!==""&&u(l=>l.map(d=>d.book_id===a?{...d,price:s}:d))},F=(e,a)=>{const{value:s}=e.target;j(s),s!==""&&u(l=>l.map(d=>d.book_id===a?{...d,offer:s}:d))},O=(e,a)=>{x(e.target.files[0]),e.target.files[0]&&u(s=>s.map(l=>l.book_id===a?{...l,ad_image:e.target.files[0]}:l))},X=o.map(e=>e.book_id),Y=v.data.filter(e=>X.includes(e.id));return t(ee,{user:z.user,header:t("div",{className:"flex items-center justify-between",children:[i("h2",{className:"flex flex-col gap-2 font-semibold text-xl text-gray-800 leading-tight",children:i("span",{children:"إضافة كتاب جديد"})}),i($,{href:route("branch.dashboard"),children:i(f,{children:"العودة"})})]}),children:[i(k,{title:"إضافة كتاب جديد"}),t("div",{className:"py-4",children:[i(ae,{}),t("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[t("div",{className:"w-full flex flex-col items-center sm:flex-row gap-3 px-6",children:[i("input",{className:" w-full sm:w-1/2  border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",type:"text",id:"search",name:"search",value:g.search||"",onChange:T,autoFocus:!0,placeholder:"ابحث بإسم الكتاب او الكاتب ..."}),i(f,{onClick:()=>K(!p),children:p===!1?"إظهار الكتب المظافة":"إخفاء الكتب المظافة"})]}),i("div",{className:" overflow-hidden sm:rounded-lg",children:t("div",{className:"p-6 text-gray-900",children:[t("div",{className:"grid grid-cols-1 sm:grid-cols-2  gap-3",children:[p&&Y.map(e=>{var a,s,l,d;return i("div",{className:"max-w-lg bg-white border border-gray-200 rounded-lg shadow h-full",children:t("div",{className:"flex flex-col p-5 h-full",children:[i("h5",{className:"mb-1 text-xl font-semibold text-gray-900",children:e.book_name}),i("div",{className:"py-2 flex-1",children:t("ul",{className:"flex itmes-center   gap-2 mb-2",children:[t("li",{className:"mb-2 text-gray-700",children:[i("strong",{className:"text-gray-700",children:"الكاتب:"})," ",e.author_name]}),t("li",{className:"mb-2 text-gray-700",children:[i("strong",{className:"text-gray-700",children:"رقم الطبعة:"})," ",e.edition_number]}),t("li",{className:"text-gray-700",children:[i("strong",{className:"text-gray-700",children:"رقم المجلد:"})," ",e.volume_number]})]})}),t("div",{className:"flex items-center justify-center flex-wrap gap-2",children:[i("input",{onChange:r=>L(r,e.id),type:"number",className:"w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",min:1,defaultValue:((a=n.find(r=>r.book_id===e.id))==null?void 0:a.qty)||"",placeholder:"الكمية"}),i("input",{onChange:r=>M(r,e.id),type:"number",className:"w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",min:1,defaultValue:((s=n.find(r=>r.book_id===e.id))==null?void 0:s.price)||"",placeholder:"السعر"}),i("input",{onChange:r=>F(r,e.id),type:"text",className:"w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",min:1,defaultValue:((l=n.find(r=>r.book_id===e.id))==null?void 0:l.offer)||"",placeholder:"عرض إضافي"}),t("div",{className:"py-4 flex items-center justify-between gap-2 w-full",children:[t("label",{className:"flex  items-center justify-center w-full  py-2 px-4 border border-gray-300 rounded-md shadow-sm transition duration-300 focus:border-indigo-500 focus:ring-indigo-500 hover:border-indigo-500 focus:outline-none hover:cursor-pointer",children:[t("div",{className:"flex flex-col items-center gap-1",children:[i("span",{className:"mr-2",children:"أختر صورة الأعلان"}),i("span",{className:"text-xs text-gray-400 font-semibold mr-2",children:"حجم الصورة يجب ان يكون 2 MB"})]}),i("input",{name:"adImage",onChange:r=>O(r,e.id),type:"file",className:"hidden"})]}),i("div",{className:" whitespace-nowrap",children:(d=n.find(r=>r.book_id===e.id))!=null&&d.ad_image?i(f,{className:"py-5",onClick:r=>V(r,e.id),children:"حذف الاعلان"}):null})]})]}),t("div",{className:"flex pt-2",children:[t("div",{className:"flex-1",children:[!o.some(r=>r.book_id==e.id)&&i(f,{onClick:()=>I(e.id),children:"أضف"}),o.some(r=>r.book_id==e.id)&&i(W,{onClick:r=>A(r,e.id),children:"تحديث"})]}),n.some(r=>r.book_id===e.id)&&i("div",{children:n.some(r=>r.book_id===e.id&&r.deleted_at===null)?i(N,{onClick:r=>D(r,e.id),children:"حذف"}):i(N,{onClick:r=>E(r,e.id),children:"إستعادة"})})]})]})},e.id)}),!p&&v.data.map(e=>{var a,s,l,d;return i("div",{className:"max-w-lg bg-white border border-gray-200 rounded-lg shadow h-full",children:t("div",{className:"flex flex-col p-5 h-full",children:[i("h5",{className:"mb-1 text-xl font-semibold text-gray-900",children:e.book_name}),i("div",{className:"py-2 flex-1",children:t("ul",{className:"flex itmes-center   gap-2 mb-2",children:[t("li",{className:"mb-2 text-gray-700",children:[i("strong",{className:"text-gray-700",children:"الكاتب:"})," ",e.author_name]}),t("li",{className:"mb-2 text-gray-700",children:[i("strong",{className:"text-gray-700",children:"رقم الطبعة:"})," ",e.edition_number]}),t("li",{className:"text-gray-700",children:[i("strong",{className:"text-gray-700",children:"رقم المجلد:"})," ",e.volume_number]})]})}),t("div",{className:"flex items-center justify-center flex-wrap gap-2",children:[i("input",{onChange:r=>L(r,e.id),type:"number",className:"w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",min:1,defaultValue:((a=n.find(r=>r.book_id===e.id))==null?void 0:a.qty)||"",placeholder:"الكمية"}),i("input",{onChange:r=>M(r,e.id),type:"number",className:"w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",min:1,defaultValue:((s=n.find(r=>r.book_id===e.id))==null?void 0:s.price)||"",placeholder:"السعر"}),i("input",{onChange:r=>F(r,e.id),type:"text",className:"w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",min:1,defaultValue:((l=n.find(r=>r.book_id===e.id))==null?void 0:l.offer)||"",placeholder:"عرض إضافي"}),t("div",{className:"py-4 flex items-center justify-between gap-2 w-full",children:[t("label",{className:"flex  items-center justify-center w-full  py-2 px-4 border border-gray-300 rounded-md shadow-sm transition duration-300 focus:border-indigo-500 focus:ring-indigo-500 hover:border-indigo-500 focus:outline-none hover:cursor-pointer",children:[t("div",{className:"flex flex-col items-center gap-1",children:[i("span",{className:"mr-2",children:"أختر صورة الأعلان"}),i("span",{className:"text-xs text-gray-400 font-semibold mr-2",children:"حجم الصورة يجب ان يكون 2 MB"})]}),i("input",{name:"adImage",onChange:r=>O(r,e.id),type:"file",className:"hidden"})]}),i("div",{className:" whitespace-nowrap",children:(d=n.find(r=>r.book_id===e.id))!=null&&d.ad_image?i(f,{className:"py-5",onClick:r=>V(r,e.id),children:"حذف الاعلان"}):null})]})]}),t("div",{className:"flex pt-2",children:[t("div",{className:"flex-1",children:[!o.some(r=>r.book_id==e.id)&&i(f,{onClick:()=>I(e.id),children:"أضف"}),o.some(r=>r.book_id==e.id)&&i(W,{onClick:r=>A(r,e.id),children:"تحديث"})]}),n.some(r=>r.book_id===e.id)&&i("div",{children:n.some(r=>r.book_id===e.id&&r.deleted_at===null)?i(N,{onClick:r=>D(r,e.id),children:"حذف"}):i(N,{onClick:r=>E(r,e.id),children:"إستعادة"})})]})]})},e.id)})]}),i(ie,{links:v.links})]})})]})]})]})}export{pe as default};

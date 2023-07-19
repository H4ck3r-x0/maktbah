import{q as w,W as J,r as n,j as l,a as t,d as K,b as M,f as u}from"./app-922b3034.js";import{P as h}from"./PrimaryButton-fea96342.js";import{A as R}from"./AuthenticatedLayout-f9a9e7f4.js";import{D as C}from"./DangerButton-96612a64.js";import{S as T}from"./SecondaryButton-2ab3f5c4.js";import{d as U}from"./debounce-2238ed6a.js";import X from"./Pagination-a7668a46.js";import"./AdminAuthenticatedHeader-a3910b16.js";import"./ApplicationLogo-8abf37ef.js";import"./transition-a43393a6.js";import"./AuthenticatedLibraryHeader-038be3f5.js";function ce({auth:S,books:g,addedBooks:o}){const q=w().props.filters,p=w().props.currentPage,{data:m,setData:j,get:B}=J({search:q.search}),[c,d]=n.useState([]),[x,y]=n.useState(""),[v,N]=n.useState(""),[P,b]=n.useState(""),[A,_]=n.useState(null);n.useEffect(()=>{o.length>0&&d(o)},[o]);const D=e=>{j("search",e.target.value)},E=()=>{B(route("book.create",{search:m.search,page:p}),{preserveScroll:!0,preserveState:!0,replace:!0})},f=n.useCallback(U(E,500),[m.search,p]);n.useEffect(()=>(f(),f.cancel),[m.search,f]);const V=e=>{e.preventDefault(),u.post(route("book.store"),{libBooks:c})},k=(e,i)=>{e.preventDefault();const{book_id:a,qty:s,price:r,ad_image:H,offer:Y}=c.filter(I=>I.book_id===i)[0];u.post(route("book.update",i),{book_id:a,qty:s,price:r,ad_image:H},{preserveScroll:!0})},L=e=>{if(v===""||x===""){alert("الرجاء اضافه اكمال جميع بيانات الكتاب");return}const i=o.find(s=>s.book_id===e),a=i?i.deleted_at:null;d(s=>[...s,{book_id:e,qty:x,price:v,offer:P,ad_image:A,deleted_at:a}]),y(""),N(""),b(""),_(null)},O=(e,i)=>{e.preventDefault(),u.delete(route("book.destroy",i),{preserveScroll:!0,onSuccess:()=>{d(a=>a.filter(s=>s.book_id!==i))}})},Q=(e,i)=>{e.preventDefault(),u.post(route("book.restore",i),{preserveScroll:!0,onSuccess:()=>{d(a=>a.filter(s=>s.book_id!==i))}})},W=(e,i)=>{const{value:a}=e.target;y(a),a!==""&&d(s=>s.map(r=>r.book_id===i?{...r,qty:a}:r))},z=(e,i)=>{const{value:a}=e.target;N(a),a!==""&&d(s=>s.map(r=>r.book_id===i?{...r,price:a}:r))},F=(e,i)=>{const{value:a}=e.target;b(a),a!==""&&d(s=>s.map(r=>r.book_id===i?{...r,offer:a}:r))},G=(e,i)=>{_(e.target.files[0]),e.target.files[0]&&d(a=>a.map(s=>s.book_id===i?{...s,ad_image:e.target.files[0]}:s))};return l(R,{user:S.user,header:l("div",{className:"flex items-center justify-between",children:[t("h2",{className:"flex flex-col gap-2 font-semibold text-xl text-gray-800 leading-tight",children:t("span",{children:"إضافة كتاب جديد"})}),t(K,{href:route("library.dashboard"),children:t(h,{children:"العودة"})})]}),children:[t(M,{title:"إضافة كتاب جديد"}),t("div",{className:"py-4",children:l("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[l("div",{className:" max-w-2xl  px-6 flex items-center gap-3",children:[t("div",{className:"flex-1",children:t("input",{className:" w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",type:"text",id:"search",name:"search",value:m.search||"",autoComplete:"search",onChange:D,placeholder:"ابحث بإسم الكتاب او الكاتب ..."})}),t("form",{onSubmit:V,children:t(h,{children:"إضافة الكتب"})})]}),t("div",{className:" overflow-hidden sm:rounded-lg",children:l("div",{className:"p-6 text-gray-900",children:[t("div",{className:"grid grid-cols-1 sm:grid-cols-2  gap-3",children:g.data.map(e=>{var i,a,s;return t("div",{className:"max-w-lg bg-white border border-gray-200 rounded-lg shadow h-full",children:l("div",{className:"flex flex-col p-5 h-full",children:[t("h5",{className:"mb-1 text-xl font-semibold text-gray-900",children:e.book_name}),t("div",{className:"py-2 flex-1",children:l("ul",{className:"flex itmes-center   gap-2 mb-2",children:[l("li",{className:"mb-2 text-gray-700",children:[t("strong",{className:"text-gray-700",children:"الكاتب:"})," ",e.author_name]}),l("li",{className:"mb-2 text-gray-700",children:[t("strong",{className:"text-gray-700",children:"رقم الطبعة:"})," ",e.edition_number]}),l("li",{className:"text-gray-700",children:[t("strong",{className:"text-gray-700",children:"رقم المجلد:"})," ",e.volume_number]})]})}),l("div",{className:"flex items-center justify-center flex-wrap gap-2",children:[t("input",{onChange:r=>W(r,e.id),type:"number",className:"w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",min:1,defaultValue:((i=c.find(r=>r.book_id===e.id))==null?void 0:i.qty)||"",placeholder:"الكمية"}),t("input",{onChange:r=>z(r,e.id),type:"number",className:"w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",min:1,defaultValue:((a=c.find(r=>r.book_id===e.id))==null?void 0:a.price)||"",placeholder:"السعر"}),t("input",{onChange:r=>F(r,e.id),type:"text",className:"w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",min:1,defaultValue:((s=c.find(r=>r.book_id===e.id))==null?void 0:s.offer)||"",placeholder:"عرض إضافي"}),t("div",{className:"py-4 w-full",children:l("label",{className:"flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm transition duration-300 focus:border-indigo-500 focus:ring-indigo-500 hover:border-indigo-500 focus:outline-none hover:cursor-pointer",children:[t("span",{className:"mr-2",children:"أختر صورة الأعلان"}),t("input",{name:"adImage",onChange:r=>G(r,e.id),type:"file",className:"hidden"})]})})]}),l("div",{className:"flex pt-2",children:[l("div",{className:"flex-1",children:[!o.some(r=>r.book_id==e.id)&&t(h,{onClick:()=>L(e.id),children:"أضف"}),o.some(r=>r.book_id==e.id)&&t(T,{onClick:r=>k(r,e.id),children:"تحديث"})]}),c.some(r=>r.book_id===e.id)&&t("div",{children:c.some(r=>r.book_id===e.id&&r.deleted_at===null)?t(C,{onClick:r=>O(r,e.id),children:"حذف"}):t(C,{onClick:r=>Q(r,e.id),children:"إستعادة"})})]})]})},e.id)})}),t(X,{links:g.links})]})})]})})]})}export{ce as default};

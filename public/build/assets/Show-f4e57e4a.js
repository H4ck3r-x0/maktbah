import{r as g,j as a,a as e,b,d as f}from"./app-533a8615.js";import{P as l}from"./PrimaryButton-52db2018.js";import{P,h as _,E as j}from"./html2canvas.esm-78d9d692.js";import{m as E}from"./moment-with-locales-08b71015.js";import{A as I}from"./ApplicationLogo-2729fa4e.js";import"./typeof-7fd5df1e.js";function L({auth:N,order:t}){var i,n,r,h,m,d,o,x;const[c,u]=g.useState(null);g.useEffect(()=>{const s=JSON.parse(t.options);u(s)},[t.options]);const w=()=>{const s=document.getElementById("divToPrint");_(s,{logging:!1,scale:2}).then(p=>{const v=p.toDataURL("image/png"),y=new j;y.addImage(v,"PNG",0,0,214,150),y.save("فاتورة راحة - "+t.id+".pdf")}).catch(p=>{alert("هناك خطأ في تحميل الفاتورة، يمكنك عمل تصوير للشاشة")})};return a(P,{user:N.user,header:a("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:["تفاصيل الطلب #",t.id]}),children:[e(b,{title:`تفاصل الطلب #${t.id}`}),a("div",{className:"max-h-screen max-w-max mx-auto py-6",id:"divToPrint",children:[a("div",{className:"flex  items-center justify-between px-6 pb-10",children:[e(f,{href:"/",children:e(I,{className:" w-20 h-20 fill-current text-gray-500"})}),e(f,{href:route("order.stationery.index"),id:"goBack","data-html2canvas-ignore":!0,children:e(l,{children:"العودة"})})]}),e("div",{className:"sm:px-6 lg:px-8",children:a("div",{className:"",children:[a("div",{className:"w-full flex items-center justify-between",children:[a("div",{className:"flex flex-col gap-3",children:[a("h1",{className:"text-lg  text-gray-600",children:["رقم الطلب : ",t.id]}),a("h1",{className:"text-lg  text-gray-600",children:["تاريخ الإنشاء : ",E(t.created_at).locale("ar").format("MMMM Do YYYY")]})]}),a("div",{className:"flex flex-col gap-3",children:[e("h1",{className:"text-lg  text-gray-600",children:t.user.username}),e("h1",{className:"text-lg  text-gray-600",children:t.user.phone}),t.user.city&&t.user.district&&e("h1",{className:"text-lg  text-gray-600",children:t.user.city+" - "+t.user.district})]})]}),a("div",{className:"relative overflow-x-auto",children:[e("h1",{className:"py-4 text-xl font-semibold",children:"الطلبات"}),a("table",{className:"w-full text-xs sm:text-lg text-right text-gray-500 shadow border",children:[e("thead",{className:"text-xs sm:text-lg text-gray-700  border ",children:a("tr",{children:[e("th",{scope:"col",className:"px-3 py-3",children:"القرطاسية"}),e("th",{scope:"col",className:"px-3 py-3",children:"المذكرة"}),e("th",{scope:"col",className:"px-3 py-3",children:"عدد الصفحات"}),e("th",{scope:"col",className:"px-3 py-3",children:"خيارات الطباعة"})]})}),e("tbody",{children:a("tr",{className:"bg-white border",children:[a("th",{scope:"row",className:"px-3 py-4 text-gray-600 whitespace-nowrap ",children:[((i=t.stationery)==null?void 0:i.name)||((n=t.stationery_branch)==null?void 0:n.name),((r=t.stationery)==null?void 0:r.city)&&((h=t.stationery)==null?void 0:h.district)&&e("h1",{className:"text-sm text-gray-400",children:t.stationery.city+" - "+t.stationery.district}),((m=t.stationery_branch)==null?void 0:m.city)&&((d=t.stationery_branch)==null?void 0:d.district)&&e("h1",{className:"text-sm text-gray-400",children:((o=t.stationery_branch)==null?void 0:o.city)+" - "+((x=t.stationery_branch)==null?void 0:x.district)})]}),e("th",{scope:"row",className:"px-3 py-4 text-gray-600 whitespace-nowrap ",children:e("a",{href:t.note.url,target:"blank",children:e(l,{children:"مشاهدة"})})}),a("th",{scope:"row",className:"px-3 py-4 text-gray-600 whitespace-nowrap ",children:[t.selected_pages," صفحة"]}),e("th",{scope:"row",className:"px-3 py-4  text-gray-600 whitespace-nowrap ",children:c==null?void 0:c.map(s=>e("div",{className:"flex flex-col items-center gap-3",children:e("h3",{className:"text-md",children:s.display_name})},s.id))})]})})]})]}),a("div",{className:"w-full flex flex-col items-center justify-between pt-10",children:[e("div",{children:a("h1",{className:"flex flex-col items-center gap-3 text-lg font-semibold text-gray-700",children:[e("span",{children:"إجمالي قيمة المشتريات"}),a("span",{children:[t.total," ريال"]})]})}),e("div",{className:"mt-3",children:e("p",{className:"text-lg text-gray-700",children:"هذي الفاتورة تقوم بعرضعها على اصحاب المكتبات التي قمت بالطلب منها ."})})]})]})})]}),e("div",{className:"flex items-center justify-center mt-10",children:e(l,{onClick:w,children:"تحميل الفاتورة"})})]})}export{L as default};
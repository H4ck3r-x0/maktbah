import{j as t,a as e,b as n,d as h}from"./app-0f417571.js";import{P as m}from"./PrimaryButton-db8d02aa.js";import{P as d,h as x,E as p}from"./html2canvas.esm-4c2448ea.js";import{m as b}from"./moment-with-locales-ad174319.js";import{A as y}from"./ApplicationLogo-d09776dc.js";import"./typeof-7fd5df1e.js";function w({auth:l,order:c}){const i=()=>{const a=document.getElementById("divToPrint");x(a).then(r=>{const o=r.toDataURL("image/png"),s=new p;s.addImage(o,"PNG",0,0,214,150),s.save("فاتورة راحة - "+c.id+".pdf")}).catch(r=>{alert("هناك خطأ في تحميل الفاتورة، يمكنك عمل تصوير للشاشة")})};return t(d,{user:l.user,header:t("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:["تفاصيل الطلب #",c.id]}),children:[e(n,{title:`تفاصل الطلب #${c.id}`}),t("div",{className:" py-6",id:"divToPrint",children:[e("div",{className:"px-6 pb-10",children:e(h,{href:"/",children:e(y,{className:" w-20 h-20 fill-current text-gray-500"})})}),e("div",{className:"sm:px-6 lg:px-8",children:t("div",{className:"",children:[t("div",{className:"w-full flex items-center justify-between",children:[t("div",{className:"flex flex-col gap-3",children:[t("h1",{className:"text-lg  text-gray-600",children:["رقم الطلب : ",c.id]}),t("h1",{className:"text-lg  text-gray-600",children:["تاريخ الإنشاء : ",b(c.created_at).locale("ar").format("MMMM Do YYYY")]})]}),t("div",{className:"flex flex-col gap-3",children:[e("h1",{className:"text-lg  text-gray-600",children:c.user.name}),e("h1",{className:"text-lg  text-gray-600",children:c.user.phone}),c.user.city&&c.user.district&&e("h1",{className:"text-lg  text-gray-600",children:c.user.city+" - "+c.user.district})]})]}),t("div",{className:"relative overflow-x-auto",children:[e("h1",{className:"py-4 text-xl font-semibold",children:"الطلبات"}),t("table",{className:"w-full text-xs sm:text-lg text-right text-gray-500 shadow border",children:[e("thead",{className:"text-xs sm:text-lg text-gray-700  border ",children:t("tr",{children:[e("th",{scope:"col",className:"px-3 py-3",children:"المكتبة"}),e("th",{scope:"col",className:"px-3 py-3",children:"الكتاب"}),e("th",{scope:"col",className:"px-3 py-3",children:"العرض"}),e("th",{scope:"col",className:"px-3 py-3",children:"الإجمالي"})]})}),e("tbody",{children:c.details.map(a=>t("tr",{className:"bg-white border",children:[e("th",{scope:"row",className:"px-3 py-4 text-gray-600 whitespace-nowrap ",children:a.book.library!==null?t("div",{children:[t("h1",{children:[" ",a.book.library.name]}),a.book.library.city&&a.book.library.district&&e("h1",{className:"text-sm text-gray-400",children:a.book.library.city+" - "+a.book.library.district})]}):t("div",{children:[t("h1",{children:[" ",a.book.branch.name]}),a.book.branch.city&&a.book.branch.district&&e("h1",{className:"text-sm text-gray-400",children:a.book.branch.city+" - "+a.book.branch.district})]})}),e("th",{scope:"row",className:"px-3py-4  text-gray-600 whitespace-nowrap ",children:t("div",{children:[e("h1",{children:a.book.book.book_name}),e("span",{className:"text-sm text-gray-400",children:a.book.book.author_name+" - "+a.book.book.edition_number+" - "+a.book.book.volume_number})]})}),e("th",{scope:"row",className:"px-3 py-4  text-gray-600 whitespace-nowrap ",children:a.book.offer?a.book.offer:"لايوجد"}),t("th",{scope:"row",className:"px-3 py-4  text-gray-600 whitespace-nowrap ",children:[a.book.price," ريال"]})]},a.id))})]})]}),t("div",{className:"w-full flex items-center justify-between pt-10",children:[e("div",{children:e("p",{className:"text-lg text-gray-700",children:"هذي الفاتورة تقوم بعرضعها على اصحاب المكتبات التي قمت بالطلب منها ."})}),e("div",{children:t("h1",{className:"flex flex-col gap-3 text-lg font-semibold text-gray-700",children:[e("span",{children:"إجمالي قيمة المشتريات"}),t("span",{children:[c.total_payment," ريال"]})]})})]})]})})]}),e("div",{className:"flex items-center justify-center mt-10",children:e(m,{onClick:i,children:"تحميل الفاتورة"})})]})}export{w as default};

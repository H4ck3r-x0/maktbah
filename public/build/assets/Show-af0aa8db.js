import{j as a,a as e,b as n,d as h}from"./app-922b3034.js";import{P as m}from"./PrimaryButton-fea96342.js";import{P as d,h as x,E as p}from"./html2canvas.esm-ecb7181b.js";import{m as b}from"./moment-with-locales-35bc414d.js";import{A as y}from"./ApplicationLogo-8abf37ef.js";import"./typeof-7fd5df1e.js";function w({auth:l,order:c}){const i=()=>{const t=document.getElementById("divToPrint");x(t).then(r=>{const o=r.toDataURL("image/png"),s=new p;s.addImage(o,"PNG",0,0,214,150),s.save("فاتورة راحة - "+c.id+".pdf")}).catch(r=>{alert("هناك خطأ في تحميل الفاتورة، يمكنك عمل تصوير للشاشة")})};return a(d,{user:l.user,header:a("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:["تفاصيل الطلب #",c.id]}),children:[e(n,{title:`تفاصل الطلب #${c.id}`}),a("div",{className:" py-6",id:"divToPrint",children:[e("div",{className:"px-6 pb-10",children:e(h,{href:"/",children:e(y,{className:" w-20 h-20 fill-current text-gray-500"})})}),e("div",{className:"sm:px-6 lg:px-8",children:a("div",{className:"",children:[a("div",{className:"w-full flex items-center justify-between",children:[a("div",{className:"flex flex-col gap-3",children:[a("h1",{className:"text-lg  text-gray-600",children:["رقم الطلب : ",c.id]}),a("h1",{className:"text-lg  text-gray-600",children:["تاريخ الإنشاء : ",b(c.created_at).locale("ar").format("MMMM Do YYYY")]})]}),a("div",{className:"flex flex-col gap-3",children:[e("h1",{className:"text-lg  text-gray-600",children:c.user.username}),e("h1",{className:"text-lg  text-gray-600",children:c.user.phone}),c.user.city&&c.user.district&&e("h1",{className:"text-lg  text-gray-600",children:c.user.city+" - "+c.user.district})]})]}),a("div",{className:"relative overflow-x-auto",children:[e("h1",{className:"py-4 text-xl font-semibold",children:"الطلبات"}),a("table",{className:"w-full text-xs sm:text-lg text-right text-gray-500 shadow border",children:[e("thead",{className:"text-xs sm:text-lg text-gray-700  border ",children:a("tr",{children:[e("th",{scope:"col",className:"px-3 py-3",children:"المكتبة"}),e("th",{scope:"col",className:"px-3 py-3",children:"الكتاب"}),e("th",{scope:"col",className:"px-3 py-3",children:"العرض"}),e("th",{scope:"col",className:"px-3 py-3",children:"الإجمالي"})]})}),e("tbody",{children:c.details.map(t=>a("tr",{className:"bg-white border",children:[e("th",{scope:"row",className:"px-3 py-4 text-gray-600 whitespace-nowrap ",children:t.book.library!==null?a("div",{children:[e("h1",{children:t.book.library.name}),t.book.library.city&&t.book.library.district&&e("h1",{className:"text-sm text-gray-400",children:t.book.library.city+" - "+t.book.library.district})]}):a("div",{children:[a("h1",{children:[" ",t.book.branch.name]}),t.book.branch.city&&t.book.branch.district&&e("h1",{className:"text-sm text-gray-400",children:t.book.branch.city+" - "+t.book.branch.district})]})}),e("th",{scope:"row",className:"px-3py-4  text-gray-600 whitespace-nowrap ",children:a("div",{children:[e("h1",{children:t.book.book.book_name}),e("span",{className:"text-sm text-gray-400",children:t.book.book.author_name+" - "+t.book.book.edition_number+" - "+t.book.book.volume_number})]})}),e("th",{scope:"row",className:"px-3 py-4  text-gray-600 whitespace-nowrap ",children:t.book.offer?t.book.offer:"لايوجد"}),a("th",{scope:"row",className:"px-3 py-4  text-gray-600 whitespace-nowrap ",children:[t.book.price," ريال"]})]},t.id))})]})]}),a("div",{className:"w-full flex items-center justify-between pt-10",children:[e("div",{children:e("p",{className:"text-lg text-gray-700",children:"هذي الفاتورة تقوم بعرضعها على اصحاب المكتبات التي قمت بالطلب منها ."})}),e("div",{children:a("h1",{className:"flex flex-col gap-3 text-lg font-semibold text-gray-700",children:[e("span",{children:"إجمالي قيمة المشتريات"}),a("span",{children:[c.total_payment," ريال"]})]})})]})]})})]}),e("div",{className:"flex items-center justify-center mt-10",children:e(m,{onClick:i,children:"تحميل الفاتورة"})})]})}export{w as default};

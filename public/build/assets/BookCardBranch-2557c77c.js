import{q as N,r as y,j as s,a as e,f as m}from"./app-cb4316c3.js";import{D as v}from"./DangerButton-4c28199a.js";import{P as w}from"./PrimaryButton-da87da90.js";import{k as B,Q as o}from"./react-toastify.esm-37700818.js";/* empty css                      */function P({book:t}){var d,c,i,x;const r=N().props.user_cart,[n,a]=y.useState(!1),p=({id:l,price:h,offer:g,book_id:f,library_branch_id:b})=>{m.post(route("search.books.store"),{id:l,price:h,offer:g,book_id:f,library_branch_id:b},{preserveScroll:!0,onBefore:()=>{a(!0)},onSuccess:()=>{a(!1),o.success("تم إضافة الكتاب الى السلة",{position:o.POSITION.TOP_CENTER,autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,rtl:!0})}})},u=l=>{m.post(route("search.books.destroy"),{id:l},{preserveScroll:!0,onBefore:()=>{a(!0)},onSuccess:()=>{a(!1),o.success("تم حذف الكتاب الى السلة",{position:o.POSITION.TOP_CENTER,autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,rtl:!0})}})};return s("div",{className:"flex bg-white shadow-md rounded-lg overflow-hidden",children:[e(B,{}),s("div",{className:"w-full p-5",children:[s("h1",{className:"text-xl text-gray-900 font-bold sm:text-2xl ",children:["أسم الكتاب: ",t.book.book_name]}),s("div",{className:"flex flex-col sm:flex-row flex-wrap gap-2 py-6",children:[e("span",{className:"text-xl sm:text-2xl text-gray-600 font-semibold",children:"الكاتب:"}),e("span",{className:"bg-blue-100 text-blue-800 text-xl sm:text-2xl px-2.5 py-0.5 rounded",children:t.book.author_name}),e("span",{className:"text-xl sm:text-2xl text-gray-600 font-semibold",children:"رقم الطبعة:"}),e("span",{className:"bg-blue-100 text-blue-800 text-lg sm:text-2xl px-2.5 py-0.5 rounded",children:t.book.edition_number}),e("span",{className:"text-xl sm:text-2xl text-gray-600 font-semibold",children:"رقم المجلد:"}),e("span",{className:"bg-blue-100 text-blue-800 text-lg sm:text-2xl px-2.5 py-0.5 rounded",children:t.book.volume_number})]}),t.offer&&s("div",{className:"max-w-sm mt-3 p-4 border rounded shadow-sm bg-indigo-100",children:[e("h3",{className:"text-xl sm:text-2xl text-indigo-500 font-semibold mb-1",children:"عرض إضافي"}),e("span",{className:"text-xl sm:text-2xl text-justify",children:t.offer})]}),s("div",{className:"flex flex-col sm:flex-row flex-wrap gap-2 py-6",children:[e("span",{className:"text-xl sm:text-2xl text-gray-600 font-semibold",children:"المكتبة:"}),e("span",{className:"bg-gray-100 text-gray-800 text-lg px-2.5 py-0.5 rounded",children:(d=t.branch)==null?void 0:d.name}),e("span",{className:"text-xl sm:text-2xl text-gray-600 font-semibold",children:"المدينة:"}),e("span",{className:"bg-gray-100 text-gray-800 text-xl sm:text-2xl px-2.5 py-0.5 rounded",children:(c=t.branch)==null?void 0:c.city}),e("span",{className:"text-xl sm:text-2xl text-gray-600 font-semibold",children:"الحي:"}),e("span",{className:"bg-gray-100 text-gray-800 text-xl sm:text-2xl px-2.5 py-0.5 rounded",children:(i=t.branch)==null?void 0:i.district})]}),s("div",{className:"flex items-center justify-between mt-6",children:[s("h1",{className:"text-blue-500 font-bold text-2xl",children:[t.price," ريال"]}),e("div",{className:"flex items-center gap-2",children:((x=r==null?void 0:r.cart)==null?void 0:x.length)>0&&r.cart.some(l=>l.book_library_id==t.id)?e(v,{disabled:n,onClick:()=>u(t.id),children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})}):e(w,{disabled:n,onClick:()=>p(t),children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})})})})]}),t.ad_image&&e("div",{className:"py-4",children:e("img",{src:t.ad_image,className:"w-full h-96 shadow-lg rounded-lg",alt:"",loading:"lazy"})})]})]})}export{P as default};

import{W as u,r as h,j as a,a as e,b as f}from"./app-16f00f28.js";import{I as m}from"./InputError-9d145645.js";import{I as o}from"./InputLabel-b01a3739.js";import{P as v}from"./PrimaryButton-5ef67552.js";import{T as t}from"./TextInput-7498b384.js";import{A as N}from"./AuthenticatedLayout-fda8994a.js";import"./AdminAuthenticatedHeader-7492c730.js";import"./ApplicationLogo-123847eb.js";import"./transition-6731b11a.js";import"./AuthenticatedLibraryHeader-4cbca632.js";function P({auth:_,printingOptions:l}){const{data:i,setData:n,post:c,processing:g,errors:s,reset:x}=u({single_face_printing:"",single_face_printing_per_page:"",double_sided_printing:"",double_sided_printing_per_page:"",colored_printing:"",colored_printing_per_page:"",ribbon_print:"",ribbon_print_per_page:0}),b=r=>{r.preventDefault(),c(route("stationery.options.store"))};return h.useEffect(()=>{if(l&&l.length>0){const r=l.reduce((d,p)=>(d[p.option]=p.price,d[`${p.option}_per_page`]=p.per_page,d),{});n(r)}},[l]),a(N,{user:_.user,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"اسعار وخيارات الطباعة"}),children:[e(f,{title:"اسعار وخيارات الطباعة"}),e("div",{className:"py-6",children:e("div",{className:"max-w-7xl mx-auto sm:px-4 lg:px-4",children:e("div",{className:"w-full sm:inline-flex ml-4 items-center gap-3 px-6 ",children:e("div",{className:"bg-white p-4 w-full rounded-md shadow-md",children:a("form",{onSubmit:b,children:[a("div",{className:"mt-4",children:[e(o,{htmlFor:"single_face_printing",value:"سعر طباعة وجه واحد"}),a("div",{className:"flex items-center gap-3",children:[e(t,{id:"single_face_printing",type:"number",name:"single_face_printing",className:"mt-2 block w-sm",value:i.single_face_printing||"",placeholder:"مثال: 1 ",onChange:r=>n({...i,single_face_printing:r.target.value})}),e("span",{className:"text-sm text-gray-600 font-semibold mt-1",children:"لكل"}),e(t,{id:"single_face_printing_per_page",type:"number",name:"single_face_printing_per_page",className:"mt-2 block w-sm",value:i.single_face_printing_per_page||"",placeholder:"عدد الصفحات",onChange:r=>n({...i,single_face_printing_per_page:r.target.value})})]}),e(m,{message:s.single_face_printing,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(o,{htmlFor:"double_sided_printing",value:"سعر طباعة وجهيين"}),a("div",{className:"flex items-center gap-3",children:[e(t,{id:"double_sided_printing",type:"number",name:"double_sided_printing",className:"mt-2 block w-sm",placeholder:"مثال: 1 ",value:i.double_sided_printing||"",onChange:r=>n({...i,double_sided_printing:r.target.value})}),e("span",{className:"text-sm text-gray-600 font-semibold mt-1",children:"لكل"}),e(t,{id:"double_sided_printing_per_page",type:"number",name:"double_sided_printing_per_page",className:"mt-2 block w-sm",placeholder:"عدد الصفحات",value:i.double_sided_printing_per_page||"",onChange:r=>n({...i,double_sided_printing_per_page:r.target.value})})]}),e(m,{message:s.double_sided_printing,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(o,{htmlFor:"colored_printing",value:"سعر الطباعة الملونة"}),a("div",{className:"flex items-center gap-3",children:[e(t,{id:"colored_printing",type:"number",name:"colored_printing",className:"mt-2 block w-sm",placeholder:"مثال: 1 ",value:i.colored_printing||"",onChange:r=>n({...i,colored_printing:r.target.value})}),e("span",{className:"text-sm text-gray-600 font-semibold mt-1",children:"لكل"}),e(t,{id:"colored_printing_per_page",type:"number",name:"colored_printing_per_page",className:"mt-2 block w-sm",placeholder:"عدد الصفحات",value:i.colored_printing_per_page||"",onChange:r=>n({...i,colored_printing_per_page:r.target.value})})]}),e(m,{message:s.colored_printing,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(o,{htmlFor:"ribbon_print",value:"سعر الطباعة بشريط"}),a("div",{className:"flex items-center gap-3",children:[e(t,{id:"ribbon_print",type:"number",name:"ribbon_print",className:"mt-2 block w-sm",placeholder:"مثال: 1 ",value:i.ribbon_print||"",onChange:r=>n({...i,ribbon_print:r.target.value})}),e(t,{id:"ribbon_print_per_page",type:"hidden",name:"ribbon_print_per_page",className:"mt-2 block w-sm",placeholder:"عدد الصفحات",value:0,onChange:r=>n({...i,ribbon_print_per_page:0})})]}),e(m,{message:s.ribbon_print,className:"mt-2"})]}),e("div",{className:"flex items-center  mt-4",children:e(v,{className:"ml-4 text-xs",disabled:g,children:"حفظ"})})]})})})})})]})}export{P as default};
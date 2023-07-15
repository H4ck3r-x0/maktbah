import{q as C,r as I,W as w,j as t,a as e}from"./app-0f417571.js";import{I as s}from"./InputError-1c82cc16.js";import{I as o}from"./InputLabel-8af051bd.js";import{P as F}from"./PrimaryButton-db8d02aa.js";import{T as S}from"./TextInput-6268610b.js";import{t as j}from"./transition-4b5c5b4e.js";function _({className:c="",cities:l,districts:u}){const a=C().props.auth.user,[g,h]=I.useState(""),{data:d,setData:i,patch:p,errors:n,processing:f,recentlySuccessful:v}=w({name:a.name,gender:a.gender?a.gender:"",city:a.city,district:a.district}),y=r=>{r.preventDefault(),p(route("profile.update"),{preserveScroll:!0})},N=r=>{const b=r.target.value,m=l.filter(x=>b==x.id);h(m[0].id),i("city",m[0].name)};return t("section",{className:c,children:[t("header",{children:[e("h2",{className:"text-lg font-medium text-gray-900",children:"معلوماتك الشخصية"}),e("p",{className:"mt-1 text-sm text-gray-600",children:"قم بتحديث معلوماتك الشخصية."})]}),t("form",{onSubmit:y,className:"mt-6 space-y-6",children:[t("div",{children:[e(o,{htmlFor:"name",value:"الأسم الكريم"}),e(S,{id:"name",className:"mt-2 block w-full",value:d.name,onChange:r=>i("name",r.target.value),required:!0,isFocused:!0,autoComplete:"name"}),e(s,{className:"mt-2",message:n.name})]}),t("div",{className:"mb-2",children:[e(o,{htmlFor:"gender",value:"الجنس"}),t("select",{value:d.gender,onChange:r=>i("gender",r.target.value),name:"gender",id:"gender",required:!0,className:"mt-2 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",children:[e("option",{value:"",children:"أختر نوع الجنس"}),e("option",{value:"male",children:"ذكر"}),e("option",{value:"female",children:"أنثى"})]}),e(s,{message:n.gender,className:"mt-2"})]}),t("div",{children:[e(o,{htmlFor:"city",value:"المدينة"}),t("select",{onChange:N,className:"w-full mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ",children:[e("option",{value:"",children:"أختر المدينة"}),l.map(r=>e("option",{value:r.id,children:r.name},r.id))]}),e(s,{className:"mt-2",message:n.city})]}),t("div",{children:[e(o,{htmlFor:"city",value:"الحي"}),t("select",{onChange:r=>i("district",r.target.value),className:"w-full mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ",children:[e("option",{value:"",children:"أختر الحي"}),u.filter(r=>r.city_id===g).map(r=>e("option",{value:r.name,children:r.name},r.id))]}),e(s,{className:"mt-2",message:n.district_id})]}),t("div",{className:"flex items-center gap-4",children:[e(F,{disabled:f,children:"حفظ"}),e(j,{show:v,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:e("p",{className:"text-sm text-gray-600",children:"تم الحفظ بنجاح"})})]})]})]})}export{_ as default};

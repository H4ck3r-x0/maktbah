import{q as u,W as p,j as t,a as e}from"./app-922b3034.js";import{I as d}from"./InputError-d3a97534.js";import{I as f}from"./InputLabel-1e2919a6.js";import{P as h}from"./PrimaryButton-fea96342.js";import{T as x}from"./TextInput-d3fcbf7e.js";import{t as g}from"./transition-a43393a6.js";function T({className:r=""}){const s=u().props.auth.user,{data:m,setData:n,patch:o,errors:i,processing:l,recentlySuccessful:c}=p({username:s.username});return t("section",{className:r,children:[t("header",{children:[e("h2",{className:"text-lg font-medium text-gray-900",children:"معلوماتك الشخصية"}),e("p",{className:"mt-1 text-sm text-gray-600",children:"قم بتحديث معلوماتك الشخصية."})]}),t("form",{onSubmit:a=>{a.preventDefault(),o(route("admin.profile.update"))},className:"mt-6 space-y-6",children:[t("div",{children:[e(f,{htmlFor:"username",value:"أسم المستخدم"}),e(x,{id:"username",type:"text",className:"mt-2 block w-full",value:m.username,onChange:a=>n("username",a.target.value),required:!0}),e(d,{className:"mt-2",message:i.username})]}),t("div",{className:"flex items-center gap-4",children:[e(h,{disabled:l,children:"حفظ"}),e(g,{show:c,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:e("p",{className:"text-sm text-gray-600",children:"تم الحفظ بنجاح"})})]})]})]})}export{T as default};

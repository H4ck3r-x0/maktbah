import{r as l,W as g,j as t,a as e}from"./app-922b3034.js";import{D as c}from"./DangerButton-96612a64.js";import{I as x}from"./InputError-d3a97534.js";import{I as N}from"./InputLabel-1e2919a6.js";import{M as D}from"./Modal-8565ec95.js";import{S as v}from"./SecondaryButton-2ab3f5c4.js";import{T as b}from"./TextInput-d3fcbf7e.js";import"./transition-a43393a6.js";function B({className:d=""}){const[i,o]=l.useState(!1),a=l.useRef(),{data:m,setData:u,delete:p,processing:f,reset:n,errors:y}=g({password:""}),h=()=>{o(!0)},w=r=>{r.preventDefault(),p(route("admin.profile.destroy"),{preserveScroll:!0,onSuccess:()=>s(),onError:()=>a.current.focus(),onFinish:()=>n()})},s=()=>{o(!1),n()};return t("section",{className:`space-y-6 ${d}`,children:[t("header",{children:[e("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),e("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),e(c,{onClick:h,children:"Delete Account"}),e(D,{show:i,onClose:s,children:t("form",{onSubmit:w,className:"p-6",children:[e("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),e("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),t("div",{className:"mt-6",children:[e(N,{htmlFor:"password",value:"Password",className:"sr-only"}),e(b,{id:"password",type:"password",name:"password",ref:a,value:m.password,onChange:r=>u("password",r.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),e(x,{message:y.password,className:"mt-2"})]}),t("div",{className:"mt-6 flex justify-end",children:[e(v,{onClick:s,children:"Cancel"}),e(c,{className:"ml-3",disabled:f,children:"Delete Account"})]})]})})]})}export{B as default};

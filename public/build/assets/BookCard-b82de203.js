import{r as m,q as H,j as b,a as p,g as D}from"./app-d3ec313d.js";import{D as R}from"./DangerButton-9a7ec3c5.js";import{P as U}from"./PrimaryButton-44e0541f.js";/* empty css                      */let W={data:""},q=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||W,Y=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Z=/\/\*[^]*?\*\/|  +/g,M=/\n+/g,v=(e,t)=>{let a="",o="",s="";for(let r in e){let l=e[r];r[0]=="@"?r[1]=="i"?a=r+" "+l+";":o+=r[1]=="f"?v(l,r):r+"{"+v(l,r[1]=="k"?"":t)+"}":typeof l=="object"?o+=v(l,t?t.replace(/([^,])+/g,i=>r.replace(/(^:.*)|([^,])+/g,n=>/&/.test(n)?n.replace(/&/g,i):i?i+" "+n:n)):r):l!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=v.p?v.p(r,l):r+":"+l+";")}return a+(t&&s?t+"{"+s+"}":s)+o},h={},I=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+I(e[a]);return t}return e},G=(e,t,a,o,s)=>{let r=I(e),l=h[r]||(h[r]=(n=>{let d=0,c=11;for(;d<n.length;)c=101*c+n.charCodeAt(d++)>>>0;return"go"+c})(r));if(!h[l]){let n=r!==e?e:(d=>{let c,x,u=[{}];for(;c=Y.exec(d.replace(Z,""));)c[4]?u.shift():c[3]?(x=c[3].replace(M," ").trim(),u.unshift(u[0][x]=u[0][x]||{})):u[0][c[1]]=c[2].replace(M," ").trim();return u[0]})(e);h[l]=v(s?{["@keyframes "+l]:n}:n,a?"":"."+l)}let i=a&&h.g?h.g:null;return a&&(h.g=h[l]),((n,d,c,x)=>{x?d.data=d.data.replace(x,n):d.data.indexOf(n)===-1&&(d.data=c?n+d.data:d.data+n)})(h[l],t,o,i),l},J=(e,t,a)=>e.reduce((o,s,r)=>{let l=t[r];if(l&&l.call){let i=l(a),n=i&&i.props&&i.props.className||/^go/.test(i)&&i;l=n?"."+n:i&&typeof i=="object"?i.props?"":v(i,""):i===!1?"":i}return o+s+(l??"")},"");function L(e){let t=this||{},a=e.call?e(t.p):e;return G(a.unshift?a.raw?J(a,[].slice.call(arguments,1),t.p):a.reduce((o,s)=>Object.assign(o,s&&s.call?s(t.p):s),{}):a,q(t.target),t.g,t.o,t.k)}let T,P,_;L.bind({g:1});let y=L.bind({k:1});function Q(e,t,a,o){v.p=t,T=e,P=a,_=o}function w(e,t){let a=this||{};return function(){let o=arguments;function s(r,l){let i=Object.assign({},r),n=i.className||s.className;a.p=Object.assign({theme:P&&P()},i),a.o=/ *go\d+/.test(n),i.className=L.apply(a,o)+(n?" "+n:""),t&&(i.ref=l);let d=e;return e[0]&&(d=i.as||e,delete i.as),_&&d[0]&&_(i),T(d,i)}return t?t(s):s}}var V=e=>typeof e=="function",z=(e,t)=>V(e)?e(t):e,X=(()=>{let e=0;return()=>(++e).toString()})(),F=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),K=20,j=new Map,ee=1e3,S=e=>{if(j.has(e))return;let t=setTimeout(()=>{j.delete(e),N({type:4,toastId:e})},ee);j.set(e,t)},te=e=>{let t=j.get(e);t&&clearTimeout(t)},A=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,K)};case 1:return t.toast.id&&te(t.toast.id),{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:a}=t;return e.toasts.find(r=>r.id===a.id)?A(e,{type:1,toast:a}):A(e,{type:0,toast:a});case 3:let{toastId:o}=t;return o?S(o):e.toasts.forEach(r=>{S(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===o||o===void 0?{...r,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+s}))}}},C=[],O={toasts:[],pausedAt:void 0},N=e=>{O=A(O,e),C.forEach(t=>{t(O)})},ae={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},re=(e={})=>{let[t,a]=m.useState(O);m.useEffect(()=>(C.push(a),()=>{let s=C.indexOf(a);s>-1&&C.splice(s,1)}),[t]);let o=t.toasts.map(s=>{var r,l;return{...e,...e[s.type],...s,duration:s.duration||((r=e[s.type])==null?void 0:r.duration)||(e==null?void 0:e.duration)||ae[s.type],style:{...e.style,...(l=e[s.type])==null?void 0:l.style,...s.style}}});return{...t,toasts:o}},se=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(a==null?void 0:a.id)||X()}),k=e=>(t,a)=>{let o=se(t,e,a);return N({type:2,toast:o}),o.id},f=(e,t)=>k("blank")(e,t);f.error=k("error");f.success=k("success");f.loading=k("loading");f.custom=k("custom");f.dismiss=e=>{N({type:3,toastId:e})};f.remove=e=>N({type:4,toastId:e});f.promise=(e,t,a)=>{let o=f.loading(t.loading,{...a,...a==null?void 0:a.loading});return e.then(s=>(f.success(z(t.success,s),{id:o,...a,...a==null?void 0:a.success}),s)).catch(s=>{f.error(z(t.error,s),{id:o,...a,...a==null?void 0:a.error})}),e};var oe=(e,t)=>{N({type:1,toast:{id:e,height:t}})},ie=()=>{N({type:5,time:Date.now()})},le=e=>{let{toasts:t,pausedAt:a}=re(e);m.useEffect(()=>{if(a)return;let r=Date.now(),l=t.map(i=>{if(i.duration===1/0)return;let n=(i.duration||0)+i.pauseDuration-(r-i.createdAt);if(n<0){i.visible&&f.dismiss(i.id);return}return setTimeout(()=>f.dismiss(i.id),n)});return()=>{l.forEach(i=>i&&clearTimeout(i))}},[t,a]);let o=m.useCallback(()=>{a&&N({type:6,time:Date.now()})},[a]),s=m.useCallback((r,l)=>{let{reverseOrder:i=!1,gutter:n=8,defaultPosition:d}=l||{},c=t.filter(g=>(g.position||d)===(r.position||d)&&g.height),x=c.findIndex(g=>g.id===r.id),u=c.filter((g,E)=>E<x&&g.visible).length;return c.filter(g=>g.visible).slice(...i?[u+1]:[0,u]).reduce((g,E)=>g+(E.height||0)+n,0)},[t]);return{toasts:t,handlers:{updateHeight:oe,startPause:ie,endPause:o,calculateOffset:s}}},ne=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,de=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ce=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,pe=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ne} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${de} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ce} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,me=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ue=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${me} 1s linear infinite;
`,fe=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,xe=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ge=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${fe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${xe} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,he=w("div")`
  position: absolute;
`,ye=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,be=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ve=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${be} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,we=({toast:e})=>{let{icon:t,type:a,iconTheme:o}=e;return t!==void 0?typeof t=="string"?m.createElement(ve,null,t):t:a==="blank"?null:m.createElement(ye,null,m.createElement(ue,{...o}),a!=="loading"&&m.createElement(he,null,a==="error"?m.createElement(pe,{...o}):m.createElement(ge,{...o})))},Ne=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ee=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,ke="0%{opacity:0;} 100%{opacity:1;}",$e="0%{opacity:1;} 100%{opacity:0;}",je=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ce=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Oe=(e,t)=>{let a=e.includes("top")?1:-1,[o,s]=F()?[ke,$e]:[Ne(a),Ee(a)];return{animation:t?`${y(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ze=m.memo(({toast:e,position:t,style:a,children:o})=>{let s=e.height?Oe(e.position||t||"top-center",e.visible):{opacity:0},r=m.createElement(we,{toast:e}),l=m.createElement(Ce,{...e.ariaProps},z(e.message,e));return m.createElement(je,{className:e.className,style:{...s,...a,...e.style}},typeof o=="function"?o({icon:r,message:l}):m.createElement(m.Fragment,null,r,l))});Q(m.createElement);var Le=({id:e,className:t,style:a,onHeightUpdate:o,children:s})=>{let r=m.useCallback(l=>{if(l){let i=()=>{let n=l.getBoundingClientRect().height;o(e,n)};i(),new MutationObserver(i).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return m.createElement("div",{ref:r,className:t,style:a},s)},Pe=(e,t)=>{let a=e.includes("top"),o=a?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:F()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...o,...s}},_e=L`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$=16,Ae=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:o,children:s,containerStyle:r,containerClassName:l})=>{let{toasts:i,handlers:n}=le(a);return m.createElement("div",{style:{position:"fixed",zIndex:9999,top:$,left:$,right:$,bottom:$,pointerEvents:"none",...r},className:l,onMouseEnter:n.startPause,onMouseLeave:n.endPause},i.map(d=>{let c=d.position||t,x=n.calculateOffset(d,{reverseOrder:e,gutter:o,defaultPosition:t}),u=Pe(c,x);return m.createElement(Le,{id:d.id,key:d.id,onHeightUpdate:n.updateHeight,className:d.visible?_e:"",style:u},d.type==="custom"?z(d.message,d):s?s(d):m.createElement(ze,{toast:d,position:c}))}))},B=f;function Ie({book:e}){var l,i,n,d;const t=H().props.user_cart,[a,o]=m.useState(!1),s=({id:c,price:x,offer:u,book_id:g,library_id:E})=>{D.post(route("search.books.store"),{id:c,price:x,offer:u,book_id:g,library_id:E},{preserveScroll:!0,onBefore:()=>{o(!0)},onSuccess:()=>{o(!1),B.success("تم إضافة الكتاب الى السلة",{duration:4e3,position:"top-center",style:{},className:"",icon:"👏",iconTheme:{primary:"#000",secondary:"#fff"},ariaProps:{role:"status","aria-live":"polite"}})}})},r=c=>{D.post(route("search.books.destroy"),{id:c},{preserveScroll:!0,onBefore:()=>{o(!0)},onSuccess:()=>{o(!1),B.success("تم إزالة الكتاب من السلة",{duration:4e3,position:"top-center",style:{},className:"",icon:"👏",iconTheme:{primary:"#000",secondary:"#fff"},ariaProps:{role:"status","aria-live":"polite"}})}})};return b("div",{className:"flex bg-white shadow-md rounded-lg overflow-hidden",children:[p(Ae,{}),b("div",{className:"w-full p-5",children:[b("h1",{className:"text-xl text-gray-900 font-bold sm:text-2xl ",children:["أسم الكتاب: ",e.book.book_name]}),b("div",{className:"flex flex-col sm:flex-row flex-wrap gap-2 py-6",children:[p("span",{className:"text-xl sm:text-2xl text-gray-600 font-semibold",children:"الكاتب:"}),p("span",{className:"bg-blue-100 text-blue-800 text-xl sm:text-2xl px-2.5 py-0.5 rounded",children:e.book.author_name}),p("span",{className:"text-xl sm:text-2xl text-gray-600 font-semibold",children:"رقم الطبعة:"}),p("span",{className:"bg-blue-100 text-blue-800 text-lg sm:text-2xl px-2.5 py-0.5 rounded",children:e.book.edition_number}),p("span",{className:"text-xl sm:text-2xl text-gray-600 font-semibold",children:"رقم المجلد:"}),p("span",{className:"bg-blue-100 text-blue-800 text-lg sm:text-2xl px-2.5 py-0.5 rounded",children:e.book.volume_number})]}),e.offer&&b("div",{className:"max-w-sm mt-3 p-4 border rounded shadow-sm bg-indigo-100",children:[p("h3",{className:"text-xl sm:text-2xl text-indigo-500 font-semibold mb-1",children:"عرض إضافي"}),p("span",{className:"text-xl sm:text-2xl text-justify",children:e.offer})]}),b("div",{className:"flex flex-col sm:flex-row flex-wrap gap-2 py-6",children:[p("span",{className:"text-xl sm:text-2xl text-gray-600 font-semibold",children:"المكتبة:"}),p("span",{className:"bg-gray-100 text-gray-800 text-lg px-2.5 py-0.5 rounded",children:(l=e.library)==null?void 0:l.name}),p("span",{className:"text-xl sm:text-2xl text-gray-600 font-semibold",children:"المدينة:"}),p("span",{className:"bg-gray-100 text-gray-800 text-xl sm:text-2xl px-2.5 py-0.5 rounded",children:(i=e.library)==null?void 0:i.city}),p("span",{className:"text-xl sm:text-2xl text-gray-600 font-semibold",children:"الحي:"}),p("span",{className:"bg-gray-100 text-gray-800 text-xl sm:text-2xl px-2.5 py-0.5 rounded",children:(n=e.library)==null?void 0:n.district})]}),b("div",{className:"flex items-center justify-between mt-6",children:[b("h1",{className:"text-blue-500 font-bold text-2xl",children:[e.price," ريال"]}),p("div",{className:"flex items-center gap-2",children:((d=t==null?void 0:t.cart)==null?void 0:d.length)>0&&t.cart.some(c=>c.book_library_id==e.id)?p(R,{disabled:a,onClick:()=>r(e.id),children:p("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:p("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})}):p(U,{disabled:a,onClick:()=>s(e),children:p("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:p("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})})})})]}),e.ad_image&&p("div",{className:"py-4",children:p("img",{src:e.ad_image,className:"w-full h-96 shadow-lg rounded-lg",alt:"",loading:"lazy"})})]})]})}export{Ie as default};

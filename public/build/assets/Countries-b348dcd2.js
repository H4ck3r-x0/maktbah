import{j as n,a as o}from"./app-0f417571.js";function u({className:a,countries:s,onChange:i,isFocused:r=!1,...d}){return n("select",{...d,onChange:i,className:"w-full mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "+a,autoFocus:r,children:[o("option",{value:"",children:"أختر الدولة"}),s.map(e=>o("option",{value:e.name,children:e.name},e.id))]})}export{u as default};

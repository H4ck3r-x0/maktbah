import{j as t,F as l,a as e,b as s,d as i}from"./app-16f00f28.js";import{A as a}from"./AdminAuthenticatedHeader-7492c730.js";import{A as n,a as d}from"./AuthenticatedLibraryHeader-4cbca632.js";import{G as c}from"./GuestHeader-61c962ac.js";import"./ApplicationLogo-123847eb.js";import"./transition-6731b11a.js";function p({auth:r}){return t(l,{children:[e(s,{title:"من نحن"}),t("div",{className:" bg-white",children:[e("div",{className:"",children:(()=>r.user&&r.user.role==="admin"?e(a,{user:r.user}):r.user&&r.user.role==="user"?e(n,{user:r.user}):r.user&&r.user.role==="library"?e(d,{user:r.user}):e(c,{}))()}),t("div",{className:"max-w-7xl justify-center items-center flex flex-col mx-auto sm:px-6 lg:px-8 mt-8 px-6 ",children:[t("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[t("div",{className:"flex flex-col items-center justify-center",children:[e("h1",{className:"text-3xl sm:text-4xl text-indigo-600 font-semibold",children:"متجر راحة؟"}),e("p",{className:"mt-4 text-lg tracking-wide font-semibold text-gray-500 leading-10 text-center",children:"راحة هو المكان المثالي للطلاب والمكتبات والمعلمين للحصول على الكتب والمذكرات. يمكنك العثور على كل ما تحتاجه في مكان واحد، ويمكنك التأكد من أنك تحصل على أفضل الأسعار."})]}),e("img",{src:"/images/welcomeImage.svg",alt:"",className:"pb-4 w-96 h-96"})]}),t("div",{className:"",children:[e("p",{className:"py-10 max-w-4xl text-lg tracking-wide font-semibold text-gray-500 leading-10 text-center",children:"لدينا مجموعة واسعة من الكتب والمذكرات للطلاب من جميع المستويات، بما في ذلك كتب المدرسية والكتب المساعدة والكتب غير الدراسية. لدينا أيضًا مجموعة متنوعة من الخدمات التي يمكن أن تساعد الطلاب على تحقيق أقصى استفادة من تعليمهم، مثل المساعدة في اختيار الكتب وكتابة التقارير والتحضير للاختبارات. نحن ملتزمون بتوفير تجربة تسوق رائعة للطلاب والمكتبات والمعلمين. لدينا فريق من الخبراء الذين يمكنهم مساعدتك في العثور على ما تحتاجه، ولدينا مجموعة متنوعة من خيارات الشحن والدفع التي تجعل التسوق معنا سهلاً. ونأمل أن يساعدك متجر راحة على تحقيق أقصى استفادة من تعليمك، وتوفير الراحة التي تحتاجها."}),t("div",{className:"mt-4",children:[e("h1",{className:"text-xl mb-4 text-gray-800",children:"فيما يلي بعض من الأسباب التي تجعل راحة هو المكان المثالي للطلاب والمكتبات والمعلمين:"}),t("ul",{className:" list-disc text-lg text-gray-500",children:[e("li",{children:"لدينا مجموعة واسعة من الكتب والمذكرات للطلاب من جميع المستويات."}),e("li",{children:"لدينا أسعار تنافسية للغاية."}),e("li",{children:"لدينا فريق من الخبراء الذين يمكنهم مساعدتك في العثور على ما تحتاجه."}),e("li",{children:"لدينا مجموعة متنوعة من خيارات الشحن والدفع التي تجعل التسوق معنا سهلاً."}),e("li",{children:"نحن ملتزمون بتوفير تجربة تسوق رائعة للطلاب والمكتبات والمعلمين."})]}),e("p",{className:"py-6 max-w-4xl text-xl text-gray-800",children:"إذا كنت طالبًا أو مكتبة أو معلمًا، فإننا نشجعك على زيارة متجر راحة اليوم. نثق أنك ستجد ما تحتاجه، وسنكون سعداء بمساعدةك في أي شيء تحتاجه."})]})]}),e("div",{className:"mt-6 mb-20 sm:items-center justify-center sm:hidden sm:mt-3 sm:ml-6",children:t("div",{className:"flex items-center gap-3",children:[e(i,{href:route("register"),children:e("button",{className:"bg-indigo-600 px-8 py-2 text-white font-semibold rounded-2xl hover:bg-indigo-700 shadow-lg transition-all",children:"إنضم إلينا الأن"})}),e(i,{href:route("login"),children:e("button",{className:"bg-white px-8 py-2 text-gray-800 border font-semibold rounded-2xl hover:bg-gray-100 shadow-sm transition-all",children:"تسجيل الدخول"})})]})})]})]})]})}export{p as default};

import AdminAuthenticatedHeader from '@/Components/AdminAuthenticatedHeader';
import AuthenticatedHeader from '@/Components/AuthenticatedHeader';
import AuthenticatedLibraryHeader from '@/Components/AuthenticatedLibraryHeader';
import GuestHeader from '@/Components/GuestHeader';
import { Head, Link } from '@inertiajs/react';

export default function About({ auth }) {
    const authHeader = () => {
        if (auth.user && auth.user.role === 'admin') {
            return <AdminAuthenticatedHeader user={auth.user} />;
        }
        if (auth.user && auth.user.role === 'user') {
            return <AuthenticatedHeader user={auth.user} />;
        }

        if (auth.user && auth.user.role === 'library') {
            return <AuthenticatedLibraryHeader user={auth.user} />;
        }

        return <GuestHeader />
    }
    return (
        <>
            <Head title="من نحن" />
            <div className=" bg-white">
                <div className="">
                    {authHeader()}
                </div>

                <div className='max-w-7xl justify-center items-center flex flex-col mx-auto sm:px-6 lg:px-8 mt-8 px-6 '>
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-3xl sm:text-4xl text-indigo-600 font-semibold'>متجر راحة؟</h1>
                            <p className='mt-4 text-lg tracking-wide font-semibold text-gray-500 leading-10 text-center'>
                                راحة هو المكان المثالي للطلاب والمكتبات والمعلمين للحصول على الكتب والمذكرات. يمكنك العثور على كل ما تحتاجه في مكان واحد، ويمكنك التأكد من أنك تحصل على أفضل الأسعار.</p>
                        </div>
                        <img src="/images/welcomeImage.svg" alt="" className='pb-4 w-96 h-96' />
                    </div>

                    <div className=''>
                        <p className='py-10 max-w-4xl text-lg tracking-wide font-semibold text-gray-500 leading-10 text-center'>
                            لدينا مجموعة واسعة من الكتب والمذكرات للطلاب من جميع المستويات، بما في ذلك كتب المدرسية والكتب المساعدة والكتب غير الدراسية. لدينا أيضًا مجموعة متنوعة من الخدمات التي يمكن أن تساعد الطلاب على تحقيق أقصى استفادة من تعليمهم، مثل المساعدة في اختيار الكتب وكتابة التقارير والتحضير للاختبارات.
                            نحن ملتزمون بتوفير تجربة تسوق رائعة للطلاب والمكتبات والمعلمين. لدينا فريق من الخبراء الذين يمكنهم مساعدتك في العثور على ما تحتاجه، ولدينا مجموعة متنوعة من خيارات الشحن والدفع التي تجعل التسوق معنا سهلاً.
                            ونأمل أن يساعدك متجر راحة على تحقيق أقصى استفادة من تعليمك، وتوفير الراحة التي تحتاجها.
                        </p>

                        <div className='mt-4'>
                            <h1 className='text-xl mb-4 text-gray-800'>فيما يلي بعض من الأسباب التي تجعل راحة هو المكان المثالي للطلاب والمكتبات والمعلمين:</h1>

                            <ul className=' list-disc text-lg text-gray-500'>
                                <li>لدينا مجموعة واسعة من الكتب والمذكرات للطلاب من جميع المستويات.</li>
                                <li>لدينا أسعار تنافسية للغاية.</li>
                                <li>لدينا فريق من الخبراء الذين يمكنهم مساعدتك في العثور على ما تحتاجه.</li>
                                <li>لدينا مجموعة متنوعة من خيارات الشحن والدفع التي تجعل التسوق معنا سهلاً.</li>
                                <li>نحن ملتزمون بتوفير تجربة تسوق رائعة للطلاب والمكتبات والمعلمين.</li>
                            </ul>

                            <p className='py-6 max-w-4xl text-xl text-gray-800'>إذا كنت طالبًا أو مكتبة أو معلمًا، فإننا نشجعك على زيارة متجر راحة اليوم. نثق أنك ستجد ما تحتاجه، وسنكون سعداء بمساعدةك في أي شيء تحتاجه.</p>
                        </div>
                    </div>

                    <div className="mt-6 mb-20 sm:items-center justify-center sm:hidden sm:mt-3 sm:ml-6">
                        <div className='flex items-center gap-3'>
                            <Link href={route('register')}>
                                <button className='bg-indigo-600 px-8 py-2 text-white font-semibold rounded-2xl hover:bg-indigo-700 shadow-lg transition-all'>
                                    إنضم إلينا الأن
                                </button>
                            </Link>
                            <Link href={route('login')}>
                                <button className='bg-white px-8 py-2 text-gray-800 border font-semibold rounded-2xl hover:bg-gray-100 shadow-sm transition-all'>
                                    تسجيل الدخول
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

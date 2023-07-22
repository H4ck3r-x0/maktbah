import AdminAuthenticatedHeader from '@/Components/AdminAuthenticatedHeader';
import AuthenticatedHeader from '@/Components/AuthenticatedHeader';
import AuthenticatedLibraryHeader from '@/Components/AuthenticatedLibraryHeader';
import GuestHeader from '@/Components/GuestHeader';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
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
            <Head title="الصفحة الرئيسية" />
            <div className=" bg-white">
                <div className="">
                    {authHeader()}
                </div>

                <div className='max-w-7xl justify-center items-center flex flex-col mx-auto sm:px-6 lg:px-8 mt-8 px-6 '>
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-3xl sm:text-4xl text-indigo-600 font-semibold'>مرحبا بكم في موقع راحة</h1>
                            <p className='mt-4 text-lg tracking-wide font-semibold text-gray-500 leading-10 text-center'>
                                راحة هو المكان المثالي للطلاب والمكتبات والمعلمين للحصول على الكتب والمذكرات.
                                يمكنك العثور على كل ما تحتاجه في مكان واحد، ويمكنك التأكد من أنك تحصل على أفضل الأسعار. ونأمل أن يساعدك موقع راحة على تحقيق أقصى استفادة من تعليمك، وتوفير الراحة التي تحتاجها
                            </p>
                        </div>
                        <img src="/images/welcomeImage.svg" alt="" className='pb-4 w-96 h-96' />
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

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

                <div className='max-w-7xl justify-center items-center flex flex-col mx-auto sm:px-6 lg:px-8 mt-16 px-6 '>
                    <h1 className='text-3xl sm:text-4xl text-indigo-600 font-semibold'>مرحبا بكم في موقع راحة</h1>
                    <p className='mt-4 text-lg tracking-wide leading-8 text-center'>
                        هذا الموقع مخصص للطلاب والطالبات والمعلمين والمعلمات
                    </p>

                    <div className="mt-8 sm:flex sm:items-center justify-center sm:hidden sm:mt-3 sm:ml-6">
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

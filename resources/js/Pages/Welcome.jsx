import AdminAuthenticatedHeader from '@/Components/AdminAuthenticatedHeader';
import AuthenticatedHeader from '@/Components/AuthenticatedHeader';
import AuthenticatedLibraryHeader from '@/Components/AuthenticatedLibraryHeader';
import GuestHeader from '@/Components/GuestHeader';
import { Head } from '@inertiajs/react';



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

                <div className='mt-10 px-6'>
                    <h1 className='text-4xl text-indigo-600 font-semibold'>مرحبا بكم في موقع راحة</h1>
                    <p className='mt-4 text-xl tracking-wide'>
                        <strong className='ml-2 text-xl'>تنبية!</strong>
                        هذا الموقع مخصص فقط للطلاب والطالبات
                    </p>
                </div>

            </div>
        </>
    );
}

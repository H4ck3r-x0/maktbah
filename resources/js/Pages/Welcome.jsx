import AdminAuthenticatedHeader from '@/Components/AdminAuthenticatedHeader';
import AuthenticatedHeader from '@/Components/AuthenticatedHeader';
import GuestHeader from '@/Components/GuestHeader';
import { Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="الصفحة الرئيسية" />
            <div className=" bg-white">
                <div className="">
                    {auth.user ? (
                        auth.user.role === 'admin' ?
                            <AdminAuthenticatedHeader user={auth.user} /> :
                            <AuthenticatedHeader user={auth.user} />
                    ) : (
                        <GuestHeader />
                    )}
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

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
            </div>
        </>
    );
}

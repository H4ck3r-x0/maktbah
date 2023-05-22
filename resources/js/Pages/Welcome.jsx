import AuthenticatedHeader from '@/Components/AuthenticatedHeader';
import GuestHeader from '@/Components/GuestHeader';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="الصفحة الرئيسية" />
            <div className=" bg-white">
                <div className="">
                    {auth.user ? (
                        <AuthenticatedHeader user={auth.user} />
                    ) : (
                        <GuestHeader />
                    )}
                </div>
            </div>
        </>
    );
}

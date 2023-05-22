import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="الصفحة الرئيسية" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('register')}
                                className="font-semibold text-gray-600 hover:text-gray-900"
                            >
                                التسجيل
                            </Link>
                            <Link
                                href={route('login')}
                                className="mr-4 font-semibold text-gray-600 hover:text-gray-900"
                            >
                                تسجيل الدخول
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

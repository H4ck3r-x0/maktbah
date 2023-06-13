import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth, library }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">لوحة التحكم المكتبة</h2>}
        >
            <Head title="لوحة التحكم المكتبة " />

            <div className="py-1">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden  sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className='pb-3 text-2xl text-gray-900'>المكتبات / الفروع</h1>
                            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{library.name}</h5>
                                <div className="mb-3 text-gray-700 ">
                                    <ul className='flex flex-col  justify-evenly gap-3 py-2'>
                                        <li>المدينة {library.city}</li>
                                        <li>الحي {library.district}</li>
                                        <li>رقم الهاتف {library.phone}</li>
                                    </ul>
                                </div>
                                <Link href={route('library.edit', library.id)}
                                    className="inline-flex items-center px-3 py-2  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                    تعديل المكتبة
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth, branch }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">لوحة التحكم فرع</h2>}
        >
            <Head title="لوحة التحكم فرع " />

            <div className="py-1">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden  sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='flex items-center flex-wrap gap-2'>
                                <div className="max-w-sm  p-6 bg-white border border-gray-200 rounded-lg shadow">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{branch.name}</h5>
                                    <div className="mb-3 text-gray-700 ">
                                        <ul className='flex flex-col  justify-evenly gap-3 py-2'>
                                            <li>المدينة {branch.city}</li>
                                            <li>الحي {branch.district}</li>
                                            <li>رقم الهاتف {branch.phone}</li>
                                        </ul>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <Link href={route('edit', branch.id)}
                                            className="inline-flex items-center px-3 py-2 text-sm  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                            تعديل المكتبة
                                        </Link>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">فرع</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

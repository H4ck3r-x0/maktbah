import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth, library, topSellingBooks }) {
    console.log(topSellingBooks)
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
                            <div className='flex items-center flex-wrap gap-2'>

                                {/* Main Library */}
                                <div className="w-full sm:max-w-sm  p-6 bg-white border border-gray-200 rounded-lg shadow">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{library.name}</h5>
                                    <div className="mb-3 text-gray-700 ">
                                        <ul className='flex flex-col  justify-evenly gap-3 py-2'>
                                            <li>المدينة {library.city}</li>
                                            <li>الحي {library.district}</li>
                                            <li>رقم الهاتف {library.phone}</li>
                                        </ul>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <Link href={route('library.edit', library.id)}
                                            className="inline-flex items-center px-3 py-2 text-sm  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                            تعديل المكتبة
                                        </Link>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">رئيسي</span>
                                    </div>
                                </div>
                                {/* Main Library */}

                                {/* Branches */}

                                {library.branches &&
                                    library.branches.map((branch) => {
                                        return (
                                            <div key={branch.id} className="w-full sm:max-w-sm  p-6 bg-white border border-gray-200 rounded-lg shadow">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{branch.name}</h5>
                                                <div className="mb-3 text-gray-700 ">
                                                    <ul className='flex flex-col  justify-evenly gap-3 py-2'>
                                                        <li>المدينة {branch.city}</li>
                                                        <li>الحي {branch.district}</li>
                                                        <li>رقم الهاتف {branch.phone}</li>
                                                    </ul>
                                                </div>
                                                <div className='flex items-center justify-between'>
                                                    <Link href={route('library.edit.branch', branch.id)}
                                                        className="inline-flex items-center px-3 py-2 text-sm  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                                        تعديل الفرع
                                                    </Link>
                                                    <span className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">فرع</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                {/* Branches */}

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='py-6'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className='text-xl mb-2 font-semibold text-gray-600'>
                        الكتب أكثر طلبا
                    </h1>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="mx-auto grid grid-cols-1 sm:max-w-full sm:mx-0 sm:grid-cols-3 p-6 gap-2 flex-wrap text-gray-900">
                            {!topSellingBooks.length && <h1>لا يوجد.</h1>}
                            {topSellingBooks.map((item) => {
                                return (
                                    <div key={item.id} className='rounded-lg shadow-lg border'>
                                        <div className='flex items-center justify-between bg-indigo-300'>
                                            <h1 className='p-2 text-white text-xl whitespace-nowrap'>{item.book_name}</h1>
                                        </div>
                                        <div className='flex flex-row justify-between gap-3 p-3'>
                                            <div className='flex flex-col items-center gap-3'>
                                                <h1 className='text-lg text-gray-600'>إجمالي المبيعات</h1>
                                                <span className='text-gray-500 font-semibold'>{item.benefits || 0} ريال</span>
                                            </div>
                                            <div className='flex flex-col items-center gap-3'>
                                                <h1 className='text-lg text-gray-600'>عدد الطلبات</h1>
                                                <span className='text-gray-500 font-semibold'>{item.total_sold || 0}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

import AdminAuthenticatedLayout from '@/Layouts/AdminAuthenticatedLayout';
import { Head } from '@inertiajs/react';
import moment from 'moment/min/moment-with-locales';

export default function Dashboard({
    auth, booksCount,
    libraryCount,
    studentCount,
    orderTotalPyments,
    maleGenderCount,
    femaleGenderCount,
    ordersCount,
    ordersCanceledByLibrary,
    ordersCanceledByUser,
    confiremdOrders,
    totalEarnings,
    topSellingBooks,
    failedSearchs,
}) {

    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-700 leading-tight">مرحبا بك {auth.user.username}، في لوحة التحكم</h2>}
        >
            <Head title="لوحة التحكم" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className='text-xl mb-2 font-semibold text-gray-600'>
                        إحصائيات
                    </h1>
                    <div className="bg-white overflow-hidden border shadow-sm sm:rounded-lg">
                        <div className="mx-auto grid grid-cols-1 sm:max-w-full sm:mx-0 sm:grid-cols-3 p-6 gap-2 flex-wrap text-gray-900">

                            <div className='rounded-lg shadow-lg border'>
                                <div className='flex items-center justify-between bg-indigo-300'>
                                    <h1 className='p-2 text-white text-xl'>إجمالي المبيعات</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 text-white w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                    </svg>

                                </div>
                                <div className='flex flex-col gap-3 p-3'>
                                    <h1 className='text-lg text-gray-600'>الإجمالي</h1>
                                    <span className='text-gray-500 font-semibold'>{orderTotalPyments || 0} ريال</span>
                                </div>
                            </div>

                            <div className='rounded-lg shadow-lg border'>
                                <div className='flex items-center justify-between bg-slate-600'>
                                    <h1 className='p-2 text-white text-xl'>إجمالي الأرباح</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 text-white w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                    </svg>

                                </div>
                                <div className='flex flex-col gap-3 p-3'>
                                    <h1 className='text-lg text-gray-600'>الإجمالي</h1>
                                    <span className='text-gray-500 font-semibold'>{totalEarnings || 0} ريال</span>
                                </div>
                            </div>

                            <div className='w-full rounded-lg shadow-lg border'>
                                <div className='flex items-center justify-between bg-indigo-300'>
                                    <h1 className='p-2 text-white text-xl'>عدد الكتب</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 text-white w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    </svg>
                                </div>
                                <div className='flex flex-col gap-3 p-3'>
                                    <h1 className='text-lg text-gray-600'>الإجمالي</h1>
                                    <span className='text-gray-500 font-semibold'>{booksCount || 0}</span>
                                </div>
                            </div>

                            <div className='rounded-lg shadow-lg border'>
                                <div className='flex items-center justify-between bg-indigo-400'>
                                    <h1 className='p-2 text-white text-xl'>عدد المكتبات</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 text-white w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                    </svg>

                                </div>
                                <div className='flex flex-col gap-3 p-3'>
                                    <h1 className='text-lg text-gray-600'>الإجمالي</h1>
                                    <span className='text-gray-500 font-semibold'>{libraryCount || 0}</span>
                                </div>
                            </div>


                            <div className='rounded-lg shadow-lg border'>
                                <div className='flex items-center justify-between bg-indigo-300'>
                                    <h1 className='p-2 text-white text-xl'>عدد الطلاب</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 text-white w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                    </svg>

                                </div>
                                <div className='flex flex-col gap-3 p-3'>
                                    <h1 className='text-lg text-gray-600'>الإجمالي</h1>
                                    <span className='text-gray-500 font-semibold'>{studentCount || 0}</span>
                                </div>
                            </div>

                            <div className='rounded-lg shadow-lg border'>
                                <div className='flex items-center justify-between bg-indigo-400'>
                                    <h1 className='p-2 text-white text-xl'>الجنس</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 text-white w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className='flex flex-row items-center justify-between gap-3 p-3'>
                                    <div className='flex flex-col items-center gap-2'>
                                        <h1 className='text-lg text-gray-600'>الذكور</h1>
                                        <span className='text-gray-500 font-semibold'>{maleGenderCount || 0}</span>
                                    </div>
                                    <div className='flex flex-col items-center gap-2'>
                                        <h1 className='text-lg text-gray-600'>الإناث</h1>
                                        <span className='text-gray-500 font-semibold'>{femaleGenderCount || 0}</span>
                                    </div>
                                </div>
                            </div>


                            <div className='rounded-lg shadow-lg border'>
                                <div className='flex items-center justify-between bg-indigo-300'>
                                    <h1 className='p-2 text-white text-xl'>عدد الطلبات</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 text-white w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                                    </svg>

                                </div>
                                <div className='flex flex-col gap-3 p-3'>
                                    <h1 className='text-lg text-gray-600'>الإجمالي</h1>
                                    <span className='text-gray-500 font-semibold'>{ordersCount || 0}</span>
                                </div>
                            </div>
                            <div className='rounded-lg shadow-lg border '>
                                <div className='flex items-center justify-between bg-green-600'>
                                    <h1 className='p-2 text-white text-xl whitespace-nowrap'>الطلبات المكتملة</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 text-white w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>


                                </div>
                                <div className='flex flex-col gap-3 p-3'>
                                    <h1 className='text-lg text-gray-600'>الإجمالي</h1>
                                    <span className='text-gray-500 font-semibold'>{confiremdOrders || 0}</span>
                                </div>
                            </div>
                            <div className='rounded-lg shadow-lg border '>
                                <div className='flex items-center justify-between bg-red-300'>
                                    <h1 className='p-2 text-white text-xl whitespace-nowrap'>الطلبات الملغية من المكتبة</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 text-white w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>


                                </div>
                                <div className='flex flex-col gap-3 p-3'>
                                    <h1 className='text-lg text-gray-600'>الإجمالي</h1>
                                    <span className='text-gray-500 font-semibold'>{ordersCanceledByLibrary || 0}</span>
                                </div>
                            </div>

                            <div className='rounded-lg shadow-lg border '>
                                <div className='flex items-center justify-between bg-red-300'>
                                    <h1 className='p-2 text-white text-xl whitespace-nowrap'>الطلبات الملغية من الطالب</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 text-white w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>


                                </div>
                                <div className='flex flex-col gap-3 p-3'>
                                    <h1 className='text-lg text-gray-600'>الإجمالي</h1>
                                    <span className='text-gray-500 font-semibold'>{ordersCanceledByUser || 0}</span>
                                </div>
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
                    <div className="bg-white border overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="mx-auto grid grid-cols-1 sm:max-w-full sm:mx-0 sm:grid-cols-3 p-6 gap-2 flex-wrap text-gray-900">
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
            <div className='py-6 pb-60'>
                <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className='text-xl mb-2 font-semibold text-gray-600'>
                        عمليات البحث عن الكتب الغير موجوده
                    </h1>
                    <div className='overflow-x-auto'>
                        <table className="min-w-full  border divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr className=''>
                                    <th scope="col" className="px-6 py-3 text-right text-md font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                                        عمليات البحث
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-right text-md font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                                        إسم الطالب / الطالبة
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-right text-md font-medium text-gray-500 uppercase tracking-wider">
                                        وقت العملية
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {failedSearchs.map((search, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {search.query}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {search.user.username}
                                        </td>
                                        <td className="w-80 px-6 py-4 whitespace-nowrap">
                                            <span>{moment(search.created_at).locale('ar').format('MMMM Do YYYY h:mm:ss a')}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </AdminAuthenticatedLayout>
    );
}

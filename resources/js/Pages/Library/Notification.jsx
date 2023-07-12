import PrimaryButton from '@/Components/PrimaryButton';
import { Link, Head } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import moment from 'moment/min/moment-with-locales';
export default function Notification({ auth, notifications }) {

    return (
        <Authenticated
            user={auth.user}
            header={
                <div className='flex items-center justify-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">التنبيهات</h2>

                    <Link href={route('library.dashboard')}>
                        <PrimaryButton>العودة</PrimaryButton>
                    </Link>
                </div>
            }
        >
            <Head title="التنبيهات" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden p-4">
                        <div className='grid grid-cols-1 gap-3'>
                            {notifications.map(notification => {
                                return (
                                    <div key={notification.id} className='bg-white flex items-center justify-between gap-3 p-6 shadow-md rounded-md'>
                                        <div className='flex items-center gap-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-600 w-8 h-8">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                                            </svg>
                                            <div className='flex flex-col gap-1'>
                                                <h1 className='text-lg text-gray-600'>
                                                    {notification.data.message}
                                                </h1>
                                                <h4 className='text-sm text-indigo-600 font-simibold'>
                                                    <span>{moment(notification.data.created_at).locale('ar').format('MMMM Do YYYY')}</span>
                                                    <span> - </span>
                                                    <span>رقم الطلب ( {notification.data.order_id} ) </span>
                                                </h4>
                                            </div>
                                        </div>
                                        <Link href={route('library.order.show', notification.data.order_id)}>
                                            <PrimaryButton>
                                                مشاهدة الطلب
                                            </PrimaryButton>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </Authenticated>
    )
}
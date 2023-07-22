import DangerButton from '@/Components/DangerButton';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import moment from 'moment/min/moment-with-locales';
export default function Index({ auth, orders }) {
    const cancelOrder = (e, id) => {
        e.preventDefault();
        router.post(route('stationery.main.orders.cancel', id));
    }

    const restoreOrder = (e, id) => {
        e.preventDefault();
        router.post(route('stationery.main.orders.restore', id));
    }

    const confirmOrder = (e, id) => {
        e.preventDefault();
        router.post(route('stationery.main.orders.confirm', id));
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">الطلبات</h2>}
        >
            <Head title="الطلبات" />
            <div className="py-6">
                <div className='w-full  items-center gap-3 px-2'>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-xs sm:text-lg text-right text-gray-500 shadow border">
                            <thead className="text-xs sm:text-lg text-gray-700  border ">
                                <tr>
                                    <th scope="col" className="px-2 py-3 whitespace-nowrap">
                                        رقم الطلب
                                    </th>
                                    <th scope="col" className="px-2 py-3 whitespace-nowrap">
                                        القرطاسية
                                    </th>
                                    <th scope="col" className="px-2 py-3 whitespace-nowrap">
                                        حالة الطلب
                                    </th>
                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                        إجمالي الطلب
                                    </th>
                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                        رسوم الخدمة
                                    </th>
                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                        الصافي
                                    </th>

                                    <th scope="col" className="px-2 py-3 whitespace-nowrap">
                                        تاريخ الانشاء
                                    </th>
                                    <th scope="col" className="px-2 py-3 whitespace-nowrap">العمليات</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map(((order) => {
                                    return (
                                        <tr key={order.id} className="bg-white ">
                                            <th scope="row" className="px-2 py-4   whitespace-nowrap ">
                                                {order.id}
                                            </th>
                                            <th scope="row" className="px-2 py-4  whitespace-nowrap ">
                                                {order.stationery.name}
                                            </th>
                                            <td className="px-2 py-4 whitespace-nowrap" style={{ color: `${order.current_status && order.model_status[order.current_status]['color']}` }}>
                                                {order.model_status[order.current_status]['message']['ar']}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {order.total} ريال
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                4%
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {order.total_payment} ريال
                                            </td>
                                            <td className="px-2 py-4 whitespace-nowrap">
                                                {moment(order.created_at).locale('ar').format('MMMM Do YYYY')}
                                            </td>
                                            {/* <td className="flex items-center gap-2 px-2 py-4 whitespace-nowrap">
                                                <Link href={route('stationery.main.order.show', order.id)}>
                                                    <PrimaryButton className='text-xs sm:text-sm'>
                                                        التفاصيل
                                                    </PrimaryButton>
                                                </Link>
                                                {order.current_status !== 'confirmed' && order.current_status !== 'canceled_by_user' || order.current_status !== 'canceled_by_stationery' &&
                                                    <SecondaryButton className='text-xs sm:text-sm whitespace-nowrap' onClick={(e) => confirmOrder(e, order.id)}>
                                                        تأكيد الطلب
                                                    </SecondaryButton>
                                                }
                                                {order.current_status !== 'canceled_by_user' &&
                                                    <DangerButton className='text-xs sm:text-sm whitespace-nowrap' onClick={(e) => cancelOrder(e, order.id)}>
                                                        إلغاء الطلب
                                                    </DangerButton>
                                                }
                                            </td> */}
                                            <td className="flex items-center gap-2 px-3 py-4 w-full">
                                                <Link href={route('stationery.main.order.show', order.id)}>
                                                    <PrimaryButton className='text-xs sm:text-sm'>
                                                        التفاصيل
                                                    </PrimaryButton>
                                                </Link>
                                                {order.current_status === 'canceled_by_stationery' ?
                                                    order.current_status !== 'canceled_by_user' &&
                                                    <SecondaryButton className='text-xs sm:text-sm whitespace-nowrap' onClick={(e) => restoreOrder(e, order.id)}>
                                                        إستعادة الطلب
                                                    </SecondaryButton> :
                                                    <div className='flex items-center gap-2 w-full'>
                                                        {order.current_status !== 'confirmed' && order.current_status !== 'canceled_by_user' &&
                                                            <SecondaryButton className='text-xs sm:text-sm whitespace-nowrap' onClick={(e) => confirmOrder(e, order.id)}>
                                                                تأكيد الطلب
                                                            </SecondaryButton>
                                                        }
                                                        {order.current_status !== 'canceled_by_user' &&
                                                            <DangerButton className='text-xs sm:text-sm whitespace-nowrap' onClick={(e) => cancelOrder(e, order.id)}>
                                                                إلغاء الطلب
                                                            </DangerButton>
                                                        }
                                                    </div>
                                                }
                                            </td>
                                        </tr>
                                    )
                                }))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout >
    )
}
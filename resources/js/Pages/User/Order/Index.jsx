import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
export default function Index({ auth, orders }) {
    console.log(orders);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">الطلبات</h2>}
        >
            <Head title="الطلبات" />
            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className='w-full sm:inline-flex items-center gap-3 px-6'>
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-xs sm:text-lg text-right text-gray-500 shadow border">
                                <thead className="text-xs sm:text-lg text-gray-700  border ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            رقم الطلب
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            حالة الطلب
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            إجمالي الطلب
                                        </th>
                                        <th scope="col" className="px-6 py-3"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order => {
                                        return (
                                            <tr key={order.id} className="bg-white ">
                                                <th scope="row" className="px-6 py-4  text-gray-900 whitespace-nowrap ">
                                                    {order.id}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {order.model_status[order.current_status]['message']['ar']}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {order.total_payment} ريال
                                                </td>
                                                <td className="px-6 py-4">
                                                    <Link href={route('user.order.show', order.id)}>
                                                        <PrimaryButton className='text-xs sm:text-sm'>
                                                            التفاصيل
                                                        </PrimaryButton>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    }))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout >
    )
}
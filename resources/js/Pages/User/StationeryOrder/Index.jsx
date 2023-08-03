import DangerButton from '@/Components/DangerButton';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import moment from 'moment/min/moment-with-locales';
import { useCallback, useEffect, useState } from 'react';
import debounce from "lodash/debounce";

export default function Index({ auth, orders, STATUS }) {
    const filters = usePage().props.filters;
    const { data, setData, get, reset } = useForm({
        search: filters.search,
        status: filters.status,
    });

    const searchOrders = () => {
        get(route('order.stationery.index',
            { search: data.search, status: data.status }),
            {
                preserveScroll: true,
                preserveState: true,
                replace: true
            });
    };

    const delayedSearch = useCallback(
        debounce(searchOrders, 500),

        [data.search, data.status]
    );

    useEffect(() => {
        delayedSearch();

        return delayedSearch.cancel;
    }, [data.search, data.status, delayedSearch])


    const statusChanged = (e) => {
        setData('status', e.target.value);
    }

    const cancelOrder = (e, id) => {
        e.preventDefault();
        router.post(route('order.stationery.cancel', id));
    }

    const restoreOrder = (e, id) => {
        e.preventDefault();
        router.post(route('order.stationery.restore', id));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">الطلبات</h2>}
        >
            <Head title="الطلبات" />
            <div className="py-6">
                <div className='w-full  items-center gap-3 px-2'>
                    <div className='w-full flex flex-col sm:flex-row ml-4  gap-3 pb-4 '>
                        <input
                            value={data.search || ''}
                            onChange={(e) => setData('search', e.target.value)}
                            type="text"
                            className='w-full sm:max-w-xl md:max-w-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'
                            placeholder='إبحث برقم الطلب ، اسم المكتبة'
                        />

                        <select
                            onChange={statusChanged}
                            className='block  border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'
                        >
                            <option value="">إختر حالة الطلب</option>
                            {Object.keys(STATUS).map((key, index) => {
                                return (
                                    <option key={index} value={key}>{STATUS[key].message.ar}</option>
                                )
                            })}
                        </select>

                        <PrimaryButton onClick={() => reset()}>
                            إعادة تعيين
                        </PrimaryButton>
                    </div>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-xs sm:text-lg text-right text-gray-500 shadow border">
                            <thead className="text-xs sm:text-lg text-gray-700  border ">
                                <tr>
                                    <th scope="col" className="px-2 py-3">
                                        رقم الطلب
                                    </th>
                                    <th scope="col" className="px-2 py-3">
                                        القرطاسية
                                    </th>
                                    <th scope="col" className="px-2 py-3">
                                        حالة الطلب
                                    </th>
                                    <th scope="col" className="px-2 py-3">
                                        إجمالي الطلب
                                    </th>
                                    <th scope="col" className="px-2 py-3">
                                        تاريخ الانشاء
                                    </th>
                                    <th scope="col" className="px-2 py-3">العمليات</th>
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
                                                {order.stationery?.name || order.stationery_branch?.name}
                                            </th>
                                            <td className="px-2 py-4" style={{ color: `${order.current_status && order.model_status[order.current_status]['color']}` }}>
                                                {order.model_status[order.current_status]['message']['ar']}
                                            </td>
                                            <td className="px-2 py-4">
                                                {order.total} ريال
                                            </td>
                                            <td className="px-2 py-4">
                                                {moment(order.created_at).locale('ar').format('MMMM Do YYYY')}
                                            </td>
                                            <td className="flex items-center gap-2 px-2 py-4">
                                                <Link href={route('order.stationery.show', order.id)}>
                                                    <PrimaryButton className='text-xs sm:text-sm'>
                                                        التفاصيل
                                                    </PrimaryButton>
                                                </Link>
                                                {order.current_status === 'canceled_by_user' ?
                                                    <SecondaryButton className='text-xs sm:text-sm' onClick={(e) => restoreOrder(e, order.id)}>
                                                        إستعادة الطلب
                                                    </SecondaryButton> :

                                                    order.current_status !== 'confirmed' && order.current_status !== 'canceled_by_stationery' &&
                                                    <DangerButton className='text-xs sm:text-sm' onClick={(e) => cancelOrder(e, order.id)}>
                                                        إلغاء الطلب
                                                    </DangerButton>
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
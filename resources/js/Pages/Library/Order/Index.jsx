import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import { useCallback, useEffect } from 'react';
import debounce from "lodash/debounce";
import TextInput from '@/Components/TextInput';
import SecondaryButton from '@/Components/SecondaryButton';
import DangerButton from '@/Components/DangerButton';

export default function Index({ auth, orders }) {
    const filters = usePage().props.filters;
    const currentPage = usePage().props.currentPage;
    const { data, setData, get, processing } = useForm({
        search: filters.search,
    });

    const search = (e) => {
        setData('search', e.target.value);
    }

    const searchBooks = () => {
        get(route('library.order.index', { search: data.search, page: currentPage }), {
            preserveScroll: true,
            preserveState: true,
            replace: true
        });
    }

    const delayedSearch = useCallback(
        debounce(searchBooks, 500),

        [data.search]
    );

    useEffect(() => {
        delayedSearch();

        return delayedSearch.cancel;
    }, [data.search, delayedSearch]);

    const cancelOrder = (e, id) => {
        e.preventDefault();
        router.post(route('library.order.cancel', id));
    }

    const restoreOrder = (e, id) => {
        e.preventDefault();
        router.post(route('library.order.restore', id));
    }

    const confirmOrder = (e, id) => {
        e.preventDefault();
        router.post(route('library.order.confirm', id));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">الطلبات</h2>}
        >
            <Head title="الطلبات" />
            <div className="py-6">
                <div className='w-full items-center gap-3 px-6'>
                    <div className='pb-3'>
                        <div className='flex items-center gap-4'>
                            <TextInput
                                type="text"
                                id="search"
                                name="search"
                                className=" w-80"
                                value={data.search ? data.search : ''}
                                autoComplete="search"
                                onChange={search}
                                placeholder="رقم الطلب،  صاحب الطلب"

                            />
                            <div className=' hidden sm:block'>
                                {data.search !== '' ?
                                    <PrimaryButton onClick={() => setData('search', '')}>
                                        إعادة تعيين
                                    </PrimaryButton> : null
                                }
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-xs sm:text-lg text-right text-gray-500 shadow border">
                            <thead className="text-xs sm:text-lg text-gray-700  border ">
                                <tr>
                                    <th scope="col" className="w-20 px-6 py-3 whitespace-nowrap">
                                        رقم الطلب
                                    </th>
                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                        صاحب الطلب
                                    </th>
                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
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
                                    <th scope="col" className="px-6 py-3 whitespace-nowrap ">العمليات</th>
                                </tr>
                            </thead>
                            <tbody className={`${processing ? 'opacity-50' : ''}`}>
                                {orders.map(((order) => {
                                    return (
                                        <tr key={order.id} className="bg-white ">
                                            <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap">
                                                {order.id}
                                            </th>
                                            <th scope="row" className="px-6 py-4 whitespace-nowrap">
                                                {order.user.username}
                                            </th>
                                            <td className="px-6 py-4 whitespace-nowrap" style={{ color: `${order.current_status && order.model_status[order.current_status]['color']}` }}>
                                                {order.model_status[order.current_status]['message']['ar']}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {order.total_payment} ريال
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                4%
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {order.total} ريال
                                            </td>
                                            <td className="flex items-center gap-2 px-3 py-4 w-full">
                                                <Link href={route('library.order.show', order.id)}>
                                                    <PrimaryButton className='text-xs sm:text-sm'>
                                                        التفاصيل
                                                    </PrimaryButton>
                                                </Link>
                                                {order.current_status === 'canceled_by_library' ?
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
                                                        {order.current_status !== 'canceled_by_user' || order.current_status !== 'confiremd' &&
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
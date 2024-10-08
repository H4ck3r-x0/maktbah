import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import moment from 'moment/min/moment-with-locales';
import { useCallback, useEffect } from 'react';
import debounce from "lodash/debounce";
import TextInput from '@/Components/TextInput';

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
        get(route('admin.order.index', { search: data.search, page: currentPage }), {
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
    }, [data.search, delayedSearch])

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">الطلبات</h2>}
        >
            <Head title="الطلبات" />
            <div className="py-6">
                <div className='w-full items-center gap-3 px-2'>
                    <div className='pb-3'>
                        <div className='flex items-center gap-4'>
                            <TextInput
                                type="text"
                                id="search"
                                name="search"
                                className=" w-80"
                                value={data.search || ''}
                                onChange={search}
                                placeholder="رقم الطلب ، صاحب الطلب ،اسم المكتبة"
                            />
                        </div>
                    </div>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-xs sm:text-lg text-right text-gray-500 shadow border">
                            <thead className="text-xs sm:text-lg text-gray-700  border ">
                                <tr>
                                    <th scope="col" className="w-20 px-2 py-3 whitespace-nowrap">
                                        رقم الطلب
                                    </th>
                                    <th scope="col" className="px-2 py-3 whitespace-nowrap">
                                        صاحب الطلب
                                    </th>
                                    <th scope="col" className="px-2 py-3 whitespace-nowrap">
                                        أسم المكتبة
                                    </th>
                                    <th scope="col" className="px-2 py-3 whitespace-nowrap">
                                        حالة الطلب
                                    </th>
                                    <th scope="col" className="px-2 py-3 whitespace-nowrap">
                                        إجمالي الطلب
                                    </th>
                                    <th scope="col" className="px-2 py-3 whitespace-nowrap">
                                        تاريخ الانشاء
                                    </th>
                                    <th scope="col" className="px-2 py-3 whitespace-nowrap">العمليات</th>
                                </tr>
                            </thead>
                            <tbody className={`${processing ? 'opacity-50' : ''}`}>
                                {orders.map(((order) => {
                                    return (
                                        <tr key={order.id} className="bg-white ">
                                            <th scope="row" className="px-2 py-4  text-gray-900 whitespace-nowrap ">
                                                {order.id}
                                            </th>
                                            <th scope="row" className="px-2 py-4 whitespace-nowrap">
                                                {order.user.username}
                                            </th>
                                            <th scope="row" className="px-2 py-4 whitespace-nowrap">
                                                {order.details[0]?.book.library ?
                                                    order.details[0]?.book.library.name :
                                                    order.details[0]?.book.branch.name}
                                            </th>
                                            <td className="px-2 py-4 whitespace-nowrap" style={{ color: `${order.current_status && order.model_status[order.current_status]['color']}` }}>
                                                {order.model_status[order.current_status]['message']['ar']}
                                            </td>
                                            <td className="px-2 py-4 whitespace-nowrap">
                                                {order.total_payment} ريال
                                            </td>
                                            <td className="px-2 py-4 whitespace-nowrap">
                                                {moment(order.created_at).locale('ar').format('MMMM Do YYYY')}
                                            </td>
                                            <td className="px-2 py-4 whitespace-nowrap">
                                                <Link href={route('admin.order.show', order.id)}>
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
        </AuthenticatedLayout>
    )
}
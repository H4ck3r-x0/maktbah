import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminAuthenticatedLayout from '@/Layouts/AdminAuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import Pagination from '@/Pages/Components/Pagination';
export default function Index({ auth, books }) {
    const filters = usePage().props.filters;
    const currentPage = usePage().props.currentPage;
    const { data, setData, get } = useForm({
        search: filters.search,
        orderd: filters.orderd,
    });

    const search = (e) => {
        setData('search', e.target.value);
    }

    const orderdChanged = (e) => {
        setData('orderd', e.target.value);
    }

    const searchBooks = () => {
        get(route('admin.book.index', { search: data.search, orderd: data.orderd, page: currentPage }), {
            preserveScroll: true,
            preserveState: true,
            replace: true
        });
    }

    const delayedSearch = useCallback(
        debounce(searchBooks, 500),

        [data.search, data.orderd, currentPage]
    );

    useEffect(() => {
        delayedSearch();

        return delayedSearch.cancel;
    }, [data.search, data.orderd, delayedSearch])

    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex items-center justify-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">جميع الكتب</h2>

                    <Link href={route('admin.book.create')}>
                        <PrimaryButton>إضافة كتاب جديد</PrimaryButton>
                    </Link>
                </div>
            }
        >
            <Head title="جميع الكتب" />

            <div className="py-6">
                <div className='w-full  gap-3 px-6'>
                    <div className='pb-3'>
                        <div className='flex flex-col  sm:flex-row gap-4'>
                            <TextInput
                                type="text"
                                id="search"
                                name="search"
                                value={data.search || ''}
                                autoComplete="search"
                                onChange={search}
                                placeholder="أبحث بالاسم .."
                            />

                            <select
                                onChange={orderdChanged}
                                name="bookOrdered" id="bookOrdered"
                                className=' block  border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'
                            >
                                <option value="">أعلى الكتب طلب</option>
                                <option value="highest">الأعلى</option>
                                <option value="lowest">الأقل</option>
                            </select>

                            {data.search !== '' ?
                                <PrimaryButton onClick={() => {
                                    setData('search', '');
                                    setData('orderd', '');
                                }}>
                                    إعادة تعيين
                                </PrimaryButton> : null
                            }
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="relative overflow-x-auto">
                                <table className={`w-full text-sm text-right text-gray-500 border `}>
                                    <thead className="text-sm text-gray-700 uppercase bg-gray-100 rounded-md border">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 tracking-wider">
                                                أسم الكتاب
                                            </th>
                                            <th scope="col" className="px-6 py-3 tracking-wider">
                                                أسم المؤلف
                                            </th>
                                            <th scope="col" className="px-6 py-3 tracking-wider">
                                                رقم الطبعة
                                            </th>
                                            <th scope="col" className="px-6 py-3 tracking-wider">
                                                رقم المجلد
                                            </th>
                                            <th scope="col" className="px-6 py-3 tracking-wider">
                                                عدد الطلبات
                                            </th>
                                            <th scope="col" className="px-6 py-3 tracking-wider">
                                                العمليات
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {books.data.map(book => (
                                            <tr className="bg-white border-b hover:bg-gray-100 hover:transition-all" key={book.id}>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                                                    {book.book_name}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {book.author_name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {book.edition_number}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {book.volume_number}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {book.count_orders_count}
                                                </td>
                                                <td className="px-0 py-4">
                                                    <div className='flex items-center gap-2'>
                                                        <Link href={route('admin.book.edit', book.id)}>
                                                            <PrimaryButton>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                </svg>
                                                            </PrimaryButton>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <Pagination class="mt-6" links={books.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminAuthenticatedLayout >
    );
}

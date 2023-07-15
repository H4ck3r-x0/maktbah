import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminAuthenticatedLayout from '@/Layouts/AdminAuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useCallback, useEffect } from 'react';
import debounce from "lodash/debounce";
import Pagination from '@/Pages/Components/Pagination';

export default function Index({ auth, users }) {
    const filters = usePage().props.filters;
    const currentPage = usePage().props.currentPage;

    const { data, setData, get, reset } = useForm({
        search: filters.search,
        account_type: filters.account_type,
    });


    const search = (e) => {
        setData('search', e.target.value);
    }

    const accountType = (e) => {
        setData('account_type', e.target.value);
    }

    const searchUsers = () => {
        get(route('admin.user.index', { search: data.search, account_type: data.account_type, page: currentPage }), {
            preserveScroll: true,
            preserveState: true,
            replace: true
        });
    };

    const delayedSearch = useCallback(
        debounce(searchUsers, 500),

        [data.search, data.account_type, currentPage]
    );

    useEffect(() => {
        delayedSearch();
        return delayedSearch.cancel;
    }, [data.search, data.account_type, delayedSearch])



    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex items-center justify-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">جميع اعضاء الموقع</h2>

                    <Link href={route('admin.user.create')}>
                        <PrimaryButton>إضافة عضو جديد</PrimaryButton>
                    </Link>
                </div>
            }
        >
            <Head title="جميع اعضاء الموقع" />

            <div className="">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className='py-3'>
                        <div className='flex items-center gap-4'>
                            <TextInput
                                type="text"
                                id="search"
                                name="search"
                                value={data.search ? data.search : ''}
                                autoComplete="search"
                                onChange={search}
                                placeholder="أبحث بالاسم .."
                            />

                            <div className='mb-2'>
                                <select
                                    onChange={accountType}
                                    value={data.account_type}
                                    name="account_type"
                                    id="account_type"
                                    className='mt-2 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'>
                                    <option value="">أختر نوع الحساب</option>
                                    <option value="user">طالب / طالبة</option>
                                    <option value="library">مكتبة</option>
                                    <option value="teacher">استاذ / استاذة</option>
                                    <option value="stationery">قرطاسية</option>
                                </select>
                            </div>

                            {data.search !== '' || data.account_type !== '' ?
                                <PrimaryButton onClick={() => reset()}>
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
                                            <th scope="col" className="px-6 py-3">
                                                #
                                            </th>
                                            <th scope="col" className="px-6 py-3 tracking-wider">
                                                الاسم
                                            </th>
                                            <th scope="col" className="px-6 py-3 tracking-wider">
                                                الجوال
                                            </th>
                                            <th scope="col" className="px-6 py-3 tracking-wider">
                                                المدينة
                                            </th>
                                            <th scope="col" className="px-6 py-3 tracking-wider">
                                                الفئة
                                            </th>
                                            <th scope="col" className="px-6 py-3 tracking-wider">
                                                العمليات
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.data.map(user => (
                                            <tr className="bg-white border-b hover:bg-gray-100 hover:transition-all" key={user.id}>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                                                    {user.id}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {user.name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {user.phone}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {user.city}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {user.role_name}
                                                </td>
                                                <td className="px-0 py-4">
                                                    <div className='flex items-center gap-2'>
                                                        <Link href={route('admin.user.edit', user.id)}>
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

                                <Pagination class="mt-6" links={users.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminAuthenticatedLayout>
    );
}

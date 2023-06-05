import DangerButton from '@/Components/DangerButton';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import AdminAuthenticatedLayout from '@/Layouts/AdminAuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';
import debounce from "lodash/debounce";

export default function Index({ auth, libraries }) {
    const { data, setData, delete: destroy, get, processing, reset } = useForm({
        search: '',
    });

    const search = (e) => {
        setData('search', e.target.value);
    }

    const deleteLibraray = (id) => {
        const confirmDelete = window.confirm('هل انت متاكد من حذف المكتبة، ستخسر جميع البيانات');
        if (confirmDelete === true) {
            destroy(route('admin.library.destroy', id));
        }
    }

    useEffect(() => {
        const debouncedSearch = debounce(() => {
            get(route('admin.library.index', { search: data.search }), {
                preserveScroll: true,
                preserveState: true,
                replace: true
            });
        }, 500);

        debouncedSearch();

    }, [data.search])

    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex items-center justify-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">جميع المكتبات</h2>

                    <Link href={route('admin.library.create')}>
                        <PrimaryButton>إضافة مكتبة</PrimaryButton>
                    </Link>
                </div>
            }
        >
            <Head title="جميع المكتبات" />


            <div className="">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className='py-3'>
                        <div className='flex items-center gap-4'>
                            <TextInput
                                type="text"
                                id="search"
                                name="search"
                                value={data.search}
                                autoComplete="search"
                                onChange={search}
                                placeholder="أبحث بإسم المكتبة او صاحبها"
                            />

                            {data.search !== '' ?
                                <PrimaryButton onClick={() => reset()}>
                                    إعادة تعيين
                                </PrimaryButton> : null
                            }

                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="relative overflow-x-auto">
                                <table className={`w-full text-sm text-right text-gray-500 border ${processing ? 'opacity-25 transition-opacity' : ''}`}>
                                    <thead className="text-sm text-gray-700 uppercase bg-gray-100 rounded-md border">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                #
                                            </th>
                                            <th scope="col" className="px-6 py-3 tracking-wider">
                                                أسم المكتبة
                                            </th>
                                            <th scope="col" className="px-6 py-3 tracking-wider">
                                                صاحب المكتبة
                                            </th>
                                            <th scope="col" className="px-6 py-3 tracking-wider">
                                                العمليات
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {libraries.data.map(library => (
                                            <tr className="bg-white border-b hover:bg-gray-100 hover:transition-all" key={library.id}>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                                                    {library.id}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {library.name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {library.user.name}
                                                </td>
                                                <td className="px-0 py-4">
                                                    <div className='flex items-center gap-2'>
                                                        <Link href={route('admin.library.edit', library.id)}>
                                                            <PrimaryButton>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                </svg>
                                                            </PrimaryButton>
                                                        </Link>
                                                        <DangerButton onClick={() => deleteLibraray(library.id)} disabled={processing}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                            </svg>
                                                        </DangerButton>
                                                        <a href={library.google_maps} target='blank'>
                                                            <SecondaryButton>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                                </svg>
                                                            </SecondaryButton>
                                                        </a>
                                                    </div>

                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminAuthenticatedLayout>
    );
}

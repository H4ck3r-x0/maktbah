import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useCallback, useEffect } from 'react';
import debounce from "lodash/debounce";
import Pagination from '@/Pages/Components/Pagination';
import moment from 'moment/min/moment-with-locales';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Search({ auth, notes }) {
    const filters = usePage().props.filters;
    const currentPage = usePage().props.currentPage;

    const { data, setData, get } = useForm({
        search: filters.search,
    });

    const searchBooks = () => {
        get(route('search.notes.index',
            { search: data.search, page: currentPage }),
            {
                preserveScroll: true,
                preserveState: true,
                replace: true
            });
    };

    const delayedSearch = useCallback(
        debounce(searchBooks, 500),

        [data.search, currentPage]
    );

    useEffect(() => {
        delayedSearch();

        return delayedSearch.cancel;
    }, [data.search, delayedSearch])




    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="البحث عن المذكرات" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className='w-full  sm:inline-flex ml-4 items-center gap-3 px-6 '>
                        <input
                            value={data.search || ''}
                            onChange={(e) => setData('search', e.target.value)}
                            type="text"
                            className='w-full p-3  border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'
                            placeholder="إبحث بإسم المذكرة، الأستاذ/ه ..."
                        />
                    </div>

                    <div className="overflow-hidden sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-1  gap-4'>
                                {!notes.data.length &&
                                    <div>
                                        <h1 className='text-center sm:text-right text-lg sm:text-xl text-gray-900'>
                                            لا يوجد تطابق لبحثك، حاول مره اخرى!
                                        </h1>
                                    </div>
                                }
                                {notes.data.map(note => {
                                    return (
                                        <div key={note.id} className='grid grid-cols-1 gap-4'>
                                            <div className='bg-white p-4 rounded-md shadow-md'>
                                                <div className='flex flex-col gap-2'>
                                                    <h1 className='text-xl text-gray-800'>
                                                        <span className='font-semibold text-gray-700'>إسم المذكرة :</span>
                                                        <span> {note.name}</span>
                                                    </h1>
                                                    <h4>
                                                        <span className='text-sm text-gray-500'>{moment(note.created_at).locale('ar').format('MMMM Do YYYY')}</span>
                                                        <span> - </span>
                                                        <span className='text-sm text-gray-500'>{note.user.username}</span>
                                                    </h4>
                                                </div>

                                                <div className='py-4'>
                                                    <p>
                                                        {note.description}
                                                    </p>
                                                </div>
                                                <div className='flex justify-end py-3'>
                                                    <Link href={route('search.stationeries.index', note.id)}>
                                                        <PrimaryButton>
                                                            <div className='flex items-center gap-2'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                                                                </svg>

                                                                أختر القرطاسية للطباعة
                                                            </div>
                                                        </PrimaryButton>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <Pagination class="mt-6" links={notes.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

import DangerButton from '@/Components/DangerButton';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';

export default function Index({ auth, carts, total }) {
    const [loading, setLoading] = useState(false);

    const handleRemoveBook = (id) => {
        router.post(route('search.books.destroy'), { id }, {
            preserveScroll: true,
            onBefore: () => {
                setLoading(true);
            },
            onSuccess: () => {
                setLoading(false);
            }
        });
    }

    const createOrder = () => {
        router.post(route('user.cart.store'), { carts }, {
            preserveScroll: true,
            onBefore: () => {
                setLoading(true);
            },
            onSuccess: () => {
                setLoading(false);
            }
        });
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">السلة</h2>}
        >
            <Head title="السلة" />
            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className='w-full sm:inline-flex ml-4 items-center gap-3 px-6'>
                        <div className='grid grid-cols-1 sm:grid-cols-1 gap-3 w-full'>
                            <div className='flex flex-col items-center  bg-white p-6 shadow-lg rounded-lg'>
                                {carts.length > 0 ?
                                    <>
                                        <h1 className='text-xl text-gray-600 font-semibold'>
                                            <span>إجمالي المشتريات:</span>
                                            <span className='text-lg text-gray-500'> {total} SAR</span>
                                        </h1>
                                        <div>
                                            <PrimaryButton disabled={loading} onClick={createOrder}>
                                                إكمال الشراء
                                            </PrimaryButton>
                                        </div>
                                    </> :
                                    <div className='flex flex-col items-center gap-2'>
                                        <h1 className='text-xl'>لا يوجد كتب في السلة.</h1>
                                        <Link href={route('search.books.index')}>
                                            <PrimaryButton>
                                                إذهب الى الكتب
                                            </PrimaryButton>
                                        </Link>
                                    </div>
                                }

                            </div>
                            <div className=''>
                                {carts?.map(item => {
                                    return item.books.map(item => {
                                        return (
                                            <div key={item.id} className='bg-white p-6 shadow-lg rounded-lg mb-4'>
                                                <div className="flex flex-col sm:flex-row items-center justify-between">
                                                    <div className="w-full sm:w-1/2">
                                                        <h1 className="text-gray-900 text-center sm:text-right font-bold text-2xl mb-4">{item.book.book_name}</h1>
                                                        <div className='flex flex-col sm:flex-row sm:items-center flex-wrap gap-2 mt-1'>
                                                            <span className='text-lg text-gray-600 font-semibold'>الكاتب:</span>
                                                            <span className='bg-blue-100 text-blue-800 text-lg sm:text-xs  mr-1 px-2.5 py-0.5 rounded '>{item.book.author_name}</span>
                                                            <span className='text-lg text-gray-600 font-semibold'>رقم الطبعة:</span>
                                                            <span className='bg-blue-100 text-blue-800 text-lg sm:text-xs  mr-1 px-2.5 py-0.5 rounded'>{item.book.edition_number}</span>
                                                            <span className='text-lg text-gray-600 font-semibold'>رقم المجلد:</span>
                                                            <span className='bg-blue-100 text-blue-800 text-lg sm:text-xs  mr-1 px-2.5 py-0.5 rounded'>{item.book.volume_number}</span>
                                                        </div>
                                                    </div>
                                                    {item.offer &&
                                                        <div className="max-w-sm mt-3 p-4 border rounded shadow-sm">
                                                            <h3 className="text-sm text-red-500 font-semibold ">عرض إضافي</h3>
                                                            <span className="text-sm text-justify mt-1">{item.offer}</span>
                                                        </div>
                                                    }
                                                </div>

                                                <div>
                                                    <div className='flex sm:items-center flex-col sm:flex-row flex-wrap gap-1 pt-4 '>
                                                        {item.library !== null ?
                                                            <>
                                                                <span className='text-lg text-gray-600 font-semibold'>المكتبة:</span>
                                                                <span className='bg-gray-100 text-gray-800 text-lg sm:text-xs mr-1 px-2.5 py-0.5 rounded'>{item.library?.name}</span>
                                                                <span className='text-lg text-gray-600 font-semibold'>المدينة:</span>
                                                                <span className='bg-gray-100 text-gray-800 text-lg sm:text-xs mr-1 px-2.5 py-0.5 rounded'>{item.library?.city}</span>
                                                                <span className='text-lg text-gray-600 font-semibold'>الحي:</span>
                                                                <span className='bg-gray-100 text-gray-800 text-lg sm:text-xs  mr-1 px-2.5 py-0.5 rounded'>{item.library?.district}</span></>
                                                            :
                                                            <>
                                                                <span className='text-lg text-gray-600 font-semibold'>المكتبة:</span>
                                                                <span className='bg-gray-100 text-gray-800 text-lg sm:text-xs mr-1 px-2.5 py-0.5 rounded'>{item.branch?.name}</span>
                                                                <span className='text-lg text-gray-600 font-semibold'>المدينة:</span>
                                                                <span className='bg-gray-100 text-gray-800 text-lg sm:text-xs mr-1 px-2.5 py-0.5 rounded'>{item.branch?.city}</span>
                                                                <span className='text-lg text-gray-600 font-semibold'>الحي:</span>
                                                                <span className='bg-gray-100 text-gray-800 text-lg sm:text-xs  mr-1 px-2.5 py-0.5 rounded'>{item.branch?.district}</span></>
                                                        }

                                                    </div>
                                                </div>
                                                <div className="flex item-center justify-between mt-6 ">
                                                    <h1 className="text-blue-500 font-bold text-xl mt-1">SAR {item.price}</h1>
                                                    <div className="flex items-center gap-2">
                                                        <DangerButton disabled={loading} onClick={() => handleRemoveBook(item.id)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                            </svg>
                                                        </DangerButton>
                                                    </div>
                                                </div>
                                                {item.ad_image &&
                                                    <div className="py-4 ">
                                                        <img src={item.ad_image} className="w-full h-96  shadow-lg rounded-lg" alt="" loading="lazy" />
                                                    </div>
                                                }
                                            </div>
                                        )
                                    })
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
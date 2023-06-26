import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
export default function Index({ auth, carts }) {
    const user_cart = usePage().props.user_cart

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">السلة</h2>}
        >
            <Head title="السلة" />
            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className='w-full sm:inline-flex ml-4 items-center gap-3 px-6 '>
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 w-full'>
                            <div className='sm:col-span-2'>
                                {carts?.map(item => {
                                    console.log(item)
                                    return (
                                        <div key={item.id} className='bg-white p-6 shadow-lg rounded-lg mb-4'>
                                            <div>
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

                                        </div>
                                    )
                                })}

                            </div>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
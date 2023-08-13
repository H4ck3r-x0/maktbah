import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { router, usePage } from '@inertiajs/react';
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';

export default function BookCard({ book }) {
    const user_cart = usePage().props.user_cart;
    const [loading, setLoading] = useState(false);

    const handleAddBook = ({ id, price, offer, book_id, library_id }) => {
        router.post(route('search.books.store'), { id, price, offer, book_id, library_id }, {
            preserveScroll: true,
            onBefore: () => {
                setLoading(true);
            },
            onSuccess: () => {
                setLoading(false);
                toast.success('تم إضافة الكتاب الى السلة', {
                    duration: 4000,
                    position: 'top-center',
                    style: {},
                    className: '',
                    icon: '👏',
                    iconTheme: {
                        primary: '#000',
                        secondary: '#fff',
                    },
                    ariaProps: {
                        role: 'status',
                        'aria-live': 'polite',
                    },
                });
            }
        });
    }

    const handleRemoveBook = (id) => {
        router.post(route('search.books.destroy'), { id }, {
            preserveScroll: true,
            onBefore: () => {
                setLoading(true);
            },
            onSuccess: () => {
                setLoading(false);
                toast.success('تم إزالة الكتاب من السلة', {
                    duration: 4000,
                    position: 'top-center',
                    style: {},
                    className: '',
                    icon: '👏',
                    iconTheme: {
                        primary: '#000',
                        secondary: '#fff',
                    },
                    ariaProps: {
                        role: 'status',
                        'aria-live': 'polite',
                    },
                });
            }
        });
    }

    return (
        <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
            <Toaster />
            <div className="w-full p-5">
                <h1 className="text-xl text-gray-900 font-bold sm:text-2xl ">
                    أسم الكتاب: {book.book.book_name}
                </h1>
                <div className="flex flex-col sm:flex-row flex-wrap gap-2 py-6">
                    <span className="text-xl sm:text-2xl text-gray-600 font-semibold">الكاتب:</span>
                    <span className="bg-blue-100 text-blue-800 text-xl sm:text-2xl px-2.5 py-0.5 rounded">{book.book.author_name}</span>
                    <span className="text-xl sm:text-2xl text-gray-600 font-semibold">رقم الطبعة:</span>
                    <span className="bg-blue-100 text-blue-800 text-lg sm:text-2xl px-2.5 py-0.5 rounded">{book.book.edition_number}</span>
                    <span className="text-xl sm:text-2xl text-gray-600 font-semibold">رقم المجلد:</span>
                    <span className="bg-blue-100 text-blue-800 text-lg sm:text-2xl px-2.5 py-0.5 rounded">{book.book.volume_number}</span>
                </div>
                {book.offer && (
                    <div className="max-w-sm mt-3 p-4 border rounded shadow-sm bg-indigo-100">
                        <h3 className="text-xl sm:text-2xl text-indigo-500 font-semibold mb-1">عرض إضافي</h3>
                        <span className="text-xl sm:text-2xl text-justify">{book.offer}</span>
                    </div>
                )}
                <div className="flex flex-col sm:flex-row flex-wrap gap-2 py-6">
                    <span className="text-xl sm:text-2xl text-gray-600 font-semibold">المكتبة:</span>
                    <span className="bg-gray-100 text-gray-800 text-lg px-2.5 py-0.5 rounded">{book.library?.name}</span>
                    <span className="text-xl sm:text-2xl text-gray-600 font-semibold">المدينة:</span>
                    <span className="bg-gray-100 text-gray-800 text-xl sm:text-2xl px-2.5 py-0.5 rounded">{book.library?.city}</span>
                    <span className="text-xl sm:text-2xl text-gray-600 font-semibold">الحي:</span>
                    <span className="bg-gray-100 text-gray-800 text-xl sm:text-2xl px-2.5 py-0.5 rounded">{book.library?.district}</span>
                </div>

                <div className="flex items-center justify-between mt-6">
                    <h1 className="text-blue-500 font-bold text-2xl">{book.price} ريال</h1>
                    <div className="flex items-center gap-2">
                        {user_cart?.cart?.length > 0 && user_cart.cart.some(b => b.book_library_id == book.id) ? (
                            <DangerButton disabled={loading} onClick={() => handleRemoveBook(book.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </DangerButton>
                        ) : (
                            <PrimaryButton disabled={loading} onClick={() => handleAddBook(book)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </PrimaryButton>
                        )}
                    </div>
                </div>
                {book.ad_image && (
                    <div className="py-4">
                        <img src={book.ad_image} className="w-full h-96 shadow-lg rounded-lg" alt="" loading="lazy" />
                    </div>
                )}
            </div>
        </div>
    )
}
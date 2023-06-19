import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import DangerButton from '@/Components/DangerButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { router } from '@inertiajs/react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Create({ auth, books, addedBooks }) {
    const [libBooks, setLibBooks] = useState([]);
    const [qty, setQty] = useState("");
    const [price, setPrice] = useState("");

    const submit = (e) => {
        e.preventDefault();
        router.post(route('book.store'), { libBooks });
    };

    useEffect(() => {
        if (addedBooks.length > 0) {
            setLibBooks(addedBooks);
        }
    }, [addedBooks])

    const updateBook = (e, bookId) => {
        e.preventDefault();
        let book = libBooks.filter(book => book.book_id === bookId);

        router.patch(route('book.update', bookId), { book }, {
            preserveScroll: true,
        });
    }


    const addBooks = (bookID) => {
        if (price === '' || qty === "") {
            alert('الرجاء اضافه اكمال جميع بيانات الكتاب');
            return;
        }
        setLibBooks(currentLibBooks => {
            return [
                ...currentLibBooks,
                { book_id: bookID, qty: qty, price: price }
            ]
        })
        setQty('');
        setPrice('');
    }
    const removeBook = (e, bookID) => {
        e.preventDefault();
        router.delete(route('book.destroy', bookID), {
            preserveScroll: true,
            onSuccess: () => {
                setLibBooks(currentLibBooks => {
                    return currentLibBooks.filter(book => book.book_id !== bookID);
                })
            }
        });

    }

    const qtyChanged = (e, bookId) => {
        const { value } = e.target;
        setQty(value)
        if (value !== '') {
            setLibBooks((currentLibBooks) => {
                return currentLibBooks.map((book) => book.book_id == bookId ? { ...book, qty: value } : book)
            })
        }
    }

    const priceChanged = (e, bookId) => {
        const { value } = e.target;
        setPrice(value)
        if (value !== '') {
            setLibBooks((currentLibBooks) => {
                return currentLibBooks.map((book) => book.book_id == bookId ? { ...book, price: value } : book)
            })
        }
    }

    return (
        <Authenticated
            user={auth.user}
            header={
                <div className='flex items-center justify-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">إضافة كتاب جديد</h2>

                    <Link href={route('library.dashboard')}>
                        <PrimaryButton>العودة</PrimaryButton>
                    </Link>
                </div>
            }
        >
            <Head title="إضافة كتاب جديد" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className='px-6'>
                        <form onSubmit={submit}>
                            <PrimaryButton >
                                إضافة الكتب
                            </PrimaryButton>
                        </form>
                    </div>

                    <div className=" overflow-hidden sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='grid grid-cols-1 md:grid-cols-3  gap-3'>
                                {books.map((book, index) => {
                                    return (
                                        <div key={book.id} className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow h-full">
                                            <div className="flex flex-col p-5 h-full">
                                                <h5 className="mb-1 text-xl font-semibold text-gray-900 ">
                                                    {book.book_name}
                                                </h5>
                                                <div className='py-2 flex-1'>
                                                    <ul className='flex itmes-center justify-center  gap-2 mb-2'>
                                                        <li className='mb-2 text-gray-700'>
                                                            <strong className='text-gray-700'>الكاتب:</strong> {book.author_name}
                                                        </li>
                                                        <li className='mb-2 text-gray-700'>
                                                            <strong className='text-gray-700'>رقم الطبعة:</strong> {book.edition_number}
                                                        </li>
                                                        <li className='text-gray-700'>
                                                            <strong className='text-gray-700'>رقم المجلد:</strong> {book.volume_number}
                                                        </li>
                                                    </ul>

                                                </div>
                                                <div className="flex items-center justify-center flex-wrap gap-2">
                                                    <input
                                                        onChange={(e) => qtyChanged(e, book.id)}
                                                        type='number'
                                                        className='w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'
                                                        min={1}
                                                        defaultValue={libBooks.find((value) => value.book_id === book.id)?.qty || ''}
                                                        placeholder='الكمية'
                                                    />
                                                    <input
                                                        onChange={(e) => priceChanged(e, book.id)}
                                                        type='number'
                                                        className='w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'
                                                        min={1}
                                                        defaultValue={libBooks.find((value) => value.book_id === book.id)?.price || ''}
                                                        placeholder='السعر'
                                                    />
                                                </div>
                                                <div className='flex pt-2'>
                                                    <div className='flex-1'>
                                                        {!addedBooks.some(value => value.book_id == book.id) &&
                                                            <PrimaryButton onClick={() => addBooks(book.id)}>أضف</PrimaryButton>
                                                        }

                                                        {addedBooks.some(value => value.book_id == book.id) &&
                                                            <SecondaryButton onClick={(e) => updateBook(e, book.id)}>تحديث</SecondaryButton>
                                                        }
                                                    </div>
                                                    {libBooks.some(value => value.book_id == book.id) &&
                                                        <div>
                                                            <DangerButton onClick={(e) => removeBook(e, book.id)}>X</DangerButton>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Authenticated >
    );
}

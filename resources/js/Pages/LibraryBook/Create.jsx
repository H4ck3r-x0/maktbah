import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';

import Authenticated from '@/Layouts/AuthenticatedLayout';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';


export default function Create({ auth, books, addedBooksIds }) {
    const { data, setData, post, errors, processing } = useForm({
        'booksIds': addedBooksIds,
        'qty': '',
        'price': '',
        'id': ''
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('book.store'));
    };

    const addBooks = (bookID) => {
        // setData(
        //     'books',
        //     [...data.books, { id: bookID, qty: data.qty, price: data.price }]
        // )

        setData('booksIds', [...data.booksIds, bookID])
    }
    console.log(data)
    const removeBook = (bookID) => {
        setData('booksIds', data.booksIds.filter(item => {
            return item != bookID
        }))
    }

    const qtyChanged = (e) => {
        setData('qty', e.target.value)
    }

    const priceChanged = (e) => {
        setData('price', e.target.value)
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
                                                        onChange={qtyChanged}
                                                        type='number'
                                                        className=' w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'
                                                        min={1}
                                                        placeholder='الكمية'
                                                    />
                                                    <input
                                                        onChange={priceChanged}
                                                        type='number'
                                                        className=' w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'
                                                        min={1}
                                                        placeholder='السعر'
                                                    />
                                                </div>
                                                <div className='flex pt-2'>
                                                    {data.booksIds.includes(book.id) ?
                                                        <DangerButton disabled={processing} onClick={() => removeBook(book.id)}>حذف</DangerButton>
                                                        :
                                                        <PrimaryButton disabled={processing} onClick={() => addBooks(book.id)}>أضف</PrimaryButton>
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

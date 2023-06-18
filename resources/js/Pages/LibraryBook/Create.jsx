import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import SecondaryButton from '@/Components/SecondaryButton';
import { router } from '@inertiajs/react';

export default function Create({ auth, books, addedBooksIds }) {
    const { data, setData, post, errors, processing } = useForm({
        'books': addedBooksIds,
        'qty': '',
        'price': '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('book.store'));
    };

    const updateBook = (e, bookId) => {
        e.preventDefault();
        const book = data.books.filter(book => book.book_id === bookId);
        book[0].qty = data.qty ? data.qty : book[0].qty;
        book[0].price = data.price ? data.price : book[0].price;
        router.patch(route('book.update', bookId), { book: book[0] }, {
            preserveScroll: true,
        });
    }
    const addBooks = (bookID) => {
        const newBook = {
            book_id: bookID,
            qty: data.qty,
            price: data.price,
        };
        setData(data => ({ ...data, books: [...data.books, newBook] }));
    }
    const removeBook = (bookID) => {
        setData(data => ({
            ...data,
            books: data.books.filter(book => book.book_id !== bookID),
        }));
    }
    console.log(data.books)

    const qtyChanged = (e, bookId) => {
        const book = data.books.find((value) => value.book_id === bookId);
        if (book && book !== undefined) {
            const newData = data.books.map(item => item.book_id === book.book_id ? { ...item, qty: e.target.value } : item);
            setData(data => ({ ...data, books: [...data.books, newData] }));

        }
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
                                                        onChange={(e) => qtyChanged(e, book.id)}
                                                        type='number'
                                                        className=' w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'
                                                        min={1}
                                                        defaultValue={data.books.find((value) => value.book_id === book.id)?.qty || ''}
                                                        placeholder='الكمية'
                                                    />
                                                    <input
                                                        onChange={priceChanged}
                                                        type='number'
                                                        className=' w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'
                                                        min={1}
                                                        defaultValue={data.books.find((value) => value.book_id === book.id)?.price || ''}
                                                        placeholder='السعر'
                                                    />
                                                </div>
                                                <div className='flex pt-2'>
                                                    <div className='flex-1'>
                                                        {data.books.some(value => value.book_id == book.id) ?
                                                            <SecondaryButton disabled={processing} onClick={(e) => updateBook(e, book.id)}>تحديث</SecondaryButton>
                                                            :
                                                            <PrimaryButton disabled={processing} onClick={() => addBooks(book.id)}>أضف</PrimaryButton>
                                                        }
                                                    </div>
                                                    {data.books.some(value => value.book_id == book.id) &&
                                                        <div>
                                                            <DangerButton onClick={() => removeBook(book.id)}>X</DangerButton>
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

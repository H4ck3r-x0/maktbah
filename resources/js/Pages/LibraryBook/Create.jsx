import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import DangerButton from '@/Components/DangerButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { router } from '@inertiajs/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import debounce from "lodash/debounce";
import Pagination from '@/Pages/Components/Pagination';
import InputLabel from '@/Components/InputLabel';

export default function Create({ auth, books, addedBooks }) {
    const filters = usePage().props.filters;
    const currentPage = usePage().props.currentPage;
    const { data, setData, get } = useForm({
        search: filters.search,
    });

    const [libBooks, setLibBooks] = useState([]);
    const [qty, setQty] = useState("");
    const [price, setPrice] = useState("");
    const [offer, setOffer] = useState("");
    const [adImage, setAdImage] = useState(null);

    useEffect(() => {
        if (addedBooks.length > 0) {
            setLibBooks(addedBooks);
        }
    }, [addedBooks])

    const search = (e) => {
        setData('search', e.target.value);
    }

    const searchBooks = () => {
        get(route('book.create', { search: data.search, page: currentPage }), {
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

    const submit = (e) => {
        e.preventDefault();
        router.post(route('book.store'), { libBooks });
    };

    const updateBook = (e, bookId) => {
        e.preventDefault();
        const { book_id, qty, price, ad_image, offer } = libBooks.filter(book => book.book_id === bookId)[0];

        router.post(route('book.update', bookId), { book_id, qty, price, ad_image }, {
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
                { book_id: bookID, qty: qty, price: price, offer: offer, ad_image: adImage }
            ]
        })
        setQty('');
        setPrice('');
        setOffer('');
        setAdImage(null);
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
                return currentLibBooks.map(
                    (book) => book.book_id == bookId ? { ...book, qty: value } : book
                )
            })
        }
    }

    const priceChanged = (e, bookId) => {
        const { value } = e.target;
        setPrice(value)
        if (value !== '') {
            setLibBooks((currentLibBooks) => {
                return currentLibBooks.map(
                    (book) => book.book_id == bookId ? { ...book, price: value } : book
                )
            })
        }
    }

    const offerChanged = (e, bookId) => {
        const { value } = e.target;
        setOffer(value)
        if (value !== '') {
            setLibBooks((currentLibBooks) => {
                return currentLibBooks.map(
                    (book) => book.book_id == bookId ? { ...book, offer: value } : book
                )
            })
        }
    }

    const adImageChanged = (e, bookId) => {
        setAdImage(e.target.files[0]);
        if (e.target.files[0]) {
            setLibBooks((currentLibBooks) => {
                return currentLibBooks.map(
                    (book) => book.book_id == bookId ? { ...book, ad_image: e.target.files[0] } : book
                )
            })
        }
    }

    return (
        <Authenticated
            user={auth.user}
            header={
                <div className='flex items-center justify-between'>
                    <h2 className="flex flex-col gap-2 font-semibold text-xl text-gray-800 leading-tight">
                        <span>إضافة كتاب جديد</span>
                        <span className='text-sm text-indigo-400 tracking-wider '>ملاحظة اذا اردت حذف كتاب يمكنك وضع الكمية الى 0</span>
                    </h2>

                    <Link href={route('library.dashboard')}>
                        <PrimaryButton>العودة</PrimaryButton>
                    </Link>
                </div>
            }
        >
            <Head title="إضافة كتاب جديد" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className=' max-w-2xl  px-6 flex items-center gap-3'>
                        <div className='flex-1'>
                            <input
                                className=' w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'
                                type="text"
                                id="search"
                                name="search"
                                value={data.search ? data.search : ''}
                                autoComplete="search"
                                onChange={search}
                                placeholder='ابحث بإسم الكتاب او الكاتب ...'
                            />
                        </div>
                        <form onSubmit={submit}>
                            <PrimaryButton >
                                إضافة الكتب
                            </PrimaryButton>
                        </form>
                    </div>

                    <div className=" overflow-hidden sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='grid grid-cols-1 sm:grid-cols-2  gap-3'>
                                {books.data.map((book) => {
                                    return (
                                        <div key={book.id} className="max-w-lg bg-white border border-gray-200 rounded-lg shadow h-full">
                                            <div className="flex flex-col p-5 h-full">
                                                <h5 className="mb-1 text-xl font-semibold text-gray-900">
                                                    {book.book_name}
                                                </h5>
                                                <div className='py-2 flex-1'>
                                                    <ul className='flex itmes-center   gap-2 mb-2'>
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
                                                    <input
                                                        onChange={(e) => offerChanged(e, book.id)}
                                                        type='text'
                                                        className='w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'
                                                        min={1}
                                                        defaultValue={libBooks.find((value) => value.book_id === book.id)?.offer || ''}
                                                        placeholder='عرض إضافي'
                                                    />
                                                    <div className='py-4 w-full'>
                                                        <label className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm transition duration-300 focus:border-indigo-500 focus:ring-indigo-500 hover:border-indigo-500 focus:outline-none hover:cursor-pointer">
                                                            <span className="mr-2">أختر صورة الأعلان</span>
                                                            <input
                                                                name="adImage"
                                                                onChange={(e) => adImageChanged(e, book.id)}
                                                                type="file"
                                                                className="hidden"
                                                            />
                                                        </label>
                                                    </div>
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
                                                            <DangerButton onClick={(e) => removeBook(e, book.id)}>
                                                                حذف
                                                            </DangerButton>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <Pagination links={books.links} />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated >
    );
}

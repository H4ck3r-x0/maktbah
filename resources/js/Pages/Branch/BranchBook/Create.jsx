import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { router } from "@inertiajs/react";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import debounce from "lodash/debounce";
import Pagination from "@/Pages/Components/Pagination";
import toast, { Toaster } from "react-hot-toast";

export default function Create({ auth, books, addedBooks }) {
    const filters = usePage().props.filters;
    const currentPage = usePage().props.currentPage;
    const { data, setData, get } = useForm({
        search: filters.search,
    });

    const [showAddedBooks, setShowAddedBooks] = useState(false);
    const [LibraryBooks, setLibraryBooks] = useState([]);
    const [qty, setQty] = useState("");
    const [price, setPrice] = useState("");
    const [offer, setOffer] = useState("");
    const [adImage, setAdImage] = useState(null);

    useEffect(() => {
        if (addedBooks.length > 0) {
            setLibraryBooks(addedBooks);
        }
    }, [addedBooks]);

    const search = (e) => {
        setData("search", e.target.value);
    };

    const searchBooks = () => {
        get(
            route("branch.book.create", {
                search: data.search,
                page: currentPage,
            }),
            {
                preserveScroll: true,
                preserveState: true,
                replace: true,
            }
        );
    };

    const delayedSearch = useCallback(
        debounce(searchBooks, 500),

        [data.search, currentPage]
    );

    useEffect(() => {
        delayedSearch();
        return delayedSearch.cancel;
    }, [data.search, delayedSearch]);

    const updateBook = (e, bookId) => {
        e.preventDefault();
        const { book_id, qty, price, offer } = LibraryBooks.filter(
            (book) => book.book_id === bookId
        )[0];

        router.post(
            route("branch.book.update", bookId),
            { book_id, qty, price, offer, ad_image: adImage },
            {
                preserveScroll: true,
                onError: (error) => {
                    let message = "";
                    if (error.ad_image) {
                        setAdImage(null);
                        message = error.ad_image;
                    }
                    if (error.price) {
                        message = error.price;
                    }
                    if (error.qty) {
                        message = error.qty;
                    }
                    toast.error(message, {
                        duration: 4000,
                        position: "top-center",
                        className: "",
                        ariaProps: {
                            role: "status",
                            "aria-live": "polite",
                        },
                    });
                },
            }
        );
    };

    const addNewBook = (bookID) => {
        if (price === "" || qty === "") {
            toast.error("الرجاء اكمال جميع بيانات الكتاب", {
                duration: 4000,
                position: "top-center",
                className: "",
                ariaProps: {
                    role: "status",
                    "aria-live": "polite",
                },
            });
            return;
        }

        router.post(
            route("branch.book.store"),
            { book_id: bookID, qty, price, offer, ad_image: adImage },
            {
                preserveScroll: true,
                onError: (error) => {
                    let message = "";
                    if (error.ad_image) {
                        setAdImage(null);
                        message = error.ad_image;
                    }
                    if (error.price) {
                        message = error.price;
                    }
                    if (error.qty) {
                        message = error.qty;
                    }
                    toast.error(message, {
                        duration: 4000,
                        position: "top-center",
                        className: "",
                        ariaProps: {
                            role: "status",
                            "aria-live": "polite",
                        },
                    });
                },
            }
        );
    };

    const deleteBookAdImage = (e, bookID) => {
        e.preventDefault();
        router.delete(route("branch.book.deleteBookAdImage", bookID), {
            preserveScroll: true,
            onSuccess: () => {

            },
        });
    };

    const removeBook = (e, bookID) => {
        e.preventDefault();
        router.delete(route("branch.book.destroy", bookID), {
            preserveScroll: true,
            onSuccess: () => {
                setLibraryBooks((currentLibraryBooks) => {
                    return currentLibraryBooks.filter(
                        (book) => book.book_id !== bookID
                    );
                });
            },
        });
    };

    const restoreBook = (e, bookID) => {
        e.preventDefault();
        router.post(route("branch.book.restore", bookID), {
            preserveScroll: true,
            onSuccess: () => {
                setLibraryBooks((currentLibraryBooks) => {
                    return currentLibraryBooks.filter(
                        (book) => book.book_id !== bookID
                    );
                });
            },
        });
    };

    const qtyChanged = (e, bookId) => {
        const { value } = e.target;
        setQty(value);
        if (value !== "") {
            setLibraryBooks((currentLibraryBooks) =>
                currentLibraryBooks.map((book) =>
                    book.book_id === bookId ? { ...book, qty: value } : book
                )
            );
        }
    };

    const priceChanged = (e, bookId) => {
        const { value } = e.target;
        setPrice(value);
        if (value !== "") {
            setLibraryBooks((currentLibraryBooks) =>
                currentLibraryBooks.map((book) =>
                    book.book_id === bookId ? { ...book, price: value } : book
                )
            );
        }
    };

    const offerChanged = (e, bookId) => {
        const { value } = e.target;
        setOffer(value);
        if (value !== "") {
            setLibraryBooks((currentLibraryBooks) =>
                currentLibraryBooks.map((book) =>
                    book.book_id === bookId ? { ...book, offer: value } : book
                )
            );
        }
    };

    const adImageChanged = (e, bookId) => {
        setAdImage(e.target.files[0]);

        if (e.target.files[0]) {
            setLibraryBooks((currentLibraryBooks) =>
                currentLibraryBooks.map((book) =>
                    book.book_id === bookId
                        ? { ...book, ad_image: e.target.files[0] }
                        : book
                )
            );
        }
    };

    const addedBookIds = addedBooks.map((book) => book.book_id);
    const filteredBooks = books.data.filter((book) => addedBookIds.includes(book.id));

    return (
        <Authenticated
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="flex flex-col gap-2 font-semibold text-xl text-gray-800 leading-tight">
                        <span>إضافة كتاب جديد</span>
                    </h2>

                    <Link href={route("library.dashboard")}>
                        <PrimaryButton>العودة</PrimaryButton>
                    </Link>
                </div>
            }
        >
            <Head title="إضافة كتاب جديد" />

            <div className="py-4">
                <Toaster />
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="w-full flex flex-col items-center sm:flex-row gap-3 px-6">
                        <input
                            className=" w-full sm:w-1/2  border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                            type="text"
                            id="search"
                            name="search"
                            value={data.search || ""}
                            onChange={search}
                            autoFocus
                            placeholder="ابحث بإسم الكتاب او الكاتب ..."
                        />
                        <PrimaryButton onClick={() => setShowAddedBooks(!showAddedBooks)}>
                            {showAddedBooks === false ? 'إظهار الكتب المظافة' : 'إخفاء الكتب المظافة'}
                        </PrimaryButton>
                    </div>

                    <div className=" overflow-hidden sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="grid grid-cols-1 sm:grid-cols-2  gap-3">
                                {showAddedBooks &&
                                    filteredBooks.map((book) => {
                                        return (
                                            <div key={book.id}
                                                className="max-w-lg bg-white border border-gray-200 rounded-lg shadow h-full"
                                            >
                                                <div className="flex flex-col p-5 h-full">
                                                    <h5 className="mb-1 text-xl font-semibold text-gray-900">
                                                        {book.book_name}
                                                    </h5>
                                                    <div className="py-2 flex-1">
                                                        <ul className="flex itmes-center   gap-2 mb-2">
                                                            <li className="mb-2 text-gray-700">
                                                                <strong className="text-gray-700">الكاتب:</strong>{" "}
                                                                {book.author_name}
                                                            </li>
                                                            <li className="mb-2 text-gray-700">
                                                                <strong className="text-gray-700">
                                                                    رقم الطبعة:
                                                                </strong>{" "}
                                                                {book.edition_number}
                                                            </li>
                                                            <li className="text-gray-700">
                                                                <strong className="text-gray-700">
                                                                    رقم المجلد:
                                                                </strong>{" "}
                                                                {book.volume_number}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="flex items-center justify-center flex-wrap gap-2">
                                                        <input
                                                            onChange={(e) => qtyChanged(e, book.id)}
                                                            type="number"
                                                            className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                                            min={1}
                                                            defaultValue={
                                                                LibraryBooks.find(
                                                                    (value) => value.book_id === book.id
                                                                )?.qty || ""
                                                            }
                                                            placeholder="الكمية"
                                                        />
                                                        <input
                                                            onChange={(e) => priceChanged(e, book.id)}
                                                            type="number"
                                                            className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                                            min={1}
                                                            defaultValue={
                                                                LibraryBooks.find(
                                                                    (value) => value.book_id === book.id
                                                                )?.price || ""
                                                            }
                                                            placeholder="السعر"
                                                        />
                                                        <input
                                                            onChange={(e) => offerChanged(e, book.id)}
                                                            type="text"
                                                            className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                                            min={1}
                                                            defaultValue={
                                                                LibraryBooks.find(
                                                                    (value) => value.book_id === book.id
                                                                )?.offer || ""
                                                            }
                                                            placeholder="عرض إضافي"
                                                        />
                                                        <div className="py-4 flex items-center justify-between gap-2 w-full">
                                                            <label className="flex  items-center justify-center w-full  py-2 px-4 border border-gray-300 rounded-md shadow-sm transition duration-300 focus:border-indigo-500 focus:ring-indigo-500 hover:border-indigo-500 focus:outline-none hover:cursor-pointer">
                                                                <div className="flex flex-col items-center gap-1">
                                                                    <span className="mr-2">أختر صورة الأعلان</span>
                                                                    <span className="text-xs text-gray-400 font-semibold mr-2">
                                                                        حجم الصورة يجب ان يكون 2 MB
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    name="adImage"
                                                                    onChange={(e) => adImageChanged(e, book.id)}
                                                                    type="file"
                                                                    className="hidden"
                                                                />
                                                            </label>
                                                            <div className=" whitespace-nowrap">
                                                                {LibraryBooks.find(
                                                                    (value) => value.book_id === book.id
                                                                )?.ad_image ? (
                                                                    <PrimaryButton className="py-5" onClick={(e) => deleteBookAdImage(e, book.id)}>حذف الاعلان</PrimaryButton>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex pt-2">
                                                        <div className="flex-1">
                                                            {!addedBooks.some(
                                                                (value) => value.book_id == book.id
                                                            ) && (
                                                                    <PrimaryButton
                                                                        onClick={() => addNewBook(book.id)}
                                                                    >
                                                                        أضف
                                                                    </PrimaryButton>
                                                                )}

                                                            {addedBooks.some(
                                                                (value) => value.book_id == book.id
                                                            ) && (
                                                                    <SecondaryButton
                                                                        onClick={(e) => updateBook(e, book.id)}
                                                                    >
                                                                        تحديث
                                                                    </SecondaryButton>
                                                                )}
                                                        </div>
                                                        {LibraryBooks.some(
                                                            (value) => value.book_id === book.id
                                                        ) && (
                                                                <div>
                                                                    {LibraryBooks.some(
                                                                        (value) =>
                                                                            value.book_id === book.id &&
                                                                            value.deleted_at === null
                                                                    ) ? (
                                                                        <DangerButton
                                                                            onClick={(e) => removeBook(e, book.id)}
                                                                        >
                                                                            حذف
                                                                        </DangerButton>
                                                                    ) : (
                                                                        <DangerButton
                                                                            onClick={(e) => restoreBook(e, book.id)}
                                                                        >
                                                                            إستعادة
                                                                        </DangerButton>
                                                                    )}
                                                                </div>
                                                            )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                                {!showAddedBooks &&
                                    books.data.map((book) => {
                                        return (
                                            <div key={book.id}
                                                className="max-w-lg bg-white border border-gray-200 rounded-lg shadow h-full"
                                            >
                                                <div className="flex flex-col p-5 h-full">
                                                    <h5 className="mb-1 text-xl font-semibold text-gray-900">
                                                        {book.book_name}
                                                    </h5>
                                                    <div className="py-2 flex-1">
                                                        <ul className="flex itmes-center   gap-2 mb-2">
                                                            <li className="mb-2 text-gray-700">
                                                                <strong className="text-gray-700">الكاتب:</strong>{" "}
                                                                {book.author_name}
                                                            </li>
                                                            <li className="mb-2 text-gray-700">
                                                                <strong className="text-gray-700">
                                                                    رقم الطبعة:
                                                                </strong>{" "}
                                                                {book.edition_number}
                                                            </li>
                                                            <li className="text-gray-700">
                                                                <strong className="text-gray-700">
                                                                    رقم المجلد:
                                                                </strong>{" "}
                                                                {book.volume_number}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="flex items-center justify-center flex-wrap gap-2">
                                                        <input
                                                            onChange={(e) => qtyChanged(e, book.id)}
                                                            type="number"
                                                            className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                                            min={1}
                                                            defaultValue={
                                                                LibraryBooks.find(
                                                                    (value) => value.book_id === book.id
                                                                )?.qty || ""
                                                            }
                                                            placeholder="الكمية"
                                                        />
                                                        <input
                                                            onChange={(e) => priceChanged(e, book.id)}
                                                            type="number"
                                                            className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                                            min={1}
                                                            defaultValue={
                                                                LibraryBooks.find(
                                                                    (value) => value.book_id === book.id
                                                                )?.price || ""
                                                            }
                                                            placeholder="السعر"
                                                        />
                                                        <input
                                                            onChange={(e) => offerChanged(e, book.id)}
                                                            type="text"
                                                            className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                                            min={1}
                                                            defaultValue={
                                                                LibraryBooks.find(
                                                                    (value) => value.book_id === book.id
                                                                )?.offer || ""
                                                            }
                                                            placeholder="عرض إضافي"
                                                        />
                                                        <div className="py-4 flex items-center justify-between gap-2 w-full">
                                                            <label className="flex  items-center justify-center w-full  py-2 px-4 border border-gray-300 rounded-md shadow-sm transition duration-300 focus:border-indigo-500 focus:ring-indigo-500 hover:border-indigo-500 focus:outline-none hover:cursor-pointer">
                                                                <div className="flex flex-col items-center gap-1">
                                                                    <span className="mr-2">أختر صورة الأعلان</span>
                                                                    <span className="text-xs text-gray-400 font-semibold mr-2">
                                                                        حجم الصورة يجب ان يكون 2 MB
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    name="adImage"
                                                                    onChange={(e) => adImageChanged(e, book.id)}
                                                                    type="file"
                                                                    className="hidden"
                                                                />
                                                            </label>
                                                            <div className=" whitespace-nowrap">
                                                                {LibraryBooks.find(
                                                                    (value) => value.book_id === book.id
                                                                )?.ad_image ? (
                                                                    <PrimaryButton className="py-5" onClick={(e) => deleteBookAdImage(e, book.id)}>حذف الاعلان</PrimaryButton>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex pt-2">
                                                        <div className="flex-1">
                                                            {!addedBooks.some(
                                                                (value) => value.book_id == book.id
                                                            ) && (
                                                                    <PrimaryButton
                                                                        onClick={() => addNewBook(book.id)}
                                                                    >
                                                                        أضف
                                                                    </PrimaryButton>
                                                                )}

                                                            {addedBooks.some(
                                                                (value) => value.book_id == book.id
                                                            ) && (
                                                                    <SecondaryButton
                                                                        onClick={(e) => updateBook(e, book.id)}
                                                                    >
                                                                        تحديث
                                                                    </SecondaryButton>
                                                                )}
                                                        </div>
                                                        {LibraryBooks.some(
                                                            (value) => value.book_id === book.id
                                                        ) && (
                                                                <div>
                                                                    {LibraryBooks.some(
                                                                        (value) =>
                                                                            value.book_id === book.id &&
                                                                            value.deleted_at === null
                                                                    ) ? (
                                                                        <DangerButton
                                                                            onClick={(e) => removeBook(e, book.id)}
                                                                        >
                                                                            حذف
                                                                        </DangerButton>
                                                                    ) : (
                                                                        <DangerButton
                                                                            onClick={(e) => restoreBook(e, book.id)}
                                                                        >
                                                                            إستعادة
                                                                        </DangerButton>
                                                                    )}
                                                                </div>
                                                            )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <Pagination links={books.links} />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

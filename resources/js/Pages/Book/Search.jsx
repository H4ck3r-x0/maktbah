import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useCallback, useEffect, useState } from 'react';
import debounce from "lodash/debounce";
import Pagination from '@/Pages/Components/Pagination';

export default function Search({ auth, books, cities, districts }) {
    const filters = usePage().props.filters;
    const currentPage = usePage().props.currentPage;
    const [selectedCityId, setSelectedCityId] = useState('');

    const { data, setData, get } = useForm({
        search: filters.search,
        city: filters.city,
        district: filters.district,
        price: filters.price,
    });

    const searchBooks = () => {
        get(route('search.books.index',
            { search: data.search, city: data.city, district: data.district, price: data.price, page: currentPage }),
            {
                preserveScroll: true,
                preserveState: true,
                replace: true
            });
    };

    const delayedSearch = useCallback(
        debounce(searchBooks, 500),

        [data.search, data.city, data.district, data.price, currentPage]
    );

    useEffect(() => {
        delayedSearch();

        return delayedSearch.cancel;
    }, [data.search, data.city, data.district, data.price, delayedSearch])


    const cityChanged = (e) => {
        const cityId = e.target.value;
        const filterdCities = cities.filter(value => cityId == value.name);
        setSelectedCityId(filterdCities[0]?.id);
        setData('city', filterdCities[0]?.name)
    }

    const districtChanged = (e) => {
        setData('district', e.target.value);
    }

    const minMaxPriceChanged = (e) => {
        setData('price', e.target.value);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">البحث عن الكتب</h2>}
        >
            <Head title="البحث عن الكتب" />

            <div className="py-2">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className='w-full sm:inline-flex ml-4 items-center gap-3 px-6 '>

                        <input
                            value={data.search ? data.search : ''}
                            onChange={(e) => setData('search', e.target.value)}
                            type="text"
                            className='w-full sm:max-w-lg  border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'
                            placeholder='إبحث بإسم الكتاب او المؤلف ...'
                        />

                        <div className='mb-2'>
                            <select
                                onChange={cityChanged}
                                value={data.city}
                                name="city"
                                id="city"
                                className='mt-2 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'>
                                <option value="">أختر المدينة</option>
                                {
                                    cities.map(city =>
                                        <option value={city.name} key={city.id}>{city.name}</option>
                                    )
                                }
                            </select>
                        </div>

                        <div className='mb-2'>
                            <select
                                onChange={districtChanged}
                                value={data.district}
                                name="district"
                                id="district"
                                className='mt-2 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'>
                                <option value="">أختر الحي</option>
                                {
                                    districts.filter((district) => {
                                        return district.city_id === selectedCityId
                                    })
                                        .map(district =>
                                            <option value={district.name} key={district.id}>{district.name}</option>
                                        )
                                }
                            </select>
                        </div>

                        <div className='mb-2'>
                            <select
                                onChange={minMaxPriceChanged}
                                name="price"
                                id="price"
                                value={data.price}
                                className='mt-2 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'
                            >
                                <option value="">أختر السعر</option>
                                <option value="min">الأقل</option>
                                <option value="max">الأعلى</option>
                            </select>
                        </div>
                    </div>


                    <div className="overflow-hidden sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2  gap-4'>
                                {books.data.map(item => {
                                    return (
                                        <div key={item.id} className="flex  bg-white shadow-lg rounded-lg overflow-hidden h-full">
                                            <div className="w-full flex flex-col p-5 h-full">
                                                <div className=''>
                                                    <h1 className="text-gray-900 font-bold text-2xl mb-4">{item.book.book_name}</h1>
                                                    <div className='flex flex-col sm:flex-row sm:items-center flex-wrap gap-2 mt-1'>
                                                        <span>الكاتب:</span>
                                                        <span className='bg-blue-100 text-blue-800 text-xs  mr-1 px-2.5 py-0.5 rounded '>{item.book.author_name}</span>
                                                        <span>رقم الطبعة:</span>
                                                        <span className='bg-blue-100 text-blue-800 text-xs  mr-1 px-2.5 py-0.5 rounded'>{item.book.edition_number}</span>
                                                        <span>رقم المجلد:</span>
                                                        <span className='bg-blue-100 text-blue-800 text-xs  mr-1 px-2.5 py-0.5 rounded'>{item.book.volume_number}</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='flex sm:items-center flex-col sm:flex-row flex-wrap gap-1 pt-4'>
                                                        <span>المكتبة:</span>
                                                        <span className='bg-gray-100 text-gray-800 text-xs  mr-1 px-2.5 py-0.5 rounded'>{item.library.name}</span>
                                                        <span>المدينة:</span>
                                                        <span className='bg-gray-100 text-gray-800 text-xs  mr-1 px-2.5 py-0.5 rounded'>{item.library.city}</span>
                                                        <span>الحي:</span>
                                                        <span className='bg-gray-100 text-gray-800 text-xs  mr-1 px-2.5 py-0.5 rounded'>{item.library.district}</span>
                                                    </div>
                                                </div>

                                                <div className="flex item-center justify-between mt-6">
                                                    <h1 className="text-blue-500 font-bold text-xl mt-1">SAR {item.price}</h1>
                                                    <PrimaryButton >
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                        </svg>

                                                    </PrimaryButton>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <Pagination class="mt-6" links={books.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

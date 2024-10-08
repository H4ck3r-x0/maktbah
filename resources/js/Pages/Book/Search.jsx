import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useCallback, useEffect, useState } from 'react';
import debounce from "lodash/debounce";
import Pagination from '@/Pages/Components/Pagination';
import BookCard from './Components/BookCard';

export default function Search({ auth, books, cities, districts, topSilingBooks, adminAdImage }) {
    const filters = usePage().props.filters;
    const currentPage = usePage().props.currentPage;
    const [selectedCityId, setSelectedCityId] = useState('');

    const { data, setData, get, reset } = useForm({
        search: filters.search,
        city: filters.city,
        district: filters.district,
    });

    const searchBooks = () => {
        get(route('search.books.index',
            { search: data.search, city: data.city, district: data.district, page: currentPage }),
            {
                preserveScroll: true,
                preserveState: true,
                replace: true
            });
    };

    const delayedSearch = useCallback(
        debounce(searchBooks, 500),

        [data.search, data.city, data.district, currentPage]
    );

    useEffect(() => {
        delayedSearch();

        return delayedSearch.cancel;
    }, [data.search, data.city, data.district, delayedSearch])


    const cityChanged = (e) => {
        const cityId = e.target.value;
        const filterdCities = cities.filter(value => cityId == value.name);
        setSelectedCityId(filterdCities[0]?.id);
        setData('city', filterdCities[0]?.name)
    }

    const districtChanged = (e) => {
        setData('district', e.target.value);
    }


    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="البحث عن الكتب" />

            <div className="py-2">
                {adminAdImage &&
                    <div className='flex items-center justify-center px-4  py-4'>
                        <img src={adminAdImage} className="w-[1000px] h-[250px] shadow-lg rounded-lg" alt="" />
                    </div>
                }
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className='w-full mx-auto sm:inline-flex ml-4 justify-center items-center gap-3 px-6 '>
                        <input
                            value={data.search || ''}
                            onChange={(e) => {
                                setData('search', e.target.value);
                                if (e.target.value === '') {
                                    reset()
                                }
                            }}
                            type="text"
                            className='w-full sm:max-w-xl md:max-w-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'
                            placeholder='إبحث بإسم الكتاب او المؤلف ...'
                        />
                        <div className='mb-2'>
                            <select
                                onChange={cityChanged}
                                value={data.city || ''}
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
                                value={data.district || ''}
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

                    </div>


                    <div className="overflow-hidden sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-1  gap-4'>
                                {!books.data.length &&
                                    <div className='py-6'>
                                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                            <h1 className='text-xl mb-2 font-semibold text-gray-600'>
                                                الكتب الأكثر طلبا
                                            </h1>
                                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                                <div className="mx-auto grid grid-cols-1 sm:max-w-7xl  sm:grid-cols-1 p-6 gap-2 flex-wrap text-gray-900">
                                                    {topSilingBooks.map((item) => {
                                                        return (
                                                            <div key={item.id} className='rounded-xl w-full shadow-lg border'>
                                                                <div className='flex w-full items-center justify-between bg-indigo-300 rounded-xl px-4'>
                                                                    <h1 className='p-2 w-full text-white text-xl whitespace-nowrap'><span className='font-semibold'>أسم الكتاب :</span> {item.book_name} </h1>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    books.data.map(item => {
                                        return (
                                            <div key={item.id}>
                                                <BookCard book={item} userUnivirsty={auth.user?.user_profile?.university} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <Pagination class="mt-6" links={books.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

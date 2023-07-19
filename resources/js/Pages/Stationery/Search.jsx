import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useCallback, useEffect, useState } from 'react';
import debounce from "lodash/debounce";
import Pagination from '@/Pages/Components/Pagination';
import moment from 'moment/min/moment-with-locales';

export default function Search({ auth, note, stationeries, cities, districts }) {
    const filters = usePage().props.filters;
    const currentPage = usePage().props.currentPage;
    const [selectedCityId, setSelectedCityId] = useState('');

    const { data, setData, get } = useForm({
        search: filters.search,
        city: filters.city,
        district: filters.district,
    });

    const searchStationeries = () => {
        get(route('search.stationeries.index',
            { note, search: data.search, city: data.city, district: data.district, page: currentPage }),
            {
                preserveScroll: true,
                preserveState: true,
                replace: true
            });
    };

    const delayedSearch = useCallback(
        debounce(searchStationeries, 500),

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
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className='w-full sm:inline-flex ml-4 items-center gap-3 px-6 '>
                        <input
                            value={data.search || ''}
                            onChange={(e) => setData('search', e.target.value)}
                            type="text"
                            className='w-full sm:max-w-xl  border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'
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
                                <div className='grid grid-cols-1 gap-4'>
                                    {/* Selected Note */}
                                    <div className='bg-indigo-100 p-4 rounded-md '>
                                        <div className='flex flex-col gap-2'>
                                            <h1 className='text-xl text-indigo-800'>
                                                <span className='font-semibold text-indigo-700'>المذكرة المراد طباعاتها :</span>
                                                <span> {note.name} </span>
                                            </h1>
                                            <h4>
                                                <span className='text-sm text-indigo-500'>{moment(note.created_at).locale('ar').format('MMMM Do YYYY')}</span>
                                                <span> - </span>
                                                <span className='text-sm text-indigo-500'>{note.user.username}</span>
                                            </h4>
                                        </div>
                                        <div className='py-4'>
                                            <p className='text-indigo-800'>
                                                {note.description}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Selected Note */}
                                </div>
                                {!stationeries.data.length &&
                                    <div>
                                        <h1 className='text-center sm:text-right text-lg sm:text-xl text-gray-900'>
                                            لا يوجد تطابق لبحثك، حاول مره اخرى!
                                        </h1>
                                    </div>
                                }
                                {stationeries.data.map(item => {
                                    return (
                                        <div key={item.id} className='bg-white p-4 sm:p-8 rounded-md shadow-md'>
                                            <div className='flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6'>
                                                <h1 className='text-xl text-gray-800'>
                                                    <span className='font-semibold text-gray-700'>إسم القرطاسية </span>
                                                    <span>{item.name}</span>
                                                </h1>
                                                <h1 className='text-xl text-gray-800'>
                                                    <span className='font-semibold text-gray-700'>المدينة </span>
                                                    <span>{item.city}</span>
                                                </h1>
                                                <h1 className='text-xl text-gray-800'>
                                                    <span className='font-semibold text-gray-700'>الحي </span>
                                                    <span>{item.district}</span>
                                                </h1>
                                                <h1 className='text-xl text-gray-800'>
                                                    <span className='font-semibold text-gray-700'>سعر الطباعة </span>
                                                    <span>{item.print_price} ريال</span>
                                                </h1>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <Pagination class="mt-6" links={stationeries.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

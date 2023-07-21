import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import { useCallback, useEffect, useState } from 'react';
import debounce from "lodash/debounce";
import Pagination from '@/Pages/Components/Pagination';
import moment from 'moment/min/moment-with-locales';
import InputLabel from '@/Components/InputLabel';


export default function Search({ auth, note, stationeries, cities, districts }) {
    const { props: { filters, currentPage } } = usePage();
    const [selectedCityId, setSelectedCityId] = useState('');
    const [selectedPages, setSelectedPages] = useState({});
    const [selectedOptions, setSelectedOptions] = useState({});
    const { data, setData, get } = useForm({
        search: filters.search,
        city: filters.city,
        district: filters.district,
    });

    const handleOptionSelect = (option, itemId) => {
        setSelectedOptions(prevState => {
            // If the option is already selected, remove it
            if (prevState[itemId] && prevState[itemId].some(selectedOption => selectedOption.id === option.id)) {
                return {
                    ...prevState,
                    [itemId]: prevState[itemId].filter(selectedOption => selectedOption.id !== option.id),
                };
            }

            // If the option is not selected, add it
            return {
                ...prevState,
                [itemId]: [...prevState[itemId] || [], option],
            };
        });
    };

    const handlePagesChange = (event, itemId) => {
        setSelectedPages(prevState => ({
            ...prevState,
            [itemId]: parseInt(event.target.value)
        }));
    };

    const calculateTotalPrice = (stationeryId) => {
        const pages = selectedPages[stationeryId] || 0;
        const options = selectedOptions[stationeryId] || [];

        const totalPrice = options.reduce((total, option) => {
            const optionPrice = option.price * Math.ceil(pages / option.per_page);
            return total + optionPrice;
        }, 0);

        return totalPrice;
    };

    const createOrder = (note, stationery, totalPrice, selectedPages, selectedOptions) => {
        router.post(route('stationery.order.store',
            { note, stationery, totalPrice, selectedPages, selectedOptions })
        );
    }

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
                                    const totalPrice = calculateTotalPrice(item.id);

                                    return (
                                        <div key={item.id} className='bg-white p-4 md:p-8 rounded-md shadow-md'>
                                            <div className='flex flex-col md:flex-row md:items-center gap-4 md:gap-6'>
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
                                            </div>
                                            <div className='pt-6 flex flex-col gap-4'>
                                                <div className=''>
                                                    <InputLabel htmlFor="pagesInput" value={'عدد الصفحات:'} />
                                                    <input
                                                        className='mt-2 w-full md:max-w-md  border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'
                                                        type="number" id="pagesInput" onChange={(e) => handlePagesChange(e, item.id)} />
                                                </div>
                                                {item.printing_options.map((option) => (
                                                    <div key={option.id} className='flex flex-col md:flex-row md:items-center gap-3 text-lg md:text-xl text-gray-800'>
                                                        <div className='w-full md:w-96 flex items-center gap-3 '>
                                                            <span className='font-semibold text-gray-700'>{
                                                                option.display_name} - ( {option.per_page}  صفحات )
                                                            </span>
                                                            <span>{option.price} ريال</span>
                                                        </div>
                                                        <div className='w-full md:w-36 flex items-center '>
                                                            <div className='w-full md:w-36 flex items-center '>
                                                                <button onClick={() => handleOptionSelect(option, item.id)} className='px-2 py-1 bg-blue-500 text-white rounded disabled:bg-gray-400' disabled={!selectedPages[item.id]}>
                                                                    {selectedOptions[item.id] && Array.isArray(selectedOptions[item.id]) && selectedOptions[item.id].some((selectedOption) => selectedOption.id === option.id) ? 'تم الإختيار' : 'إختيار'}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}

                                                <div className='flex items-center gap-2 mt-3 text-xl text-gray-800'>
                                                    <span className='text-xl font-semibold text-gray-600'>إجمالي السعر</span>
                                                    <span className='text-indigo-500'> {totalPrice} ريال</span>
                                                </div>
                                                <button
                                                    onClick={() => createOrder(note.id, item.id, totalPrice, selectedPages[item.id], selectedOptions[item.id])}
                                                    className={`px-2 py-1 bg-blue-500 text-white rounded disabled:bg-gray-400 ${selectedPages[item.id] && selectedOptions[item.id] ? 'w-fit' : 'bg-gray-500 cursor-not-allowed w-fit'}`} disabled={totalPrice === 0 || !(selectedPages[item.id] && selectedOptions[item.id])}> إرسال الطلب </button>
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

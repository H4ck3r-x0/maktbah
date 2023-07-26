import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { useState } from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';

export default function Create({ auth, cities, districts }) {
    const createNewLibrary = usePage().props.flash.createNewLibrary;

    const [selectedCityId, setSelectedCityId] = useState('');

    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        libraryOwnerName: '',
        name: '',
        phone: '',
        CR: '',
        city: '',
        district: '',
        google_maps: '',
        selectedCityId: selectedCityId || '',
    });

    const cityChanged = (e) => {
        const filterdCities = cities.filter(value => e.target.value == value.id);
        setSelectedCityId(filterdCities[0].id);
        setData('city', filterdCities[0].name)
    }

    const submit = (e) => {
        e.preventDefault();

        post(route('library.store'));
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <div className='flex items-center justify-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">إنشاء مكتبة جديدة</h2>

                    <Link href={route('library.dashboard')}>
                        <PrimaryButton>العودة</PrimaryButton>
                    </Link>
                </div>
            }
        >
            <Head title="إنشاء مكتبة جديدة" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {createNewLibrary &&
                        <div className="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-300 shadow" role="alert">
                            <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                            <div className='text-md'>
                                <span className="font-bold mr-2 text-white">ملاحظة</span>
                                <span className='text-white mr-1 font-bold'>{createNewLibrary}.</span>
                            </div>
                        </div>
                    }
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div>
                                    <InputLabel htmlFor="city" value="المدينة" />
                                    <select
                                        required

                                        onChange={cityChanged}
                                        className={`w-full mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm `}>
                                        <option value="">أختر المدينة</option>
                                        {
                                            cities.map(city =>
                                                <option value={city.id} key={city.id}>{city.name}</option>
                                            )
                                        }
                                    </select>

                                    <InputError className="mt-2" message={errors.city} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="city" value="الحي" />

                                    <select
                                        required
                                        onChange={(e) => setData('district', e.target.value)}
                                        className={`w-full mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm `}>
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
                                    <InputError className="mt-2" message={errors.district_id} />

                                </div>

                                <div>
                                    <InputLabel htmlFor="googleMaps" value="عنوان قوقل مابز" />

                                    <TextInput
                                        id="googleMaps"
                                        className="mt-2 block w-full"
                                        value={data.google_maps}
                                        onChange={(e) => setData('google_maps', e.target.value)}
                                        required
                                        autoComplete="googleMaps"
                                    />

                                    <InputError className="mt-2" message={errors.google_maps} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="name" value="اسم المكتبة" />

                                    <TextInput
                                        id="name"
                                        className="mt-2 block w-full"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                        autoComplete="name"
                                    />

                                    <InputError className="mt-2" message={errors.name} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="phone" value="رقم التواصل" />

                                    <TextInput
                                        id="phone"
                                        className="mt-2 block w-full"
                                        value={data.phone}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        required
                                        autoComplete="phone"
                                    />

                                    <InputError className="mt-2" message={errors.phone} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="CR" value="السجل التجاري" />

                                    <TextInput
                                        id="CR"
                                        className="mt-2 block w-full"
                                        value={data.CR}
                                        onChange={(e) => setData('CR', e.target.value)}
                                        required
                                        autoComplete="CR"
                                    />

                                    <InputError className="mt-2" message={errors.CR} />
                                </div>

                                <div className="flex items-center gap-4">
                                    <PrimaryButton disabled={processing}>حفظ</PrimaryButton>

                                    <Transition
                                        show={recentlySuccessful}
                                        enterFrom="opacity-0"
                                        leaveTo="opacity-0"
                                        className="transition ease-in-out"
                                    >
                                        <p className="text-sm text-gray-600">تم الحفظ بنجاح</p>
                                    </Transition>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

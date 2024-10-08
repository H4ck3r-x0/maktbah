import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, Head } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { useState } from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';

export default function Edit({ auth, library, cities, districts }) {
    const [selectedCityId, setSelectedCityId] = useState('');

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: library.name,
        phone: library.phone,
        CR: library.CR,
        city: library.city,
        district: library.district,
        google_maps: library.google_maps
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('library.update', library.id));
    };

    const cityChanged = (e) => {
        const cityId = e.target.value;
        const filterdCities = cities.filter(value => cityId == value.id);
        setSelectedCityId(filterdCities[0].id);
        setData('city', filterdCities[0].name)
    }

    return (
        <Authenticated
            user={auth.user}
            header={
                <div className='flex items-center justify-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">تعديل المكتبة</h2>

                    <Link href={route('library.dashboard')}>
                        <PrimaryButton>العودة</PrimaryButton>
                    </Link>
                </div>
            }
        >
            <Head title="تعديل المكتبة" />


            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div>
                                    <InputLabel htmlFor="city" value="المدينة" />
                                    <select
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
                                {/* 
                                <div>
                                    <InputLabel htmlFor="libraryOwnerName" value="أسم صاحب المكتبة" />

                                    <TextInput
                                        id="libraryOwnerName"
                                        className="mt-2 block w-full"
                                        value={data.libraryOwnerName}
                                        onChange={(e) => setData('libraryOwnerName', e.target.value)}
                                        required
                                        isFocused
                                        autoComplete="libraryOwnerName"
                                    />

                                    <InputError className="mt-2" message={errors.libraryOwnerName} />
                                </div> */}

                                {/* <div>
                                    <InputLabel htmlFor="username" value="أسم المستخدم" />

                                    <TextInput
                                        id="username"
                                        type="text"
                                        className="mt-2 block w-full"
                                        value={data.username}
                                        onChange={(e) => setData('username', e.target.value)}
                                        required
                                    />

                                    <InputError className="mt-2" message={errors.username} />
                                </div> */}
                                {/* 
                                <div>
                                    <InputLabel htmlFor="password" value="كلمة المرور" />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        className="mt-2 block w-full"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        required
                                    />

                                    <InputError className="mt-2" message={errors.password} />
                                </div> */}

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
                                    <InputLabel htmlFor="phone" value=" رقم التواصل" />

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
                                    <PrimaryButton disabled={processing}>تحديث</PrimaryButton>

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

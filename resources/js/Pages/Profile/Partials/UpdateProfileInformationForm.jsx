import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { useState } from 'react';

export default function UpdateProfileInformation({ className = '', cities, districts }) {
    const user = usePage().props.auth.user;
    const [selectedCityId, setSelectedCityId] = useState('');
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        gender: user.gender ? user.gender : '',
        city: user.city,
        district: user.district,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'), {
            preserveScroll: true
        });
    };

    const cityChanged = (e) => {
        const cityId = e.target.value;
        const filterdCities = cities.filter(value => cityId == value.id);
        setSelectedCityId(filterdCities[0].id);
        setData('city', filterdCities[0].name)
    }

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">معلوماتك الشخصية</h2>

                <p className="mt-1 text-sm text-gray-600">
                    قم بتحديث معلوماتك الشخصية.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="الأسم الكريم" />

                    <TextInput
                        id="name"
                        className="mt-2 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div className='mb-2'>
                    <InputLabel htmlFor="gender" value="الجنس" />
                    <select
                        value={data.gender}
                        onChange={(e) => setData('gender', e.target.value)}
                        name="gender"
                        id="gender"
                        required
                        className='mt-2 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'>
                        <option value="">أختر نوع الجنس</option>
                        <option value="male">ذكر</option>
                        <option value="female">أنثى</option>

                    </select>

                    <InputError message={errors.gender} className="mt-2" />
                </div>
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
        </section>
    );
}

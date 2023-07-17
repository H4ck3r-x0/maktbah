import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function StationeryInfoForm({ user, cities, districts }) {
    const [selectedCityId, setSelectedCityId] = useState('');

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        phone: '',
        district: '',
        google_maps: '',
        city: '',
        print_price: '',
        user_id: user.id,
        selectedCityId: selectedCityId || '',
    });


    const submit = (e) => {
        e.preventDefault();

        post(route('stationery.info.store'));
    };


    const cityChanged = (e) => {
        const filterdCities = cities.filter(value => e.target.value == value.id);
        setSelectedCityId(filterdCities[0].id);
        setData('city', filterdCities[0].name)
    }

    return (
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-6">
            <h1 className='pb-4 text-xl font-semibold'>إنشاء بيانات القرطاسية</h1>
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                    <div className="">
                        <form onSubmit={submit}>
                            <div>
                                <InputLabel htmlFor="name" value="أسم القرطاسية" />

                                <TextInput
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="mt-2 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                />

                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            <div className="mt-3">
                                <InputLabel htmlFor="phone" value="رقم التواصل" />

                                <TextInput
                                    id="phone"
                                    type="text"
                                    name="phone"
                                    value={data.phone}
                                    className="mt-2 block w-full"
                                    onChange={(e) => setData('phone', e.target.value)}
                                />

                                <InputError message={errors.phone} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="city" value="المدينة" />
                                <select
                                    id="city"
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

                            <div className="mt-4">
                                <InputLabel htmlFor="district" value="الحي" />

                                <select
                                    id="district"
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

                            <div className="mt-4">
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

                            <div className="mt-4">
                                <InputLabel htmlFor="print_price" value="سعر الطباعة الأساسي" />

                                <TextInput
                                    id="print_price"
                                    type="text"
                                    name="print_price"
                                    value={data.print_price}
                                    className="mt-2 block w-full"
                                    onChange={(e) => setData('print_price', e.target.value)}
                                />

                                <InputError message={errors.print_price} className="mt-2" />
                            </div>

                            <div className="flex items-center  mt-4">
                                <PrimaryButton className="ml-4 text-sm" disabled={processing}>
                                    حفظ
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
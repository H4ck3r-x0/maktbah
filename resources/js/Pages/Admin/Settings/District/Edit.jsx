import AdminAuthenticatedLayout from '@/Layouts/AdminAuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm, Head } from '@inertiajs/react';
import { Transition } from '@headlessui/react';


export default function Edit({ auth, district, cities }) {
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: district.name,
        city_id: district.city_id,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('admin.district.update', district.id));
    };

    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex items-center justify-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">إضافة مدن</h2>
                </div>
            }
        >
            <Head title="إضافة مدن" />

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div>
                                    <select
                                        defaultValue={district.city_id}
                                        onChange={(e) => setData('city_id', e.target.value)}
                                        className={`w-full mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm `}>
                                        <option value="">أختر المدينة</option>
                                        {
                                            cities.map(city =>
                                                <option
                                                    value={city.id} key={city.id}>{city.name}</option>
                                            )
                                        }
                                    </select>
                                    <InputError className="mt-2" message={errors.city_id} />

                                </div>
                                <div>
                                    <InputLabel htmlFor="name" value="الاسم" />

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
        </AdminAuthenticatedLayout>
    )

}
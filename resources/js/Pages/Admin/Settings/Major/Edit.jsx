import AdminAuthenticatedLayout from '@/Layouts/AdminAuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm, Head } from '@inertiajs/react';
import { Transition } from '@headlessui/react';


export default function Edit({ auth, major }) {
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: major.name,
        levels: ''
    });


    const submit = (e) => {
        e.preventDefault();

        patch(route('admin.major.update', major.id));
    };

    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex items-center justify-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">تعديل تخصص</h2>
                </div>
            }
        >
            <Head title="تعديل تخصص" />

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit} className="mt-6 space-y-6">
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


                                <div>
                                    <div className='flex items-center gap-2'>
                                        <InputLabel htmlFor="levels" value="عدد المستويات" />
                                        <p className='text-sm text-blue-700'>{major.levels.length}</p>
                                    </div>

                                    <TextInput
                                        type="number"
                                        max="20"
                                        min="1"
                                        id="levels"
                                        className="mt-2 block w-full"
                                        value={data.levels}
                                        onChange={(e) => setData('levels', e.target.value)}
                                        required
                                    />

                                    <InputError className="mt-2" message={errors.levels} />
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
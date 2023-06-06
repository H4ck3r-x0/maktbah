import AdminAuthenticatedLayout from '@/Layouts/AdminAuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, Head } from '@inertiajs/react';
import { Transition } from '@headlessui/react';


export default function Create({ auth }) {
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        book_name: '',
        author_name: '',
        edition_number: '',
        volume_number: '',
    });


    const submit = (e) => {
        e.preventDefault();

        post(route('admin.book.store'));
    };

    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex items-center justify-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">إضافة كتاب</h2>
                </div>
            }
        >
            <Head title="إضافة كتاب" />

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div>
                                    <InputLabel htmlFor="book_name" value="أسم الكتاب" />

                                    <TextInput
                                        id="book_name"
                                        className="mt-2 block w-full"
                                        value={data.book_name}
                                        onChange={(e) => setData('book_name', e.target.value)}
                                        required
                                        autoComplete="book_name"
                                    />

                                    <InputError className="mt-2" message={errors.book_name} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="author_name" value="أسم المؤلف" />

                                    <TextInput
                                        id="author_name"
                                        className="mt-2 block w-full"
                                        value={data.author_name}
                                        onChange={(e) => setData('author_name', e.target.value)}
                                        required
                                        autoComplete="author_name"
                                    />

                                    <InputError className="mt-2" message={errors.author_name} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="edition_number" value="رقم الطبعة" />

                                    <TextInput
                                        id="edition_number"
                                        className="mt-2 block w-full"
                                        value={data.edition_number}
                                        onChange={(e) => setData('edition_number', e.target.value)}
                                        required
                                        autoComplete="edition_number"
                                    />

                                    <InputError className="mt-2" message={errors.edition_number} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="volume_number" value="رقم المجلد" />

                                    <TextInput
                                        id="volume_number"
                                        className="mt-2 block w-full"
                                        value={data.volume_number}
                                        onChange={(e) => setData('volume_number', e.target.value)}
                                        required
                                        autoComplete="volume_number"
                                    />

                                    <InputError className="mt-2" message={errors.volume_number} />
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
        </AdminAuthenticatedLayout>
    )

}
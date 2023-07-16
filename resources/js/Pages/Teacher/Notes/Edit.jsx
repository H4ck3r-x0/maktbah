import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Edit({ auth, note }) {
    const { data, setData, patch, processing, errors, reset } = useForm({
        name: note.name,
        url: note.url,
        description: note.description,
        user_id: auth.user.id,
    });


    const submit = (e) => {
        e.preventDefault();

        patch(route('teacher.note.update', note.id));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">
                إنشاء مذكرة جديدة
            </h2>}
        >
            <Head title="إنشاء مذكرة جديدة" />
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-6">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">
                        <form onSubmit={submit}>
                            <div>
                                <InputLabel htmlFor="name" value="أسم المذكرة" />

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

                            <div className="mt-4">
                                <InputLabel htmlFor="description" value="وصف المذكرة" />

                                <textarea
                                    defaultValue={note.description}
                                    rows={6}
                                    onChange={(e) => setData('description', e.target.value)}
                                    className="mt-2 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    name="description" id="description"></textarea>

                                <InputError message={errors.description} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="url" value="رابط المذكرة" />

                                <TextInput
                                    id="url"
                                    type="text"
                                    name="url"
                                    value={data.url}
                                    className="mt-2 block w-full"
                                    onChange={(e) => setData('url', e.target.value)}
                                />

                                <InputError message={errors.url} className="mt-2" />
                            </div>

                            <div className="flex items-center  mt-4">
                                <PrimaryButton className="ml-4 text-sm" disabled={processing}>
                                    تحديث
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
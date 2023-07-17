import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

export default function TeacherInfoForm({ user }) {
    const { data, setData, post, processing, errors } = useForm({
        specialty: '',
        university_name: ''
    });


    const submit = (e) => {
        e.preventDefault();

        post(route('teacher.info.store'));
    };
    return (
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-6">
            <h1 className='pb-4 text-xl font-semibold'>بياناتك التعليمية</h1>
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                    <div className="">
                        <div className="pb-6">
                            <p className="text-md sm:text-lg text-gray-700">
                                مرحبا بك الأستاذ/ة <span className="px-1">{user?.username}</span>
                                نرجو منك تزويدنا ببيانك الجامعية.
                            </p>
                        </div>
                        <form onSubmit={submit}>
                            <div>
                                <InputLabel htmlFor="specialty" value="التخصص" />

                                <TextInput
                                    id="specialty"
                                    type="text"
                                    name="specialty"
                                    value={data.specialty}
                                    className="mt-2 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData('specialty', e.target.value)}
                                />

                                <InputError message={errors.specialty} className="mt-2" />
                            </div>

                            <div className="mt-3">
                                <InputLabel htmlFor="university_name" value="إسم الجامعة" />

                                <TextInput
                                    id="university_name"
                                    type="text"
                                    name="university_name"
                                    value={data.university_name}
                                    className="mt-2 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData('university_name', e.target.value)}
                                />

                                <InputError message={errors.university_name} className="mt-2" />
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
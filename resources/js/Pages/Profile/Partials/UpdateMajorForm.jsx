import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { useState } from 'react';
import Select from 'react-select'

export default function UpdateMajorForm({ className = '', majors, universities }) {
    const user = usePage().props.auth.user;
    const [levels, setLevels] = useState(null);

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        university: '',
        major: '',
        level: '',
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.major.update'), {
            preserveScroll: true
        });
    };

    const majorChanged = (e) => {
        setData('major', e.name);
        setLevels(e.levels);
    }

    const universityChanged = (e) => {
        setData('university', e.name);
    }

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">معلومات الجامعة والتخصص</h2>

                <p className="mt-1 text-sm text-gray-600">
                    قم بتحديث معلومات الجامعة والتخصص الخاصة بك.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className='mb-2'>
                    <Select options={universities}
                        isSearchable
                        defaultValue={universities.filter(option => option.name == user.user_profile?.university)}
                        onChange={universityChanged}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id}
                        placeholder="أختر الجامعة"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>
                <div>
                    <Select options={majors}
                        isSearchable
                        defaultValue={majors.filter(option => option.name == user.user_profile?.major)}
                        onChange={majorChanged}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id}
                        placeholder="أختر التخصص"
                    />

                    <InputError className="mt-2" message={errors.major} />
                </div>

                <div>

                    <select
                        disabled={levels == null}
                        onChange={(e) => setData('level', e.target.value)}
                        className='w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm disabled:bg-gray-100'>
                        <option value="" >{user.user_profile ? user.user_profile?.level : 'أختر المستوى'}</option>
                        {levels?.map((level) => {
                            return <option key={level} value={level}>{level}</option>
                        })}
                    </select>

                    <InputError className="mt-2" message={errors.level} />
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

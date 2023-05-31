import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdateProfileInformation({ className = '' }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        username: user.username,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('admin.profile.update'));
    };

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

                <div>
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

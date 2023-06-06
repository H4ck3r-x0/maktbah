import AdminAuthenticatedLayout from '@/Layouts/AdminAuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, Head } from '@inertiajs/react';
import { Transition } from '@headlessui/react';


export default function Edit({ auth }) {
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        name: '',
        phone: '',
        username: '',
        gender: '',
        account_type: '',
        password: ''
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.user.store'));
    };

    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex items-center justify-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">إضافة العضو</h2>

                    <Link href={route('admin.user.index')}>
                        <PrimaryButton>العودة</PrimaryButton>
                    </Link>
                </div>
            }
        >
            <Head title="إضافة العضو" />


            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div className='mb-2'>
                                    <InputLabel htmlFor="account_type" value="نوع الحساب" />
                                    <select
                                        onChange={(e) => setData('account_type', e.target.value)}
                                        name="account_type"
                                        id="account_type"
                                        autoFocus
                                        required
                                        className='mt-2 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'>
                                        <option value="">أختر نوع الحساب</option>
                                        <option value="user">عميل</option>
                                        <option value="library">مكتبة</option>
                                        <option value="teacher">استاذ / استاذة</option>
                                        <option value="stationery">قرطاسية</option>
                                    </select>

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className='mb-2'>
                                    <InputLabel htmlFor="gender" value="الجنس" />
                                    <select
                                        onChange={(e) => setData('gender', e.target.value)}
                                        name="gender"
                                        id="gender"
                                        autoFocus
                                        required
                                        className='mt-2 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'>
                                        <option value="">أختر نوع الجنس</option>
                                        <option value="male">ذكر</option>
                                        <option value="female">أنثى</option>

                                    </select>

                                    <InputError message={errors.gender} className="mt-2" />
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

                                <div>
                                    <InputLabel htmlFor="phone" value="رقم الجوال" />

                                    <TextInput
                                        id="phone"
                                        className="mt-2 block w-full"
                                        value={data.phone}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        required
                                        autoComplete="name"
                                    />

                                    <InputError className="mt-2" message={errors.phone} />
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
    );
}

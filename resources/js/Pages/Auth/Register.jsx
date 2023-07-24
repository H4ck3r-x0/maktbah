import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register({ universies, majors }) {
    const [filteredLevels, setFilteredLevels] = useState([]);

    const { data, setData, post, processing, errors, reset } = useForm({
        account_type: '',
        username: '',
        password: '',
        password_confirmation: '',
        university: null,
        major: null,
        level: null,
        gender: null,
    });

    const handleMajorChange = (e) => {
        const selectedMajor = e.target.value;
        const levels = majors.find(major => major.name === selectedMajor)?.levels || [];
        setData('major', selectedMajor);
        setFilteredLevels(levels);
    };

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="تسجيل جديد" />

            <form onSubmit={submit}>
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
                        <option value="user">طالب / طالبة</option>
                        <option value="library">مكتبة</option>
                        <option value="teacher">استاذ / استاذة</option>
                        <option value="stationery">قرطاسية</option>
                    </select>

                    <InputError message={errors.name} className="mt-2" />
                </div>

                {data.account_type === 'user' && (
                    <>
                        <div className='mb-2 '>
                            <InputLabel htmlFor="university" value="إسم الجامعة" />
                            <select
                                onChange={(e) => setData('university', e.target.value)}
                                name="university"
                                id="university"
                                autoFocus
                                required
                                className='mt-2 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'>
                                <option value="">أختر إسم الجامعة</option>
                                {universies.map((university) => (
                                    <option value={university.name} key={university.id}>{university.name}</option>
                                ))}
                            </select>

                            <InputError message={errors.university} className="mt-2" />
                        </div>

                        <div className='mb-2'>
                            <InputLabel htmlFor="major" value="التخصص الجامعي" />
                            <select
                                onChange={(e) => handleMajorChange(e)}
                                name="major"
                                id="major"
                                required
                                className='mt-2 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'>
                                <option value="">أختر التخصص الجامعي</option>
                                {majors.map((major) => (
                                    <option value={major.name} key={major.id}>{major.name}</option>
                                ))}
                            </select>

                            <InputError message={errors.major} className="mt-2" />
                        </div>

                        <div className='mb-2'>
                            <InputLabel htmlFor="level" value="المستوى الجامعي" />
                            <select
                                onChange={(e) => setData('level', e.target.value)}
                                name="level"
                                id="level"
                                required
                                className='mt-2 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'>
                                <option value="">أختر المستوى الجامعي</option>
                                {filteredLevels.map((level, index) => (
                                    <option value={level} key={index}>{level}</option>
                                ))}
                            </select>

                            <InputError message={errors.major} className="mt-2" />
                        </div>

                        <div className='mb-2'>
                            <InputLabel htmlFor="gender" value="الجنس" />
                            <select
                                onChange={(e) => setData('gender', e.target.value)}
                                name="gender"
                                id="gender"
                                required
                                className='mt-2 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'>
                                <option value="">أختر الجنس</option>
                                <option value="male">ذكر</option>
                                <option value="female">أنثى</option>
                            </select>

                            <InputError message={errors.gender} className="mt-2" />
                        </div>
                    </>
                )}

                <div className="mt-4">
                    <InputLabel htmlFor="username" value="أسم المستخدم" />

                    <TextInput
                        id="username"
                        type="text"
                        name="username"
                        value={data.username}
                        className="mt-2 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('username', e.target.value)}
                        required
                    />

                    <InputError message={errors.username} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="كلمة المرور" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-2 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="تأكيد كلمة المرور" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center  mt-4">
                    <PrimaryButton className="" disabled={processing}>
                        تسجيل
                    </PrimaryButton>

                    <Link
                        href={route('login')}
                        className="mr-4  text-md text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        لديك حساب بالفعل؟
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}

import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="نسيت كلمة المرور" />

            <div className="mb-4 text-sm text-gray-600">
                <h3 className='text-lg mb-1'>نسيت كلمة المرور؟</h3>
                <p className='text-gray-700 text-sm'>ليس هناك مشكلة، اكتب رقم جوالك وراح نرسل لك رسالة.</p>
            </div>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData('email', e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="flex items-center  mt-4">
                    <PrimaryButton className="" disabled={processing}>
                        أرسال
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}

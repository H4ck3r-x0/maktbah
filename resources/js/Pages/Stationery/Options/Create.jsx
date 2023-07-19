import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import { useEffect } from 'react';


export default function Create({ auth, printingOptions }) {
    const [inputValues, setInputValues] = useState({});
    const { data, setData, post, processing, errors, reset } = useForm({
        print_price: '',
        single_face_printing: '',
        double_sided_printing: '',
        colored_printing: '',
        ribbon_print: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('stationery.options.store'));
    };

    useEffect(() => {
        if (printingOptions && printingOptions.length > 0) {
            const options = printingOptions.reduce((acc, option) => {
                acc[option.option] = option.price;
                return acc;
            }, {});

            setData(options);
        }
    }, [printingOptions]);


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">
                اسعار وخيارات الطباعة
            </h2>}
        >
            <Head title="اسعار وخيارات الطباعة" />
            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-4 lg:px-4">
                    <div className='w-full sm:inline-flex ml-4 items-center gap-3 px-6 '>
                        <div className='bg-white p-4 w-full rounded-md shadow-md'>
                            <form onSubmit={submit}>
                                <div className='mt-4'>
                                    <InputLabel htmlFor="print_price" value="سعر الطباعة الأساسي" />

                                    <TextInput
                                        type="number"
                                        name="print_price"
                                        className="mt-2 block w-full"
                                        isFocused={true}
                                        value={data.print_price || ''}
                                        onChange={(e) => setData({ ...data, print_price: e.target.value })}
                                    />

                                    <InputError message={errors.print_price} className="mt-2" />
                                </div>
                                <div className='mt-4'>
                                    <InputLabel htmlFor="single_face_printing" value="سعر طباعة وجه واحد" />

                                    <TextInput
                                        id="single_face_printing"
                                        type="number"
                                        name="single_face_printing"
                                        className="mt-2 block w-full"
                                        value={data.single_face_printing || ''}
                                        onChange={(e) => setData({ ...data, single_face_printing: e.target.value })}
                                    />

                                    <InputError message={errors.single_face_printing} className="mt-2" />
                                </div>

                                <div className='mt-4'>
                                    <InputLabel htmlFor="double_sided_printing" value="سعر طباعة وجهيين" />

                                    <TextInput
                                        id="double_sided_printing"
                                        type="number"
                                        name="double_sided_printing"
                                        className="mt-2 block w-full"
                                        value={data.double_sided_printing || ''}
                                        onChange={(e) => setData({ ...data, double_sided_printing: e.target.value })}
                                    />

                                    <InputError message={errors.double_sided_printing} className="mt-2" />
                                </div>

                                <div className='mt-4'>
                                    <InputLabel htmlFor="colored_printing" value="سعر الطباعة الملونة" />

                                    <TextInput
                                        id="colored_printing"
                                        type="number"
                                        name="colored_printing"
                                        className="mt-2 block w-full"
                                        value={data.colored_printing || ''}
                                        onChange={(e) => setData({ ...data, colored_printing: e.target.value })}
                                    />

                                    <InputError message={errors.colored_printing} className="mt-2" />
                                </div>

                                <div className='mt-4'>
                                    <InputLabel htmlFor="ribbon_print" value="سعر الطباعة بشريط" />

                                    <TextInput
                                        id="ribbon_print"
                                        type="number"
                                        name="ribbon_print"
                                        className="mt-2 block w-full"
                                        value={data.ribbon_print || ''}
                                        onChange={(e) => setData({ ...data, ribbon_print: e.target.value })}
                                    />

                                    <InputError message={errors.ribbon_print} className="mt-2" />
                                </div>
                                <div className="flex items-center  mt-4">
                                    <PrimaryButton className="ml-4 text-xs" disabled={processing}>
                                        حفظ
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
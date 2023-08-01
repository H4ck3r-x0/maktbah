import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useEffect } from 'react';


export default function Create({ auth, printingOptions }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        single_face_printing: '',
        single_face_printing_per_page: '',
        double_sided_printing: '',
        double_sided_printing_per_page: '',
        colored_printing: '',
        colored_printing_per_page: '',
        ribbon_print: '',
        ribbon_print_per_page: 0,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('stationery.options.store'));
    };

    useEffect(() => {
        if (printingOptions && printingOptions.length > 0) {
            const options = printingOptions.reduce((acc, option) => {
                acc[option.option] = option.price;
                acc[`${option.option}_per_page`] = option.per_page; // Add this line to set the per_page value
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
                                    <InputLabel htmlFor="single_face_printing" value="سعر طباعة وجه واحد" />

                                    <div className='flex items-center gap-3'>
                                        <TextInput
                                            id="single_face_printing"
                                            type="number"
                                            name="single_face_printing"
                                            className="mt-2 block w-sm"
                                            value={data.single_face_printing || ''}
                                            placeholder="مثال: 1 "
                                            onChange={(e) => setData({ ...data, single_face_printing: e.target.value })}
                                        />
                                        <span className='text-sm text-gray-600 font-semibold mt-1'>لكل</span>
                                        <TextInput
                                            id="single_face_printing_per_page"
                                            type="number"
                                            name="single_face_printing_per_page"
                                            className="mt-2 block w-sm"
                                            value={data.single_face_printing_per_page || ''}
                                            placeholder="عدد الصفحات"
                                            onChange={(e) => setData({ ...data, single_face_printing_per_page: e.target.value })}
                                        />

                                    </div>

                                    <InputError message={errors.single_face_printing} className="mt-2" />
                                </div>

                                <div className='mt-4'>
                                    <InputLabel htmlFor="double_sided_printing" value="سعر طباعة وجهيين" />

                                    <div className='flex items-center gap-3'>
                                        <TextInput
                                            id="double_sided_printing"
                                            type="number"
                                            name="double_sided_printing"
                                            className="mt-2 block w-sm"
                                            placeholder="مثال: 1 "
                                            value={data.double_sided_printing || ''}
                                            onChange={(e) => setData({ ...data, double_sided_printing: e.target.value })}
                                        />
                                        <span className='text-sm text-gray-600 font-semibold mt-1'>لكل</span>
                                        <TextInput
                                            id="double_sided_printing_per_page"
                                            type="number"
                                            name="double_sided_printing_per_page"
                                            className="mt-2 block w-sm"
                                            placeholder="عدد الصفحات"
                                            value={data.double_sided_printing_per_page || ''}
                                            onChange={(e) => setData({ ...data, double_sided_printing_per_page: e.target.value })}
                                        />
                                    </div>
                                    <InputError message={errors.double_sided_printing} className="mt-2" />
                                </div>

                                <div className='mt-4'>
                                    <InputLabel htmlFor="colored_printing" value="سعر الطباعة الملونة" />

                                    <div className='flex items-center gap-3'>
                                        <TextInput
                                            id="colored_printing"
                                            type="number"
                                            name="colored_printing"
                                            className="mt-2 block w-sm"
                                            placeholder="مثال: 1 "
                                            value={data.colored_printing || ''}
                                            onChange={(e) => setData({ ...data, colored_printing: e.target.value })}
                                        />
                                        <span className='text-sm text-gray-600 font-semibold mt-1'>لكل</span>
                                        <TextInput
                                            id="colored_printing_per_page"
                                            type="number"
                                            name="colored_printing_per_page"
                                            className="mt-2 block w-sm"
                                            placeholder="عدد الصفحات"
                                            value={data.colored_printing_per_page || ''}
                                            onChange={(e) => setData({ ...data, colored_printing_per_page: e.target.value })}
                                        />
                                    </div>

                                    <InputError message={errors.colored_printing} className="mt-2" />
                                </div>

                                <div className='mt-4'>
                                    <InputLabel htmlFor="ribbon_print" value="سعر الطباعة بشريط" />

                                    <div className='flex items-center gap-3'>
                                        <TextInput
                                            id="ribbon_print"
                                            type="number"
                                            name="ribbon_print"
                                            className="mt-2 block w-sm"
                                            placeholder="مثال: 1 "
                                            value={data.ribbon_print || ''}
                                            onChange={(e) => setData({ ...data, ribbon_print: e.target.value })}
                                        />
                                        {/* <span className='text-sm text-gray-600 font-semibold mt-1'>لكل</span> */}
                                        <TextInput
                                            id="ribbon_print_per_page"
                                            type="hidden"
                                            name="ribbon_print_per_page"
                                            className="mt-2 block w-sm"
                                            placeholder="عدد الصفحات"
                                            value={0}
                                            onChange={(e) => setData({ ...data, ribbon_print_per_page: 0 })}
                                        />
                                    </div>

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
import AdminAuthenticatedLayout from '@/Layouts/AdminAuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head, router } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';
import DangerButton from '@/Components/DangerButton';

export default function Create({ auth, adminAdImage }) {
    const { data, setData, post, processing, recentlySuccessful } = useForm({
        adPreview: adminAdImage,
        adImage: null
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.ads.store'), {
            onSuccess: () => {
                toast.success("تم اضافة الاعلان بنجاح", {
                    duration: 4000,
                    position: 'top-center',
                    ariaProps: {
                        role: 'status',
                        'aria-live': 'polite',
                    },
                });
            },
            onError: (error) => {
                toast.error(error.adImage, {
                    duration: 4000,
                    position: 'top-center',
                    ariaProps: {
                        role: 'status',
                        'aria-live': 'polite',
                    },
                });
            }
        });
    };

    const removeAd = (e) => {
        e.preventDefault();

        router.delete(route('admin.ads.destroy'), {
            onSuccess: () => {
                toast.success('تم حذف الاعلان بنجاح', {
                    duration: 4000,
                    position: 'top-center',
                    ariaProps: {
                        role: 'status',
                        'aria-live': 'polite',
                    },
                })
                setData({
                    adPreview: null,
                    adImage: null
                })
            }
        });
    }

    const handleAdImageChange = ({ target }) => {
        if (target.files[0]) {
            setData(prevData => ({
                ...prevData,
                adImage: target.files[0],
                adPreview: URL.createObjectURL(target.files[0])
            }));
        }
    };

    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex items-center justify-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">إضافة اعلان</h2>
                </div>
            }
        >
            <Head title="إضافة اعلان" />

            <div className="py-8">
                <Toaster />
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div>
                                {data.adPreview && (
                                    <img src={data.adPreview} alt="الصورة غير متوفره" />
                                )}
                            </div>
                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <label className="flex  items-center justify-center w-full  py-2 px-4 border border-gray-300 rounded-md shadow-sm transition duration-300 focus:border-indigo-500 focus:ring-indigo-500 hover:border-indigo-500 focus:outline-none hover:cursor-pointer">
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="mr-2">أختر صورة الأعلان</span>
                                        <span className="text-xs text-gray-400 font-semibold mr-2">
                                            حجم الصورة يجب ان يكون 2 MB
                                        </span>
                                    </div>
                                    <input
                                        name="adImage"
                                        onChange={(e) => handleAdImageChange(e)}
                                        type="file"
                                        className="hidden"
                                    />
                                </label>

                                <div className="flex items-center gap-8">
                                    <PrimaryButton disabled={processing || data.adPreview === null}>رفع الاعلان</PrimaryButton>
                                    {adminAdImage &&
                                        <DangerButton onClick={removeAd} disabled={processing}>حذف الاعلان</DangerButton>
                                    }

                                    <Transition
                                        show={recentlySuccessful}
                                        enterFrom="opacity-0"
                                        leaveTo="opacity-0"
                                        className="transition ease-in-out"
                                    >
                                        <p className="text-sm text-gray-600">تم الرفع بنجاح</p>
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
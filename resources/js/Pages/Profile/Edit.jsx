import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import UpdatePhoneForm from './Partials/UpdatePhoneForm';
import UpdateMajorForm from './Partials/UpdateMajorForm';

export default function Edit({ auth, majors, cities, districts, universities }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">تحديث الملف الشخصي</h2>}
        >
            <Head title="تحديث الملف الشخصي" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            className="max-w-xl"
                            cities={cities}
                            districts={districts}
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePhoneForm
                            className="max-w-xl"
                        />
                    </div>

                    {auth.user.role == 'user' &&
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <UpdateMajorForm
                                majors={majors}
                                universities={universities}
                                className="max-w-xl"
                            />
                        </div>
                    }



                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}

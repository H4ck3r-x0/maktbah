import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import StationeryInfoForm from './StationeryInfoForm';

export default function Dashboard({ auth, stationery, cities, districts }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">
                لوحة تحكم القرطاسية
            </h2>}
        >
            <Head title="لوحة تحكم القرطاسية" />
            {stationery === null ?
                <StationeryInfoForm user={auth.user} cities={cities} districts={districts} /> :
                <p></p>
            }
        </AuthenticatedLayout>
    );
}

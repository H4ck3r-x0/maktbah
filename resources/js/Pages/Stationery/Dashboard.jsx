import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
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
                <div className="py-1">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="overflow-hidden  sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <h1 className='pb-3 text-2xl text-gray-900'>القرطاسية / الفروع</h1>
                                <div className='flex items-center flex-wrap gap-2'>

                                    {/* Main Library */}
                                    <div className="w-full sm:max-w-sm  p-6 bg-white border border-gray-200 rounded-lg shadow">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{stationery.name}</h5>
                                        <div className="mb-3 text-gray-700 ">
                                            <ul className='flex flex-col  justify-evenly gap-3 py-2'>
                                                <li>المدينة {stationery.city}</li>
                                                <li>الحي {stationery.district}</li>
                                                <li>رقم الهاتف {stationery.phone}</li>
                                            </ul>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <Link href={route('stationery.main.edit', stationery.id)}
                                                className="inline-flex items-center px-3 py-2 text-sm  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                                تعديل القرطاسية
                                            </Link>
                                            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">رئيسي</span>
                                        </div>
                                    </div>
                                    {/* Main Library */}

                                    {/* Branches */}

                                    {stationery.branches &&
                                        stationery.branches.map((branch) => {
                                            return (
                                                <div key={branch.id} className="w-full sm:max-w-sm  p-6 bg-white border border-gray-200 rounded-lg shadow">
                                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{branch.name}</h5>
                                                    <div className="mb-3 text-gray-700 ">
                                                        <ul className='flex flex-col  justify-evenly gap-3 py-2'>
                                                            <li>المدينة {branch.city}</li>
                                                            <li>الحي {branch.district}</li>
                                                            <li>رقم الهاتف {branch.phone}</li>
                                                        </ul>
                                                    </div>
                                                    <div className='flex items-center justify-between'>
                                                        <Link href={route('stationery.main.branch.edit', branch.id)}
                                                            className="inline-flex items-center px-3 py-2 text-sm  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                                            تعديل الفرع
                                                        </Link>
                                                        <span className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">فرع</span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    {/* Branches */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </AuthenticatedLayout>
    );
}

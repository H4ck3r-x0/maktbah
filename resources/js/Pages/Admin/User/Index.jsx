import DangerButton from '@/Components/DangerButton';
import PrimaryButton from '@/Components/PrimaryButton';
import AdminAuthenticatedLayout from '@/Layouts/AdminAuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ auth, users }) {
    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex items-center justify-between'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">جميع اعضاء الموقع</h2>

                    <Link href={route('admin.user.create')}>
                        <PrimaryButton>إضافة عضو جديد</PrimaryButton>
                    </Link>
                </div>
            }
        >
            <Head title="جميع اعضاء الموقع" />


            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-right text-gray-500 border">
                                    <thead className="text-sm text-gray-700 uppercase bg-gray-100 rounded-md border">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                #
                                            </th>
                                            <th scope="col" className="px-6 py-3 tracking-wider">
                                                الاسم
                                            </th>
                                            <th scope="col" className="px-6 py-3 tracking-wider">
                                                الفئة
                                            </th>
                                            <th scope="col" className="px-6 py-3 tracking-wider">
                                                العمليات
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map(user => (
                                            <tr className="bg-white border-b hover:bg-gray-100 hover:transition-all" key={user.id}>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                                                    {user.id}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {user.name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {user.role}
                                                </td>
                                                <td className="px-0 py-4">
                                                    <div className='flex items-center gap-2'>
                                                        <Link href={route('admin.user.edit', user.id)}>
                                                            <PrimaryButton>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                </svg>
                                                            </PrimaryButton>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminAuthenticatedLayout>
    );
}

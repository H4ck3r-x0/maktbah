import AdminAuthenticatedLayout from '@/Layouts/AdminAuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index({ auth, libraries }) {
    console.log(libraries);
    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">جميع المكتبات</h2>}
        >
            <Head title="جميع المكتبات" />

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-right text-gray-500">
                                    <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                #
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                أسم المكتبة
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                صاحب المكتبة
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {libraries.map(library => (
                                            <tr className="bg-white border-b " key={library.id}>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                                                    {library.id}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {library.name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {library.user.name}
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

import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index({ auth, notes }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">المذكرات</h2>}
        >
            <Head title="المذكرات" />
            <div className="py-6">
                <div className='w-full items-center gap-3 px-2'>

                    <div className="relative overflow-x-auto">
                        <table className="w-full text-xs sm:text-lg text-right text-gray-500 shadow border">
                            <thead className="text-xs sm:text-lg text-gray-700  border ">
                                <tr>
                                    <th scope="col" className="px-2 py-3 whitespace-nowrap">
                                        صاحب المذكرة
                                    </th>
                                    <th scope="col" className="px-2 py-3 whitespace-nowrap">
                                        أسم المذكرة
                                    </th>


                                </tr>
                            </thead>
                            <tbody >
                                {notes.map(((note) => {
                                    return (
                                        <tr key={note.id} className="bg-white ">
                                            <th scope="row" className="px-2 py-4 whitespace-nowrap">
                                                {note.user.username}
                                            </th>
                                            <td className="px-2 py-4 whitespace-nowrap">
                                                {note.name}
                                            </td>
                                            <td className="px-2 py-4 whitespace-nowrap">
                                                <a href={note.url} target='_blank'>
                                                    <PrimaryButton className='text-xs sm:text-sm'>
                                                        مشاهدة المذكرة
                                                    </PrimaryButton>
                                                </a>
                                            </td>
                                        </tr>
                                    )
                                }))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton"
import SecondaryButton from "@/Components/SecondaryButton"
import { Link, router } from "@inertiajs/react"
import moment from 'moment/min/moment-with-locales';

export default function Notes({ notes }) {

    const destroy = (e, id) => {
        e.preventDefault();

        router.delete(route('teacher.note.delete', id));
    };

    return (
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6">
            <h1 className='text-3xl mb-2 font-semibold'>المذكرات</h1>
            <div className="overflow-hidden ">
                <div className="p-2 text-gray-900">
                    <div className="grid grid-cols-1 gap-5">
                        {notes.length === 0 &&
                            <div className="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                                <p className="text-xl font-semibold text-gray-600">لا يوجد مذكرات</p>
                                <Link href={route('teacher.note.create')}>
                                    <PrimaryButton>إنشاء مذكرة جديدة</PrimaryButton>
                                </Link>
                            </div>
                        }
                        {notes.map((note) => (
                            <div key={note.id} className="bg-white p-4 rounded-lg shadow-lg">
                                <div className="flex itms-center justify-between">
                                    <div className="flex flex-col gap-1 pb-4">
                                        <h1 className="text-2xl font-semibold text-gray-700 ">{note.name}</h1>
                                        <span className="text-sm text-gray-500">{moment(note.created_at).locale('ar').format('MMMM Do YYYY')}</span>
                                    </div>
                                    <div>
                                        <DangerButton onClick={(e) => destroy(e, note.id)}>
                                            X
                                        </DangerButton>
                                    </div>
                                </div>
                                <p className="text-lg text-gray-600 text-justify leading-8">{note.description}</p>

                                <div className="flex items-center justify-between mt-6">
                                    <a href={note.url} target="blank">
                                        <SecondaryButton>الذهاب الى المذكرة</SecondaryButton>
                                    </a>

                                    <Link href={route('teacher.note.edit', note.id)}>
                                        <PrimaryButton>تعديل المذكرة</PrimaryButton>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
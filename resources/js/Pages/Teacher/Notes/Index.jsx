import PrimaryButton from "@/Components/PrimaryButton"
import SecondaryButton from "@/Components/SecondaryButton"
import { Link } from "@inertiajs/react"

export default function Notes({ notes }) {
    return (
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6">
            <h1 className='text-3xl mb-2 font-semibold'>المذكرات</h1>
            <div className="overflow-hidden ">
                <div className="p-2 text-gray-900">
                    <div className="grid grid-cols-1 gap-5">
                        {notes.map((note) => (
                            <div key={note.id} className="bg-white p-4 rounded-lg shadow-lg">
                                <h1 className="text-2xl font-semibold text-gray-700 mb-3">{note.name}</h1>
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
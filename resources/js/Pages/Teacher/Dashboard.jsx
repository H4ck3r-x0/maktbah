import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Notes from './Notes/Index';
import TeacherInfoForm from './TeacherInfoForm';

export default function Dashboard({ auth, teacher, notes, universities }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">
                لوحة تحكم الأستاذ/ة
            </h2>}
        >
            <Head title={`لوحة تحكم الأستاذ/ة`} />


            {teacher === null ?
                <TeacherInfoForm user={auth.user} universities={universities} /> :
                <Notes notes={notes} />
            }
        </AuthenticatedLayout>
    );
}

import AdminAuthenticatedHeader from '@/Components/AdminAuthenticatedHeader';
import AuthenticatedHeader from '@/Components/AuthenticatedHeader';

export default function Authenticated({ user, header, children }) {
    console.log(user)
    return (
        <div className="min-h-screen bg-gray-100">
            {user.role == 'admin' ? <AdminAuthenticatedHeader user={user} /> :
                <AuthenticatedHeader user={user} />
            }

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}

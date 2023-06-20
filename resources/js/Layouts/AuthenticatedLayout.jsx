import AdminAuthenticatedHeader from '@/Components/AdminAuthenticatedHeader';
import AuthenticatedBranchHeader from '@/Components/AuthenticatedBranchHeader';
import AuthenticatedHeader from '@/Components/AuthenticatedHeader';
import AuthenticatedLibraryHeader from '@/Components/AuthenticatedLibraryHeader';

export default function Authenticated({ user, header, children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            {user.role == 'admin' && <AdminAuthenticatedHeader user={user} />}

            {user.role == 'user' && <AuthenticatedHeader user={user} />}

            {user.role == 'library' && <AuthenticatedLibraryHeader user={user} />}

            {user.role == 'branch' && <AuthenticatedBranchHeader user={user} />}

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}

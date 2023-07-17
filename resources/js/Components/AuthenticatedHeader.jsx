import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import ShoppingBadge from './ShoppingBadge';

export default function AuthenticatedHeader({ user }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const user_cart = usePage().props.user_cart;

    return (
        <nav className="bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                            </Link>
                        </div>

                        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <NavLink href={'/'} >
                                الرئيسية
                            </NavLink>
                            <NavLink href={route('search.books.index')} active={route().current('search.books.index')}>
                                الكتب
                            </NavLink>
                            <NavLink href={route('user.order.index')} active={route().current('user.order.index')}>
                                الطلبات
                            </NavLink>

                        </div>
                    </div>

                    <div className="hidden sm:flex sm:items-center sm:ml-6">
                        <div className="flex items-center ml-3 relative">
                            <div>
                                <ShoppingBadge />
                            </div>
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {user.username}

                                            <svg
                                                className="mr-2 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href={route('dashboard')}>لوحة التحكم</Dropdown.Link>
                                    <Dropdown.Link href={route('profile.edit')}>تحديث الملف الشخصي</Dropdown.Link>
                                    <Dropdown.Link href={route('logout')} method="post" as="button">
                                        تسجيل الخروج
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>

                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                <div className="pt-2 pb-3 space-y-1">
                    <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                        الرئيسية
                    </ResponsiveNavLink>
                    <ResponsiveNavLink href={route('search.books.index')} active={route().current('search.books.index')}>
                        الكتب
                    </ResponsiveNavLink>
                    <ResponsiveNavLink href={route('user.order.index')} active={route().current('user.order.index')}>
                        الطلبات
                    </ResponsiveNavLink>
                    <ResponsiveNavLink href={route('user.cart.index')} active={route().current('user.cart.index')}>
                        <div className='flex items-center justify-between w-full'>
                            <span>المشتريات</span>
                            <span>
                                <div className="flex items-center gap-1">
                                    <span className="text-md mt-1  text-indigo-500">{user_cart?.cart?.length}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-700 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                </div>
                            </span>
                        </div>
                    </ResponsiveNavLink>
                </div>

                <div className="pt-4 pb-1 border-t border-gray-200">
                    <div className="px-4">
                        <div className="font-medium text-base text-gray-800">{user.username}</div>
                    </div>

                    <div className="mt-3 space-y-1">
                        <ResponsiveNavLink href={route('profile.edit')}>الملف الشخصي</ResponsiveNavLink>
                        <ResponsiveNavLink method="post" href={route('logout')} as="button">
                            تسجيل الخروج
                        </ResponsiveNavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

import { Link, usePage } from "@inertiajs/react"

export default function ShoppingBadge() {
    const user_cart = usePage().props.user_cart;

    return (
        <Link href={route('user.cart.index')}>
            <div className="flex items-center gap-2 bg-indigo-300 px-2 py-1 rounded-full shadow-sm">
                <h1 className="text-sm text-white font-semibold">السلة</h1>
                <span className="text-sm text-white">{user_cart?.cart?.length}</span>
            </div>
        </Link>
    )
}
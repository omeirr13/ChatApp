'use client'
import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="py-8 px-24 flex bg-slate-900">
            <h2 className="w-screen text-white font-bold text-2xl">Chat-App</h2>
            {localStorage.getItem('currentLoggedIn') ? (
                <div>
                    <ul className="flex gap-6 text-white text-xl">
                        <li>
                            <a href="#">Logout</a>
                        </li>
                        <li>
                            <Link href="/chat" activeClassName="underline" className="hover:underline">
                                Chat
                            </Link>
                        </li>
                    </ul>
                </div>
            ) : (
                <ul className="flex gap-6 text-white text-xl">
                    <li>
                        <Link href="/auth/login" activeClassName="underline" className="hover:underline">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link href="/auth/signup" activeClassName="underline" className="hover:underline">
                            Signup
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}

export default NavBar;
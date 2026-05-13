import { useState } from "react"
import {
    Menu,
    X,
    Globe,
    ChevronDown
} from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full sticky top-0 z-50 bg-black/95 backdrop-blur-xl text-white border-b border-zinc-800">

            {/* Navbar Container */}
            <div className="max-w-[1600px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4">

                {/* Left */}
                <div className="flex items-center gap-8">

                    {/* Logo */}
                    <h1 className="text-3xl font-bold tracking-tight cursor-pointer hover:opacity-80 transition">
                        <Link to='/'>  NexRide</Link>
                    </h1>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">

                        {["Ride", "Drive", "Business", "About"].map((item, index) => (
                            <button
                                key={index}
                                className="px-5 py-2.5 rounded-full hover:bg-white/10 transition text-sm font-medium"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Desktop Right */}
                <div className="hidden lg:flex items-center gap-2">

                    {/* Language */}
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-full hover:bg-white/10 transition text-sm font-medium">
                        <Globe size={17} />
                        EN
                        <ChevronDown size={16} />
                    </button>

                    {/* Help */}
                    <button className="px-4 py-2.5 rounded-full hover:bg-white/10 transition text-sm font-medium">
                        Help
                    </button>

                    {/* Login */}
                    <Link
                        to="/user-login"
                        className="px-4 py-2.5 rounded-full hover:bg-white/10 transition text-sm font-medium"
                    >
                        Log in
                    </Link>

                    {/* Signup */}
                    <Link
                        to="/user-signup"
                        className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-all duration-300 shadow-lg hover:scale-105"
                    >
                        Sign up
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full hover:bg-white/10 transition"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* ================= MOBILE MENU ================= */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-4 pb-6 pt-2 bg-black">

                    {/* 🔥 BACK BUTTON ROW (NEW) */}
                    <div className="flex items-center justify-between px-2 mb-4">

                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium text-white hover:opacity-70"
                        >
                            ← Back
                        </button>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10 transition"
                        >
                            <X size={22} />
                        </button>

                    </div>

                    {/* Mobile Card */}
                    <div className="bg-zinc-950 border border-zinc-800 rounded-[30px] p-4 shadow-2xl">

                        {/* Links */}
                        <div className="flex flex-col gap-2">

                            {["Ride", "Drive", "Business", "About"].map((item, index) => (
                                <button
                                    key={index}
                                    className="text-left px-4 py-4 rounded-2xl hover:bg-white/10 transition text-base font-medium"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="border-t border-zinc-800 my-5"></div>

                        {/* Extra */}
                        <div className="flex flex-col gap-2">

                            <button className="flex items-center gap-2 px-4 py-4 rounded-2xl hover:bg-white/10 transition text-base font-medium">
                                <Globe size={18} />
                                English
                            </button>

                            <button className="text-left px-4 py-4 rounded-2xl hover:bg-white/10 transition text-base font-medium">
                                Help
                            </button>

                            <Link
                                to="/login"
                                className="text-left px-4 py-4 rounded-2xl hover:bg-white/10 transition text-base font-medium"
                            >
                                Log in
                            </Link>
                        </div>

                        {/* Signup */}
                        <Link to="/register">
                            <button className="w-full mt-5 bg-white text-black py-4 rounded-2xl text-base font-semibold hover:bg-zinc-200 transition-all duration-300 active:scale-95">
                                Sign up
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
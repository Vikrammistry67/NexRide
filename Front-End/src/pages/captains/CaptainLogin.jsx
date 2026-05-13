import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Captain Login Data:", form);
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-black via-zinc-900 to-black">

            {/* CARD */}
            <div className="w-full max-w-sm sm:max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-6 sm:p-8 text-white">

                {/* TITLE */}
                <h2 className="text-3xl font-bold text-center">
                    Captain Login
                </h2>

                <p className="text-center text-white/60 text-sm mt-2">
                    Access your captain dashboard
                </p>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-4 mt-6">

                    {/* EMAIL */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-white/60"
                        required
                    />

                    {/* PASSWORD */}
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-white/60"
                        required
                    />

                    {/* BUTTON */}
                    <button
                        type="submit"
                        className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-zinc-200 transition active:scale-95"
                    >
                        Login as Captain
                    </button>

                </form>

                {/* SIGNUP LINK */}
                <p className="text-sm text-center mt-6 text-white/60">
                    Don’t have an account?{" "}
                    <Link
                        to="/captain-signup"
                        className="text-white font-semibold underline"
                    >
                        Sign up
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default CaptainLogin;
import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignUp = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "CAPTAIN",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Captain Signup Data:", form);
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-black via-zinc-900 to-black">

            {/* CARD */}
            <div className="w-full max-w-sm sm:max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-6 sm:p-8 text-white">

                {/* TITLE */}
                <h2 className="text-3xl font-bold text-center">
                    Captain Registration
                </h2>

                <p className="text-center text-white/60 text-sm mt-2">
                    Join as a Captain and start earning
                </p>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-4 mt-6">

                    {/* FIRST NAME */}
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-white/60"
                        required
                    />

                    {/* LAST NAME */}
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-white/60"
                        required
                    />

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

                    {/* HIDDEN ROLE */}
                    <input type="hidden" name="role" value="CAPTAIN" />

                    {/* SUBMIT BUTTON */}
                    <button
                        type="submit"
                        className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-zinc-200 transition active:scale-95"
                    >
                        Register as Captain
                    </button>
                    <div className="w-full flex items-center justify-center">
                        <h2>Already have an account ? <Link to='/captain-login' className="text-orange-400 font-bold"> Login</Link></h2>
                    </div>
                    <button
                        type="button"
                        onClick={() => setForm({ ...form, role: "CAPTAIN" })}
                        className="w-full border border-white/30 text-white py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition active:scale-95"
                    >
                        <Link to='/user-signup'>  Sign up as User</Link>
                    </button>

                </form>

            </div>
        </div>
    );
};

export default CaptainSignUp;
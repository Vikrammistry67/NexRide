import { useState } from "react"
import { Link } from "react-router-dom"

const Register = () => {

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "USER"
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const payload = {
            fullName: {
                firstName: form.firstName,
                lastName: form.lastName
            },
            email: form.email,
            password: form.password,
            role: form.role
        }

        console.log("REGISTER PAYLOAD =>", payload)
        // TODO: send to backend API
    }

    return (
        <div className="w-full min-h-screen bg-white flex items-center justify-center px-4 py-10">

            {/* Card */}
            <div className="w-full max-w-md sm:max-w-lg bg-white border border-zinc-200 shadow-2xl rounded-3xl p-6 sm:p-10">

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl font-bold text-center">
                    NexRide
                </h1>

                <p className="text-center text-zinc-500 mt-2 text-sm">
                    Create your account
                </p>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">

                    {/* First Name */}
                    <div>
                        <label className="text-sm font-medium text-zinc-700">
                            First Name
                        </label>

                        <input
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            type="text"
                            placeholder="John"
                            className="w-full mt-2 bg-zinc-100 px-4 py-4 rounded-xl outline-none border border-transparent focus:border-black transition"
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="text-sm font-medium text-zinc-700">
                            Last Name
                        </label>

                        <input
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            type="text"
                            placeholder="Doe"
                            className="w-full mt-2 bg-zinc-100 px-4 py-4 rounded-xl outline-none border border-transparent focus:border-black transition"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm font-medium text-zinc-700">
                            Email
                        </label>

                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="john@example.com"
                            className="w-full mt-2 bg-zinc-100 px-4 py-4 rounded-xl outline-none border border-transparent focus:border-black transition"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm font-medium text-zinc-700">
                            Password
                        </label>

                        <input
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            type="password"
                            placeholder="••••••••"
                            className="w-full mt-2 bg-zinc-100 px-4 py-4 rounded-xl outline-none border border-transparent focus:border-black transition"
                        />
                    </div>

                    {/* Role */}
                    <div>
                        <label className="text-sm font-medium text-zinc-700">
                            Role
                        </label>

                        <select
                            name="role"
                            value={form.role}
                            onChange={handleChange}
                            className="w-full mt-2 bg-zinc-100 px-4 py-4 rounded-xl outline-none border border-transparent focus:border-black transition"
                        >
                            <option value="USER">User</option>
                            <option value="DRIVER">Driver</option>
                            <option value="CAPTAIN">Captain</option>
                        </select>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-zinc-800 transition active:scale-[0.98]"
                    >
                        Create Account
                    </button>
                </form>

                {/* Login link */}
                <p className="text-center text-sm text-zinc-500 mt-6">
                    Already have an account?
                    <Link
                        to="/login"
                        className="text-black font-semibold ml-1 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register
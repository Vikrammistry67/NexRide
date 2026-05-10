
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="w-full min-h-screen bg-white flex items-center justify-center px-4 py-8">

            {/* Container */}
            <div className="w-full max-w-md sm:max-w-lg bg-white border border-zinc-200 rounded-3xl shadow-2xl p-6 sm:p-10">

                {/* Brand */}
                <h1 className="text-3xl sm:text-4xl font-bold text-center">
                    NexRide
                </h1>

                <p className="text-center text-zinc-500 mt-2 text-sm sm:text-base">
                    Welcome back, login to continue
                </p>

                {/* Form */}
                <form className="mt-8 flex flex-col gap-5">

                    {/* Email */}
                    <div>
                        <label className="text-sm font-medium text-zinc-700">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mt-2 bg-zinc-100 px-4 py-4 rounded-xl outline-none border border-transparent focus:border-black transition text-sm sm:text-base"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm font-medium text-zinc-700">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full mt-2 bg-zinc-100 px-4 py-4 rounded-xl outline-none border border-transparent focus:border-black transition text-sm sm:text-base"
                        />
                    </div>

                    {/* Forgot */}
                    <div className="flex justify-end">

                        <button
                            type="button"
                            className="text-sm text-zinc-500 hover:text-black transition"
                        >
                            Forgot password?
                        </button>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-zinc-800 transition active:scale-[0.98]"
                    >
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-4 my-6">

                    <div className="flex-1 h-[1px] bg-zinc-200"></div>

                    <p className="text-xs text-zinc-400">
                        OR
                    </p>

                    <div className="flex-1 h-[1px] bg-zinc-200"></div>
                </div>

                {/* Google */}
                <button className="w-full border border-zinc-300 py-4 rounded-xl font-semibold hover:bg-zinc-100 transition text-sm sm:text-base">
                    Continue with Google
                </button>

                {/* Signup */}
                <p className="text-center text-sm text-zinc-500 mt-6">

                    Don’t have an account?

                    <Link
                        to="/register"
                        className="text-black font-semibold ml-1 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login
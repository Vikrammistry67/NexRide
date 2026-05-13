import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const UserLogin = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const loginUser = {
            email: loginData.email,
            password: loginData.password
        };
        const response = await axios.post('http://localhost:3000/api/auth/users/login', loginUser);
        if (response.status == 200) {
            const data = response.data;
            localStorage.setItem('token', data.token);
            navigate('/home');
        };
        console.log('loginUser', loginUser)
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-zinc-900 px-4">

            <div className="w-full max-w-sm sm:max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-6 sm:p-8 text-white">

                {/* BRAND */}
                <h1 className="text-3xl sm:text-4xl font-bold text-center">
                    NexRide
                </h1>

                <p className="text-center text-white/60 text-sm mt-2">
                    Welcome back, sign in to continue
                </p>

                {/* FORM */}
                <form onSubmit={handleLogin} className="space-y-4 mt-6">

                    {/* EMAIL */}
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={loginData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 outline-none focus:border-white/50 placeholder-white/50 text-white"
                        />
                    </div>

                    {/* PASSWORD */}
                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={loginData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 outline-none focus:border-white/50 placeholder-white/50 text-white"
                        />
                    </div>

                    {/* LOGIN BUTTON */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition"
                    >
                        Login
                    </button>
                </form>

                {/* SIGNUP */}
                <p className="text-center text-xs sm:text-sm mt-6 text-white/60">
                    Don’t have an account?{" "}
                    <Link
                        to="/user-signup"
                        className="text-white font-semibold underline"
                    >
                        Create account
                    </Link>
                </p>

                {/* CAPTAIN LOGIN */}
                <Link to="/captain-login">
                    <button className="w-full mt-5 py-3 rounded-xl border border-white/30 text-white font-semibold hover:bg-white hover:text-black transition">
                        Login as Captain
                    </button>
                </Link>

            </div>

        </div>
    );
};

export default UserLogin;
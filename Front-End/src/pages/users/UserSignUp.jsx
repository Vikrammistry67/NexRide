import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import UserContext from "../../context/UserContext";


const UserSignUp = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "USER",
    });
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            fullName: {
                firstName: form.firstName,
                lastName: form.lastName
            },
            email: form.email,
            password: form.password
        }
        const response = await axios.post('http://localhost:3000/api/auth/users/register', newUser);
        if (response.status == 201) {
            const data = response.data;
            setUser(data.user);
            localStorage.setItem('token', data.user.token);
            alert('user created successfully');
            navigate('/user-login');
        };
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-black via-zinc-900 to-black">

            {/* CARD */}
            <div className="w-full max-w-sm sm:max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-6 sm:p-8 text-white">

                {/* TITLE */}
                <h2 className="text-3xl font-bold text-center">
                    Create Account
                </h2>

                <p className="text-center text-white/60 text-sm mt-2">
                    Join NexRide and start your journey
                </p>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-4 mt-6">

                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"


                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-white/60"
                        required
                    />

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-white/60"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-white/60"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-white/60"
                    />

                    {/* ROLE */}
                    <select
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white outline-none focus:border-white/60"
                    >
                        <option className="text-black" value="USER">USER</option>
                        <option className="text-black" value="DRIVER">DRIVER</option>
                        <option className="text-black" value="CAPTAIN">CAPTAIN</option>
                    </select>

                    {/* PRIMARY SIGNUP */}
                    <button
                        type="submit"
                        className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-zinc-200 transition active:scale-95"
                    >
                        Sign Up
                    </button>
                    <div className="w-full flex items-center justify-center">
                        <h2>Already have an account ? <Link to='/user-login' className="text-orange-400 font-bold"> Login</Link></h2>
                    </div>
                    {/* CAPTAIN SIGNUP CTA */}
                    <button
                        type="button"
                        onClick={() => setForm({ ...form, role: "CAPTAIN" })}
                        className="w-full border border-white/30 text-white py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition active:scale-95"
                    >
                        <Link to='/captain-signup'>  Sign up as Captain</Link>
                    </button>

                </form>

            </div>
        </div>
    );
};

export default UserSignUp;
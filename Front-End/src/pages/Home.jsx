const Home = () => {
    return (
        <div className="w-full min-h-screen bg-white">

            {/* ================= HERO ================= */}
            <section className="w-full px-4 sm:px-6 lg:px-14 py-10 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">

                {/* LEFT */}
                <div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                        Go anywhere with NexRide
                    </h1>

                    <p className="text-zinc-600 mt-4 text-base sm:text-lg">
                        Request a ride, hop in, and go. Safe, fast, and affordable rides anytime.
                    </p>

                    {/* BOOKING BOX (Uber style) */}
                    <div className="mt-8 bg-white border border-zinc-200 shadow-2xl rounded-3xl p-5 sm:p-7 space-y-4">

                        {/* Pickup */}
                        <input
                            type="text"
                            placeholder="Enter pickup location"
                            className="w-full bg-zinc-100 px-5 py-4 rounded-xl outline-none focus:border-black border border-transparent"
                        />

                        {/* Dropoff */}
                        <input
                            type="text"
                            placeholder="Enter destination"
                            className="w-full bg-zinc-100 px-5 py-4 rounded-xl outline-none focus:border-black border border-transparent"
                        />

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">

                            <button className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-zinc-800 transition">
                                See prices
                            </button>

                            <button className="w-full bg-zinc-200 py-4 rounded-xl font-semibold hover:bg-zinc-300 transition">
                                Schedule later
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE (REAL + WORKING) */}
                <div className="w-full flex justify-center">

                    <img
                        src="https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg"
                        alt="ride"
                        className="w-full max-w-xl h-[300px] sm:h-[450px] object-cover rounded-3xl shadow-xl"
                    />
                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section className="px-4 sm:px-6 lg:px-14 py-14">

                <h2 className="text-3xl sm:text-4xl font-bold mb-10">
                    Explore NexRide services
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {[
                        {
                            title: "Ride",
                            desc: "Go anywhere with NexRide anytime.",
                            img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
                        },
                        {
                            title: "Reserve",
                            desc: "Book rides in advance easily.",
                            img: "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg"
                        },
                        {
                            title: "Intercity",
                            desc: "Travel between cities comfortably.",
                            img: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg"
                        }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-zinc-100 rounded-3xl overflow-hidden hover:scale-[1.02] transition shadow-sm"
                        >

                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-40 object-cover"
                            />

                            <div className="p-6">

                                <h3 className="text-2xl font-bold">
                                    {item.title}
                                </h3>

                                <p className="text-zinc-600 mt-2 text-sm">
                                    {item.desc}
                                </p>

                                <button className="mt-4 font-semibold text-sm">
                                    Details →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= BOTTOM CTA ================= */}
            <section className="px-4 sm:px-6 lg:px-14 py-16 bg-black text-white">

                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    <div>

                        <h2 className="text-4xl sm:text-5xl font-bold">
                            Ride smarter with NexRide
                        </h2>

                        <p className="text-zinc-400 mt-4">
                            Affordable rides, quick pickups, and safe travel anytime.
                        </p>

                        <button className="mt-6 bg-white text-black px-6 py-4 rounded-xl font-semibold hover:bg-zinc-200 transition">
                            Get started
                        </button>
                    </div>

                    <img
                        src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                        className="rounded-3xl w-full h-[300px] sm:h-[400px] object-cover"
                        alt="cta"
                    />
                </div>
            </section>
        </div>
    )
}

export default Home
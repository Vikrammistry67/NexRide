const Footer = () => {
    return (
        <footer className="w-full bg-black text-white px-5 sm:px-8 lg:px-14 py-12 sm:py-16">

            {/* Top */}
            <div className="flex flex-col gap-3">

                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight cursor-pointer">
                    Uber
                </h1>

                <p className="text-zinc-400 text-sm sm:text-base hover:text-white transition cursor-pointer w-fit">
                    Visit Help Center
                </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mt-12 sm:mt-16">

                {/* Company */}
                <div>

                    <h2 className="text-lg sm:text-xl font-semibold mb-5">
                        Company
                    </h2>

                    <div className="flex flex-col gap-4 text-zinc-400 text-sm sm:text-base">

                        <p className="hover:text-white transition cursor-pointer">
                            About us
                        </p>

                        <p className="hover:text-white transition cursor-pointer">
                            Our offerings
                        </p>

                        <p className="hover:text-white transition cursor-pointer">
                            Newsroom
                        </p>

                        <p className="hover:text-white transition cursor-pointer">
                            Investors
                        </p>

                        <p className="hover:text-white transition cursor-pointer">
                            Blog
                        </p>

                        <p className="hover:text-white transition cursor-pointer">
                            Careers
                        </p>
                    </div>
                </div>

                {/* Products */}
                <div>

                    <h2 className="text-lg sm:text-xl font-semibold mb-5">
                        Products
                    </h2>

                    <div className="flex flex-col gap-4 text-zinc-400 text-sm sm:text-base">

                        <p className="hover:text-white transition cursor-pointer">
                            Ride
                        </p>

                        <p className="hover:text-white transition cursor-pointer">
                            Drive
                        </p>

                        <p className="hover:text-white transition cursor-pointer">
                            Eat
                        </p>

                        <p className="hover:text-white transition cursor-pointer">
                            Uber for Business
                        </p>

                        <p className="hover:text-white transition cursor-pointer">
                            Freight
                        </p>
                    </div>
                </div>

                {/* Global Citizenship */}
                <div>

                    <h2 className="text-lg sm:text-xl font-semibold mb-5">
                        Global citizenship
                    </h2>

                    <div className="flex flex-col gap-4 text-zinc-400 text-sm sm:text-base">

                        <p className="hover:text-white transition cursor-pointer">
                            Safety
                        </p>

                        <p className="hover:text-white transition cursor-pointer">
                            Sustainability
                        </p>

                        <p className="hover:text-white transition cursor-pointer">
                            Travel
                        </p>

                        <p className="hover:text-white transition cursor-pointer">
                            Reserve
                        </p>

                        <p className="hover:text-white transition cursor-pointer">
                            Airports
                        </p>
                    </div>
                </div>

                {/* Download */}
                <div>

                    <h2 className="text-lg sm:text-xl font-semibold mb-5">
                        Download
                    </h2>

                    <div className="flex flex-col gap-4 text-zinc-400 text-sm sm:text-base">

                        <p className="hover:text-white transition cursor-pointer">
                            Android App
                        </p>

                        <p className="hover:text-white transition cursor-pointer">
                            iOS App
                        </p>

                        <p className="hover:text-white transition cursor-pointer">
                            Driver App
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-zinc-800 mt-12 sm:mt-16 pt-6 sm:pt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                {/* Copyright */}
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                    © 2026 Uber Technologies Inc. All rights reserved.
                </p>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-zinc-500 text-xs sm:text-sm">

                    <button className="hover:text-white transition">
                        Privacy
                    </button>

                    <button className="hover:text-white transition">
                        Accessibility
                    </button>

                    <button className="hover:text-white transition">
                        Terms
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
export default function SpecialOffers() {
    return (
        <div className="w-screen px-6 py-16">
            {/* Heading */}
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-bold">Special Offers</h2>
                <a
                    href="#"
                    className="text-emerald-600 font-semibold hover:underline"
                >
                    Explore All →
                </a>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Offer Card */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src="/assets/destinations/badrinath.webp"
                        alt="Badrinath Dham"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Badrinath Dham
                            </h3>
                            <p className="text-gray-700 font-bold text-lg mb-1">
                                ₹ 15,999{" "}
                                <span className="text-sm font-normal text-gray-500">
                                    Per Person
                                </span>
                            </p>
                            <p className="text-sm text-gray-600 mb-4">
                                5 Nights / 6 Days
                            </p>
                        </div>
                        <button className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition">
                            Book Now
                        </button>
                    </div>
                </div>

                {/* Offer Card */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src="/assets/destinations/dwarka.webp"
                        alt="Dwarka Dham"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Dwarka Dham
                            </h3>
                            <p className="text-gray-700 font-bold text-lg mb-1">
                                ₹ 13,499{" "}
                                <span className="text-sm font-normal text-gray-500">
                                    Per Person
                                </span>
                            </p>
                            <p className="text-sm text-gray-600 mb-4">
                                4 Nights / 5 Days
                            </p>
                        </div>
                        <button className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition">
                            Book Now
                        </button>
                    </div>
                </div>

                {/* Offer Card */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src="/assets/destinations/puri.jpg"
                        alt="Puri Jagannath Temple"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Puri, Jagannath Temple
                            </h3>
                            <p className="text-gray-700 font-bold text-lg mb-1">
                                ₹ 12,999{" "}
                                <span className="text-sm font-normal text-gray-500">
                                    Per Person
                                </span>
                            </p>
                            <p className="text-sm text-gray-600 mb-4">
                                3 Nights / 4 Days
                            </p>
                        </div>
                        <button className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition">
                            Book Now
                        </button>
                    </div>
                </div>

                {/* Offer Card */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src="/assets/destinations/rameswaram.jpg"
                        alt="Rameswaram Dham"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Rameswaram Dham
                            </h3>
                            <p className="text-gray-700 font-bold text-lg mb-1">
                                ₹ 14,499{" "}
                                <span className="text-sm font-normal text-gray-500">
                                    Per Person
                                </span>
                            </p>
                            <p className="text-sm text-gray-600 mb-4">
                                4 Nights / 5 Days
                            </p>
                        </div>
                        <button className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default function Destinations() {
    return (
        <div className="w-screen px-6 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Destinations</h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Destination Card */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src="/assets/destinations/badrinath.webp" alt="Badrinath Dham" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Badrinath Dham</h3>
                        <p className="text-gray-600 text-sm mb-4 text-justify line-clamp-5">Badarinath is one of the holy shrines for Vaishnavites among the 108 divya desams incarnation of Lord Vishnu. Badrinath town is also the part of Panch Badri temples including Yog Dhyan Badri, Bhavishya Badri, Adi Badri and Vriddha Badri, along with Badrinath temple.</p>
                        <button className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition">View Details</button>
                    </div>
                </div>

                {/* Destination Card */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src="/assets/destinations/dwarka.webp" alt="Dwarka Dham" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Dwarka Dham</h3>
                        <p className="text-gray-600 text-sm mb-4 text-justify line-clamp-5">Dwarka Dham is a sacred Hindu pilgrimage town in the state of Gujarat, India, dedicated to Lord Krishna. The name "Dwarka" means "gateway to heaven," and it is considered one of the four Char Dhams (cardinal pilgrimage sites) that were established by the 8th-century philosopher Adi Shankara.</p>
                        <button className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition">View Details</button>
                    </div>
                </div>

                {/* Destination Card */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src="/assets/destinations/puri.jpg" alt="Puri, Jagannath Temple" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Puri, Jagannath Temple</h3>
                        <p className="text-gray-600 text-sm mb-4 text-justify line-clamp-5">The Puri Jagannath Temple in Odisha is a highly revered Hindu temple dedicated to Lord Jagannath, a form of Lord Vishnu. It is a cornerstone of the Char Dham pilgrimage and is celebrated for its distinctive spiritual traditions and the annual Rath Yatra festival.</p>
                        <button className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition">View Details</button>
                    </div>
                </div>

                {/* Destination Card */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src="/assets/destinations/rameswaram.jpg" alt="Rameswaram Dham" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Rameswaram Dham</h3>
                        <p className="text-gray-600 text-sm mb-4 text-justify line-clamp-5">Rameswaram is a vital pilgrimage site and one of the Char Dham circuits, honoring both Shaivite and Vaishnavite traditions. The Ramanathaswamy Temple houses one of the 12 Jyotirlingas, where Lord Rama is said to have worshipped Shiva. With its stunning architecture, longest temple corridor, and 22 sacred water wells, this destination offers a powerful spiritual experience. Begin your journey to salvation here, at the "Varanasi of the South"</p>
                        <button className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition">View Details</button>
                    </div>
                </div>
            </div>

            {/* Explore All Button */}
            <div className="flex justify-center mt-10">
                <button className="bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition">
                    Explore All Destinations
                </button>
            </div>
        </div>
    );
}
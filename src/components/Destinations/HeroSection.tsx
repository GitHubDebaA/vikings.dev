export default function DestinationHeroSection() {
    return (
        <div className="relative w-screen h-[100vh] md:h-[100vh]">
            {/* Background Image */}
            <img
                src="/assets/gallery/img4.jpeg"
                alt="Travel Destinations"
                className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                    Explore Our Destinations
                </h1>
                <p className="mt-4 text-lg md:text-2xl text-white drop-shadow-md max-w-xl">
                    Discover your next adventure around the world
                </p>
                <button className="mt-6 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">
                    Explore Now
                </button>
            </div>
        </div>
    );
}
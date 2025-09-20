import Link from "next/link";

export default function DestinationHeroSection() {
    return (
        <div className="relative w-screen h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/gallery/img4.jpeg')" }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center gap-10 text-white p-10 text-center">
                <h1 className="text-5xl font-bold z-10">Explore the World with Vikings</h1>
                <p className="text-sm leading-relaxed">
                    Discover your next adventure around the world
                </p>

                {/* Explore All Button */}
                <div className="flex justify-center mt-10">
                    <Link href="/destinations" className="bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition">
                        Explore All Destinations
                    </Link>
                </div>
            </div>
        </div>
    );
}
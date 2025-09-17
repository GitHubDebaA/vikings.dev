import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="bg-emerald-600 w-screen text-white py-16 flex flex-col items-center justify-center text-center px-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready for your dream trip?
            </h2>
            <p className="text-lg mb-8 max-w-xl">
                Let’s plan it together! Experience comfortable travel, guided tours, and unforgettable moments with Vikings.
            </p>
            <Link
                href="/contact"
                className="bg-white text-emerald-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
            >
                Contact Us
            </Link>
        </section>
    );
}
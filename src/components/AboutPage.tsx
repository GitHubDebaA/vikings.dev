import Image from "next/image";

export default function AboutPage() {
    return (
        <section className="w-screen mx-auto px-6 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg text-gray-600">
                    We believe travel is not just about visiting places, it’s about creating memories that last a lifetime.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* About text */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        At <span className="font-semibold">Vikings Travel</span>, we are passionate explorers, storytellers,
                        and planners. Our mission is to craft personalized journeys that connect you with cultures,
                        adventures, and unforgettable experiences across the globe.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>✔ Personalized travel planning tailored to your needs</li>
                        <li>✔ Expert guides and local experiences</li>
                        <li>✔ 24/7 support during your journey</li>
                        <li>✔ Exclusive deals and curated destinations</li>
                    </ul>
                </div>

                {/* Image */}
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src="/assets/cover/cover1.jpeg" // Place demo image in public/images/about.jpg
                        alt="About Us"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Call to action */}
            <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold mb-4">Join us in creating your next story</h2>
                <a
                    href="/contact"
                    className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition"
                >
                    Contact Us
                </a>
            </div>
        </section>
    );
}
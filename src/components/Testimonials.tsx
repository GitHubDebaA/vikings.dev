// components/Testimonials.tsx
import { FaStar, FaUserCircle } from "react-icons/fa";

const testimonials = [
    {
        name: "Rahul Mehta",
        review: "The trip was perfectly organized and our guide was amazing! Highly recommend Vikings.",
        rating: 5,
    },
    {
        name: "Priya Sharma",
        review: "Affordable packages and great support throughout the journey. Loved the experience!",
        rating: 4,
    },
    {
        name: "Arjun Das",
        review: "Best travel experience ever. The team was professional and very helpful.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-16 w-screen">
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                    What Our Customers Say
                </h2>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
                        >
                            {/* User Icon */}
                            <FaUserCircle className="text-6xl text-gray-400 mb-4" />

                            {/* Name */}
                            <h3 className="text-lg font-semibold text-gray-700">{t.name}</h3>

                            {/* Rating */}
                            <div className="flex justify-center gap-1 my-2">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <FaStar
                                        key={i}
                                        className={`${i < t.rating ? "text-yellow-400" : "text-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Review */}
                            <p className="text-gray-600 text-sm mt-2">{t.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
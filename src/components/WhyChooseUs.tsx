import { FaUserTie, FaMoneyBillWave, FaHeadset } from "react-icons/fa";

export default function WhyChooseUs() {
    return (
        <div className="w-screen px-6 py-16">
            {/* Heading */}
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us</h2>

            {/* Short Intro / Mission */}
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                At <span className="font-[cursive]">Vikings</span>, our mission is to make your
                spiritual journeys stress-free and memorable. With experienced guides,
                affordable packages, and complete travel support, we ensure your
                <span className="font-[cursive]"> Char Dham Yatra </span> is a journey of faith,
                comfort, and trust.
            </p>

            {/* USP Icons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Trusted Guides */}
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                    <FaUserTie className="text-emerald-600 text-4xl mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Trusted Guides</h3>
                    <p className="text-sm text-gray-600">
                        Experienced local guides to ensure safe and meaningful travel.
                    </p>
                </div>

                {/* Affordable Packages */}
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                    <FaMoneyBillWave className="text-emerald-600 text-4xl mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Affordable Packages</h3>
                    <p className="text-sm text-gray-600">
                        Specially curated packages that suit every budget.
                    </p>
                </div>

                {/* 24/7 Support */}
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                    <FaHeadset className="text-emerald-600 text-4xl mb-4" />
                    <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                    <p className="text-sm text-gray-600">
                        Round-the-clock customer service to support your journey.
                    </p>
                </div>
            </div>
        </div>
    );
}
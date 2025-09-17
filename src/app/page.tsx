import Destinations from "@/components/Destinations";
import SpecialOffers from "@/components/SpecialOffers";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import CallToAction from "@/components/CallToAction";

export default function HomePage() {
	return (
		<section>
			{/* Hero Section with background image */}
			<div className="relative w-screen h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/cover/cover1.jpeg')" }}>
				{/* Overlay */}
				<div className="absolute inset-0 bg-black/30"></div>

				{/* Content */}
				<div className="relative flex flex-col items-center justify-center gap-10 text-white p-10 text-center">
					<h1 className="text-5xl font-bold z-10">Explore the World with Vikings</h1>
					<p className="text-sm leading-relaxed">
						At <span className="font-[cursive]">Vikings</span>, we specialize
						in affordable <span className="font-[cursive]">Char Dham Yatra</span>{" "}
						packages, providing comfortable travel, guided experiences, and
						complete support to make your spiritual journey memorable.
					</p>

					<button className="bottom-10 bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition z-10">Explore Destination</button>
				</div>
			</div>

			{/* Featured Destination Section */}
			<Destinations />

			{/* Special Offers Section */}
			<SpecialOffers />

			{/* About Agency - Why Choose Us Section */}
			<WhyChooseUs />

			{/* Testimonials Section */}
			<Testimonials />

			{/* Gallery(Travel Memories) Section */}
			<Gallery />

			{/* Ready for your dream trip? Let's make it happen together! */}
			<CallToAction />
		</section>
	);
}
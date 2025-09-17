import Destinations from "@/components/Destinations";
import DestinationHeroSection from "@/components/Destinations/HeroSection";
import CallToAction from "@/components/CallToAction";

export default function DestinationsPage() {
    return (
        <section>
            {/* Hero Section */}
            <DestinationHeroSection />

            {/* Popular Destinations */}
            <Destinations />

            <CallToAction />
        </section>
    );
}
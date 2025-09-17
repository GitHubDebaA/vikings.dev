// components/Gallery.tsx
import { FaCamera } from "react-icons/fa";

// List of local images in public/assets/gallery
const galleryImages = [
    "/assets/gallery/img1.webp",
    "/assets/gallery/img2.jpeg",
    "/assets/gallery/img3.jpeg",
    "/assets/gallery/img4.jpeg",
    "/assets/gallery/img5.jpeg",
    "/assets/gallery/img6.jpeg",
    "/assets/gallery/img7.jpeg",
    "/assets/destinations/badrinath.webp",
    "/assets/destinations/dwarka.webp",
    "/assets/destinations/puri.jpg",
    "/assets/destinations/rameswaram.jpg",
];

export default function Gallery() {
    return (
        <section className="py-16 w-screen">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                    Travel Memories
                </h2>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {galleryImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
                        >
                            {src ? (
                                <img
                                    src={src}
                                    alt={`Gallery ${index + 1}`}
                                    className="w-full object-cover"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-48 bg-gray-100">
                                    <FaCamera className="text-5xl text-gray-400" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
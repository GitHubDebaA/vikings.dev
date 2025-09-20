"use client";
import { useRef, useState, useEffect, ReactNode } from "react";

interface CarouselProps {
    children: ReactNode;
    className?: string;
}

export default function Carousel({ children, className = "" }: CarouselProps) {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [showArrows, setShowArrows] = useState(false);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

    const handleScroll = () => {
        setShowArrows(true);
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => setShowArrows(false), 1500);
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        carousel.addEventListener("scroll", handleScroll, { passive: true });
        return () => carousel.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollByCard = (direction: "left" | "right") => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        // Get the width of the first card including margin/gap
        const firstCard = carousel.firstElementChild as HTMLElement;
        if (!firstCard) return;

        const cardWidth = firstCard.offsetWidth + parseInt(getComputedStyle(firstCard).marginRight);
        console.log('card width' + cardWidth);

        carousel.scrollBy({
            left: direction === "right" ? cardWidth : -cardWidth,
            behavior: "smooth",
        });

        setShowArrows(true);
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => setShowArrows(false), 1500);
    };

    return (
        <div className={`relative ${className}`}>
            <div
                ref={carouselRef}
                className="flex overflow-x-auto scroll-smooth gap-4 py-2 scrollbar-hide"
            >
                {children}
            </div>

            {showArrows && (
                <>
                    {/* Left Arrow */}
                    <button
                        onClick={() => scrollByCard("left")}
                        className="absolute top-1/2 left-2 -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scrollByCard("right")}
                        className="absolute top-1/2 right-2 -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </>
            )}
        </div>
    );
}
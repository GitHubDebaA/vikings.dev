"use client";
import React, { useRef, useState, useEffect, type ReactNode } from "react";

interface CarouselProps {
    children: ReactNode;
    className?: string;
}

export default function Carousel({ children, className = "" }: CarouselProps) {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [showArrows, setShowArrows] = useState(false);
    const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = React.Children.toArray(children);

    // Show arrows while scrolling
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

    // Get indices of fully visible items in viewport
    const getFullyVisibleIndices = (): number[] => {
        const carousel = carouselRef.current;
        if (!carousel) return [];

        const children = Array.from(carousel.children) as HTMLElement[];
        const visibleIndices: number[] = [];
        const scrollLeft = carousel.scrollLeft;
        const scrollRight = scrollLeft + carousel.clientWidth;

        children.forEach((child, index) => {
            const childLeft = child.offsetLeft;
            const childRight = child.offsetLeft + child.offsetWidth;

            if (childLeft >= scrollLeft && childRight <= scrollRight) {
                visibleIndices.push(index);
            }
        });

        return visibleIndices;
    };

    // Scroll safely to a specific index
    const scrollToIndex = (index: number) => {
        const carousel = carouselRef.current;
        if (!carousel || !carousel.children.length) return;

        const target = carousel.children[index] as HTMLElement;
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
        const targetScrollLeft = Math.min(target.offsetLeft, maxScrollLeft);

        carousel.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
        setCurrentIndex(index);
    };

    // Scroll to next fully visible item
    const scrollNext = () => {
        const visible = getFullyVisibleIndices();
        const lastVisible = visible[visible.length - 1] ?? 0;
        const nextIndex = Math.min(lastVisible + 1, items.length - 1);
        scrollToIndex(nextIndex);
    };

    // Scroll to previous fully visible item
    const scrollPrev = () => {
        const visible = getFullyVisibleIndices();
        const firstVisible = visible[0] ?? 0;
        const prevIndex = Math.max(firstVisible - 1, 0);
        scrollToIndex(prevIndex);
    };

    return (
        <div
            className={`relative group ${className}`}
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => setShowArrows(false)}
        >
            <div
                ref={carouselRef}
                className="flex overflow-x-auto scroll-smooth gap-4 py-2 scrollbar-hide"
            >
                {items}
            </div>

            {showArrows && (
                <>
                    {/* Left Arrow */}
                    <button
                        onClick={scrollPrev}
                        disabled={currentIndex === 0}
                        className="absolute top-1/2 left-2 -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition disabled:opacity-50"
                    >
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={scrollNext}
                        disabled={currentIndex === items.length - 1}
                        className="absolute top-1/2 right-2 -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 shadow-lg rounded-full w-10 h-10 flex items-center justify-center transition disabled:opacity-50"
                    >
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </>
            )}
        </div>
    );
}
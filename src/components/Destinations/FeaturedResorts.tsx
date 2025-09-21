"use client"

import Link from "next/link";
import { useEffect, useState, } from "react";
import { Destination, ApiResponse } from "@/types";
import Carousel from "../utility/Carousel";

export default function FeaturedResorts() {
    const [resorts, setResorts] = useState<Destination[]>([]);

    useEffect(() => {
        async function FetchResorts() {
            try {
                const res = await fetch("/api/destinations");
                const json: ApiResponse<Destination[]> = await res.json();
                if (json.success) {
                    const resorts = json.data?.filter(item => {
                        return item.Featured && item.Type === "Resort";
                    });
                    setResorts(resorts.slice(0, 4));
                } else {
                    console.error("fetch destinations API error:", json.error);
                }
            } catch (err) {
                console.error("Failed to fetch destinations:", err);
            } finally {
            }
        }
        FetchResorts();
    }, []);

    return (
        <div className="w-screen px-6 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Resorts</h2>

            <div className="relative w-full">
                <Carousel className="my-6">
                    {resorts.map(d => (
                        <div
                            key={d.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden min-w-[250px] w-90 flex-shrink-0"
                        >
                            <img
                                src={d.Destination_Images?.[0]?.id ? `/api/files/${d.Destination_Images[0].id}` : "/assets/destinations/placeholder.png"}
                                alt={d.Name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{d.Name}</h3>
                                <p className="text-gray-600 text-sm mb-4 text-justify line-clamp-5">{d.Destination_Description}</p>
                                <button className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition">View Details</button>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* Explore All Button */}
            <div className="flex justify-center mt-10">
                <Link href="/destinations" className="bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition">
                    Explore All Resorts
                </Link>
            </div>
        </div>
    );
}
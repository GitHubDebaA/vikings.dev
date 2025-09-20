import { NextResponse } from "next/server";
import { __fetch_destinations__ } from "@/lib/zoho";

// Simple in-memory cache (resets on server restart)
const destinationCache = new Map();

export async function GET() {
    try {
        // 🔹 Step 1: Check cache
        if (destinationCache.has("data")) {
            const cached = destinationCache.get("data");

            // Optional: respect TTL
            if (Date.now() - cached.timestamp < 10 * 60 * 1000) { // 10 min
                console.log('"Destinations" -using cached data');
                return NextResponse.json({ success: true, data: cached.data });
            }
        }

        // 🔹 Step 2: Fetch from Zoho
        const data = await __fetch_destinations__();

        // 🔹 Step 3: Save in cache
        destinationCache.set("data", {
            data,
            timestamp: Date.now(),
        });

        console.log('"Destinations" -fetched new data');
        return NextResponse.json({ success: true, data });
    } catch (err) {
        console.log('server error', err);
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        );
    }
}
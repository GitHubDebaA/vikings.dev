import { NextResponse } from "next/server";
import { __get_access_token__, __fetch_destinations__ } from "@/lib/zoho";

export async function GET() {
    try {
        // test with Destinations module
        const data = await __fetch_destinations__();
        return NextResponse.json({ success: true, data });
    } catch (err) {
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 500 }
        );
    }
}
import { NextResponse } from "next/server";
import { __get_access_token__ } from "@/lib/zoho";

const { ZOHO_API_BASE } = process.env;

// Simple in-memory cache (resets on server restart)
const imageCache = new Map();

export async function GET(req, context) {
    const { fileId } = await context.params;

    // 🔹 Step 1: Check cache first
    if (imageCache.has(fileId)) {
        const cached = imageCache.get(fileId);
        return new Response(cached.buffer, {
            headers: {
                "Content-Type": cached.contentType,
                "Cache-Control": "public, max-age=86400", // 1 day
            },
        });
    }

    // 🔹 Step 2: Fetch from Zoho
    const token = await __get_access_token__();
    const res = await fetch(`${ZOHO_API_BASE}/Attachments/${fileId}`, {
        headers: { Authorization: `Zoho-oauthtoken ${token}` },
    });

    if (!res.ok) {
        const errorData = await res.json();
        return NextResponse.json(
            { success: false, error: errorData.message },
            { status: 500 }
        );
    }

    const arrayBuffer = await res.arrayBuffer();
    const contentType = res.headers.get("content-type") || "image/jpeg";

    // 🔹 Step 3: Save in cache
    imageCache.set(fileId, {
        buffer: arrayBuffer,
        contentType,
    });

    return new Response(arrayBuffer, {
        headers: {
            "Content-Type": contentType,
            "Cache-Control": "public, max-age=86400", // 1 day
        },
    });
}
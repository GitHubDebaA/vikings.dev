import axios from "axios";

const {
    ZOHO_CLIENT_ID,
    ZOHO_CLIENT_SECRET,
    ZOHO_REFRESH_TOKEN,
    ZOHO_TOKEN_URL,
    ZOHO_API_BASE,
} = process.env;

// cache vars (lives as long as your Node server process)
let cachedToken = null;
let tokenExpiry = 0; // timestamp in ms

export async function __get_access_token__() {
    const now = Date.now();

    // ✅ reuse token if valid
    if (cachedToken && now < tokenExpiry) {
        console.log('"Token" -using cached token');
        return cachedToken;
    }

    const response = await axios.post(
        ZOHO_TOKEN_URL,
        null,
        {
            params: {
                refresh_token: ZOHO_REFRESH_TOKEN,
                client_id: ZOHO_CLIENT_ID,
                client_secret: ZOHO_CLIENT_SECRET,
                grant_type: "refresh_token",
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );

    const { access_token, expires_in } = response.data;

    // cache it, refresh a bit before expiry
    cachedToken = access_token;
    tokenExpiry = now + (expires_in * 1000) - 60_000; // refresh 1 min early

    console.log('"Token" -fetched new token');
    return cachedToken;
}

export async function __fetch_destinations__() {
    const token = await __get_access_token__();

    const response = await axios.get(`${ZOHO_API_BASE}/Destinations?per_page=200&fields=Name,Destination_Description,Destination_Image_URL,Destination_Images,Type,Featured`, {
        headers: { Authorization: `Zoho-oauthtoken ${token}` },
    });

    return response.data.data;
}
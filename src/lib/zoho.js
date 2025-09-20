import axios from "axios";

const {
    ZOHO_CLIENT_ID,
    ZOHO_CLIENT_SECRET,
    ZOHO_REFRESH_TOKEN,
    ZOHO_TOKEN_URL,
    ZOHO_API_BASE,
} = process.env;

export async function __get_access_token__() {
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

    return response.data.access_token;
}

export async function __fetch_destinations__() {
    const token = await __get_access_token__();

    const response = await axios.get(`${ZOHO_API_BASE}/Destinations?per_page=200&fields=Name,Destination_Description,Destination_Image_URL,Destination_Images,Type,Featured`, {
        headers: { Authorization: `Zoho-oauthtoken ${token}` },
    });

    return response.data.data;
}
import { cookies } from "next/headers";


export const userLoader = async () => {
    const authToken = (await cookies()).get("access_token")?.value;
    console.log("authToken", authToken);

    if (!authToken) return { ok: false, data: null, error: null };
    try {
    } catch (error) {
        console.log(error);
        return { ok: false, data: null, error: error };
    }

}
import axios from "axios";

export const getBrands = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}/api/brands/lists`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
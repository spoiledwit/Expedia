import axios from "axios";

export const sendApplication = async (data: any) => {
    try {
        const response = await axios.post("/api/newzealand", data);
        return response.data;
    } catch (error) {
        return error;
    }
};
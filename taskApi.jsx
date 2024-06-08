import Axios from "axios";

const API_URL = "http://localhost:3010"
const baseURL = `${API_URL}/api/task`;

const taskApi = {
    getTasks: async () => {
        try {
            console.log("url: ", `${baseURL}/get`);
            const response = await Axios.get(`${baseURL}/get`);
            return response.data;
        } catch (error) {
            console.error("taskApi.getTasks error: ", error);
            throw new Error("Failed to get tasks. Please try again later.");
        }
    }
};

export default taskApi;
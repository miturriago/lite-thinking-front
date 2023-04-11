import axios from 'axios';


const loginService = async (data) => {

const BASE_URL = "https://gtu0zqxfpf.execute-api.us-east-1.amazonaws.com/dev/"


    try {
        const response = await axios.post(`${BASE_URL}user/login`, data)
        return response.data
    } catch (error) {
        return error
    }
}

export default loginService;
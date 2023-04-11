import axios from 'axios';


const BASE_URL = "https://xmejum9zi5.execute-api.us-east-1.amazonaws.com/dev/"
const BASE_URL_PDF = "https://59yj3vlb78.execute-api.us-east-1.amazonaws.com/dev/"



const getInventory = async (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
    };
    try {
        const response = await axios.post(`${BASE_URL}getInventories`, data, { headers })
        return response.data
    } catch (error) {
        return error
    }
}

const createOrUpdateInventoryService = async (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
    };
    try {
        const response = await axios.post(`${BASE_URL}inventory`, data, { headers })
        return response.data
    } catch (error) {
        return error
    }
}

const deleteInventoryService = async (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
    };
    try {
        const response = await axios.post(`${BASE_URL}deleteInventory`, data, { headers })
        return response.data
    } catch (error) {
        return error
    }
}

const pdfService = async (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
    };
    try {
        const response = await axios.post(`${BASE_URL_PDF}generatePDF`, data, { headers })
        return response.data
    } catch (error) {
        return error
    }
}

export default { getInventory, createOrUpdateInventoryService, deleteInventoryService, pdfService };

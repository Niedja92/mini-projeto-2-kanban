import axios from "axios"

const baseURL = 'https://arnia-kanban.vercel.app'

export const apiService = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb'
    }
})
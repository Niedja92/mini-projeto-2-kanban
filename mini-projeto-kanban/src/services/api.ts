import axios, { AxiosInstance, isAxiosError } from "axios"

class ApiService {
    private baseURL = 'https://arnia-kanban.vercel.app'
    private service: AxiosInstance

    constructor() {
        this.service = axios.create({
            baseURL: this.baseURL,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb'
            }
        })
    }

    public async request<T = unknown>(props: HttpClientRequest): Promise<HttpClientResponse<T>> {
        let response

        try {
            response = await this.service.request<T>(props)
        } catch (err) {
            if (isAxiosError(err)) {
                response = {
                    status: err.response?.status ?? 500,
                    data: err.message ?? 'erro'
                }
            }

            else {
                response = {
                    status: 500,
                    data: 'server error'
                }
            }
        }

        return response as HttpClientResponse<T>;
    }
}


export const apiService = new ApiService()
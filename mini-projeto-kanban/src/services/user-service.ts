import { apiService } from "./api";

export async function postLogin({ email, password }: LoginParams): Promise<LoginResponse> {
    const response = await apiService.request<LoginResponse>({
        url: '/api/user/login',
        method: 'POST',
        data: {
            email,
            password
        }
    })

    switch (response.status) {
        case 200: return response.data
        case 401:
        case 404: throw new Error('Usuário ou senha incorreto')
        default: throw new Error('Ocorreu um erro em nosso servidores, tente novamente mais tarde')
    }
}

export async function postRegister() {

}

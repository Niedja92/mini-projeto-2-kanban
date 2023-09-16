import { apiService } from "./api";

export async function getAllCards(): Promise<Card[]> {
    const response = await apiService.request<Card[]>({
        url: '/api/card',
        method: 'GET',
        headers: {
            'Authorization': localStorage.getItem('TOKEN')
        }
    })

    switch (response.status) {
        case 200: return response.data
        case 401: throw new Error('Token inválido, faça o login novamente')
        default: throw new Error('Ocorreu um erro em nossos servidores, tente novamente mais tarde')
    }
}

export async function updateCardService(card: Card): Promise<Card[]> {
    const response = await apiService.request<Card[]>({
        url: `/api/card/${card._id}`,
        method: 'PUT',
        data: {
            title: card.title,
            content: card.content,
            column: card.column,
        },
        headers: {
            'Authorization': localStorage.getItem('TOKEN')
        }
    })

    switch (response.status) {
        case 200: return response.data
        case 401: throw new Error('Token inválido, faça o login novamente')
        default: throw new Error('Ocorreu um erro em nossos servidores, tente novamente mais tarde')
    }

}
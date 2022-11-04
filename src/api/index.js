import axios from 'axios'

const api = axios.create(
    {
        baseURL:'http://10.10.32.8:8087'
    }
)
export const listarCategorias = async ()=>{
    let response = await api.get('categories')
    return response.data
}

export const listarFilmes = async ()=>{
    let response = await api.get('filmes')
    return response.data
}

export const listarReservas = async ()=>{
    let response = await api.get('reservas')
    return response.data
}

export const listarSessoes = async ()=>{
    let response = await api.get('sessoes')
    return response.data
}
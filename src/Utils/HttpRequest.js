import axios from 'axios'

export const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
})

export const get = async (path, params = {}) => {
    const response = await request.get(path, params)

    return response.data
}

export const post = async (path, data) => {
    const response = await request.post(path, data)

    return response
}

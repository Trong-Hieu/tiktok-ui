import * as request from '~/Utils/HttpRequest'

export const login = async (data) => {
    // try {
    const res = await request.post('auth/login', data)

    return res.data
    // } catch (error) {
    //     console.log(error + ': sai email hoac mat khau')
    // }
}

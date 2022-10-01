import * as request from '~/Utils/HttpRequest'

export const getSearch = async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        })

        return res.data
    } catch (error) {
        console.log(error)
    }
}

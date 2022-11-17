import * as request from '~/Utils/HttpRequest'

export const getVideoList = async (type, page) => {
    const res = await request.get('/videos', {
        params: {
            type,
            page,
        },
    })

    return res.data
}

import { useState } from 'react'
import * as request from '~/Utils/HttpRequest'

// const authKey =
//     'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aWt0b2suZnVsbHN0YWNrLmVkdS52blwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY2NTA0MTU4NSwiZXhwIjoxNjY3NjMzNTg1LCJuYmYiOjE2NjUwNDE1ODUsImp0aSI6IjV4SlMwQjZoTWYzU0ZQSkciLCJzdWIiOjM0ODksInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.lmaoSqdIIkldOMcxluiFd2UcJJbHMCx8LbFQnaFf7Tg'

// const [currentUser, setCurrentUser] = useState(() => {
//     let user = JSON.parse(localStorage.getItem('currentUser'))
//     if (user != null) return user
//     else return null
// })

let currentUser = JSON.parse(localStorage.getItem('currentUser'))

export const getSuggetedAccounts = async (page, perPage) => {
    try {
        const res = await request.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        })

        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getFollowingAccounts = async (page = 1) => {
    if (currentUser) {
        const AuthStr = `Bearer ${currentUser.meta.token}`
        console.log(AuthStr)
        try {
            const res = await request.get(
                '/me/followings',
                {
                    params: {
                        page,
                    },
                    headers: { Authorization: AuthStr },
                    contentType: 'application/json',
                },
                // { headers: { Authorization: AuthStr } },
            )

            return res.data
        } catch (error) {
            console.log(error)
        }
    }
}

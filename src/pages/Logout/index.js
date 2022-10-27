import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Logout() {
    localStorage.removeItem('currentUser')
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/')
    })
    return <></>
}

export default Logout

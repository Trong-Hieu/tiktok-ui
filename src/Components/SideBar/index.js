import classNames from 'classnames/bind'
import { useState } from 'react'

import styles from './Sidebar.module.scss'
import NarSide from './NarSide'
import SuggestedAccounts from './SuggestedAccounts'
import FollowingAccounts from './FollowingAccounts'

const cs = classNames.bind(styles)

function SideBar({ onClick }) {
    const [currentUser, setCurrentUser] = useState(() => {
        let user = JSON.parse(localStorage.getItem('currentUser'))
        if (user != null) return user
        else return null
    })

    const [isMouseOver, setIsMouseOver] = useState(false)

    return (
        <aside
            className={cs('side-bar')}
            style={{ overflow: isMouseOver ? 'scroll' : 'hidden' }}
            onMouseOver={() => setIsMouseOver(true)}
            onMouseOut={() => {
                setIsMouseOver(false)
            }}
        >
            <NarSide></NarSide>

            {currentUser ? (
                <>
                    <SuggestedAccounts></SuggestedAccounts>
                    <FollowingAccounts></FollowingAccounts>
                </>
            ) : (
                <>
                    <FollowingAccounts onClick={onClick}></FollowingAccounts>
                    <SuggestedAccounts></SuggestedAccounts>
                </>
            )}
        </aside>
    )
}

export default SideBar

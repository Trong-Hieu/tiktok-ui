import classNames from 'classnames/bind'

import styles from './Sidebar.module.scss'
import NarSide from './NarSide'
import SuggestedAccounts from './SuggestedAccounts'
import FollowingAccounts from './FollowingAccounts'

const cs = classNames.bind(styles)

function SideBar({ onClick }) {
    const isUserLogin = false

    return (
        <aside className={cs('side-bar')}>
            <NarSide></NarSide>

            {isUserLogin ? (
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

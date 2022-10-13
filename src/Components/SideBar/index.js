import classNames from 'classnames/bind'

import styles from './Sidebar.module.scss'
import NarSide from './NarSide'
import SuggestedAccounts from './SuggestedAccounts'
import FollowingAccounts from './FollowingAccounts'

const cs = classNames.bind(styles)

function SideBar() {
    return (
        <aside className={cs('side-bar')}>
            <NarSide></NarSide>
            <SuggestedAccounts></SuggestedAccounts>
            <FollowingAccounts></FollowingAccounts>
        </aside>
    )
}

export default SideBar

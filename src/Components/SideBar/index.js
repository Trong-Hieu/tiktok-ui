import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import NarSide from './NarSide'
import SuggestedAccountWrapper from './AccountsWrapper'
import FollowingAccountWrapper from './AccountsWrapper'
import AccountItem from './AccountsWrapper/AccountItem'

const cs = classNames.bind(styles)

function SideBar() {
    return (
        <aside className={cs('side-bar')}>
            <NarSide></NarSide>
            <SuggestedAccountWrapper tittle="Suggested accounts" footer="See all">
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
            </SuggestedAccountWrapper>
            <FollowingAccountWrapper tittle="Following accounts" footer="See more">
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
            </FollowingAccountWrapper>
        </aside>
    )
}

export default SideBar

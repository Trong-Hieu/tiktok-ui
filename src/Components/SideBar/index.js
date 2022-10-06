import classNames from 'classnames/bind'

import styles from './Sidebar.module.scss'
import NarSide from './NarSide'
import SuggestedAccountWrapper from './AccountsWrapper'
import FollowingAccountWrapper from './AccountsWrapper'
import AccountItem from './AccountsWrapper/AccountItem'
import * as AccountsService from '~/Services/accountsService'
import { useEffect, useState } from 'react'

const cs = classNames.bind(styles)

function SideBar() {
    const [suggestedAccounts, setsuggestedAccounts] = useState([])
    const [perPage, setPerPage] = useState(5)
    const [footer, setFooter] = useState('See all')

    useEffect(() => {
        AccountsService.getSuggetedAccounts(1, perPage)
            .then((response) => {
                setsuggestedAccounts(response)
                console.log('re-render')
            })
            .catch((err) => {
                console.log(err)
            })
        console.log(suggestedAccounts)
    }, [perPage])

    const handleViewSuggestedAccount = () => {
        if (footer === 'See all') {
            setPerPage(20)
            setFooter('See less')
        } else if (footer === 'See less') {
            setPerPage(5)
            setFooter('See all')
        }
    }

    return (
        <aside className={cs('side-bar')}>
            <NarSide></NarSide>
            <SuggestedAccountWrapper tittle="Suggested accounts" footer={footer} onClick={handleViewSuggestedAccount}>
                {suggestedAccounts.map((data) => (
                    <AccountItem data={data} key={data.id} isNeedTippy></AccountItem>
                ))}
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

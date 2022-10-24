import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import style from './FollowingAccounts.module.scss'
import AccountWrapper from '../AccountsWrapper'
import AccountItem from '../AccountsWrapper/AccountItem'
import * as AccountsService from '~/Services/accountsService'
import ButtonCustomize from '~/Components/Button'

const cx = classNames.bind(style)

function FollowingAccounts({ onClick }) {
    const [currentUser, setCurrentUser] = useState(() => {
        let user = JSON.parse(localStorage.getItem('currentUser'))
        if (user != null) return user
        else return null
    })

    const [followingAccounts, setfollowingAccounts] = useState([])

    const [perPage, setPerPage] = useState(5)
    const [footer, setFooter] = useState('See all')

    // console.log(followingAccounts)

    useEffect(() => {
        AccountsService.getFollowingAccounts()
            .then((response) => {
                setfollowingAccounts(response)
                // console.log('re-render')
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

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
        <>
            {currentUser ? (
                <div>
                    <AccountWrapper tittle="Following accounts" footer="See more" onClick={handleViewSuggestedAccount}>
                        {followingAccounts.map((data) => (
                            <AccountItem data={data} key={data.id}></AccountItem>
                        ))}
                    </AccountWrapper>
                </div>
            ) : (
                <div className={cx('follow-requied-login')}>
                    <p className={cx('intro-text')}>Log in to follow creators, like videos, and view comments.</p>
                    <ButtonCustomize outline className={cx('log-in-btn')} onClick={onClick}>
                        Log in
                    </ButtonCustomize>
                </div>
            )}
        </>
    )
}

export default FollowingAccounts

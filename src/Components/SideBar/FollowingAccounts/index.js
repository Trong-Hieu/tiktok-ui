import { useEffect, useState } from 'react'

import AccountWrapper from '../AccountsWrapper'
import AccountItem from '../AccountsWrapper/AccountItem'
import * as AccountsService from '~/Services/accountsService'

function FollowingAccounts() {
    const [followingAccounts, setfollowingAccounts] = useState([])

    const [perPage, setPerPage] = useState(5)
    const [footer, setFooter] = useState('See all')

    console.log(followingAccounts)

    useEffect(() => {
        AccountsService.getFollowingAccounts()
            .then((response) => {
                setfollowingAccounts(response)
                console.log('re-render')
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
        <div>
            <AccountWrapper tittle="Following accounts" footer="See more" onClick={handleViewSuggestedAccount}>
                {followingAccounts.map((data) => (
                    <AccountItem data={data} key={data.id} isNeedTippy></AccountItem>
                ))}
            </AccountWrapper>
        </div>
    )
}

export default FollowingAccounts

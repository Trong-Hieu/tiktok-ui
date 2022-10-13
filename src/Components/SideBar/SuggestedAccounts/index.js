import { useEffect, useState } from 'react'

import AccountWrapper from '../AccountsWrapper'
import AccountItem from '../AccountsWrapper/AccountItem'
import * as AccountsService from '~/Services/accountsService'

function SuggestedAccounts() {
    const [suggestedAccounts, setsuggestedAccounts] = useState([])

    const [perPage, setPerPage] = useState(5)
    const [footer, setFooter] = useState('See all')

    useEffect(() => {
        AccountsService.getSuggetedAccounts(1, perPage)
            .then((response) => {
                setsuggestedAccounts(response)
            })
            .catch((err) => {
                console.log(err)
            })
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
        <div>
            <AccountWrapper tittle="Suggested accounts" footer={footer} onClick={handleViewSuggestedAccount}>
                {suggestedAccounts.map((data) => (
                    <AccountItem data={data} key={data.id} isNeedTippy></AccountItem>
                ))}
            </AccountWrapper>
        </div>
    )
}

export default SuggestedAccounts

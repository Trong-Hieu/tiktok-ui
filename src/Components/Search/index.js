import { useState, useEffect, useRef } from 'react'
import HeadlessTippy from '@tippyjs/react/headless'
import styles from './Search.module.scss'
import classNames from 'classnames/bind'

import DropdownSearch from '~/Components/Dropdown'
import SearchResult from './SearchResult'
import Icon_Clear from '~/assets/icons/clear'
import Icon_Search from '~/assets/icons/search'
import ButtonCustomize from '../Button'
import Icon_Loading from '~/assets/icons/loading'

const cx = classNames.bind(styles)

function SearchForm() {
    const [searchResult, setSearchResult] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [clickOutSide, setClickOutSide] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const inputRef = useRef()

    useEffect(() => {
        if (!searchInput.trim()) {
            setSearchResult([])
            return
        }

        setIsLoading(true)
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchInput)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data)
                setIsLoading(false)
            })
    }, [searchInput])

    console.log(searchResult)

    return (
        <div>
            <HeadlessTippy
                visible={!clickOutSide && searchResult.length > 0}
                interactive={true}
                // modifiers={[{ name: 'preventOverflow', enabled: false }]}
                onClickOutside={() => {
                    console.log('out')
                    setClickOutSide(true)
                }}
                render={(attrs) => (
                    <div className={cx('search-result')}>
                        <DropdownSearch>
                            <div className={cx('title-account')}>Accounts</div>
                            {searchResult.map((result) => (
                                <SearchResult key={result.id} data={result}></SearchResult>
                            ))}
                        </DropdownSearch>
                    </div>
                )}
            >
                <div className={cx('search-form')}>
                    <input
                        placeholder="Search accounts and videos"
                        value={searchInput}
                        onChange={(e) => {
                            setSearchInput(e.target.value)
                        }}
                        onFocus={() => {
                            setClickOutSide(false)
                        }}
                        ref={inputRef}
                    ></input>
                    {isLoading && <Icon_Loading className={cx('loading')}></Icon_Loading>}

                    {searchInput && !isLoading && (
                        <Icon_Clear
                            onClick={() => {
                                setSearchInput('')
                                setSearchResult([])
                                inputRef.current.focus()
                            }}
                            className={cx('clear')}
                        ></Icon_Clear>
                    )}

                    <span className={cx('slash')}></span>
                    <button className={cx('search-btn')}>
                        <Icon_Search
                            color={searchInput !== '' ? 'rgba(22, 24, 35, .75)' : 'rgba(22, 24, 35, 0.34)'}
                        ></Icon_Search>
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    )
}

export default SearchForm

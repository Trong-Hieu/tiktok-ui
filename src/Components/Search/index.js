/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable camelcase */
import { useState, useEffect, useRef } from 'react'
import HeadlessTippy from '@tippyjs/react/headless'
import styles from './Search.module.scss'
import classNames from 'classnames/bind'

import { useDebounce } from '~/Hooks'

import DropdownSearch from '~/Components/Dropdown'
import SearchResult from './SearchResult'
import Icon_Clear from '~/assets/icons/clear'
import Icon_Search from '~/assets/icons/search'
import Icon_Loading from '~/assets/icons/loading'

import * as searchApi from '~/Services/searchService'

const cx = classNames.bind(styles)

function SearchForm() {
    const [searchResult, setSearchResult] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [clickOutSide, setClickOutSide] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const debounce = useDebounce(searchInput, 500)

    const inputRef = useRef()

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([])
            return
        }

        setIsLoading(true)

        const fetchSearch = async () => {
            const response = await searchApi.getSearch(debounce)
            setSearchResult(response)
            setIsLoading(false)
        }

        fetchSearch()
    }, [debounce])

    // console.log(searchResult)

    const handledInput = (value) => {
        if (!value.startsWith(' ')) {
            setSearchInput(value)
        }
    }

    return (
        <div>
            <HeadlessTippy
                visible={!clickOutSide && searchResult.length > 0}
                interactive={true}
                // modifiers={[{ name: 'preventOverflow', enabled: false }]}
                onClickOutside={() => {
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
                        onChange={(e) => handledInput(e.target.value)}
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
                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => {
                            e.preventDefault()
                        }}
                    >
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

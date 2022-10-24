/* eslint-disable react/jsx-pascal-case */
import styles from './Heading.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import ButtonCustomize from '../Button'

import MenuItem from '~/Data/Heading/MenuItem'
import UserMenuItem from '~/Data/Heading/UserMenuItem'
import SearchForm from '../Search'
import HeaderMenu from '../Menu'

import config from '~/Config'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

import Icon_Messages from '~/assets/icons/messages'
import Icon_Inbox from '~/assets/icons/inbox'
import Icon_Logo from '~/assets/icons/logo'
import ImageCustomize from '~/assets/images'

import NotificationBadge from 'react-notification-badge'

const cx = classNames.bind(styles)
function Heading({ onClick }) {
    const isUserLogin = false
    const notificationCount = 10

    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('content')}>
                    <Link to={config.routes.home} style={{ display: 'flex' }}>
                        <Icon_Logo></Icon_Logo>
                    </Link>

                    <SearchForm></SearchForm>

                    <div className={cx('actions')}>
                        {isUserLogin ? (
                            <>
                                <ButtonCustomize
                                    // href="https://www.tiktok.com/foryou?is_copy_url=1&is_from_webapp=v1"
                                    // target="_blank"
                                    to={config.routes.upload}
                                    children="Upload"
                                    leftIcon={<FontAwesomeIcon icon={faPlus} />}
                                ></ButtonCustomize>

                                <Tippy content="Messages">
                                    <ButtonCustomize
                                        className={cx('icon-message')}
                                        middleIcon={<Icon_Messages width="1em" height="1em"></Icon_Messages>}
                                    ></ButtonCustomize>
                                </Tippy>

                                {/* <div style={{ marginLeft: '16px' }} className={cx('inbox')}> */}
                                {/* <NotificationBadge
                                        // count={notificationCount}
                                        className={cx('inbox-badge')}
                                        style={{ top: '-5px', right: '-10px' }}
                                    /> */}
                                <Tippy content="Inbox">
                                    <ButtonCustomize
                                        className={cx('icon-inbox')}
                                        middleIcon={<Icon_Inbox width="1em" height="1em"></Icon_Inbox>}
                                    ></ButtonCustomize>
                                </Tippy>
                                {/* </div> */}

                                <HeaderMenu data={UserMenuItem}>
                                    <ImageCustomize
                                        className={cx('user-avatar')}
                                        // src="./Heading.module.scss"
                                        src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1667951951969281.jpeg?x-expires=1665712800&x-signature=fMm6JdWCBZWz09fZUk4UzyqnuDc%3D"
                                    ></ImageCustomize>
                                </HeaderMenu>
                            </>
                        ) : (
                            <>
                                <ButtonCustomize
                                    href="https://www.tiktok.com/foryou?is_copy_url=1&is_from_webapp=v1"
                                    target="_blank"
                                    children="Upload"
                                    leftIcon={<FontAwesomeIcon icon={faPlus} />}
                                ></ButtonCustomize>
                                <ButtonCustomize onClick={onClick} children="Log in" primary></ButtonCustomize>
                                {/* <div className={cx('dropdown-menu')}> */}
                                <HeaderMenu data={MenuItem}>
                                    <div style={{ marginLeft: '16px' }}>
                                        <ButtonCustomize
                                            middleIcon={
                                                <FontAwesomeIcon icon={faEllipsisVertical} size="lg"></FontAwesomeIcon>
                                            }
                                        ></ButtonCustomize>
                                    </div>
                                </HeaderMenu>
                                {/* </div> */}
                            </>
                        )}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Heading

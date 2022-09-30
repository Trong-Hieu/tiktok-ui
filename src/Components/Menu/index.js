import DropdownMenu from '../Dropdown'
import MenuItem from './MenuItem'

import Tippy from '@tippyjs/react/headless'
import styles from '~/Components/Heading/Heading.module.scss'
import classNames from 'classnames/bind'
import { useState } from 'react'
import HeaderLanguage from './HeaderLanguage'

const cx = classNames.bind(styles)

function HeaderMenu({ children, data }) {
    const [menuItem, setMenuItems] = useState([{ data }])
    const currentMenu = menuItem[menuItem.length - 1]

    console.log(menuItem)

    return (
        <>
            <Tippy
                delay={[0, 700]}
                offset={[20, 0]}
                placement="top-end"
                interactive={true}
                hideOnClick={false}
                onHide={() => {
                    setMenuItems((prev) => prev.slice(0, 1))
                }}
                render={(attrs) => (
                    <div className={cx('dropdown-menu')} tabIndex="-1">
                        <DropdownMenu>
                            {menuItem.length > 1 && (
                                <HeaderLanguage
                                    onClick={() => {
                                        setMenuItems((prev) => prev.slice(0, prev.length - 1))
                                    }}
                                ></HeaderLanguage>
                            )}
                            {currentMenu.data.map((item, index) => (
                                <MenuItem
                                    key={index}
                                    item={item}
                                    onClick={() => {
                                        const isParent = !!item.child
                                        if (isParent) {
                                            setMenuItems((prev) => [...prev, { data: item.child }])
                                        }
                                    }}
                                ></MenuItem>
                            ))}
                        </DropdownMenu>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </>
    )
}

export default HeaderMenu

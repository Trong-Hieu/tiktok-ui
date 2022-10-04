import { NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'

import style from './NarSide.module.scss'
import { forwardRef } from 'react'

const cx = classNames.bind(style)

function Item({ icon, title, to, onClick }, ref) {
    return (
        <NavLink to={to} className={(nav) => cx('item', { active: nav.isActive })} ref={ref} onClick={onClick}>
            {icon}
            <span className={cx('item-title')}>{title}</span>
        </NavLink>
    )
}

export default forwardRef(Item)

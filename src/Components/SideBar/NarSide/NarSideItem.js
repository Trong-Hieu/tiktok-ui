import { NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import style from './NarSide.module.scss'
import { forwardRef } from 'react'

const cx = classNames.bind(style)

function Item({ icon, title, to }, ref) {
    return (
        <NavLink to={to} className={(nav) => cx('item', { active: nav.isActive })} ref={ref}>
            {icon}
            <span className={cx('item-title')}>{title}</span>
        </NavLink>
    )
}

Item.propsTypes = {
    icon: PropTypes.node,
    title: PropTypes.string,
    to: PropTypes.string,
}

export default forwardRef(Item)

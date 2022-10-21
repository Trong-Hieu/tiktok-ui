import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import style from './Item.module.scss'

const cx = classNames.bind(style)

function LoginOptionItem({ icon, title, to, onClick }) {
    let Component = 'div'

    if (to) {
        Component = Link
    }

    return (
        <>
            <Component to={to} className={cx('item-container')} onClick={onClick}>
                <div className={cx('icon')}>{icon}</div>
                {title}
            </Component>
        </>
    )
}

export default LoginOptionItem

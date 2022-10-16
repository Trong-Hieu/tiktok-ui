import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import style from './Item.module.scss'

const cx = classNames.bind(style)

function LoginOptionItem({ icon, title }) {
    return (
        <div className={cx('item-container')}>
            <div className={cx('icon')}>{icon}</div>
            {title}
        </div>
    )
}

export default LoginOptionItem

import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import styles from './AccountsWrapper.module.scss'

const cx = classNames.bind(styles)

function AccountWrapper({ children, tittle, footer, onClick }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>{tittle}</p>
            {children}
            <p className={cx('footer')} onClick={onClick}>
                {footer}
            </p>
        </div>
    )
}

AccountWrapper.prosTypes = {
    children: PropTypes.node,
    tittle: PropTypes.string,
    footer: PropTypes.string,
}

export default AccountWrapper

import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Dropdown.module.scss'

const cx = classNames.bind(styles)

function Dropdown({ children, className }) {
    return (
        <div
            className={cx('wrapper', {
                [className]: className,
            })}
        >
            {children}
        </div>
    )
}

Dropdown.prototypes = {
    children: PropTypes.node.isRequired,
}

export default Dropdown

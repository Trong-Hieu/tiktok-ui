import classNames from 'classnames/bind'

import styles from './HeaderOnlyLayout.module.scss'
import Heading from '~/Components/Heading'

const cx = classNames.bind(styles)

function HeaderOnly({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Heading width="100%" />
            <div className={cx('container')}>{children}</div>
        </div>
    )
}

export default HeaderOnly

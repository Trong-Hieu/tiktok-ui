import classNames from 'classnames/bind'

import ImageCustomize from '~/assets/images'
import styles from './AccountsWrapper.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('item')}>
            <ImageCustomize
                className={cx('user-avatar')}
                // src="./Heading.module.scss"
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/d7bc97f11f1957ecccb129789a8f2b85~c5_100x100.jpeg?x-expires=1665021600&x-signature=1JIcXiEhHEs1XKlemMJdB1l6iVo%3D"
            ></ImageCustomize>
            <div className={cx('user-infor')}>
                <h4 className={cx('user-name')}>baolynee</h4>
                <p className={cx('user-nick-name')}>A Lyy ✨</p>
            </div>
        </div>
    )
}

export default AccountItem

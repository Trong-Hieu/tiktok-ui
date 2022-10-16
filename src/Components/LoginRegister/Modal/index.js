import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import Icon_Close from '~/assets/icons/close'
import ListItemLoginRegister from '../Item/ListItems'
import style from './Modal.module.scss'

const cx = classNames.bind(style)

function ModalLogin() {
    return (
        <div className={cx('modal')}>
            <div className={cx('container')}>
                {/* <div className={cx('title')}>Log in to TikTok</div> */}
                <div className={cx('close-icon')}>
                    <Icon_Close></Icon_Close>
                </div>
                {/* <div className={cx('content')}></div> */}
                <ListItemLoginRegister></ListItemLoginRegister>
                <div className={cx('footer')}>
                    <div className={cx('bottom-text')}>Don’t have an account?</div>
                    <a className={cx('bottom-href')} href="">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ModalLogin

/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import Icon_Close from '~/assets/icons/close'
import Icon_LeftChevron from '~/assets/icons/leftChevron'
import ListItemLoginRegister from '../Item/ListItems'
import LoginWithQR from '../LoginWithQr'
import style from './Modal.module.scss'

const cx = classNames.bind(style)

function ModalLogin() {
    return (
        <div className={cx('modal')}>
            <div className={cx('container')}>
                {/* <div className={cx('title')}>Log in to TikTok</div> */}
                {/* <div className={cx('back-icon')}>
                    <Icon_LeftChevron></Icon_LeftChevron>
                </div> */}
                <div className={cx('close-icon')}>
                    <Icon_Close onClick={() => alert('bitch')}></Icon_Close>
                </div>
                {/* <div className={cx('content')}></div> */}
                <div className={cx('body')}>
                    <ListItemLoginRegister></ListItemLoginRegister>
                    {/* <LoginWithQR></LoginWithQR> */}
                </div>
                <div className={cx('footer')}>
                    <div className={cx('bottom-text')}>Don’t have an account?</div>
                    <a className={cx('bottom-href')} href="" onClick={() => alert('bitch')}>
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ModalLogin

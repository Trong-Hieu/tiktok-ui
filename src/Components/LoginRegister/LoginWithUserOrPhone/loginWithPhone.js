/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import config from '~/Config'
import Icon_DownArrow from '~/assets/icons/downArrow'
import Icon_Showpass from '~/assets/icons/showPass'
import Icon_LeftChevron from '~/assets/icons/leftChevron'
import ButtonCustomize from '~/Components/Button'

import styles from './LoginWithUserOrPhone.module.scss'

const cx = classNames.bind(styles)

function LoginWithPhone({ getType, isInModal }) {
    const [loginByPhoneWithPassword, setLoginWithPhoneWithPassword] = useState(false)

    const handleLoginByPhoneWithPassword = () => {
        setLoginWithPhoneWithPassword(!loginByPhoneWithPassword)
    }

    const [type, setType] = useState('phone')
    // console.log(type)

    const handleChangeTypeLogin = (getTypeFromChild) => {
        setType(getTypeFromChild)
        // console.log('count')
    }

    useEffect(() => {
        if (getType) {
            getType(type)
        }
    })

    return (
        <form className={cx('container')}>
            <div className={cx('title')}>Log in</div>
            <div className={cx('header')}>
                <p>Phone</p>
                <Link to={!isInModal ? config.routes.loginByEmail : ''} onClick={() => handleChangeTypeLogin('email')}>
                    Log in with email or username
                </Link>
            </div>

            <div className={cx('phone-input')}>
                <div className={cx('zipcode')}>
                    <span className={cx('input-zipcode')}>VN +84</span>
                    <Icon_DownArrow></Icon_DownArrow>
                </div>
                <input className={cx('input-phone')} placeholder="Phone number"></input>
            </div>

            {!loginByPhoneWithPassword ? (
                <>
                    <div className={cx('digit-code-input')}>
                        <input className={cx('input-code')} placeholder="Enter 6-digit code"></input>
                        <ButtonCustomize className={cx('btn-send-code')}>Send code</ButtonCustomize>
                    </div>
                    <div className={cx('footer')}>
                        <a onClick={handleLoginByPhoneWithPassword}>Log in with password</a>
                    </div>
                </>
            ) : (
                <>
                    <div className={cx('password-input')}>
                        <input className={cx('input-password')} placeholder="Password"></input>
                        <div className={cx('showpass')}>
                            <Icon_Showpass className={cx('icon-showpass')}></Icon_Showpass>
                        </div>
                    </div>
                    <div className={cx('footer')}>
                        <a>Forgot password?</a>
                        <span></span>
                        <a onClick={handleLoginByPhoneWithPassword}>Log in with code</a>
                    </div>
                </>
            )}

            <ButtonCustomize className={cx('btn-submit')}>Log in</ButtonCustomize>

            {!isInModal && (
                <Link className={cx('go-back')} to={config.routes.login}>
                    <Icon_LeftChevron></Icon_LeftChevron>
                    Go back
                </Link>
            )}
        </form>
    )
}

export default LoginWithPhone

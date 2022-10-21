/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import React from 'react'

import config from '~/Config'
import Icon_Showpass from '~/assets/icons/showPass'
import Icon_LeftChevron from '~/assets/icons/leftChevron'
import ButtonCustomize from '~/Components/Button'

import styles from './LoginWithUserOrPhone.module.scss'

const cx = classNames.bind(styles)

function LoginWithEmail({ getType, isInModal }) {
    const [type, setType] = useState('email')
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
                <p>Email or username</p>
                <Link to={!isInModal ? config.routes.loginByPhone : ''} onClick={() => handleChangeTypeLogin('phone')}>
                    Log in with phone
                </Link>
            </div>

            <div className={cx('email-input')}>
                <input className={cx('input-email')} placeholder="Email or username"></input>
            </div>

            <div className={cx('password-input')}>
                <input className={cx('input-password')} placeholder="Password"></input>
                <div className={cx('showpass')}>
                    <Icon_Showpass className={cx('icon-showpass')}></Icon_Showpass>
                </div>
            </div>
            <div className={cx('footer')}>
                <a href="">Forgot password</a>
            </div>

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

export default LoginWithEmail

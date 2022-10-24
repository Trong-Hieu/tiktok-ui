/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import config from '~/Config'
import Icon_Showpass from '~/assets/icons/showPass'
import Icon_LeftChevron from '~/assets/icons/leftChevron'
import ButtonCustomize from '~/Components/Button'
import * as auth from '~/Services/authService'

import styles from './LoginWithUserOrPhone.module.scss'

const cx = classNames.bind(styles)

function LoginWithEmail({ getType, isInModal }) {
    // Modal and rote
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

    // Login by Email logic

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const [isDisabledBtn, setIsDisabledBtn] = useState(true)
    const data = {
        email,
        password,
    }

    useEffect(() => {
        if (email && password !== '') {
            setIsDisabledBtn(false)
        } else {
            setIsDisabledBtn(true)
        }
    })

    const handleSubmitBtn = async (e) => {
        e.preventDefault()

        const res = await auth.login(data)
        console.log(res)

        localStorage.setItem('currentUser', JSON.stringify(res))

        if (isInModal) navigate(0)
        else navigate('/')
    }

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
                <input
                    className={cx('input-email')}
                    placeholder="Email or username"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                ></input>
            </div>

            <div className={cx('password-input')}>
                <input
                    className={cx('input-password')}
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                ></input>
                <div className={cx('showpass')}>
                    <Icon_Showpass className={cx('icon-showpass')}></Icon_Showpass>
                </div>
            </div>
            <div className={cx('footer')}>
                <a href="">Forgot password</a>
            </div>

            <ButtonCustomize
                disabled={isDisabledBtn}
                primary={!isDisabledBtn}
                className={cx('btn-submit')}
                type="submit"
                onClick={(e) => handleSubmitBtn(e)}
            >
                Log in
            </ButtonCustomize>

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

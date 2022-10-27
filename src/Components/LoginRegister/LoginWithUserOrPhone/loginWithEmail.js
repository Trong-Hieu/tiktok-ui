/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import config from '~/Config'
import Icon_Showpass from '~/assets/icons/showPass'
import Icon_LeftChevron from '~/assets/icons/leftChevron'
import ButtonCustomize from '~/Components/Button'
import * as auth from '~/Services/authService'

import styles from './LoginWithUserOrPhone.module.scss'
import Icon_Warning from '~/assets/icons/warning.js'

const cx = classNames.bind(styles)

function LoginWithEmail({ getType, isInModal }) {
    // Modal and rote
    const [type, setType] = useState('email')
    const [isShowPass, setIsShowPass] = useState(false)
    const [isError, setIsError] = useState(false)
    const emailRef = useRef()
    const passwordRef = useRef()
    // console.log(type)

    const handleChangeTypeLogin = (getTypeFromChild) => {
        setType(getTypeFromChild)
        // console.log('count')
    }

    const handleShowPass = () => {
        setIsShowPass(!isShowPass)
        if (passwordRef.current.type == 'text') passwordRef.current.type = 'password'
        else if (passwordRef.current.type == 'password') passwordRef.current.type = 'text'
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

        try {
            const res = await auth.login(data)
            console.log(res)

            localStorage.setItem('currentUser', JSON.stringify(res))

            if (isInModal) navigate(0)
            else navigate('/')
        } catch (error) {
            // alert('sai tk hoac mk')
            setIsError(true)
        }
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
                    type="text"
                    ref={emailRef}
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                ></input>
            </div>

            <div className={cx('password-input', { error: isError })}>
                <input
                    className={cx('input-password')}
                    placeholder="Password"
                    type="password"
                    ref={passwordRef}
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                ></input>
                <div className={cx('showpass')} onClick={handleShowPass}>
                    {isError && <Icon_Warning className={cx('icon-warning-error')}></Icon_Warning>}
                    <Icon_Showpass className={cx('icon-showpass')} isShowPass={isShowPass}></Icon_Showpass>
                </div>
            </div>
            {isError && <div className={cx('error-text')}>This user does not exist</div>}
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

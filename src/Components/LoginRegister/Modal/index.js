/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import Icon_Close from '~/assets/icons/close'
import Icon_LeftChevron from '~/assets/icons/leftChevron'
import ListItemLoginRegister from '../Item/ListItems'
import LoginWithQR from '../LoginWithQr'
import LoginWithEmail from '../LoginWithUserOrPhone/loginWithEmail'
import LoginWithPhone from '../LoginWithUserOrPhone/loginWithPhone'

import style from './Modal.module.scss'

const cx = classNames.bind(style)

function ModalLogin({ onClick }) {
    const [type, setType] = useState('')
    console.log('type: ' + type)

    const getTypeFromChild = (typeFromChild) => {
        setType(typeFromChild)
        // console.log('typee: ' + type)
    }

    // useEffect(() => {
    //     setType(typee)
    // }, [type])

    const render = () => {
        switch (type) {
            case 'qr':
                return <LoginWithQR isInModal></LoginWithQR>
            case 'email':
                return <LoginWithEmail getType={getTypeFromChild} isInModal></LoginWithEmail>
            case 'phone':
                return <LoginWithPhone getType={getTypeFromChild} isInModal></LoginWithPhone>
            default:
                return <ListItemLoginRegister getType={getTypeFromChild} isInModal></ListItemLoginRegister>
        }
    }

    return (
        <div className={cx('modal')}>
            <div className={cx('container')}>
                {type !== '' && (
                    <div className={cx('back-icon')} onClick={() => setType('')}>
                        <Icon_LeftChevron></Icon_LeftChevron>
                    </div>
                )}
                <div className={cx('close-icon')}>
                    <Icon_Close onClick={onClick}></Icon_Close>
                </div>
                <div className={cx('body')}>{render()}</div>
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

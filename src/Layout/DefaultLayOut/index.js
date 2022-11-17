import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'
import { useState } from 'react'

import Heading from '~/Components/Heading'
import SideBar from '~/Components/SideBar'
import ModalLogin from '~/Components/LoginRegister/Modal'

const cs = classNames.bind(styles)

function DefaultLayout({ children }) {
    const [isShowModalLogin, setisShowModalLogin] = useState(false)

    const handleShowModalLogin = () => {
        setisShowModalLogin(!isShowModalLogin)
    }

    return (
        <div className={cs('wrapper')}>
            <Heading onClick={handleShowModalLogin} />
            <div className={cs('container')}>
                <SideBar onClick={handleShowModalLogin} />
                <div
                    className={cs('contain')}
                    onScroll={() => {
                        console.log('scroll')
                    }}
                >
                    {children}
                </div>
            </div>

            {isShowModalLogin && <ModalLogin onClick={handleShowModalLogin}></ModalLogin>}
        </div>
    )
}

export default DefaultLayout

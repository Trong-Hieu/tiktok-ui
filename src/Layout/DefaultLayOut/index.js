import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'

import Heading from '~/Components/Heading'
import SideBar from '~/Components/SideBar'

const cs = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cs('wrapper')}>
            <Heading />
            <div className={cs('container')}>
                <SideBar />
                <div className={cs('contain')}>{children}</div>
            </div>
        </div>
    )
}

export default DefaultLayout

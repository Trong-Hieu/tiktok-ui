import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import config from '~/Config'
import styles from './LoginLayout.module.scss'

import Icon_Logo from '~/assets/icons/logo'
import Icon_Quest from '~/assets/icons/quest'

const cx = classNames.bind(styles)

function LoginLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Link to={config.routes.home} style={{ display: 'flex' }}>
                    <Icon_Logo></Icon_Logo>
                </Link>
                <Link className={cx('feedback-and-help')} to={''}>
                    <Icon_Quest></Icon_Quest>
                    <span>Feedback and help</span>
                </Link>
            </header>
            <div className={cx('body')}>{children}</div>
            <div className={cx('footer')}>
                <div className={cx('bottom')}>
                    <div className={cx('bottom-text')}>Don’t have an account?</div>
                    <a className={cx('bottom-href')} href="" onClick={() => alert('bitch')}>
                        Sign up
                    </a>
                </div>
                <div className={cx('underneath')}>
                    <div className={cx('language')}>
                        <p>English</p>
                    </div>
                    <div className={cx('copy-right')}>© 2022 TikTok</div>
                </div>
            </div>
        </div>
    )
}

export default LoginLayout

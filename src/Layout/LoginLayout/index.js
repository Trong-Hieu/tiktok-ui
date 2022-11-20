import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import config from '~/Config'
import styles from './LoginLayout.module.scss'

import Icon_Logo from '~/assets/icons/logo'
import Icon_Quest from '~/assets/icons/quest'
import Footer from '~/Components/footer'

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
                <div className={cx('sign-up')}>
                    <div className={cx('sign-up-text')}>Don’t have an account?</div>
                    <a className={cx('sign-up-href')} href="" onClick={() => alert('bitch')}>
                        Sign up
                    </a>
                </div>

                <Footer></Footer>
            </div>
        </div>
    )
}

export default LoginLayout

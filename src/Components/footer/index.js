import classNames from 'classnames/bind'
import style from './Footer.module.scss'

const cx = classNames.bind(style)

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('underneath')}>
                <div className={cx('language')}>
                    <p>English</p>
                </div>
                <div className={cx('copy-right')}>© 2022 TikTok</div>
            </div>
        </div>
    )
}

export default Footer

/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './LoginWithQr.module.scss'
import qrcodeURL from '~/assets/images/QRCode.png'
import ButtonCustomize from '~/Components/Button'
import Icon_QRReload from '~/assets/icons/qrReload'
import Icon_QRScan from '~/assets/icons/qrScan'
import Icon_QRAddAccount from '~/assets/icons/qrAddAccount'

const cx = classNames.bind(styles)

function LoginWithQR() {
    return (
        <div className={cx('container')}>
            <div className={cx('title')}>Log in with QR code</div>
            <div className={cx('content')}>
                <div className={cx('qr')}>
                    <div className={cx('qr-code')}>
                        <img className={cx('qr-image')} src={qrcodeURL}></img>
                        <div className={cx('qr-expried')}>
                            <p className={cx('qr-expried-text')}>QR code expried</p>
                            <ButtonCustomize
                                className={cx('qr-expried-btn')}
                                middleIcon={<Icon_QRReload className={cx('qr-expried-btn-icon')}></Icon_QRReload>}
                            ></ButtonCustomize>
                        </div>
                    </div>
                    <div className={cx('qr-guideline')}>
                        <p>1. Open the TikTok app on your mobile device</p>
                        <p>
                            2. On Profile, tap{' '}
                            <Icon_QRAddAccount className={cx('qr-guideline-icon')}></Icon_QRAddAccount>
                        </p>
                        <p>
                            3. Tap <Icon_QRScan className={cx('qr-guideline-icon')}></Icon_QRScan> and scan the QR code
                            to confirm your login
                        </p>
                    </div>
                </div>
                <img
                    className={cx('image-guide')}
                    src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/b6d3cc69d3525571aef0.gif"
                ></img>
            </div>
        </div>
    )
}

export default LoginWithQR

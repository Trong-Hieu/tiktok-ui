/* eslint-disable react/jsx-pascal-case */
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import LoginOptionItem from './item'
import Icon_User from '~/assets/icons/user'
import Icon_QR from '~/assets/icons/qr'
import Icon_Facebook from '~/assets/icons/facebook'
import Icon_Google from '~/assets/icons/google'
import Icon_Twitter from '~/assets/icons/twitter'
import Icon_Line from '~/assets/icons/line'
import Icon_KakaoTalk from '~/assets/icons/kakaotalk'
import Icon_Apple from '~/assets/icons/apple'
import Icon_IG from '~/assets/icons/instagram'
import style from './Item.module.scss'

const cx = classNames.bind(style)

function ListItemLoginRegister() {
    return (
        <div className={cx('list-container')}>
            <div className={cx('title')}>Log in to TikTok</div>
            <LoginOptionItem icon={<Icon_QR></Icon_QR>} title="Use QR code"></LoginOptionItem>
            <LoginOptionItem icon={<Icon_User></Icon_User>} title="Use phone / email / username"></LoginOptionItem>
            <LoginOptionItem icon={<Icon_Facebook></Icon_Facebook>} title="Continue with Facebook"></LoginOptionItem>
            <LoginOptionItem icon={<Icon_Google></Icon_Google>} title="Continue with Google"></LoginOptionItem>
            <LoginOptionItem icon={<Icon_Twitter></Icon_Twitter>} title="Continue with Twitter"></LoginOptionItem>
            <LoginOptionItem icon={<Icon_Line></Icon_Line>} title="Continue with LINE"></LoginOptionItem>
            <LoginOptionItem icon={<Icon_KakaoTalk></Icon_KakaoTalk>} title="Continue with KakaoTalk"></LoginOptionItem>
            <LoginOptionItem icon={<Icon_Apple></Icon_Apple>} title="Continue with Apple"></LoginOptionItem>
            <LoginOptionItem icon={<Icon_IG></Icon_IG>} title="Continue with Instagram"></LoginOptionItem>
        </div>
    )
}

export default ListItemLoginRegister

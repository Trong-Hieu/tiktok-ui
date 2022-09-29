import classNames from 'classnames/bind'
import styles from './HeaderLanguage.module.scss'
import ButtonCustomize from '~/Components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function HeaderLanguage({ onClick }) {
    return (
        <header className={cx('header-language')}>
            <ButtonCustomize
                className={cx('chevron-left')}
                children={<FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>}
                onClick={onClick}
            ></ButtonCustomize>
            <p className={cx('title')}>Language</p>
        </header>
    )
}

export default HeaderLanguage

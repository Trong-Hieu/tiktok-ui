import classNames from 'classnames/bind'
import MainPlayVideo from '~/Components/Main-PlayVideo'
import styles from './homePage.module.scss'

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('for-you')}>
            <MainPlayVideo></MainPlayVideo>
        </div>
    )
}

export default Home

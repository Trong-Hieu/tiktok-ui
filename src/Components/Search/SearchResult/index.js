import classNames from 'classnames/bind'
import styles from './SearchResult.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function SearchResult({ data }) {
    return (
        <Link to={'/@' + data.nickname} className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar}></img>
            <div className={cx('account')}>
                <h4 className={cx('username')}>{data.full_name}</h4>
                <p className={cx('user-account')}>{data.nickname}</p>
            </div>
        </Link>
    )
}

export default SearchResult

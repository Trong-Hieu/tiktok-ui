import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './SearchResult.module.scss'
import { Link } from 'react-router-dom'
import ImageCustomize from '~/assets/images'

const cx = classNames.bind(styles)

function SearchResult({ data }) {
    return (
        <Link to={'/@' + data.nickname} className={cx('wrapper')}>
            <ImageCustomize className={cx('avatar')} src={data.avatar} alt=""></ImageCustomize>
            <div className={cx('account')}>
                <h4 className={cx('username')}>{data.full_name}</h4>
                <p className={cx('user-account')}>{data.nickname}</p>
            </div>
        </Link>
    )
}

SearchResult.propTypes = {
    data: PropTypes.object,
}

export default SearchResult

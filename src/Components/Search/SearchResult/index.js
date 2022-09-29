import classNames from 'classnames/bind'
import styles from './SearchResult.module.scss'

const cx = classNames.bind(styles)

function SearchResult() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://toigingiuvedep.vn/wp-content/uploads/2021/01/anh-avatar-cho-con-gai-cuc-dep.jpg"
            ></img>
            <div className={cx('account')}>
                <h4 className={cx('username')}>BadBitch</h4>
                <p className={cx('user-account')}>badbitch112233</p>
            </div>
        </div>
    )
}

export default SearchResult

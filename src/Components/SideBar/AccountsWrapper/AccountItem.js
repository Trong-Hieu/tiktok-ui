import classNames from 'classnames/bind'
import HeadlessTippy from '@tippyjs/react/headless'

import ImageCustomize from '~/assets/images'
import styles from './AccountsWrapper.module.scss'
import DropdownAccount from '~/Components/Dropdown'
import ButtonCustomize from '~/Components/Button'

const cx = classNames.bind(styles)

function AccountItem({ data, isNeedTippy }) {
    const string = `abc ${isNeedTippy}`
    return (
        <div className={cx('item-wrapper')}>
            {isNeedTippy ? (
                <HeadlessTippy
                    // visible
                    interactive
                    delay={[1000, 500]}
                    offset={[-10, -10]}
                    placement="bottom-start"
                    render={(attrs) => (
                        <DropdownAccount>
                            <div className={cx('tippy-item')}>
                                <div className={cx('tippy-head')}>
                                    <ImageCustomize
                                        className={cx('tippy-user-avatar')}
                                        // src="./Heading.module.scss"
                                        src={data.avatar}
                                    ></ImageCustomize>
                                    <ButtonCustomize primary className={cx('tippy-btn')}>
                                        Follow
                                    </ButtonCustomize>
                                </div>
                                <div className={cx('tippy-body')}>
                                    <span
                                        className={cx('tippy-user-name')}
                                    >{`${data.first_name} ${data.last_name}`}</span>
                                    <a href="" className={cx('tippy-user-nick-name')}>
                                        {data.nickname}
                                    </a>
                                </div>
                                <div className={cx('tippy-end')}>
                                    <span className={cx('tippy-numer')}>{data.followers_count}</span>
                                    <span className={cx('tippy-unit')}>Followers</span>
                                    <span className={cx('tippy-numer')}>{data.likes_count}</span>
                                    <span className={cx('tippy-unit')}>Likes</span>
                                </div>
                            </div>
                        </DropdownAccount>
                    )}
                >
                    <div className={cx('item')}>
                        <ImageCustomize
                            className={cx('user-avatar')}
                            // src="./Heading.module.scss"
                            src={data.avatar}
                        ></ImageCustomize>
                        <div className={cx('user-infor')}>
                            <h4 className={cx('user-name')}>{`${data.first_name} ${data.last_name}`}</h4>
                            <p className={cx('user-nick-name')}>{data.nickname}</p>
                        </div>
                    </div>
                </HeadlessTippy>
            ) : (
                <div className={cx('item')}>
                    <ImageCustomize
                        className={cx('user-avatar')}
                        // src="./Heading.module.scss"
                        src={data.avatar}
                    ></ImageCustomize>
                    <div className={cx('user-infor')}>
                        <h4 className={cx('user-name')}>{`${data.first_name} ${data.last_name}`}</h4>
                        <p className={cx('user-nick-name')}>{data.nickname}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AccountItem

import classNames from 'classnames/bind'
import styles from './MenuItem.module.scss'
import ButtonCustomize from '../../Button'

const cx = classNames.bind(styles)

function MenuItem({ item, onClick }) {
    const classes = cx('content', {
        separate: item.separate,
    })
    return (
        <div className={classes}>
            <ButtonCustomize
                className={cx('menu-item')}
                leftIcon={item.icon}
                children={item.title}
                onClick={onClick}
                to={item.to}
                href={item.href}
            ></ButtonCustomize>
        </div>
    )
}

export default MenuItem

import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'

const cs = classNames.bind(styles)

function SideBar() {
    return <aside className={cs('side-bar')}>SideBar</aside>
}

export default SideBar

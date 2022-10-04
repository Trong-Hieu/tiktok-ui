import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import NarSide from './NarSide'

const cs = classNames.bind(styles)

function SideBar() {
    return (
        <aside className={cs('side-bar')}>
            <NarSide></NarSide>
        </aside>
    )
}

export default SideBar

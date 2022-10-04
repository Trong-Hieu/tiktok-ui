import classNames from 'classnames/bind'

import IconCamera from '~/assets/icons/camera'
import IconGroup from '~/assets/icons/group'
import IconHome from '~/assets/icons/home'
import style from './NarSide.module.scss'
import Item from './NarSideItem'

import config from '~/Config'
import { useEffect, useRef, useState } from 'react'

const cx = classNames.bind(style)

function NarSide() {
    const itemRef1 = useRef()
    const itemRef2 = useRef()
    const itemRef3 = useRef()

    const [isActive1, setIsActive1] = useState()
    const [isActive2, setIsActive2] = useState()
    const [isActive3, setIsActive3] = useState()

    // console.log('re-render')

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        // console.log(itemRef1)
        // console.log(itemRef1.current, itemRef2.current, itemRef3.current)
        // console.log(itemRef1.current.className)
        if (itemRef1.current.className.includes('active')) {
            setIsActive1(true)
        } else {
            setIsActive1(false)
        }
        if (itemRef2.current.className.includes('active')) {
            setIsActive2(true)
        } else {
            setIsActive2(false)
        }
        if (itemRef3.current.className.includes('active')) {
            setIsActive3(true)
        } else {
            setIsActive3(false)
        }
        return
    })

    return (
        <div className={cx('content')}>
            <Item icon={<IconHome active={isActive1}></IconHome>} title="For You" to="/" ref={itemRef1}></Item>
            <Item
                icon={<IconGroup active={isActive2}></IconGroup>}
                title="Following"
                ref={itemRef2}
                to={config.routes.following}
            ></Item>
            <Item
                icon={<IconCamera active={isActive3}></IconCamera>}
                title="LIVE"
                ref={itemRef3}
                to={config.routes.live}
            ></Item>
        </div>
    )
}

export default NarSide

import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const ButtonCustomize = React.forwardRef(
    (
        {
            // Nếu các props này được truyền vào, chúng sẽ có giá trị true
            to, // Link
            href, // Link

            primary, // class type of button
            outline,
            disabled,
            rounded,

            leftIcon, // additional element
            rightIcon,
            children,
            middleIcon,
            className,

            ...attributes // onClick, target ...
        },
        ref,
    ) => {
        let Component = 'button'
        const props = {
            ...attributes,
        }

        if (to) {
            props.to = to
            Component = Link
        } else if (href) {
            props.href = href
            Component = 'a'
        }

        if (disabled) {
            Object.keys(props).forEach((key) => {
                if (key.startsWith('on') && typeof props[key] === 'function') {
                    delete props[key]
                }
            })
        }

        // console.log({ ...props })

        const classes = cx('wrapper', {
            to, // tên key trùng với tên biến => to: to =>>> to: true nếu props to được truyền vào
            href,
            primary,
            disabled,
            outline,
            rounded,
            middleIcon,
            [className]: className,
        })
        return (
            <Component className={classes} {...props} ref={ref}>
                {leftIcon && <span className={cx('left-Icon')}>{leftIcon}</span>}
                {children || middleIcon}
                {rightIcon && <span className={cx('right-Icon')}>{rightIcon}</span>}
            </Component>
        )
    },
)

ButtonCustomize.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,

    primary: PropTypes.bool,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,

    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node,
    middleIcon: PropTypes.node,
    className: PropTypes.string,
}

export default ButtonCustomize

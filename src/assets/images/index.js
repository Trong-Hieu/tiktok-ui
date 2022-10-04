/* eslint-disable jsx-a11y/alt-text */
import imgErrorUrl from './image_error.png'
import React, { useState } from 'react'

const ImageCustomize = React.forwardRef(({ src, ...props }, ref) => {
    const [currentImg, setImageError] = useState(src)
    const handleImageError = () => {
        setImageError(imgErrorUrl)
    }
    // console.log(currentImg)
    return <img {...props} src={currentImg} onError={handleImageError} ref={ref}></img>
})

export default ImageCustomize

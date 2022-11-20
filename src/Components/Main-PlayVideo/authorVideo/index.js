import classNames from 'classnames/bind'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './video.module.scss'
import srcAuthorAvatar from '~/assets/images/d7bc97f11f1957ecccb129789a8f2b85_c5_100x100.jpeg'
import srcVideo from '~/assets/images/tuyet_bitch.mp4'
import ImageCustomize from '~/assets/images'
import Icon_BlueTick from '~/assets/icons/blueTick'
import ButtonCustomize from '~/Components/Button'
import Icon_Music from '~/assets/icons/music'
import Icon_Report from '~/assets/icons/report'
import Icon_PauseVideo from '~/assets/icons/pauseVideo'
import Icon_VideoSound from '~/assets/icons/videoSound'
import Icon_Like from '~/assets/icons/like'
import Icon_Comment from '~/assets/icons/comment'
import Icon_Share from '~/assets/icons/share'

const cx = classNames.bind(styles)

function RenderVideo({ index, scrollY, data, ...props }) {
    const [isControlBtns, setIsControlBtns] = useState(false)
    const [isVolumeBar, setisVolumeBar] = useState(false)

    const [circlePosY, setCirclePosY] = useState(0) // từ 0 đến -36
    const videoRef = useRef()

    const [isPlaying, setIsPlaying] = useState(false)

    const ref = useRef()

    // console.log('y: ' + circlePosY)
    // console.log(posY)

    if (circlePosY > 0) setCirclePosY(0)
    else if (circlePosY < -36) setCirclePosY(-36)

    if (videoRef.current) {
        if (props.isVideoPaused) {
            videoRef.current.play()
        } else videoRef.current.pause()
    }

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = props.currentVolume
            // console.log(videoRef.current.volume)
            if (props.isVideoPaused) {
                videoRef.current.play()
            } else videoRef.current.pause()
        }
    }, [props.currentVolume, props.isVideoPaused])

    useEffect(() => {
        let posY = index * ref.current.clientHeight - scrollY + 60 + 24
        // console.log(ref.current.clientHeight + '-' + posY)
        if (
            (posY >= 0 && posY <= ref.current.clientHeight / 2) ||
            (posY <= 0 && posY >= -ref.current.clientHeight / 2)
        ) {
            setIsPlaying(true)
        } else {
            setIsPlaying(false)
        }
    }, [scrollY, index])

    return (
        <div className={cx('container')} ref={ref}>
            {/* <Link className={cx('container')} to=""> */}
            {/* phần thông tin của video */}
            <ImageCustomize src={data.user.avatar} className={cx('author-avatar')}></ImageCustomize>
            <div className={cx('content')}>
                <div className={cx('infor')}>
                    <Link className={cx('author-names')} to="">
                        <h3 className={cx('name')}>
                            {data.user.first_name} {data.user.last_name}
                            {data.user.tick && <Icon_BlueTick className={cx('icon-blue-tick')}></Icon_BlueTick>}
                        </h3>
                        <h4 className={cx('nickname')}>{data.user.nickname}</h4>
                    </Link>
                    <ButtonCustomize outline className={cx('btn-follow')}>
                        Follow
                    </ButtonCustomize>
                    <div className={cx('description')}>{data.description}</div>
                    <h4 className={cx('music')}>
                        <Link to="">
                            <Icon_Music className={cx('icon_music')}></Icon_Music>
                            {data.music}
                        </Link>
                    </h4>
                </div>

                {/* Phần Video */}
                <div className={cx('video-container')}>
                    <div
                        className={cx('video')}
                        onMouseOver={() => {
                            setIsControlBtns(true)
                        }}
                        onMouseOut={() => {
                            setIsControlBtns(false)
                        }}
                    >
                        {isPlaying ? (
                            <>
                                <video loop muted={props.isVideoMuted} ref={videoRef}>
                                    <source src={data.file_url} type="video/mp4"></source>
                                </video>
                            </>
                        ) : (
                            <img className={cx('thumbnail')} src={data.thumb_url} loading="lazy" alt=""></img>
                        )}

                        {/* Các nút control video */}

                        {isControlBtns && (
                            <>
                                <div className={cx('report-btn')}>
                                    <Icon_Report className={cx('icon-report-btn')}></Icon_Report>Report
                                </div>
                                <div className={cx('pause-play-btn')} onClick={props.onClickPause}>
                                    <Icon_PauseVideo pause={props.isVideoPaused}></Icon_PauseVideo>
                                </div>
                                <div
                                    className={cx('mute-btn')}
                                    onMouseOver={() => {
                                        setisVolumeBar(true)
                                    }}
                                    onMouseOut={() => {
                                        setisVolumeBar(false)
                                    }}
                                >
                                    {isVolumeBar && (
                                        <div className={cx('video-sound')}>
                                            <input
                                                type="range"
                                                min="0"
                                                max="100"
                                                value={props.volume}
                                                className={cx('volumn-progress')}
                                                onChange={(e) => props.onChange(e.target.value)}
                                            ></input>
                                        </div>
                                    )}
                                    <Icon_VideoSound
                                        mute={props.isVideoMuted}
                                        onClick={props.onClickMute}
                                    ></Icon_VideoSound>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Các nút Like comment Share */}
                    <div className={cx('like-cmt-share')}>
                        <div className={cx('btn')}>
                            <div className={cx('icon-wrap')}>
                                <Icon_Like></Icon_Like>
                            </div>
                            {data.likes_count}
                        </div>
                        <div className={cx('btn')}>
                            <div className={cx('icon-wrap')}>
                                <Icon_Comment></Icon_Comment>
                            </div>
                            {data.comments_count}
                        </div>
                        <div className={cx('btn')}>
                            <div className={cx('icon-wrap')}>
                                <Icon_Share></Icon_Share>
                            </div>
                            {data.shares_count}
                        </div>
                    </div>
                </div>
            </div>
            {/* </Link> */}
        </div>
    )
}

export default RenderVideo

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

function RenderVideo() {
    const [isControlBtns, setIsControlBtns] = useState(true)
    const [isVolumeBar, setisVolumeBar] = useState(true)
    const [isVideoPaused, setIsVideoPause] = useState(true)
    const [isVideoMuted, setIsVideoMuted] = useState(true)
    const [circlePosY, setCirclePosY] = useState(0) // từ 0 đến -36
    const videoRef = useRef()
    const circleVolumeRef = useRef(null)
    const [volume, setvolume] = useState(0)
    const [volumeBeforeMute, setVolumeBeforeMute] = useState(100)

    // console.log('y: ' + circlePosY)
    if (circlePosY > 0) setCirclePosY(0)
    else if (circlePosY < -36) setCirclePosY(-36)

    const handlePlayPauseVideo = () => {
        // console.log(circleVolumeRef)

        if (videoRef.current.paused) {
            setIsVideoPause(true)
            videoRef.current.play()
        } else {
            videoRef.current.pause()
            setIsVideoPause(false)
        }
    }

    const handleMuteVideo = () => {
        if (isVideoMuted === true) {
            setIsVideoMuted(false)
            setvolume(volumeBeforeMute)
            // console.log(volume)
            videoRef.current.volume = volumeBeforeMute / 100
        } else {
            setIsVideoMuted(true)
            if (volume === 0) setVolumeBeforeMute(50)
            else setVolumeBeforeMute(volume)
            setvolume(0)
            // videoRef.current.volume = 0
        }
    }

    const handleVolumeSound = (value) => {
        setvolume(value)
        videoRef.current.volume = value / 100
        if (value > 0) setIsVideoMuted(false)
        else setIsVideoMuted(true)
    }

    return (
        <div className={cx('container')}>
            {/* <Link className={cx('container')} to=""> */}
            {/* phần thông tin của video */}
            <ImageCustomize src={srcAuthorAvatar} className={cx('author-avatar')}></ImageCustomize>
            <div className={cx('content')}>
                <div className={cx('infor')}>
                    <Link className={cx('author-names')} to="">
                        <h3 className={cx('name')}>
                            Bao ly
                            <Icon_BlueTick className={cx('icon-blue-tick')}></Icon_BlueTick>
                        </h3>
                        <h4 className={cx('nickname')}>A lyy 👀🐱‍🚀</h4>
                    </Link>
                    <ButtonCustomize outline className={cx('btn-follow')}>
                        Follow
                    </ButtonCustomize>
                    <div className={cx('description')}>Clip hôm qua bị cảnh báo nên nay quay bù</div>
                    <h4 className={cx('music')}>
                        <Link to="">
                            <Icon_Music className={cx('icon_music')}></Icon_Music>Quẩy Theo Pháp Sư Trung Hoa - Face
                            Remix - VGEE
                        </Link>
                    </h4>
                </div>

                {/* Phần Video */}
                <div className={cx('video-container')}>
                    {/* <img
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/bec8cda1a29b4e9a858507cdab261196_1667307263~tplv-f5insbecw7-1:720:720.jpeg?x-expires=1667808000&x-signature=1gTKHUYzd2a%2FCp05ZsN8HiiqyQs%3D"
                        loading="lazy"
                    ></img> */}
                    <div
                        className={cx('video')}
                        onMouseOver={() => {
                            setIsControlBtns(true)
                        }}
                        onMouseOut={() => {
                            setIsControlBtns(false)
                        }}
                    >
                        <video autoPlay loop muted={isVideoMuted} ref={videoRef}>
                            <source src={srcVideo} type="video/mp4"></source>
                        </video>

                        {/* Các nút control video */}

                        {isControlBtns && (
                            <>
                                <div className={cx('report-btn')}>
                                    <Icon_Report className={cx('icon-report-btn')}></Icon_Report>Report
                                </div>
                                <div className={cx('pause-play-btn')} onClick={handlePlayPauseVideo}>
                                    <Icon_PauseVideo pause={isVideoPaused}></Icon_PauseVideo>
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
                                                value={volume}
                                                className={cx('volumn-progress')}
                                                onChange={(e) => handleVolumeSound(e.target.value)}
                                            ></input>
                                        </div>
                                    )}
                                    <Icon_VideoSound mute={isVideoMuted} onClick={handleMuteVideo}></Icon_VideoSound>
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
                            21M
                        </div>
                        <div className={cx('btn')}>
                            <div className={cx('icon-wrap')}>
                                <Icon_Comment></Icon_Comment>
                            </div>
                            12.3k
                        </div>
                        <div className={cx('btn')}>
                            <div className={cx('icon-wrap')}>
                                <Icon_Share></Icon_Share>
                            </div>
                            5678
                        </div>
                    </div>
                </div>
            </div>
            {/* </Link> */}
        </div>
    )
}

export default RenderVideo

import classNames from 'classnames/bind'
import { useEffect, useRef, useState } from 'react'
import RenderVideo from './authorVideo'
import * as videosService from '~/Services/videosService'

function MainPlayVideo() {
    const [videosList, setVideosList] = useState([])
    // console.log(videosList)
    const [scrollY, setScrollY] = useState(0)

    const [volume, setvolume] = useState(0)
    const [isVideoMuted, setIsVideoMuted] = useState(true)
    const [volumeBeforeMute, setVolumeBeforeMute] = useState(100)
    const [currentVolume, setCurrentVolume] = useState(0)
    const [isVideoPaused, setIsVideoPause] = useState(true)

    console.log('--------------')

    const handleMuteVideo = () => {
        if (isVideoMuted === true) {
            setIsVideoMuted(false)
            setvolume(volumeBeforeMute)
            // console.log(volume)
            // videoRef.current.volume = volumeBeforeMute / 100
            setCurrentVolume(volumeBeforeMute / 100)
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
        // videoRef.current.volume = value / 100
        setCurrentVolume(value / 100)
        if (value > 0) setIsVideoMuted(false)
        else setIsVideoMuted(true)
    }

    const handlePlayPauseVideo = () => {
        setIsVideoPause(!isVideoPaused)
    }

    useEffect(() => {
        const loadVideo = async () => {
            try {
                const res = await videosService.getVideoList('for-you', 1)
                setVideosList(res)
            } catch (error) {}
        }

        loadVideo()
    }, [])

    window.onscroll = function () {
        // console.log(window.scrollY)
        setScrollY(window.scrollY)
    }

    return (
        <div>
            {videosList.map((data, index) => (
                <RenderVideo
                    key={index}
                    index={index}
                    data={data}
                    scrollY={scrollY}
                    onClickMute={handleMuteVideo}
                    onChange={handleVolumeSound}
                    volume={volume}
                    isVideoMuted={isVideoMuted}
                    currentVolume={currentVolume}
                    onClickPause={handlePlayPauseVideo}
                    isVideoPaused={isVideoPaused}
                ></RenderVideo>
            ))}
        </div>
    )
}

export default MainPlayVideo

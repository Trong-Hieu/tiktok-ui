import classNames from 'classnames/bind'
import ButtonCustomize from '~/Components/Button'
import styles from './UploadCard.module.scss'

const cx = classNames.bind(styles)

function UploadVideoCard() {
    return (
        <div className={cx('uploader')}>
            <input type="file" accept="video/*" className={cx('file-video')}></input>
            <div className={cx('before-upload-video')}>
                <img
                    src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg"
                    alt=""
                    className={cx('cloud-icon')}
                    width="40px"
                    height="29px"
                ></img>
                <span className={cx('text-main')}>Select video to upload</span>
                <span className={cx('text-sub')}>Or drag and drop a file</span>
                <div className={cx('text-video-info')}>
                    <span>MP4 or WebM</span>
                    <span>720x1280 resolution or higher</span>
                    <span>Up to 10 minutes</span>
                    <span>Less than 2 GB</span>
                </div>
                <ButtonCustomize primary className={cx('btn-select-video')}>
                    Select file
                </ButtonCustomize>
            </div>
        </div>
    )
}

export default UploadVideoCard

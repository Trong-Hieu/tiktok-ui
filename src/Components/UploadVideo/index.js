import classNames from 'classnames/bind'
import Footer from '../footer'
import UploadVideoCard from './UploadCard'
import UploadVideoForm from './UploadForm'
import styles from './UploadVideo.module.scss'

const cx = classNames.bind(styles)

function UploadVideo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <span className={cx('title')}>Upload video</span>
                <span className={cx('sub-title')}>Post a video to your account</span>
                <div className={cx('content')}>
                    <UploadVideoCard></UploadVideoCard>
                    <UploadVideoForm></UploadVideoForm>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default UploadVideo

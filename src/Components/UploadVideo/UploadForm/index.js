import classNames from 'classnames/bind'
import ButtonCustomize from '~/Components/Button'
import CheckboxCustomize from '~/Components/Checkbox'
import styles from './UploadForm.module.scss'

const cx = classNames.bind(styles)

function UploadVideoForm() {
    return (
        <form className={cx('upload-form')}>
            <div className={cx('caption')}>
                <div className={cx('caption-text')}>
                    <span className={cx('text-title')}>Caption</span>
                    <span className={cx('letters-count')}>0 / 150</span>
                </div>
                <div className={cx('caption-input')}>
                    <input type="text"></input>
                    <img
                        src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/at.062a03e9.svg"
                        alt=""
                    ></img>
                    <img
                        src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/hashtag.234f1b9c.svg"
                        alt=""
                    ></img>
                </div>
            </div>

            <div className={cx('cover')}>
                <span className={cx('text-title')}>Cover</span>
                <div className={cx('cover-input')}>
                    <div className={cx('candidate')}></div>
                </div>
            </div>

            <div className={cx('retriction-section')}>
                <span className={cx('text-title')}>Who can watch this video</span>
                <select className={cx('section')}>
                    <option value="public">Public</option>
                    <option value="friends">Friends</option>
                    <option value="private">Private</option>
                </select>
            </div>

            <div className={cx('users-permistion')}>
                <span className={cx('text-title')}>Allow users to:</span>
                <div className={cx('check-fill')}>
                    <CheckboxCustomize label="Comment" id="comment" defaultIsChecked={true}></CheckboxCustomize>
                    <CheckboxCustomize label="Duet" id="duet" defaultIsChecked={true}></CheckboxCustomize>
                    <CheckboxCustomize label="Stitch" id="stitch" defaultIsChecked={true}></CheckboxCustomize>
                </div>
            </div>

            <div className={cx('copyright-check')}>
                <span className={cx('text-title')}>Run a copyright check</span>
                <CheckboxCustomize switchbox id="switch-btn"></CheckboxCustomize>
            </div>
            <div className={cx('copyright')}>
                <span>
                    We'll check your video for potential copyright infringements on used sounds. If infringements are
                    found, you can edit the video before posting.
                </span>
                <span style={{ color: '#161823', fontWeight: 600 }}> Learn more</span>
            </div>
            <div className={cx('btn-row')}>
                <ButtonCustomize className={cx('action-btns')}>Discard</ButtonCustomize>
                <ButtonCustomize disabled className={cx('action-btns')}>
                    Post
                </ButtonCustomize>
            </div>
        </form>
    )
}

export default UploadVideoForm

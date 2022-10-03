import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faKeyboard, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faUser, faSnowflake, faCircleQuestion } from '@fortawesome/free-regular-svg-icons'

const UserMenuItem = [
    {
        icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
        title: 'View profile',
    },
    {
        icon: <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>,
        title: 'Get coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
        title: 'Setting',
    },
    {
        icon: <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>,
        title: 'English',
        child: {
            type: 'Laguage',
            data: [
                {
                    id: 1,
                    title: 'English',
                },
                {
                    id: 2,
                    title: 'VietNam',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and help',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon>,
        title: 'Log out',
        separate: 'true',
    },
]

export default UserMenuItem

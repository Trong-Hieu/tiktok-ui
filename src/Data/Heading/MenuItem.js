import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faCircleQuestion, faKeyboard } from '@fortawesome/free-solid-svg-icons'

const menuItem = [
    {
        icon: <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>,
        title: 'English',
        child: [
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
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and help',
        to: '/feeadback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard shortcuts',
    },
]

export default menuItem

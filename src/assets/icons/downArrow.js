function Icon_DownArrow({ width = '1em', height = '1em', color = 'currentColor', className, onClick }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 48 48"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            onClick={onClick}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.5187 35.2284C24.7205 36.1596 23.2798 36.1596 22.4816 35.2284L8.83008 19.3016C7.71807 18.0042 8.63988 16 10.3486 16H37.6517C39.3604 16 40.2822 18.0042 39.1702 19.3016L25.5187 35.2284Z"
            ></path>
        </svg>
    )
}

export default Icon_DownArrow

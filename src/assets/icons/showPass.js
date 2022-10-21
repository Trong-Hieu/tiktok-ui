function Icon_Showpass({ width = '1em', height = '1em', className, onClick }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            width={width}
            height={height}
            className={className}
            onClick={onClick}
        >
            <g
                stroke="#161823"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                opacity="0.5"
            >
                <path d="M2.8 7.8c2.1 1 4.5 1.6 7 1.6s4.9-.6 7-1.6M9.8 9.8v3M5.1 9.2l-1.5 2.6M14.6 9.2l1.5 2.6"></path>
            </g>
        </svg>
    )
}

export default Icon_Showpass

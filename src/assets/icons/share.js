function Icon_Share({ width = '24', height = '24', color = 'currentColor', className, onClick }) {
    return (
        <svg
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            width={width}
            height={height}
            className={className}
            onClick={onClick}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9376 3.17495C10.9376 2.58272 11.6469 2.27873 12.0758 2.68715L18.6021 8.90241C19.1764 9.44937 19.1564 10.3717 18.5588 10.8931L12.0541 16.5689C11.6184 16.9491 10.9376 16.6397 10.9376 16.0614V13.4894C10.9376 13.4894 3.95344 12.2312 1.7131 16.3434C1.50423 16.7268 0.690072 16.8609 0.855563 14.948C1.54761 11.4273 2.96196 5.93084 10.9376 5.93084V3.17495Z"
                fill={color}
            ></path>
            <path
                opacity="0.03"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.7538 6.21161L17.0486 8.80136C17.2777 9.25947 17.1677 9.81453 16.7812 10.1506L10.9824 15.193C10.9824 15.193 10.7017 16.5964 11.5437 16.5964C12.3857 16.5964 19.1218 10.4217 19.1218 10.4217C19.1218 10.4217 19.4025 9.57964 18.5605 8.73763C17.7185 7.89563 15.7538 6.21161 15.7538 6.21161Z"
                fill="#161823"
            ></path>
            <path
                opacity="0.09"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9374 6.22983V13.5272C10.9374 13.5272 4.25359 12.5854 2.16026 15.7726C0.146021 18.8394 0.331011 12.3091 3.36331 9.05711C6.39561 5.8051 10.9374 6.22983 10.9374 6.22983Z"
                fill="url(#paint0_radial)"
            ></path>
        </svg>
    )
}

export default Icon_Share

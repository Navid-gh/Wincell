import type { SvgIconType } from "../../../types/IconType";

const Trash: SvgIconType = ({ fill, ...props }) => {
    fill = fill || '#fff';
    return (
        <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_3522_3974)" fill={fill} fillOpacity={0.7}>
                <path d="M21 4h-3.1A5.01 5.01 0 0013 0h-2a5.009 5.009 0 00-4.9 4H3a1 1 0 000 2h1v13a5.006 5.006 0 005 5h6a5.006 5.006 0 005-5V6h1a1 1 0 100-2zM11 2h2a3.006 3.006 0 012.829 2H8.171A3.006 3.006 0 0111 2zm7 17a3 3 0 01-3 3H9a3 3 0 01-3-3V6h12v13z" />
                <path d="M10 18a1 1 0 001-1v-6a1 1 0 00-2 0v6a1 1 0 001 1zM14 18a1 1 0 001-1v-6a1 1 0 10-2 0v6a1 1 0 001 1z" />
            </g>
            <defs>
                <clipPath id="clip0_3522_3974">
                    <path fill={fill} d="M0 0H24V24H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default Trash;

// #1A1C21

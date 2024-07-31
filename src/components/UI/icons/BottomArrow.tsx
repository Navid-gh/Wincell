import type { SvgIconType } from "../../../types/IconType";

const BottomArrow: SvgIconType = ({ fill, ...props }) => {
    fill = fill || '#070D04';
    return (
        <svg
            width={25}
            height={25}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M19.561 8.354a1.5 1.5 0 00-2.122 0l-4.586 4.585a.5.5 0 01-.707 0L7.561 8.354a1.5 1.5 0 10-2.122 2.121l4.586 4.586a3.5 3.5 0 004.95 0l4.586-4.586a1.5 1.5 0 000-2.121z"
                fill='fill'
            />
        </svg>
    )
}

export default BottomArrow;

import type { SvgIconType } from "../../../types/IconType";

const SvgComponent: SvgIconType = ({ fill, ...props }) => {
    fill = fill || "1A1C21";
    return (
        <svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M1.513 15.987l4.166 4.166a3 3 0 004.242 0L22.787 7.287a1 1 0 00-1.414-1.414L8.507 18.739a1 1 0 01-1.414 0l-4.166-4.166a1 1 0 00-1.414 1.414z"
                fill={fill}
                fillOpacity={0.7}
            />
        </svg>
    )
}

export default SvgComponent

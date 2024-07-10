import type { SvgIconType } from "../../../types/IconType";

const Copy: SvgIconType = ({ id, fill, ...props }) => {
  fill = fill || "#070D04";
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2998_5435)">
        <path
          d="M15 20H5a5.006 5.006 0 01-5-5V5a5.006 5.006 0 015-5h10a5.006 5.006 0 015 5v10a5.006 5.006 0 01-5 5zM5 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V5a3 3 0 00-3-3H5zm19 17V6a1 1 0 00-2 0v13a3 3 0 01-3 3H6a1 1 0 000 2h13a5.006 5.006 0 005-5z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_2998_5435">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Copy;

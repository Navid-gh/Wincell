import type { SvgIconType } from "../../../types/IconType";

const UserBoard: SvgIconType = ({ id, fill, ...props }) => {
  fill = fill || "#070D04";
  return (
    <svg
      width={18}
      height={19}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2873_1794)">
        <path
          d="M10.5 17.75a.75.75 0 01-.75.75h-9a.75.75 0 01-.75-.75 5.25 5.25 0 1110.5 0zM5.25 5a3 3 0 100 6 3 3 0 000-6zM18 4.25v6A3.75 3.75 0 0114.25 14h-3.395a6.798 6.798 0 00-2.879-2.42 4.5 4.5 0 00-4.96-7.487C3.1 2.1 4.736.5 6.75.5h7.5A3.75 3.75 0 0118 4.25zm-3 7.5a.75.75 0 00-.75-.75h-2.625a.75.75 0 100 1.5h2.625a.75.75 0 00.75-.75z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_2873_1794">
          <path fill="#fff" transform="translate(0 .5)" d="M0 0H18V18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UserBoard;

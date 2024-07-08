import type { SvgIconType } from "../../../types/IconType";

const Comment: SvgIconType = ({ id, fill, ...props }) => {
  fill = fill || "#070D04";
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3074_7163)">
        <path
          d="M14.756 2.069a8.952 8.952 0 00-6.9-1.994A9 9 0 009.012 18h5.237A3.754 3.754 0 0018 14.25V8.435a9.034 9.034 0 00-3.244-6.366zM6 5.25h3a.75.75 0 010 1.5H6a.75.75 0 010-1.5zm6 7.5H6a.75.75 0 110-1.5h6a.75.75 0 010 1.5zm0-3H6a.75.75 0 010-1.5h6a.75.75 0 110 1.5z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_3074_7163">
          <path fill="#fff" d="M0 0H18V18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Comment;

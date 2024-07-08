import type { SvgIconType } from "../../../types/IconType";

const Share: SvgIconType = ({ id, fill, ...props }) => {
  fill = fill || "#070D04";
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2914_3836)">
        <path
          d="M19.333 15.168a4.66 4.66 0 00-3.839 2.024l-6.509-2.94a4.574 4.574 0 00.005-3.488l6.5-2.954a4.66 4.66 0 10-.827-2.643c.004.264.031.527.08.786l-6.91 3.14a4.668 4.668 0 10-.015 6.828l6.928 3.128a4.732 4.732 0 00-.079.785 4.667 4.667 0 104.666-4.666zm0-12.668a2.667 2.667 0 11.002 5.335 2.667 2.667 0 01-.002-5.335zM4.667 15.168a2.667 2.667 0 11-.002-5.335 2.667 2.667 0 01.002 5.335zM19.333 22.5a2.667 2.667 0 110-5.333 2.667 2.667 0 010 5.333z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_2914_3836">
          <path fill="#fff" transform="translate(0 .5)" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Share;

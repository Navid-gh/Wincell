import type { SvgIconType } from "../../../types/IconType";

const Clock: SvgIconType = ({ id, fill, ...props }) => {
  fill = fill || "#070D04";
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2873_1790)">
        <path
          d="M9 .41a9 9 0 109 9 9.01 9.01 0 00-9-9zm.75 8.908a.75.75 0 01-.352.636l-2.88 1.8a.752.752 0 11-.796-1.275L8.25 8.903V5.659a.75.75 0 011.5 0v3.66z"
          fill="#070D04"
        />
      </g>
      <defs>
        <clipPath id="clip0_2873_1790">
          <path fill="#fff" transform="translate(0 .41)" d="M0 0H18V18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Clock;

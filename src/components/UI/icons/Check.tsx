import type { SvgIconType } from "../../../types/IconType";

const Check: SvgIconType = ({ id, fill, ...props }) => {
  fill = fill || "#070D04";
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3070_6571)">
        <path
          d="M6.418.014A6 6 0 00.015 6.427C.235 9.604 3.04 12 6.542 12H9.5A2.503 2.503 0 0012 9.5V6.17A6.104 6.104 0 006.418.014zM9.35 4.856L5.954 8.209a1 1 0 01-1.412 0L2.65 6.357a.5.5 0 01.7-.715l1.897 1.854 3.402-3.35a.5.5 0 01.7.712l.001-.002z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_3070_6571">
          <path fill="#fff" d="M0 0H12V12H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Check;

import type { SvgIconType } from "../../../types/IconType";

const Play: SvgIconType = ({ id, fill, ...props }) => {
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
      <g clipPath="url(#clip0_2914_1778)">
        <path
          d="M11.117 8.901a.244.244 0 01.127.22.235.235 0 01-.09.199l-4.029 2.016a.253.253 0 01-.375-.22V7.125a.245.245 0 01.244-.25c.06.001.12.019.17.05l3.953 1.976zM18 3.871v10.5a3.754 3.754 0 01-3.75 3.75H3.75A3.755 3.755 0 010 14.37V3.87A3.755 3.755 0 013.75.12h10.5A3.754 3.754 0 0118 3.87zm-5.256 5.25a1.749 1.749 0 00-.92-1.542L7.867 5.603a1.753 1.753 0 00-2.625 1.522v3.991a1.735 1.735 0 00.873 1.516c.27.158.577.241.89.242.289.002.573-.073.825-.216l4.032-2.016a1.734 1.734 0 00.883-1.522z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_2914_1778">
          <path fill="#fff" transform="translate(0 .12)" d="M0 0H18V18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Play;

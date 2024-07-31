import type { SvgIconType } from "../../../types/IconType";

const AppsSort: SvgIconType = ({ fill, ...props }) => {
  fill = fill || "#fff";
  return (
    <svg
      width={"100%"}
      height={"100%"}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2914_2527)" fill={fill}>
        <path d="M5.167.5h-2A2.667 2.667 0 00.5 3.167v2a2.667 2.667 0 002.667 2.666h2a2.667 2.667 0 002.666-2.666v-2A2.667 2.667 0 005.167.5zM5.167 9.167h-2A2.667 2.667 0 00.5 11.833v2A2.667 2.667 0 003.167 16.5h2a2.667 2.667 0 002.666-2.667v-2a2.667 2.667 0 00-2.666-2.666zM15.362 13.25l-1.529 1.527V2.223l1.529 1.526a.668.668 0 00.943-.943L14.58 1.084a2 2 0 00-2.827 0L10.03 2.806a.667.667 0 00.942.943L12.5 2.223v12.554l-1.529-1.526a.667.667 0 00-.942.944l1.724 1.722a2.004 2.004 0 002.827 0l1.725-1.722a.667.667 0 10-.943-.944z" />
      </g>
      <defs>
        <clipPath id="clip0_2914_2527">
          <path fill={fill} transform="translate(.5 .5)" d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AppsSort;

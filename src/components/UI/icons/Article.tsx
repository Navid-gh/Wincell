import { SVGProps, FC } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const Article: FC<SVGElementProps> = ({ id, fill, ...props }) => {
  fill = fill || "#484D57";
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2996_2031)">
        <path
          d="M7.334 12.346a4.333 4.333 0 017.333-3.123V2.68a2 2 0 00-2-2h-8a3.337 3.337 0 00-3.333 3.334v9.333a3.337 3.337 0 003.333 3.333h7a4.333 4.333 0 01-4.333-4.333zm-2.667-7a.667.667 0 01.667-.667h5.333a.667.667 0 110 1.334H5.334a.667.667 0 01-.667-.667zm11.138 11.138a.667.667 0 01-.942 0l-1.605-1.605a2.971 2.971 0 01-3.257-.039 3 3 0 114.666-2.494 2.97 2.97 0 01-.466 1.59l1.604 1.605a.667.667 0 010 .943z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_2996_2031">
          <path fill="#fff" transform="translate(0 .68)" d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Article;

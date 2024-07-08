import { SVGProps, FC } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const Grade: FC<SVGElementProps> = ({ fill, ...props }) => {
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
      <g clipPath="url(#clip0_2873_1787)">
        <path
          d="M18 7.133v8.64a.75.75 0 01-1.5 0V9.587l-5.55 2.652a3.75 3.75 0 01-1.933.52 3.954 3.954 0 01-2.025-.554L1.457 9.57a2.768 2.768 0 010-4.875L7.05 2.027a3.92 3.92 0 013.961.034l5.532 2.634A2.825 2.825 0 0118 7.133zm-8.984 7.125a5.446 5.446 0 01-2.733-.729L3 11.962v2.025a3.755 3.755 0 002.64 3.584c1.091.313 2.224.466 3.36.452a11.67 11.67 0 003.36-.455A3.755 3.755 0 0015 13.984v-2.018l-3.344 1.598a5.238 5.238 0 01-2.64.695v-.001z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_2873_1787">
          <path fill="#fff" transform="translate(0 .773)" d="M0 0H18V18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Grade;

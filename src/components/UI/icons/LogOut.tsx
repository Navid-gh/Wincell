import { SVGProps, FC } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const LogOut: FC<SVGElementProps> = ({ id, fill, ...props }) => {
  fill = fill || "#484D57";
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill={fill} clipPath="url(#clip0_2996_2042)">
        <path d="M15.221 6.114l-2.586-2.586a.667.667 0 00-.942.943l2.586 2.586c.077.078.144.165.2.26-.01 0-.018-.006-.028-.006l-10.456.022a.667.667 0 100 1.333l10.452-.021c.018 0 .034-.01.052-.01a1.33 1.33 0 01-.223.307l-2.586 2.586a.667.667 0 10.943.943l2.586-2.586a2.667 2.667 0 000-3.77h.002z" />
        <path d="M4.669 14.667H3.335a2 2 0 01-2-2V3.333a2 2 0 012-2H4.67a.667.667 0 100-1.333H3.335A3.337 3.337 0 00.002 3.333v9.334A3.337 3.337 0 003.335 16H4.67a.667.667 0 000-1.333z" />
      </g>
      <defs>
        <clipPath id="clip0_2996_2042">
          <path fill="#fff" d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LogOut;

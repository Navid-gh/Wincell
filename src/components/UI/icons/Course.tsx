import { SVGProps, FC } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const Course: FC<SVGElementProps> = ({ id, fill, ...props }) => {
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
      <g clipPath="url(#clip0_2996_2028)" fill={fill}>
        <path d="M11.334.68h-6v10.666h9.333V4.013A3.333 3.333 0 0011.334.679zM2.93 11.386c.133-.027.269-.04.404-.04h.667V.746a3.333 3.333 0 00-2.667 3.267v8.016a3.302 3.302 0 011.597-.643zM14.667 12.68H3.334a2 2 0 100 4h8a3.334 3.334 0 003.333-3.334v-.667z" />
      </g>
      <defs>
        <clipPath id="clip0_2996_2028">
          <path fill="#fff" transform="translate(0 .68)" d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Course;

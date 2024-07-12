import type { SvgIconType } from "../../../types/IconType";

const DoubleArrow: SvgIconType = ({ id, fill, ...props }) => {
  fill = fill || "#484D57";
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.482 19.5a1.5 1.5 0 01-1.06-.439l-4.586-4.586a3.505 3.505 0 010-4.95L9.422 4.94a1.5 1.5 0 012.121 2.122l-4.586 4.585a.5.5 0 000 .708l4.586 4.585a1.5 1.5 0 01-1.06 2.561z"
        fill={fill}
      />
      <path
        d="M17.482 19.5a1.5 1.5 0 01-1.06-.439l-6-6a1.5 1.5 0 010-2.122l6-6a1.5 1.5 0 112.121 2.122l-4.943 4.94 4.94 4.938a1.5 1.5 0 01-1.058 2.561z"
        fill={fill}
      />
    </svg>
  );
};

export default DoubleArrow;

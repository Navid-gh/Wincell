import type { SvgIconType } from "../../../types/IconType";

const Support: SvgIconType = ({ id, fill, ...props }) => {
  fill = fill || "#070D04";
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.75 16.5a1.5 1.5 0 001.5-1.5v-4.5A1.5 1.5 0 003.75 9v-.75a5.25 5.25 0 0110.5 0V9a1.5 1.5 0 00-1.5 1.5V15H10.5a.75.75 0 100 1.5h3.75a3.75 3.75 0 001.5-7.182V8.25a6.75 6.75 0 10-13.5 0v1.068a3.75 3.75 0 001.5 7.182z"
        fill={fill}
      />
    </svg>
  );
};

export default Support;

import type { SvgIconType } from "../../../types/IconType";

const Subtitle: SvgIconType = ({ id, fill, ...props }) => {
  fill = fill || "#070D04";
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.25.182H3.75A3.755 3.755 0 000 3.932v7.5a3.754 3.754 0 003.75 3.75h10.5a3.754 3.754 0 003.75-3.75v-7.5a3.755 3.755 0 00-3.75-3.75zm-10.5 6.75h1.5a.75.75 0 110 1.5h-1.5a.75.75 0 010-1.5zm6 5.25h-6a.75.75 0 110-1.5h6a.75.75 0 110 1.5zm4.5 0h-1.5a.75.75 0 110-1.5h1.5a.75.75 0 110 1.5zm0-3.75h-6a.75.75 0 010-1.5h6a.75.75 0 110 1.5z"
        fill="#070D04"
      />
    </svg>
  );
};

export default Subtitle;

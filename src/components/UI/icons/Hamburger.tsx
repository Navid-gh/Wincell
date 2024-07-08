import type { SvgIconType } from "../../../types/IconType";

const Hamburger: SvgIconType = ({ fill, ...props }) => {
  fill = fill || "#000";
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 18h16M4 12h16M4 6h16"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Hamburger;

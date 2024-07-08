import type { SvgIconType } from "../../../types/IconType";

const Twitter: SvgIconType = ({ id, fill, ...props }) => {
  fill = fill || "#fff";
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.154.94l6.92 9.253L.11 17.716H1.68l6.095-6.587 4.925 6.587h5.333l-7.308-9.774L17.204.94h-1.567l-5.613 6.067L5.488.939H.155zM2.46 2.093h2.449l10.818 14.468h-2.45L2.46 2.094z"
        fill={fill}
      />
    </svg>
  );
};

export default Twitter;

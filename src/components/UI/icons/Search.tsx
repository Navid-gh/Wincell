import { SVGProps, FC } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const SearchIcon: FC<SVGElementProps> = ({ id, fill, ...props }) => {
  fill = fill || "#070D04";
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      {...props}
    >
      <path
        d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;

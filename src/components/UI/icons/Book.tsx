import { SVGProps, FC } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const Book: FC<SVGElementProps> = ({ id, fill, ...props }) => {
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
      <path
        d="M14.8 1.442a3.333 3.333 0 00-2.771-.713l-1.176.288a2.667 2.667 0 00-2.186 2.624v10.31a4.61 4.61 0 01-1.334 0V3.642a2.654 2.654 0 00-2.15-2.616L3.933.721A3.333 3.333 0 000 4v7.195a3.334 3.334 0 002.737 3.28l4.19.761a6 6 0 002.146 0l4.194-.761A3.333 3.333 0 0016 11.195V4a3.322 3.322 0 00-1.2-2.558z"
        fill={fill}
      />
    </svg>
  );
};

export default Book;

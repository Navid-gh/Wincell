import { SVGProps, FC } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const FilledHeart: FC<SVGElementProps> = ({ id, fill, ...props }) => {
  fill = fill || "#070D04";
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5.917a6.4 6.4 0 00-5.5 3.3 6.4 6.4 0 00-5.5-3.3A6.8 6.8 0 000 7.967c0 4.547 4.787 9.513 8.8 12.88a4.974 4.974 0 006.4 0c4.015-3.367 8.8-8.334 8.8-12.88a6.8 6.8 0 00-6.5-7.05z"
        fill={fill}
      />
    </svg>
  );
};

export default FilledHeart;

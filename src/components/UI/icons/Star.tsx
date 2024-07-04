import { SVGProps, FC } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const Star: FC<SVGElementProps> = ({ id, fill, ...props }) => {
  fill = fill || "#070D04";
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      {...props}
    >
      <path
        d="M.66 6.297l1.78 1.301-.676 2.095a1.59 1.59 0 00.593 1.807 1.59 1.59 0 001.9-.01L6 10.21l1.742 1.28a1.615 1.615 0 002.493-1.796l-.677-2.095 1.781-1.3a1.614 1.614 0 00-.95-2.918H8.2l-.664-2.07a1.614 1.614 0 00-3.074 0l-.664 2.07H1.612a1.614 1.614 0 00-.95 2.917H.66z"
        fill={fill}
      />
    </svg>
  );
};

export default Star;

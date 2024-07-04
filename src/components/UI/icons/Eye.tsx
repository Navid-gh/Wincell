import { SVGProps, FC } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const Eye: FC<SVGElementProps> = ({ id, fill, ...props }) => {
  fill = fill || "#070D04";
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 15.998a3.998 3.998 0 100-7.996 3.998 3.998 0 000 7.996z"
        fill={fill}
      />
      <path
        d="M23.267 9.42C21.717 6.895 18.19 2.66 12 2.66 5.81 2.659 2.284 6.895.733 9.42a4.906 4.906 0 000 5.16C2.283 17.105 5.81 21.342 12 21.342c6.19 0 9.716-4.237 11.267-6.762a4.906 4.906 0 000-5.16zM12 17.998A5.998 5.998 0 1117.998 12 6.004 6.004 0 0112 17.998z"
        fill={fill}
      />
    </svg>
  );
};

export default Eye;

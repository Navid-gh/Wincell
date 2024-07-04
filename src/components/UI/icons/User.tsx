import { SVGProps, FC } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const User: FC<SVGElementProps> = ({ id, fill, ...props }) => {
  fill = fill || "#484D57";
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      {...props}
    >
      <path
        d="M7 7a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM7 8.166a5.256 5.256 0 00-5.25 5.25c0 .322.261.583.583.583h9.334a.583.583 0 00.583-.583A5.256 5.256 0 007 8.166z"
        fill={fill}
      />
    </svg>
  );
};

export default User;

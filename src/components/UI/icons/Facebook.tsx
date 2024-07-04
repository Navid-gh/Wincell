import { SVGProps, FC } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const Facebook: FC<SVGElementProps> = ({ id, fill, ...props }) => {
  fill = fill || "#fff";
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 14 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.15 5.37v3.27h4.043l-.64 4.403H9.15V23.19a15.208 15.208 0 01-4.492-.047V13.043H.93V8.64h3.728v-4A4.493 4.493 0 019.151.146v.002l.021-.002h4.022v3.808h-2.628c-.781 0-1.415.634-1.415 1.415l-.001.001z"
        fill={fill}
      />
    </svg>
  );
};

export default Facebook;

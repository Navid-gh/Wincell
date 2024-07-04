import { SVGProps, FC } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const LeftArrow: FC<SVGElementProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 59.92 116.97"
      {...props}
    >
      <path
        d="M57.45 114.54a8.36 8.36 0 000-11.82l-38.26-38.3a8.37 8.37 0 01-.05-11.82l.05-.05 38.26-38.26a8.34 8.34 0 000-11.81 8.35 8.35 0 00-11.78 0L7.33 40.77a25.07 25.07 0 000 35.42l38.34 38.35a8.35 8.35 0 0011.78 0z"
        data-name="Layer 2"
      />
    </svg>
  );
};

export default LeftArrow;

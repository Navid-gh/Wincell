import { SVGProps, FC } from "react";

type SVGElementProps = SVGProps<SVGSVGElement>;

const Cross: FC<SVGElementProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.17 9.41" {...props}>
      <g data-name="Layer 2">
        <g data-name={600}>
          <path d="M8.83 8.06L1.63.18a.78.78 0 00-1.09.1.79.79 0 00-.2 1.08l7.19 7.88a.81.81 0 001.1-.1.8.8 0 00.2-1.08z" />
          <path d="M1.39 9.07L9 1.6A.79.79 0 008.87.51.79.79 0 007.78.35L.16 7.82A.79.79 0 00.3 8.91a.81.81 0 001.09.16z" />
        </g>
      </g>
    </svg>
  );
};

export default Cross;

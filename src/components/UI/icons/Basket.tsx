import { SVGProps, FC } from "react";

type SVGElementProps = SVGProps<SVGSVGElement> & {
  isGreen?: boolean;
};

const Basket: FC<SVGElementProps> = ({ id, isGreen, fill, ...props }) => {
  fill = fill || "#070D04";
  fill = isGreen ? "#89FF4D" : fill;
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      {...props}
    >
      <g clipPath="url(#clip0_2812_1988)" fill={fill}>
        <path d="M24.79 5.157a3.163 3.163 0 00-2.434-1.138H5.273l-.044-.371a3.17 3.17 0 00-3.147-2.8h-.234a1.057 1.057 0 100 2.114h.234a1.057 1.057 0 011.05.933l1.453 12.362a5.283 5.283 0 005.247 4.667h11.034a1.057 1.057 0 100-2.113H9.832a3.17 3.17 0 01-2.98-2.113h12.596a5.283 5.283 0 005.199-4.346l.83-4.6a3.163 3.163 0 00-.687-2.595zm-1.388 2.22l-.83 4.6a3.17 3.17 0 01-3.124 2.608H6.517l-.995-8.453h16.834a1.057 1.057 0 011.046 1.245zM8.187 26.208a2.113 2.113 0 100-4.226 2.113 2.113 0 000 4.226zM18.754 26.208a2.113 2.113 0 100-4.226 2.113 2.113 0 000 4.226z" />
      </g>
      <defs>
        <clipPath id="clip0_2812_1988">
          <path
            fill="#fff"
            transform="translate(.791 .849)"
            d="M0 0H25.3585V25.3585H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Basket;

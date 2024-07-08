import type { SvgIconType } from "../../../types/IconType";

const Heart: SvgIconType = ({ id, fill, ...props }) => {
  fill = fill || "#070D04";
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2846_2170)">
        <path
          d="M14.584 2.097A5.334 5.334 0 0010 4.847a5.333 5.333 0 00-4.583-2.75A5.667 5.667 0 000 7.972c0 3.79 3.988 7.928 7.333 10.733a4.145 4.145 0 005.334 0C16.012 15.9 20 11.762 20 7.973a5.666 5.666 0 00-5.416-5.875zM11.596 17.43a2.478 2.478 0 01-3.192 0c-4.281-3.592-6.737-7.039-6.737-9.458a4 4 0 013.75-4.208 4 4 0 013.75 4.208.833.833 0 001.667 0 4 4 0 013.75-4.208 4 4 0 013.75 4.208c0 2.42-2.456 5.866-6.738 9.455v.003z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_2846_2170">
          <path fill="#fff" transform="translate(0 .5)" d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Heart;

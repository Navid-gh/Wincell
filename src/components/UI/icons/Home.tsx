import type { SvgIconType } from "../../../types/IconType";

const Home: SvgIconType = ({ id, fill, ...props }) => {
  fill = fill || "#484D57";
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill={fill} clipPath="url(#clip0_2924_2551)">
        <path d="M8 10.674a2 2 0 00-2 2v4h4v-4a2 2 0 00-2-2z" />
        <path d="M11.333 12.674v4H14a2 2 0 002-2v-6.08c0-.347-.134-.68-.375-.929L9.959 1.541a2.667 2.667 0 00-3.916 0L.387 7.663c-.248.25-.387.588-.387.94v6.071a2 2 0 002 2h2.667v-4c.012-1.818 1.48-3.302 3.252-3.345 1.831-.044 3.4 1.465 3.414 3.345z" />
        <path d="M8 10.674a2 2 0 00-2 2v4h4v-4a2 2 0 00-2-2z" />
      </g>
      <defs>
        <clipPath id="clip0_2924_2551">
          <path fill="#fff" transform="translate(0 .68)" d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Home;

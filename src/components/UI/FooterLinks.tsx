import { Link } from "react-router-dom";
import { FooterItem } from "../../constants/footerItems";
import { textBody3 } from "../../constants/styles";

type Props = {
  data: FooterItem[];
  type: string;
  title: string;
};

const FooterLinks = ({ data, type, title }: Props) => {
  return (
    <div className="flex-1 flex flex-col gap-2 min-w-40 mt-4">
      <span className="border-b-2 border-main-gray-200 border-solid pb-2 max-w-[10rem]">
        {title}
      </span>
      <ul className="flex flex-col gap-1">
        {data.map((item) =>
          type === "image" ? (
            <li
              key={item.key}
              className="transition-transform duration-300 hover:-translate-x-2"
            >
              <a
                className="flex flex-col gap-1"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-28" src={item.image} alt={item.name} />
                <span className={textBody3}>{item.imgTitle}</span>
              </a>
            </li>
          ) : (
            <li
              key={item.key}
              className="transition-transform duration-300 hover:-translate-x-2"
            >
              <Link to={item.link}>{item.name}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default FooterLinks;

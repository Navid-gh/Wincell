import { v4 as uuidv4 } from "uuid";
import { SvgIconType } from "../types/IconType";
import Courses from "../components/UI/icons/Courses";
import Blog from "../components/UI/icons/Blog";
import AboutUs from "../components/UI/icons/AboutUs";
import HelpCenter from "../components/UI/icons/HelpCenter";

export const summaryBoxesLinks: {
  title: string;
  url: string;
  IconComp: SvgIconType;
  id: string;
}[] = [
  {
    title: "دوره‌های وینسل",
    url: "/courses",
    IconComp: Courses,
    id: uuidv4(),
  },
  {
    title: "مقالات وینسل",
    url: "/articles",
    IconComp: Blog,
    id: uuidv4(),
  },
  {
    title: "درباره ما",
    url: "/about-us",
    IconComp: AboutUs,
    id: uuidv4(),
  },
  {
    title: "تماس با ما",
    url: "/contact-us",
    IconComp: HelpCenter,
    id: uuidv4(),
  },
];

import { v4 as uuidv4 } from "uuid";
import Basket from "../components/UI/icons/Basket";

type IconComp = React.FC<React.SVGProps<SVGSVGElement>>;

export const summaryBoxesLinks: {
  title: string;
  url: string;
  IconComp: IconComp;
  id: string;
}[] = [
  {
    title: "دوره های آنلاین",
    url: "/courses",
    IconComp: Basket,
    id: uuidv4(),
  },
  {
    title: "دوره های آنلاین",
    url: "/courses",
    IconComp: Basket,
    id: uuidv4(),
  },
  {
    title: "مقالات علمی",
    url: "/articles",
    IconComp: Basket,
    id: uuidv4(),
  },
  {
    title: "مقالات علمی",
    url: "/articles",
    IconComp: Basket,
    id: uuidv4(),
  },
];

import { v4 as uuidv4 } from "uuid";
import Home from "../components/UI/icons/Home";
import Course from "../components/UI/icons/Course";
import Article from "../components/UI/icons/Article";
import Support from "../components/UI/icons/Support";
import User from "../components/UI/icons/User";

export const navbarTabs = [
  {
    name: "خانه",
    path: "/",
    id: uuidv4(),
    icon: Home,
  },
  {
    name: "دوره ها",
    path: "/courses",
    id: uuidv4(),
    icon: Course,
  },
  {
    name: "مقالات",
    path: "/articles",
    id: uuidv4(),
    icon: Article,
  },
  {
    name: "پشتیبانی",
    path: "contact-us",
    icon: Support,
    key: uuidv4(),
  },
];

export const LoginUserTabs = [
  {
    name: "پنل",
    path: "/dashboard",
    id: uuidv4(),
    icon: User,
  },
  {
    name: "دوره های من",
    path: "/dashboard/courses",
    id: uuidv4(),
    icon: Course,
  },
];

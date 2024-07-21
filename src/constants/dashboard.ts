import { v4 as uuidv4 } from "uuid";
import Home from "../components/UI/icons/Home";
import Course from "../components/UI/icons/Course";
import FilledHeart from "../components/UI/icons/FilledHeart";
import Comment from "../components/UI/icons/Comment";
import User from "../components/UI/icons/User";
import LogOut from "../components/UI/icons/LogOut";
import Support from "../components/UI/icons/Support";
import UserBoard from "../components/UI/icons/UserBoard";

export const userNavItems = [
  {
    name: "داشبورد",
    link: "",
    id: uuidv4(),
    Icon: Home,
  },
  {
    name: "دوره‌های من",
    link: "courses",
    id: uuidv4(),
    Icon: Course,
  },
  {
    name: "پسندیده‌ها",
    link: "likes",
    id: uuidv4(),
    Icon: FilledHeart,
  },
  {
    name: "نظرات من",
    link: "comments",
    id: uuidv4(),
    Icon: Comment,
  },
  {
    name: "گواهی‌های من",
    link: "certificates",
    id: uuidv4(),
    Icon: UserBoard,
  },
  {
    name: "پروفایل",
    link: "profile",
    id: uuidv4(),
    Icon: User,
  },
  {
    name: "تماس با ما",
    link: "/contact-us",
    id: uuidv4(),
    Icon: Support,
  },
  {
    name: "خروج",
    link: "logout",
    id: uuidv4(),
    Icon: LogOut,
  },
];

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

export const adminNavItems = [
  {
    name: "داشبورد",
    link: "",
    id: uuidv4(),
  },
  {
    name: "دوره ها",
    link: "courses",
    id: uuidv4(),
  },
  {
    name: "مقالات",
    link: "articles",
    id: uuidv4(),
  },
  {
    name: "دسته بندی ها",
    link: "categories",
    id: uuidv4(),
  },
  {
    name: "فروش ها",
    link: "sales",
    id: uuidv4(),
  },
  {
    name: "مدیریت کامنت ها",
    link: "all/comments",
    id: uuidv4(),
  },
  {
    name: "مدیریت گواهی ها",
    link: "certificates",
    id: uuidv4(),
  },
  {
    name: "مدیریت تیکت ها",
    link: "tickets",
    id: uuidv4(),
  },
  {
    name: "مدیریت کاربران",
    link: "users",
    id: uuidv4(),
  },
  {
    name: "مدیریت اسلاید ها",
    link: "slides",
    id: uuidv4(),
  },
  {
    name: "مدیریت FAQ اصلی",
    link: "all/faq",
    id: uuidv4(),
  },
  {
    name: "مدیریت کد های تخفیف",
    link: "codes",
    id: uuidv4(),
  },
  {
    name: "بارگذاری",
    link: "upload",
    id: uuidv4(),
  },
];

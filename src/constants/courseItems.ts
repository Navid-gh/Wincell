import { v4 as uuidv4 } from "uuid";

export const courseNavItems = [
  {
    name: "پیش نیازها",
    link: "prerequisites",
    id: uuidv4(),
  },
  {
    name: "درباره‌ی دوره",
    link: "info",
    id: uuidv4(),
  },
  {
    name: "سرفصل های دوره",
    link: "chapters",
    id: uuidv4(),
  },
  {
    name: "نظرات کاربران",
    link: "comments",
    id: uuidv4(),
  },
  {
    name: "دوره های پیشنهادی",
    link: "related-courses",
    id: uuidv4(),
  },
];

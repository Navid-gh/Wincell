import { v4 as uuidv4 } from "uuid";
import { Uuid } from "../types/uuidType";

export type FooterItem = {
  name: string;
  link: string;
  image?: string;
  imgTitle?: string;
  key: Uuid;
};

export const fastAccessItems = [
  {
    name: "مقالات آموزشی",
    link: "/articles",
    key: uuidv4(),
  },
  {
    name: "دوره های آموزشی",
    link: "/courses",
    key: uuidv4(),
  },
];

export const linkItems = [
  {
    name: "پشتیبانی و سوالات متداول",
    link: "contact-us",
    key: uuidv4(),
  },
  {
    name: "درباره ما",
    link: "about-us",
    key: uuidv4(),
  },
];

export const externalLegalItems = [
  {
    name: "خیریه محک",
    link: "https://mahak-charity.org",
    image:
      "https://mahak-charity.org/wp-content/themes/kalhors-mahak/images/logo.svg",
    imgTitle: "مجموعه ی وینسل حامی محک میباشد",
    key: uuidv4(),
  },
];

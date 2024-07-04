import { v4 as uuidv4 } from "uuid";
import Telegram from "../components/UI/icons/Telegram";
import Instagram from "../components/UI/icons/Instagram";
import Facebook from "../components/UI/icons/Facebook";
import Twitter from "../components/UI/icons/Twitter";
import Whatsapp from "../components/UI/icons/Whatsapp";
import Youtube from "../components/UI/icons/Youtube";

export const socials = [
  {
    name: "تلگرام",
    link: "https://telegram.me/wincell",
    icon: Telegram,
    id: uuidv4(),
  },
  {
    name: "اینستاگرام",
    link: "https://instagram.com/wincell",
    icon: Instagram,
    id: uuidv4(),
  },
  {
    name: "فیس بوک",
    link: "https://facebook.com/wincell",
    icon: Facebook,
    id: uuidv4(),
  },
  {
    name: "توییتر",
    link: "https://twitter.com/wincell",
    icon: Twitter,
    id: uuidv4(),
  },
  {
    name: "واتساپ",
    link: "https://wa.me/+989123456789",
    icon: Whatsapp,
    id: uuidv4(),
  },
  {
    name: "یوتوب",
    link: "https://youtube.com/wincell",
    icon: Youtube,
    id: uuidv4(),
  },
];

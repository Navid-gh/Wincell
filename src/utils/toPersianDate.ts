import { toPersianNumbers } from "./toPersianNumbers";

export const toPersianDate = (date: number, checkElapsed?: boolean) => {
  if (checkElapsed) {
    const now = new Date();
    const elapsed = now.getTime() - date;

    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(elapsed / (1000 * 60));
    const hours = Math.floor(elapsed / (1000 * 60 * 60));
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const months = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 30));

    let val = "";
    if (seconds < 60) {
      val = ` ${seconds} ثانیه پیش`;
    } else if (minutes < 60) {
      val = `${minutes} دقیقه پیش`;
    } else if (hours < 24) {
      const remainingMinutes = minutes % 60;
      val = `${hours} ساعت و ${remainingMinutes} دقیقه پیش`;
    } else if (days < 30) {
      const remainingHours = hours % 24;
      val = `${days} روز و ${remainingHours} ساعت پیش`;
    } else {
      val = `${months} ماه پیش`;
    }
    return toPersianNumbers(val);
  }
  const persianDate = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
  return persianDate;
};

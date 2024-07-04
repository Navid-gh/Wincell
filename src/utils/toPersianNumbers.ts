export const toPersianNumbers = (
  input: number | string,
  split?: boolean
): string => {
  const persianDigits: { [key: string]: string } = {
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
  };

  if (split) {
    const formattedValue = Intl.NumberFormat("fa-IR", {
      notation: "standard",
      maximumFractionDigits: 3,
    }).format(Number(input));

    return formattedValue;
  }
  return input?.toString()?.replace(/\d/g, (match) => persianDigits[match]);
};

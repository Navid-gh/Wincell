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

const indexCountLookup = {
  0: "اول",
  1: "دوم",
  2: "سوم",
  3: "چهارم",
  4: "پنجم",
  5: "ششم",
  6: "هفتم",
  7: "هشتم",
  8: "نهم",
  9: "دهم",
  10: "یازدهم",
  11: "دوازدهم",
  12: "سیزدهم",
  13: "چهاردهم",
  14: "پانزدهم",
  15: "شانزدهم",
  16: "هفدهم",
  17: "هجدهم",
  18: "نوزدهم",
  19: "بیستم",
  20: "بیست و یکم",
};

export const indexToPersianCount = (index: number): string => {
  return indexCountLookup[index as keyof typeof indexCountLookup];
};

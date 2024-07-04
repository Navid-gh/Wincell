import { extendTailwindMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";
import config from "../../../tailwind.config";

const configColors = config.theme.extend.colors;

const returnProperColorVal = (
  colors: Record<string, string | Record<string | number, string>>,
  prefix: string = ""
) => {
  return Object.keys(colors).map((color) => {
    const colorValue = colors[color as keyof typeof colors];
    if (typeof colorValue === "string") return prefix + color;
    return {
      [prefix + color]: Object.keys(colorValue),
    };
  });
};

const CustomTwMerge = extendTailwindMerge({
  // use the `extend` key in case you want to extend instead of override
  extend: {
    theme: {
      colors: returnProperColorVal(configColors),
    },
    classGroups: {
      "text-color": returnProperColorVal(configColors, "text-"),
      "bg-color": returnProperColorVal(configColors, "bg-"),
      "border-color": returnProperColorVal(configColors, "border-"),
      shadow: [
        "shadow-card-hover",
        "shadow-card-effect",
        "shadow-box-shadow-1",
        "shadow-box-shadow-2",
        "shadow-box-shadow-3",
        "shadow-box-shadow-4",
      ],
      rounded: ["rounded-small", "rounded-big"],
    },
  },
});

export function cn(...args: ClassValue[]) {
  return CustomTwMerge(clsx(args));
}

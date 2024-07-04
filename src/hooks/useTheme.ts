import { useCallback, useState } from "react";
import handleTheme from "../utils/handleTheme";

export default function useTheme() {
  const [theme, setTheme] = useState(handleTheme());
  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const newVal = !prev;
      handleTheme(newVal ? "dark" : "light");
      return newVal;
    });
  }, [setTheme]);
  return { theme, toggleTheme };
}

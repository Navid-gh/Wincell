export default function handleTheme(themeVal?: "light" | "dark") {
  if (themeVal) localStorage.setItem("theme", themeVal);
  const theme = localStorage.getItem("theme");
  if (
    (theme && theme === "dark") ||
    (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    return true;
  } else {
    document.documentElement.classList.remove("dark");
    return false;
  }
}

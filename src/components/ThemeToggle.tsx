import Switch from "./UI/Switch";
import Sun from "./UI/icons/Sun";
import Moon from "./UI/icons/Moon";
import useTheme from "../hooks/useTheme";

const ThemeToggle = ({ id }: { id: string }) => {
  const { theme: isDark, toggleTheme } = useTheme();
  return (
    <Switch
      id={id}
      state={isDark}
      onChange={toggleTheme}
      component1={<Moon className="dark:invert" id="moon-theme" />}
      component2={<Sun className="dark:invert" id="sun-theme" />}
    />
  );
};

export default ThemeToggle;

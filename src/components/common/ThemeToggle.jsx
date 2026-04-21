import useTheme from "../../hooks/useTheme";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle soft-button" onClick={toggleTheme}>
      {darkMode ? "☀ Light" : "☾ Dark"}
    </button>
  );
}

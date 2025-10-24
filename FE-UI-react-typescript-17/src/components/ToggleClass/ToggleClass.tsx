import { useThemeStore } from "../../store/useThemeStore";

const ToggleClass = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <div className={theme} style={{ padding: "1rem", textAlign: "center" }}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ToggleClass;

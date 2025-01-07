import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function useTheme() {
  const themeContext = useContext(ThemeContext);

  // If ThemeContext provides values
  if (themeContext) {
    return themeContext;
  }

  // If ThemeContext is not being used, fallback to local state
  const [isDark, setIsDark] = useState(
    () => JSON.parse(localStorage.getItem("isDarkMode")) || false
  );

  return [isDark, setIsDark];
}

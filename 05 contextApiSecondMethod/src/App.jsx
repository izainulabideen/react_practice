import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");

    document.querySelector("html").classList.add(themeMode);

  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex dark:bg-slate-800 bg-slate-200 min-h-screen items-center">
        <div className="w-full">
          <div className="dark:text-white w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>
          <div className="w-full max-w-sm mx-auto p-2 dark:bg-slate-950 bg-slate-400 rounded-t-full">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

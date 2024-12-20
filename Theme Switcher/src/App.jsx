import "./App.css";
import Home from "./Home";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <div className="h-full w-full">
        <ThemeToggle />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;

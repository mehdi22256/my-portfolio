import "./App.css";
import Page1 from "./Page 1/Page1";
import Page2 from "./Page2/Page2";
import Page3 from "./Page3/Page3";
import Page4 from "./page4/Page4";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <Page1 toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Page2 darkMode={darkMode} />
      <Page3 darkMode={darkMode} />
      <Page4 darkMode={darkMode} />
    </div>
  );
}

export default App;

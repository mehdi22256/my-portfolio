import "./App.css";
import Page1 from "./Page 1/Page1";
import Page2 from "./Page2/Page2";
import Page3 from "./Page3/Page3";
import Page4 from "./page4/Page4";
import button from "./pics/Animation - 1712390223676.json";
import Lottie from "lottie-react";
import about from "./pics/about.png";
import works from "./pics/works.png";
import contact from "./pics/contact.png";
import darkContact from "./pics/darkcontact.png";
import darkAbout from "./pics/darkabout.png";
import darkWorks from "./pics/darkworks.png";
import { useState, useEffect } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const [up, setUp] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setUp(true) : setUp(false);
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="fixed z-30 flex justify-center gap-20 items-center h-16 w-screen bg-secPrimary dark:bg-secDarkPrimary bottom-0 border-t-2 dark:border-secPrimary sm:hidden">
        <a href="#about">
          <div className="flex flex-col items-center cursor-pointer">
            {darkMode && (
              <img className="w-5 h-5" src={darkAbout} alt="about" />
            )}
            <img className="dark:hidden w-5 h-5" src={about} alt="about" />
            <p className="dark:text-fontDarkPrimary">About</p>
          </div>
        </a>
        <a href="#works">
          <div className="flex flex-col items-center cursor-pointer">
            {" "}
            {darkMode && (
              <img className="w-5 h-5" src={darkWorks} alt="works" />
            )}
            <img className="dark:hidden w-5 h-5" src={works} alt="works" />
            <p className="dark:text-fontDarkPrimary">Works</p>
          </div>
        </a>
        <a href="#contact">
          <div className="flex flex-col items-center cursor-pointer">
            {" "}
            {darkMode && (
              <img className="w-5 h-5" src={darkContact} alt="contact" />
            )}
            <img className="dark:hidden w-5 h-5" src={contact} alt="contact" />
            <p className="dark:text-fontDarkPrimary">Contact</p>
          </div>
        </a>
      </div>
      {up && (
        <Lottie
          animationData={button}
          onClick={scrollUp}
          className="hidden md:flex w-20 h-20 fixed bottom-5 right-3 md:bottom-10 md:right-10 cursor-pointer z-20"
        />
      )}
      <Page1 toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Page2 darkMode={darkMode} />
      <Page3 darkMode={darkMode} />
      <Page4 darkMode={darkMode} />
    </div>
  );
}

export default App;

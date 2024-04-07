import "./page1.css";
import sunLogo from "./pics1/moon.png";
import moonLogo from "./pics1/full-moon.png";
import waveLogo from "./pics1/wave.png";
import lampLogo from "./pics1/lamp.png";
import deskLogo from "./pics1/desk-only.png";
import frame from "./pics1/frame.jpg";
import darkLamp from "./pics1/draklamp.png";
import Typed from "typed.js";
import React, { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Page1 = ({ darkMode, toggleDarkMode }) => {
  Aos.init({
    duration: 2000,
  });
  Aos.refresh();
  const el = useRef();
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `I like making websites with code, designing, and interactive
      things. Scroll down and see my works :)`,
      ],
      typeSpeed: 30,
      showCursor: false,
      startDelay: 1500,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  const hi = useRef();
  useEffect(() => {
    const typed = new Typed(hi.current, {
      strings: [`Hi I'm mehdi`],
      typeSpeed: 40,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      id="main"
      className={`${
        darkMode && "dark"
      }  flex items-center mx-auto font-nunito `}
    >
      <div
        id="left"
        className="hidden xl:flex relative w-1/3 h-screen mx-auto bg-secPrimary dark:bg-secDarkPrimary"
      >
        <p
          data-aos="fade-down"
          className="font-dance text-6xl m-10 w-min font-extrabold cursor-pointer text-logoLightColor dark:text-logoDarkColor"
        >
          <a className="transition-none" href="index.html#main">
            mehdi
          </a>
        </p>
        {darkMode && (
          <img
            className="delay-700 dark:absolute top-60 left-48 z-10 w-96"
            src={darkLamp}
            alt="dark light"
          />
        )}

        <img
          data-aos="fade-down"
          id="lampLogo"
          className="absolute top-0 left-72"
          src={lampLogo}
          alt="lamp logo"
        />
        <img
          data-aos="fade-up-left"
          id="deskLogo"
          className="absolute left-28"
          src={deskLogo}
          alt="desk logo"
        />
        <img
          data-aos="flip-right"
          id="frameLogo"
          className="rounded-full w-60 h-60 absolute left-14 top-60 border-8 border-primary dark:border-darkPrimary"
          src={frame}
          alt="frameLogo"
        />
      </div>

      <div
        id="right"
        className="bg-mobilePrimary dark:bg-secDarkPrimary w-full xl:w-2/3 h-screen p-5 md:bg-primary md:dark:bg-darkPrimary mx-auto"
      >
        <div className="w-auto h-14 flex justify-between md:justify-end items-center flex-row md:space-x-14 md:mt-8 md:mr-20">
          <div className="hover:translate-x-3 hover:translate-y-3 hover:shadow-none rounded-md shadow-3xl hidden md:flex justify-center cursor-pointer h-12 w-32 bg-lightNav dark:bg-darkNav">
            <a className="transition-none" href="#about">
              <p className="text-center mt-1 text-4xl text-fontPrimary font-sans dark:text-mobilePrimary">
                About
              </p>
            </a>
          </div>
          <div className="hover:translate-x-3 hover:translate-y-3 hover:shadow-none rounded-md hidden md:flex justify-center shadow-3xl cursor-pointer h-12 w-32 bg-lightNav dark:bg-darkNav">
            <a className="transition-none" href="#works">
              <p className="text-center mt-1 text-4xl text-fontPrimary font-sans dark:text-mobilePrimary">
                Works
              </p>
            </a>
          </div>
          <div className="hover:translate-x-3 hover:translate-y-3 hover:shadow-none rounded-md hidden md:flex justify-center shadow-3xl cursor-pointer h-12 w-36 bg-lightNav dark:bg-darkNav">
            <a className="transition-none" href="#contact">
              <p className="text-center mt-1 text-4xl text-fontPrimary font-sans dark:text-mobilePrimary">
                Contact
              </p>
            </a>
          </div>
          <div className=" md:hidden">
            <p className="font-dance text-6xl w-min font-extrabold cursor-pointer text-logoLightColor dark:text-logoDarkColor">
              mehdi
            </p>
          </div>
          <div
            data-aos="zoom-in"
            id="dark-mode"
            className="w-28 h-12 rounded-full mt-1 bg-lightModeToggle dark:bg-darkModeToggle"
          >
            <input type="checkbox" onClick={toggleDarkMode} />
            <label>
              <img
                className="icon sunLogo w-10 h-10"
                src={sunLogo}
                alt="sun logo"
              />
              <img
                className="icon moonLogo w-10 h-10"
                src={moonLogo}
                alt="moon logo"
              />
            </label>
          </div>
        </div>

        <div className=" flex justify-center flex-col">
          <div
            id="first-text"
            className="mx-auto flex flex-row w-max -rotate-6 mt-8 md:mt-20 md:ml-40"
          >
            <img className="w-11 h-11 mr-2" src={waveLogo} alt="wave logo" />
            <span
              ref={hi}
              className="lg:text-center md:font-extrabold text-4xl md:text-5xl text-fontPrimary dark:text-fontDarkPrimary md:mb-6"
            >
              Hi I'm mehdi
            </span>
          </div>

          <div
            id="second-text"
            className="leading-relaxed mx-auto pt-1 md:pt-3 mr-1 xl:mr-9 h-auto w-auto xl:ml-48 md:pr-1"
          >
            <span
              ref={el}
              className=" leading-relaxed mx-4 text-4xl md:text-7xl font-bold text-fontPrimary dark:text-fontDarkPrimary "
            >
              I like making websites with code, designing, and interactive
              things. Scroll down and see my works :){" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;

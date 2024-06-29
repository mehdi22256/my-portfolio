import htmlLogo from "./pics2/html_1051277.png";
import cssLogo from "./pics2/css-3_732190.png";
import jsLogo from "./pics2/js_5968292.png";
import bootStrapLogo from "./pics2/bootstrap_5968672.png";
import figmaLogo from "./pics2/figma_5968705.png";
import tailWindLogo from "./pics2/tailwind-css.svg";
import reactLogo from "./pics2/physics_1126012.png";
import Aos from "aos";
import "aos/dist/aos.css";
const Page2 = ({ darkMode }) => {
  Aos.init({
    duration: 2000,
  });
  Aos.refresh();
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="300"
      id="about"
      className={`${darkMode && "dark"} mx-auto font-nunito`}
    >
      <div className=" bg-primary2 dark:bg-darkPrimary2 h-auto md:h-auto pb-20 md:pb-52 pt-10">
        <div className="text-center pt-5 md:text-left md:pt-32 md:pl-36 md:mb-auto">
          <p className="font-extrabold text-6xl md:text-7xl text-fontPrimary dark:text-fontDarkPrimary">
            About me.
          </p>
        </div>
        <div className="flex flex-row-reverse justify-center items-center content-center flex-wrap space-14 gap-10 mt-24">
          <div
            data-aos="fade-down"
            className="w-80 md:w-96 2xl:w-1/3 h-auto pb-5 border-2 border-fontPrimary bg-fontDarkPrimary rounded-3xl dark:bg-darkPrimary2 dark:border-fontDarkPrimary 2xl:relative 2xl:bottom-64 2xl:right-40"
          >
            <div className="flex flex-row border-b-2 pb-2 border-fontPrimary dark:border-fontDarkPrimary">
              <div className="w-5 h-5 rounded-full bg-fontPrimary m-1 mt-4 ml-3 dark:bg-fontDarkPrimary"></div>
              <div className="w-5 h-5 rounded-full bg-fontPrimary m-1 mt-4 dark:bg-fontDarkPrimary"></div>
              <div className="w-5 h-5 rounded-full bg-fontPrimary m-1 mt-4 dark:bg-fontDarkPrimary"></div>
            </div>
            <div className="mx-3 mt-3">
              <p className="font-bold text-3xl text-fontPrimary dark:text-lightNav ">
                I’m a Pharmacist since 2 years of my graduation.
              </p>
            </div>
            <div className="mx-4 mt-6">
              <p className="text-3xl lg:text-justify text-fontPrimary dark:text-lightNav">
                I graduated from Kufa University, College of Pharmacy at 2022
                with a good degree{" "}
              </p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="w-80 md:w-96 h-auto border-2 border-fontPrimary bg-fontDarkPrimary rounded-3xl dark:bg-darkPrimary2 dark:border-fontDarkPrimary 2xl:relative 2xl:top-36 2xl:left-48"
          >
            <div className="flex flex-row border-b-2 pb-2 border-fontPrimary dark:border-fontDarkPrimary">
              <div className="w-5 h-5 rounded-full bg-fontPrimary m-1 mt-4 ml-3 dark:bg-fontDarkPrimary"></div>
              <div className="w-5 h-5 rounded-full bg-fontPrimary m-1 mt-4 dark:bg-fontDarkPrimary"></div>
              <div className="w-5 h-5 rounded-full bg-fontPrimary m-1 mt-4 dark:bg-fontDarkPrimary"></div>
              <div className="self-end ml-28 md:ml-40">
                <p className=" font-extrabold w-max text-xl text-fontPrimary dark:text-fontDarkPrimary">
                  My Skills
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-wrap gap-10 content-center p-5">
              <img
                className="w-14 h-14 md:w-20 md:h-20"
                src={htmlLogo}
                alt="html"
              />
              <img
                className="w-14 h-14 md:w-20 md:h-20"
                src={cssLogo}
                alt="css"
              />
              <img
                className="w-14 h-14 md:w-20 md:h-20 rounded-lg"
                src={jsLogo}
                alt="java script"
              />
              <img
                className="w-14 h-14 md:w-20 md:h-20 dark:brightness-200"
                src={bootStrapLogo}
                alt="bootstrap"
              />
              <img
                className="w-14 h-14 md:w-20 md:h-20"
                src={reactLogo}
                alt="react"
              />
              <img
                className="w-14 h-14 md:w-20 md:h-20"
                src={tailWindLogo}
                alt="tailwind"
              />
              <img
                className="w-14 h-14 md:w-20 md:h-20"
                src={figmaLogo}
                alt="figma"
              />
            </div>
          </div>
          <div
            data-aos="fade-up-right"
            className="w-80 md:w-96 2xl:w-1/3 h-auto pb-5 border-2 border-fontPrimary bg-fontDarkPrimary rounded-3xl md:mb-auto 2xl:relative 2xl:left-10 dark:bg-darkPrimary2 dark:border-fontDarkPrimary "
          >
            <div className="flex flex-row border-b-2 pb-2 border-fontPrimary dark:border-fontDarkPrimary">
              <div className="w-5 h-5 rounded-full bg-fontPrimary m-1 mt-4 ml-3 dark:bg-fontDarkPrimary"></div>
              <div className="w-5 h-5 rounded-full bg-fontPrimary m-1 mt-4 dark:bg-fontDarkPrimary"></div>
              <div className="w-5 h-5 rounded-full bg-fontPrimary m-1 mt-4 dark:bg-fontDarkPrimary"></div>
            </div>
            <div className="mx-3 mt-3">
              <p className="font-bold text-3xl text-fontPrimary dark:text-lightNav ">
                I’m a programmer with ambition to be better and better.
              </p>
            </div>
            <div className="mx-4 mt-6">
              <p className="text-3xl  text-fontPrimary dark:text-lightNav">
                I started learning programming in deep directly after my
                graduation, but my love to this world when I was teenager
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;

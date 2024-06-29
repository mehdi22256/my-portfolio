import "./page3.css";
import bakery from "./pic3/bakery 1.png";
import pokemon from "./pic3/pokemon.png";
import arrow1 from "./pic3/Vector 1.png";
import arrow2 from "./pic3/Vector 2.png";
import lightArrow1 from "./pic3/lightVector 1.png";
import lightArrow2 from "./pic3/lightVector 2.png";
import space from "./pic3/space.png";
import bigByte from "./pic3/bigByte.png";
import Aos from "aos";
import "aos/dist/aos.css";
const Page3 = ({ darkMode }) => {
  Aos.init({
    duration: 2000,
  });
  Aos.refresh();
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="500"
      id="works"
      className={`${darkMode && "dark"} mx-auto font-nunito`}
    >
      <div className=" h-auto px-3 pb-40 bg-primary3 text-fontPrimary dark:text-fontDarkPrimary dark:bg-darkPrimary3">
        <div className="text-center lg:text-right pt-16 lg:pt-32 lg:pr-72">
          <p className=" font-extrabold text-6xl md:text-7xl text-fontPrimary dark:text-fontDarkPrimary">
            My Works.
          </p>
        </div>

        {/* first */}
        <div className="flex flex-col flex-wrap">
          <div className="flex flex-col lg:flex-row mt-20 lg:px-32 lg:gap-14 relative">
            <div className="absolute left-52 bottom-96 mb-12 mr-20">
              {darkMode && (
                <img
                  className="invisible 2xl:visible"
                  src={lightArrow1}
                  alt="arrow"
                />
              )}
              <img
                className="invisible 2xl:visible dark:hidden"
                src={arrow1}
                alt="arrow"
              />
            </div>
            <div data-aos="zoom-in-right" className=" w-auto mx-auto xl:w-1/2">
              <a
                href="https://bakingshop.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <p
                  className="hover:bg-primary dark:hover:bg-darkPrimary hover:rounded-full cursor-pointer rounded-full 
              pl-6 md:pl-0 w-max text-center font-bold text-4xl lg:text-6xl pb-8 lg:pb-0 lg:mb-16 xl:mt-16 text-fontPrimary dark:text-fontDarkPrimary"
                >
                  Bakery Shop
                </p>
              </a>
              <p className="line md:mr-4 pl-4 lg:pl-0 text-2xl leading-loose font-mono md:text-4xl text-fontPrimary dark:text-fontDarkPrimary">
                It’s a website about a bakery shop, containing what trending
                items and services they can offer for their customers.{" "}
              </p>
            </div>
            <div
              data-aos="zoom-in"
              className="w-72 md:w-96 lg:w-1/2 mx-auto z-10"
            >
              <a
                href="https://bakingshop.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="hover:translate-x-3 hover:translate-y-3 hover:shadow-none w-40 md:w-48 md:h-16 bg-lightNav relative top-5 left-16 shadow-3xl cursor-pointer">
                  <p className=" text-center py-1 md:pt-4 font-semibold text-2xl font-serif text-fontPrimary ">
                    Bakery Shop
                  </p>
                </div>
              </a>
              <div>
                <img
                  className="shadow-3xl dark:shadow-darkshadow"
                  src={bakery}
                  alt="bakery"
                />
              </div>
            </div>
          </div>

          {/* second */}

          <div className="flex flex-col lg:flex-row-reverse mt-20 lg:px-32 lg:gap-14 relative">
            <div data-aos="fade-down" className="w-auto mx-auto xl:w-1/2">
              <a
                href="https://pokemonscards.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <p
                  className="hover:bg-primary dark:hover:bg-darkPrimary hover:rounded-full cursor-pointer rounded-full
              pl-6 lg:pl-0 xl:ml-12 w-max text-center xl:m-5 xl:mt-12 font-bold text-4xl lg:text-6xl lg:mb-20 text-fontPrimary dark:text-fontDarkPrimary"
                >
                  Pokémon Cards
                </p>
              </a>
              <p className="line m-5 2xl:mx-16 text-2xl md:text-4xl leading-relaxed font-mono text-fontPrimary dark:text-fontDarkPrimary">
                If you love Pokémon, you will this website, because it contains
                the informations about the Pokémons
              </p>
            </div>
            <div
              data-aos="fade-down-right"
              className="w-72 md:w-96 lg:w-1/2 mx-auto z-10"
            >
              <a
                href="https://pokemonscards.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-44 md:w-56 md:h-16 bg-lightNav relative top-5 left-16 shadow-reverselight hover:-translate-x-3 hover:translate-y-3 hover:shadow-none cursor-pointer">
                  <p className="text-center py-1 md:pt-4 font-semibold text-2xl font-serif text-fontPrimary ">
                    Pokémon Cards
                  </p>
                </div>
              </a>
              <div>
                <img
                  className="shadow-reverselight dark:shadow-reversedark"
                  src={pokemon}
                  alt="pokemon"
                />
              </div>
            </div>
            <div className="absolute w-1/2 top-36 ">
              {darkMode && (
                <img
                  className="invisible 2xl:visible "
                  src={lightArrow2}
                  alt="arrow"
                />
              )}
              <img
                className="invisible 2xl:visible dark:hidden"
                src={arrow2}
                alt="arrow"
              />
            </div>
          </div>

          {/* third */}

          <div className="flex flex-col lg:flex-row mt-20 xl:mt-80 lg:px-32 lg:gap-14 relative">
            <div className="absolute left-52 bottom-96 mb-14 mr-20">
              {darkMode && (
                <img
                  className="invisible 2xl:visible"
                  src={lightArrow1}
                  alt="arrow"
                />
              )}
              <img
                className="invisible 2xl:visible dark:hidden"
                src={arrow1}
                alt="arrow"
              />
            </div>
            <div
              data-aos="flip-up"
              data-aos-duration="500"
              className="w-auto mx-auto xl:w-1/2"
            >
              <a
                href="https://ourspaces.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <p
                  className="hover:bg-primary dark:hover:bg-darkPrimary hover:rounded-full cursor-pointer rounded-full
              pl-6 lg:pl-0 w-max text-center xl:m-5 xl:mt-12 font-bold text-4xl lg:text-6xl lg:mb-20 text-fontPrimary dark:text-fontDarkPrimary"
                >
                  Our Space
                </p>
              </a>
              <p className="line m-5 text-2xl md:text-4xl font-mono text-fontPrimary dark:text-fontDarkPrimary">
                You can explore the galaxy with beautiful pictures for the
                planets of our universe.
              </p>
            </div>
            <div
              data-aos="flip-down"
              data-aos-duration="500"
              className="w-72 md:w-96 lg:w-1/2 mx-auto z-10"
            >
              <a
                href="https://ourspaces.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="hover:translate-x-3 hover:translate-y-3 hover:shadow-none w-40 md:w-48 md:h-16 bg-lightNav relative top-5 left-16 shadow-3xl cursor-pointer">
                  <p className="text-center py-1 md:pt-4 font-semibold text-2xl font-serif text-fontPrimary ">
                    Our Space
                  </p>
                </div>
              </a>
              <div>
                <img
                  className="shadow-3xl dark:shadow-darkshadow"
                  src={space}
                  alt="space"
                />
              </div>
            </div>
          </div>

          {/* fourth */}

          <div className="flex flex-col lg:flex-row-reverse mt-20 lg:px-32 lg:gap-14 relative">
            <div
              data-aos="fade-down"
              className="w-auto lg:mx-auto xl:w-1/2 xl:mt-10"
            >
              <a
                href="https://deliciousbyte.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <p
                  className="hover:bg-primary dark:hover:bg-darkPrimary hover:rounded-full cursor-pointer rounded-full
              pl-6 lg:pl-0 pb-8 md:pb-0 w-max lg:text-center xl:m-5 xl:mt-12 font-bold text-4xl lg:text-6xl lg:mb-20 text-fontPrimary dark:text-fontDarkPrimary"
                >
                  Delicious Byte
                </p>
              </a>
              <p className="ml-5 line text-2xl md:text-4xl font-mono text-fontPrimary dark:text-fontDarkPrimary">
                it’s about fast food with a collection of types you can order.
              </p>
            </div>
            <div
              data-aos="zoom-out"
              className="w-72 md:w-96 lg:w-1/2 mx-auto z-10"
            >
              <a
                href="https://deliciousbyte.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="hover:-translate-x-3 hover:translate-y-3 hover:shadow-none  text-center w-44 md:w-56 md:h-16 bg-lightNav relative top-5 left-16 shadow-reverselight cursor-pointer">
                  <p className="text-center py-1 md:pt-4 font-semibold text-2xl font-serif text-fontPrimary ">
                    Delicious Byte
                  </p>
                </div>
              </a>
              <div>
                <img
                  className="shadow-reverselight dark:shadow-reversedark"
                  src={bigByte}
                  alt="byte"
                />
              </div>
            </div>
            <div className="absolute w-1/2 top-36 ">
              {darkMode && (
                <img
                  className="invisible 2xl:visible "
                  src={lightArrow2}
                  alt="arrow"
                />
              )}
              <img
                className="invisible 2xl:visible dark:hidden"
                src={arrow2}
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;

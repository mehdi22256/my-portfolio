import vector from "./pics4/Vector 6.png";
import darkVector from "./pics4/Vector 6 (1).png";
import avatar1 from "./pics4/peeps-avatar (1).png";
import avatar2 from "./pics4/peeps-avatar (2).png";
import linked from "./pics4/linkedin.png";
import lightLinked from "./pics4/lightlinkedin.png";
import instagram from "./pics4/instagram.png";
import lightInstagram from "./pics4/lightinstagram.png";
import github from "./pics4/github.png";
import lightGithub from "./pics4/lightgithub.png";
import email from "./pics4/mail.png";
import lightEmail from "./pics4/lightemail.png";

const Page4 = ({ darkMode }) => {
  return (
    <div id="contact" className={`${darkMode && "dark"} mx-auto font-nunito`}>
      <div className=" bg-primary h-screen dark:bg-darkPrimary pt-36">
        <div className="flex flex-col lg:flex-row pt-10 lg:pt-auto lg:justify-center items-center lg:space-x-20 lg:gap-10 w-4/5 h-4/5 bg-secPrimary m-auto dark:bg-secDarkPrimary">
          <div className="lg:pl-10 ">
            <div>
              <p className="pl-2 md:pl-auto text-2xl lg:pt-0 lg:text-3xl font-semibold w-max pb-5 md:pb-10 font-mono text-fontPrimary dark:text-fontDarkPrimary">
                I’m always up for a chat.
              </p>
            </div>
            <div>
              <p className="pl-2 md:pl-auto text-xl lg:text-3xl pb-5 font-mono text-fontPrimary  dark:text-fontDarkPrimary">
                You can contact me on <br /> my Email or social media below
              </p>
            </div>
            <div className="flex flex-row space-x-5 pb-5 lg:pb-auto pl-4 md:pl-auto">
              {darkMode && (
                <>
                  <a
                    href="https://www.linkedin.com/in/mehdi22256/"
                    target="_blank"
                  >
                    <img
                      className="w-6 lg:w-10 cursor-pointer"
                      src={lightLinked}
                      alt="linked in"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/hereismehdi/"
                    target="_blank"
                  >
                    <img
                      className="w-6 lg:w-10 cursor-pointer"
                      src={lightInstagram}
                      alt="instagram"
                    />
                  </a>
                  <a href="https://github.com/mehdi22256" target="_blank">
                    <img
                      className="w-6 lg:w-10 cursor-pointer"
                      src={lightGithub}
                      alt="github"
                    />
                  </a>
                  <a href="mailto:mehdi22256@gmail.com">
                    <img
                      className="w-6 lg:w-10 cursor-pointer"
                      src={lightEmail}
                      alt="my email"
                    />
                  </a>
                </>
              )}
              <a href="https://www.linkedin.com/in/mehdi22256/" target="_blank">
                <img
                  className="dark:hidden w-6 lg:w-10 cursor-pointer"
                  src={linked}
                  alt="linked in"
                />
              </a>
              <a href="https://www.instagram.com/hereismehdi/" target="_blank">
                <img
                  className="dark:hidden w-6 lg:w-10 cursor-pointer"
                  src={instagram}
                  alt="instagram"
                />
              </a>
              <a href="https://github.com/mehdi22256" target="_blank">
                <img
                  className="dark:hidden w-6 lg:w-10 cursor-pointer"
                  src={github}
                  alt="github"
                />
              </a>
              <a href="mailto:mehdi22256@gmail.com">
                <img
                  className="dark:hidden w-6 lg:w-10 cursor-pointer"
                  src={email}
                  alt="my email"
                />
              </a>
            </div>
          </div>
          <div className=" md:pl-auto relative">
            <div className="relative lg:mt-auto h-32 lg:h-auto mx-10 lg:mx-auto">
              {darkMode && (
                <img className="w-full h-full lg:pr-28" src={darkVector} />
              )}
              <img
                className="w-full h-full lg:pr-28 dark:hidden"
                src={vector}
                alt=""
              />
              <img
                className="w-auto h-full absolute bottom-0 left-8 lg:left-20"
                src={avatar2}
                alt=""
              />
            </div>
            <div className="absolute top-36 right-10 xl:top-72 xl:right-96 lg:mt-20 lg:mr-36 w-max">
              <p className="font-extrabold text-5xl xl:text-8xl text-fontPrimary dark:text-fontDarkPrimary">
                Hey there!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;

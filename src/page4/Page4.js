import linked from "./pics4/linkedin.png";
import lightLinked from "./pics4/lightlinkedin.png";
import instagram from "./pics4/instagram.png";
import lightInstagram from "./pics4/lightinstagram.png";
import github from "./pics4/github.png";
import lightGithub from "./pics4/lightgithub.png";
import Lottie from "lottie-react";
import anime from "./pics4/pkDSCK5bny.json";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
const Page4 = ({ darkMode }) => {
  Aos.init({
    duration: 2000,
  });
  Aos.refresh();
  const [sent, setSent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setSent(false);
    }, 4000);
  }, [sent]);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "dd91022f-6f77-4fbc-9244-5ff0d78a466f");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setSent(!sent);
    }
  };

  return (
    <div
      data-aos="fade-up"
      id="contact"
      className={`${darkMode && "dark"} mx-auto font-nunito`}
    >
      <div className=" bg-primary h-screen dark:bg-darkPrimary pt-7 sm:pt-32 md:pt-20 2xl:pt-24">
        <div className="flex flex-col lg:flex-row lg:justify-center items-center lg:space-x-20 lg:gap-10 w-11/12 md:w-9/12 lg:w-10/12 h-auto lg:h-5/6 lg:py-64 2xl:py-72 bg-secPrimary m-auto dark:bg-secDarkPrimary">
          <div className="lg:pl-10 mt-5 md:my-5">
            <div>
              <p className="pl-2 md:pl-auto text-2xl lg:pt-0 lg:text-4xl font-semibold w-max font-nunito text-fontPrimary dark:text-fontDarkPrimary">
                I’m always up for a chat.
              </p>
            </div>
            <div>
              <p className="pl-2 md:pl-0 text-lg pb-2 mt-2 font-nunito text-fontPrimary  dark:text-fontDarkPrimary">
                you can contact me on my Email
              </p>
            </div>
            <form
              className="flex flex-col gap-y-3 lg:w-96 mb-5 relative pb-10 lg:pb-0"
              onSubmit={onSubmit}
            >
              <input
                className="rounded-lg p-2 outline-primary dark:focus:outline-darkPrimary focus:outline focus:outline-4"
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
              <input
                className="rounded-lg p-2 outline-primary dark:focus:outline-darkPrimary focus:outline focus:outline-4"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                rows={5}
                className="resize-none rounded-lg p-2 outline-primary dark:focus:outline-darkPrimary focus:outline focus:outline-4"
                name="message"
                placeholder="Your message"
                required
              ></textarea>
              <button
                type="submit"
                className="lg:w-min px-4 py-2 bg-primary dark:bg-darkPrimary dark:text-fontDarkPrimary rounded-lg"
              >
                Submit
              </button>
              <span
                className={`${
                  sent ? "flex" : "hidden"
                } text-primary absolute font-bold left-28 lg:left-24 bottom-2 w-min`}
              >
                Sent
              </span>
            </form>
            <p className="pl-8 md:pl-3 my-5 text-center lg:text-left font-nunito text-fontPrimary dark:text-fontDarkPrimary w-fit">
              or on my social media below
            </p>
            <div className="flex flex-row justify-center lg:justify-start space-x-5 pb-5 lg:pb-0 md:pl-3">
              {darkMode && (
                <>
                  <a
                    href="https://www.linkedin.com/in/mehdi22256/"
                    target="_blank"
                    rel="noreferrer"
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
                    rel="noreferrer"
                  >
                    <img
                      className="w-6 lg:w-10 cursor-pointer"
                      src={lightInstagram}
                      alt="instagram"
                    />
                  </a>
                  <a
                    href="https://github.com/mehdi22256"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="w-6 lg:w-10 cursor-pointer"
                      src={lightGithub}
                      alt="github"
                    />
                  </a>
                </>
              )}
              <a
                href="https://www.linkedin.com/in/mehdi22256/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="dark:hidden w-6 lg:w-10 cursor-pointer"
                  src={linked}
                  alt="linked in"
                />
              </a>
              <a
                href="https://www.instagram.com/hereismehdi/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="dark:hidden w-6 lg:w-10 cursor-pointer"
                  src={instagram}
                  alt="instagram"
                />
              </a>
              <a
                href="https://github.com/mehdi22256"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="dark:hidden w-6 lg:w-10 cursor-pointer"
                  src={github}
                  alt="github"
                />
              </a>
            </div>
          </div>
          <div className="hidden lg:flex justify-center lg:w-2/6 2xl:w-full">
            <Lottie animationData={anime} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;

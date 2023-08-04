import React from "react";
import aboutImg from "../assets/images/about.png";
const About = () => {
  const info = [
    { text: "experience", count: "04" },
    { text: "Projects", count: "20" },
    { text: "Research", count: "01" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">Get to Know Me</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">I have recently graduated with a Bachelor’s degree in Information Technology, specializing in Software Engineering, from the Sri Lanka Institute of Information Technology (SLIIT). My interests lie in scientific machine learning, distributed computing, and Cloud Computing. I am also passionate about web application development using the latest technologies and frameworks, mobile application development, and mastering data structures and algorithms. I am always enthusiastic about learning new technologies quickly. <br/><br/> Connect with me on LinkedIn to know more about my professional journey<a href="https://www.linkedin.com/in/yasirusajith/"> <span className="text-cyan-600">Linked in!</span></a>

              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="./src/assets/Yasiru_Wickramasinghe.pdf" download>
                <button className="btn-primary hover:bg-cyan-500">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-700 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

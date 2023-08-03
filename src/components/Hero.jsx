import React from "react";
import hero from "../assets/images/hero.png";
const Hero = () => {
  const social_media = [
    { logo: "logo-linkedin", link: "https://www.linkedin.com/in/yasirusajith/"},
    { logo: "logo-facebook", link: "https://www.facebook.com/YasiruWickramasingha"},
    { logo: "logo-instagram", link: "https://www.instagram.com/yasiruwickramasingha/"},
    { logo: "logo-twitter", link: "https://twitter.com/YasiruSajith"},
    { logo: "logo-github", link: "https://github.com/YasiruWickramasinghe"}
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <br></br><span>Yasiru Wickramasinghe</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Software Engineer
          </h4>
          <button className="btn-primary mt-8 hover:bg-cyan-500"><a href="#contact">Contact Me</a></button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((content) => (
              <div
                key={content.logo}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <a href={content.link}><ion-icon name={content.logo}></ion-icon></a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

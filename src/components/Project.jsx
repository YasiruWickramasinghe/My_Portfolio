import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";
import project5 from "../assets/images/project-5.png";
import project_person from "../assets/images/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Clothing Shop",
      github_link: "https://github.com/YasiruWickramasinghe/Pearl_Clothing_Shop-Frontend",
      live_link: "",
    },
    {
      img: project2,
      name: "Day Care",
      github_link: "https://github.com/Syndicate-Crew/SweetPaws-Frontend",
      live_link: "",
    },
    {
      img: project3,
      name: "Online Construction",
      github_link: "https://github.com/YasiruWickramasinghe/Online-Construction-System",
      live_link: "",
    },
    {
      img: project4,
      name: "Hospital System",
      github_link: "https://github.com/YasiruWickramasinghe/Hospital-Management-System",
      live_link: "",
    },
    {
      img: project5,
      name: "Medicine Alert APP",
      github_link: "https://github.com/it19062884Ruvindu/Group_43_Medicine_Allert_App",
      live_link: "",
    },
    {
      img: project5,
      name: "Food Delivery Android App",
      github_link: "https://github.com/YasiruWickramasinghe/Food-Delivery-Android-App",
      live_link: "",
    },
    {
      img: project1,
      name: "    Smart Advertising",
      github_link: "",
      live_link: "https://ieeexplore.ieee.org/document/10025117",
    },
  ];
  return (
    <section id="projects" className="py-10 px-3 bg-gray-800 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;

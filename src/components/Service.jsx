import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import service1 from "../assets/images/service2.png";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service3.png";
import service4 from "../assets/images/service4.png";
import service5 from "../assets/images/service5.png";
import service6 from "../assets/images/service6.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Service = () => {
    const services = [
        {
            img: service1,
            name: "Web Development",
            desc: "I create expertly crafted websites that enhance your online presence and  business growth, functionality with aesthetics.",
            link: "#contact",
        },
        {
            img: service2,
            name: "Mobile App Development",
            desc: "My innovative mobile apps are tailored to captivate users, meet unique requirements, and provide a digital experience.",
            link: "#contact",
        },
        {
            img: service3,
            name: "UI/UX Design",
            desc: "Visually appealing designs ensure seamless user experiences, boost engagement, and make your brand stand out.",
            link: "#contact",
        },
        {
            img: service4,
            name: "POS Systems",
            desc: "Streamline your retail operations with our efficient Point of Sale solutions, enhancing productivity and experience.",
            link: "#contact",
        },
        {
            img: service5,
            name: "SEO",
            desc: "Improve your visibility and attract organic traffic with our data-driven SEO strategies and proven optimization.",
            link: "#contact",
        },
        {
            img: service6,
            name: "Artificial Intelligence",
            desc: "Unlock the power of AI to automate tasks, gain valuable insights, and stay ahead in today's business environment.",
            link: "#contact",
        },
    ];
    return (
        <section id="services" className="py-20 px-3 bg-gray-900 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600">Services</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">What I Offer</p>
            </div>
            <br />
            <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
                <div className="lg:w-3/3 w-full">
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
                        {services.map((service_info, i) => (
                            <SwiperSlide key={i}>
                                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                                    <div className="text-center">
                                        <h2 className="text-xl my-4 font-semibold ">{service_info.name}</h2>
                                    </div>
                                    <img src={service_info.img} alt="" className="rounded-lg" />
                                    <h5 className="text-l my-4">{service_info.desc}</h5>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Service;

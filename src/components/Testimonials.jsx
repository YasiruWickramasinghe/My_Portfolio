import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonial from "../assets/images/testimonials.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Harsha Mahesh",
      desc: "Remarkable contributions as a Full Stack Engineer at R-Factory. Your technical expertise and dedication significantly amplify our success. Truly grateful for your exceptional work.",
    },
    {
      name: "Sean Poal",
      desc: "Outstanding work designing my cartoon website by a talented professional like you. The website speaks volumes about your expertise. Grateful to have collaborated with you.",
    },
    {
      name: "Lahiru Subasinghe",
      desc: "Your SEO advice was a game-changer for my business, boosting its online visibility remarkably. The SPA website you developed perfect. Your work is truly commendable. Thanks a million!",
    },
    {
      name: "John Deo",
      desc: "Your machine learning AI project revolutionized my supermarket's advertising strategy. Your expertise crafted a seamless shopping experience. Kudos for your remarkable work!",
    },
  ];
  return (
    <section id="testimonials" className="py-20 px-3 bg-gray-800 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Testimonials</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Client Reviews</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
      <div className="lg:block hidden">
          <img src={testimonial} alt="" />
        </div>
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
            {testimonials.map((testimonial_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">                                
                  <p className="text-sm my-4">{testimonial_info.desc}</p>
                  <h3 className="text-xl text-cyan-600 my-4">{testimonial_info.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

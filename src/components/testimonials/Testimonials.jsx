import React from "react";
import "./testimonials.css";
import { Data } from "./Data.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Testimonials = () => {
  return (
    <section className="testimonials section container" id="testimonials">
      <h3 className="section__title">Testimonials</h3>
      <span className="section__subtitle">My clients say</span>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        loop={true}
        grabCursor={true}
        className="testimonial__container"
        slidesPerView={1}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="users" className="testimonial__img" />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

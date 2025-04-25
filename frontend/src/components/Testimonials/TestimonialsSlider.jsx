import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./TestimonialsSlider.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "Bohot accha experience raha! Service was amazing.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Priya Verma",
    text: "Highly recommend! Fast and reliable service.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Amit Gupta",
    text: "Mujhe bohot pasand aaya, definitely wapas aayenge!",
    image: "https://via.placeholder.com/100",
  },
];

const TestimonialsSlider = () => {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">Testimonials</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-card">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-img"
            />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <h4 className="testimonial-name">- {testimonial.name}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSlider;

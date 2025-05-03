import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/free-mode';
import './TestimonialsSlider.css';
import { Pagination, FreeMode, Navigation } from 'swiper/modules';

const testimonialsData = [
  {
    name: 'John Doe',
    position: 'CEO at Company',
    message: 'This service was amazing and really helped our business grow!',
    image: 'https://via.placeholder.com/100'
  },
  {
    name: 'Jane Smith',
    position: 'Marketing Manager',
    message: 'Highly professional team and great results!',
    image: 'https://via.placeholder.com/100'
  },
  {
    name: 'Michael Johnson',
    position: 'Product Designer',
    message: 'They truly understand the needs of the client!',
    image: 'https://via.placeholder.com/100'
  },
  {
    name: 'Emily Davis',
    position: 'CTO at Startup',
    message: 'Very reliable and supportive team!',
    image: 'https://via.placeholder.com/100'
  },
  {
    name: 'Emily Davis',
    position: 'CTO at Startup',
    message: 'Very reliable and supportive team!',
    image: 'https://via.placeholder.com/100'
  },
  {
    name: 'Emily Davis',
    position: 'CTO at Startup',
    message: 'Very reliable and supportive team!',
    image: 'https://via.placeholder.com/100'
  },
  {
    name: 'Emily Davis',
    position: 'CTO at Startup',
    message: 'Very reliable and supportive team!',
    image: 'https://via.placeholder.com/100'
  },
];

const TestimonialsSlider = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Clients Say</h2>

      {/* Navigation Buttons */}
      <div className="swiper-navigation">
        <div className="swiper-button-prev">❮</div>
        <div className="swiper-button-next">❯</div>
      </div>

      <Swiper
  slidesPerView={4}  // Default slides per view for large screens
  spaceBetween={30}  // Default space between slides
  navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }}
  speed={500}
  modules={[Pagination, Navigation]} // Removed FreeMode and Autoplay
  className="mySwiper"
  breakpoints={{
    1024: {
      slidesPerView: 4, // For medium screens
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2, // For small screens
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1, // For very small screens (e.g., mobile)
      spaceBetween: 10,
    },
    412: {
      slidesPerView: 1, // For 412px screens, 1 slide visible
      spaceBetween: 10,
    },
  }}
>

  {testimonialsData.map((testimonial, index) => (
    <SwiperSlide key={index}>
      <div className="testimonial-card">
        <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
        <h3 className="testimonial-name">{testimonial.name}</h3>
        <p className="testimonial-position">{testimonial.position}</p>
        <p className="testimonial-message">"{testimonial.message}"</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </section>
  );
};

export default TestimonialsSlider;

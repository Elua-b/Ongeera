import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./Testimony.css";
const Testimony2 = () => {
  const images = [
    {
      name: "Eloi",
      image: "/profile.png",
      word: "We continually blaze new trials for our students to discover new learning opportunities that will enable them to be wholesome individuals who believe in themselves and what the future can offer the.At Highland,there is a healthy emphasis on both curicular and",
      work: "Engineer"
    },
    {
      name: "Eloi",
      image: "/profile2.jpg",
      word: "We continually blaze new trials for our students to discover new learning opportunities that will enable them to be wholesome individuals who believe in themselves and what the future can offer the.At Highland,there is a healthy emphasis on both curicular and",
      work: "Engineer"
    },
    {
      name: "Eloi",
      image: "/profile3.jpg",
      word: "We continually blaze new trials for our students to discover new learning opportunities that will enable them to be wholesome individuals who believe in themselves and what the future can offer the.At Highland,there is a healthy emphasis on both curicular and",
      work: "Engineer"
    },
  ];

  return (
    <div>
      <div className="gallery-containers">
        <Swiper
          slidesPerView={1}
          effect
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          // autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Pagination, Navigation, EffectFade]}
          className="admission-swipe-container"
        >
          {images.map((value, id) => {
            const names = `${value.image}`;
            return (
              <SwiperSlide className="swipe-slide" key={id}>
                <div className="swiper-image">
                  <div className="test-images">
                    <img src={names} className="img-test" alt="" />
                  </div>
                  <div className="test-content">
                    <p className="word spcl">
                     {value.word}
                    </p>
                    <h4 className="test-name">{value.name}</h4>
                    <h6 className="work">{value.work}</h6>
                  </div>

                  
                </div>
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide className="swipe-slide"> 
                       <div className="swiper-images">
                       <img src="/manure1.jpg" alt="" />
                       </div>
                    </SwiperSlide>

                    <SwiperSlide className="swipe-slide"> 
                       <div className="swiper-images">
                       <img src="/manure2.jpg" alt="" />
                       </div>
                    </SwiperSlide>

                    <SwiperSlide className="swipe-slide"> 
                       <div className="swiper-images">
                       <img src="/manure3.jpg" alt="" />
                       </div>
                    </SwiperSlide>

                    <SwiperSlide className="swipe-slide"> 
                       <div className="swiper-images">
                       <img src="/manure4.jpg" alt="" />
                       </div>
                    </SwiperSlide>
                    <SwiperSlide className="swipe-slide"> 
                       <div className="swiper-images">
                       <img src="/manure5.jpg" alt="" />
                       </div>
                    </SwiperSlide>
                    <SwiperSlide className="swipe-slide"> 
                       <div className="swiper-images">
                       <img src="/manure6.jpg" alt="" />
                       </div>
                    </SwiperSlide>
                    <SwiperSlide className="swipe-slide"> 
                       <div className="swiper-images">
                       <img src="/manure7.jpg" alt="" />
                       </div>
                    </SwiperSlide>
                    <SwiperSlide className="swipe-slide"> 
                       <div className="swiper-images">
                       <img src="/manure8.jpg" alt="" />
                       </div>
                    </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimony2;

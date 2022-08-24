import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./News.css";
const News2 = () => {
  const images = [
    {
      name: "Eloi",
      image: "/news.jpg",
      date:"11 Aug 2020",
      word:"We continually blaze new trials for our students to discover new learning opportunities that will enable them to be wholesome individuals who believe in themselves and what the future can offer the.At Highland,there is a healthy emphasis on both curicular and"

    },
    {
        name: "Eloi",
        image: "/news2.jpg",
        date:"11 Aug 2020",
        word:"We continually blaze new trials for our students to discover new learning opportunities that will enable them to be wholesome individuals who believe in themselves and what the future can offer the.At Highland,there is a healthy emphasis on both curicular and"

    },
    {
        name: "Eloi",
        image: "/news3.jpg",
        date:"11 Aug 2020",
        word:"We continually blaze new trials for our students to discover new learning opportunities that will enable them to be wholesome individuals who believe in themselves and what the future can offer the.At Highland,there is a healthy emphasis on both curicular and"
    },
    {
        name: "Eloi",
        image: "/news4.jpg",
        date:"11 Aug 2020",
        word:"We continually blaze new trials for our students to discover new learning opportunities that will enable them to be wholesome individuals who believe in themselves and what the future can offer the.At Highland,there is a healthy emphasis on both curicular and"
    },
    {
        name: "Eloi",
        image: "/news5.jpg",
        date:"11 Aug 2020",
        word:"We continually blaze new trials for our students to discover new learning opportunities that will enable them to be wholesome individuals who believe in themselves and what the future can offer the.At Highland,there is a healthy emphasis on both curicular and"
    },
    {
        name: "Eloi",
        image: "/news6.jpg",
        date:"11 Aug 2020",
        word:"We continually blaze new trials for our students to discover new learning opportunities that will enable them to be wholesome individuals who believe in themselves and what the future can offer the.At Highland,there is a healthy emphasis on both curicular and"
    },
    {
        name: "Eloi",
        image: "/news7.jpg",
        date:"11 Aug 2020",
        word:"We continually blaze new trials for our students to discover new learning opportunities that will enable them to be wholesome individuals who believe in themselves and what the future can offer the.At Highland,there is a healthy emphasis on both curicular and"
    },
    {
        name: "Eloi",
        image: "/news8.jpg",
        date:"11 Aug 2020",
        word:"We continually blaze new trials for our students to discover new learning opportunities that will enable them to be wholesome individuals who believe in themselves and what the future can offer the.At Highland,there is a healthy emphasis on both curicular and"
    },
    {
        name: "Eloi",
        image: "/news9.jpg",
        date:"11 Aug 2020",
        word:"We continually blaze new trials for our students to discover new learning opportunities that will enable them to be wholesome individuals who believe in themselves and what the future can offer the.At Highland,there is a healthy emphasis on both curicular and"
    }
  ];

  return (
    <div>
      <div className="gallery-containers">
        <Swiper
          slidesPerView={3}
          effect
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Pagination, Navigation,Autoplay, EffectFade]}
          className="admission-swipe-container"
        >
          {images.map((value, id) => {
            const names = `${value.image}`;
            return (
              <SwiperSlide className="swipe-slide" key={id}>
                <div className="swiper-img">
                  <div className="news-images">
                    <img src={names} className="img-test" alt="" />
                  </div>
                  <div className="news-content">
                    <div className="news-info">
                    <h3>{value.date}</h3>
                   <h4>by {value.name}</h4>
                    </div>
                   <div className="news-word">
                    {value.word}
                   </div>
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

export default News2;

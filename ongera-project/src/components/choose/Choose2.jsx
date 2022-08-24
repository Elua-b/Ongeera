import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
function Choose2() {
  return (
    <div>
         <div className='gallery-container'>
        < Swiper 
                   slidesPerView={3}
                   effect
                    spaceBetween={30}
                   loop={true}
                   pagination={{
                     clickable: true
                   }}
                     navigation={true}
                     autoplay={{delay: 2000, disableOnInteraction: false}}
                     
                     modules={[Pagination, Navigation , Autoplay , EffectFade]}
                     className="admission-swipe-container"
                     >

                         <SwiperSlide className="swipe-slide"> 
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
                         </SwiperSlide>

                  </Swiper> 
    </div>
    </div>
  )
}

export default Choose2
import React from "react";
import "./choose.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
function Choose() {
  return (
    <div className="Choose">
      <div className="image-choose">
        <img src="/packet.jpg"  className="img-choose" alt="" />
      </div>
      <div className="conte-choose">
        <h4 className="small">Why choose us</h4>
        <div className="choose-head">
          <h3>Special support &</h3>
          <h3>Caring Farm Agency</h3>
        </div>
        <div className="choose-par spcl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil cumque
          dignissimos corrupti magni! Pariatur  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil cumque
          dignissimos corrupti magni!dignissimos corrupti magni! Pariatur  Lorem,
        </div>
        <div className="circles">
          <div className="circle1">
            {/* <div className="circle-image">
              <img src="/" alt="" />
            </div> */}
          
            <div className="sp-card">
        <div className="box">
          <div className="percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle> 
              <circle cx="70" cy="70" r="70"></circle> 
              
            </svg>
            <div className="number">
              <h2>40<span>%</span></h2>
            </div>
          </div>
          
        </div>
      </div>
              <h4 className="mean">Garden Care</h4>
            
          </div>
          <div className="circle1">
            {/* <div className="circle-image">
              <img src="/" alt="" />
            </div> */}
          
            <div className="sp-card">
        <div className="box">
          <div className="percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle> 
              <circle cx="70" cy="70" r="70"></circle> 
              
            </svg>
            <div className="number">
              <h2>40<span>%</span></h2>
            </div>
          </div>
          
        </div>
      </div>
              <h4 className="mean">Garden Care</h4>
            
          </div>
          <div className="circle1">
            {/* <div className="circle-image">
              <img src="/" alt="" />
            </div> */}
          
            <div className="sp-card">
        <div className="box">
          <div className="percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle> 
              <circle cx="70" cy="70" r="70"></circle> 
              
            </svg>
            <div className= "number">
              <h2>40<span>%</span></h2>
            </div>
          </div>
          
        </div>
      </div>
              <h4 className="mean">Garden Care</h4>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Choose;

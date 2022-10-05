import React from "react";
// react-id-swiper
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// custom css
import "./HeroSlider.css";
// imagenes
import Libreria2 from "../assets/Libreria2.png";
import Libreria3 from "../assets/Libreria3.png";
import Libreria4 from "../assets/Libreria4.png";
import Libreria5 from "../assets/Libreria5.png";
import Libreria6 from "../assets/Libreria6.png";
import Libreria6A from "../assets/Libreria6A.png";
import Libreria11 from "../assets/Libreria11.png";
import Libreria11A from "../assets/Libreria11A.png";
import Libreria12 from "../assets/Libreria12.png";
import Libreria13 from "../assets/Libreria13.png";
import Libreria14 from "../assets/Libreria14.png";

const SwiperImg = ({ numeroSlide }) => {
  return (
    <>
      <div
        style={{
          width: "90%",
          height: "90%",
          overflow: "hidden",
          marginTop: "5vw",
          marginLeft: "5vw",
          position: "relative",
        }}
      >
        <Swiper
          style={{
            "--swiper-navigation-color": "black",
            "--swiper-navigation-size": "1.3rem",
          }}
          centeredSlides={true}
          autoplay={{
            delay: 10500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          initialSlide={numeroSlide}
        >
          <SwiperSlide>
            <img src={Libreria2} alt="image1" style={{ width: "100%" }}></img>
          </SwiperSlide>

          <SwiperSlide>
            <img src={Libreria3} alt="image2" style={{ width: "100%" }}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Libreria4} alt="image3" style={{ width: "100%" }}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Libreria5} alt="image4" style={{ width: "100%" }}></img>
          </SwiperSlide>

          <SwiperSlide>
            <img src={Libreria6} alt="image5" style={{ width: "100%" }}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Libreria6A} alt="image6" style={{ width: "100%" }}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Libreria11} alt="image7" style={{ width: "100%" }}></img>
          </SwiperSlide>

          <SwiperSlide>
            <img src={Libreria11A} alt="image8" style={{ width: "100%" }}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Libreria12} alt="image9" style={{ width: "100%" }}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Libreria13} alt="image10" style={{ width: "100%" }}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Libreria14} alt="image11" style={{ width: "100%" }}></img>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SwiperImg;

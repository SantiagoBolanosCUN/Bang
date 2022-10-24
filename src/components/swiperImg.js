import React from "react";
// react-id-swiper
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import YoutubeEmbed from "../components/YoutubeEmbed";

// custom css
import "./HeroSlider.css";
// imagenes
import Libreria2 from "../assets/libreria2.png";
import Libreria3 from "../assets/libreria3.png";
import Libreria4 from "../assets/libreria4.png";
import Libreria5 from "../assets/libreria5.png";
import Libreria6 from "../assets/libreria6.png";
import Libreria7 from "../assets/libreria7.png";

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
            "--swiper-navigation-size": "2.5rem",
          }}
          centeredSlides={true}
          autoplay={{
            delay: 10500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
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
            <img src={Libreria7} alt="image6" style={{ width: "100%" }}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Libreria2} alt="image7" style={{ width: "100%" }}></img>
          </SwiperSlide>

          <SwiperSlide>
            <YoutubeEmbed embedId="RSUykLfEmVE" />
          </SwiperSlide>
          <SwiperSlide>
            <YoutubeEmbed embedId="voLlzxR63Gc" />
          </SwiperSlide>
          <SwiperSlide>
            <YoutubeEmbed embedId="Pw9NbIzoYc8" />
          </SwiperSlide>
          <SwiperSlide>
            <YoutubeEmbed embedId="mghzxW_giT0" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SwiperImg;

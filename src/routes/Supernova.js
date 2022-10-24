import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import YoutubeEmbed from "../components/YoutubeEmbed";
import { history } from "../components/History";
import Navbar from "../components/Navbar";

export default function Supernova() {
  const handleOKClick = () => {
    history.push("/Home");
  };
  return (
    <section>
      <Navbar></Navbar>

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
      >
        <SwiperSlide>
          <div className="flex justify-between items-start p-4 rounded-t  border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
              {"hola"}
            </h3>
          </div>
          <YoutubeEmbed embedId="RSUykLfEmVE" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-between items-start p-4 rounded-t  border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
              {"hola2"}
            </h3>
          </div>
          <YoutubeEmbed embedId="voLlzxR63Gc" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-between items-start p-4 rounded-t  border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
              {"hola3"}
            </h3>
          </div>
          <YoutubeEmbed embedId="Pw9NbIzoYc8" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-between items-start p-4 rounded-t  border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
              {"hola4"}
            </h3>
          </div>
          <YoutubeEmbed embedId="mghzxW_giT0" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";

const HomeSlider = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/settings/getsliders`)
      .then((res) => {
        // console.log(res.data);
        setSliders(res.data.sliders);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="home_slider main_container">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        freeMode={true}
        modules={[Pagination, Autoplay, FreeMode]}
        className="mySwiper"
      >
        {sliders?.map((slider, i) => {
          return (
            <SwiperSlide key={i}>
              {/* <Image
                src={slider?.image}
                alt={slider.title}
                className="slider_img"
              /> */}
              <img
                src={slider?.image}
                alt={`Image-${slider?.title}`}
                className="slider_img"
                fetchpriority="high"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeSlider;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";

export default function Section2() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/brands/swiper.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSlides(data.swiper);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full flex items-center justify-center my-5 py-5">
      <div className="w-11/12 md:w-4/5 lg:w-3/5 py-5">
        <div className="w-full hidden md:block">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="mySwiper"
          >
            {slides.length > 0 &&
              slides.map((slide) => (
                <SwiperSlide
                  key={slide.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden w-full"
                >
                  <img
                    src={slide.url}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="p-8">
                    <h3 className="text-3xl font-bold">{slide.title}</h3>
                    <p className="mt-4 text-lg">{slide.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className="w-full block md:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="mySwiper"
          >
            {slides.length > 0 &&
              slides.map((slide) => (
                <SwiperSlide
                  key={slide.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden w-full"
                >
                  <img
                    src={slide.url}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="p-8">
                    <h3 className="text-3xl font-bold">{slide.title}</h3>
                    <p className="mt-4 text-lg">{slide.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";

export default function App() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/home/slide.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSlides(data.slides);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full">
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
            <SwiperSlide key={slide.id} className="relative lg:max-h-[90vh]">
              <img
                src={slide.url}
                alt={slide.description}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

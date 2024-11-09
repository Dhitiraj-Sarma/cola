import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa6";

function Slide() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/impact/impact.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSlides(data.impact);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="w-full mt-14 py-12">
      <h2 className="font-bold text-4xl text-center py-5 my-5">
        Latest Sustainability News
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper my-5 rounded-lg"
      >
        {slides.length > 0 &&
          slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="bg-white flex flex-col items-center justify-center rounded-xl">
                <img
                  src={slide.url}
                  alt={slide.desc}
                  className="w-full h-full object-cover"
                />
                <div className="flex flex-col pb-5 ">
                  <div className="px-10 py-5">
                    <h2>{slide.title}</h2>
                    <p className="text-sm">{slide.desc}</p>
                  </div>
                  <button className="flex items-center justify-center">
                    <p>See more</p> <FaArrowRight />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Slide;

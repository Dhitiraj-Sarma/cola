import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

function BuyNow() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/brands/buynow.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setItem(data.item);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w-full flex items-center justify-center my-5 py-5">
        <div className="w-11/12 md:w-4/5 lg:w-3/5 py-5">
          <div className="w-full hidden md:block">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              className="mySwiper"
            >
              {item.length > 0 &&
                item.map((slide) => (
                  <SwiperSlide
                    key={slide.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden w-full"
                  >
                    <img
                      src={slide.url}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />

                    <h3 className="text-3xl p-8 text-start font-bold">
                      {slide.title}
                    </h3>

                    <button className="flex justify-start items-center p-8">
                      <p>Buy Now</p>
                      <FaArrowRight />
                    </button>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          <div className="w-full md:hidden">
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
              {item.length > 0 &&
                item.map((slide) => (
                  <SwiperSlide
                    key={slide.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden w-full"
                  >
                    <img
                      src={slide.url}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />

                    <h3 className="text-3xl p-8 text-start font-bold">
                      {slide.title}
                    </h3>

                    <button className="flex justify-start items-center p-8">
                      <p>Buy Now</p>
                      <FaArrowRight />
                    </button>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="w-full flex  items-center justify-center my-5 py-5">
        <div className="w-11/12 md:w-4/5 lg:w-3/5 bg-black flex flex-col md:flex-row items-center justify-between gap-5 px-24 py-12 rounded-xl">
          <div>
            <h3 className="text-white text-3xl text-nowrap font-bold">
              Follow Coca‑Cola
            </h3>
          </div>
          <div className="text-white flex justify-evenly items-center gap-5">
            <FaFacebookF className="text-2xl" />
            <BsTwitterX className="text-2xl" />
            <FaInstagram className="text-3xl" />
            <FiYoutube className="text-3xl" />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center my-5 py-5">
        <div className="w-11/12 md:w-4/5 lg:w-3/5 pb-5 text-center mb-5">
          <p>
            ¹CARBONATED WATER. COCA-COLA IS A REGISTERED TRADEMARK OF THE
            COCA-COLA COMPANY. VEGETARIAN PRODUCT.
          </p>
        </div>
      </div>
    </>
  );
}

export default BuyNow;

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Section4() {
  const [slides, setSlides] = useState([]);

  const navigate = useNavigate();
  const handleBrandClick = (id) => {
    navigate(`/brands/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/brands/brands.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSlides(data.brand);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-11/12 md:w-4/5 lg:w-3/5 py-5">
      <div className="flex flex-col gap-7 justify-center items-center">
        <h2 className="text-3xl text-center font-bold">Explore Our Brands</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {slides.length > 0 &&
            slides.slice(0, 6).map((slide) => (
              <div
                key={slide.id}
                onClick={() => handleBrandClick(slide.id)}
                className="bg-white rounded-xl shadow-md p-7 flex items-center justify-center w-[270px] h-auto transition-all ease-linear duration-200 hover:scale-105"
              >
                <img
                  src={slide.url}
                  alt={slide.title}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
        </div>

        <button className="px-28 py-2 text-white font-bold bg-black rounded-full hover:bg-gray-800">
          <Link to="/brands">View All</Link>
        </button>
      </div>
    </div>
  );
}

export default Section4;

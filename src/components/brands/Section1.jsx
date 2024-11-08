// import { useEffect, useState } from "react";

// function Brands() {
//   const [slides, setSlides] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/brands/brands.json");
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setSlides(data.brand);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <div className="w-full min-h-screen flex flex-col justify-center items-center">
//       <div className="w-11/12 md:w-4/5 lg:w-3/5 py-5">
//         <div className="flex flex-col gap-7 justify-center items-center">
//           <h2 className="text-3xl text-center font-bold">Explore Our Brands</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
//             {slides.length > 0 &&
//               slides.map((slide) => (
//                 <div
//                   key={slide.id}
//                   className="bg-white rounded-xl shadow-md p-5 md:p-7 flex items-center justify-center w-40 md:w-[270px] h-auto transition-all ease-linear duration-200 hover:scale-105"
//                 >
//                   <img
//                     src={slide.url}
//                     alt={slide.title}
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Brands;

import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useNavigate } from "react-router-dom";

function Brands() {
  const [slides, setSlides] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
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

  // Function to handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Function to filter and sort the slides
  const getFilteredSlides = () => {
    if (selectedCategory === "All") {
      return slides;
    }
    return slides.filter((slide) => slide.category === selectedCategory);
  };

  // Categories for the dropdown
  const categories = [
    "All",
    "Sparkling",
    "Nutrition and Hydration",
    "Juices",
    "Tea & Coffee",
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 md:w-4/5 lg:w-3/5 py-5 ">
        <div className="flex flex-col gap-7 justify-center items-center my-5 py-5">
          <h2 className="text-4xl text-center font-bold">Explore Our Brands</h2>
          <p className="text-center text-xl">
            Select an option to apply sort order
          </p>

          {/* Using shadcn Select Component */}
          <Select onValueChange={handleCategoryChange} value={selectedCategory}>
            <SelectTrigger className="w-full md:w-1/2 lg:w-1/3">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Displaying the slides */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {getFilteredSlides().length > 0 ? (
              getFilteredSlides().map((slide) => (
                <div
                  key={slide.id}
                  onClick={() => handleBrandClick(slide.id)}
                  className="bg-white rounded-xl shadow-md p-5 md:p-7 flex items-center justify-center w-40 md:w-[270px] h-auto transition-all ease-linear duration-200 hover:scale-105"
                >
                  <img
                    src={slide.url}
                    alt={slide.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500">No items to display</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;

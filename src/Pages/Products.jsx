// Products.js

import BuyNow from "@/components/Products/BuyNow";
import DisplayProd from "@/components/Products/DisplayProd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const [slides, setSlides] = useState([]);
  const { id } = useParams();

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
  const brand = slides.find((item) => item.id === id);
  //   const brand = brandData.find((item) => item.id === id);

  if (!brand) return <p>Brand not found</p>;

  return (
    <div className="min-h-screen w-full">
      <div className="flex-col flex items-center justify-center">
        <div className="w-full flex items-center bg-white pb-4 justify-center">
          <img src={brand.url} alt={brand.title} className="w-20 h-auto" />
        </div>
        <div className="w-11/12 md:w-4/5 lg:w-3/5 py-5">
          <div className="w-full">
            <img src={brand.featured} />
          </div>
        </div>
        <DisplayProd brand={brand} />

        <BuyNow />
      </div>
    </div>
  );
};

export default Products;

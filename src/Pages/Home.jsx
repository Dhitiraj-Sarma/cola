/* eslint-disable react/no-unescaped-entities */
import Section1 from "@/components/home/section1";
import Slider from "../components/Slider";
function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="md:w-4/5 w-11/12 lg:w-3/4 mt-10 p-6">
        <Slider />
      </div>
      <div className="w-11/12 md:w-4/5 lg:w-3/5 py-5">
        <Section1 />
      </div>
      <div className="w-11/12 lg:w-3/5 md:w-4/5 py-5">
        <div className="flex items-center justify-center flex-col gap-10">
          <div>
            <h1 className="text-center text-3xl font-bold">
              Sustainability news
            </h1>
          </div>
          <div className="justify-center gap-5 md:gap-0 flex flex-col md:flex-row md:space-x-6 max-w-7xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
              <img
                className="w-full h-auto object-cover"
                src="/home/sea.webp"
                alt="sea"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold">
                  On a mission to a world without waste
                </h3>
                <p className="mt-2">
                  We aim to collect back packaging for recycling equivalent to
                  what we put out in the market by 2030.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center mt-4 text-lg font-semibold text-gray-700 hover:text-gray-900"
                >
                  Learn more
                  <span className="ml-2">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
              <img
                className="w-full h-auto object-cover"
                src="/home/orange.webp"
                alt="sea"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold">
                  Promoting Sustainable Agriculture
                </h3>
                <p className=" mt-2">
                  Our efforts are focused on improving the overall fruit
                  availability, increasing farming efficiency as well as
                  building food processing capacity in the country, thereby
                  helping farmers increase their income.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center mt-4 text-lg font-semibold text-gray-700 hover:text-gray-900"
                >
                  Learn more
                  <span className="ml-2">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 md:w-4/5 lg:w-3/5 py-5">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-5">
          <div className="rounded-lg shadow-lg overflow-hidden w-full h-auto">
            <img
              src="/home/rukmat.webp"
              alt="Limca Book of Records 2023"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className=" bg-white py-8 px-5 lg:py-16 lg:px-10 rounded-2xl text-center  w-full">
            <h2 className="text-3xl font-bold mb-4 leading-tight">
              Presenting the “Super 30” glorious years of Limca® Book of
              Records!
            </h2>
            <p className="text-lg mb-6">
              This year’s Limca Book of Records is a combined edition of two
              challenging years and celebrates stellar victories and
              accomplishments in human endeavor, education, adventure, business,
              cinema, the natural world, literature, and the arts.
            </p>
            <button className="inline-flex items-center px-20 lg:px-28 py-2 border-2 border-gray-900  font-bold rounded-full hover:bg-gray-300 transition ease-in-out duration-200">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="w-11/12 md:w-4/5 lg:w-3/5 py-5">
        <div className="flex flex-col gap-7 justify-center items-center">
          <h2 className="text-3xl text-center font-bold">Explore Our Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            <div className="bg-white rounded-xl shadow-md p-7 flex items-center justify-center w-[270px] h-auto transition-all ease-linear duration-200 hover:scale-105">
              <img
                className="w-full h-full object-contain"
                src="/home/cola.svg"
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-7 flex items-center justify-center w-[270px] h-auto transition-all ease-linear duration-200 hover:scale-105">
              <img
                className="w-full h-full object-contain"
                src="/home/sprite.svg"
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-7 flex items-center justify-center w-[270px] h-auto transition-all ease-linear duration-200 hover:scale-105">
              <img
                className="w-full h-full object-contain"
                src="/home/thums.svg"
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-7 flex items-center justify-center w-[270px] h-auto transition-all ease-linear duration-200 hover:scale-105">
              <img
                className="w-full h-full object-contain"
                src="/home/Limca.svg"
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-7 flex items-center justify-center w-[270px] h-auto transition-all ease-linear duration-200 hover:scale-105">
              <img
                className="w-full h-full object-contain"
                src="/home/fanta.webp"
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-7 flex items-center justify-center w-[270px] h-auto transition-all ease-linear duration-200 hover:scale-105">
              <img
                className="w-full h-full object-contain"
                src="/home/maaza.svg"
              />
            </div>
          </div>
          <button className="px-28 py-2 text-white font-bold bg-black rounded-full hover:bg-gray-800">
            View All
          </button>
        </div>
      </div>
      <div className="lg:w-3/5 w-11/12 md:w-4/5 mb-5 py-5 flex flex-col gap-3">
        <p className="font-medium text-base text-justify">
          COCA-COLA: CARBONATED WATER. COCA-COLA IS A REGISTERED TRADEMARK OF
          THE COCA-COLA COMPANY. VEGETARIAN PRODUCT.
        </p>
        <p className="font-medium text-base text-justify">
          COCA-COLA ZERO SUGAR: CARBONATED WATER. CONTAINS NON-CALORIC
          SWEETENER. THIS CARBONATED WATER CONTAINS AN ADMIXTURE OF SUCRALOSE
          AND ACESULFAME POTASSIUM. NOT RECOMMENDED FOR CHILDREN, PREGNANT AND
          LACTATING MOTHERS. TRADEMARK OWNER: THE COCA-COLA COMPANY. VEGETARIAN
          PRODUCT.
        </p>
        <p className="font-medium text-base text-justify">
          DIET COKE: CARBONATED WATER. CONTAINS AN ADMIXTURE OF ASPARTAME AND
          ACESULFAME POTASSIUM. NOT RECOMMENDED FOR PHENYLKETONURICS; FOR
          CHILDREN; PREGNANT AND LACTATING MOTHERS. COKE IS A REGISTERED
          TRADEMARK OF THE COCA-COLA COMPANY. VEGETARIAN PRODUCT.
        </p>
        <p className="font-medium text-base text-justify">
          SPRITE: CARBONATED WATER. SPRITE IS A REGISTERED TRADEMARK OF THE
          COCA-COLA COMPANY. VEGETARIAN PRODUCT.
        </p>
        <p className="font-medium text-base text-justify">
          THUMS UP: CARBONATED WATER. THUMS UP IS A REGISTERED TRADEMARK OF THE
          COCA-COLA COMPANY. VEGETARIAN PRODUCT.
        </p>
        <p className="font-medium text-base text-justify">
          LIMCA: CARBONATED WATER. ADDED LIME AND LEMON FLAVORS. 'LIME AND
          LEMONI' IS A CREATIVE EXPRESSION USED FOR LIMCA. LIMCA IS A REGISTERED
          TRADEMARK OF THE COCA-COLA COMPANY. VEGETARIAN PRODUCT.
        </p>
        <p className="font-medium text-base text-justify">
          LIMCA SPORTZ: READY TO SERVE FRUIT BEVERAGE. *CONTAINS CARBOHYDRATE
          (INCLUDES 2.2% GLUCOSE) AND WITH ELECTROLYTES (SODIUM, POTASSIUM,
          CHLORIDE) WHICH HELP IN FASTER REHYDRATION THROUGH QUICK REPLACEMENT
          OF FLUID AND SALTS LOST IN SWEAT. LIMCA IS A REGISTERED TRADEMARK OF
          THE COCA-COLA COMPANY. VEGETARIAN PRODUCT.
        </p>
        <p className="font-medium text-base text-justify">
          FANTA: CARBONATED WATER. FANTA IS A REGISTERED TRADEMARK OF THE
          COCA-COLA COMPANY. VEGETARIAN PRODUCT.
        </p>
        <p className="font-medium text-base text-justify">
          FANTA APPLE DELITE: CARBONATED FRUIT BEVERAGE. CONTAINS 10.5% APPLE
          JUICE. CONTAINS NO FRUIT PIECES. "BITE" REFERS TO CRISPY, CRUNCHY
          TASTE OF APPLE. FANTA IS A REGISTERED TRADEMARK OF THE COCA-COLA
          COMPANY. VEGETARIAN PRODUCT.
        </p>
        <p className="font-medium text-base text-justify">
          MAAZA ORIGINAL: READY TO SERVE FRUIT DRINK. MAAZA MANGO CONTAINS BLEND
          OF MANGO PULP INCLUDING ALPHONSO. MAAZA IS A REGISTERED TRADEMARK OF
          THE COCA-COLA COMPANY
        </p>
        <p className="font-medium text-base text-justify">
          MAAZA AAM PANNA: READY TO SERVE FRUIT DRINK. MAAZA AAM PANNA IS A
          REGISTERED TRADEMARK OF THE COCA-COLA COMPANY
        </p>
        <p className="font-medium text-base text-justify">
          SCHWEPPES BITTER LEMON, SCHWEPPES MINT MOJITO: CARBONATED WATER.
          SCHWEPPES IS A REGISTERED TRADEMARK OF EUROPEAN REFRESHMENTS UNLIMITED
          COMPANY. DRINK RESPONSIBLY.
        </p>
        <p className="font-medium text-base text-justify">
          CHARGED BY THUMS UP: CAFFEINATED BEVERAGE. *CHARGED BY THUMS UP HAS
          2.8 TIMES CAFFEINE COMPARED TO REGULAR 250ml THUMS UP. CONTAINS ADDED
          BERRY FLAVOURS. HIGH CAFFEINE: 62.5mg/250ml. NOT RECOMMENDED FOR
          CHILDREN, PREGNANT OR LACTATING WOMEN, PERSONS SENSITIVE TO CAFFEINE.
          CONSUME NOT MORE THAN 500ml PER DAY. THUMS UP IS A REGISTERED
          TRADEMARK OF THE COCA-COLA COMPANY. * MRP INCLUSIVE OF ALL TAXES.
          VEGETARIAN PRODUCT.
        </p>
      </div>
    </div>
  );
}

export default Home;

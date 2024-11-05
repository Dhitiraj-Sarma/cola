function Section4() {
  return (
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
  );
}

export default Section4;

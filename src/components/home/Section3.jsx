function Section3() {
  return (
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
            Presenting the “Super 30” glorious years of Limca® Book of Records!
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
  );
}

export default Section3;

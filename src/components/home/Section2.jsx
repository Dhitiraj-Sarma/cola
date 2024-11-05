function Section2() {
  return (
    <div className="w-11/12 md:w-4/5 lg:w-3/5 py-5">
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
                availability, increasing farming efficiency as well as building
                food processing capacity in the country, thereby helping farmers
                increase their income.
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
  );
}

export default Section2;

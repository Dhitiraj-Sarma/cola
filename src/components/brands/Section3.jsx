function Section3() {
  return (
    <div className="w-full flex items-center justify-center my-5 py-5">
      <div className="w-11/12 md:w-4/5 lg:w-3/5 py-5">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-5">
          <div className="rounded-lg shadow-lg overflow-hidden w-full h-auto">
            <img
              src="/brands/Beverages.webp"
              alt="Limca Book of Records 2023"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className=" bg-white py-8 px-5 lg:py-16 lg:px-10 rounded-2xl text-center h-[430px]  w-full">
            <h2 className="text-3xl font-bold mb-4 leading-tight">
              Beverages for life
            </h2>
            <p className="text-lg mb-6">
              We have evolved by not only offering a range of safe, high quality
              and refreshing beverage options but also providing a great
              drinking experience to consumers. All this is done in ways that
              create a more sustainable business and better shared future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;

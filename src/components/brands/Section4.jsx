function Section4() {
  return (
    <>
      <div className="w-full flex items-center justify-center my-5 py-5">
        <div className="w-11/12 md:w-4/5 lg:w-3/5 py-5">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-5">
            <div className=" bg-white py-8 px-5 lg:py-16 lg:px-10 rounded-2xl text-center h-[430px]  w-full">
              <h2 className="text-3xl font-bold mb-4 leading-tight">
                Refreshment for everyone for every occasion
              </h2>
              <p className="text-lg mb-6">
                Our vision is to craft the brands and choice of drinks that
                people love, to refresh them in body and spirit. And done in
                ways that create a more sustainable business and better shared
                future.
              </p>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden w-full h-auto">
              <img
                src="/brands/refreshment.webp"
                alt="Limca Book of Records 2023"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center my-6 py-6">
        TRADEMARK OWNER: THE COCA-COLA COMPANY
      </p>
    </>
  );
}

export default Section4;

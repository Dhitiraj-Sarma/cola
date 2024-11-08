/* eslint-disable react/prop-types */
function DisplayProd({ brand }) {
  return (
    <div className="w-full flex items-center justify-center my-5 py-5 ">
      <div className="w-11/12 md:w-4/5 lg:w-3/5 py-5">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl text-black pt-5 pb-10 mb-10 font-bold">
            Products
          </h2>

          <div className="flex items-center gap-5 justify-between w-full py-5 my-5">
            <div className="bg-white rounded-2xl px-48 py-10 mr-5">
              {brand.products.map((item) => (
                <img
                  src={item.url[0]}
                  key={item.url[0]}
                  className="w-36 h-auto"
                />
              ))}
            </div>
            <div className="ml-5">
              {brand.products.map((item) => (
                <div
                  key={item.title[0]}
                  className="flex flex-col gap-5 items-start justify-start px-16 py-16"
                >
                  <h2 className="font-bold text-4xl">{item.title[0]}</h2>
                  <p className="font-medium text-lg">{item.desc1[0]}</p>
                  <div>
                    <h3 className="font-medium text-xl">
                      {item.info[0].heading}
                    </h3>
                    <p className="font-medium text-lg">{item.info[0].Cans}</p>
                    <p className="font-medium text-lg">{item.info[0].RGB}</p>
                    <p className="font-medium text-lg">{item.info[0].PET}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-5 justify-between w-full py-5 my-5">
            <div className="bg-white rounded-2xl px-48 py-10 mr-5">
              {brand.products.map((item) => (
                <img
                  src={item.url[1]}
                  key={item.url[1]}
                  className="w-80 h-auto"
                />
              ))}
            </div>
            <div className="ml-5">
              {brand.products.map((item) => (
                <div
                  key={item.title[1]}
                  className="flex flex-col gap-5 items-start justify-start px-16 py-16"
                >
                  <h2 className="font-bold text-4xl">{item.title[1]}</h2>
                  <p className="font-medium text-lg">{item.desc1[1]}</p>
                  <div>
                    <h3 className="font-medium text-xl">
                      {item.info[1].heading}
                    </h3>
                    <p className="font-medium text-lg">{item.info[1].Cans}</p>
                    <p className="font-medium text-lg">{item.info[1].RGB}</p>
                    <p className="font-medium text-lg">{item.info[1].PET}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-5 justify-between w-full py-5 my-5">
            <div className="bg-white rounded-2xl px-48 py-10 mr-5">
              {brand.products.map((item) => (
                <img
                  src={item.url[2]}
                  key={item.url[2]}
                  className="w-80 h-auto"
                />
              ))}
            </div>
            <div className="ml-5">
              {brand.products.map((item) => (
                <div
                  key={item.title[2]}
                  className="flex flex-col gap-5 items-start justify-start px-16 py-16"
                >
                  <h2 className="font-bold text-4xl">{item.title[2]}</h2>
                  <p className="font-medium text-lg">{item.desc1[2]}</p>
                  <div>
                    <h3 className="font-medium text-xl">
                      {item.info[2].heading}
                    </h3>
                    <p className="font-medium text-lg">{item.info[2].Cans}</p>
                    <p className="font-medium text-lg">{item.info[2].RGB}</p>
                    <p className="font-medium text-lg">{item.info[2].PET}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayProd;

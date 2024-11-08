/* eslint-disable react/prop-types */
function DisplayProd({ brand }) {
  return (
    <div className="w-full flex items-center justify-center my-5 py-5">
      <div className="w-11/12 md:w-4/5 lg:w-3/5 py-5">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl text-black pt-5 pb-10 mb-10 font-bold">
            Products
          </h2>
          {brand.products.map((item, productIndex) => (
            <div key={productIndex}>
              {item.url.map((url, index) => (
                <div
                  className="flex items-center gap-5 justify-between w-full py-5 my-5"
                  key={`${productIndex}-${index}`}
                >
                  <div className="bg-white rounded-2xl px-48 py-10 mr-5">
                    <img
                      src={url}
                      alt={`Product ${index}`}
                      className="w-80 h-auto"
                    />
                  </div>
                  <div className="ml-5">
                    {item.title[index] && (
                      <div className="flex flex-col gap-5 items-start justify-start px-16 py-16">
                        <h2 className="font-bold text-4xl">
                          {item.title[index]}
                        </h2>
                        <p className="font-medium text-lg">
                          {item.desc1[index]}
                        </p>
                        {item.info[index] && (
                          <div>
                            <h3 className="font-medium text-xl">
                              {item.info[index].heading}
                            </h3>
                            <p className="font-medium text-lg">
                              {item.info[index].Cans}
                            </p>
                            <p className="font-medium text-lg">
                              {item.info[index].RGB}
                            </p>
                            <p className="font-medium text-lg">
                              {item.info[index].PET}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DisplayProd;

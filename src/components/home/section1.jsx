function Section1() {
  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <div>
        <h1 className="text-3xl text-center font-bold">Experiences</h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between gap-10 py-1">
        <div className="flex flex-col justify-center items-center md:items-start gap-10 ">
          <p className="text-3xl px-6 md:px-1 md:text-4xl font-bold">
            Coke Studio Bharat: Drink.
            <br /> Scan. Unlock Exclusive Music.
          </p>
          <button className="inline-flex items-center border-2 border-black px-20 lg:px-28 font-bold py-2 text-base rounded-full hover:bg-gray-300">
            Explore Now
          </button>
        </div>

        <img
          className="rounded-2xl w-full lg:w-1/2 object-cover h-auto"
          src="/home/home1.webp"
          alt="coc"
        />
      </div>
    </div>
  );
}

export default Section1;

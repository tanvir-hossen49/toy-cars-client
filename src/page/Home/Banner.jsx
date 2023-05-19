const Banner = () => {
  return (
    <div className="carousel mx-4 lg:h-[600px]">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src="https://i.ibb.co/PWBfR0g/download.webp" className="w-full " />

        <div className="absolute flex justify-between transform left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>

        <div className="text-5xl  absolute top-1/4  left-20 z-40 hidden lg:block w-1/2">
          <h4 className="text-3xl text-white font-bold italic tracking-wider">
            Welcome
          </h4>
          <h1 className="text-6xl text-white font-extrabold leading-normal">
            Turbo Toys
          </h1>
          <p className="text-3xl text-white font-semibold">
            Check out - and check off - our list of must - haves for the new
            arrival
          </p>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full ">
        <img src="https://i.ibb.co/8XrpQSL/download.webp" className="w-full" />
        <div className="absolute flex justify-between transform left-5 right-5 top-1/2 z-50">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>

        <div className="text-5xl absolute top-1/4  left-20 z-40 hidden lg:block w-1/2">
          <h4 className="text-3xl text-white font-bold italic tracking-wider">
            welcome
          </h4>
          <h1 className="text-6xl text-white font-extrabold leading-normal">
            Turbo Toys
          </h1>
          <p className="text-3xl text-white font-semibold  ">
            kid-friendly stuff at parent-friendly prices
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

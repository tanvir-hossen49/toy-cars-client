const DiscountProduct = () => {
  return (
    <div className="bg-[#c3c3cd] p-8">
      <div className="my-container lg:flex items-center justify-between">
        <div className="bg-white p-5 rounded-lg">
          <div className="text-center space-y-3 p-5 border-black border-4">
            <h4 className="uppercase text-center font-semibold">
              All Toy Collection
            </h4>
            <h4 className="font-bold text-4xl">50 % OFF!</h4>
            <button className="btn px-8">Buy Now</button>
            <p className="font-light text-2xl">For limited Offer Only</p>
          </div>
        </div>
        <div className="lg:flex lg:items-center lg:justify-center ">
          <img
            src="https://i.ibb.co/rp1fYZF/istockphoto-1024607678-612x612-removebg-preview.png"
            alt=""
            className="lg:w-2/4 w-3/4 mx-auto"
          />
          <img
            src="https://i.ibb.co/Lx4f1WC/istockphoto-950270650-612x612-removebg-preview.png"
            alt=""
            className="lg:w-1/3 w-3/4 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountProduct;

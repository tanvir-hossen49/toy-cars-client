import { useLoaderData } from "react-router-dom";
import RatingComponent from "./RatingComponent";

const ToyDetails = () => {
  const toyData = useLoaderData();

  const {
    name,
    description,
    photoURL,
    price,
    quantity,
    ratings,
    sellerName,
    sellerEmail,
  } = toyData;
  return (
    <div className="my-container">
      <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
        <div className="col-span-4 ">
          <div className=" transition duration-150 ease-in hover:opacity-90">
            <img src={photoURL} alt="" className="w-full object-cover" />
          </div>
        </div>

        <div className="col-span-5 pt-8 lg:pt-0">
          <div className="mb-7 border-b border-gray-300 pb-7">
            <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
              {name}
            </h2>
            <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
              {description}
            </p>
            <div className="mt-5 flex items-center justify-between">
              <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                ${price}
              </div>

              <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                {quantity} pcs available
              </div>

              <div className="font-segoe text-sm text-gray-400  md:text-base lg:text-lg xl:text-xl">
                <RatingComponent rating={ratings} />
              </div>
            </div>
          </div>

          <div className=" ">
            <div className="mb-4">
              <h3 className="text-heading md:text-2xl text-base mb-2.5  font-semibold capitalize ">
                Seller Info
              </h3>
              <div className="md:flex items-center justify-between flex-wrap">
                <p className="text-heading mb-2.5 text-base font-light capitalize md:text-lg">
                  Name: {sellerName}
                </p>
                <p className="text-heading mb-2.5 text-base font-light capitalize md:text-lg">
                  Email: {sellerEmail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;

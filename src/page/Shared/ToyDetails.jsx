import { useLoaderData } from "react-router-dom";
import RatingComponent from "./RatingComponent";

const ToyDetails = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="my-container">
      <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
        <div className="col-span-4 ">
          <div className=" transition duration-150 ease-in hover:opacity-90">
            <img
              src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="Nike Air Max 95 By You--0"
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="col-span-5 pt-8 lg:pt-0">
          <div className="mb-7 border-b border-gray-300 pb-7">
            <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
              Nike Air Max 95 By You
            </h2>
            <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
              The Nike Air Max 95 By You lets you take inspiration from the
              human body itself. The midsole represents the spine, graduated
              panels are the muscles, the lace loops are the shoe&apos;s ribs
              and the mesh in the upper is the skin.
            </p>
            <div className="mt-5 flex items-center justify-between">
              <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                $40.00
              </div>

              <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                50 pcs available
              </div>

              <div className="font-segoe text-sm text-gray-400  md:text-base lg:text-lg xl:text-xl">
                <RatingComponent rating={5} />
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
                  Name: Golam aziz Tanvir
                </p>
                <p className="text-heading mb-2.5 text-base font-light capitalize md:text-lg">
                  Email: thossen49@gmail.com
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

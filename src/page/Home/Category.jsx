import Rating from "react-rating";
const Category = ({ category }) => {
  const { toyName, price, image, ratings } = category;

  const star = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="orange"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );

  const statEmpty = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );

  return (
    <div className="w-full mt-5 relative rounded-md border overflow-hidden space-y-5">
      <img
        src={image}
        alt="Laptop"
        className="h-1/2 hover:scale-105 transition-transform duration-300  w-full rounded-md object-cover"
      />
      <div className="p-4 h-1/2  flex flex-col">
        <h1 className="text-2xl font-semibold">{toyName}</h1>

        <div className="flex justify-between flex-wrap items-center">
          <p className="mt-3 text-2xl text-gray-600">${price}</p>
          <p className="mt-3 text-2xl text-gray-600">
            <Rating
              placeholderRating={Math.round(ratings)}
              readonly
              emptySymbol={statEmpty}
              placeholderSymbol={star}
              fullSymbol={star}
            />
          </p>
        </div>

        <button className="btn btn-block text-xl mt-auto mb-5">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Category;

import { Link } from "react-router-dom";
import RatingComponent from "../Shared/RatingComponent";
const Category = ({ category }) => {
  const { _id, toyName, price, image, ratings } = category;
  return (
    <div className="w-full mt-5 relative rounded-md border overflow-hidden space-y-5">
      <img
        src={image}
        alt=""
        className="h-1/2 hover:scale-105 transition-transform duration-300  w-full rounded-md object-cover"
      />
      <div className="p-4 h-1/2  flex flex-col">
        <h1 className="text-2xl font-semibold">{toyName}</h1>

        <div className="flex justify-between flex-wrap items-center">
          <p className="mt-3 text-2xl text-gray-600">${price}</p>
          <p className="mt-3 text-2xl text-gray-600">
            <RatingComponent rating={ratings} />
          </p>
        </div>

        <Link to={`/toy/${_id}`} className="btn btn-block text-xl mt-auto mb-5">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Category;

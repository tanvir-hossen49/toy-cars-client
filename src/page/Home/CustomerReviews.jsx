import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/customer-review")
      .then(res => res.json())
      .then(data => setReviews(data));
  });

  return (
    <div className="my-container">
      <h2 className="text-center text-4xl font-bold">
        Read what our customers say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {reviews?.map(review => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="btn px-8">View More</button>
      </div>
    </div>
  );
};

export default CustomerReviews;

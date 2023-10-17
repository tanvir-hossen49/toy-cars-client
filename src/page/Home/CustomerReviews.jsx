import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import SectionTitle from "../../components/SectionTitle";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://toy-car-server-five.vercel.app/customer-review"
        );
        const data = await response.json();
        console.log(data);
        setReviews(data);
      } catch (error) {
        console.log("Fetch error:customer review ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="my-container">
      <SectionTitle title="Read what our customers say" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {reviews?.slice(0, isShow ? reviews?.length : 2).map(review => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>

      <div onClick={() => setIsShow(!isShow)} className="text-center mt-8">
        <button className="btn px-8">{isShow ? "hide all" : "view all"}</button>
      </div>
    </div>
  );
};

export default CustomerReviews;

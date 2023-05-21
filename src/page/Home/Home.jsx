import useTitle from "../Hook/useTitle";
import Banner from "./Banner";
import Categories from "./Categories";
import CustomerReview from "./CustomerReviews";
import DiscountProduct from "./DiscountProduct";
import Gallery from "./Gallery";

const Home = () => {
  useTitle("Home");
  return (
    <div className="space-y-20">
      <Banner />
      <Gallery />
      <Categories />
      <DiscountProduct />
      <CustomerReview />
    </div>
  );
};

export default Home;

import useTitle from "../Hook/useTitle";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Categories from "./Categories";
import CustomerReview from "./CustomerReviews";
import DiscountProduct from "./DiscountProduct";
import Gallery from "./Gallery";
import TopRatedProduct from "./TopRatedProduct";

const Home = () => {
  useTitle("Home");
  return (
    <div className="space-y-20">
      <Banner />
      <Gallery />
      <Categories />
      <TopRatedProduct />
      <DiscountProduct />
      <AboutUs />
      <CustomerReview />
    </div>
  );
};

export default Home;

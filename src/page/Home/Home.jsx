import Banner from "./Banner";
import Categories from "./Categories";
import CustomerReview from "./CustomerReviews";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div className="space-y-20">
      <Banner />
      <Gallery />
      <Categories />
      <CustomerReview />
    </div>
  );
};

export default Home;

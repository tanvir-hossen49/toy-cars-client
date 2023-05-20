import Banner from "./Banner";
import Categories from "./Categories";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div className="space-y-16">
      <Banner />
      <Gallery />
      <Categories />
    </div>
  );
};

export default Home;

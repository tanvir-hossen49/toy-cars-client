import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import RatingComponent from "../Shared/RatingComponent";

const TopRatedProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await fetch(
          "https://toy-car-server-five.vercel.app/top-rated-product"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error: fetch data of new arrivals", error);
      }
    };

    fetchNewArrivals();
  }, []);

  return (
    <div className="bg-[#f5f6f7] py-16 my-container">
      <SectionTitle title="Top rated product" />
      <br />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {products?.map(product => {
          return (
            <div key={product._id} className="text-center">
              <div className="relative">
                <img
                  src={product.photoURL}
                  className="h-[250px] w-full object-cover"
                  alt={product.name}
                />
                <div className="absolute top-2 right-2">
                  <RatingComponent rating={product.ratings} />
                </div>
              </div>
              <h4 className="py-3 text-xl font-semibold">{product.name}</h4>
              <p className="text-blue-500 text-lg">${product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRatedProduct;

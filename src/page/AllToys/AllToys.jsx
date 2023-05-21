import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const toysData = useLoaderData();

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
  };

  const filteredToys = toysData.filter(toy =>
    toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="overflow-x-auto my-container ">
      <h2 className="text-2xl lg:text-5xl text-center font-semibold">
        All Toys
      </h2>

      <div className="max-w-md mx-auto my-6 border rounded-lg">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <SearchIcon />
          </div>
          <input
            className=" h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            placeholder="Search by Toy Name"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>SL.</th>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Active</th>
          </tr>
        </thead>

        <tbody>
          {filteredToys.map((toy, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{toy.sellerName}</td>
              <td>{toy.toyName}</td>
              <td>{toy.subcategory}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <td>
                <button className="btn btn-outline">View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Edit, Trash2 } from "lucide-react";
import useTitle from "../Hook/useTitle";
import { showToast } from "../../utilities/ShowToast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortType, setSortType] = useState("descending");

  useTitle("My Toy");

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://toy-car-server-five.vercel.app/my-toys/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount === 1) {
              const remining = myToys.filter(myToy => myToy._id !== id);
              setMyToys(remining);
              showToast("Toy Deleted");
            }
          });
      }
    });
  };

  useEffect(() => {
    fetch(
      `https://toy-car-server-five.vercel.app/my-toys?email=${user?.email}&sortType=${sortType}`
    )
      .then(res => res.json())
      .then(data => setMyToys(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType]);

  const handleSortTypeChange = event => {
    setSortType(event.target.value);
  };

  return (
    <div className="overflow-x-auto my-container ">
      <h2 className="text-2xl lg:text-5xl mb-5 text-center section-header font-semibold">
        My Toys
      </h2>

      <div className="text-right mb-5">
        <select
          className=" p-5 border"
          value={sortType}
          onChange={handleSortTypeChange}
        >
          <option value="ascending">Price (Ascending)</option>
          <option value="descending">Price (Descending)</option>
        </select>
      </div>

      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Image</th>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {myToys.map(myToy => {
            return (
              <tr key={myToy._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={myToy.photoURL}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{myToy.sellerName}</td>
                <td>{myToy.name}</td>
                <td>${myToy.price}</td>
                <td>{myToy.quantity}pcs</td>
                <td className="flex items-center gap-5 ">
                  <Link
                    to={`/my-toy/${myToy._id}`}
                    className="cursor-pointer p-2 hover:bg-slate-300 hover:rounded-lg"
                  >
                    <Edit />
                  </Link>

                  <span
                    onClick={() => handleDelete(myToy._id)}
                    className="cursor-pointer p-2 hover:bg-slate-300 hover:rounded-lg"
                  >
                    <Trash2 />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;

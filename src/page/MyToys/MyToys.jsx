import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Edit, Trash2 } from "lucide-react";
import useTitle from "../Hook/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useTitle("My Toy");
  const handleDelete = id => {
    fetch(`http://localhost:5000/my-toys/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then();
  };

  useEffect(() => {
    fetch(`http://localhost:5000/my-toys?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setMyToys(data));
  }, []);

  return (
    <div className="overflow-x-auto my-container ">
      <h2 className="text-2xl lg:text-5xl mb-5 text-center font-semibold">
        My Toys
      </h2>

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
                <td>{myToy.price}</td>
                <td>{myToy.quantity}</td>
                <td className="flex items-center gap-5 ">
                  <span className="cursor-pointer p-2 ">
                    <Edit />
                  </span>

                  <span
                    onClick={() => handleDelete(myToy._id)}
                    className="cursor-pointer p-2"
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

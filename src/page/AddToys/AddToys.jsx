import { useContext } from "react";
import { showToast } from "../../utilities/ShowToast";
import { AuthContext } from "../../provider/AuthProvider";
import useTitle from "../Hook/useTitle";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  useTitle("Add Toy");
  const handleSubmit = async e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const photoURL = form.photoURL.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const product = {
      name,
      sellerName,
      sellerEmail,
      photoURL,
      subCategory,
      price,
      ratings,
      quantity,
      description,
    };

    try {
      const response = await fetch("http://localhost:5000/toy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();

      if (data.insertedId) {
        showToast("success", "Toy added successful");
        form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-container">
      <h2 className="text-4xl text-center font-bold mt-4 mb-8">Add A Toy</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* name */}
          <div className="form-control w-full ">
            <label htmlFor="name" className="label">
              <span className="label-text"> Toy Name</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input input-bordered w-full "
              required
              placeholder="toy name"
            />
          </div>

          {/* seller name */}
          <div className="form-control w-full ">
            <label htmlFor="seller-name" className="label">
              <span className="label-text"> Seller Name</span>
            </label>
            <input
              type="text"
              id="seller-name"
              name="sellerName"
              readOnly
              value={user.displayName}
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* seller email */}
          <div className="form-control w-full ">
            <label htmlFor="seller-email" className="label">
              <span className="label-text"> Seller Email</span>
            </label>
            <input
              type="email"
              id="seller-email"
              name="sellerEmail"
              readOnly
              value={user.email}
              className="input input-bordered w-full "
            />
          </div>

          {/* photo url */}
          <div className="form-control w-full ">
            <label htmlFor="photo-url" className="label">
              <span className="label-text"> Photo URL</span>
            </label>
            <input
              type="url"
              id="photo-url"
              name="photoURL"
              placeholder="photo url"
              required
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* sub category */}
          <div>
            <label htmlFor="subCategory" className="label">
              <span className="label-text"> Sub Category:</span>
            </label>

            <select
              id="subCategory"
              name="subCategory"
              className="input input-bordered w-full "
            >
              <option value="Sports Cars">Sports Cars</option>
              <option value="Police Car">Police Car</option>
              <option value="Truck">Truck</option>
            </select>
          </div>

          {/* price */}
          <div className="form-control w-full ">
            <label htmlFor="price" className="label">
              <span className="label-text"> Price</span>
            </label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="toy price"
              required
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Rating */}
          <div className="form-control w-full ">
            <label htmlFor="ratings" className="label">
              <span className="label-text"> Ratings(0-5)</span>
            </label>
            <input
              type="text"
              id="ratings"
              name="ratings"
              placeholder="toy ratings"
              required
              className="input input-bordered w-full "
            />
          </div>

          {/* Available quantity */}
          <div className="form-control w-full ">
            <label htmlFor="quantity" className="label">
              <span className="label-text"> Available quantity</span>
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              placeholder="available quantity"
              required
              className="input input-bordered w-full "
            />
          </div>
        </div>

        {/* description */}
        <div className="form-control w-full ">
          <label htmlFor="description" className="label">
            <span className="label-text"> Description</span>
          </label>
          <textarea
            className="textarea input-bordered"
            placeholder="description"
            name="description"
          ></textarea>
        </div>

        <div className=" text-center">
          <button className="btn px-10 mt-5" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToys;

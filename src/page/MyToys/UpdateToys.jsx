import { useLoaderData } from "react-router-dom";
import { showToast } from "../../utilities/ShowToast";
import useTitle from "../Hook/useTitle";

const UpdateToys = () => {
  const data = useLoaderData();
  const { _id, name, description, price, quantity } = data;

  useTitle("Update");

  const handleToyUpdate = e => {
    e.preventDefault();

    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const product = {
      name,
      price,
      quantity,
      description,
    };

    console.log(product);

    //send to the server;
    fetch(`http://localhost:5000/my-toy/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          showToast("success", "updated product");
        }
      });
  };
  return (
    <div className="my-container">
      <h2 className="text-4xl text-center font-bold mt-4 mb-8">
        Update Toy : {name}
      </h2>

      <form onSubmit={handleToyUpdate} className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* price */}
          <div className="form-control w-full ">
            <label htmlFor="price" className="label">
              <span className="label-text"> Price</span>
            </label>
            <input
              type="text"
              id="price"
              name="price"
              defaultValue={price}
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
              defaultValue={quantity}
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
            rows={5}
            className="textarea input-bordered"
            defaultValue={description}
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

export default UpdateToys;

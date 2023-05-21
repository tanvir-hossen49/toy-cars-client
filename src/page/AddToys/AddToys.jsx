const AddToys = () => {
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Send form data to the server
      await fetch("/api/toys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });
      // Handle successful submission (e.g., show a success message, redirect)
    } catch (error) {
      // Handle error (e.g., display an error message)
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
              name="SellerName"
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
              type="text"
              id="seller-email"
              name="SellerEmail"
              className="input input-bordered w-full "
            />
          </div>

          {/* photo url */}
          <div className="form-control w-full ">
            <label htmlFor="photo-url" className="label">
              <span className="label-text"> Photo URL</span>
            </label>
            <input
              type="text"
              id="photo-url"
              name="photoURL"
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
              <option value="math">Sports Cars</option>
              <option value="language">Police Car</option>
              <option value="science">Truck</option>
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
              className="input input-bordered w-full "
            />
          </div>

          {/* Available quantity */}
          <div className="form-control w-full ">
            <label htmlFor="quantity" className="label">
              <span className="label-text"> Available quantity</span>
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
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
            placeholder="Bio"
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

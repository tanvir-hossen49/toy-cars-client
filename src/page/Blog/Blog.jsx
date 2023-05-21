import useTitle from "../Hook/useTitle";

const Blog = () => {
  useTitle("Blog");

  return (
    <div className="my-container">
      <h2 className="section-header"></h2>
    </div>
  );
};

export default Blog;

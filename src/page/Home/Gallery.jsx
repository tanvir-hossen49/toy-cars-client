import SectionTitle from "../../components/sectionTitle";

const Gallery = () => {
  return (
    <div className="my-container">
      <SectionTitle title={`Explore Our Toy Car Image Gallery`} />
      <div className="flex flex-wrap ">
        <div className="flex md:w-1/2 flex-wrap">
          <div
            className="w-1/2 p-1 md:p-2 gallery-img-wrapper"
            data-aos="fade-up"
            data-aos-offset="200"
          >
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/wQksrmT/photo-1589677677517-5784e74efbaa.jpg"
            />
          </div>
          <div
            className="w-1/2 p-1 md:p-2 gallery-img-wrapper"
            data-aos="fade-down"
            data-aos-offset="200"
          >
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/W2nWtSZ/photo-1536454891705-7f5a5c762d3a.jpg"
            />
          </div>
          <div
            className="w-full p-1 md:p-2 gallery-img-wrapper"
            data-aos="fade-up"
            data-aos-offset="200"
          >
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/HNG7Gmz/istockphoto-959599720-612x612.jpg"
            />
          </div>
        </div>

        <div className="flex md:w-1/2 flex-wrap">
          <div
            className="w-full p-1 md:p-2 gallery-img-wrapper"
            data-aos="fade-down"
            data-aos-offset="200"
          >
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/25cBdkj/photo-1503739171234-327ce271626f.jpg"
            />
          </div>
          <div
            className="w-1/2 p-1 md:p-2 gallery-img-wrapper"
            data-aos="fade-up"
            data-aos-offset="200"
          >
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/BCp2ZS4/istockphoto-108313742-612x612.jpg"
            />
          </div>
          <div
            className="w-1/2 p-1 md:p-2 gallery-img-wrapper"
            data-aos="fade-down"
            data-aos-offset="200"
          >
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/L6r94KP/photo-1549827441-6adb9f843a35.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

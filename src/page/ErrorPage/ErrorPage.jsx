import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="my-container flex items-center justify-center px-2 md:my-28 md:px-0">
      <div className="lg:flex lg:items-center lg:space-x-10">
        <img
          src="https://illustrations.popsy.co/white/resistance-band.svg"
          alt="question-mark"
          className="h-[300px] w-auto"
        />
        <div>
          <p className="mt-6 text-sm font-semibold text-black">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
            We can&apos;t find that page
          </h1>
          <p className="mt-4 text-gray-500">
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="mt-6">
            <Link to="/">
              <button className="btn">
                <ArrowLeft size={16} className="mr-2" />
                Go to home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;

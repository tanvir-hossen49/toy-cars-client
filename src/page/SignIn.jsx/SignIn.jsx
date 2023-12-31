import { ArrowRight } from "lucide-react";
import logo from "../../assets/logo.png";
import SocialMedia from "../Shared/SocialMedia";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { showToast } from "../../utilities/ShowToast";
import { showFirebaseError } from "../../utilities/ShowFirebaseError";

const SignIn = () => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = e => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then(() => {
        showToast("success", "login successful");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(error => {
        showFirebaseError(error);
        form.reset();
      });
  };
  return (
    <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <div className="mb-2 flex justify-center">
          <img src={logo} alt="logo" className="w-32 h-28" />
        </div>
        <h2 className="text-center section-header text-2xl font-bold leading-tight text-black">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 ">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            title=""
            className="font-semibold text-black transition-all duration-200 hover:underline"
          >
            Create a free account
          </Link>
        </p>

        <form className="mt-8" onSubmit={handleLogin}>
          <div className="space-y-5">
            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {" "}
                Email address{" "}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  name="email"
                  placeholder="Email"
                ></input>
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {" "}
                Password{" "}
              </label>

              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  name="password"
                  placeholder="Password"
                ></input>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              >
                Get started <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
          </div>
        </form>
        <SocialMedia />
      </div>
    </div>
  );
};

export default SignIn;

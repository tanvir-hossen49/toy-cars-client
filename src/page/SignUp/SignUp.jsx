import { ArrowRight } from "lucide-react";
import logo from "../../assets/logo.png";
import SocialMedia from "../Shared/SocialMedia";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { showToast } from "../../utilities/ShowToast";
import { showFirebaseError } from "../../utilities/ShowFirebaseError";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    const user = {
      name,
      email,
      password,
      photoURL,
    };
    console.log(user);

    if (password.length < 6) {
      showToast("warn", "password too sort");
      return;
    }

    createUser(email, password)
      .then(result => {
        showToast("success", "user create successful");
        updateUserProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(result => {
            showToast("success", "user update successful");
            navigate("/");
            form.reset();
            console.log(result);
          })
          .catch(error => {
            showFirebaseError(error);
            form.reset();
          });
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
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-gray-600">
          Already have an account?
          <Link
            to="/signin"
            className="font-medium text-black transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="space-y-5">
            {/* name */}
            <div>
              <label
                htmlFor="name"
                className="text-base font-medium text-gray-900"
              >
                Full Name{" "}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                  type="text"
                  placeholder="Full Name"
                  id="name"
                ></input>
              </div>
            </div>
            {/* email */}
            <div>
              <label
                htmlFor="email"
                className="text-base font-medium text-gray-900"
              >
                {" "}
                Email address{" "}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                  type="email"
                  placeholder="Email"
                  id="email"
                ></input>
              </div>
            </div>
            {/* password */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Password{" "}
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                  type="password"
                  placeholder="Password"
                  id="password"
                ></input>
              </div>
            </div>
            {/* photo url */}
            <div>
              <label
                htmlFor="photoURL"
                className="text-base font-medium text-gray-900"
              >
                {" "}
                Photo URL{" "}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                  type="url"
                  placeholder="Photo URL"
                  id="photoURL"
                ></input>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              >
                Create Account <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
          </div>
        </form>
        <SocialMedia />
      </div>
    </div>
  );
};
export default SignUp;

import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = {
    // email: "thossen49@gmail.com",
    displayName: "tanvir",
    img: "https://picsum.photos/500/300?random=1",
  };

  const navItems = (
    <>
      <li>
        <Link
          to=""
          className="text-base font-semibold text-gray-800 hover:text-gray-900"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to=""
          className="text-base font-semibold text-gray-800 hover:text-gray-900"
        >
          All Toys
        </Link>
      </li>
      {user?.email && (
        <>
          <li>
            <Link
              to=""
              className="text-base font-semibold text-gray-800 hover:text-gray-900"
            >
              My Toys
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="text-base font-semibold text-gray-800 hover:text-gray-900"
            >
              Add A Toy
            </Link>
          </li>
        </>
      )}
      <li>
        <Link
          to=""
          className="text-base font-semibold text-gray-800 hover:text-gray-900"
        >
          Blogs
        </Link>
      </li>
    </>
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <img src={logo} alt="logo" className="w-28 h-24" />
          </span>
          <span className="font-bold text-2xl">Turbo Toys</span>
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">{navItems}</ul>
        </div>

        <div className="hidden lg:block mt-2 space-y-2">
          {user?.email ? (
            <div className="flex items-center gap-5">
              <img
                src={user?.img}
                alt="user img"
                className="w-10 h-10 rounded-full object-cover"
                title={user?.displayName}
              />
              <button className="btn btn-outline">Sign Out</button>
            </div>
          ) : (
            <button className="btn btn-block">Log In</button>
          )}
        </div>

        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <img src={logo} alt="logo" className="w-28 h-20" />
                    </span>
                    <span className="font-bold">DevUI</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">{navItems}</nav>
                </div>
                <div className="mt-2 space-y-2">
                  {user?.email ? (
                    <div className="">
                      <img
                        src={user?.img}
                        alt="user img"
                        className="mx-auto mb-5 w-16 object-cover h-16 rounded-full"
                        title={user?.displayName}
                      />
                      <button className="btn btn-block btn-outline">
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <button className="btn btn-block">Log In</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

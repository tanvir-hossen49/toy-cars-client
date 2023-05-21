import { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { showToast } from "../../utilities/ShowToast";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, logout } = useContext(AuthContext);

  const navItems = (
    <>
      <li className="list-none">
        <NavLink
          to="/"
          className={`text-base font-semibold text-gray-800 hover:text-gray-900 ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
        >
          Home
        </NavLink>
      </li>
      <li className="list-none">
        <NavLink
          to="all-toys"
          className={`text-base font-semibold text-gray-800 hover:text-gray-900 ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
        >
          All Toys
        </NavLink>
      </li>
      {user?.email && (
        <>
          <li className="list-none">
            <NavLink
              to="my-toys"
              className={`text-base font-semibold text-gray-800 hover:text-gray-900 ${({
                isActive,
              }) => (isActive ? "active" : "")}`}
            >
              My Toys
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="add-toy"
              className={`text-base font-semibold text-gray-800 hover:text-gray-900 ${({
                isActive,
              }) => (isActive ? "active" : "")}`}
            >
              Add A Toy
            </NavLink>
          </li>
        </>
      )}
      <li className="list-none">
        <NavLink
          to="blog"
          className={`text-base font-semibold text-gray-800 hover:text-gray-900 ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sign out",
    }).then(result => {
      if (result.isConfirmed) {
        logout().then(() => {
          showToast("success", "Sign out successful");
        });
      }
    });
  };

  return (
    <div className="relative w-full ">
      <div className="flex items-center justify-between my-container">
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
                src={user?.photoURL}
                alt="user img"
                className="w-10 h-10 rounded-full object-cover"
                title={user?.displayName}
              />
              <button onClick={handleSignOut} className="btn btn-outline">
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="signin">
              <button className="btn btn-block">Log In</button>
            </Link>
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
                    <span className="font-bold">Turbo Toys</span>
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
                        src={user?.photoURL}
                        alt="user img"
                        className="mx-auto mb-5 w-16 object-cover h-16 rounded-full"
                        title={user?.displayName}
                      />
                      <button
                        onClick={handleSignOut}
                        className="btn btn-block btn-outline"
                      >
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <Link to="signin">
                      <button className="btn btn-block">Log In</button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;

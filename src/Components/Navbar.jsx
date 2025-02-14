import { useContext } from "react";
import { Link } from "react-router";
import AuthContext from "../Context/ContextProvider";
import Swal from "sweetalert2";
import { motion } from "motion/react"
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to sign out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sign out!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          signOutUser().then(() => {
            Swal.fire("Signed Out!", "You have been logged out.", "success");
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
        });
      });
  };
  return (
    <div className="navbar fixed top-0 left-0 bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-slate-300/30 btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/"}>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <a>Jobs</a>
              <ul className="p-2">
                <li>
                  <a>Find Job</a>
                </li>
                <li>
                  <a>Find Candidate</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-slate-300 text-xl">Career Portal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-slate-300 menu-horizontal px-1">
          <li>
            <Link to={"/"}>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <details>
              <summary>Jobs</summary>
              <ul className="p-2">
                <li>
                  <a>Find Job</a>
                </li>
                <li>
                  <a>Find Candidate</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <span onClick={handleSignOut} className="btn">
            Sign Out
          </span>
        ) : (
          <>
            <Link to={"/register"}>
              <motion.span whileHover={{scale: 1.1}} whileTap={{scale: 0.95}} transition={{duration: 0.5}} className="btn">Sign Up</motion.span>
            </Link>
            <Link to={"/SignIn"}>
              <span className="btn">Sign In</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

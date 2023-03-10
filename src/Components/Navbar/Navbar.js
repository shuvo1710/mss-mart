import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { BiSearch } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { GrFormClose } from "react-icons/gr";
import { RiArrowUpSLine } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { UserContext } from "../../CategoryContext/AuthContext";
import { Category } from "../../CategoryContext/CategoryContext";

const Navbar = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  let [open, setOpen] = useState(false);
  const { user, loader, logOut } = useContext(UserContext);
  const { productInfo, loveProduct } = useContext(Category);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error.message);
      });
  };

  const navItem = (
    <>
      <li className=" md:ml-4  text-xs md:my-0 ">
        <Link
          to="/"
          className="text-gray-800 hover:underline duration-500 text-md font-semibold"
        >
          HOME
        </Link>{" "}
      </li>
      <li className="md:ml-4 text-xs md:my-0 " tabIndex={0}>
        <Link
          to=""
          className="text-gray-800 hover:underline duration-500 text-md font-semibold"
        >
          Man
        </Link>
        <ul className="p-2 bg-base-100 -ml-10 md:ml-0">
          <li className="text-md font-semibold">
            <Link to="">Panjabi</Link>
          </li>
          <li className="text-md font-semibold">
            <Link to="">T-Shirt</Link>
          </li>
          <li className="text-md font-semibold">
            <Link to="">Polo-T-Shirt</Link>
          </li>
          <li className="text-md font-semibold">
            <Link to="">Casual-Shirt</Link>
          </li>
          <li className="text-md font-semibold">
            <Link to="">Formal-Shirt</Link>
          </li>
        </ul>
      </li>

      <li className="md:ml-4 text-xs md:my-0 " tabIndex={0}>
        <Link
          to=""
          className="text-gray-800 hover:underline duration-500 text-md font-semibold"
        >
          Woman
        </Link>
        <ul className="p-2 bg-base-100 -ml-12 md:ml-0">
          <li className="text-md font-semibold">
            <Link to="">Ethnics</Link>
          </li>

          <li className="text-md font-semibold">
            <Link to="">One-Peace</Link>
          </li>

          <li className="text-md font-semibold">
            <Link to="">Western</Link>
          </li>

          <li className="text-md font-semibold">
            <Link to="">Female-T-SHIRT</Link>
          </li>
        </ul>
      </li>

      <li className="md:ml-4 text-xs md:my-0 " tabIndex={0}>
        <Link
          to="/"
          className="text-gray-800 hover:underline duration-500 text-md font-semibold"
        >
          Kids
        </Link>
        <ul className="p-2 bg-base-100 -ml-10 md:ml-0">
          <li className="text-md font-semibold">
            <Link to="">panjabi</Link>
          </li>

          <li className="text-md font-semibold">
            <Link to="">T-shirt</Link>
          </li>

          <li className="text-md font-semibold">
            <Link to="">shirt</Link>
          </li>
        </ul>
      </li>
      <li className="md:ml-4 text-xs md:my-0 ">
        <Link
          to="/home"
          className="text-gray-800 hover:underline duration-500 text-md font-semibold"
        >
          BLOG
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="sticky top-0 z-50 navbar bg-base-100 ml-0 lg:pl-4 uppercase border-b:rgba(255,255,255,0)  border-b-[1px] border-solid">
        <button onClick={scrollTop} className="scrollTop">
          <RiArrowUpSLine className="scrollBtn" />
        </button>
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden transition-all duration-300"
              onClick={() => setOpen(!open)}
            >
              {open ? <GrFormClose className="" /> : <FcMenu />}
            </label>
            <ul
              tabIndex={0}
              className={`absolute z-50 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 transition-all duration-500 ease-in ${
                open
                  ? "top-18 opacity-100"
                  : "top-[-490px] md:opacity-100 opacity-0"
              }`}
            >
              {navItem}
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItem}</ul>
          </div>
        </div>

        <Link to="/" className="font-bold text-black mr-10 md:mr-10">
          Logo
        </Link>
        <div className="navbar-end mr-0 lg:mr-6">
          <div className="flex text-black justify-center gap-x-2">
            <div className="flex items-center text-xs  tracking-widest">
              <span className="m-auto  text-black font-semibold hidden md:block">
                SEARCH
              </span>
              <span className=" text-green-800 m-auto ">
               
                  <BiSearch className="w-8 h-4 cursor-pointer"></BiSearch>
                
              </span>
            </div>

            <div className="flex items-center lg:block text-xs tracking-widest mt-0 lg:mt-4">
              <div className="flex tracking-widest">
                <span className=" text-green-800 m-auto ">
                  <Link to="/cart"><BsBag className="w-8 h-4 ml-0"></BsBag></Link>
                </span>
                <span className="m-auto -mt-3 -ml-2">
                  {productInfo?.length}
                </span>
              </div>
            </div>

            <div className="flex items-center lg:block text-xs tracking-widest mt-0 lg:mt-4">
              <div className="flex tracking-widest">
                <Link to='/loveProduct' className=" text-green-800 m-auto ">
                  <MdFavoriteBorder className="w-8 h-4 ml-0"></MdFavoriteBorder>
                </Link>
                <span className="m-auto -mt-3 -ml-2">
                  {loveProduct?.length}
                </span>
              </div>
            </div>

            <div className="dropdown dropdown-end disActive">
              <label
                tabIndex={0}
                className="btn  bg-transparent border-none hover:bg-transparent"
              >
                <span className=" text-green-800 m-auto ">
                  <CiUser className="w-8 h-4"></CiUser>
                </span>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow bg-base-100 rounded-md w-52"
              >
                {user?.uid ? (
                  <>
                    <Link to="/profile">
                      <li>
                        <p>My Profile</p>
                      </li>
                    </Link>
                    <li onClick={handleLogOut}>
                      <p>Log Out</p>
                    </li>
                  </>
                ) : (
                  <Link to="/login">
                    <li>
                      <p>Log In</p>
                    </li>
                  </Link>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

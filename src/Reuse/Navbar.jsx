import { AiOutlineHeart } from "react-icons/ai";
import { IoBookmarksOutline, IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { getLikeData } from "../Utilities/AddToSave";
import { useState } from "react";

const Navbar = () => {


  const likes = getLikeData();
  

  const NavItem = (
    <div className="text-center p-4">
      <NavLink to="/">
        <li className="text-lg py-2 hover:border-b-2 font-semibold hover:border-b-[#3B1E54]">
          Home
        </li>
      </NavLink>
      <NavLink to="/allRecipes">
        <li className="text-lg py-2 hover:border-b-2 font-semibold hover:border-b-[#3B1E54]">
          Recipes
        </li>
      </NavLink>
      {/* <NavLink>
        <li className="text-lg py-2 hover:border-b-2 font-semibold hover:border-b-[#3B1E54]">
          About Us
        </li>
      </NavLink>
      <NavLink>
        <li className="text-lg py-2 hover:border-b-2 font-semibold hover:border-b-[#3B1E54]">
          Contact Us
        </li>
      </NavLink>
      <NavLink>
        <li className="text-lg py-2 hover:border-b-2 font-semibold hover:border-b-[#3B1E54]">
          Register/Login
        </li>
      </NavLink> */}
    </div>
  );
  return (
    <div className="fixed z-99 navbar bg-[#3B1E54] text-[#EEEEEE] shadow-sm md:max-w-screen-2xl mx-auto lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-[#f2f0f5] text-[#3B1E54] rounded-box z-1 
              mt-3 w-72 p-2 shadow"
          >
            {NavItem}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link>
          <h2 className="text-xl font-bold">Yum Cook</h2>
        </Link>
      </div>
      <div className="navbar-end">
        <div className="gap-4 flex justify-center items-center">
          <div className="indicator">
            <span className="indicator-item badge badge-secondary p-1 border-0 bg-[#9B7EBD]">{likes.length}</span>
            {/* <button className="btn">inbox</button> */}
             <p className="text-2xl">
          <AiOutlineHeart/>
        </p>
          </div>
          {/* <p className="text-2xl">
          <AiOutlineHeart/>
        </p> */}
          <Link to="/savedRecipes">
            <p className="text-2xl">
              <IoBookmarksOutline />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

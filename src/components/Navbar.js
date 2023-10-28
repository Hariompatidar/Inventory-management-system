import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/Logo.png";
import { useDispatch , useSelector } from "react-redux";
import { logout , isLoggedIn } from "../redux/slices/loginSlice";



function Navbar() {
   const isLogin = useSelector(isLoggedIn) ; 
  const dispatch = useDispatch() ;
  
   
  return (
    <nav className=" bg-[var(--bgColor)] border-gray-200   w-[100vw] ">
      <div className="max-w-screen-xl flex  items-center gap-10 mx-auto p-4 justify-between md:justify-start">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap  text-[#071952]">
            <img src={Logo} alt='ATPL '></img>
          </span>
        </Link>

        <div
          className=" block text-center flex justify-between  items-center   w-[80%]"
          id="navbar-default"
        >
          <div>
            <ul className="font-medium flex  border  border-0">
              

              {   isLogin  && JSON.parse(localStorage.getItem("userInfo")).role === "Admin"  ? (
                <li>
                <Link
                to="/register"
                className="block py-2 pl-3 pr-3 text-[var(--textColor)] bg-transparent rounded text-[1.1rem] md:hover:text-blue-700 "
              >
                Register
              </Link>
                </li>
              ) : (
                ""
              )}
              
            </ul>
          </div>
          {isLogin ? (
            <div className="flex flex-row gap-8 font-medium  ">
             
              <Link
              onClick={()=>{ dispatch(logout()) ;localStorage.removeItem('authToken')  ;   localStorage.removeItem('userInfo') }}
                to="/"
                className="btn  bg-red-700 text-white block py-1  px-2 rounded-sm  hover:scale-105 "
              >
                Logout
              </Link>
            </div>
          ) : (
            <div className="flex flex-row gap-8 font-black  ">
              <Link
                to="/login"
                className="btn  text-[var(--textColor)]  block py-1  px-2 rounded-sm  hover:scale-[1.06] "
              >
                Login
              </Link>

            
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setLogin } from "../redux/slices/loginSlice";
import { FaRocket } from "react-icons/fa6";

const App = () => {
    const [open, setOpen] = useState(true);
    const dispatch = useDispatch();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    return (

        <div
            className={` ${open ? "w-80" : "w-20 "
                } shadow-xl bg-black text-white h-screen border-r-2 border-r-white p-5  pt-8 relative duration-300 text-[1.2rem] flex flex-col justify-between`}
        >
            <div className="absolute cursor-pointer -right-7 top-20 p-5 bg-white text-black rounded-full" onClick={() => setOpen(!open)}>
                <FaRocket className=" text-[1.3rem] " />
            </div>

            <div>
                <div className="flex flex-col gap-x-4 items-center">
                    <img alt=""
                        src="https://www.cliksoftware.com/wp-content/uploads/2022/05/stock-control_clik-900x600.png"
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                            }`}
                    />
                    <h1
                        className={` origin-left font-medium text-[1.5rem] duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Inventory Management
                    </h1>
                </div>

                {userInfo && userInfo.role === "Admin" ? (<div className="pt-6">
                    <Link to='/'

                        className={`flex  mt-2 rounded-md p-2 cursor-pointer hover:bg-[rgb(1,137,255)] hover:text-white  items-center gap-x-4         `}
                    >
                        <FaHome />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Home
                        </span>
                    </Link>
                    <Link to='/'

                        className={`flex  mt-2 rounded-md p-2 cursor-pointer hover:bg-[rgb(1,137,255)] hover:text-white  items-center gap-x-4 
              `}
                    >
                        <FaHome />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Dashboard
                        </span>
                    </Link>
                    <Link to='/register'

                        className={`flex  mt-2 rounded-md p-2 cursor-pointer hover:bg-[rgb(1,137,255)] hover:text-white  items-center gap-x-4 
              `}
                    >
                        <FaHome />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Register New User
                        </span>
                    </Link>

                    <Link to='/stock'

                        className={`flex  mt-2 rounded-md p-2 cursor-pointer hover:bg-[rgb(1,137,255)] hover:text-white  items-center gap-x-4 
              `}
                    >
                        <FaHome />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Create a Stock
                        </span>
                    </Link>
                    <Link to='/'

                        className={`flex  mt-2 rounded-md p-2 cursor-pointer hover:bg-[rgb(1,137,255)] hover:text-white  items-center gap-x-4 
              `}
                    >
                        <FaHome />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            All Users
                        </span>
                    </Link>


                </div>) : (userInfo ? (<div className="pt-6">
                    <Link to='/'

                        className={`flex  mt-2 rounded-md p-2 cursor-pointer hover:bg-[rgb(1,137,255)] hover:text-white  items-center gap-x-4         `}
                    >
                        <FaHome />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Home
                        </span>
                    </Link>
                    <Link to='/'

                        className={`flex  mt-2 rounded-md p-2 cursor-pointer hover:bg-[rgb(1,137,255)] hover:text-white  items-center gap-x-4 
              `}
                    >
                        <FaHome />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Dashboard
                        </span>
                    </Link> </div>) : <div> <Link to='/'

                        className={`flex  mt-2 rounded-md p-2 cursor-pointer hover:bg-[rgb(1,137,255)] hover:text-white  items-center gap-x-4         `}
                    >
                        <FaHome />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Home
                        </span>
                    </Link></div>)}


            </div>

            <div>
                <div className="pb-6">
                    <Link to={userInfo ? '/' : '/login'}
                        onClick={() => { dispatch(setLogin(false)); localStorage.removeItem('authToken'); localStorage.removeItem('userInfo') }}
                        className={`flex  mt-2 rounded-md p-2 cursor-pointer hover:bg-[rgb(1,137,255)] hover:text-white  items-center gap-x-4         `}
                    >
                        <FaHome />
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            {userInfo ? "Logout" : "Login"}
                        </span>
                    </Link>
                </div>
            </div>
        </div>

    );
};
export default App;
import React, { useState } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { FaHome } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setLogin } from "../redux/slices/loginSlice";
import { FaRightFromBracket, FaRightToBracket, FaRegChartBar, FaSkull, FaPlus, FaPerson } from "react-icons/fa6";


import { Link } from 'react-router-dom'

function Sidebar({ openSidebarToggle, OpenSidebar }) {

    const dispatch = useDispatch();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const [selectedMenu , setSelectedMenu] = useState("Home") ;
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand text-white text-[2rem]'>
                    <BsCart3 className='icon_header text-white' /> Inventory
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='px-4'>
                    {userInfo && userInfo.role === "Admin" ?
                        (<div className="pt-6 bg-transparent text-white">
                            <Link to='/'
                                onClick={()=> setSelectedMenu("Home")}
                                className={`flex  my-2 rounded-md p-2 cursor-pointer hover:bg-[rgb(1,137,255)] hover:text-white  items-center gap-x-4   ${selectedMenu ==="Home" ? "bg-[rgb(1,137,255)] text-white": ""}      `}
                            >
                                <FaHome />
                                <span className={` origin-left duration-200`}>
                                    Home
                                </span>
                            </Link>

                            <Link to='/dashboard'
                                onClick ={()=>{setSelectedMenu("Dashboard")}}
                                className={`flex  my-2 rounded-md p-2 cursor-pointer hover:bg-[rgb(1,137,255)] hover:text-white  items-center gap-x-4 ${selectedMenu ==="Dashboard" ? "bg-[rgb(1,137,255)] text-white": ""}            `}
                            >
                                <FaRegChartBar />
                                <span className={`origin-left duration-200`}>
                                    Dashboard
                                </span>
                            </Link>

                            <Link to='/register'
                                onClick={()=>setSelectedMenu("Register")}
                                className={`flex  my-2 rounded-md p-2 cursor-pointer hover:bg-[rgb(1,137,255)] hover:text-white  items-center gap-x-4        ${selectedMenu ==="Register" ? "bg-[rgb(1,137,255)] text-white": ""}       `}
                            >
                                <FaPerson />
                                <span className={` origin-left duration-200`}>
                                    Register New User
                                </span>
                            </Link>

                            <Link to='/stock'
                                onClick={()=>setSelectedMenu("Stock")}
                                className={`flex  my-2 rounded-md p-2 cursor-pointer hover:bg-[rgb(1,137,255)] hover:text-white  items-center gap-x-4  ${selectedMenu ==="Stock" ? "bg-[rgb(1,137,255)] text-white": ""}  `}
                            >
                                <FaPlus />
                                <span className={` origin-left duration-200`}>
                                    Create a Stock
                                </span>
                            </Link>

                            <Link to='/allusers'
                                onClick={()=>setSelectedMenu("All")}
                                className={`flex  my-2 rounded-md p-2 cursor-pointer hover:bg-[rgb(1,137,255)] hover:text-white  items-center gap-x-4    ${selectedMenu ==="All" ? "bg-[rgb(1,137,255)] text-white": ""}  `}
                            >
                                <FaSkull />
                                <span className={` origin-left duration-200`}>
                                    All Users
                                </span>
                            </Link>


                        </div>) : (userInfo ?
                            (<div className="pt-6 bg-transparent text-white">
                                <Link to='/'
                                    onClick={(()=>setSelectedMenu("Home"))}
                                    className={`flex  my-2 rounded-md p-2 cursor-pointer hover:bg-[rgb(1,137,255)] hover:text-white  items-center gap-x-4     ${selectedMenu ==="Home" ? "bg-[rgb(1,137,255)] text-white": ""}    `}
                                >
                                    <FaHome />
                                    <span className={` origin-left duration-200`}>
                                        Home
                                    </span>
                                </Link>
                                <Link to='/dashboard'
                                    onClick={()=>setSelectedMenu("Dashboard")}
                                    className={`flex  my-2 rounded-md p-2 cursor-pointer hover:bg-[rgb(1,137,255)] hover:text-white  items-center gap-x-4      `}
                                >
                                    <FaRegChartBar />
                                    <span className={` origin-left duration-200`}>
                                        Dashboard
                                    </span>
                                </Link> </div>) : <div className='text-white'> <Link to='/'
                                    onClick={()=>setSelectedMenu("Home")}
                                    className={`flex  my-2 rounded-md p-2 cursor-pointer hover:bg-[rgb(1,137,255)] hover:text-white  items-center gap-x-4   ${selectedMenu ==="Home" ? "bg-[rgb(1,137,255)] text-white": ""}      `}
                                >
                                    <FaHome />
                                    <span className={` origin-left duration-200`}>
                                        Home
                                    </span>
                                </Link></div>)}


                </li>
                <li> <div className="px-4 text-white">
                    <Link to={'/login'}
                        onClick={() => {  dispatch(setLogin(false)); localStorage.removeItem('authToken'); localStorage.removeItem('userInfo') ;setSelectedMenu("Login") }}
                        className={`flex my-2 mb-8 rounded-md py-2 px-2 cursor-pointer hover:bg-[rgb(1,137,255)] hover:text-white  items-center gap-x-4    ${selectedMenu ==="Login" ? "bg-[rgb(1,137,255)] text-white": ""}     `}
                    >
                        {!userInfo ? <FaRightToBracket /> : <FaRightFromBracket />}
                        <span className={` origin-left duration-200`}>
                            {userInfo ? "Logout" : "Login"}
                        </span>
                    </Link>
                </div></li>
            </ul>
        </aside>
    )
}

export default Sidebar
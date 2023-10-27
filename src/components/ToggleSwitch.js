import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserRole } from "../redux/slices/userSlice";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { userRole } from "../redux/slices/userSlice";



const ToggleSwitch = () => {

const dispatch = useDispatch() ;
const role = useSelector(userRole) ;
const [isChecked, setIsChecked] = useState(false);



  const handleCheckboxChange = () => {
    if(role === "Salesman" ){ dispatch(setUserRole("Admin"))}
    else{ dispatch(setUserRole("Salesman"))} 
    setIsChecked(!isChecked);
};

  return (
    <div className="">
      <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-transparent  ">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
            !isChecked
              ? "text-white bg-[var(--bgColor)] rounded-[50px]"
              : "text-black"
          }`}
        >
       
          Salesman
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
            isChecked
              ? "text-white bg-[var(--bgColor)] rounded-[50px]"
              : "text-black"
          }`}
        >
          
          Admin
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
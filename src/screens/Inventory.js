import React from "react";
import ProductTable from "../components/ProductTable";
import { useNavigate } from "react-router-dom";
function Inventory() {
   const navigate = useNavigate() ; 
   return (
    <div className=" relative w-[100vw] min-h-[88vh] text-[var(--textColor)] md:w-[75vw] mx-auto pt-10">
      <ProductTable />
      {JSON.parse(localStorage.getItem("userInfo")).role === "Admin" ? (
        <button className="absolute bottom-10 right-10 bg-green-300  text-black py-2 px-5 rounded-full" onClick={()=> {navigate("/stock")}}>Create a stock</button> ): ""
      }
      
    </div>
  );
}

export default Inventory;

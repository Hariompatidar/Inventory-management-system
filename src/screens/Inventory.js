import React from "react";
import ProductTable from "../components/ProductTable";
import { useNavigate } from "react-router-dom";
function Inventory() {
   const navigate = useNavigate() ; 
   return (
    <div className=" relative w-[100vw] min-h-[88vh] text-[var(--textColor)] md:w-[75vw] mx-auto pt-10">
      <ProductTable />
    
    </div>
  );
}

export default Inventory;

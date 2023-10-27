import React from "react";
import Banner from "../images/Banner.jpg";
function Home() {
  return (
    <div className=" w-[100vw] min-h-[88vh] grid bg-[varr(--bgColor)]  md:grid-cols-2 ">
      <div className="bg-transparent flex justify-center items-center">
        <img src={Banner} alt="Inventory Management" className="w-[80%]"></img>
      </div>
      <div className="bg-transparent text-[var(--textColor)] p-10  text-center md:text-left md:py-[200px] ">
        <h1 className="text-[2.5rem] ">Inventory Management</h1>
        <p className="text-[1.5rem] ">
          An inventory management system (or inventory system) is the process by
          which you track your goods throughout your entire supply chain, from
          purchasing to production to end sales. It governs how you approach
          inventory management for your business. If you’re holding a lot of
          inventory in your business, you need to stay efficient and maintain
          healthy margins. An effective inventory management system exists to
          help you achieve this.
        </p>
      </div>
    </div>
  );
}

export default Home;

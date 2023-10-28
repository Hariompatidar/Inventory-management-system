import axios from "axios";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
    const navigate = useNavigate();
    const inputRef = useRef();
    const addToStockHandler = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("authToken");
        await axios({
            method: "post",
            url: "http://localhost:5000/api/product/addstock",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
            },
            data: {
                id: product._id,
                stockAdded: inputRef.current.value,
            },
        })
            .then(() => {
                toast.success("Stock added successfully");
                navigate("/");
            })
            .catch((error) => {
                toast.warn(error.response.data.message);
            });
    };


    const sellStockHandler = async(e)=>{
        e.preventDefault();
        const token = localStorage.getItem("authToken");
        await axios({
            method: "post",
            url: "http://localhost:5000/api/product/sellstock",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
            },
            data: {
                id: product._id,
                productsSold: inputRef.current.value,
            },
        })
            .then(() => {
                toast.success("Stock added successfully");
                navigate("/");
            })
            .catch((error) => {
                toast.warn(error.response.data.message);
            });
    }
    return (
        <div className="mt-20  bg-var(--bgColor)  text-white grid md:grid-cols-2 mb-10">
            <div className="overflow-hidden bg-cover bg-no-repeat ">
                <img
                    className="rounded-t-sm h-[500px] w-[100%] object-cover"
                    src={product.image}
                    alt=""
                />
            </div>

            <div className="flex flex-col text-center md:text-left   md:pl-10 md:pt-10 gap-10">
                <p className="text-[2rem] font-bold mt-10">{product.name}</p>
                <div className="flex flex-col gap-5 ">
                    <p className="text-lg text-white dark:text-neutral-200">
                        {product.description}
                    </p>

                    <div>
                        <div className=" text-lg   flex justify-between  mb-2">
                            <span>Price</span>{" "}
                            <span className="font-bold">Rs.{product.price}/-</span>
                        </div>
                        <div className=" text-lg  flex justify-between mb-2">
                            <span>Left in stock</span>{" "}
                            <span className="font-bold">{product.quantityLeft}</span>
                        </div>
                        <div className=" text-lg  flex justify-between mb-2">
                            <span>Quantity sold</span>{" "}
                            <span className="font-bold">{product.soldQuantity}</span>
                        </div>
                        <div className=" text-lg  flex justify-between mb-2">
                            <span>Total Value</span>{" "}
                            <span className="font-bold">
                                Rs.{product.quantityLeft * product.price}
                            </span>
                        </div>
                    </div>

                    <div className="container w-100">
                        <input
                            ref={inputRef}
                            type="number"
                            min="0"
                            defaultValue="0"
                            className=" py-2 m-2   bg-[var(--textColor)] text-black outline-none border-none rounded-md p-2"
                        />
                        <button
                            className="px-5 py-2 bg-[var(--textColor)] text-black rounded-xl mr-3"
                            onClick={addToStockHandler}
                        >
                            Add
                        </button>
                        <button className="px-5 py-2 bg-[var(--textColor)] text-black rounded-xl" 
                                onClick={sellStockHandler}
                        >
                            Sell
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;

import axios from 'axios';
import React, { useRef } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function CreateStock() {
    const navigate = useNavigate() ; 
    const formRef = useRef() ; 
    const submitHandler = async(e)=>{
        e.preventDefault() ; 
        const productObj = {
            name: formRef.current.name.value,
            image: formRef.current.image.value,
            description : formRef.current.description.value , 
            price: formRef.current.price.value,
            stock: formRef.current.stock.value
          };
          
          const token = localStorage.getItem('token')
          await axios({
            
            method: "post",
            url: "http://localhost:5000/api/product/createProduct",
            data: productObj,
            headers: { "Content-Type": "application/json"  , authorization : `Bearer ${token}`},
          })
            .then(() => {
              toast.success("Registered successfully");
              navigate("/");
            })
            .catch((error) => {
              toast.warn(error.response.data.message);
            });

    }
  return (
    <section className="bg-[var(--background)]  md:h-[80vh]">
      <div className="flex flex-col items-center justify-center md:h-[100%] px-6 py-8 mx-auto  lg:py-0 ">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create a new stock
            </h1>
            <form
              ref={formRef}
              onSubmit={submitHandler}
              className="space-y-4 md:space-y-6"
              enctype="multipart/form-data"
              
            >
             
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Product Name 
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Shirt"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product image
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept='image/*'
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Product Description 
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write something..."
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="1200"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="stock"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Items to be added
                </label>
                <input
                  type="text"
                  name="stock"
                  id="stock"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <button
                type="submit"
                className="w-full text-[var(--textColor)] bg-[var(--bgColor)] hover:scale-[1.025] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create Stock
              </button>
             
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreateStock
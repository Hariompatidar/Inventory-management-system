import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import { useDispatch } from 'react-redux';
import {  setSelectedProduct} from '../redux/slices/productSlice';
import { useNavigate } from 'react-router-dom';


function ProductTable() {
    const [allProducts , setAllProducts] = useState() ; 
    const navigate = useNavigate() ;;
    const dispatch = useDispatch()  ;
  const getProducts = async()=>{
    try {
      const token = localStorage.getItem("authToken");
      const config = { headers: { authorization: `Bearer ${token}` } };
  
      const response = await axios.get(
        "http://localhost:5000/api/product/fetchall",
        config
      );
      
      setAllProducts(response.data.data) ; 
    } catch (e) {
      toast.warn(e.response.data.message);
    } 
  }

  useEffect(()=>{getProducts(); } , [] )
  
 
  const columns = [
    {
      name: "Index",
      selector: (row , index)=> index+1  },
      {

        name : "Image" , 
        selector : (row) => <img src={row.image}  style={{padding:"10px" , objectFit :"contain", height:'60px' ,width:'60px'}} alt=''></img>
      } , 
    {
      name: "Product",
      selector: (row)=> row.name    },
    {
      name: "Price",
      selector: (row)=> row.price  },
    {
      name: "Quantities Left",
      selector: (row)=> row.quantityLeft  },
      {
        name : "Items sold" , 
        selector : (row)=> row.soldQuantity 
      } , 
      {
        name : "Value" , 
        selector : (row)=> row.price * row.quantityLeft 
      } , 
      {
        name : "Actions" , 
        cell : (row)=> <div><button id='btn' onClick={()=>{dispatch(setSelectedProduct(row)) ; navigate('/info')}}>Info</button></div>
      }
  ] ; 
   
  
  return (
    <div className=' sm:p-10 md:p-0  mb-[60px]'>
    <DataTable title="Items in Inventory" columns={columns} data={allProducts} pagination fixedHeader fixedHeaderScrollHeight='700px' highlightOnHover responsive />
    </div>
  )
}

export default ProductTable
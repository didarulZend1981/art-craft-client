import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseAuthContext from "../../hooks/UseAuthContext";


const CraftsDetails = () => {
  const {id} = useParams();
  // const {user}=UseAuthContext
  const [product,setProduct]=useState({});
  
  console.log(product);

const {itemName,image,customization,email,price,processing_time,rating ,short_description,stockStatus,subcategory_Name,displayName} =product;




  useEffect(()=>{
    fetch(`http://localhost:5000/singleProduct/${id}`)
    .then(res=>res.json())
    .then(data=>{
      setProduct(data)
      console.log(data);
    })
  },[id])
  return (
    <div>
      

    <div className="card card-side bg-base-100 shadow-xl w-2/5 mx-auto min-h-[300px] mb-[50px] mt-[50px] border-red-200 bottom-2">
        <figure className="p-[20px] w-[300px]"><img src={product.image} alt="Movie"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title"><span>Name:</span>{itemName}</h2>
          <p className="text-[15px]"><span>Description:</span><br></br>
            {short_description}</p>
          <p className="text-[15px]"><span className="uppercase">Category:</span>{subcategory_Name}</p>
          <p className="flex justify-between"><span>{email}</span>
          <span>{displayName}</span></p>
          <p className="flex justify-between">
            <span>Price:<span>{price}</span></span>
            <span>Status:<span>{stockStatus}</span></span>
            <span>Processing:<span>{processing_time}</span></span>
          </p>
          <p className="flex justify-between">
             <span>Rating: <span>{rating}</span></span>
             <sapn>Customization: <span>{customization}</span></sapn>
          
          </p>
          <div className="card-actions justify-end">
            
          </div>
        </div>
    </div>





    </div>
  );
};

export default CraftsDetails;
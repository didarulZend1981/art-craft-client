import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const CraftsDetails = () => {
  const {id} = useParams();
  const [product,setProduct]=useState({});
  console.log(product);
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
      {product.itemName}
    </div>
  );
};

export default CraftsDetails;
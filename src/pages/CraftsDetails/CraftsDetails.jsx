import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseAuthContext from "../../hooks/UseAuthContext";


const CraftsDetails = () => {
  const {id} = useParams();
  // const {user}=UseAuthContext
  const [product,setProduct]=useState({});
  
  console.log(product);

const {itemName,image,customization,email,price,processing_time,rating ,short_description,stockStatus,subcategory_Name,displayName} =product;


const [category,setCategory] =useState([]);

  useEffect(()=>{
    fetch(`https://b9a10-server-side-didarul-zend1981.vercel.app/singleProduct/${id}`)
    .then(res=>res.json())
    .then(data=>{
      setProduct(data)
      console.log(data);
    })
  },[id])
  return (
    <div>
      



<div className="font-sans mt-20 mb-20">
            <div className="p-4 lg:max-w-6xl max-w-2xl max-lg:mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-16">
                    <div className="w-full lg:sticky top-0 text-center">
                        <div className="lg:h-[560px]">
                            <img src={product.image} alt={itemName} className="lg:w-11/12 w-full h-full rounded-md object-cover object-top" />
                        </div>

                        
                    </div>

                    <div>
                        <div className="flex flex-wrap items-start gap-4">
                            <div>
                                <div className="flex gap-1 uppercase">
                                    <span className="text-2xl font-bold text-stone-600">Name:</span>
                                    <span className="text-2xl font-bold text-gray-800">{itemName}</span>

                                </div>
                                <div className="flex gap-1 mt-2 uppercase">
                                    <span className="text-sm text-stone-600">Category:</span>
                                    <span className="text-sm text-gray-500">{subcategory_Name}</span>

                                </div>
                                

                                
                            </div>

                            
                        </div>

                        <hr className="my-8" />

                        <div className="flex flex-wrap gap-4 items-start">
                            <div className="flex gap-1 uppercase">
                                <span className="text-stone-600 text-4xl font-bold">Price:</span>
                                <span className="text-gray-800 text-4xl font-bold">${price}</span>
                            </div>

                            
                        </div>

                        <hr className="my-8" />

                        <div className="flex gap-1 uppercase">
                            <h3 className="text-xl font-bold text-stone-600">Status</h3>
                            <div className="text-xl font-bold text-gray-800">
                              :{stockStatus}
                            </div>
                        </div>

                        <hr className="my-8" />
                        <div className="flex justify-between">
                        <div className="flex gap-1 uppercase">
                            <h3 className="text-xl font-bold text-stone-600">Processing</h3>
                            <div className="text-xl font-bold text-gray-800">
                              :{processing_time}
                            </div>
                        </div>
                        <div className="flex gap-1 uppercase">
                            <h3 className="text-xl font-bold text-stone-600">Customization</h3>
                            <div className="text-xl font-bold text-gray-800">
                              :{customization}
                            </div>
                        </div>

                        </div>

                        



                        <hr className="my-8" />

                        <div>
                            <h3 className="text-xl font-bold text-gray-800">{email}</h3>
                            <div className="flex flex-wrap gap-4 mt-4 uppercase">
                                Made By:{displayName}
                            </div>
                        </div>

                        <hr className="my-8" />

                        <div className="flex flex-wrap gap-4">
                           







                            
                        </div>
                    </div>
                </div>

                <div className="mt-20 max-w-4xl">
                    <ul className="flex border-b">
                        <li
                            className="text-gray-800 font-semibold text-sm bg-gray-100 py-3 px-8 border-b-2 border-gray-800 cursor-pointer transition-all">
                            Description</li>
                       </ul>

                    <div className="mt-8">
                        <h3 className="text-xl font-bold text-gray-800">Product Description</h3>
                     </div>

                    <ul className="space-y-3  mt-6 pl-4 text-sm text-gray-500">
                        <li className="text-justify">{short_description}</li>
                    </ul>
                </div>
            </div>
        </div>








   





    </div>
  );
};

export default CraftsDetails;
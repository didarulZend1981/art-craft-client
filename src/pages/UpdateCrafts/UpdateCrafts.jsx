import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseAuthContext from "../../hooks/UseAuthContext";
import Swal from "sweetalert2";

const UpdateCrafts = () => {
  const {id} = useParams();
  const {user} = UseAuthContext()|| {};
  const [product,setProduct]=useState({});
  // console.log(product);
  useEffect(()=>{
    fetch(`http://localhost:5000/singleProduct/${id}`)
    .then(res=>res.json())
    .then(data=>{
      setProduct(data)
      // console.log(data);
    })
  },[id])
  
  const {_id,itemName,customization,email,displayName,image,price,processing_time,rating,short_description,stockStatus,subcategory_Name}=product;
  const handleUpdate = e => {
    e.preventDefault();
    console.log("didar");
    const form = e.target;

    const itemName = form.itemName.value;
    const subcategory_Name = form.subcategory_Name.value;


    const short_description = form.short_description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stockStatus = form.stockStatus.value;
    // const userName = user.userName;
    const email = user.email;
    const image = form.image.value;

    









    const info = { itemName, subcategory_Name, short_description, price, rating,customization,
      processing_time,stockStatus,email,image
   };

   console.log(info);

    // send data to the server
     // send data to the server
      fetch(`http://localhost:5000/product/${_id}`, {
              method: 'PUT',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(info)
          })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  if (data.modifiedCount > 0) {
                      Swal.fire({
                          title: 'Success!',
                          text: 'Craft Updated Successfully',
                          icon: 'success',
                          confirmButtonText: 'thanks'
                      })
                  }
              })
  
}
  
  return (



    <div className="bg-[#F4F3B0] p-24 w-3/5 mx-auto border-spacing-10 margin-5 rounded-lg">
            <h2 className="text-3xl font-extrabold">Add Craft</h2>
            <form onSubmit={handleUpdate}>
                {/* form name and quantity row */}
               
                <div className="md:flex mb-8 mx-auto">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-[15px]"> Name</span>
                        </label>
                        <label className="input-group">
                             <input type="text" name="itemName" defaultValue={itemName} placeholder="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                    <div className="form-control md:w-1/2 ml-4">
                       


                        <label className="label">
                            <span className="label-text">Sub Category Name</span>
                        </label>
                          <select
                            name="subcategory_Name"
                            id="subcategory_Name"
                            className="w-full p-2 border rounded-md focus:outline-[black]"
                            type="text"
                            placeholder="subcategory_Name"
                            
                          >
                            
                            <option value="Wooden Furniture & Sculptures" selected>
                            Wooden Furniture & Sculptures
                            </option>
                            <option value="Wooden Home Decor" selected>
                            Wooden Home Decor
                            </option>
                            <option value="Wooden Utensils and Kitchenware" selected>
                            Wooden Utensils and Kitchenware
                            </option>


                            <option value="Jute Home Decor" selected>
                            Jute Home Decor
                            </option>
                            <option value="Jute Kitchenware & Utensils" selected>
                            Jute Kitchenware & Utensils
                            
                            </option>
                            <option value="Jute and Wooden Jewelry" selected>
                            Jute and Wooden Jewelry
                            </option>
                            <option value={subcategory_Name} selected>
                            {subcategory_Name}
                            </option>
                          </select>
                    </div>
                
                </div>
                <div className="md:flex mb-8 mx-auto">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> short description</span>
                        </label>
                        <label className="input-group">
                             <input type="text" name="short_description" placeholder="name" className="input input-bordered w-full" defaultValue={short_description}/>
                        </label>
                    </div>
                    
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <label className="input-group">
                             <input type="text" name="price" placeholder="price" className="input input-bordered w-full" defaultValue={price} />
                        </label>
                    </div>
                
                </div>
                
                <div className="md:flex mb-8 mx-auto">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> rating</span>
                        </label>
                        <label className="input-group">
                             <input type="text" name="rating" placeholder="name" className="input input-bordered w-full" defaultValue={rating} />
                        </label>
                    </div>
                                  
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> customization</span>
                        </label>
                        <label className="input-group">
                        <select
                            name="customization"
                            id="customization"
                            className="w-full p-2 border rounded-md focus:outline-[black]"
                            type="text"
                            placeholder="customization"
                          >
                            <option value="yes" selected>
                              yes
                            </option>
                            <option value="No" selected>
                            no
                            </option>
                            <option value={customization} selected>
                            {customization}
                            </option>
                            
                          </select>    
                        </label>
                    </div>
                
                </div>

                <div className="md:flex mb-8 mx-auto">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Processing Time</span>
                        </label>
                        <label className="input-group">
                             <input type="text" name="processing_time" placeholder="name" className="input input-bordered w-full"  defaultValue={processing_time} />
                        </label>
                    </div>
                          
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> StockStatus:</span>
                        </label>
                        <label className="input-group">
                         <label className="input-group">
                        <select
                            name="stockStatus"
                            id="stockStatus"
                            className="w-full p-2 border rounded-md focus:outline-[black]"
                            type="text"
                            placeholder="stockStatus"
                          >
                            <option value="In stock" selected>
                              yes
                            </option>
                          
                            
                            <option value="In stock" selected>
                            Made to Order
                            </option>
                            <option value={stockStatus} selected>
                            {stockStatus}
                            </option>
                           
                                       

                          </select>    
                        </label>
                        </label>
                    </div>
                
                </div>

              




                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Photo URL" className="input input-bordered w-full" defaultValue={image}/>
                        </label>
                        
                    </div>
                </div>
                <input type="submit" value="add" className="btn w-full bg-slate-600 text-[white] uppercase hover:red" />

            </form>
        </div>
  );
};

export default UpdateCrafts;

import UseAuthContext from "../../hooks/UseAuthContext";



const AddtoCraft = () => {
  const {user} = UseAuthContext()|| {};
  console.log(user);
  const handleAddtoCraft = (e) => {
    e.preventDefault();
    //console.log("didar");
    const itemName = e.target.itemName.value;
    const subcategory_Name = e.target.subcategory_Name.value;
    const short_description = e.target.short_description.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const customization = e.target.customization.value;
    const processing_time = e.target.processing_time.value;
    const stockStatus = e.target.stockStatus.value;
    // const userName = user.userName;
    const email = user.email;
    const displayName = user.displayName;
    const image = e.target.image.value;
    
    const info = { itemName, subcategory_Name, short_description, price, rating,customization,
      processing_time,stockStatus,displayName,email,image
   };

   console.log(info)
   fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body:JSON.stringify(info)
    })
      .then(res => res.json())
      .then(data => {
        if (data?.insertedId) {
        alert("bhai data insert hoice")
      }
    })
 

   
    
   
   
  }
  return (
    <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add Craft</h2>
            <form onSubmit={handleAddtoCraft}>
                {/* form name and quantity row */}
               { console.log(user)};
                <div className="md:flex mb-8 mx-auto">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Name</span>
                        </label>
                        <label className="input-group">
                             <input type="text" name="itemName" placeholder="name" className="input input-bordered w-full" />
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
                            <option value="Sub Category1" selected>
                              Sub Category1
                            </option>
                            <option value="Sub Category2" selected>
                            Sub Category2
                            </option>
                            <option value="Sub Category3" selected>
                              Sub Category3
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
                             <input type="text" name="short_description" placeholder="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <label className="input-group">
                             <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                
                </div>

                <div className="md:flex mb-8 mx-auto">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> rating</span>
                        </label>
                        <label className="input-group">
                             <input type="text" name="rating" placeholder="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> customization-</span>
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
                             <input type="text" name="processing_time" placeholder="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> stockStatus</span>
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
                            <input type="text" name="image" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="add" className="btn btn-block" />

            </form>
        </div>
  );
};

export default AddtoCraft;
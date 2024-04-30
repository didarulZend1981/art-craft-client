import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlinePreview } from "react-icons/md";

const CardSection = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allProduct')
          .then((res) => res.json())
          .then((data) => {
            setItem(data);
             
          });
      }, []);

      console.log(item);
  return (
    <div className="w-4/5 mx-auto">
        <h2 className="text-center mb-10 mt-10 uppercase text-cyan-500 text-[20px]">Card Section</h2>
        <div className="grid grid-cols-3 gap-8">
       

          {item.map((p, index) => (
          
          <div className="card lg:card-side bg-base-100 shadow-xl ">
          <figure><img src={p.image} alt="Album"/></figure>
              <div className="card-body">
              <h2 className="card-title">{p.itemName}</h2>
              <p>{p.short_description}</p>
              <div className="card-actions justify-end">
              {p.email} {p.displayName} {p.price}
              </div>
              
              <div className="card-actions justify-end">
              <Link to={`/CraftsDetails/${p._id}`} className="text-blue-500 hover:text-blue-700">
              <button className="btn btn-primary"><MdOutlinePreview /> Details
</button>
         </Link>
              </div>
              </div>
          </div>
             
           
         ))}


          
        </div>

      </div>
  );
};

export default CardSection;
import { useEffect, useState } from "react";
import ArtCraftItem from "../../components/ArtCraftItem/ArtCraftItem";
import { Link } from "react-router-dom";
import { MdOutlinePreview } from "react-icons/md";

const AllArtCraftItem = () => {
  const [item, setItem] = useState([]);
  console.log(item);
  useEffect(() => {
    fetch('https://b9a10-server-side-didarul-zend1981.vercel.app/allProduct')
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
         
      });
  }, []);
  return (
   <div className="min-h-[500px] pt-200px mt-[75px]">
         <div className="min-h-auto rounded-2xl shadow w-2/5 mx-auto border-red-800 border-2 p-5 text center">
     
    
     <div className="overflow-x-auto">
     <h2 className="w-full text-center tex-[24px]">All Craft Item</h2>
   <table className="table">
    
     {/* head */}
     <thead>
       <tr>
         <th>SL</th>
         
         <th>Name</th>
        <th>Price</th>
         <th>Stock</th>
         <th>Action</th>
        
       </tr>
     </thead>
     <tbody>
      
       {item.map((p, index) => (
           <tr key={index}>
             <td>{index+1}</td>
             <td>{p.itemName}</td>
             <td>{p.price}</td>
           
             <td>{p.stockStatus}</td>
             
             <td>
             <Link to={`/CraftsDetails/${p._id}`} className="text-blue-500 hover:text-blue-700">
             <MdOutlinePreview />
         </Link>
             </td>
             
           </tr>
         ))}
     </tbody>
   </table>
 </div>
     </div>

   </div>
   
  );
};

export default AllArtCraftItem;

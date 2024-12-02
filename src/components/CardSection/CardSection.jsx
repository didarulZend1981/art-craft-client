import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlinePreview } from "react-icons/md";
import Button from "../Button/Button"; 

const CardSection = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch('https://b9a10-server-side-didarul-zend1981.vercel.app/allProduct')
          .then((res) => res.json())
          .then((data) => {
            setItem(data);
             
          });
      }, []);

      console.log(item);
  return (
    <div className="w-4/5 mx-auto">
        <h2 className="text-center mb-10 mt-10 uppercase text-cyan-500 text-[20px]">Product </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-8">
       

         


          {item.map((p, index) => (
        
          <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative  hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
  <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 ">
    <img
      src={p.image}
      alt={p.itemName}
      className="h-full w-full object-contain"
    />
  </div>

  <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
    <div className="text-center">
      <h3 className="text-base font-bold text-gray-800">{p.itemName}</h3>
      <h4 className="text-lg text-blue-600 font-bold mt-2">{p.price}</h4>
    </div>

    <div className="flex justify-center space-x-1 mt-4">
          <Link to={`/CraftsDetails/${p._id}`} className="text-blue-500 hover:text-blue-700">
              
              


              <Button
        label="Add to Cart"
        Icon={MdOutlinePreview}
        
        className="bg-green-500 hover:bg-green-600"
      />
             
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
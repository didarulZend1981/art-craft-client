import React from 'react';


const CategoryCard = ({ label, image }) => {
  return (
    


    <div className="card w-full bg-base-100 shadow-xl border-solid border-2 border-[wheat]">
              <figure className="px-2 pt-1">
                <img src={image} alt={label} className="rounded-xl h-[100px]" />
              </figure>
              <div className="px-2 py-2 items-center text-center">
                <h2 className="">{label}</h2>
               
               
              </div>
          </div>



  );
};

export default CategoryCard;
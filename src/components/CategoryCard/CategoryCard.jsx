import React from 'react';


const CategoryCard = ({ label, image }) => {
  return (
    


    <div className="card w-full bg-base-100 shadow-xl border-solid border-2 border-[wheat]">
              <figure className="px-10 pt-10">
                <img src={image} alt={label} className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{label}</h2>
               
               
              </div>
          </div>



  );
};

export default CategoryCard;
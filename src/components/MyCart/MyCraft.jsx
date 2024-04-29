import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const MyCraft = ({craft}) => {
  // console.log(craft);
  const { _id,customization,email,displayName,image,itemName,price,processing_time, rating, short_description, stockStatus, subcategory_Name } = craft;
  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
          // 662e5da6c57feb2582fa99dc
          
            fetch(`http://localhost:5000/product/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    
                })

        }
    })
}
  return (
    <div>
       <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src="#" alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">Name: {itemName}</h2>
                    <p>{stockStatus}</p>
                    <p>{price}</p>
                    <p>{email}</p>
                    <p>{displayName}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        
                        <Link to={`../UpdateCrafts/${_id}`}>
                        <button className="btn">edit</button>
                        </Link>
                        
                        <Link to={`../CraftsDetails/${_id}`}>
                        <button className="btn">View</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-orange-500">X
                        </button>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MyCraft;
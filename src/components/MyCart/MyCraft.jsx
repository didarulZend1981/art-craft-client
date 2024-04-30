import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { RxUpdate } from "react-icons/rx";
import { MdDeleteForever } from "react-icons/md";
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

<div className="card lg:card-side bg-base-100 min-h-[300px] shadow-xl boreder-red-300 bottom-2">
          <figure><img src={image} alt="Album" className="w-[150px] h-[150px] p-[15px] rounded-lg"/></figure>
              <div className="card-body">
              <h2 className="card-title uppercase">{itemName}</h2>
              <p >price:{price}</p>
              <p>Rating:{rating}</p>
              <p>customization:{customization}</p>
              <p>Status:{stockStatus}</p>
              <div className="card-actions">
              
              <Link to={`../UpdateCrafts/${_id}`}>
                        <button className="btn btn-primary"><RxUpdate className="text-[30px]" /></button>
                        </Link>

              <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-primary bg-orange-500"><MdDeleteForever className="text-[30px] whitespace-pre hover:bg-yellow-600" />
                </button>

                {/* <Link to={`../CraftsDetails/${_id}`}></Link>
                          <button className="btn">View</button> */}
                        
              </div>
              </div>
          </div>



       

       
    </div>
  );
};

export default MyCraft;
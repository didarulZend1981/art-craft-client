import { useEffect, useState } from "react";
import MyCraft from "../../components/MyCart/MyCraft";
import UseAuthContext from "../../hooks/UseAuthContext";
import { useLoaderData } from "react-router-dom";

const MyCartList = () => {
  const { user } = UseAuthContext() || {};
  const [item, setItem] = useState([]);
  const loaded = useLoaderData();
  

  useEffect(() => {
    fetch(`http://localhost:5000/myProduct/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
         
      });
  }, [user]);

  return (
    <div className="w-4/5 mx-auto">
        
        <div className="grid grid-cols-3 gap-5">
        {
          item.map(craft => <MyCraft
            key={craft._id}
            craft={craft}
            
          >


          </MyCraft>)
        }
          </div>

        
    </div>
  );
};

export default MyCartList;
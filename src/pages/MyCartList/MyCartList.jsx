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
    <div className="pt-10">
        {item.length}


        {
          item.map(craft => <MyCraft
            key={craft._id}
            craft={craft}
            
          >


          </MyCraft>)
        }
    </div>
  );
};

export default MyCartList;
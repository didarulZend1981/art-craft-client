import { useEffect, useState } from "react";
import ArtCraftItem from "../../components/ArtCraftItem/ArtCraftItem";
import { Link } from "react-router-dom";


const AllArtCraftItem = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/allProduct')
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
         
      });
  }, []);
  return (
    <div>
      {item.length}
    <ArtCraftItem></ArtCraftItem>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td></td>
      </tr>
      {/* row 2 */}
      {item.map((p, index) => (
          <tr key={index}>
           
            <td>{p.itemName}</td>
            <td>{p.price}</td>
            <td></td>
            <Link to={`/CraftsDetails/${p._id}`} className="text-blue-500 hover:text-blue-700">
          View Details
        </Link>
          </tr>
        ))}
    </tbody>
  </table>
</div>
    </div>
  );
};

export default AllArtCraftItem;

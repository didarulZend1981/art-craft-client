
import CategoryCard from "../CategoryCard/CategoryCard"; 
const CategorySection = () => {
  return (
 
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <CategoryCard label="Wooden Furniture & Sculptures" image="https://i.ibb.co.com/10Ms7yh/Wooden-Furniture-Sculptures.webp"/>
          

          <CategoryCard label="Jute and Wooden Jewelry!" image="https://i.ibb.co.com/72SMyQ4/Jute-and-Wooden-Jewelry.webp"/>

          <CategoryCard label="Wooden Home Decor!" image="https://i.ibb.co.com/LksLprT/Wooden-Home-Decor.webp"/>

          <CategoryCard label="Wooden Utensils and Kitchenware!" image="https://i.ibb.co.com/nQc6SXb/Wooden-Utensils-and-Kitchenware.webp"/>
          <CategoryCard label="Jute Home Decor!" image="https://i.ibb.co.com/bPvh6xJ/Jute-Home-Decor.webp"/>

          <CategoryCard label="Jute Kitchenware & Utensils" image="https://i.ibb.co.com/r4hSmQX/Jute-Kitchenware-Utensils.webp"/>
           
    </div>
  
  );
};

export default CategorySection;
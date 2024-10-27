import { useState } from "react";
import CategoriesDisplay from "../components/CategoriesDisplay";

import { 
    ProductsPage,
 } from "../styles/ProductsStyles";

export default function Products({categoriesArray}) {
  const [selectedCategory, setSelectedCategory] = useState({})
  // don't know if I'll use this yet
  const [isShown, setIsShown] = useState(false)

  function handleCategorySelect(categoryObj){
    setSelectedCategory(categoryObj)
    console.log(categoryObj)
  }
  return (
    <ProductsPage>
      <CategoriesDisplay categoriesArray={categoriesArray} handleCategorySelect={handleCategorySelect}/>
      
    </ProductsPage>
  );
}

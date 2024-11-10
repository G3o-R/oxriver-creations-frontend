import { useState, useEffect, useRef } from "react";
import CategoriesDisplay from "../components/CategoriesDisplay";
import { ProductsPage } from "../styles/pageStyles/ProductPageTwoStyles";

export default function ProductPageTwo({ categoriesArray }) {
  const [selectedCategory, setSelectedCategory] = useState({
    id: "",
    image: "",
    name: "",
    sub_categories: [],
  });
  const [subCategoryID, setSubCategoryID] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  function handleCategorySelect(categoryObj) {
    setSelectedCategory(categoryObj);
  }

  function handleProductSelect(selectedsubCategoryID) {
    setSubCategoryID(selectedsubCategoryID);
  }

  useEffect(() => {
    if (categoriesArray) {
      setSelectedCategory(categoriesArray[0]);
      setSubCategoryID(categoriesArray[0].sub_categories[0].id);
    }
  }, []);

  return (
    <ProductsPage>
      <CategoriesDisplay
        categoriesArray={categoriesArray}
        handleCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />

    </ProductsPage>
  );
}

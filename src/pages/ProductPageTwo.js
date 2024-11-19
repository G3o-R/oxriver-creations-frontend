import { useState, useEffect, useRef } from "react";
import CategoriesDisplay from "../components/CategoriesDisplay";
import { 
  ProductsPage,
  HeaderContainer,
  HeaderWrapper
} from "../styles/pageStyles/ProductPageTwoStyles";
import ProductsSection from "../components/ProductsSection";

export default function ProductPageTwo({ categoriesArray }) {
  const [selectedCategory, setSelectedCategory] = useState({
    id: "",
    image: "",
    name: "",
    sub_categories: [],
  });

  function handleCategorySelect(categoryObj) {
    setSelectedCategory(categoryObj);
  }

  useEffect(() => {
    if (categoriesArray) {
      setSelectedCategory(categoriesArray[1]);
    }
  }, []);

  return (
    <ProductsPage>
      <CategoriesDisplay
        categoriesArray={categoriesArray}
        handleCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />

      {selectedCategory.id && (
        <>
          <HeaderWrapper>
            <HeaderContainer>
              <h1>{selectedCategory.name}</h1>
            </HeaderContainer>
          </HeaderWrapper>
          <ProductsSection subCategoriesArr={selectedCategory.sub_categories} />
        </>
      )}
    </ProductsPage>
  );
}

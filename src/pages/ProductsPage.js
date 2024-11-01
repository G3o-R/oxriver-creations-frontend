import { useState, useEffect, useRef } from "react";
import CategoriesDisplay from "../components/CategoriesDisplay";
// import { motion } from "framer-motion";
import {
  DynamicContainer,
  ProductsPage,
  Grid,
  HeaderWrapper,
  HeaderContainer,
  ContentWrapper,
  ContentContainer,
  TextWrapper,
  TextContainer,
} from "../styles/ProductsStyles";
import ProductCard from "../components/ProductCard";
import ProductsSlider from "../components/ProductsSlider";

export default function Products({ categoriesArray }) {
  const [selectedCategory, setSelectedCategory] = useState({
    id: "",
    image: "",
    name: "",
    products: [],
  });
  const [productID, setProductID] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  function handleCategorySelect(categoryObj) {
    setSelectedCategory(categoryObj);
  }

  function handleProductSelect(selectedProductID){
    setProductID(selectedProductID)
  }

  useEffect(() => {
    if (categoriesArray) {
      setSelectedCategory(categoriesArray[0]);
      setProductID(categoriesArray[0].products[0].id)
    }
  }, []);
  let productToDisplay = selectedCategory.products.find((product) => product.id === productID)

  return (
    <ProductsPage>
      <HeaderWrapper>
        <HeaderContainer>
          <h1>Products Page</h1>
        </HeaderContainer>
      </HeaderWrapper>
      <CategoriesDisplay
        categoriesArray={categoriesArray}
        handleCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />
      <ContentWrapper>
        <ContentContainer>
          <TextWrapper>
            <TextContainer>
              <p>For orders or other inquiries contact us at <span>oxriver@gmail.com</span></p>
            </TextContainer>
          </TextWrapper>
          {/* products will go below */}
          <ProductsSlider productsArray={categoriesArray[0].products}/>
        </ContentContainer>
      </ContentWrapper>
    </ProductsPage>
  );
}

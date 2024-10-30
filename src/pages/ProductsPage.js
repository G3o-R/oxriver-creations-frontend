import { useState, useEffect, useRef } from "react";
import CategoriesDisplay from "../components/CategoriesDisplay";
import { motion } from "framer-motion";
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

export default function Products({ categoriesArray }) {
  const [selectedCategory, setSelectedCategory] = useState({
    id: "",
    image: "",
    name: "",
    products: [],
  });
  const [productID, setProductID] = useState(0);
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  function handleCategorySelect(categoryObj) {
    setSelectedCategory(categoryObj);
  }

  function handleProductSelect(selectedProductID){
    setProductID(selectedProductID)
  }

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.scrollHeight);
    }
  }, [selectedCategory]);

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
          {selectedCategory.products.length > 0 ? <ProductCard
            productData={selectedCategory.products.find((product) => product.id === productID)}
            type="display"
          />: null}
          <motion.div
            animate={{ height: containerHeight }}
            transition={{ duration: 0.5 }}
          >
            <DynamicContainer ref={containerRef}>
              <Grid>
                {selectedCategory?.products.map((product) => (
                  <ProductCard productData={product} handleProductSelect={handleProductSelect} type="small" />
                ))}
              </Grid>
            </DynamicContainer>
          </motion.div>
        </ContentContainer>
      </ContentWrapper>
    </ProductsPage>
  );
}

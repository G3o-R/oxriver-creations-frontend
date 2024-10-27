import { useState, useEffect, useRef } from "react";
import CategoriesDisplay from "../components/CategoriesDisplay";
import { motion } from "framer-motion";
import { 
  DynamicContainer,
  Item,
  ProductsPage,
  Grid
} from "../styles/ProductsStyles";
// import { Grid } from "swiper/modules";

export default function Products({ categoriesArray }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  function handleCategorySelect(categoryObj) {
    setSelectedCategory(categoryObj);
  }

  // Adjust height when selectedCategory changes
  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.scrollHeight);
    }
  }, [selectedCategory]);

  return (
    <ProductsPage>
      <CategoriesDisplay categoriesArray={categoriesArray} handleCategorySelect={handleCategorySelect} />
      
      <motion.div
        style={{ overflow: "hidden" }}
        animate={{ height: containerHeight }}
        transition={{ duration: 0.5 }}
      >
        <DynamicContainer ref={containerRef}>
          <Grid>
            {selectedCategory?.products.map((product) => (
              <Item key={product.id}>{product.id}</Item>
            ))}
          </Grid>
        </DynamicContainer>
      </motion.div>
    </ProductsPage>
  );
}

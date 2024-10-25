import ProductCard from "../components/ProductCard";
import { 
    ProductsContainer,
    ProductsPage,
    ProductsWrapper,
    StyledGrid,
 } from "../styles/ProductsStyles";

export default function Products({ productsArray }) {
    console.log(productsArray)
  const orientations = ["wide", "small"];

  const productsToDisplay = productsArray.map((product) => {
    // Generate a random index to pick an orientation
    const randomIndex = Math.floor(Math.random() * orientations.length);
    const orientation = orientations[randomIndex];

    return (
      <ProductCard
        key={product.id}
        productData={product}
        orientation={orientation}
      />
    );
  });

  return (
    <ProductsPage>
      <ProductsWrapper className="wrapper">
        <ProductsContainer>
          <StyledGrid>
            {productsToDisplay}
          </StyledGrid>
        </ProductsContainer>
      </ProductsWrapper>
    </ProductsPage>
  );
}

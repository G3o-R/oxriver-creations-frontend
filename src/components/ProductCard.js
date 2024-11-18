import { useState } from "react";
import { createPortal } from "react-dom";
import {
  CardContainer,
  CardWrapper,
  ImageContainer,
  ImageWrapper,
  ProductContainer,
} from "../styles/ProductCardStyles";
import ProductOverlayDisplay from "./ProductOverlayDisplay";

export default function ProductCard({ productPairData, type = "" }) {
  const [isActive, setIsActive] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({

  })

  const sliderContainer = document.getElementById("slider-container")

  function handleProductSelect(product){
    setIsActive(true)
    setSelectedProduct(product)
  }
  const productsToDisplay = productPairData.map((product) => (
    <ProductContainer key={product.id} className="product-container" onClick={()=>handleProductSelect(product)}>
      <ImageWrapper>
        <ImageContainer>
          <img src={product.cover_photo} alt="Product Cover Photo" />
        </ImageContainer>
      </ImageWrapper>
    </ProductContainer>
  ))

  return (
    <>
      <CardWrapper>
        <CardContainer>
          {productsToDisplay}
        </CardContainer>
      </CardWrapper>

        { isActive ? createPortal (<ProductOverlayDisplay
          isActive={isActive}
          productData={selectedProduct}
          onClose={() => setIsActive(false)}
        />, sliderContainer) : null }
    </>
  );
}

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
  console.log(productPairData)

  // const sliderContainer = document.getElementById("slider-container")
  const productsToDisplay = productPairData.map((product) => (
    <ProductContainer className="product-container">
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

        {/* { isActive ? createPortal (<ProductOverlayDisplay
          isActive={isActive}
          productData={productData}
          onClose={() => setIsActive(false)}
        />, sliderContainer) : null } */}
    </>
  );
}

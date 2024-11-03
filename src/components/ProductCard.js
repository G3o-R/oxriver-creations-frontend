import { useState } from "react";
import { createPortal } from "react-dom";
import {
  CardContainer,
  CardWrapper,
  ImageContainer,
  ImageWrapper,
} from "../styles/ProductCardStyles";
import ProductOverlayDisplay from "./ProductOverlayDisplay";

export default function ProductCard({ productData, type = "" }) {
  const [isActive, setIsActive] = useState(false);

  const sliderContainer = document.getElementById("slider-container")

  return (
    <>
      <CardWrapper
        className={`product-card ${type} ${productData.id}`}
        onClick={type === "category" ? null : () => setIsActive(!isActive)}
      >
        <CardContainer>
          <ImageWrapper>
            <ImageContainer>
              <img
                src={productData.cover_photo}
                alt="random text here"
                loading="lazy"
              />
            </ImageContainer>
          </ImageWrapper>
        </CardContainer>
      </CardWrapper>

        { isActive ? createPortal (<ProductOverlayDisplay
          isActive={isActive}
          productData={productData}
          onClose={() => setIsActive(false)}
        />, sliderContainer) : null }
    </>
  );
}

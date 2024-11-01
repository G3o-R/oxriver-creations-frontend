import {
  CardContainer,
  CardWrapper,
  ImageContainer,
  ImageWrapper,
} from "../styles/ProductCardStyles";

export default function ProductCard({
  productData,
  type = "",
}) {
  
  return (
    <>
      <CardWrapper className={`product-card ${type} ${productData.id}`}>
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

      
    </>
  );
}
